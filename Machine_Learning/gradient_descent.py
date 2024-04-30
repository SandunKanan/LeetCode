
def get_minimizer(iterations: int, learning_rate: float, init: int) -> float:
    # Implement an iterative approximation algorithm
    # Through Gradient Descent
    # iterations >= 0
    # learning_rate lr: 0 < lr < 1
    # init (initial guess)

    # Example: get minimizer(10, 0.01, 5)
    # Output: 4.08536

    # Derivative of x^2 = 2x
    # Formula: -1 * learning_rate * 2*x, x is the current value

    # --- Pseudocode ---
    # Start at 5
    # Loop 'iterations' n times, for each:
        # calculate gradient * -1 * learning rate
        # subtract calculated value from current value
    # return nth value, to 5 decimal places

    # --- Solution ---
    curr = init
    for i in range(iterations):
        gradient = 2*curr
        leap = learning_rate * gradient
        curr -= leap
    return round(curr, 5)

if __name__ == "__main__":
    print(get_minimizer(iterations=10, learning_rate=0.01, init=5))
