To get a pre-tax yearly income I can calculate the weekly wage with an assumed number of working hours per week, I can then work out my yearly wage ($Y$) by multiplying the weekly wage by the number of weeks in the year.

###### Special Rates
I will include in the weekly wage the regular, re-occuring Benefits I accrue within each weekly period, this being the penalty benefits for working on Saturdays & Sundays.

Below is a table depicting my chosen Hourly worktime, alongside the Penalty Rates where applicable.

| Day       | Hours | Penalty Benefit |
| --------- | ----- | --------------- |
| Monday    | 4h    | 100%            |
| Friday | 4h    | 100%            |
| Saturday   | 6h    | 150%            |
| Sunday          | 4h      | 200%                 |
Given that I'm paid bi-weekly, and earn an hourly wage of $25, 
I can use this formula to 
$$(W \times H)+(1.5W \times H_{Sat})+(2W \times H_{Sun})=Y_{Weekly}$$
Where;
W = Hourly **W**age
$H$ = Weekday **H**ours worked | $8h=(4h_{Mon}+4h_{Fri})$
$H_{\text{Sat}}$ = **Sat**urday **H**ours worked | $6h$
$H_{\text{Sun}}$ = **Sun**day **H**ours worked | $4h$

Plugging in my values gets me;

$$
\begin{aligned} 
(W \times H)+(1.5W \times H_{Sat})+(2W \times H_{Sun}) &= Y_{Week} \\ 
(25 \times 8) + (25 \times 1.5 \times 6) + (25 \times 2 \times 4) &= Y_{Week} \\
200 + 225 + 200 &= Y_{Week} \\
625 &= Y_{Week}
\end{aligned}
$$
Thus my weekly income is **$625**.
Next I can turn this weekly income into a Yearly Income, pre-tax, and pre-public holiday benefits by just multiplying it by 52.14, as follows **$625 \times 52.14=32587.5$**. Thus, $Y=32587.5$, where $Y$ is Yearly Income.

