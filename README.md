## Changes

**IMPORTANT**
Strictly do the development using an android device or emulator..................
and create a seperate branch for dev.

### PLAN OF ACTION

1. Finalize the login screen by implementing all necessary features, including session state management.
2. Complete the employee management functionality.

**Login Screen & Signup Screen:**

1. Ensure that validation only occurs after the form is submitted, as it currently triggers on every keystroke and background touches.
2. Adjust the screen layout when a field is filled, preventing the keyboard from obstructing the form fields.
3. Utilize types for variables to enhance clarity and usability.

**General Issues:**

1. Custom components are overly coupled, which may lead to difficulties in the future.
2. Custom components should fulfill their intended purpose correctly. For instance, the FormField component currently displays its error message in the parent component instead of within the FormField itself.
