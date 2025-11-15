This project solves the calibration problem using JavaScript by testing all possible combinations of `+` and `*` between the numbers of each equation.  
The key requirement is to evaluate expressions strictly **from left to right**, without applying normal operator precedence.


#  Logic of code

1. Read each line from `input.txt` file.
2. *Split* the line into:
   - The target value (left side of the colon)
   - The list of numbers (right side)
3. Use a (recursive function) to try all combinations of operators between the numbers:
   - At each step, choose either `+` or `*`
   - Evaluate the expression step-by-step from left to right
4. If any combination produces the target value, the equation is considered valid.
5. Add all valid target values to a total sum.
6. Print the final calibration result.


The main idea is:

- Start with the first number.
- Recursively apply:
  - current + next  
  - or current * next  
- Continue until all numbers are consumed.
- If the result equals the target → success.

#  Running the Program

Use Node.js to run the script:

```bash
node calibration result Task.js
