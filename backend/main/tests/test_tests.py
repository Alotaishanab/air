import unittest

def print_all_tests(suite):
    if hasattr(suite, '__iter__'):
        for x in suite:
            print_all_tests(x)
    else:
        print(suite)

test_loader = unittest.TestLoader()
test_suite = test_loader.discover('.')
print_all_tests(test_suite)
