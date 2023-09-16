I am trying to find the weekly payment on a 5 year, loan, thus
$$
\begin{aligned}
N &= \boxed{260} = 5_{\text{Years}} \times 52_{Weeks} \\
I &= 8.49\% \\
PMT &= \quad ? \\
P/Y &= 52_{\text{Weekly Payments Per. Year}} \\
C/Y &= 365_{\color{orange}\text{Assumed Compounded Daily?}}
\end{aligned}
$$
 
### Why does this end after 260 Periods
![[Pasted image 20230818225707.png|500]]

![[Pasted image 20230818231521.png|500]]

### ~~But this ends after 263 Periods?~~
~~Both have $N = 260$ and a $FV=0$, so shouldn't both reach period 0 by term 260?~~
![[Pasted image 20230818232726.png]]

![[Pasted image 20230818232202.png]]

Fond on **page 153** the book says
  
> a) *Writing a reucurrence relation to answer questions where the number of payments per year is greater than the frequency of compounding is beyond the scope of this course. Students however are expected to solve such problems using the financial application of the calculator*.

***Still, is 365 a reasonable assumption?***
I cant find much on compounding periods for loans, but if we can't use P/Y without a C/Y that is either equal to, or greater than it, $PY=365$ seems like it makes the most sense?