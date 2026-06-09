// Static mock data — replace with Payload CMS calls when CMS is configured

export const services = [
  {
    slug: "environmental",
    disciplineNumber: 1,
    accentColor: "red" as const,
    title: "Environmental Services",
    shortDescription:
      "Comprehensive environmental consulting across Australia's infrastructure, energy, and construction sectors.",
    fullDescription:
      "Our environmental team delivers rigorous, field-tested assessments and management plans across Australia's most demanding project environments. From greenfield infrastructure to brownfield redevelopment, we bring the scientific rigour and regulatory experience required to manage risk and achieve approvals.",
    subServices: [
      "Environmental Impact Assessment (EIA/EIS)",
      "Phase 1 & Phase 2 Environmental Site Assessment",
      "Contamination Investigation & Risk Assessment",
      "Remediation Design & Management",
      "Acid Sulfate Soil Management",
      "Flora & Fauna Surveys",
      "Ecological Offset Assessment",
      "Regulatory Compliance Auditing",
      "Environmental Management Plans",
      "Groundwater Monitoring & Reporting",
    ],
    tags: ["EIA", "Contamination", "Remediation", "Ecology", "Groundwater"],
  },
  {
    slug: "occupational-hygiene",
    disciplineNumber: 2,
    accentColor: "olive" as const,
    title: "Occupational Hygiene",
    shortDescription:
      "Workplace health and exposure management across mining, construction, and industrial environments.",
    fullDescription:
      "Protecting your workforce starts with understanding what they're exposed to. Our occupational hygienists design and deliver monitoring programs that meet Australian Standards and regulatory requirements — giving your team the data they need to manage risk and demonstrate due diligence.",
    subServices: [
      "Workplace Exposure Assessments",
      "Hazardous Materials Surveys (Asbestos, Lead, Silica)",
      "Noise & Vibration Monitoring",
      "Health & Safety Auditing",
      "Biological Risk Assessment",
      "Personal Protective Equipment (PPE) Assessment",
      "Occupational Hygiene Management Plans",
      "Indoor Air Quality Assessment",
      "Dust & Particulate Monitoring",
      "COSHH-equivalent Risk Assessments",
    ],
    tags: ["Asbestos", "Silica", "Noise", "IAQ", "Exposure Monitoring"],
  },
  {
    slug: "geotechnical",
    disciplineNumber: 3,
    accentColor: "stone" as const,
    title: "Geotechnical Engineering",
    shortDescription:
      "Foundation design, slope stability, and site characterisation for infrastructure and resources projects.",
    fullDescription:
      "Ground conditions determine project feasibility, design parameters, and construction risk. Our geotechnical engineers bring first-principles thinking and field experience to characterise sites accurately — so your design is grounded in reality, not assumptions.",
    subServices: [
      "Site Characterisation & Geotechnical Investigation",
      "Foundation Design & Assessment",
      "Slope Stability Analysis & Monitoring",
      "Retaining Wall Design",
      "Pavement Design & Investigation",
      "Earthworks & Compaction Specification",
      "Geotechnical Risk Assessment",
      "Settlement Monitoring & Analysis",
      "Rock Mass Classification",
      "Mine Waste & Tailings Facility Assessment",
    ],
    tags: ["Foundation Design", "Slope Stability", "Site Investigation", "Pavements"],
  },
];

