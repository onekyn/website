---
title: Understanding Linear Regression
description: A simple introduction to one of the most fundamental ML topics
---

Linear regression models the relationship between variables using a linear equation:

$a_2 = a_0 + a_1$

Here's a Python implementation:

```python
import numpy as np

X = np.array([1, 2, 3, 4])
y = np.array([2, 4, 5, 4])
beta_1, beta_0 = np.polyfit(X, y, 1)
print(f"Slope: {beta_1}, Intercept: {beta_0}")
```

This is just a fake blog post to see if everything works as expected :D
