>[!danger]+ Note
>(Almost) *every 'link'* on here goes to another page, they *don't work* since other notes aren't downloaded.
>
>Also *any* of these *boxes with an arrow next to the title* can be *collapsed / expanded*, by *clicking the title*, **most are collapsed by default**

# Introduction
In this investigation I will be investigating whether or not there is a significant association between the numerical variables; *Tertiary School Enrollment*, and *GDP*.
### Relevancy
This association is relevant because it allows us to see how changes in *Tertiary Education* affect *G*ross *D*omestic *P*roduct.

<hr>

Allowing us to Gain insight into **whether Tertiary Education growth was the Explanation or even affected GDP growth.** That same growth who's [[Knock-On effects of Economic Growth|Knock-on effects]] brought the average person's [[Knock-On effects of Economic Growth|Living Standards]] above that of royalty centuries prior.

We can use the information on the Association to make a *prediction* on how different *GDP* would be if *every single person today had undergone Tertiary Schooling*.

# Data Collection Plan
To ensure that I collect *accurate data* I will utilise official international resources like the World Bank to collect my data, this will ensure that my *data is reliable* and correct since they are a international organisation, and keep reliable records. I will use Data regarding the *European Union* as they have the most reliable datasets for both Indicators required within that time frame.
> ~~procrastinated~~ got sidetracked, made my own [data tracking website](https://amazingeconomicsrandomproject-git-main-aeases.vercel.app/)using the World Bank API and a chart library

#### Data Time Scale
I will take the datapoints at yearly frequencies, collecting **datapoints going from 2020 to 1972**, the data used will be about the *European Union* since they have the most reliable datasets on Tertiary Enrollment. (Australia's is extremely sporadic, non-consistent recording, and not recorded for as long).

Data Collection:
>[!abstract]- Raw Collected Data
>
>| [g] GDP (Trillions) | [s] Tertiary School Enrollment |
| ---------- | ---------- |
| 15.369T    | 75.1033    |
| 15.693T    | 73.1508    |
| 15.981T    | 70.9458    |
| 14.765T    | 69.4567    |
| 13.889T    | 68.0067    |
| 13.553T    | 66.8502    |
| 15.650T    | 66.3631    |
| 15.294T    | 65.6790    |
| 14.642T    | 65.9887    |
| 15.766T    | 65.8187    |
| 14.558T    | 64.8581    |
| 14.764T    | 63.4334    |
| 16.298T    | 62.2605    |
| 14.729T    | 61.5232    |
| 12.714T    | 60.9256    |
| 11.911T    | 59.7148    |
| 11.419T    | 58.0358    |
| 9.931T     | 56.2314    |
| 8.084T     | 54.0381    |
| 7.394T     | 51.7214    |
| 7.276T     | 49.5020    |
| 7.926T     | 48.0100    |
| 7.970T     | 46.0190    |
| 7.733T     | 44.7443    |
| 8.431T     | 42.4624    |
| 8.296T     | 40.4051    |
| 7.162T     | 38.3881    |
| 6.761T     | 35.2264    |
| 7.406T     | 32.4976    |
| 6.736T     | 30.6850    |
| 6.498T     | 28.8982    |
| 5.194T     | 27.7500    |
| 5.084T     | 26.6606    |
| 4.631T     | 25.9731    |
| 3.744T     | 25.5963    |
| 2.678T     | 25.1013    |
| 2.603T     | 24.5248    |
| 2.702T     | 24.0511    |
| 2.777T     | 23.5956    |
| 2.880T     | 23.2789    |
| 3.303T     | 23.1837    |
| 2.953T     | 22.9348    |
| 2.443T     | 23.0962    |
| 2.005T     | 22.534     |
| 1.770T     | 21.9676    |
| 1.691T     | 20.7593    |
| 1.452T     | 19.7250    |
| 1.282T     | 19.0028    |
| 0.990T     | 18.0554    |

>[!note]- Graphical Representation of Data (*pre-analysis*)
>> Every Datapoint is in there, there isn't a seperate point on the x axis to show each year however, Years go from right to left, rightmost being the oldest datapoints
>#### School Enrollment
![](https://i.imgur.com/a3dPAK8.png)
> #### GDP
>![](https://i.imgur.com/SqPAZ2U.png)
>[[Investigation 1  - Chart.js Graphs]] < This likely won't link, in submission, more for personal reference

# Calculations
>[!info]+ Legend
>$g=\text{GDP / Gross Domestic Product}$
>$s=\text{Tertiary Enrollment (\% Gross)}$

Using the ClassPad, I have determined that Given $g$ is the response variable, the [[Regression Line|Least-Squares Regression Line]] formula for this assosciation is:
$$g=0.2638s-3.225$$
This equation tells us that *every time* the explanatory variable *s increases by 1*, the *GDP is expected to increase by 0.2638 Trillion*.

And the equations proposes that *at y-intercept*, where Tertiary School Enrollment ($s$) is 0, *GDP will be at -3.225 Trillion*.

**Correlation Coefficient** = 0.9693
**Coefficient of Determination** = 0.9395

#### The data, Plotted - Regression Line:
![](https://i.imgur.com/XJAsKLx.png)
# Analysis
This association is positive, as indicated by the **Correlation Coefficient**'s positive sign. *GDP* and Tertiary Education have a strong correlation as the **Correlation Coefficient** is 0.96, which is above 0.75.

The assosciation of this data is also likely linear as can be infered by a high **Coefficient of Determination** of $0.94$, meaning that *94% of the variation in Gross Domestic Product ($GDP$) can be explained by variation in Tertiary Education Enrollment*.

The Residual plot below does not depict a easily recognisible pattern indicating that the *linear model* is likely a good fit for this relationship.
>[!abstract]- **Residual Plot**
![](https://i.imgur.com/rGtgU1B.png)

However it is not completely random, indicating that the *linear model* is not a good fit for the relationship, it has large spikes of positive residual at the end, and negative residuals at around ~7.5.

These can be explained by the expansive *growth of GDP & Tertiary Enrollment* near the end, *causing* a *increase in positive residuals*. and the *plateau* of growth *at ~7.5*, causes a *increases in negative residuals* as the actual values do not keep up with those predicted by the *Linear model*, which expects constant and unchanging growth at **0.2638 Trillion GDP per 1% increases Tertiary School Enrollment** throughout the data. The parts of the data that do not conform to the *linear model* can be seen in the Graphs under the Collapsed Callout called: **Graphical Representation of the Data (pre-analysis)**, these can be found right above the [[#Calculations]] section.

This discrepancy shows us that in this association, according to the linear model *Tertiary School Enrollment* can explain *94%* of the varience in *GDP*, however the oddities in the **Residual Plot** show us that the model is **not** *entirely accurate*, and that it is not consistantly linear, but does follow a linear pattern overal.

##### Dangers of Prediction
We can make predictions based on the [[Regression Line|Least-Squares Regression Line]], we can use this to *predict the GDP* at a *specific $s$ value* aka. Tertiary Enrollment, however predictions using a $s$ value outside the range $18.05$ <-> $75.1$ are a <mark style="background: #FF5582A6;">Extrapolation</mark> as we do not have any datapoints beyond 75.1% for $s$. This means that that prediction is unreliable. 
>[!bug] Evidence of Extrapolation Unreliabality in this context
>The unreliability of Extrapolation is evident by a value of $s=0$, or 0% Tertiary School Enrollment predicting, based on the [[Regression Line|Least-Squares Regression Line]], a $g$ value of $-3.225$ which is obviously incorect, as $g$ represents GDP, which is a measure of the Total value of final goods produced, you can not produce negative value.

However even <mark style="background: #BBFABBA6;">Interpolation</mark>, predictions made between the $s=(18.05 <-> 75.1)$ range of the data could potentially be unreliable as, **Correlation does not equal Causation**.
Due to this, there could be a non-causal explanation, like it being a *coincidence*, or a [[Association and Causation#Confouding Variable|Confounding Variable]], could be the causal link between both variables in this association, for example, Increases in Global Trade often correlates to increases in *GDP*, which in-turn often correlates to increases in wages (see [[Knock-On effects of Economic Growth]]) and an increase in Wages could be what's causing more and more people to consider Tertiary Education.

Or it could have become more accessible as Highly educated jobs became higher in demand as *Europe* **transitioned** from a **Industrial, manufacture based economy** to a *Highly Developed Economy*, thus being more reliant on educated labour, causing them to create more universities to satiate this increase in demand, which just so happened to correlate with GDP increases as *Highly developed economies* traditionally have a higher *GDP* than more than *Industrial*, based economies.

>[!warning] Prediction given s = 100
$g=23.155$

# Conclusion / *Interpretation*

While there appears to be a strong association between *GDP* and *Tertiary Education*, complications with the **Residual Plot** show us that it does not conform perfectly to the *Linear Model*, and due to the diversity of causes for changes in *GDP* it is **likely a [[Association and Causation#Confouding Variable|Confounding Variable]] is involved**, and thus while the two data sets are strongly associated, we can not be sure of the weight of the impact *Tertiary Education* has upon *GDP*. Due to not conforming well to a *Linear Model*, predictions, even *Interpolations* are less reliable.