export const projects = [
  {
    slug: "contamination-assessment-western-sydney",
    projectId: "PRJ-2024-001",
    client: "Tier 1 Infrastructure Group",
    year: 2024,
    location: "Western Sydney, NSW",
    discipline: "environmental" as const,
    featured: true,
    image: "/images/projects/contamination-western-sydney.jpg",
    highlights: ["12 ha Site", "2 ESA Phases", "1,800 m³ Removed"],
    title: "Contamination Assessment & Remediation Strategy",
    shortDescription:
      "Phase 1 & 2 ESA plus remediation design for a 12-hectare brownfield redevelopment precinct.",
    challenge:
      "A 12-hectare former industrial site in Western Sydney had been identified for mixed-use residential and commercial redevelopment. The client required a rapid, defensible assessment of potential contamination to satisfy pre-purchase due diligence requirements and secure development approval from the local council. Previous site activity included light manufacturing, fuel storage, and vehicle maintenance over a 60-year operational history — all recognised sources of potential soil and groundwater impact.",
    approach:
      "Austerra conducted a desktop Phase 1 Environmental Site Assessment encompassing historical aerial photography review, title searches, regulatory database queries, and interviews with long-term site occupants. Based on the Phase 1 findings, a targeted Phase 2 investigation was designed with 24 boreholes and 12 groundwater monitoring wells across identified Areas of Potential Environmental Concern. Soil and groundwater samples were analysed for hydrocarbons (TPH, BTEX), heavy metals, and chlorinated solvents. A detailed human health and ecological risk assessment was prepared in accordance with the NEPM (Assessment of Site Contamination) 2013.",
    outcome:
      "The investigation confirmed hydrocarbon and lead impacts in two discrete source areas. A risk-based remediation strategy was developed in close consultation with the NSW EPA, resulting in targeted excavation and off-site disposal of approximately 1,800 m³ of impacted material — significantly less than initial conservative estimates. The remediation was completed within 14 weeks, enabling the development application to proceed on programme. A groundwater monitoring plan was established to demonstrate ongoing compliance.",
    tags: ["Phase 1 ESA", "Phase 2 ESA", "Remediation", "EPA", "Brownfield"],
  },
  {
    slug: "underground-hygiene-survey-pilbara",
    projectId: "PRJ-2024-012",
    client: "Iron Ore Mining Co.",
    year: 2024,
    location: "Pilbara, WA",
    discipline: "hygiene" as const,
    featured: false,
    image: "/images/projects/underground-hygiene-pilbara.jpg",
    highlights: ["3 Operations", "4 Job Classes", "6-Week Campaign"],
    title: "Occupational Hygiene Survey — Underground Operations",
    shortDescription:
      "Comprehensive exposure assessment across 3 underground operations in the Pilbara.",
    challenge:
      "A major iron ore operator was required by the Western Australian Department of Mines, Industry Regulation and Safety (DMIRS) to conduct a comprehensive baseline occupational hygiene survey across its underground operations, following the introduction of stricter Workplace Exposure Standards (WES) for respirable crystalline silica in 2020. The operator needed defensible, job-classification-level exposure data to assess compliance and update its Occupational Hygiene Management Plan (OHMP).",
    approach:
      "Austerra deployed a team of four occupational hygienists across three underground facilities over a six-week campaign. Personal exposure monitoring was conducted for respirable dust, respirable crystalline silica (RCS), diesel particulate matter (DPM), and noise across all major job classifications including drill and blast, charge-up, loader operation, and maintenance. Monitoring was conducted in accordance with AS 2985 and NATA accreditation requirements. Area monitoring was also conducted to characterise background conditions and assess control effectiveness.",
    outcome:
      "Results indicated that three job classifications exceeded the revised WES for RCS under worst-case operating conditions. Austerra provided a prioritised control hierarchy in accordance with the hierarchy of controls, including recommendations for process enclosure, wet drilling, and enhanced respiratory protection for residual risk. The updated OHMP was accepted by DMIRS without amendment. A schedule of annual monitoring was established, with Austerra retained for ongoing surveillance.",
    tags: ["Silica", "DPM", "Noise", "Underground Mining", "WA"],
  },
  {
    slug: "highway-slope-stability-qld",
    projectId: "PRJ-2023-034",
    client: "State Roads Authority QLD",
    year: 2023,
    location: "South East QLD",
    discipline: "geotechnical" as const,
    featured: false,
    image: "/images/projects/slope-stability-qld.jpg",
    highlights: ["6.2 km Corridor", "18 Boreholes", "$4.2M Saved"],
    title: "Highway Corridor — Slope Stability & Foundation Design",
    shortDescription:
      "Geotechnical investigation and slope stability analysis for a 6.2 km highway upgrade.",
    challenge:
      "The State Roads Authority required geotechnical services for a 6.2 km highway upgrade through mountainous terrain in South East Queensland, including three major bridge crossings and several deep cut slopes. The corridor traversed complex geology with interbedded sandstone, siltstone, and claystone, and crossed two known geological fault zones. The programme was constrained by a requirement to deliver preliminary design parameters within 12 weeks to support a competitive tender process.",
    approach:
      "A phased investigation programme was designed to maximise data quality within the programme constraints. Phase 1 involved a desktop review of existing geological mapping, air photo interpretation, and a detailed walkover survey to identify geotechnical hazards. Phase 2 comprised 18 rotary boreholes, 12 dynamic cone penetration tests, and 4 inclinometer installations across the three bridge sites and critical cut slope locations. Rock quality designation (RQD), point load strength, and triaxial shear strength testing were conducted on recovered core. Slope stability was analysed using limit equilibrium methods (Morgenstern-Price) with sensitivity analysis for pore pressure conditions.",
    outcome:
      "The investigation identified a previously unmapped shear zone in the main cut slope that influenced the final road alignment. Rerouting the alignment by 120 m avoided the need for a 15-metre high reinforced retaining structure, saving an estimated $4.2M in construction cost. Foundation recommendations for all three bridges were delivered within the 12-week programme, enabling the tender to proceed on schedule. The investigation data was also used to inform the contractor's earthworks specification.",
    tags: ["Slope Stability", "Foundation Design", "Highway", "Bridge", "QLD"],
  },
  {
    slug: "flora-fauna-survey-sa",
    projectId: "PRJ-2023-018",
    client: "Renewable Energy Pty Ltd",
    year: 2023,
    location: "Spencer Gulf, SA",
    discipline: "environmental" as const,
    featured: false,
    image: "/images/projects/flora-fauna-sa.jpg",
    highlights: ["2,400 ha Survey", "4 Seasonal Windows", "2 TECs Found"],
    title: "Flora & Fauna Survey — Wind Farm EIA",
    shortDescription:
      "Targeted ecological surveys to support EIA for a 120 MW wind farm proposal.",
    challenge:
      "A renewable energy developer required targeted flora and fauna surveys to inform the environmental impact assessment for a proposed 120 MW wind farm in South Australia's Spencer Gulf region. The study area covered 2,400 hectares across semi-arid shrubland and grassland vegetation. The project required South Australian Department for Environment and Water (DEW) acceptance and the survey methodology needed to satisfy EPBC Act referral requirements.",
    approach:
      "Austerra conducted targeted surveys across four seasonal windows to capture breeding and non-breeding populations. Surveys included vegetation community mapping, threatened ecological community (TEC) assessment, systematic bird and bat transects, targeted searches for listed species, and raptor nest surveys using aerial survey methods. Survey protocols followed the South Australian Biological Survey for Wetlands standards and the EPBC Act referral requirements for wind farms.",
    outcome:
      "Surveys identified two threatened ecological communities within the study area and one species listed under the EPBC Act (Plains-wanderer). Austerra worked with the proponent to redesign the turbine layout to avoid direct impacts on all identified TEC areas and to establish a 1 km buffer around the known Plains-wanderer habitat. The revised layout achieved regulatory acceptance without requiring biodiversity offsets, reducing compliance costs and project risk.",
    tags: ["Flora & Fauna", "EIA", "Wind Energy", "Threatened Species", "SA"],
  },
  {
    slug: "tailings-assessment-wa",
    projectId: "PRJ-2022-045",
    client: "Gold Mining Operations",
    year: 2022,
    location: "Kalgoorlie, WA",
    discipline: "geotechnical" as const,
    featured: false,
    image: "/images/projects/tailings-kalgoorlie.jpg",
    highlights: ["12-Year Facility", "5m Raise Design", "14 Piezometers"],
    title: "Tailings Storage Facility — Stability Assessment",
    shortDescription:
      "Independent stability assessment and raise design for an existing tailings storage facility.",
    challenge:
      "A gold mining operator in Kalgoorlie was required to complete an annual dam safety review of its operating tailings storage facility (TSF) as a condition of its operating licence. The facility had been raised incrementally over 12 years using the upstream raise method, and the operator intended to raise the crest by a further 5 metres over the following 12 months. An independent geotechnical assessment was required by the regulator prior to approving the raise.",
    approach:
      "Austerra conducted a comprehensive independent stability assessment in accordance with the Australian National Committee on Large Dams (ANCOLD) Guidelines on Tailings Dams. The scope included a site inspection, review of construction records and monitoring data, targeted geotechnical sampling of the downstream shell, and stability modelling under static, pseudo-static seismic, and post-earthquake loading conditions using finite element analysis. Piezometric data from 14 standpipe piezometers was analysed to characterise phreatic surface conditions.",
    outcome:
      "The assessment identified elevated pore pressures in the downstream shell toe that reduced static factors of safety below ANCOLD minimum requirements under wet season conditions. Austerra designed a drainage improvement program consisting of toe drains and relief wells, which was implemented by the operator prior to the raise proceeding. Post-drainage monitoring confirmed improved factors of safety. The raise was approved by the regulator following resubmission of the updated stability assessment.",
    tags: ["Tailings", "Dam Safety", "Stability", "Mining", "WA"],
  },
  {
    slug: "indoor-air-quality-office-tower",
    projectId: "PRJ-2023-027",
    client: "Property Management Group",
    year: 2023,
    location: "Melbourne CBD, VIC",
    discipline: "hygiene" as const,
    featured: false,
    image: "/images/projects/iaq-melbourne.jpg",
    highlights: ["22-Storey Tower", "12 Floors Assessed", "6 Contaminants"],
    title: "Indoor Air Quality Investigation — Commercial Tower",
    shortDescription:
      "Multi-floor IAQ assessment following occupant complaints in a commercial office tower.",
    challenge:
      "A property management group received formal complaints from occupants on floors 8 through 14 of a 22-storey commercial office tower in Melbourne's CBD, reporting headaches, fatigue, and respiratory irritation. The symptoms had emerged following a mechanical plant upgrade six months earlier. The client required an independent investigation to identify the cause, manage occupant relations, and support a potential insurance claim.",
    approach:
      "Austerra conducted a baseline IAQ assessment across all 12 affected floors and two control floors, sampling CO2, total volatile organic compounds (TVOC), formaldehyde, PM2.5, PM10, temperature, and relative humidity during occupied hours. Ventilation system performance was assessed against AS 1668.2 requirements, including fresh air delivery rates and filter condition. Air pathway analysis was conducted to trace contaminant sources through the building's mechanical system.",
    outcome:
      "The investigation identified a fresh air intake on Level 3 that had been repositioned during the mechanical upgrade to within 4 metres of the car park exhaust — introducing elevated carbon monoxide, particulates, and TVOC into the recirculation system. Austerra provided detailed remediation specifications to the mechanical consultant. Post-remediation verification monitoring was conducted at 6 and 12 weeks, confirming resolution of all exceedances. A detailed investigation report was provided for the client's insurance proceedings.",
    tags: ["IAQ", "CO2", "TVOC", "Office", "VIC"],
  },
];

