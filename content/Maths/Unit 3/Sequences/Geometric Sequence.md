---
aliases: Geometric Relation
---
### Definition
>[!cite] Geometric Sequence
>A Sequence where there is a common ratio between the values, it is a [[First Order Linear Recurrence Relation]], it is not linear, and can't be steady-state (except when r = 0 technically)

#### (*[[Explicit Sequences|Explicit]]*) Geometric Sequence Formula
$$T_n=ar^{(n-1)}$$
Where: n
$a$ is a *Absolute Value / **first term*** ($T_1$)
$r$ = *Ratio*
$n$ = *Current Term*
	or $T_n=ar^n$ if $a = T_0$ 
#### (*[[First Order Linear Recurrence Relation|First-Order Recurrance]]*) Geometric Sequence Formula
$$T_{n+1}=rT_n$$
Where:
r = *Ratio*

*If this is true, it has a common ratio:*
$\frac{T_2}{T_1}=\frac{T_3}{T_2}$

> [!info] Geometric Sequence - Graphed
> 
> ```desmos-graph
> left=-100; right=100
> ---
> y=1*1.1^{(x-1)}
> y=1*2^{(x-1)}
> y=1*1.01^{(x-1)}
> ```
> 

>[!note] Example
Given Ratio: *$200,160,128,102.4$*
$\frac{160}{200}$ = 0.8, and $\frac{102.4}{128}=0.8$, both equal 0.8, therefore it is a *Geometric Sequence*

>[!warning] Querks
>### Alternating between Positive and Negative
>If the value of $r$ is negative, then the sequence will alternate between positive and negative values, for example:
>$$Tn=2 \times -3^n$$
>
>### $T_1$ & $T_0$ Dibocle
>$T_n=ar^{n-1}$ This should be used when dealing with $T_1$ as starting value
>
>$T_n=$$T_0$$r^{n}$ This should be used when dealing with $T_0$ as starting value
>
>This makes sense by looking at 'n' in $T_n$, if you are finding the *n'th term*, in other words $T_n$ then in an equation starting at $T_1$ you must take 1 from $n$ to make the equation correlate with the $n$ value since, *originally* the power, of $r^1$ would correlate to $T_1$ ($1$ being $n$) which usually should be the starting value prior to any alterations, however $r^1$ would cause $T_1$ to be multiplied by the r value. This is offset by $n-1$, causing it to look something like this $T_1$ = $r^0$, $T_2$  = $r^1$, $T_3$ = $r^2$ and so on.
>
>However $T_0$ does not require this alteration, since *$T_0$ = $r^0$* (**beause both zeros are derived from $n$**), $T_1$ = $r^1$, $T_2$ = $r^2$ and so on. it is okay for $T_1$ and $r^1$ to correlate here since we expect $T_1$ to be altered, since it is not the orign value.

^ad3bd8






