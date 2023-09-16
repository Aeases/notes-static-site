### Definition
>[!cite] Compound Interest w/ Sequences
>Unlike simple interest, [[Compound Interest]] can be expressed as a [[Geometric Sequence]], and increases Exponetially.

#### Recursive
$$T_{n+1}=rTn+d$$
Where:
$r$ = Investment Rate increased by 1, e.g. *5% = 1.05* instead of 0.05
$d$ = Amount Added every Term, e.g. $200 added at the end of every Term after Interest is applied.

#### Recursive (For finding *r*)
$$T_{n+1}=(1+\frac{r}{t})T_n$$
Where: 
$r$ = Ratio
$t$ = Time Period, e.g. *4* for quarters, *12* for months, *26* for fortnight, *1* for years, all these are for when $r$ is defined *per annum*, (**p.a.**)
e.g: $T_{n+1}=(1+\frac{0.042}{26})T_n$

#### Explicit (Not sure if right)
$$T_n=a*(1+\frac{r}{\text{TIme Period}})^{n-1}$$
#### Finding Interest over a life-time
$$x-P-d$$
Where:
$x$ = Term where investment ends
$P$ = Principal
$d$ = Amount taken / putting in each term (e.g. +200 for added 20 each term for 10 terms, or -200 for removed 20 each term for 20 terms.)


### Examples

>[!question]
>Shaun plans to travel overseas in *June 2020* so he decides to save for his trip by making** monthly deposits of $250** into an investment account. This account accrues interest at the rate of **8.4% p.a.** **compounded *monthly***. Shaun **opens this account on the 1st July 2017**, with a **deposit of $250** with *all future deposits being made on the first day of the month.*
>
>How much will be in his account on the **31st May 2020**.
>
><hr>
>
>$1.007 = (0.084 / 12)+1$
>> Divided by twelve so that the interest is respective to *every month*, therefore each term in the following sequence is equal to one month.
>
$$T_{n+1} = T_n \times 1.007 + 250$$
[Alternative Formulas](https://i.imgur.com/l1yUABu.png)
>
>>[!multi-column]
>>
>>>[!failure] Starting at 1 | *$T_1 = 250$*
>>>
>>>***1*** | July 2017  
>>>***2*** | August 2017  
>>>***3*** | September 2017  
>>>***4*** | October 2017  
>>>***5*** | November 2017  
>>>***6*** | December 2017  
>>>***7*** | January 2018  
>>>***8*** | February 2018  
>>>***9*** | March 2018  
>>>***10*** | April 2018  
>>>***11*** | May 2018  
>>>***12*** | June 2018  
>>>***13*** | July 2018  
>>>
>>> [...]
>>>
>>> ***34*** | April 2020 - *9559*.20
>>> ***35*** | ***May 2020*** - *9876*.1
>>> **36** | **June 2020** - *10195*.25
>>> ***37*** | July 2020 - *10516*.62
>>
>>>[!success] Zero-indexed | *$T_0 = 250$*
>>>
>>>***0*** | July 2017  
>>>***1*** | August 2017  
>>>***2*** | September 2017  
>>>***3*** | October 2017  
>>>***4*** | November 2017  
>>>***5*** | December 2017  
>>>***6*** | January 2018  
>>>***7*** | February 2018  
>>>***8*** | March 2018  
>>>***9*** | April 2018  
>>>***10*** | May 2018  
>>>***11*** | June 2018  
>>>***12*** | July 2018  
>>>
>>>[...]
>>>
>>>***33*** | April 2020 - *9559*.20
>>>***34***  | May 2020 - *9876*.1
>>>**35** | **June 2020** - *10195*.25
>>>***36*** | July 2020 - *10516*.62
>
Therefore, to get the answer, you have to find **$T_{35}$**, since it represents June, which is **35** *months after July 2017*, The date we need to find is the *31st May 2020*, which is essentially *June* but without $250 added.
Therefore:
>
$T_{35} = 10915.25$
>
10915.25 - 250 = **9945.25**




<hr>

>[!bug]- "Question"
*36% p.a, Compounded monthly* $1600 Initial, $65 Repayments
>
$T_{n+1}=(1+\frac{0.36}{12}T_n = -65$, $T_0=1600$
>
$T_{45}=23.76$
$T_{46}=-40.52$

>[!question]
*$1000 Invested*, **7.2% p.a compounded *monthly***, *$200 added at the end of each month after interest.*
>
*$T_n+1=1.006\times a_n + 200$, $T_0=1000$*
**OR**
*$(1+\frac{0.006}{1}) \times a_n+200$, $T_0=1000$*
$T_1=1206$
$T_2=1413.2$
$T_3=1621.7$
>
>>[!failure]- Question where explicit Compound Interest is applied wrong.
>>$$T_n=1000 \times(1+\frac{0.006}{1})^n+(200 \times n)$$
>>
>>$T_1=1206$
>>$T_2=1412$ 
>>$T_3 = 1618.1$ 