export const insights = [
  {
    slug: "understanding-phase-1-esa",
    publishedAt: "2024-03-15",
    category: "Environmental" as const,
    title: "What a Phase 1 ESA Actually Tells You — and What It Doesn't",
    excerpt:
      "Phase 1 Environmental Site Assessments are often misunderstood by clients and project teams. Here's what they cover, where their limits are, and when you need to go further.",
    author: "J. Harrison",
    readTime: "6 min read",
    bodyParagraphs: [
      "A Phase 1 Environmental Site Assessment is one of the most commonly requested environmental deliverables in Australian property transactions — and one of the most commonly misunderstood. Clients often treat the Phase 1 as a clean bill of environmental health. It isn't. Understanding what it actually says — and doesn't say — is critical to managing your exposure.",
      "The Phase 1 ESA is a desktop and site inspection exercise. It involves a review of historical records, title documents, aerial photography, council and regulatory databases, and a non-intrusive site walkover. The objective is to identify Recognised Environmental Conditions (RECs) — evidence or indication that hazardous substances have been released at, on, or to the site, or that conditions exist which have the potential for such a release.",
      "What the Phase 1 does not do is test the soil. It does not drill. It does not collect samples. It does not measure contaminant concentrations in groundwater. A Phase 1 conducted to the highest standard can only tell you whether conditions consistent with contamination are present based on available records. It cannot confirm or rule out actual contamination in the ground.",
      "The consequence of this is often mispriced risk. A site that receives a Phase 1 with 'no RECs identified' may still contain contamination — particularly if historical records are incomplete, if site activities were unreported, or if contamination has migrated from an adjacent property. Conversely, a site with multiple RECs identified may, upon Phase 2 investigation, prove to be unimpacted.",
      "Triggers for proceeding to a Phase 2 investigation include: identified RECs in the Phase 1 report; a change of land use to a more sensitive end use (e.g. industrial to residential); regulatory requirements associated with a development application; or lender/financier requirements. The Phase 2 involves intrusive investigation — boreholes, soil sampling, and groundwater monitoring — and provides actual measured data against which risk can be assessed.",
      "From a risk management perspective, the decision about whether to conduct a Phase 2 should be driven by the consequences of being wrong, not by the upfront cost of the investigation. On a major development site, the cost of a thorough Phase 2 investigation is almost always small relative to the potential remediation liability, approval delay, or reputational risk of discovering contamination after contracts have exchanged.",
      "The practical guidance is this: treat the Phase 1 as what it is — a structured opinion informed by available records — and calibrate your risk management decisions accordingly. When in doubt, go further.",
    ],
  },
  {
    slug: "silica-dust-management-construction",
    publishedAt: "2024-02-08",
    category: "OccHyg" as const,
    title: "Managing Silica Dust on Construction Sites in 2024",
    excerpt:
      "Engineered stone bans and tightened WES values have changed how silica risk must be managed. This guide covers current requirements and practical controls.",
    author: "M. Osei",
    readTime: "8 min read",
    bodyParagraphs: [
      "The regulatory landscape for silica dust management in Australia has changed significantly over the past four years. The national ban on engineered stone benchtops (effective July 2024), the reduction of the Workplace Exposure Standard (WES) for respirable crystalline silica (RCS) from 0.1 to 0.05 mg/m³, and SafeWork Australia's increased enforcement focus have combined to create an environment where what was considered adequate management three years ago is now, in many cases, non-compliant.",
      "Silicosis — including its accelerated and acute forms — is a preventable disease. Accelerated silicosis, which can develop within five years of high-level exposure, has been documented in young engineered stone workers across Australia. This is not a historical problem from past industrial practices. It is happening now, and the construction industry is not immune.",
      "On construction sites, the primary sources of RCS exposure include cutting, grinding, drilling, and demolishing materials containing crystalline silica — primarily concrete, sandstone, granite, and brick. The risk profile varies significantly by task. Handheld angle grinding of concrete without water suppression can generate RCS concentrations exceeding 10 times the WES within minutes. Dry jackhammering of sandstone is similarly hazardous.",
      "The hierarchy of controls must be genuinely applied, not used as a compliance checklist. Elimination — removing the need for silica-generating tasks — should be the first consideration. Substitution to lower-silica materials is not always practical, but should be evaluated. Engineering controls including on-tool extraction, wet suppression, and enclosed work areas are the primary means of control for most construction activities and must be in place before considering respiratory protective equipment (RPE).",
      "RPE selection requires care. The WES reduction to 0.05 mg/m³ means that half-face respirators with P2 filters, which provide a nominal protection factor of 10, may be insufficient for high-exposure tasks if baseline air concentrations are above 0.5 mg/m³ — a level readily achievable during dry concrete grinding. Where RPE is relied upon as the primary or sole control, powered air-purifying respirators (PAPRs) with P3 filtration should be specified.",
      "Health surveillance is now a regulatory requirement in most jurisdictions for workers engaged in high-risk silica work. A silica health surveillance program must include pre-placement and periodic chest X-rays and lung function testing, conducted by a registered medical practitioner with experience in occupational respiratory disease. Surveillance records must be maintained for 30 years following the end of exposure.",
      "The practical starting point for most principal contractors is a silica risk register — a systematic identification of all silica-generating tasks on the project, their frequency, duration, and baseline exposure potential. This forms the basis for a task-specific control plan. Without this foundation, silica management remains reactive rather than systematic, and the probability of a notifiable incident or regulatory finding remains elevated.",
    ],
  },
  {
    slug: "slope-stability-rainfall-events",
    publishedAt: "2024-01-22",
    category: "Geotechnical" as const,
    title: "Why Slope Failures Often Happen Days After the Rain Stops",
    excerpt:
      "Delayed slope failures after rainfall events are poorly understood outside geotechnical circles. Understanding pore pressure response is key to predicting and preventing them.",
    author: "S. Nguyen",
    readTime: "7 min read",
    bodyParagraphs: [
      "When a slope fails two days after a rainfall event ends, the natural instinct is to ask what changed. The rain had stopped. Conditions appeared to be improving. This apparent paradox — delayed failure after visible rainfall ceases — is one of the most important and least-understood aspects of slope behaviour, and it has significant implications for how we manage slope risk during and after wet weather events.",
      "The key to understanding delayed failures is pore water pressure. When rainfall infiltrates a slope, it takes time for the wetting front to travel through the soil profile and for pore pressures to equalise at depth. In a low-permeability clay slope, this process can take days. The surface may appear dry — or even begin to crack — while pore pressures at the slip surface continue to rise, reducing effective stress and progressively diminishing the factor of safety.",
      "The relationship between pore pressure and slope stability is direct. The shear strength of soil is governed by the Mohr-Coulomb failure criterion, in which effective normal stress — total stress minus pore pressure — plays a central role. As pore pressure rises, effective stress falls, and the available shear strength decreases. When the available shear strength falls below the mobilised shear stress along a potential failure surface, the slope fails.",
      "In practice, this means that the critical period for slope monitoring is not the peak of a rainfall event, but the 48 to 96 hours following it. Piezometric data from instrumented slopes routinely shows peak pore pressures occurring one to three days after peak rainfall intensity, particularly in clay-rich and weathered profiles. For cut slopes in weak rock, the lag time can be longer still.",
      "Effective slope risk management during wet weather must account for this lag. A monitoring protocol that ramps down when the rain stops is designed around the wrong trigger. Threshold-based response plans should be based on piezometric readings, not rainfall alone — and those readings should remain under active review for at least 72 hours after a significant event. Where automated monitoring systems are installed, alert thresholds should be set at pore pressure levels, not rainfall accumulation.",
      "For slopes that are known to be marginal — meaning that their calculated factor of safety under design pore pressure conditions is between 1.2 and 1.5 — weather-related risk management is not optional. Access restrictions, traffic management, and in some cases temporary drainage measures should be pre-planned rather than improvised during an event. The geotechnical engineer who designed the slope should provide a weather response protocol as part of the design documentation.",
      "The broader point is this: slope stability is not a static property. It is a function of conditions that change continuously with weather, groundwater, and time. Managing slope risk requires ongoing attention to those conditions — particularly in the critical days after a rainfall event ends — not a single assessment at the time of design.",
    ],
  },
  {
    slug: "acid-sulfate-soils-coastal",
    publishedAt: "2023-12-10",
    category: "Environmental" as const,
    title: "Acid Sulfate Soils in Coastal Development — A Practical Guide",
    excerpt:
      "Disturbance of acid sulfate soils can cause rapid environmental damage. Here's how to identify them, assess risk, and manage them during construction.",
    author: "J. Harrison",
    readTime: "9 min read",
    bodyParagraphs: [
      "Acid sulfate soils (ASS) are one of the most significant environmental hazards in Australia's coastal development context — and one of the most frequently underestimated. When disturbed through excavation, drainage, or dewatering, the pyrite minerals contained in these soils oxidise rapidly, generating sulfuric acid that can reach pH values below 3. The consequences for receiving waterways, infrastructure, and vegetation can be severe and, in some cases, irreversible.",
      "ASS are found throughout Australia's coastal lowlands, particularly in areas that were previously inundated by tidal or estuarine water. The highest-risk zones in Australia correspond closely to the former extent of Holocene mangrove and saltmarsh systems — areas that have subsequently been drained for agriculture, urban development, or industrial use. In Queensland alone, it is estimated that more than 2 million hectares of land contains actual or potential acid sulfate soils.",
      "The distinction between actual acid sulfate soils (AASS) and potential acid sulfate soils (PASS) is important. AASS are soils that have already been oxidised and are actively generating acid — characterised by jarosite mottling (a distinctive yellow mineral) and pH values below 4. PASS are soils that contain pyrite in an unoxidised state and will generate acid if disturbed. Most coastal development projects encounter PASS rather than AASS, but the management obligation is equally significant.",
      "Identification requires a systematic field investigation. The standard approach involves augering to refusal or to a minimum depth of 1 metre below the lowest anticipated excavation level, with samples collected at regular intervals for field pH testing and laboratory analysis (chrome reducible sulfur for PASS, hydrogen peroxide oxidation for AASS). The AS 4419 standard provides the methodology. In practice, the most common field error is sampling at insufficient depth — failing to extend investigation below proposed excavation levels, where the highest-risk materials often occur.",
      "The management hierarchy for ASS under most state planning frameworks is: avoid disturbance where feasible; neutralise acid generated where disturbance cannot be avoided; and treat drainage from disturbed areas before discharge. Lime treatment is the most commonly used neutralisation method, but the dose must be calculated based on actual acid generation potential measured in the laboratory — generic lime application rates are unreliable and often insufficient.",
      "Dewatering poses particular risks. Lowering the groundwater table exposes previously saturated pyrite-bearing soils to oxygen, triggering oxidation. Dewatering discharge from ASS-impacted sites must be tested and treated before release to waterways. In some jurisdictions, a zero-discharge standard applies during high-risk periods. Failure to manage dewatering in ASS terrain is one of the most common causes of regulatory non-compliance on coastal construction projects.",
      "The practical message for project teams is to treat ASS assessment as a front-end requirement, not a construction-phase surprise. Desktop assessment of ASS risk using state-government predictive mapping should be incorporated into the initial feasibility assessment of any coastal site. Where risk is identified, a targeted investigation should be programmed before design finalisation. The cost of an ASS management plan implemented at design stage is a small fraction of the cost of remediation and regulatory response after construction has commenced.",
    ],
  },
  {
    slug: "noise-dosimetry-vs-area-monitoring",
    publishedAt: "2023-11-03",
    category: "OccHyg" as const,
    title: "Noise Dosimetry vs Area Monitoring — Choosing the Right Method",
    excerpt:
      "Both methods have their place in occupational noise assessment. Understanding when to use each is critical to producing defensible data.",
    author: "M. Osei",
    readTime: "5 min read",
    bodyParagraphs: [
      "Occupational noise assessment in Australia is governed by the model Work Health and Safety Regulations, which set an action level of 85 dB(A) (LAeq,8h) and a peak action level of 140 dB(C). When noise exposures are believed to be at or near these levels, a quantitative assessment is required. The question that assessment practitioners frequently face is which measurement method to use: personal noise dosimetry, area monitoring with a sound level meter, or a combination of both.",
      "Personal noise dosimetry involves attaching a small dosimeter to the worker, typically clipped to the shirt collar near the ear. The dosimeter records noise levels throughout the work shift, producing an integrated daily noise exposure value (LAeq,8h) that represents the worker's actual exposure accounting for their movement between work areas. This is the most direct method and is generally preferred by regulators when the objective is to characterise individual worker exposure for comparison with the WES.",
      "Area monitoring, by contrast, involves positioning a calibrated sound level meter at a fixed location — typically the zone where a worker is expected to spend most of their time — and recording levels for a representative sampling period. The resulting data is then extrapolated to an 8-hour equivalent. Area monitoring is useful for characterising noise hazard zones, evaluating control effectiveness, and conducting initial screening assessments. It is less appropriate as a primary exposure assessment method when workers are mobile, as it cannot account for time spent in quieter areas.",
      "The key difference in application is this: dosimetry reflects what the worker actually experiences; area monitoring reflects what the environment produces. For sedentary workers with a defined workstation — a plant control room operator, for example — the two methods will produce similar results. For mobile workers — maintenance technicians, construction labourers, or process operators who traverse multiple noise zones throughout a shift — dosimetry is substantially more accurate.",
      "Practically, the most defensible approach for initial noise surveys in workplaces with complex noise environments is a combination of both methods. Area monitoring provides a spatial picture of the noise environment and identifies zones requiring priority attention. Dosimetry on representative workers in each job classification then provides the individual exposure data required for comparison with the WES. Where dosimetry results are used to demonstrate compliance or to make engineering control decisions, they should be collected by a qualified occupational hygienist using a calibrated Type 1 or Type 2 integrating-averaging sound level meter or dosimeter in accordance with AS/NZS 1269.",
    ],
  },
  {
    slug: "geotechnical-risk-registers",
    publishedAt: "2023-09-28",
    category: "Geotechnical" as const,
    title: "Building Useful Geotechnical Risk Registers for Infrastructure Projects",
    excerpt:
      "A geotechnical risk register should drive decisions, not sit in a drawer. Here's how to build one that actually gets used.",
    author: "S. Nguyen",
    readTime: "6 min read",
    bodyParagraphs: [
      "Geotechnical risk registers are a standard deliverable on major infrastructure projects in Australia. Most large clients require them. Most design contracts include them. And most of them are produced, reviewed once at a project milestone, and never opened again. This is not because the engineers who produce them lack competence — it is because the registers are typically designed to satisfy a compliance requirement rather than to support active risk management.",
      "A risk register that drives decisions needs to be built differently. The starting point is not a risk matrix — it is a set of questions that the project team actually needs answered. What ground conditions could prevent us from building the structure as designed? Which of those conditions would we not detect with our current investigation scope? If we discovered them during construction, what would it cost and what would we do? These are engineering questions, and the risk register should be structured to address them.",
      "The most useful geotechnical risk registers are structured around geotechnical baseline conditions rather than generic hazard categories. For each significant structure or construction activity, the register identifies the critical ground parameters — bearing capacity, settlement, permeability, shear strength — documents the assumed baseline values, specifies the investigation methods used to determine those values, and quantifies the residual uncertainty. This structure makes it immediately apparent which parameters are well-constrained and which are based on limited data.",
      "Consequence assessment should be specific, not generic. A risk rated 'High' because the consequence is described as 'significant cost impact' is not actionable. A risk rated 'High' because 'foundation settlement exceeding 25 mm would trigger a redesign of the superstructure bearing system, estimated at $850,000 and 6 weeks programme delay' gives a project manager something they can act on — specifically, the justification for additional investigation to reduce uncertainty in settlement prediction.",
      "The register should be a live document. In practice, this means it needs to be assigned to a specific individual who is responsible for reviewing and updating it at defined project milestones, and that the review must be genuinely integrated into project decision-making rather than being a separate compliance exercise. Risk ratings should be updated as investigation data is collected and as design decisions are made that change the project's exposure to identified hazards.",
      "Finally, the geotechnical risk register should be explicitly linked to the site investigation scope and the monitoring and testing plan. Each identified risk of material consequence should have a corresponding investigation or monitoring action that is designed to reduce uncertainty or provide early warning of adverse conditions. If the register identifies a risk but there is no corresponding action to manage it, the register has described a problem without providing a solution — which is the most common failure mode of compliance-driven risk management.",
    ],
  },
];

