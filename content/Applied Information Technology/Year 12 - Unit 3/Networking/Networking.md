
---
dg-publish: true
---
>[!cite] Definition
>The connection of two or more devices together in order to exchange data.


#### Advantages
- Affordable
- Expandable
- Easy to share information
- Collaboration made easier

#### Disadvantages
- Distracting
- Setup can be difficult
- Disrupt work/life balance
- If the network is down, you lose acces to information.
- Security vulnerabilities

## Netwrok Architectures
There are two main ways to set up a network - Usign a server (Client / server) or not (Peer to peer).

### Client/Server:
This conssits of a netwrok with a central server. The clients (devices) are connected to each other, but the network is controlled by the server.
![[Client-Server Architecture.excalidraw]]



| Advantages                                   | Disadvantages |
| -------------------------------------------- | ------------- |
| **All files stored in a central location**       | Specialised networking operating system is needed              |
| **Network peripherals are controlled centrally** | Speciallised networking engineers needed              |
| **Backups & maintenance is secured centrally**   | Servers are expensive.              |
| **Users can access from a central source.**      | **One central point of failure**              |

### Peer to Peer
This is an etwork where each computer has equal privalleges. There is no central server present.
![[Peer-to-Peer Architecture.excalidraw]]

| Advantages                                                                                                                                | Disadvantages                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| No need for a network operating system                                                                                                    | Because each computer might be being accessed by others it can slow down performance                                                                                                                    |
| Does not need an expensive server because individual workstations are used to access the fil                                              | Files and folders cannot be centrally backed up                                                                                                                                                         |
| No need for specialist staff such as network technician because each user sets their own permissions as to what they are willing to share | Files and resoruces are not centrally organised in a specific folder. They are stored on individal computers and might be difficult to locate if the company owner doesnt have a logical filing system. |
| Much easier to set up then a client-server network does not need specialist knowledge.                                                    | Ensuring that viruses are not introduced into the network is the responsibility of each indiviual user.                                                                                                 |
| If one computers fails it will not idsrupt any others. it just means those files are unaccessible                                         | There is little or no security besides the permissions. LUsers dont need to log into their workstations                                                                                                                                                                                                        |


## Transmission Media
This is the mean by which data is communicated ina netwrok:
- Ethernet Cables
	Also called CAT6 or RJ45, these are commonly used cables in netwroks, consisting of 4 pairs of twisted wire cables (twisting reduces interference)
- Fibre Optic
	High speed cabling made of glass that transmits data in the form of light
- Wifi
	Wireless Communication that uses radio signals instead of physical cables.

# Network Hardware

Router - This decides which ROUTE the information takes to get to its desination. The router gives each device an IP address (DHCP), so the signals know were to go.

Switch - this ismade u pof a number of ports. All trafffic in the network flows through these ports.

Modem - Stands for **Modulator Demodulator**. This modem allows for conection to the internet.

Network Interface Card - This is the particular circuit board inside your computer that allows you to connect to the network (can be wired or wireless).

## Star Topology
![[Star Topology.excalidraw]]
This is laye d out as a star where everythign connects to the central device, it is the most common topology.


### Bus Topology
![[Bus Topology.excalidraw]]

Each device is connected to  common cable (Bus) it is simple, but slow.

### Ring Topology
![[Ring Topology.excalidraw]]

This is where each device is connected in a ring-like setup. Simple to create but if one computer is offline, it affects the whole network.

# Protocols

A protocol is a set of rules that need to be followed to communicate data.

### HTTP - Hyper Text Transfer Protocol
This is used to transmist / receive webpages.

### HTTPS - Hyper Text Transfer Protocol **S**ecure (Socket Layer)
The same as HTTP but encrypted.

### WAP - Wireless Application Protocol
This is used to transmit data wirelessly

### TCP - Transmission Control Protocol
This is used for transmitting  data over the internet.
- Data is sent in smaller packets
- Each packet is given an address
- Each packet is sent
- The receiving computer receives the packets and errror-checks them
- If there are any missing packets it wil ltry receive them
- Once all packets are received, the data is reassembled into its original form.

 SSL (Secure Socket Layer)
 Transport Layer Security
# Communication Standards

802.3 - Wired Communications ethernet / CAT6 kills people 

802.11 - Wireless Communication
802.11b Slowest
802.11g
802.11n
802.11ac
802.11ax Fastest

# Network Security
Passwords - Combinations of letters, numbers and symbols to prevent people from accessing things they shouldnt.

Firewalls - These work by restrictign certain ports from sending / receiving data. Firewalls can be SOFTWARE or they can be HARDWARE

Physical Security - These are things like doors, walls, keycard accesible rooms. Anything physical.

# Service Level Agreement
A service-level agreeement (SLA) is a commitment between a service provider and a customer. Particular aspects of the service - qualtiy, availability, responsibilities - are agreed between the service provider and the service user.

A SLA usually provides:
- Type of service
- Cost of Service
- Monitoring aspects of service
- Steps for reportign issues
- Response times to fix servce
- Repercussions for user or service not fulfillign commitments









> [!error]- References
> 
> 138 somo rd - jai
> 16 wurchester - che