---
updated_at: 2023-09-14T14:06:12.475+08:00
---
s
>[!cite]+ Forward & Backward Scanning
>![[Pasted image 20230901141117.png]]

- Each [[Edge]] represents a [[Task (Flow)|Task]].
- The Number next to each edge is the duration of that tas

E.g. $A_3$ task A takes 3 minutes

## Forward & Backward Scanning
###### Forward Scanning (Finding the EST)
To find the ***EST*** aka. **Earliest Start Time**, we follow this systematic method;
- Going from the Source to Sink
- Find the **shortest** possible way to get to a specific node
	- Take into account all the differnet possible routes to that node
- Then go onto the next node, progressively finding the **shortest** possible path to the Sink. e.g. $39$ in the diagram above.
###### Backwards Scanning (Finding the LST)
This is used to find the *LST* aka (**Latest** ***Start*** time)
- **Do the opposite of *Forward Scanning***
- Go from the sink to source, use the value found in Forward Scanning as the starting value
- Find the **longest** way to get to the last node,

![[Forward & Backward Scanning 2023-09-13 21.48.38.excalidraw]]