> [!bug]- Public Holidays - Archived
> ###### Public Holidays
> Now for public holidays, the public holiday rate is similar to the Penalty Payments calculated in the weekly payments, *however*, since they only occur sparcisely, and in no particular pattern, they must be added on after.
> According to [this government website](https://www.commerce.wa.gov.au/labour-relations/public-holidays-western-australia), there are 11 public holidays recognised per year in western Australia, each one consistently provides a 250% income boost. Personally, I wouldn't like to work on New Years, Christmas, or Boxing day, since I'd rather be up with Family, thus I'll count 8 Public Holidays as working days, on which I'll work 8 hours, despite whether if it's a Weekend or Weekday since University doesn't run on Public Holidays.
> Of the first year, there is only one day that is a saturday, thus the rest are weekdays,
> 
> $$32587.5 + (-25 \times $$
> 

##### Wage Growth

According to the [Australia Bureau of Statistics](https://www.abs.gov.au/media-centre/media-releases/wages-increase-08-cent-june-quarter#:~:text=The%20Wage%20Price%20Index%20(WPI,wages%20grew%200.8%20per%20cent.), Wage Growth is averaged at around **3.6%**, if we assume that this is maintained throughout the next 5 years, we can construct a Explicit Geometric Sequence, where $n$ represents how many year's it has been since we took on the loan.
$$T_{n} = 32587.5 \times 1.036^{n-1}$$
![[Pasted image 20230817212347.png]]
Full Values;
$$
\begin{aligned}
T_1 &= \$32587.5 \\
T_2 &= \$33760.65 \\
T_3 &= \$34976.03 \\
T_4 &= \$36235.17 \\
T_5 &= \$37539.64 \quad (\$37539.636) 
\end{aligned}
$$

>[!warning]
>re-look at dates to make specific estimate

# Archive

| Car                    | Cost    | Age |
| ---------------------- | ------- | --- |
| Kia Cerato             | $27,890 | 0   |
| 2017 Mitsubishi Lancer | $19,000 | 6   |
| 2015 Suzuki Swift GL   | $10,990 | 8   |

#### Beyond Bank (Low Rate Loan)
Fixed Compensation Rate: 8.27%
Maximum Age: 8

>[!success]- Kia Cerato - $\sum \text{Interest}$ = $5931.93$ 
>
>Classpad - Working out Payments
>![[Pasted image 20230819170736.png]]
>$PMT=-130.084309$
>Classpad - Finding $\sum$ of Interest
>![[Pasted image 20230819171152.png]]
>$\sum INT = -5931.920346$

>[!success]- 2017 Mitsubishi Lancer - $\sum \text{Interest}$ = $4041.11$ 
>
>Classpad - Working out Payments
>![[Pasted image 20230819171448.png]]
>$PMT=-88.61964401$
>Classpad - Finding $\sum$ of Interest
>![[Pasted image 20230819171549.png]]
>$\sum INT = -4041.107442$

>[!success]- 2015 Suzuki Swift GL - $\sum \text{Interest}$ = $2337.47$ 
>
>Classpad - Working out Payments
>![[Pasted image 20230819171659.png]]
>$PMT=-51.25946777$
>Classpad - Finding $\sum$ of Interest
>![[Pasted image 20230819171738.png]]
>$\sum INT = -2337.461621$

#### Beyond Bank (Special Offer)
Fixed Compensation Rate: 6.36%
Max Age: 2

>[!success]- Kia Cerato - $\sum \text{Interest}$ = $4538.98$ 
>
>Classpad - Working out Payments
>![[Pasted image 20230819172101.png]]
>$PMT=-124.7268416$
>Classpad - Finding $\sum$ of Interest
>![[Pasted image 20230819172734.png]]
>$\sum INT = -4538.9767$

>[!failure]- 2017 Mitsubishi Lancer - $\sum \text{Interest}$ = $3092.17$ 
>
>Classpad - Working out Payments
>![[Pasted image 20230819181842.png]]
>$PMT=-84.96988134$
>Classpad - Finding $\sum$ of Interest
>![[Pasted image 20230819181919.png]]
>$\sum INT = -3092.16915$

>[!failure]- 2015 Suzuki Swift GL- $\sum \text{Interest}$ = $1788.58$ 
>
>Classpad - Working out Payments
>![[Pasted image 20230819182022.png]]
>$PMT=49.14836821$
>Classpad - Finding $\sum$ of Interest
>![[Pasted image 20230819182056.png]]
>$\sum INT = -1788.575734$

#### Heritage Bank
Fixed Compensation Rate: 7.04%
Max Age: 7

>[!success]- Kia Cerato - $\sum \text{Interest}$ = $5033.51$ 
>
>Classpad - Working out Payments
>![[Pasted image 20230819184856.png]]
>$PMT=-126.6288651$
>Classpad - Finding $\sum$ of Interest
>![[Pasted image 20230819184836.png]]
>$\sum INT = -5033.504918$

>[!success]- 2017 Mitsubishi Lancer - $\sum \text{Interest}$ = $3429.07$ 
>
>Classpad - Working out Payments
>![[Pasted image 20230819185004.png]]
>$PMT=-86.26563056$
>Classpad - Finding $\sum$ of Interest
>![[Pasted image 20230819185125.png]]
>$\sum INT = -3429.063946$

>[!failure]- 2015 Suzuki Swift GL - $\sum \text{Interest}$ = $1983.45$ 
>
>Classpad - Working out Payments
>![[Pasted image 20230819185155.png]]
>$PMT=-49.89785683$
>Classpad - Finding $\sum$ of Interest
>![[Pasted image 20230819185242.png]]
>$\sum INT = -1983.442777$

#### Commbank
Fixed Compensation Rate: 9.04%
Maximum Age: 5

>[!success]- Kia Cerato - $\sum \text{Interest}$ = $6496.78$ 
>
>Classpad - Working out Payments
>![[Pasted image 20230819190202.png]]
>$PMT=-132.2568303$
>Classpad - Finding $\sum$ of Interest
>![[Pasted image 20230819190252.png]]
>$\sum INT = -6496.775884$

>[!failure]- 2017 Mitsubishi Lancer - $\sum \text{Interest}$ = $4425.92$ 
>
>Classpad - Working out Payments
>![[Pasted image 20230819190515.png]]
>$PMT=-90.09966928$
>Classpad - Finding $\sum$ of Interest
>![[Pasted image 20230819190605.png]]
>$\sum INT = -4425.914012$

>[!failure]- 2015 Suzuki Swift GL - $\sum \text{Interest}$ = $2560.05$ 
>
>Classpad - Working out Payments
>![[Pasted image 20230819190717.png]]
>$PMT=-52.11554554$
>Classpad - Finding $\sum$ of Interest
>![[Pasted image 20230819190744.png]]
>$\sum INT = -2560.041842$

#### Westpac
Fixed Compensation Rate: 10.67%
Maximum Age: 7

>[!success]- Kia Cerato - $\sum \text{Interest}$ = $7698.27$ 
>
>Classpad - Working out Payments
>![[Pasted image 20230819190937.png]]
>$PMT=-136.8779301$
>Classpad - Finding $\sum$ of Interest
>![[Pasted image 20230819191002.png]]
>$\sum INT = -7698.26183$

>[!success]- 2017 Mitsubishi Lancer - $\sum \text{Interest}$ = $5244.43$ 
>
>Classpad - Working out Payments
>![[Pasted image 20230819191141.png]]
>$PMT=-93.24778316$
>Classpad - Finding $\sum$ of Interest
>![[Pasted image 20230819191226.png]]
>$\sum INT = -5244.423621$

>[!failure]- 2015 Suzuki Swift GL - $\sum \text{Interest}$ = $3033.49$ 
>
>Classpad - Working out Payments
>![[Pasted image 20230819191411.png]]
>$PMT=-53.93648089$
>Classpad - Finding $\sum$ of Interest
>![[Pasted image 20230819191427.png]]
>$\sum INT = -3033.485031$

| Bank      | Kia Cerato | 2017 Mitsubishi Lancer | 2015 Suzuki Swift GL |
| --------- | ---------- | ---------------------- | -------------------- |
| BB (L.R)       | **5931.93**    | **4041.11**                | **2337.47**              |
| BB (Special) | **4538.98**    |                        |                      |
| Heritage  | **5033.51**    | **3429.07**                |                      |
| Commbank  | **6496.78**    |                        |                      |
| Westpac   | **7698.27**    | **5244.43**                |                      |


>[!cite]- Classpad Calculations
>We first calculate the payments, as if this where a regular loan.
>![[Pasted image 20230820005135.png]]
>Then find the $\Sigma$ of Interest payed that year, as well as the balance at that point. 
>![[Pasted image 20230820005444.png]]
>$$
>\begin{aligned}
>\Sigma INT_1 &=-2370.57074 \\
>BAL &= 16146.61593
>\end{aligned}
>$$
>We then take the $BAL$ and use it as the new $FV$ value to calculate new Repayments
>![[Pasted image 20230820010908.png]]
>And then use Amortisation;
>
>
>
>![[Pasted image 20230820010700.png]]
>$$\Sigma INT_2 = -2172.969491$$
>
>**Thus**,
>$$\sum\Sigma INT = -2172.969491 + -2370.57074 = −4543.540231 = \boxed{\$4543.55}$$
