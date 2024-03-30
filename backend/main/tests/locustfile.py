from locust import HttpUser, SequentialTaskSet, task, between
import random
import string
import json

def random_email():
    return f"{random_string(7)}@gmail.com"

def random_string(length=10):
    return ''.join(random.choice(string.ascii_letters) for i in range(length))

class UserTasks(SequentialTaskSet):
    
    def on_start(self):
        """ On start, register and login the user """
        self.token = None
        self.user_register()
        self.user_login()

    def user_register(self):
        """ Simulates user registration with random details """
        email = random_email()
        response = self.client.post("/api/user/register/", json={
            "first_name": "Test",
            "last_name": "User",
            "email": email,
            "phone": "1234567890",
            "password": "passworD1",
            "tc": True
        })

        if response.status_code == 201:
            self.email = email
        else:
            self.email = None

    def user_login(self):
        """ Simulates user login and token retrieval """
        if self.email:
            response = self.client.post("/api/user/login/", json={
                "email": self.email,
                "password": "passworD1"
            })
            if response.status_code == 200:
                self.token = response.json().get('access')

    @task
    def add_appointment(self):
        if self.token:
            self.client.post("/api/user/AddAppointment/", json={
                "Title": "Meeting with client",
                "Add_Address": "123 Test St, Test City",
                "Date": "2024-03-30",
                "Time": "14:00"
            }, headers={"Authorization": f"Bearer {self.token}"})

    @task
    def get_appointments_by_date(self):
        if self.token:
            self.client.get("/api/user/AddAppointment/2024-03-30/", headers={"Authorization": f"Bearer {self.token}"})

    @task
    def delete_appointment(self):
        if self.token:
            # You will need to ensure that this appointment ID exists and is correct
            appointment_id = 1
            self.client.delete(f"/api/user/delete_appointment/{appointment_id}/", headers={"Authorization": f"Bearer {self.token}"})

    @task
    def delete_account(self):
        if self.token:
            self.client.delete("/api/user/delete_account/", headers={"Authorization": f"Bearer {self.token}"})

    @task
    def predict_sentiment(self):
        # This does not need authentication from the provided code
        self.client.post("/sentiment/predict/", json={'sentence': 'I love sunny days!'})

class WebsiteUser(HttpUser):
    tasks = [UserTasks]
    wait_time = between(1, 5)
