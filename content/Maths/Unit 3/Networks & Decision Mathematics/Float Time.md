---
edited_seconds: 60
updated_at: 2023-09-14T09:35:00.986+08:00
---
>[!cite] Float Time / *Slack*
>The "headroom" available between the earlist possible time a task could be completed, and the latest possible time that it could be completed before you would cause a delay.
>If a Task has a Float time of anything **other than 0**, it is a [[Task (Flow)|Non-Critical Task]] 
>
>To find the LST and EST you use [[Forward & Backward Scanning#Forward & Backward Scanning|Forward & Backward Scanning]].

### Float time formula
$$\text{Float}= LST_{\text{end}}-EST_{\text{start}}-\text{Activity time}$$

![[Pasted image 20230901142147.png]]


In the example above,
$$14_{LST}-4_{EST}-8_{\text{Activity Time}} = 2$$

>[!warning] If there are **Multiple Edges**
>Even if the EST and LST are the same on either side, if it is nto apart of the critical path, it has a float value.