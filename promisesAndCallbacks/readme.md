
# **Synchronous (Blocking code)** #
Means the code runs in a particular sequence of instructinos given in the program. Each instruction waits for the previous instruction to complete it's execution.

- Code runs line by line, one after another.
- Each operation must complete before the next one starts.
- If an operation takes time, it blocks the execution of the rest of the program.

# **Asynchronous (Non-Blocking code)** #
Due to synchronous programming, sometimes important instructions get blocked due to some previous instructions, which causes a delay in the UI. Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

- JavaScript doesn't wait for an operation to complete before moving to the next one.
- Time-consuming tasks (like API calls, file reading, database queries, etc.) execute in the background.
- Once they are done, JavaScript comes back to handle the result.



# **Promises and CallBacks** #

**Promises =>** A Promise is an object representing the eventual completion or failure of an asynchronous operation. 