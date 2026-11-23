# Rent Card

## The need

- Client: Describe the business without naming it.
- Site type: [Describe the website]
- Visitors per day: [Number] — [where this estimate came from]
- Budget: [Real budget in KES]

## Measured

### 1 GB
- Time: [Time and date]
- nproc: [Actual output]
- free -m: [Actual output]
- uptime: [Actual output]
- df -h: [Actual output]
- uname -m: [Actual output]

### 4 GB
- Time: [Time and date]
- nproc: [Actual output]
- free -m: [Actual output]
- uptime: [Actual output]
- df -h: [Actual output]
- uname -m: [Actual output]

- Meter hours at 1 GB: [Actual hours]
- Meter hours at 4 GB: [Actual hours]

## What to rent for what

| For | Rent this | Where price comes from | US$/KES | What would move it up/down |
|---|---|---|---|---|
| Only pages | No server; use the SCS2b.2 site option | [Source and date] | [Price] | More site functionality |
| Basic site or small WordPress | Smallest burstable 1 GB option | [Rate card and date] | [Price] | More visitors or workload |
| WordPress with plugins, catalogue or images | One size up or larger Lightsail plan | [Rate card and date] | [Price] | More traffic and storage |
| Never for a small client | m-class, r-class, c-class or graphics card | [Rate card and date] | [Price or not shown] | Only if workload genuinely requires it |
| Learning or staging | Local scs-server VM on laptop | Local machine | Free | Move to cloud only when needed |

## My choice

[Name the actual option selected and explain why it meets the client's need.]

## Why not bigger, why not smaller

- Why not bigger: [Use a real number from Measured to explain why a bigger server is unnecessary.]
- Why not smaller: [Explain what the smaller option cannot run.]

## Prices

- Provider: [Provider]
- Sandbox region: [Region]
- Pricing page: [Exact page name or URL]
- Read on: [Date]
- Instance price: [Actual USD price]
- Disk price: [Actual USD price or not shown]
- Public address: [Actual USD price or not shown]
- Data out: [Actual USD price or not shown]
- Snapshots: [Actual USD price or not shown]
- Rate: 1 USD = [actual rate] KES, from [source], read [date]

## Lightsail or EC2 for this client

[I choose Lightsail or EC2 because ...]

### x86 or ARM comparison

| For | Rent this | Where price comes from | US$/KES | What would move it up/down |
|---|---|---|---|---|
| Small x86 website | t3.micro | AWS EC2 pricing page — verify price and date | [Verify] | More traffic or memory |
| Small ARM website | t4g.micro | AWS EC2 pricing page — verify price and date | [Verify] | ARM compatibility and workload |

The t3.micro uses x86_64 architecture. The t4g.micro uses ARM-based Graviton architecture. Before moving to t4g, I must check that the operating system, PHP, database and website plugins support ARM. Software that only supports x86 may need an ARM-compatible replacement. I would test the website before migration.

## What to rent for what

| For | Rent this | Where price comes from | US$/KES | What moves it up/down |
|---|---|---|---|---|
| Only pages | S3 or no server; use the SCS2b.2 site | AWS pricing page; verify | Verify | Dynamic features |
| Basic website | t3.micro | EC2 pricing page; verify | Verify | More visitors |
| ARM-compatible website | t4g.micro | EC2 pricing page; verify | Verify | ARM compatibility |
| WordPress with plugins and catalogue | One size up or larger Lightsail plan | Provider pricing page; verify | Verify | More traffic and storage |
| Never for a small client | m-class, r-class, c-class or graphics card | Provider pricing page; verify | Verify | Only for demanding workloads |
| Learning or staging | Local scs-server VM | Local laptop | Free | Move to cloud when needed |

## My choice

Pending real measurements and price verification. I will choose t3.micro, t4g.micro, a named Lightsail plan, or S3 after comparing the client's needs with the measured resources.

## Why not bigger, why not smaller

- Why not bigger: Pending measured memory, CPU and disk evidence.
- Why not smaller: I must identify which website features the smaller option cannot run.