export const teamMembers = [
  {
    initials: "JH",
    name: "Dr James Harrison",
    role: "Principal — Environmental",
    qualifications: "PhD Environmental Science, CPESC, MAICD",
    bio: "15+ years in environmental consulting across infrastructure, energy, and mining. Led over 80 EIA processes.",
  },
  {
    initials: "MO",
    name: "Michael Osei",
    role: "Principal — Occupational Hygiene",
    qualifications: "B.App.Sc (OHS), COH, FAIOH",
    bio: "10+ years specialising in mining and industrial hygiene. Former Mines Inspector, WA Department of Mines.",
  },
  {
    initials: "SN",
    name: "Sarah Nguyen",
    role: "Principal — Geotechnical",
    qualifications: "BE (Civil) Hons, MEngSc, CPEng, RPEQ",
    bio: "12+ years in geotechnical engineering across Queensland, NT, and offshore. Specialist in slope stability.",
  },
  {
    initials: "PT",
    name: "Paul Tremaine",
    role: "Senior Environmental Scientist",
    qualifications: "BSc (Environmental Science), GradDipEcol",
    bio: "Expert in flora and fauna surveys, ecological offset assessment, and threatened species management.",
  },
  {
    initials: "AB",
    name: "Anita Birch",
    role: "Senior Occupational Hygienist",
    qualifications: "BSc (OHS), MAIOH",
    bio: "Specialist in indoor air quality, asbestos management, and workplace health programme design.",
  },
  {
    initials: "RK",
    name: "Raj Kumar",
    role: "Geotechnical Engineer",
    qualifications: "BE (Civil), ME (Geotechnical)",
    bio: "Specialises in foundation design, pavement assessment, and mine waste geotechnics.",
  },
];

export const jobListings = [
  {
    id: "JOB-001",
    title: "Environmental Scientist — Mid Level",
    location: "Brisbane, QLD",
    type: "Full-time" as const,
    discipline: "Environmental",
    closingDate: "2026-06-30",
    active: true,
    description:
      "We are seeking a mid-level environmental scientist (3–6 years experience) to join our Brisbane office. The role involves EIA, Phase 2 ESA, and contamination management. Hybrid working available.",
  },
  {
    id: "JOB-002",
    title: "Occupational Hygienist — Graduate",
    location: "Perth, WA",
    type: "Full-time" as const,
    discipline: "OccHyg",
    closingDate: "2026-06-15",
    active: true,
    description:
      "A graduate position in our Perth OccHyg team working across mining and construction clients. Mentoring and CPD support provided. AIOH student membership encouraged.",
  },
];
