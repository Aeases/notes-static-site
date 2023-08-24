![[Pasted image 20230805200316.png]]


Cloud Computing refers to “the delivery of computation services, whether that be servers, storage, databases, networking, software, analytics, and intelligence over the internet, from ‘the cloud’”. The cloud simply refers to giant datacenters of computers that can be rented by anyone to do anything. The most prominent ‘cloud providers’ being Google Cloud Platform, [Microsoft] Azure, and Amazon Web Services. 

## Benefits
Cloud computing offers a variety of benefits over regular computing, including, Flexbility, Disastor Recovery, Updates, Minimising Capital Expenditure, Collaboration, Cloud Workstations, Streamlined content, Access to enterprise level software, and uninterrupted up-time 

#### Flexibility 
Companies relying on traditional computing must ensure they keep up-to date wit all their computational needs into near future almost perfectly, even the unpredictable ones. If they don’t anticipate a spontaneous rise in traffic their servers will crash, and they could lose tons of money, in the meantime they would have to pay tons of money hiring technicians to install, and maintain these new computers. Cloud Computing solves this problem by allowing companies to dynamically scale up or even scale down the amount of compute their using, through programs like Kubernetes this scaling can even happen automatically. 

#### Disaster Recovery 
In traditional computing, data is often concentrated in one location, usually with data storage via disconnected hardware that sits there. If this hardware is not maintained, and the main server and backup are lost, nothing can be done, and the data is lost. Cloud Computing on the otherhand replicates this data to multiple locations, as well as storing “git-like” logs of what files are modified and how, allowing you to rollback to any point in time without hassle. 

#### Updates / Maintenance 
Traditioanlly local computers require regular software updates that must be applied manually, usually this requires stopping whatever the computer is doing, and performing the update. This can be averted partially using Cloud Computing as on virtual machines these updates are applied in the background to all devices at once, allowing a reboot whenever necessary, and when hosting containers through applications like Kubernetes combined with podman/docker in the cloud, Kubernetes can dynamically allocate away a container’s load, allowing it to be removed, and re-deployed on a updated version without ever interrupting the service that container is providing.  

#### Minimize Capital Expenditure 
If you purchase your own server, you pay for the whole server, regardless of how much you use it, if you expand the amount of servers you possess, then you have paid for those servers into the future, even if the use for those servers is temporary. Cloud Computing helps minimize “capital” expenditure (the amount spent on goods & services that help employees be productive) by allowing you to only pay for that which you utilize,  

## Drawbacks 
The cloud also has many drawbacks  

#### Existing Infrastructure Incompatibilities 
Existing infrastructure from pre-cloud may not be compatible with the cloud, forcing a company to change infrastructure which could harm the productivity of employees. 
#### Vendor Lock-in 
Most cloud providers will attempt to lock their customers into their services, generally these services have no easily inter-compatible alternative, meaning if you become reliant on them they can charge higher prices without necessarily earning them, leaving you with no choice but to pay exhorbiant prices for services that are orders of magnitude cheaper elsewhere but would require orders of magnitude more costs to migrate over to. 
#### Jurisdiction 
([ref](https://earth.org/environmental-impact-of-cloud-computing/))
Having data stored in the cloud can arise issues concerning different privacy protections in different jurisdictions, some cloud providers may automatically replicate data abroad for backups, this can cause issues in jurisdictions with strong privacy protections. 
For example in the European Union, strong consumer protectiosn surroundign privacy prevent the storage of sensitive data about domestic citizens abroad, companies based in the union must be cautious about *where* their cloud-stored data is hosted, as a misconfigured server could could result in legal issues.
#### (Social)
[ref](https://www.znetlive.com/blog/pros-and-cons-of-cloud-computing/)
The cloud brings up huge questions about privacy, data can be stored indefinently and en-masse for cheap, additionally, the data stored in the cloud may be hugely valuable to the providers of the cloud, that is, google, amazon, and Microsoft, all huge players in AI, something that requires huge amounts of data to train and develop, best of all the data they're trained on can not be reproduced entirely from the finished product so there's not really anything stopping them.

#### Waste & Electricity Usage (Environmental)
[ref](https://earth.org/environmental-impact-of-cloud-computing/)
In 2018 alone, *50 million metric tons* of e-waste were produced by cloud computing. Datacenters are cooled by hazardous chemicals, and in the process are responsible for ~40% of electrical usage in a datacenter in normal conditions, and can range all the way up to **80%** in warm conditions, a large proportion of the remaining energy goes towards battery backups to ensure uptime, due to the volatile nature of todays batteries even if they are not discharged they consume energy and chemicals to stay charged.

## Persuasive Argument for Cloud Computing
Cloud computing is the future of computing, from flexibility to security, in todays digitally converged world technology is the foundation of our daily lives, we can't rely on a bunch of companies to all individually maintain thousands of servers for each of their customers across the globe. It's just plain inefficient. The cloud offers an out, the ability to offload the responsibility to trustworthy giants *who will ensure* your banking details don't get leaked to the world, *who can ensure* that even if the dropbox headquarters are struck by a nuke your family photos or confidental documents are stored offsite, who can provide the infrastructure putting the ants on the level of the giants, the cloud bills you exactly your means banking on your ability to ascend beyond them. Not switching to the cloud is like being a lemminite in the modern world. It is refusing to embrace the technology something that can only help, you don't need to handle updates or maintenance by yourself when it could be done automatically, you don't need to pay up front for that giant server rack that your only going to use twenty percent of for the next five years when you could instead pay what it's worth and only pay more when you actually need to.