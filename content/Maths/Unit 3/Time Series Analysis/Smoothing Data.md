---
alias: Moving Averages, Centered Moving Averages
---

We smooth data so that we can use [[Correlation Coefficient]]] to determine how strong it is.

This only works on [[Seasonal Pattern]]s (regular).
This **will not work** on [[Cyclic Pattern]]s that are *irregular*
If there is a *pattern*, the size of the *moving average* should **match the cycle length**, this will remove seasonal variations in the data.

 
You can see that the original data, (black) is very far from the line of best fit (purple). The smoothed data (blue) can actually show how *reliable* the cycle is.

### Moving Averages (Odd Cycle Length)
The length of the averages depends on the length of the cycle.
e.g. cycle of 3 days = 3 point moving average'


### Centered Moving Averages (Even Cycle Length)

Do a regular moving averages, however then "*weight*" the 1st quarter half of its original worth, and add a half of a 5th number which will make it an odd number giving you a center.
**remember if the cycle of the time series is x THE CENTERED MOVIGN AVERAGE IS X assuming its even**. *even if it does not say "centered" moving averages explicitly*

### Seasonal Indicies
[[Seasonal Index]]es can be useful for [[Types of Time Series#Seasonal Trend|Seasonal Trends]], they are generally more reliable with larger datasets, though less specific. They allow you to take out / "divide out" the *seasonality* as a Seasonal Indicy, (% value), to create a smoothed "Deseasonalised" dataset that a Regression Line can be used on to predict future values. You can then re-seasonalise it by timesing the de-seasonalised value by the Seasonal Index.
>[!warning]
>Extrapolations from Seasonal Indicies are only considered "reliable" for a single cycle out of the data.



