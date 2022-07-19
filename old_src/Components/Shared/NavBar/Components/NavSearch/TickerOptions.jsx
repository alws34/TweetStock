//src https://www.sec.gov/files/company_tickers.json
const capitalizeWordsFromArray = (arr) => {
  return arr.map(
    (element) =>
      element.charAt(0).toUpperCase() + element.substring(1).toLowerCase()
  );
};

export const capitalizeFirstLetters = (str) =>
  capitalizeWordsFromArray(str.split(" ")).join(" ");

export const getNameFromTicker = (ticker) => {
  for (let i = 0; i < tickerOptions.length; i++) {
    if (tickerOptions[i].ticker === ticker) {
      return capitalizeFirstLetters(tickerOptions[i].title);
    }
  }
  return undefined;
};

// export const isValidStockSearch = (ticker) => {
//   for (let i = 0; i< tickerOptions.length; i++){
//     if 
//   }
// }

export const tickerOptions = [
  {
    ticker: "AAPL",
    title: "Apple Inc.",
  },
  {
    ticker: "MSFT",
    title: "MICROSOFT CORP",
  },
  {
    ticker: "GOOGL",
    title: "Alphabet Inc.",
  },
  {
    ticker: "TSLA",
    title: "Tesla, Inc.",
  },
  {
    ticker: "BRK-B",
    title: "BERKSHIRE HATHAWAY INC",
  },
  {
    ticker: "UNH",
    title: "UNITEDHEALTH GROUP INC",
  },
  {
    ticker: "JNJ",
    title: "JOHNSON & JOHNSON",
  },
  {
    ticker: "TSM",
    title: "TAIWAN SEMICONDUCTOR MANUFACTURING CO LTD",
  },
  {
    ticker: "XOM",
    title: "EXXON MOBIL CORP",
  },
  {
    ticker: "NVDA",
    title: "NVIDIA CORP",
  },
  {
    ticker: "PG",
    title: "PROCTER & GAMBLE Co",
  },
  {
    ticker: "SPY",
    title: "SPDR S&P 500 ETF TRUST",
  },
  {
    ticker: "JPM",
    title: "JPMORGAN CHASE & CO",
  },
  {
    ticker: "WMT",
    title: "Walmart Inc.",
  },
  {
    ticker: "BABA",
    title: "Alibaba Group Holding Ltd",
  },
  {
    ticker: "MA",
    title: "Mastercard Inc",
  },
  {
    ticker: "LLY",
    title: "ELI LILLY & Co",
  },
  {
    ticker: "LVMUY",
    title: "LVMH MOET HENNESSY LOUIS VUITTON",
  },
  {
    ticker: "PFE",
    title: "PFIZER INC",
  },
  {
    ticker: "HD",
    title: "HOME DEPOT, INC.",
  },
  {
    ticker: "CVX",
    title: "CHEVRON CORP",
  },
  {
    ticker: "KO",
    title: "COCA COLA CO",
  },
  {
    ticker: "ABBV",
    title: "AbbVie Inc.",
  },
  {
    ticker: "BAC",
    title: "BANK OF AMERICA CORP /DE/",
  },
  {
    ticker: "NVO",
    title: "NOVO NORDISK A S",
  },
  {
    ticker: "PEP",
    title: "PEPSICO INC",
  },
  {
    ticker: "MRK",
    title: "Merck & Co., Inc.",
  },
  {
    ticker: "VZ",
    title: "VERIZON COMMUNICATIONS INC",
  },
  {
    ticker: "TMO",
    title: "THERMO FISHER SCIENTIFIC INC.",
  },
  {
    ticker: "TM",
    title: "TOYOTA MOTOR CORP/",
  },
  {
    ticker: "COST",
    title: "COSTCO WHOLESALE CORP /NEW",
  },
  {
    ticker: "AZN",
    title: "ASTRAZENECA PLC",
  },
  {
    ticker: "AVGO",
    title: "Broadcom Inc.",
  },
  {
    ticker: "ABT",
    title: "ABBOTT LABORATORIES",
  },
  {
    ticker: "ORCL",
    title: "ORACLE CORP",
  },
  {
    ticker: "NVS",
    title: "NOVARTIS AG",
  },
  {
    ticker: "MCD",
    title: "MCDONALDS CORP",
  },
  {
    ticker: "DHR",
    title: "DANAHER CORP /DE/",
  },
  {
    ticker: "CMCSA",
    title: "COMCAST CORP",
  },
  {
    ticker: "ASML",
    title: "ASML HOLDING NV",
  },
  {
    ticker: "CSCO",
    title: "CISCO SYSTEMS, INC.",
  },
  {
    ticker: "ACN",
    title: "Accenture plc",
  },
  {
    ticker: "ADBE",
    title: "ADOBE INC.",
  },
  {
    ticker: "DIS",
    title: "Walt Disney Co",
  },
  {
    ticker: "TMUS",
    title: "T-Mobile US, Inc.",
  },
  {
    ticker: "BMY",
    title: "BRISTOL MYERS SQUIBB CO",
  },
  {
    ticker: "CRM",
    title: "Salesforce, Inc.",
  },
  {
    ticker: "UPS",
    title: "UNITED PARCEL SERVICE INC",
  },
  {
    ticker: "NKE",
    title: "NIKE, Inc.",
  },
  {
    ticker: "WFC",
    title: "WELLS FARGO & COMPANY/MN",
  },
  {
    ticker: "NEE",
    title: "NEXTERA ENERGY INC",
  },
  {
    ticker: "PM",
    title: "Philip Morris International Inc.",
  },
  {
    ticker: "T",
    title: "AT&T INC.",
  },
  {
    ticker: "INTC",
    title: "INTEL CORP",
  },
  {
    ticker: "LIN",
    title: "LINDE PLC",
  },
  {
    ticker: "RTX",
    title: "RAYTHEON TECHNOLOGIES CORP",
  },
  {
    ticker: "PTR",
    title: "PETROCHINA CO LTD",
  },
  {
    ticker: "RY",
    title: "ROYAL BANK OF CANADA",
  },
  {
    ticker: "UNP",
    title: "UNION PACIFIC CORP",
  },
  {
    ticker: "QCOM",
    title: "QUALCOMM INC/DE",
  },
  {
    ticker: "AMGN",
    title: "AMGEN INC",
  },
  {
    ticker: "TTE",
    title: "TotalEnergies SE",
  },
  {
    ticker: "MS",
    title: "MORGAN STANLEY",
  },
  {
    ticker: "TXN",
    title: "TEXAS INSTRUMENTS INC",
  },
  {
    ticker: "BHP",
    title: "BHP Group Ltd",
  },
  {
    ticker: "HSBC",
    title: "HSBC HOLDINGS PLC",
  },
  {
    ticker: "SNY",
    title: "Sanofi",
  },
  {
    ticker: "IBM",
    title: "INTERNATIONAL BUSINESS MACHINES CORP",
  },
  {
    ticker: "CVS",
    title: "CVS HEALTH Corp",
  },
  {
    ticker: "MDT",
    title: "Medtronic plc",
  },
  {
    ticker: "SCHW",
    title: "SCHWAB CHARLES CORP",
  },
  {
    ticker: "TD",
    title: "TORONTO DOMINION BANK",
  },
  {
    ticker: "HON",
    title: "HONEYWELL INTERNATIONAL INC",
  },
  {
    ticker: "COP",
    title: "CONOCOPHILLIPS",
  },
  {
    ticker: "LMT",
    title: "LOCKHEED MARTIN CORP",
  },
  {
    ticker: "LOW",
    title: "LOWES COMPANIES INC",
  },
  {
    ticker: "UL",
    title: "UNILEVER PLC",
  },
  {
    ticker: "AMT",
    title: "AMERICAN TOWER CORP /MA/",
  },
  {
    ticker: "ASTI",
    title: "Ascent Solar Technologies, Inc.",
  },
  {
    ticker: "QQQ",
    title: "INVESCO QQQ TRUST, SERIES 1",
  },
  {
    ticker: "EQNR",
    title: "EQUINOR ASA",
  },
  {
    ticker: "LFC",
    title: "CHINA LIFE INSURANCE CO LTD",
  },
  {
    ticker: "GSK",
    title: "GSK PLC",
  },
  {
    ticker: "INTU",
    title: "INTUIT INC",
  },
  {
    ticker: "JD",
    title: "JD.com, Inc.",
  },
  {
    ticker: "AXP",
    title: "AMERICAN EXPRESS CO",
  },
  {
    ticker: "RTNTF",
    title: "RIO TINTO LTD",
  },
  {
    ticker: "SAP",
    title: "SAP SE",
  },
  {
    ticker: "HDB",
    title: "HDFC BANK LTD",
  },
  {
    ticker: "SONY",
    title: "Sony Group Corp",
  },
  {
    ticker: "DEO",
    title: "DIAGEO PLC",
  },
  {
    ticker: "GS",
    title: "GOLDMAN SACHS GROUP INC",
  },
  {
    ticker: "BTI",
    title: "British American Tobacco p.l.c.",
  },
  {
    ticker: "RIO",
    title: "RIO TINTO PLC",
  },
  {
    ticker: "BUD",
    title: "Anheuser-Busch InBev SA/NV",
  },
  {
    ticker: "CAT",
    title: "CATERPILLAR INC",
  },
  {
    ticker: "NOW",
    title: "ServiceNow, Inc.",
  },
  {
    ticker: "BLK",
    title: "BlackRock Inc.",
  },
  {
    ticker: "C",
    title: "CITIGROUP INC",
  },
  {
    ticker: "BP",
    title: "BP PLC",
  },
  {
    ticker: "DE",
    title: "DEERE & CO",
  },
  {
    ticker: "EL",
    title: "ESTEE LAUDER COMPANIES INC",
  },
  {
    ticker: "ADP",
    title: "AUTOMATIC DATA PROCESSING INC",
  },
  {
    ticker: "AMD",
    title: "ADVANCED MICRO DEVICES INC",
  },
  {
    ticker: "CI",
    title: "Cigna Corp",
  },
  {
    ticker: "PLD",
    title: "Prologis, Inc.",
  },
  {
    ticker: "MDLZ",
    title: "Mondelez International, Inc.",
  },
  {
    ticker: "CSLLY",
    title: "CSL LTD",
  },
  {
    ticker: "ENB",
    title: "ENBRIDGE INC",
  },
  {
    ticker: "CHTR",
    title: "CHARTER COMMUNICATIONS, INC. /MO/",
  },
  {
    ticker: "CB",
    title: "Chubb Ltd",
  },
  {
    ticker: "DUK",
    title: "Duke Energy CORP",
  },
  {
    ticker: "PYPL",
    title: "PayPal Holdings, Inc.",
  },
  {
    ticker: "SPGI",
    title: "S&P Global Inc.",
  },
  {
    ticker: "ZTS",
    title: "Zoetis Inc.",
  },
  {
    ticker: "BA",
    title: "BOEING CO",
  },
  {
    ticker: "PDD",
    title: "Pinduoduo Inc.",
  },
  {
    ticker: "INFY",
    title: "Infosys Ltd",
  },
  {
    ticker: "CNI",
    title: "CANADIAN NATIONAL RAILWAY CO",
  },
  {
    ticker: "NFLX",
    title: "NETFLIX INC",
  },
  {
    ticker: "EADSY",
    title: "Airbus SE/ADR",
  },
  {
    ticker: "MMC",
    title: "MARSH & MCLENNAN COMPANIES, INC.",
  },
  {
    ticker: "GILD",
    title: "GILEAD SCIENCES, INC.",
  },
  {
    ticker: "MO",
    title: "ALTRIA GROUP, INC.",
  },
  {
    ticker: "SO",
    title: "SOUTHERN CO",
  },
  {
    ticker: "SYK",
    title: "STRYKER CORP",
  },
  {
    ticker: "PBR",
    title: "PETROBRAS - PETROLEO BRASILEIRO SA",
  },
  {
    ticker: "AMAT",
    title: "APPLIED MATERIALS INC /DE",
  },
  {
    ticker: "NOC",
    title: "NORTHROP GRUMMAN CORP /DE/",
  },
  {
    ticker: "ADI",
    title: "ANALOG DEVICES INC",
  },
  {
    ticker: "CCI",
    title: "CROWN CASTLE INTERNATIONAL CORP",
  },
  {
    ticker: "MMM",
    title: "3M CO",
  },
  {
    ticker: "ISRG",
    title: "INTUITIVE SURGICAL INC",
  },
  {
    ticker: "CME",
    title: "CME GROUP INC.",
  },
  {
    ticker: "VRTX",
    title: "VERTEX PHARMACEUTICALS INC / MA",
  },
  {
    ticker: "BKNG",
    title: "Booking Holdings Inc.",
  },
  {
    ticker: "IDEXY",
    title: "Industria de Diseno Textil Inditex SA / ADR",
  },
  {
    ticker: "MUFG",
    title: "MITSUBISHI UFJ FINANCIAL GROUP INC",
  },
  {
    ticker: "BDX",
    title: "BECTON DICKINSON & CO",
  },
  {
    ticker: "SNP",
    title: "CHINA PETROLEUM & CHEMICAL CORP",
  },
  {
    ticker: "BNS",
    title: "BANK OF NOVA SCOTIA",
  },
  {
    ticker: "BAM",
    title: "BROOKFIELD ASSET MANAGEMENT INC.",
  },
  {
    ticker: "GE",
    title: "GENERAL ELECTRIC CO",
  },
  {
    ticker: "PGR",
    title: "PROGRESSIVE CORP/OH/",
  },
  {
    ticker: "CL",
    title: "COLGATE PALMOLIVE CO",
  },
  {
    ticker: "USB",
    title: "US BANCORP \\DE\\",
  },
  {
    ticker: "VALE",
    title: "Vale S.A.",
  },
  {
    ticker: "TGT",
    title: "TARGET CORP",
  },
  {
    ticker: "PNC",
    title: "PNC FINANCIAL SERVICES GROUP, INC.",
  },
  {
    ticker: "GLNCY",
    title: "Glencore plc/ADR",
  },
  {
    ticker: "TJX",
    title: "TJX COMPANIES INC /DE/",
  },
  {
    ticker: "SFTBY",
    title: "SOFTBANK GROUP CORP",
  },
  {
    ticker: "CP",
    title: "CANADIAN PACIFIC RAILWAY LTD/CN",
  },
  {
    ticker: "BX",
    title: "Blackstone Inc.",
  },
  {
    ticker: "AMOV",
    title: "AMERICA MOVIL SAB DE CV/",
  },
  {
    ticker: "D",
    title: "DOMINION ENERGY, INC",
  },
  {
    ticker: "EOG",
    title: "EOG RESOURCES INC",
  },
  {
    ticker: "WM",
    title: "WASTE MANAGEMENT INC",
  },
  {
    ticker: "CSX",
    title: "CSX CORP",
  },
  {
    ticker: "CTA-PA",
    title: "DUPONT E I DE NEMOURS & CO",
  },
  {
    ticker: "CNQ",
    title: "CANADIAN NATURAL RESOURCES LTD",
  },
  {
    ticker: "TFC",
    title: "TRUIST FINANCIAL CORP",
  },
  {
    ticker: "NTES",
    title: "NetEase, Inc.",
  },
  {
    ticker: "REGN",
    title: "REGENERON PHARMACEUTICALS, INC.",
  },
  {
    ticker: "IBN",
    title: "ICICI BANK LTD",
  },
  {
    ticker: "BMO",
    title: "BANK OF MONTREAL /CAN/",
  },
  {
    ticker: "GD",
    title: "GENERAL DYNAMICS CORP",
  },
  {
    ticker: "DMLRY",
    title: "DAIMLER AG",
  },
  {
    ticker: "SHW",
    title: "SHERWIN WILLIAMS CO",
  },
  {
    ticker: "HUM",
    title: "HUMANA INC",
  },
  {
    ticker: "ATVI",
    title: "Activision Blizzard, Inc.",
  },
  {
    ticker: "FISV",
    title: "FISERV INC",
  },
  {
    ticker: "EW",
    title: "Edwards Lifesciences Corp",
  },
  {
    ticker: "MRNA",
    title: "Moderna, Inc.",
  },
  {
    ticker: "EQIX",
    title: "EQUINIX INC",
  },
  {
    ticker: "AON",
    title: "Aon plc",
  },
  {
    ticker: "MU",
    title: "MICRON TECHNOLOGY INC",
  },
  {
    ticker: "PBCRY",
    title: "PT Bank Central Asia Tbk / ADR",
  },
  {
    ticker: "FDX",
    title: "FEDEX CORP",
  },
  {
    ticker: "ABNB",
    title: "Airbnb, Inc.",
  },
  {
    ticker: "ITW",
    title: "ILLINOIS TOOL WORKS INC",
  },
  {
    ticker: "DG",
    title: "DOLLAR GENERAL CORP",
  },
  {
    ticker: "FIS",
    title: "Fidelity National Information Services, Inc.",
  },
  {
    ticker: "ENLAY",
    title: "ENEL SOCIETA PER AZIONI",
  },
  {
    ticker: "OXY",
    title: "OCCIDENTAL PETROLEUM CORP /DE/",
  },
  {
    ticker: "PSA",
    title: "Public Storage",
  },
  {
    ticker: "NSC",
    title: "NORFOLK SOUTHERN CORP",
  },
  {
    ticker: "LRCX",
    title: "LAM RESEARCH CORP",
  },
  {
    ticker: "UBS",
    title: "UBS Group AG",
  },
  {
    ticker: "AMZN",
    title: "AMAZON COM INC",
  },
  {
    ticker: "PXD",
    title: "PIONEER NATURAL RESOURCES CO",
  },
  {
    ticker: "RBGLY",
    title: "RECKITT BENCKISER GROUP PLC",
  },
  {
    ticker: "HCA",
    title: "HCA Healthcare, Inc.",
  },
  {
    ticker: "BSX",
    title: "BOSTON SCIENTIFIC CORP",
  },
  {
    ticker: "APD",
    title: "Air Products & Chemicals, Inc.",
  },
  {
    ticker: "EPD",
    title: "ENTERPRISE PRODUCTS PARTNERS L.P.",
  },
  {
    ticker: "ICE",
    title: "Intercontinental Exchange, Inc.",
  },
  {
    ticker: "MET",
    title: "METLIFE INC",
  },
  {
    ticker: "BIDU",
    title: "Baidu, Inc.",
  },
  {
    ticker: "ABB",
    title: "ABB LTD",
  },
  {
    ticker: "MPC",
    title: "Marathon Petroleum Corp",
  },
  {
    ticker: "SU",
    title: "SUNCOR ENERGY INC",
  },
  {
    ticker: "RELX",
    title: "RELX PLC",
  },
  {
    ticker: "TRP",
    title: "TC ENERGY CORP",
  },
  {
    ticker: "KDP",
    title: "Keurig Dr Pepper Inc.",
  },
  {
    ticker: "MCO",
    title: "MOODYS CORP /DE/",
  },
  {
    ticker: "ETN",
    title: "Eaton Corp plc",
  },
  {
    ticker: "TRI",
    title: "THOMSON REUTERS CORP /CAN/",
  },
  {
    ticker: "MCK",
    title: "MCKESSON CORP",
  },
  {
    ticker: "CNC",
    title: "CENTENE CORP",
  },
  {
    ticker: "PANW",
    title: "Palo Alto Networks Inc",
  },
  {
    ticker: "MNST",
    title: "Monster Beverage Corp",
  },
  {
    ticker: "SLB",
    title: "SCHLUMBERGER LIMITED/NV",
  },
  {
    ticker: "TEAM",
    title: "Atlassian Corp Plc",
  },
  {
    ticker: "SRE",
    title: "SEMPRA ENERGY",
  },
  {
    ticker: "NEM",
    title: "NEWMONT Corp /DE/",
  },
  {
    ticker: "AEP",
    title: "AMERICAN ELECTRIC POWER CO INC",
  },
  {
    ticker: "SAN",
    title: "Banco Santander, S.A.",
  },
  {
    ticker: "EMR",
    title: "EMERSON ELECTRIC CO",
  },
  {
    ticker: "VMW",
    title: "VMWARE, INC.",
  },
  {
    ticker: "NGG",
    title: "NATIONAL GRID PLC",
  },
  {
    ticker: "LHX",
    title: "L3HARRIS TECHNOLOGIES, INC. /DE/",
  },
  {
    ticker: "PRNDY",
    title: "PERNOD RICARD S A /FI",
  },
  {
    ticker: "KHC",
    title: "Kraft Heinz Co",
  },
  {
    ticker: "RACE",
    title: "Ferrari N.V.",
  },
  {
    ticker: "GM",
    title: "General Motors Co",
  },
  {
    ticker: "SNPS",
    title: "SYNOPSYS INC",
  },
  {
    ticker: "KMB",
    title: "KIMBERLY CLARK CORP",
  },
  {
    ticker: "GIS",
    title: "GENERAL MILLS INC",
  },
  {
    ticker: "HSY",
    title: "HERSHEY CO",
  },
  {
    ticker: "COF",
    title: "CAPITAL ONE FINANCIAL CORP",
  },
  {
    ticker: "MAR",
    title: "MARRIOTT INTERNATIONAL INC /MD/",
  },
  {
    ticker: "BCE",
    title: "BCE INC",
  },
  {
    ticker: "F",
    title: "FORD MOTOR CO",
  },
  {
    ticker: "NTR",
    title: "Nutrien Ltd.",
  },
  {
    ticker: "ECL",
    title: "ECOLAB INC.",
  },
  {
    ticker: "EXC",
    title: "EXELON CORP",
  },
  {
    ticker: "KLAC",
    title: "KLA CORP",
  },
  {
    ticker: "AZO",
    title: "AUTOZONE INC",
  },
  {
    ticker: "SNOW",
    title: "Snowflake Inc.",
  },
  {
    ticker: "SYY",
    title: "SYSCO CORP",
  },
  {
    ticker: "VLO",
    title: "VALERO ENERGY CORP/TX",
  },
  {
    ticker: "STZ",
    title: "CONSTELLATION BRANDS, INC.",
  },
  {
    ticker: "TAK",
    title: "TAKEDA PHARMACEUTICAL CO LTD",
  },
  {
    ticker: "GLD",
    title: "SPDR GOLD TRUST",
  },
  {
    ticker: "AIG",
    title: "AMERICAN INTERNATIONAL GROUP, INC.",
  },
  {
    ticker: "FCX",
    title: "FREEPORT-MCMORAN INC",
  },
  {
    ticker: "ORLY",
    title: "O REILLY AUTOMOTIVE INC",
  },
  {
    ticker: "ADM",
    title: "Archer-Daniels-Midland Co",
  },
  {
    ticker: "VOD",
    title: "VODAFONE GROUP PUBLIC LTD CO",
  },
  {
    ticker: "CNTTQ",
    title: "CannTrust Holdings Inc.",
  },
  {
    ticker: "E",
    title: "ENI SPA",
  },
  {
    ticker: "ROP",
    title: "ROPER TECHNOLOGIES INC",
  },
  {
    ticker: "RSG",
    title: "REPUBLIC SERVICES, INC.",
  },
  {
    ticker: "TRV",
    title: "TRAVELERS COMPANIES, INC.",
  },
  {
    ticker: "PAYX",
    title: "PAYCHEX INC",
  },
  {
    ticker: "ITUB",
    title: "Itau Unibanco Holding S.A.",
  },
  {
    ticker: "HMC",
    title: "HONDA MOTOR CO LTD",
  },
  {
    ticker: "CDNS",
    title: "CADENCE DESIGN SYSTEMS INC",
  },
  {
    ticker: "UBER",
    title: "Uber Technologies, Inc",
  },
  {
    ticker: "CRWD",
    title: "CrowdStrike Holdings, Inc.",
  },
  {
    ticker: "IQV",
    title: "IQVIA HOLDINGS INC.",
  },
  {
    ticker: "SMFG",
    title: "SUMITOMO MITSUI FINANCIAL GROUP, INC.",
  },
  {
    ticker: "BSBR",
    title: "Banco Santander (Brasil) S.A.",
  },
  {
    ticker: "ABEV",
    title: "AMBEV S.A.",
  },
  {
    ticker: "O",
    title: "REALTY INCOME CORP",
  },
  {
    ticker: "CTVA",
    title: "Corteva, Inc.",
  },
  {
    ticker: "XEL",
    title: "XCEL ENERGY INC",
  },
  {
    ticker: "CTAS",
    title: "CINTAS CORP",
  },
  {
    ticker: "LI",
    title: "Li Auto Inc.",
  },
  {
    ticker: "NXPI",
    title: "NXP Semiconductors N.V.",
  },
  {
    ticker: "STLA",
    title: "Stellantis N.V.",
  },
  {
    ticker: "SCCO",
    title: "SOUTHERN COPPER CORP/",
  },
  {
    ticker: "SE",
    title: "Sea Ltd",
  },
  {
    ticker: "KMI",
    title: "KINDER MORGAN, INC.",
  },
  {
    ticker: "ADSK",
    title: "Autodesk, Inc.",
  },
  {
    ticker: "CVE",
    title: "CENOVUS ENERGY INC.",
  },
  {
    ticker: "DOW",
    title: "DOW INC.",
  },
  {
    ticker: "BNTX",
    title: "BioNTech SE",
  },
  {
    ticker: "APH",
    title: "AMPHENOL CORP /DE/",
  },
  {
    ticker: "WMB",
    title: "WILLIAMS COMPANIES, INC.",
  },
  {
    ticker: "ING",
    title: "ING GROEP NV",
  },
  {
    ticker: "ALL",
    title: "ALLSTATE CORP",
  },
  {
    ticker: "DLR",
    title: "DIGITAL REALTY TRUST, INC.",
  },
  {
    ticker: "DVN",
    title: "DEVON ENERGY CORP/DE",
  },
  {
    ticker: "AFL",
    title: "AFLAC INC",
  },
  {
    ticker: "PSX",
    title: "Phillips 66",
  },
  {
    ticker: "LYG",
    title: "Lloyds Banking Group plc",
  },
  {
    ticker: "PRU",
    title: "PRUDENTIAL FINANCIAL INC",
  },
  {
    ticker: "CMG",
    title: "CHIPOTLE MEXICAN GRILL INC",
  },
  {
    ticker: "TEL",
    title: "TE Connectivity Ltd.",
  },
  {
    ticker: "WELL",
    title: "WELLTOWER INC.",
  },
  {
    ticker: "CTSH",
    title: "COGNIZANT TECHNOLOGY SOLUTIONS CORP",
  },
  {
    ticker: "A",
    title: "AGILENT TECHNOLOGIES, INC.",
  },
  {
    ticker: "SBAC",
    title: "SBA COMMUNICATIONS CORP",
  },
  {
    ticker: "MRVL",
    title: "Marvell Technology, Inc.",
  },
  {
    ticker: "WDAY",
    title: "Workday, Inc.",
  },
  {
    ticker: "DANOY",
    title: "GROUPE DANONE",
  },
  {
    ticker: "MSI",
    title: "Motorola Solutions, Inc.",
  },
  {
    ticker: "KR",
    title: "KROGER CO",
  },
  {
    ticker: "DLTR",
    title: "DOLLAR TREE, INC.",
  },
  {
    ticker: "ALC",
    title: "ALCON INC",
  },
  {
    ticker: "BK",
    title: "Bank of New York Mellon Corp",
  },
  {
    ticker: "PUK",
    title: "PRUDENTIAL PLC",
  },
  {
    ticker: "EDU",
    title: "New Oriental Education & Technology Group Inc.",
  },
  {
    ticker: "EA",
    title: "ELECTRONIC ARTS INC.",
  },
  {
    ticker: "BF-A",
    title: "BROWN FORMAN CORP",
  },
  {
    ticker: "HPQ",
    title: "HP INC",
  },
  {
    ticker: "MSCI",
    title: "MSCI Inc.",
  },
  {
    ticker: "ED",
    title: "CONSOLIDATED EDISON INC",
  },
  {
    ticker: "YUM",
    title: "YUM BRANDS INC",
  },
  {
    ticker: "JCI",
    title: "Johnson Controls International plc",
  },
  {
    ticker: "AJG",
    title: "Arthur J. Gallagher & Co.",
  },
  {
    ticker: "LULU",
    title: "lululemon athletica inc.",
  },
  {
    ticker: "MFC",
    title: "MANULIFE FINANCIAL CORP",
  },
  {
    ticker: "NIO",
    title: "NIO Inc.",
  },
  {
    ticker: "LNG",
    title: "Cheniere Energy, Inc.",
  },
  {
    ticker: "WBA",
    title: "Walgreens Boots Alliance, Inc.",
  },
  {
    ticker: "MELI",
    title: "MERCADOLIBRE INC",
  },
  {
    ticker: "IAU",
    title: "ISHARES GOLD TRUST",
  },
  {
    ticker: "ZM",
    title: "Zoom Video Communications, Inc.",
  },
  {
    ticker: "WCN",
    title: "Waste Connections, Inc.",
  },
  {
    ticker: "SGEN",
    title: "Seagen Inc.",
  },
  {
    ticker: "IMO",
    title: "IMPERIAL OIL LTD",
  },
  {
    ticker: "BAX",
    title: "BAXTER INTERNATIONAL INC",
  },
  {
    ticker: "PEG",
    title: "PUBLIC SERVICE ENTERPRISE GROUP INC",
  },
  {
    ticker: "DELL",
    title: "Dell Technologies Inc.",
  },
  {
    ticker: "HES",
    title: "HESS CORP",
  },
  {
    ticker: "BAESY",
    title: "BAE SYSTEMS PLC /FI/",
  },
  {
    ticker: "CHT",
    title: "CHUNGHWA TELECOM CO LTD",
  },
  {
    ticker: "WEC",
    title: "WEC ENERGY GROUP, INC.",
  },
  {
    ticker: "GPN",
    title: "GLOBAL PAYMENTS INC",
  },
  {
    ticker: "GOLD",
    title: "BARRICK GOLD CORP",
  },
  {
    ticker: "PH",
    title: "PARKER HANNIFIN CORP",
  },
  {
    ticker: "ET",
    title: "Energy Transfer LP",
  },
  {
    ticker: "BCS",
    title: "BARCLAYS PLC",
  },
  {
    ticker: "DDOG",
    title: "Datadog, Inc.",
  },
  {
    ticker: "HLT",
    title: "Hilton Worldwide Holdings Inc.",
  },
  {
    ticker: "SPG",
    title: "SIMON PROPERTY GROUP INC /DE/",
  },
  {
    ticker: "RMD",
    title: "RESMED INC",
  },
  {
    ticker: "VEEV",
    title: "VEEVA SYSTEMS INC",
  },
  {
    ticker: "BBD",
    title: "BANK BRADESCO",
  },
  {
    ticker: "ORAN",
    title: "ORANGE",
  },
  {
    ticker: "TT",
    title: "Trane Technologies plc",
  },
  {
    ticker: "CARR",
    title: "CARRIER GLOBAL Corp",
  },
  {
    ticker: "MCHP",
    title: "MICROCHIP TECHNOLOGY INC",
  },
  {
    ticker: "TSN",
    title: "TYSON FOODS, INC.",
  },
  {
    ticker: "BIIB",
    title: "BIOGEN INC.",
  },
  {
    ticker: "IFNNY",
    title: "INFINEON TECHNOLOGIES AG",
  },
  {
    ticker: "NWG",
    title: "NatWest Group plc",
  },
  {
    ticker: "TU",
    title: "TELUS CORP",
  },
  {
    ticker: "TWTR",
    title: "TWITTER, INC.",
  },
  {
    ticker: "OTIS",
    title: "Otis Worldwide Corp",
  },
  {
    ticker: "IDXX",
    title: "IDEXX LABORATORIES INC /DE",
  },
  {
    ticker: "IFF",
    title: "INTERNATIONAL FLAVORS & FRAGRANCES INC",
  },
  {
    ticker: "MPLX",
    title: "MPLX LP",
  },
  {
    ticker: "NUE",
    title: "NUCOR CORP",
  },
  {
    ticker: "ODFL",
    title: "OLD DOMINION FREIGHT LINE, INC.",
  },
  {
    ticker: "ES",
    title: "EVERSOURCE ENERGY",
  },
  {
    ticker: "TDG",
    title: "TransDigm Group INC",
  },
  {
    ticker: "ILMN",
    title: "ILLUMINA, INC.",
  },
  {
    ticker: "BBVA",
    title: "BANCO BILBAO VIZCAYA ARGENTARIA, S.A.",
  },
  {
    ticker: "ABC",
    title: "AMERISOURCEBERGEN CORP",
  },
  {
    ticker: "TEF",
    title: "TELEFONICA S A",
  },
  {
    ticker: "WIT",
    title: "WIPRO LTD",
  },
  {
    ticker: "APO",
    title: "Apollo Global Management, Inc.",
  },
  {
    ticker: "SQ",
    title: "Block, Inc.",
  },
  {
    ticker: "LYB",
    title: "LyondellBasell Industries N.V.",
  },
  {
    ticker: "MFG",
    title: "MIZUHO FINANCIAL GROUP INC",
  },
  {
    ticker: "PCAR",
    title: "PACCAR INC",
  },
  {
    ticker: "ANET",
    title: "Arista Networks, Inc.",
  },
  {
    ticker: "LGFRY",
    title: "Longfor Group Holdings Limited/ADR",
  },
  {
    ticker: "DFS",
    title: "Discover Financial Services",
  },
  {
    ticker: "FAST",
    title: "FASTENAL CO",
  },
  {
    ticker: "DD",
    title: "DuPont de Nemours, Inc.",
  },
  {
    ticker: "VRSK",
    title: "Verisk Analytics, Inc.",
  },
  {
    ticker: "HAL",
    title: "HALLIBURTON CO",
  },
  {
    ticker: "LCID",
    title: "Lucid Group, Inc.",
  },
  {
    ticker: "PPG",
    title: "PPG INDUSTRIES INC",
  },
  {
    ticker: "AWK",
    title: "American Water Works Company, Inc.",
  },
  {
    ticker: "DNBBY",
    title: "DnB NOR ASA",
  },
  {
    ticker: "CMI",
    title: "CUMMINS INC",
  },
  {
    ticker: "CAIXY",
    title: "CaixaBank/ADR",
  },
  {
    ticker: "STM",
    title: "STMicroelectronics N.V.",
  },
  {
    ticker: "XPEV",
    title: "XPENG INC.",
  },
  {
    ticker: "AVB",
    title: "AVALONBAY COMMUNITIES INC",
  },
  {
    ticker: "EQR",
    title: "EQUITY RESIDENTIAL",
  },
  {
    ticker: "KKR",
    title: "KKR & Co. Inc.",
  },
  {
    ticker: "EXPGY",
    title: "Experian Group LTD",
  },
  {
    ticker: "GLW",
    title: "CORNING INC /NY",
  },
  {
    ticker: "SLF",
    title: "SUN LIFE FINANCIAL INC",
  },
  {
    ticker: "TLK",
    title: "PERUSAHAAN PERSEROAN PERSERO PT TELEKOMUNIKASI INDONESIA TBK",
  },
  {
    ticker: "CRH",
    title: "CRH PUBLIC LTD CO",
  },
  {
    ticker: "LVS",
    title: "LAS VEGAS SANDS CORP",
  },
  {
    ticker: "EBAY",
    title: "EBAY INC",
  },
  {
    ticker: "MTD",
    title: "METTLER TOLEDO INTERNATIONAL INC/",
  },
  {
    ticker: "AMP",
    title: "AMERIPRISE FINANCIAL INC",
  },
  {
    ticker: "TROW",
    title: "PRICE T ROWE GROUP INC",
  },
  {
    ticker: "FRC",
    title: "FIRST REPUBLIC BANK",
  },
  {
    ticker: "ENPH",
    title: "Enphase Energy, Inc.",
  },
  {
    ticker: "CPNG",
    title: "Coupang, Inc.",
  },
  {
    ticker: "NOK",
    title: "NOKIA CORP",
  },
  {
    ticker: "HCMLY",
    title: "LafargeHolcim Ltd/ADR",
  },
  {
    ticker: "RWEOY",
    title: "RWE AG /FI",
  },
  {
    ticker: "CPRT",
    title: "COPART INC",
  },
  {
    ticker: "NDAQ",
    title: "NASDAQ, INC.",
  },
  {
    ticker: "HRL",
    title: "HORMEL FOODS CORP /DE/",
  },
  {
    ticker: "AME",
    title: "AMETEK INC/",
  },
  {
    ticker: "ARZGY",
    title: "Assicurazioni Generali S.p.A.",
  },
  {
    ticker: "CKHUY",
    title: "CK Hutchison Holdings Limited/ADR",
  },
  {
    ticker: "FNV",
    title: "FRANCO NEVADA Corp",
  },
  {
    ticker: "WY",
    title: "WEYERHAEUSER CO",
  },
  {
    ticker: "CBRE",
    title: "CBRE GROUP, INC.",
  },
  {
    ticker: "BKR",
    title: "Baker Hughes Co",
  },
  {
    ticker: "OKE",
    title: "ONEOK INC /NEW/",
  },
  {
    ticker: "DIA",
    title: "SPDR DOW JONES INDUSTRIAL AVERAGE ETF TRUST",
  },
  {
    ticker: "ROST",
    title: "ROSS STORES, INC.",
  },
  {
    ticker: "ERIC",
    title: "ERICSSON LM TELEPHONE CO",
  },
  {
    ticker: "DTE",
    title: "DTE ENERGY CO",
  },
  {
    ticker: "DHI",
    title: "HORTON D R INC /DE/",
  },
  {
    ticker: "KEYS",
    title: "Keysight Technologies, Inc.",
  },
  {
    ticker: "SIRI",
    title: "SIRIUS XM HOLDINGS INC.",
  },
  {
    ticker: "APTV",
    title: "Aptiv PLC",
  },
  {
    ticker: "RCI",
    title: "ROGERS COMMUNICATIONS INC",
  },
  {
    ticker: "FMX",
    title: "MEXICAN ECONOMIC DEVELOPMENT INC",
  },
  {
    ticker: "CCEP",
    title: "COCA-COLA EUROPACIFIC PARTNERS plc",
  },
  {
    ticker: "K",
    title: "KELLOGG CO",
  },
  {
    ticker: "LNNGY",
    title: "Li Ning Co. Ltd.",
  },
  {
    ticker: "FERG",
    title: "Ferguson plc",
  },
  {
    ticker: "EIX",
    title: "EDISON INTERNATIONAL",
  },
  {
    ticker: "CSGP",
    title: "COSTAR GROUP, INC.",
  },
  {
    ticker: "SQM",
    title: "CHEMICAL & MINING CO OF CHILE INC",
  },
  {
    ticker: "CAJ",
    title: "CANON INC",
  },
  {
    ticker: "CLR",
    title: "CONTINENTAL RESOURCES, INC",
  },
  {
    ticker: "ALB",
    title: "ALBEMARLE CORP",
  },
  {
    ticker: "GWW",
    title: "W.W. GRAINGER, INC.",
  },
  {
    ticker: "AEE",
    title: "AMEREN CORP",
  },
  {
    ticker: "TSCDY",
    title: "TESCO PLC /FI",
  },
  {
    ticker: "GWLIF",
    title: "GREAT-WEST LIFECO INC.",
  },
  {
    ticker: "PPERY",
    title: "PT Bank Mandiri (Persero) Tbk / ADR",
  },
  {
    ticker: "CHD",
    title: "CHURCH & DWIGHT CO INC /DE/",
  },
  {
    ticker: "SIVB",
    title: "SVB FINANCIAL GROUP",
  },
  {
    ticker: "EXR",
    title: "Extra Space Storage Inc.",
  },
  {
    ticker: "DASH",
    title: "DoorDash, Inc.",
  },
  {
    ticker: "IBKR",
    title: "Interactive Brokers Group, Inc.",
  },
  {
    ticker: "MDY",
    title: "SPDR S&P MIDCAP 400 ETF TRUST",
  },
  {
    ticker: "STT",
    title: "STATE STREET CORP",
  },
  {
    ticker: "ETR",
    title: "ENTERGY CORP /DE/",
  },
  {
    ticker: "FITB",
    title: "FIFTH THIRD BANCORP",
  },
  {
    ticker: "LH",
    title: "LABORATORY CORP OF AMERICA HOLDINGS",
  },
  {
    ticker: "ROK",
    title: "ROCKWELL AUTOMATION, INC",
  },
  {
    ticker: "PCG",
    title: "PG&E Corp",
  },
  {
    ticker: "ARE",
    title: "ALEXANDRIA REAL ESTATE EQUITIES, INC.",
  },
  {
    ticker: "FTS",
    title: "Fortis Inc.",
  },
  {
    ticker: "WST",
    title: "WEST PHARMACEUTICAL SERVICES INC",
  },
  {
    ticker: "EC",
    title: "ECOPETROL S.A.",
  },
  {
    ticker: "EFX",
    title: "EQUIFAX INC",
  },
  {
    ticker: "RIVN",
    title: "Rivian Automotive, Inc. / DE",
  },
  {
    ticker: "LEN",
    title: "LENNAR CORP /NEW/",
  },
  {
    ticker: "HIG",
    title: "HARTFORD FINANCIAL SERVICES GROUP, INC.",
  },
  {
    ticker: "CODYY",
    title: "COMPAGNIE DE SAINT GOBAIN",
  },
  {
    ticker: "FE",
    title: "FIRSTENERGY CORP",
  },
  {
    ticker: "ZBH",
    title: "ZIMMER BIOMET HOLDINGS, INC.",
  },
  {
    ticker: "TSCO",
    title: "TRACTOR SUPPLY CO /DE/",
  },
  {
    ticker: "CM",
    title: "CANADIAN IMPERIAL BANK OF COMMERCE /CAN/",
  },
  {
    ticker: "MKC",
    title: "MCCORMICK & CO INC",
  },
  {
    ticker: "VWDRY",
    title: "VESTAS WIND SYSTEMS A/S",
  },
  {
    ticker: "GMAB",
    title: "GENMAB A/S",
  },
  {
    ticker: "FANG",
    title: "Diamondback Energy, Inc.",
  },
  {
    ticker: "ZTO",
    title: "ZTO Express (Cayman) Inc.",
  },
  {
    ticker: "ZS",
    title: "Zscaler, Inc.",
  },
  {
    ticker: "LUV",
    title: "SOUTHWEST AIRLINES CO",
  },
  {
    ticker: "YUMC",
    title: "Yum China Holdings, Inc.",
  },
  {
    ticker: "TTD",
    title: "Trade Desk, Inc.",
  },
  {
    ticker: "CTRA",
    title: "Coterra Energy Inc.",
  },
  {
    ticker: "DRE",
    title: "DUKE REALTY CORP",
  },
  {
    ticker: "CQP",
    title: "Cheniere Energy Partners, L.P.",
  },
  {
    ticker: "INVH",
    title: "Invitation Homes Inc.",
  },
  {
    ticker: "CDW",
    title: "CDW Corp",
  },
  {
    ticker: "SNAP",
    title: "Snap Inc",
  },
  {
    ticker: "WEGZY",
    title: "Weg SA",
  },
  {
    ticker: "STE",
    title: "STERIS plc",
  },
  {
    ticker: "VTR",
    title: "Ventas, Inc.",
  },
  {
    ticker: "ANSS",
    title: "ANSYS INC",
  },
  {
    ticker: "MT",
    title: "ArcelorMittal",
  },
  {
    ticker: "PPL",
    title: "PPL Corp",
  },
  {
    ticker: "LBRDA",
    title: "Liberty Broadband Corp",
  },
  {
    ticker: "ULTA",
    title: "Ulta Beauty, Inc.",
  },
  {
    ticker: "GFS",
    title: "GLOBALFOUNDRIES Inc.",
  },
  {
    ticker: "WAT",
    title: "WATERS CORP /DE/",
  },
  {
    ticker: "MTB",
    title: "M&T BANK CORP",
  },
  {
    ticker: "RBLX",
    title: "Roblox Corp",
  },
  {
    ticker: "NTRS",
    title: "NORTHERN TRUST CORP",
  },
  {
    ticker: "IX",
    title: "ORIX CORP",
  },
  {
    ticker: "MTCH",
    title: "Match Group, Inc.",
  },
  {
    ticker: "POAHY",
    title: "Porsche Automobil Holding SE / ADR",
  },
  {
    ticker: "MAA",
    title: "MID AMERICA APARTMENT COMMUNITIES INC.",
  },
  {
    ticker: "ON",
    title: "ON SEMICONDUCTOR CORP",
  },
  {
    ticker: "TTM",
    title: "TATA MOTORS LTD/FI",
  },
  {
    ticker: "IT",
    title: "GARTNER INC",
  },
  {
    ticker: "CMS",
    title: "CMS ENERGY CORP",
  },
  {
    ticker: "FTV",
    title: "Fortive Corp",
  },
  {
    ticker: "ARGX",
    title: "ARGENX SE",
  },
  {
    ticker: "ANYYY",
    title: "Aena S.A./ADR",
  },
  {
    ticker: "ATASY",
    title: "Atlantia SpA",
  },
  {
    ticker: "PBA",
    title: "PEMBINA PIPELINE CORP",
  },
  {
    ticker: "ALGN",
    title: "ALIGN TECHNOLOGY INC",
  },
  {
    ticker: "GIB",
    title: "CGI INC",
  },
  {
    ticker: "CINF",
    title: "CINCINNATI FINANCIAL CORP",
  },
  {
    ticker: "VICI",
    title: "VICI PROPERTIES INC.",
  },
  {
    ticker: "TSGTY",
    title: "TSINGTAO BREWERY CO LTD /FI",
  },
  {
    ticker: "AVTR",
    title: "Avantor, Inc.",
  },
  {
    ticker: "AMCR",
    title: "Amcor plc",
  },
  {
    ticker: "CNP",
    title: "CENTERPOINT ENERGY INC",
  },
  {
    ticker: "GPC",
    title: "GENUINE PARTS CO",
  },
  {
    ticker: "VRSN",
    title: "VERISIGN INC/CA",
  },
  {
    ticker: "PCRFY",
    title: "PANASONIC Corp",
  },
  {
    ticker: "GRMN",
    title: "GARMIN LTD",
  },
  {
    ticker: "VMC",
    title: "Vulcan Materials CO",
  },
  {
    ticker: "DAL",
    title: "DELTA AIR LINES, INC.",
  },
  {
    ticker: "SUI",
    title: "SUN COMMUNITIES INC",
  },
  {
    ticker: "PHG",
    title: "KONINKLIJKE PHILIPS NV",
  },
  {
    ticker: "SPOT",
    title: "Spotify Technology S.A.",
  },
  {
    ticker: "LYV",
    title: "Live Nation Entertainment, Inc.",
  },
  {
    ticker: "PLTR",
    title: "Palantir Technologies Inc.",
  },
  {
    ticker: "AGR",
    title: "Avangrid, Inc.",
  },
  {
    ticker: "MLM",
    title: "MARTIN MARIETTA MATERIALS INC",
  },
  {
    ticker: "RJF",
    title: "RAYMOND JAMES FINANCIAL INC",
  },
  {
    ticker: "RPRX",
    title: "Royalty Pharma plc",
  },
  {
    ticker: "HZNP",
    title: "Horizon Therapeutics Public Ltd Co",
  },
  {
    ticker: "CTLT",
    title: "Catalent, Inc.",
  },
  {
    ticker: "CF",
    title: "CF Industries Holdings, Inc.",
  },
  {
    ticker: "FOXA",
    title: "Fox Corp",
  },
  {
    ticker: "PKI",
    title: "PERKINELMER INC",
  },
  {
    ticker: "RF",
    title: "REGIONS FINANCIAL CORP",
  },
  {
    ticker: "MKL",
    title: "MARKEL CORP",
  },
  {
    ticker: "NU",
    title: "Nu Holdings Ltd.",
  },
  {
    ticker: "PWR",
    title: "QUANTA SERVICES, INC.",
  },
  {
    ticker: "PFG",
    title: "PRINCIPAL FINANCIAL GROUP INC",
  },
  {
    ticker: "MDB",
    title: "MongoDB, Inc.",
  },
  {
    ticker: "HLDCY",
    title: "HENDERSON LAND DEVELOPMENT COMPANY LTD /FI",
  },
  {
    ticker: "PTAIY",
    title: "PT Astra International Tbk / ADR",
  },
  {
    ticker: "HBAN",
    title: "HUNTINGTON BANCSHARES INC /MD/",
  },
  {
    ticker: "ACGL",
    title: "ARCH CAPITAL GROUP LTD.",
  },
  {
    ticker: "BGNE",
    title: "BeiGene, Ltd.",
  },
  {
    ticker: "ALNY",
    title: "ALNYLAM PHARMACEUTICALS, INC.",
  },
  {
    ticker: "DB",
    title: "DEUTSCHE BANK AKTIENGESELLSCHAFT",
  },
  {
    ticker: "TCOM",
    title: "Trip.com Group Ltd",
  },
  {
    ticker: "TDY",
    title: "TELEDYNE TECHNOLOGIES INC",
  },
  {
    ticker: "URI",
    title: "UNITED RENTALS, INC.",
  },
  {
    ticker: "CLX",
    title: "CLOROX CO /DE/",
  },
  {
    ticker: "HOLX",
    title: "HOLOGIC INC",
  },
  {
    ticker: "DOV",
    title: "DOVER Corp",
  },
  {
    ticker: "MRO",
    title: "MARATHON OIL CORP",
  },
  {
    ticker: "SWK",
    title: "STANLEY BLACK & DECKER, INC.",
  },
  {
    ticker: "PAYC",
    title: "Paycom Software, Inc.",
  },
  {
    ticker: "SNMRY",
    title: "Snam Rete Gas SpA",
  },
  {
    ticker: "MOS",
    title: "MOSAIC CO",
  },
  {
    ticker: "ELP",
    title: "ENERGY CO OF PARANA",
  },
  {
    ticker: "FLT",
    title: "FLEETCOR TECHNOLOGIES INC",
  },
  {
    ticker: "ESS",
    title: "ESSEX PROPERTY TRUST, INC.",
  },
  {
    ticker: "VFC",
    title: "V F CORP",
  },
  {
    ticker: "ICLR",
    title: "ICON PLC",
  },
  {
    ticker: "IR",
    title: "Ingersoll Rand Inc.",
  },
  {
    ticker: "ROL",
    title: "ROLLINS INC",
  },
  {
    ticker: "INCY",
    title: "INCYTE CORP",
  },
  {
    ticker: "EPAM",
    title: "EPAM Systems, Inc.",
  },
  {
    ticker: "BR",
    title: "BROADRIDGE FINANCIAL SOLUTIONS, INC.",
  },
  {
    ticker: "ZSHGY",
    title: "Zhongsheng Group Holdings Limited/ADR/",
  },
  {
    ticker: "HEI",
    title: "HEICO CORP",
  },
  {
    ticker: "MPWR",
    title: "MONOLITHIC POWER SYSTEMS INC",
  },
  {
    ticker: "JBHT",
    title: "HUNT J B TRANSPORT SERVICES INC",
  },
  {
    ticker: "MGA",
    title: "MAGNA INTERNATIONAL INC",
  },
  {
    ticker: "DGX",
    title: "QUEST DIAGNOSTICS INC",
  },
  {
    ticker: "HPE",
    title: "Hewlett Packard Enterprise Co",
  },
  {
    ticker: "BRO",
    title: "BROWN & BROWN, INC.",
  },
  {
    ticker: "WPM",
    title: "Wheaton Precious Metals Corp.",
  },
  {
    ticker: "CAG",
    title: "CONAGRA BRANDS INC.",
  },
  {
    ticker: "EXPD",
    title: "EXPEDITORS INTERNATIONAL OF WASHINGTON INC",
  },
  {
    ticker: "MOH",
    title: "MOLINA HEALTHCARE, INC.",
  },
  {
    ticker: "CHKP",
    title: "CHECK POINT SOFTWARE TECHNOLOGIES LTD",
  },
  {
    ticker: "J",
    title: "JACOBS ENGINEERING GROUP INC /DE/",
  },
  {
    ticker: "KEY",
    title: "KEYCORP /NEW/",
  },
  {
    ticker: "IP",
    title: "INTERNATIONAL PAPER CO /NEW/",
  },
  {
    ticker: "QSR",
    title: "Restaurant Brands International Inc.",
  },
  {
    ticker: "UMC",
    title: "UNITED MICROELECTRONICS CORP",
  },
  {
    ticker: "NET",
    title: "Cloudflare, Inc.",
  },
  {
    ticker: "BBY",
    title: "BEST BUY CO INC",
  },
  {
    ticker: "ZBRA",
    title: "ZEBRA TECHNOLOGIES CORP",
  },
  {
    ticker: "TW",
    title: "Tradeweb Markets Inc.",
  },
  {
    ticker: "SWMAY",
    title: "SWEDISH MATCH CORP",
  },
  {
    ticker: "TECK",
    title: "TECK RESOURCES LTD",
  },
  {
    ticker: "CNHI",
    title: "CNH Industrial N.V.",
  },
  {
    ticker: "COO",
    title: "COOPER COMPANIES, INC.",
  },
  {
    ticker: "TRU",
    title: "TransUnion",
  },
  {
    ticker: "ZNH",
    title: "CHINA SOUTHERN AIRLINES CO LTD",
  },
  {
    ticker: "SYF",
    title: "Synchrony Financial",
  },
  {
    ticker: "PODD",
    title: "INSULET CORP",
  },
  {
    ticker: "BMRN",
    title: "BIOMARIN PHARMACEUTICAL INC",
  },
  {
    ticker: "RYAAY",
    title: "RYANAIR HOLDINGS PLC",
  },
  {
    ticker: "CHWY",
    title: "Chewy, Inc.",
  },
  {
    ticker: "WPC",
    title: "W. P. Carey Inc.",
  },
  {
    ticker: "WAB",
    title: "WESTINGHOUSE AIR BRAKE TECHNOLOGIES CORP",
  },
  {
    ticker: "SMPNY",
    title: "Sompo Japan Nipponkoa Holdings, Inc./ADR",
  },
  {
    ticker: "EVRG",
    title: "Evergy, Inc.",
  },
  {
    ticker: "CFG",
    title: "CITIZENS FINANCIAL GROUP INC/RI",
  },
  {
    ticker: "STX",
    title: "Seagate Technology Holdings plc",
  },
  {
    ticker: "UI",
    title: "Ubiquiti Inc.",
  },
  {
    ticker: "LU",
    title: "Lufax Holding Ltd",
  },
  {
    ticker: "ATO",
    title: "ATMOS ENERGY CORP",
  },
  {
    ticker: "L",
    title: "LOEWS CORP",
  },
  {
    ticker: "TWLO",
    title: "TWILIO INC",
  },
  {
    ticker: "VIV",
    title: "TELEFONICA BRASIL S.A.",
  },
  {
    ticker: "RKT",
    title: "Rocket Companies, Inc.",
  },
  {
    ticker: "SWKS",
    title: "SKYWORKS SOLUTIONS, INC.",
  },
  {
    ticker: "TS",
    title: "TENARIS SA",
  },
  {
    ticker: "LNT",
    title: "ALLIANT ENERGY CORP",
  },
  {
    ticker: "BIO",
    title: "BIO-RAD LABORATORIES, INC.",
  },
  {
    ticker: "KMX",
    title: "CARMAX INC",
  },
  {
    ticker: "AKAM",
    title: "AKAMAI TECHNOLOGIES INC",
  },
  {
    ticker: "CAH",
    title: "CARDINAL HEALTH INC",
  },
  {
    ticker: "SSNC",
    title: "SS&C Technologies Holdings Inc",
  },
  {
    ticker: "SHG",
    title: "SHINHAN FINANCIAL GROUP CO LTD",
  },
  {
    ticker: "OKTA",
    title: "Okta, Inc.",
  },
  {
    ticker: "FDS",
    title: "FACTSET RESEARCH SYSTEMS INC",
  },
  {
    ticker: "DRI",
    title: "DARDEN RESTAURANTS INC",
  },
  {
    ticker: "SJR",
    title: "SHAW COMMUNICATIONS INC",
  },
  {
    ticker: "HUBS",
    title: "HUBSPOT INC",
  },
  {
    ticker: "FMS",
    title: "Fresenius Medical Care AG & Co. KGaA",
  },
  {
    ticker: "DPZ",
    title: "DOMINOS PIZZA INC",
  },
  {
    ticker: "CPB",
    title: "CAMPBELL SOUP CO",
  },
  {
    ticker: "EXPE",
    title: "Expedia Group, Inc.",
  },
  {
    ticker: "SPLK",
    title: "SPLUNK INC",
  },
  {
    ticker: "PRDSY",
    title: "Prada S.p.A./ADR",
  },
  {
    ticker: "TRMB",
    title: "TRIMBLE INC.",
  },
  {
    ticker: "LPLA",
    title: "LPL Financial Holdings Inc.",
  },
  {
    ticker: "NVR",
    title: "NVR INC",
  },
  {
    ticker: "SEDG",
    title: "SOLAREDGE TECHNOLOGIES, INC.",
  },
  {
    ticker: "LKQ",
    title: "LKQ CORP",
  },
  {
    ticker: "KB",
    title: "KB Financial Group Inc.",
  },
  {
    ticker: "TTWO",
    title: "TAKE TWO INTERACTIVE SOFTWARE INC",
  },
  {
    ticker: "LDOS",
    title: "Leidos Holdings, Inc.",
  },
  {
    ticker: "UDR",
    title: "UDR, Inc.",
  },
  {
    ticker: "PEAK",
    title: "HEALTHPEAK PROPERTIES, INC.",
  },
  {
    ticker: "AES",
    title: "AES CORP",
  },
  {
    ticker: "IRM",
    title: "IRON MOUNTAIN INC",
  },
  {
    ticker: "FRFHF",
    title: "FAIRFAX FINANCIAL HOLDINGS LTD/ CAN",
  },
  {
    ticker: "SJM",
    title: "J M SMUCKER Co",
  },
  {
    ticker: "XYL",
    title: "Xylem Inc.",
  },
  {
    ticker: "BXP",
    title: "BOSTON PROPERTIES INC",
  },
  {
    ticker: "POOL",
    title: "POOL CORP",
  },
  {
    ticker: "JRONY",
    title: "Jeronimo Martins SGPS SA",
  },
  {
    ticker: "MGM",
    title: "MGM Resorts International",
  },
  {
    ticker: "TER",
    title: "TERADYNE, INC",
  },
  {
    ticker: "TRGP",
    title: "Targa Resources Corp.",
  },
  {
    ticker: "IEX",
    title: "IDEX CORP /DE/",
  },
  {
    ticker: "NTAP",
    title: "NetApp, Inc.",
  },
  {
    ticker: "CPT",
    title: "CAMDEN PROPERTY TRUST",
  },
  {
    ticker: "TECH",
    title: "BIO-TECHNE Corp",
  },
  {
    ticker: "SSL",
    title: "SASOL LTD",
  },
  {
    ticker: "GNRC",
    title: "GENERAC HOLDINGS INC.",
  },
  {
    ticker: "TYL",
    title: "TYLER TECHNOLOGIES INC",
  },
  {
    ticker: "OMC",
    title: "OMNICOM GROUP INC.",
  },
  {
    ticker: "EBR",
    title: "BRAZILIAN ELECTRIC POWER CO",
  },
  {
    ticker: "ZI",
    title: "ZoomInfo Technologies Inc.",
  },
  {
    ticker: "JKHY",
    title: "HENRY JACK & ASSOCIATES INC",
  },
  {
    ticker: "LSXMA",
    title: "Liberty Media Corp",
  },
  {
    ticker: "CS",
    title: "CREDIT SUISSE GROUP AG",
  },
  {
    ticker: "FMC",
    title: "FMC CORP",
  },
  {
    ticker: "AVY",
    title: "Avery Dennison Corp",
  },
  {
    ticker: "HWM",
    title: "Howmet Aerospace Inc.",
  },
  {
    ticker: "PKX",
    title: "POSCO HOLDINGS INC.",
  },
  {
    ticker: "WDC",
    title: "WESTERN DIGITAL CORP",
  },
  {
    ticker: "IEP",
    title: "ICAHN ENTERPRISES L.P.",
  },
  {
    ticker: "TXT",
    title: "TEXTRON INC",
  },
  {
    ticker: "CHRW",
    title: "C. H. ROBINSON WORLDWIDE, INC.",
  },
  {
    ticker: "ELS",
    title: "EQUITY LIFESTYLE PROPERTIES INC",
  },
  {
    ticker: "PKG",
    title: "PACKAGING CORP OF AMERICA",
  },
  {
    ticker: "STLD",
    title: "STEEL DYNAMICS INC",
  },
  {
    ticker: "APP",
    title: "AppLovin Corp",
  },
  {
    ticker: "CEA",
    title: "CHINA EASTERN AIRLINES CORP LTD",
  },
  {
    ticker: "NLOK",
    title: "NortonLifeLock Inc.",
  },
  {
    ticker: "VTRS",
    title: "Viatris Inc",
  },
  {
    ticker: "EQT",
    title: "EQT Corp",
  },
  {
    ticker: "ACI",
    title: "Albertsons Companies, Inc.",
  },
  {
    ticker: "SUZ",
    title: "Suzano S.A.",
  },
  {
    ticker: "COIN",
    title: "Coinbase Global, Inc.",
  },
  {
    ticker: "AZPN",
    title: "Aspen Technology, Inc.",
  },
  {
    ticker: "BG",
    title: "BUNGELTD",
  },
  {
    ticker: "HTHT",
    title: "Huazhu Group Ltd",
  },
  {
    ticker: "WMG",
    title: "Warner Music Group Corp.",
  },
  {
    ticker: "WLK",
    title: "WESTLAKE CORP",
  },
  {
    ticker: "PTC",
    title: "PTC INC.",
  },
  {
    ticker: "CSL",
    title: "CARLISLE COMPANIES INC",
  },
  {
    ticker: "CE",
    title: "Celanese Corp",
  },
  {
    ticker: "MAS",
    title: "MASCO CORP /DE/",
  },
  {
    ticker: "KIM",
    title: "KIMCO REALTY CORP",
  },
  {
    ticker: "BAH",
    title: "Booz Allen Hamilton Holding Corp",
  },
  {
    ticker: "SNN",
    title: "SMITH & NEPHEW PLC",
  },
  {
    ticker: "MGDDY",
    title: "MICHELIN COMPAGNIE GENERALE DES ETABLISSEMENTS MICHELIN /FI",
  },
  {
    ticker: "WRB",
    title: "BERKLEY W R CORP",
  },
  {
    ticker: "CNA",
    title: "CNA FINANCIAL CORP",
  },
  {
    ticker: "CBOE",
    title: "Cboe Global Markets, Inc.",
  },
  {
    ticker: "NICE",
    title: "NICE Ltd.",
  },
  {
    ticker: "CTXS",
    title: "CITRIX SYSTEMS INC",
  },
  {
    ticker: "PINS",
    title: "PINTEREST, INC.",
  },
  {
    ticker: "DOCU",
    title: "DOCUSIGN, INC.",
  },
  {
    ticker: "TAP",
    title: "MOLSON COORS BEVERAGE CO",
  },
  {
    ticker: "AFG",
    title: "AMERICAN FINANCIAL GROUP INC",
  },
  {
    ticker: "EMRAF",
    title: "EMERA INC",
  },
  {
    ticker: "JXHLY",
    title: "ENEOS Holdings, Inc./ADR",
  },
  {
    ticker: "GRFS",
    title: "Grifols SA",
  },
  {
    ticker: "WTRG",
    title: "Essential Utilities, Inc.",
  },
  {
    ticker: "ENTG",
    title: "ENTEGRIS INC",
  },
  {
    ticker: "EMN",
    title: "EASTMAN CHEMICAL CO",
  },
  {
    ticker: "TFX",
    title: "TELEFLEX INC",
  },
  {
    ticker: "BIP",
    title: "Brookfield Infrastructure Partners L.P.",
  },
  {
    ticker: "CCK",
    title: "CROWN HOLDINGS INC",
  },
  {
    ticker: "AMH",
    title: "American Homes 4 Rent",
  },
  {
    ticker: "ALLY",
    title: "Ally Financial Inc.",
  },
  {
    ticker: "KOF",
    title: "COCA COLA FEMSA SAB DE CV",
  },
  {
    ticker: "BEN",
    title: "FRANKLIN RESOURCES INC",
  },
  {
    ticker: "TPL",
    title: "Texas Pacific Land Corp",
  },
  {
    ticker: "NI",
    title: "NISOURCE INC.",
  },
  {
    ticker: "UAL",
    title: "United Airlines Holdings, Inc.",
  },
  {
    ticker: "NDSN",
    title: "NORDSON CORP",
  },
  {
    ticker: "FHN",
    title: "FIRST HORIZON CORP",
  },
  {
    ticker: "GDDY",
    title: "GoDaddy Inc.",
  },
  {
    ticker: "GSHN",
    title: "Gushen, Inc",
  },
  {
    ticker: "LBTYA",
    title: "Liberty Global plc",
  },
  {
    ticker: "DT",
    title: "Dynatrace, Inc.",
  },
  {
    ticker: "BILL",
    title: "Bill.com Holdings, Inc.",
  },
  {
    ticker: "WPP",
    title: "WPP plc",
  },
  {
    ticker: "AEM",
    title: "AGNICO EAGLE MINES LTD",
  },
  {
    ticker: "ABMD",
    title: "ABIOMED INC",
  },
  {
    ticker: "GLPI",
    title: "Gaming & Leisure Properties, Inc.",
  },
  {
    ticker: "ICL",
    title: "ICL Group Ltd.",
  },
  {
    ticker: "SCI",
    title: "SERVICE CORP INTERNATIONAL",
  },
  {
    ticker: "KEP",
    title: "KOREA ELECTRIC POWER CORP",
  },
  {
    ticker: "CG",
    title: "Carlyle Group Inc.",
  },
  {
    ticker: "Y",
    title: "ALLEGHANY CORP /DE",
  },
  {
    ticker: "LUMN",
    title: "Lumen Technologies, Inc.",
  },
  {
    ticker: "OVV",
    title: "Ovintiv Inc.",
  },
  {
    ticker: "ROKU",
    title: "ROKU, INC",
  },
  {
    ticker: "VST",
    title: "Vistra Corp.",
  },
  {
    ticker: "BZ",
    title: "Kanzhun Ltd",
  },
  {
    ticker: "LNVGY",
    title: "LENOVO GROUP LTD",
  },
  {
    ticker: "HAS",
    title: "HASBRO, INC.",
  },
  {
    ticker: "HST",
    title: "HOST HOTELS & RESORTS, INC.",
  },
  {
    ticker: "NMR",
    title: "NOMURA HOLDINGS INC",
  },
  {
    ticker: "RE",
    title: "EVEREST RE GROUP LTD",
  },
  {
    ticker: "FICO",
    title: "FAIR ISAAC CORP",
  },
  {
    ticker: "SBNY",
    title: "Signature Bank Corp",
  },
  {
    ticker: "CRL",
    title: "CHARLES RIVER LABORATORIES INTERNATIONAL, INC.",
  },
  {
    ticker: "ATLKY",
    title: "ATLAS COPCO AB",
  },
  {
    ticker: "BLDR",
    title: "Builders FirstSource, Inc.",
  },
  {
    ticker: "BOUYY",
    title: "Bouygues SA",
  },
  {
    ticker: "U",
    title: "Unity Software Inc.",
  },
  {
    ticker: "IPG",
    title: "INTERPUBLIC GROUP OF COMPANIES, INC.",
  },
  {
    ticker: "QGEN",
    title: "QIAGEN N.V.",
  },
  {
    ticker: "AAP",
    title: "ADVANCE AUTO PARTS INC",
  },
  {
    ticker: "PTBRY",
    title: "PT Bank Negara Indonesia (Persero) Tbk/ADR",
  },
  {
    ticker: "FNF",
    title: "Fidelity National Financial, Inc.",
  },
  {
    ticker: "UTHR",
    title: "UNITED THERAPEUTICS Corp",
  },
  {
    ticker: "RS",
    title: "RELIANCE STEEL & ALUMINUM CO",
  },
  {
    ticker: "ASX",
    title: "ASE Technology Holding Co., Ltd.",
  },
  {
    ticker: "HSIC",
    title: "HENRY SCHEIN INC",
  },
  {
    ticker: "PHM",
    title: "PULTEGROUP INC/MI/",
  },
  {
    ticker: "EQH",
    title: "Equitable Holdings, Inc.",
  },
  {
    ticker: "SNA",
    title: "Snap-on Inc",
  },
  {
    ticker: "WRK",
    title: "WestRock Co",
  },
  {
    ticker: "DOX",
    title: "AMDOCS LTD",
  },
  {
    ticker: "VIVHY",
    title: "VIVENDI",
  },
  {
    ticker: "LW",
    title: "Lamb Weston Holdings, Inc.",
  },
  {
    ticker: "RPM",
    title: "RPM INTERNATIONAL INC/DE/",
  },
  {
    ticker: "OTEX",
    title: "OPEN TEXT CORP",
  },
  {
    ticker: "ATEYY",
    title: "ADVANTEST CORP",
  },
  {
    ticker: "REG",
    title: "REGENCY CENTERS CORP",
  },
  {
    ticker: "MORN",
    title: "Morningstar, Inc.",
  },
  {
    ticker: "MMP",
    title: "Magellan Midstream Partners, L.P.",
  },
  {
    ticker: "CCL",
    title: "CARNIVAL CORP",
  },
  {
    ticker: "BKI",
    title: "Black Knight, Inc.",
  },
  {
    ticker: "BILI",
    title: "Bilibili Inc.",
  },
  {
    ticker: "ERIE",
    title: "ERIE INDEMNITY CO",
  },
  {
    ticker: "ACH",
    title: "ALUMINUM CORP OF CHINA LTD",
  },
  {
    ticker: "QRVO",
    title: "Qorvo, Inc.",
  },
  {
    ticker: "DAR",
    title: "DARLING INGREDIENTS INC.",
  },
  {
    ticker: "GL",
    title: "GLOBE LIFE INC.",
  },
  {
    ticker: "ETSY",
    title: "ETSY INC",
  },
  {
    ticker: "GGG",
    title: "GRACO INC",
  },
  {
    ticker: "ESLT",
    title: "ELBIT SYSTEMS LTD",
  },
  {
    ticker: "AER",
    title: "AerCap Holdings N.V.",
  },
  {
    ticker: "BNTGY",
    title: "Brenntag AG/ADR",
  },
  {
    ticker: "JHX",
    title: "James Hardie Industries plc",
  },
  {
    ticker: "ARES",
    title: "Ares Management Corp",
  },
  {
    ticker: "WES",
    title: "Western Midstream Partners, LP",
  },
  {
    ticker: "XP",
    title: "XP Inc.",
  },
  {
    ticker: "AIZ",
    title: "ASSURANT, INC.",
  },
  {
    ticker: "IHG",
    title: "INTERCONTINENTAL HOTELS GROUP PLC /NEW/",
  },
  {
    ticker: "PLUG",
    title: "PLUG POWER INC",
  },
  {
    ticker: "HUBB",
    title: "HUBBELL INC",
  },
  {
    ticker: "PATH",
    title: "UiPath, Inc.",
  },
  {
    ticker: "MKTX",
    title: "MARKETAXESS HOLDINGS INC",
  },
  {
    ticker: "PCTY",
    title: "Paylocity Holding Corp",
  },
  {
    ticker: "ELAN",
    title: "Elanco Animal Health Inc",
  },
  {
    ticker: "JAZZ",
    title: "Jazz Pharmaceuticals plc",
  },
  {
    ticker: "CMA",
    title: "COMERICA INC /NEW/",
  },
  {
    ticker: "BAP",
    title: "CREDICORP LTD",
  },
  {
    ticker: "USO",
    title: "United States Oil Fund, LP",
  },
  {
    ticker: "DISH",
    title: "DISH Network CORP",
  },
  {
    ticker: "CHK",
    title: "CHESAPEAKE ENERGY CORP",
  },
  {
    ticker: "YMM",
    title: "Full Truck Alliance Co. Ltd.",
  },
  {
    ticker: "KKOYY",
    title: "Kesko OYJ",
  },
  {
    ticker: "BEP",
    title: "Brookfield Renewable Partners L.P.",
  },
  {
    ticker: "AR",
    title: "ANTERO RESOURCES Corp",
  },
  {
    ticker: "BRKR",
    title: "BRUKER CORP",
  },
  {
    ticker: "DQJCY",
    title: "Don Quijote Holdings Co Ltd",
  },
  {
    ticker: "CLVT",
    title: "CLARIVATE Plc",
  },
  {
    ticker: "WHR",
    title: "WHIRLPOOL CORP /DE/",
  },
  {
    ticker: "CUBE",
    title: "CubeSmart",
  },
  {
    ticker: "BHVN",
    title: "Biohaven Pharmaceutical Holding Co Ltd.",
  },
  {
    ticker: "NRG",
    title: "NRG ENERGY, INC.",
  },
  {
    ticker: "BSY",
    title: "BENTLEY SYSTEMS INC",
  },
  {
    ticker: "CUK",
    title: "CARNIVAL PLC",
  },
  {
    ticker: "LSI",
    title: "LIFE STORAGE, INC.",
  },
  {
    ticker: "GME",
    title: "GameStop Corp.",
  },
  {
    ticker: "NBIX",
    title: "NEUROCRINE BIOSCIENCES INC",
  },
  {
    ticker: "UHAL",
    title: "AMERCO /NV/",
  },
  {
    ticker: "FFIV",
    title: "F5, INC.",
  },
  {
    ticker: "FTNT",
    title: "Fortinet, Inc.",
  },
  {
    ticker: "NWSA",
    title: "NEWS CORP",
  },
  {
    ticker: "GLPEY",
    title: "Galp Energia, SGPS, S.A.",
  },
  {
    ticker: "OLPX",
    title: "OLAPLEX HOLDINGS, INC.",
  },
  {
    ticker: "WSO",
    title: "WATSCO INC",
  },
  {
    ticker: "ACM",
    title: "AECOM",
  },
  {
    ticker: "MPW",
    title: "MEDICAL PROPERTIES TRUST INC",
  },
  {
    ticker: "EWBC",
    title: "EAST WEST BANCORP INC",
  },
  {
    ticker: "RDY",
    title: "DR REDDYS LABORATORIES LTD",
  },
  {
    ticker: "AQN",
    title: "ALGONQUIN POWER & UTILITIES CORP.",
  },
  {
    ticker: "BURL",
    title: "Burlington Stores, Inc.",
  },
  {
    ticker: "BCH",
    title: "BANK OF CHILE",
  },
  {
    ticker: "RGEN",
    title: "REPLIGEN CORP",
  },
  {
    ticker: "JNPR",
    title: "JUNIPER NETWORKS INC",
  },
  {
    ticker: "JLL",
    title: "JONES LANG LASALLE INC",
  },
  {
    ticker: "AEG",
    title: "AEGON NV",
  },
  {
    ticker: "TME",
    title: "Tencent Music Entertainment Group",
  },
  {
    ticker: "ZEN",
    title: "Zendesk, Inc.",
  },
  {
    ticker: "MTN",
    title: "VAIL RESORTS INC",
  },
  {
    ticker: "ACC",
    title: "AMERICAN CAMPUS COMMUNITIES INC",
  },
  {
    ticker: "RCL",
    title: "ROYAL CARIBBEAN CRUISES LTD",
  },
  {
    ticker: "LAMR",
    title: "LAMAR ADVERTISING CO/NEW",
  },
  {
    ticker: "ALLE",
    title: "Allegion plc",
  },
  {
    ticker: "AOS",
    title: "SMITH A O CORP",
  },
  {
    ticker: "REXR",
    title: "Rexford Industrial Realty, Inc.",
  },
  {
    ticker: "GRAB",
    title: "Grab Holdings Ltd",
  },
  {
    ticker: "AGL",
    title: "agilon health, inc.",
  },
  {
    ticker: "SNX",
    title: "TD SYNNEX CORP",
  },
  {
    ticker: "SKM",
    title: "SK TELECOM CO LTD",
  },
  {
    ticker: "HII",
    title: "HUNTINGTON INGALLS INDUSTRIES, INC.",
  },
  {
    ticker: "NLY",
    title: "ANNALY CAPITAL MANAGEMENT INC",
  },
  {
    ticker: "ZG",
    title: "ZILLOW GROUP, INC.",
  },
  {
    ticker: "SEE",
    title: "SEALED AIR CORP/DE",
  },
  {
    ticker: "MHK",
    title: "MOHAWK INDUSTRIES INC",
  },
  {
    ticker: "TEVA",
    title: "TEVA PHARMACEUTICAL INDUSTRIES LTD",
  },
  {
    ticker: "ARCC",
    title: "ARES CAPITAL CORP",
  },
  {
    ticker: "OGN",
    title: "Organon & Co.",
  },
  {
    ticker: "CCJ",
    title: "CAMECO CORP",
  },
  {
    ticker: "LOGI",
    title: "LOGITECH INTERNATIONAL S.A.",
  },
  {
    ticker: "REMYY",
    title: "Remy Cointreau/ADR",
  },
  {
    ticker: "BJ",
    title: "BJ's Wholesale Club Holdings, Inc.",
  },
  {
    ticker: "GFL",
    title: "GFL Environmental Inc.",
  },
  {
    ticker: "WFG",
    title: "WEST FRASER TIMBER CO., LTD",
  },
  {
    ticker: "LNC",
    title: "LINCOLN NATIONAL CORP",
  },
  {
    ticker: "ALSMY",
    title: "ALSTOM",
  },
  {
    ticker: "LEGN",
    title: "Legend Biotech Corp",
  },
  {
    ticker: "LAD",
    title: "LITHIA MOTORS INC",
  },
  {
    ticker: "CAR",
    title: "AVIS BUDGET GROUP, INC.",
  },
  {
    ticker: "UHS",
    title: "UNIVERSAL HEALTH SERVICES INC",
  },
  {
    ticker: "ASEKY",
    title: "Aisin Seiki Co., Ltd./ADR",
  },
  {
    ticker: "AAL",
    title: "American Airlines Group Inc.",
  },
  {
    ticker: "DSCSY",
    title: "Disco Corporation/ADR",
  },
  {
    ticker: "GFI",
    title: "GOLD FIELDS LTD",
  },
  {
    ticker: "TPR",
    title: "TAPESTRY, INC.",
  },
  {
    ticker: "NLSN",
    title: "Nielsen Holdings plc",
  },
  {
    ticker: "DVA",
    title: "DAVITA INC.",
  },
  {
    ticker: "PNW",
    title: "PINNACLE WEST CAPITAL CORP",
  },
  {
    ticker: "CMS-PB",
    title: "CONSUMERS ENERGY CO",
  },
  {
    ticker: "RHI",
    title: "ROBERT HALF INTERNATIONAL INC.",
  },
  {
    ticker: "AA",
    title: "Alcoa Corp",
  },
  {
    ticker: "FBHS",
    title: "Fortune Brands Home & Security, Inc.",
  },
  {
    ticker: "DBX",
    title: "DROPBOX, INC.",
  },
  {
    ticker: "SLVYY",
    title: "SOLVAY S A /ADR/",
  },
  {
    ticker: "UGI",
    title: "UGI CORP /PA/",
  },
  {
    ticker: "PAG",
    title: "PENSKE AUTOMOTIVE GROUP, INC.",
  },
  {
    ticker: "NWL",
    title: "NEWELL BRANDS INC.",
  },
  {
    ticker: "H",
    title: "Hyatt Hotels Corp",
  },
  {
    ticker: "COLD",
    title: "AMERICOLD REALTY TRUST",
  },
  {
    ticker: "CZR",
    title: "Caesars Entertainment, Inc.",
  },
  {
    ticker: "WSM",
    title: "WILLIAMS SONOMA INC",
  },
  {
    ticker: "NFE",
    title: "New Fortress Energy Inc.",
  },
  {
    ticker: "UELMO",
    title: "UNION ELECTRIC CO",
  },
  {
    ticker: "BWA",
    title: "BORGWARNER INC",
  },
  {
    ticker: "CBSH",
    title: "COMMERCE BANCSHARES INC /MO/",
  },
  {
    ticker: "SWCH",
    title: "Switch, Inc.",
  },
  {
    ticker: "G",
    title: "Genpact LTD",
  },
  {
    ticker: "RGA",
    title: "REINSURANCE GROUP OF AMERICA INC",
  },
  {
    ticker: "TTC",
    title: "TORO CO",
  },
  {
    ticker: "ZION",
    title: "ZIONS BANCORPORATION, NATIONAL ASSOCIATION /UT/",
  },
  {
    ticker: "OGE",
    title: "OGE ENERGY CORP.",
  },
  {
    ticker: "ARMK",
    title: "Aramark",
  },
  {
    ticker: "KNX",
    title: "Knight-Swift Transportation Holdings Inc.",
  },
  {
    ticker: "XRAY",
    title: "DENTSPLY SIRONA Inc.",
  },
  {
    ticker: "CLF",
    title: "CLEVELAND-CLIFFS INC.",
  },
  {
    ticker: "GTLB",
    title: "Gitlab Inc.",
  },
  {
    ticker: "NVCR",
    title: "NovoCure Ltd",
  },
  {
    ticker: "CAE",
    title: "CAE INC",
  },
  {
    ticker: "JPXGY",
    title: "Japan Exchange Group, Inc./ADR",
  },
  {
    ticker: "DLO",
    title: "dLocal Ltd",
  },
  {
    ticker: "NNN",
    title: "NATIONAL RETAIL PROPERTIES, INC.",
  },
  {
    ticker: "CABO",
    title: "Cable One, Inc.",
  },
  {
    ticker: "OC",
    title: "Owens Corning",
  },
  {
    ticker: "ARW",
    title: "ARROW ELECTRONICS INC",
  },
  {
    ticker: "LII",
    title: "LENNOX INTERNATIONAL INC",
  },
  {
    ticker: "BSAC",
    title: "BANCO SANTANDER CHILE",
  },
  {
    ticker: "FUTU",
    title: "Futu Holdings Ltd",
  },
  {
    ticker: "MAT",
    title: "MATTEL INC /DE/",
  },
  {
    ticker: "HTZ",
    title: "HERTZ GLOBAL HOLDINGS, INC",
  },
  {
    ticker: "BSMX",
    title:
      "Banco Santander Mexico S.A., Institucion de Banca Multiple, Grupo Financiero Santander Mexico",
  },
  {
    ticker: "PNR",
    title: "PENTAIR plc",
  },
  {
    ticker: "CGNX",
    title: "COGNEX CORP",
  },
  {
    ticker: "PPC",
    title: "PILGRIMS PRIDE CORP",
  },
  {
    ticker: "RRX",
    title: "REGAL REXNORD CORP",
  },
  {
    ticker: "TFII",
    title: "TFI International Inc.",
  },
  {
    ticker: "MTLHY",
    title: "Mitsubishi Chemical Holdings Corp",
  },
  {
    ticker: "FRT",
    title: "FEDERAL REALTY INVESTMENT TRUST",
  },
  {
    ticker: "SEIC",
    title: "SEI INVESTMENTS CO",
  },
  {
    ticker: "IVZ",
    title: "Invesco Ltd.",
  },
  {
    ticker: "LEA",
    title: "LEAR CORP",
  },
  {
    ticker: "DXC",
    title: "DXC Technology Co",
  },
  {
    ticker: "CHDN",
    title: "Churchill Downs Inc",
  },
  {
    ticker: "CFR",
    title: "CULLEN/FROST BANKERS, INC.",
  },
  {
    ticker: "AGCO",
    title: "AGCO CORP /DE",
  },
  {
    ticker: "AN",
    title: "AUTONATION, INC.",
  },
  {
    ticker: "DXCM",
    title: "DEXCOM INC",
  },
  {
    ticker: "BERY",
    title: "BERRY GLOBAL GROUP, INC.",
  },
  {
    ticker: "MASI",
    title: "MASIMO CORP",
  },
  {
    ticker: "TTEK",
    title: "TETRA TECH INC",
  },
  {
    ticker: "WAL",
    title: "WESTERN ALLIANCE BANCORPORATION",
  },
  {
    ticker: "RBA",
    title: "RITCHIE BROS AUCTIONEERS INC",
  },
  {
    ticker: "MDIBY",
    title: "Mediobanca - Banca di Credito Finanziario SpA",
  },
  {
    ticker: "CIB",
    title: "BANCOLOMBIA SA",
  },
  {
    ticker: "SYNH",
    title: "Syneos Health, Inc.",
  },
  {
    ticker: "MANH",
    title: "MANHATTAN ASSOCIATES INC",
  },
  {
    ticker: "CHE",
    title: "CHEMED CORP",
  },
  {
    ticker: "CHNG",
    title: "Change Healthcare Inc.",
  },
  {
    ticker: "JBL",
    title: "JABIL INC",
  },
  {
    ticker: "WSC",
    title: "WillScot Mobile Mini Holdings Corp.",
  },
  {
    ticker: "LECO",
    title: "LINCOLN ELECTRIC HOLDINGS INC",
  },
  {
    ticker: "WOLF",
    title: "WOLFSPEED, INC.",
  },
  {
    ticker: "STOR",
    title: "STORE CAPITAL Corp",
  },
  {
    ticker: "PFGC",
    title: "Performance Food Group Co",
  },
  {
    ticker: "GLOB",
    title: "Globant S.A.",
  },
  {
    ticker: "OLN",
    title: "OLIN Corp",
  },
  {
    ticker: "FSLR",
    title: "FIRST SOLAR, INC.",
  },
  {
    ticker: "RGLD",
    title: "ROYAL GOLD INC",
  },
  {
    ticker: "RNR",
    title: "RENAISSANCERE HOLDINGS LTD",
  },
  {
    ticker: "CACC",
    title: "CREDIT ACCEPTANCE CORP",
  },
  {
    ticker: "CDAY",
    title: "Ceridian HCM Holding Inc.",
  },
  {
    ticker: "PRYMY",
    title: "Prysmian S.p.A.",
  },
  {
    ticker: "BBWI",
    title: "Bath & Body Works, Inc.",
  },
  {
    ticker: "PAA",
    title: "PLAINS ALL AMERICAN PIPELINE LP",
  },
  {
    ticker: "GGB",
    title: "GERDAU S.A.",
  },
  {
    ticker: "PSTG",
    title: "Pure Storage, Inc.",
  },
  {
    ticker: "CNXC",
    title: "Concentrix Corp",
  },
  {
    ticker: "PAC",
    title: "Pacific Airport Group",
  },
  {
    ticker: "DLB",
    title: "Dolby Laboratories, Inc.",
  },
  {
    ticker: "SBSW",
    title: "Sibanye Stillwater Ltd",
  },
  {
    ticker: "ACCYY",
    title: "ACCOR",
  },
  {
    ticker: "MIUFY",
    title: "Mitsubishi UFJ Lease & Finance Co., Ltd.",
  },
  {
    ticker: "WEX",
    title: "WEX Inc.",
  },
  {
    ticker: "TX",
    title: "Ternium S.A.",
  },
  {
    ticker: "EXAS",
    title: "EXACT SCIENCES CORP",
  },
  {
    ticker: "CIEN",
    title: "CIENA CORP",
  },
  {
    ticker: "MIDD",
    title: "MIDDLEBY Corp",
  },
  {
    ticker: "SWAV",
    title: "Shockwave Medical, Inc.",
  },
  {
    ticker: "USFD",
    title: "US Foods Holding Corp.",
  },
  {
    ticker: "XM",
    title: "Qualtrics International Inc.",
  },
  {
    ticker: "AMC",
    title: "AMC ENTERTAINMENT HOLDINGS, INC.",
  },
  {
    ticker: "ORI",
    title: "OLD REPUBLIC INTERNATIONAL CORP",
  },
  {
    ticker: "GDS",
    title: "GDS Holdings Ltd",
  },
  {
    ticker: "CASY",
    title: "CASEYS GENERAL STORES INC",
  },
  {
    ticker: "PSO",
    title: "PEARSON PLC",
  },
  {
    ticker: "TOST",
    title: "Toast, Inc.",
  },
  {
    ticker: "UNM",
    title: "Unum Group",
  },
  {
    ticker: "VIPS",
    title: "Vipshop Holdings Ltd",
  },
  {
    ticker: "RKUNY",
    title: "Rakuten Group, Inc.",
  },
  {
    ticker: "NXST",
    title: "NEXSTAR MEDIA GROUP, INC.",
  },
  {
    ticker: "KBR",
    title: "KBR, INC.",
  },
  {
    ticker: "DOCS",
    title: "Doximity, Inc.",
  },
  {
    ticker: "OHI",
    title: "OMEGA HEALTHCARE INVESTORS INC",
  },
  {
    ticker: "ATR",
    title: "APTARGROUP, INC.",
  },
  {
    ticker: "IAC",
    title: "IAC/InterActiveCorp",
  },
  {
    ticker: "FND",
    title: "Floor & Decor Holdings, Inc.",
  },
  {
    ticker: "JEF",
    title: "Jefferies Financial Group Inc.",
  },
  {
    ticker: "HOOD",
    title: "Robinhood Markets, Inc.",
  },
  {
    ticker: "EXEL",
    title: "EXELIXIS, INC.",
  },
  {
    ticker: "YNDX",
    title: "Yandex N.V.",
  },
  {
    ticker: "TIXT",
    title: "TELUS International (Cda) Inc.",
  },
  {
    ticker: "WF",
    title: "WOORI FINANCIAL GROUP INC.",
  },
  {
    ticker: "WU",
    title: "Western Union CO",
  },
  {
    ticker: "KT",
    title: "KT CORP",
  },
  {
    ticker: "VOYA",
    title: "Voya Financial, Inc.",
  },
  {
    ticker: "WYNN",
    title: "WYNN RESORTS LTD",
  },
  {
    ticker: "DECK",
    title: "DECKERS OUTDOOR CORP",
  },
  {
    ticker: "GNTX",
    title: "GENTEX CORP",
  },
  {
    ticker: "FLEX",
    title: "FLEX LTD.",
  },
  {
    ticker: "DSEEY",
    title: "Daiwa Securities Group Inc.",
  },
  {
    ticker: "CACI",
    title: "CACI INTERNATIONAL INC /DE/",
  },
  {
    ticker: "RL",
    title: "RALPH LAUREN CORP",
  },
  {
    ticker: "DKS",
    title: "DICK'S SPORTING GOODS, INC.",
  },
  {
    ticker: "CRCBY",
    title: "Chongqing Rural Commercial Bank Co., Ltd./ADR",
  },
  {
    ticker: "AIRC",
    title: "Apartment Income REIT Corp.",
  },
  {
    ticker: "NOV",
    title: "NOV Inc.",
  },
  {
    ticker: "ESTC",
    title: "Elastic N.V.",
  },
  {
    ticker: "RRC",
    title: "RANGE RESOURCES CORP",
  },
  {
    ticker: "SRPT",
    title: "Sarepta Therapeutics, Inc.",
  },
  {
    ticker: "COHR",
    title: "II-VI INC",
  },
  {
    ticker: "GPK",
    title: "GRAPHIC PACKAGING HOLDING CO",
  },
  {
    ticker: "PHI",
    title: "PLDT Inc.",
  },
  {
    ticker: "WMS",
    title: "ADVANCED DRAINAGE SYSTEMS, INC.",
  },
  {
    ticker: "FCNCA",
    title: "FIRST CITIZENS BANCSHARES INC /DE/",
  },
  {
    ticker: "DNB",
    title: "Dun & Bradstreet Holdings, Inc.",
  },
  {
    ticker: "CFLT",
    title: "Confluent, Inc.",
  },
  {
    ticker: "CDK",
    title: "CDK Global, Inc.",
  },
  {
    ticker: "TREX",
    title: "TREX CO INC",
  },
  {
    ticker: "STWD",
    title: "STARWOOD PROPERTY TRUST, INC.",
  },
  {
    ticker: "HRB",
    title: "H&R BLOCK INC",
  },
  {
    ticker: "FIVN",
    title: "Five9, Inc.",
  },
  {
    ticker: "ACHC",
    title: "Acadia Healthcare Company, Inc.",
  },
  {
    ticker: "LEVI",
    title: "LEVI STRAUSS & CO",
  },
  {
    ticker: "SWN",
    title: "SOUTHWESTERN ENERGY CO",
  },
  {
    ticker: "ST",
    title: "Sensata Technologies Holding plc",
  },
  {
    ticker: "NEP",
    title: "NEXTERA ENERGY PARTNERS, LP",
  },
  {
    ticker: "PB",
    title: "PROSPERITY BANCSHARES INC",
  },
  {
    ticker: "EGP",
    title: "EASTGROUP PROPERTIES INC",
  },
  {
    ticker: "AXON",
    title: "AXON ENTERPRISE, INC.",
  },
  {
    ticker: "HTA",
    title: "HEALTHCARE TRUST OF AMERICA, INC.",
  },
  {
    ticker: "COTY",
    title: "COTY INC.",
  },
  {
    ticker: "ALV",
    title: "AUTOLIV INC",
  },
  {
    ticker: "AU",
    title: "ANGLOGOLD ASHANTI LTD",
  },
  {
    ticker: "FIVE",
    title: "FIVE BELOW, INC",
  },
  {
    ticker: "FR",
    title: "FIRST INDUSTRIAL REALTY TRUST INC",
  },
  {
    ticker: "NVST",
    title: "Envista Holdings Corp",
  },
  {
    ticker: "FCN",
    title: "FTI CONSULTING, INC",
  },
  {
    ticker: "KRC",
    title: "KILROY REALTY CORP",
  },
  {
    ticker: "CHH",
    title: "CHOICE HOTELS INTERNATIONAL INC /DE",
  },
  {
    ticker: "S",
    title: "SentinelOne, Inc.",
  },
  {
    ticker: "WH",
    title: "WYNDHAM HOTELS & RESORTS, INC.",
  },
  {
    ticker: "BPOP",
    title: "POPULAR, INC.",
  },
  {
    ticker: "HALO",
    title: "HALOZYME THERAPEUTICS, INC.",
  },
  {
    ticker: "CSAN",
    title: "Cosan S.A.",
  },
  {
    ticker: "SLV",
    title: "iShares Silver Trust",
  },
  {
    ticker: "HUN",
    title: "Huntsman CORP",
  },
  {
    ticker: "BEPC",
    title: "Brookfield Renewable Corp",
  },
  {
    ticker: "AVLR",
    title: "AVALARA, INC.",
  },
  {
    ticker: "CPRI",
    title: "Capri Holdings Ltd",
  },
  {
    ticker: "LSCC",
    title: "LATTICE SEMICONDUCTOR CORP",
  },
  {
    ticker: "IOT",
    title: "Samsara Inc.",
  },
  {
    ticker: "MSSMY",
    title: "Misumi Group Inc./ADR",
  },
  {
    ticker: "DCP",
    title: "DCP Midstream, LP",
  },
  {
    ticker: "NFG",
    title: "NATIONAL FUEL GAS CO",
  },
  {
    ticker: "PII",
    title: "Polaris Inc.",
  },
  {
    ticker: "OUKPY",
    title: "Outotec OYJ",
  },
  {
    ticker: "FYBR",
    title: "Frontier Communications Parent, Inc.",
  },
  {
    ticker: "PCOR",
    title: "PROCORE TECHNOLOGIES, INC.",
  },
  {
    ticker: "LFUS",
    title: "LITTELFUSE INC /DE",
  },
  {
    ticker: "BRX",
    title: "Brixmor Property Group Inc.",
  },
  {
    ticker: "RCM",
    title: "R1 RCM Inc. /DE",
  },
  {
    ticker: "MUSA",
    title: "Murphy USA Inc.",
  },
  {
    ticker: "ADOOY",
    title: "Adaro Energy PT/ADR/",
  },
  {
    ticker: "AGNC",
    title: "AGNC Investment Corp.",
  },
  {
    ticker: "DCI",
    title: "DONALDSON CO INC",
  },
  {
    ticker: "INFA",
    title: "Informatica Inc.",
  },
  {
    ticker: "TIMB",
    title: "TIM S.A.",
  },
  {
    ticker: "INGR",
    title: "Ingredion Inc",
  },
  {
    ticker: "UWMC",
    title: "UWM Holdings Corp",
  },
  {
    ticker: "ASR",
    title: "SOUTHEAST AIRPORT GROUP",
  },
  {
    ticker: "PDCE",
    title: "PDC ENERGY, INC.",
  },
  {
    ticker: "FAF",
    title: "First American Financial Corp",
  },
  {
    ticker: "ISDAY",
    title: "ISRAEL DISCOUNT BANK LTD",
  },
  {
    ticker: "GWRE",
    title: "Guidewire Software, Inc.",
  },
  {
    ticker: "ASH",
    title: "ASHLAND GLOBAL HOLDINGS INC",
  },
  {
    ticker: "WWD",
    title: "Woodward, Inc.",
  },
  {
    ticker: "THC",
    title: "TENET HEALTHCARE CORP",
  },
  {
    ticker: "SAIL",
    title: "Sailpoint Technologies Holdings, Inc.",
  },
  {
    ticker: "GMED",
    title: "GLOBUS MEDICAL INC",
  },
  {
    ticker: "SF",
    title: "STIFEL FINANCIAL CORP",
  },
  {
    ticker: "SON",
    title: "SONOCO PRODUCTS CO",
  },
  {
    ticker: "ITT",
    title: "ITT INC.",
  },
  {
    ticker: "PLNT",
    title: "Planet Fitness, Inc.",
  },
  {
    ticker: "BLD",
    title: "TopBuild Corp",
  },
  {
    ticker: "REYN",
    title: "Reynolds Consumer Products Inc.",
  },
  {
    ticker: "EDR",
    title: "Endeavor Group Holdings, Inc.",
  },
  {
    ticker: "BYD",
    title: "BOYD GAMING CORP",
  },
  {
    ticker: "GTLS",
    title: "CHART INDUSTRIES INC",
  },
  {
    ticker: "FFIN",
    title: "FIRST FINANCIAL BANKSHARES INC",
  },
  {
    ticker: "CX",
    title: "CEMEX SAB DE CV",
  },
  {
    ticker: "WB",
    title: "WEIBO Corp",
  },
  {
    ticker: "TOL",
    title: "Toll Brothers, Inc.",
  },
  {
    ticker: "VNO",
    title: "VORNADO REALTY TRUST",
  },
  {
    ticker: "FSK",
    title: "FS KKR Capital Corp",
  },
  {
    ticker: "FLO",
    title: "FLOWERS FOODS INC",
  },
  {
    ticker: "MDU",
    title: "MDU RESOURCES GROUP INC",
  },
  {
    ticker: "LITE",
    title: "Lumentum Holdings Inc.",
  },
  {
    ticker: "PNFP",
    title: "PINNACLE FINANCIAL PARTNERS INC",
  },
  {
    ticker: "BAK",
    title: "BRASKEM SA",
  },
  {
    ticker: "MP",
    title: "MP Materials Corp. / DE",
  },
  {
    ticker: "SHLX",
    title: "Shell Midstream Partners, L.P.",
  },
  {
    ticker: "GIL",
    title: "Gildan Activewear Inc.",
  },
  {
    ticker: "LSTR",
    title: "LANDSTAR SYSTEM INC",
  },
  {
    ticker: "LYSDY",
    title: "Lynas CORP LTD",
  },
  {
    ticker: "EENEY",
    title: "Electrocomponents plc / ADR",
  },
  {
    ticker: "TDOC",
    title: "Teladoc Health, Inc.",
  },
  {
    ticker: "PLTK",
    title: "Playtika Holding Corp.",
  },
  {
    ticker: "CCCS",
    title: "CCC Intelligent Solutions Holdings Inc.",
  },
  {
    ticker: "SHC",
    title: "Sotera Health Co",
  },
  {
    ticker: "JSGRY",
    title: "JS Group CORP",
  },
  {
    ticker: "OSK",
    title: "OSHKOSH CORP",
  },
  {
    ticker: "XPO",
    title: "XPO Logistics, Inc.",
  },
  {
    ticker: "AYI",
    title: "ACUITY BRANDS INC",
  },
  {
    ticker: "SBS",
    title: "COMPANHIA DE SANEAMENTO BASICO DO ESTADO DE SAO PAULO-SABESP",
  },
  {
    ticker: "TMBBY",
    title: "TMB Bank Public Co Limited/ADR",
  },
  {
    ticker: "IDA",
    title: "IDACORP INC",
  },
  {
    ticker: "STAG",
    title: "STAG Industrial, Inc.",
  },
  {
    ticker: "SKX",
    title: "SKECHERS USA INC",
  },
  {
    ticker: "EME",
    title: "EMCOR Group, Inc.",
  },
  {
    ticker: "PRGO",
    title: "PERRIGO Co plc",
  },
  {
    ticker: "MTDR",
    title: "Matador Resources Co",
  },
  {
    ticker: "DAVA",
    title: "Endava plc",
  },
  {
    ticker: "ONON",
    title: "On Holding AG",
  },
  {
    ticker: "UBSFY",
    title: "Ubisoft Entertainment SA",
  },
  {
    ticker: "SSB",
    title: "SouthState Corp",
  },
  {
    ticker: "AMN",
    title: "AMN HEALTHCARE SERVICES INC",
  },
  {
    ticker: "BMBL",
    title: "Bumble Inc.",
  },
  {
    ticker: "RYN",
    title: "RAYONIER INC",
  },
  {
    ticker: "SAIC",
    title: "Science Applications International Corp",
  },
  {
    ticker: "FSV",
    title: "FirstService Corp",
  },
  {
    ticker: "COKE",
    title: "Coca-Cola Consolidated, Inc.",
  },
  {
    ticker: "KNSL",
    title: "Kinsale Capital Group, Inc.",
  },
  {
    ticker: "M",
    title: "Macy's, Inc.",
  },
  {
    ticker: "MEDP",
    title: "Medpace Holdings, Inc.",
  },
  {
    ticker: "IONS",
    title: "IONIS PHARMACEUTICALS INC",
  },
  {
    ticker: "SITE",
    title: "SiteOne Landscape Supply, Inc.",
  },
  {
    ticker: "SNV",
    title: "SYNOVUS FINANCIAL CORP",
  },
  {
    ticker: "HCP",
    title: "HashiCorp, Inc.",
  },
  {
    ticker: "BFAM",
    title: "BRIGHT HORIZONS FAMILY SOLUTIONS INC.",
  },
  {
    ticker: "ROLL",
    title: "RBC Bearings INC",
  },
  {
    ticker: "MTZ",
    title: "MASTEC INC",
  },
  {
    ticker: "HLI",
    title: "HOULIHAN LOKEY, INC.",
  },
  {
    ticker: "DSGX",
    title: "DESCARTES SYSTEMS GROUP INC",
  },
  {
    ticker: "MKSI",
    title: "MKS INSTRUMENTS INC",
  },
  {
    ticker: "GBCI",
    title: "GLACIER BANCORP, INC.",
  },
  {
    ticker: "WCC",
    title: "WESCO INTERNATIONAL INC",
  },
  {
    ticker: "PENN",
    title: "PENN NATIONAL GAMING INC",
  },
  {
    ticker: "RLI",
    title: "RLI CORP",
  },
  {
    ticker: "SWX",
    title: "Southwest Gas Holdings, Inc.",
  },
  {
    ticker: "AZTA",
    title: "Azenta, Inc.",
  },
  {
    ticker: "TRQ",
    title: "TURQUOISE HILL RESOURCES LTD.",
  },
  {
    ticker: "NVT",
    title: "nVent Electric plc",
  },
  {
    ticker: "CCOEY",
    title: "Capcom Co., LTD/ADR",
  },
  {
    ticker: "POST",
    title: "Post Holdings, Inc.",
  },
  {
    ticker: "VVV",
    title: "VALVOLINE INC",
  },
  {
    ticker: "ASND",
    title: "Ascendis Pharma A/S",
  },
  {
    ticker: "BOKF",
    title: "BOK FINANCIAL CORP",
  },
  {
    ticker: "THG",
    title: "HANOVER INSURANCE GROUP, INC.",
  },
  {
    ticker: "SIGI",
    title: "SELECTIVE INSURANCE GROUP INC",
  },
  {
    ticker: "TXRH",
    title: "Texas Roadhouse, Inc.",
  },
  {
    ticker: "ADC",
    title: "AGREE REALTY CORP",
  },
  {
    ticker: "CW",
    title: "CURTISS WRIGHT CORP",
  },
  {
    ticker: "MNDT",
    title: "Mandiant, Inc.",
  },
  {
    ticker: "TXG",
    title: "10x Genomics, Inc.",
  },
  {
    ticker: "ADT",
    title: "ADT Inc.",
  },
  {
    ticker: "EEFT",
    title: "EURONET WORLDWIDE, INC.",
  },
  {
    ticker: "BWXT",
    title: "BWX Technologies, Inc.",
  },
  {
    ticker: "CYBR",
    title: "CyberArk Software Ltd.",
  },
  {
    ticker: "DQ",
    title: "DAQO NEW ENERGY CORP.",
  },
  {
    ticker: "CR",
    title: "Crane Holdings, Co.",
  },
  {
    ticker: "INSP",
    title: "Inspire Medical Systems, Inc.",
  },
  {
    ticker: "KSRYY",
    title: "Kose Corporation/ADR",
  },
  {
    ticker: "RNG",
    title: "RingCentral, Inc.",
  },
  {
    ticker: "SLAB",
    title: "SILICON LABORATORIES INC.",
  },
  {
    ticker: "ALK",
    title: "ALASKA AIR GROUP, INC.",
  },
  {
    ticker: "PSB",
    title: "PS BUSINESS PARKS, INC./MD",
  },
  {
    ticker: "ZIM",
    title: "ZIM Integrated Shipping Services Ltd.",
  },
  {
    ticker: "OPCH",
    title: "Option Care Health, Inc.",
  },
  {
    ticker: "CC",
    title: "Chemours Co",
  },
  {
    ticker: "VAC",
    title: "MARRIOTT VACATIONS WORLDWIDE Corp",
  },
  {
    ticker: "BC",
    title: "BRUNSWICK CORP",
  },
  {
    ticker: "AXTA",
    title: "Axalta Coating Systems Ltd.",
  },
  {
    ticker: "TNET",
    title: "TRINET GROUP, INC.",
  },
  {
    ticker: "BNCDY",
    title: "Banca Mediolanum S.p.A./ADR",
  },
  {
    ticker: "CHFFY",
    title: "China Everbright International Limited/ADR",
  },
  {
    ticker: "DOOO",
    title: "BRP Inc.",
  },
  {
    ticker: "BKGFY",
    title: "Berkeley Group Holdings plc",
  },
  {
    ticker: "GXO",
    title: "GXO Logistics, Inc.",
  },
  {
    ticker: "RUN",
    title: "Sunrun Inc.",
  },
  {
    ticker: "IRDM",
    title: "Iridium Communications Inc.",
  },
  {
    ticker: "QLYS",
    title: "QUALYS, INC.",
  },
  {
    ticker: "NVEI",
    title: "Nuvei Corp",
  },
  {
    ticker: "ORCC",
    title: "Owl Rock Capital Corp",
  },
  {
    ticker: "OMF",
    title: "OneMain Holdings, Inc.",
  },
  {
    ticker: "TENB",
    title: "Tenable Holdings, Inc.",
  },
  {
    ticker: "TSEM",
    title: "TOWER SEMICONDUCTOR LTD",
  },
  {
    ticker: "TMX",
    title: "TERMINIX GLOBAL HOLDINGS INC",
  },
  {
    ticker: "EXLS",
    title: "ExlService Holdings, Inc.",
  },
  {
    ticker: "ALKS",
    title: "Alkermes plc.",
  },
  {
    ticker: "CELH",
    title: "Celsius Holdings, Inc.",
  },
  {
    ticker: "CIGI",
    title: "Colliers International Group Inc.",
  },
  {
    ticker: "HOG",
    title: "HARLEY-DAVIDSON, INC.",
  },
  {
    ticker: "SAIA",
    title: "SAIA INC",
  },
  {
    ticker: "ATHM",
    title: "Autohome Inc.",
  },
  {
    ticker: "MFA",
    title: "MFA FINANCIAL, INC.",
  },
  {
    ticker: "CLH",
    title: "CLEAN HARBORS INC",
  },
  {
    ticker: "LHCG",
    title: "LHC Group, Inc",
  },
  {
    ticker: "CCMP",
    title: "CMC Materials, Inc.",
  },
  {
    ticker: "STN",
    title: "STANTEC INC",
  },
  {
    ticker: "AXS",
    title: "AXIS CAPITAL HOLDINGS LTD",
  },
  {
    ticker: "ROG",
    title: "ROGERS CORP",
  },
  {
    ticker: "CRSP",
    title: "CRISPR Therapeutics AG",
  },
  {
    ticker: "OZK",
    title: "Bank OZK",
  },
  {
    ticker: "UBSI",
    title: "UNITED BANKSHARES INC/WV",
  },
  {
    ticker: "SLM",
    title: "SLM Corp",
  },
  {
    ticker: "IPGP",
    title: "IPG PHOTONICS CORP",
  },
  {
    ticker: "X",
    title: "UNITED STATES STEEL CORP",
  },
  {
    ticker: "SAFM",
    title: "SANDERSON FARMS INC",
  },
  {
    ticker: "AFRM",
    title: "Affirm Holdings, Inc.",
  },
  {
    ticker: "PHYS",
    title: "Sprott Physical Gold Trust",
  },
  {
    ticker: "BKH",
    title: "BLACK HILLS CORP /SD/",
  },
  {
    ticker: "HQY",
    title: "HEALTHEQUITY, INC.",
  },
  {
    ticker: "VG",
    title: "VONAGE HOLDINGS CORP",
  },
  {
    ticker: "OLED",
    title: "UNIVERSAL DISPLAY CORP PA",
  },
  {
    ticker: "VMI",
    title: "VALMONT INDUSTRIES INC",
  },
  {
    ticker: "DTM",
    title: "DT Midstream, Inc.",
  },
  {
    ticker: "PRI",
    title: "Primerica, Inc.",
  },
  {
    ticker: "LPX",
    title: "LOUISIANA-PACIFIC CORP",
  },
  {
    ticker: "SRC",
    title: "SPIRIT REALTY CAPITAL, INC.",
  },
  {
    ticker: "IVR",
    title: "Invesco Mortgage Capital Inc.",
  },
  {
    ticker: "AMG",
    title: "AFFILIATED MANAGERS GROUP, INC.",
  },
  {
    ticker: "MSA",
    title: "MSA Safety Inc",
  },
  {
    ticker: "DKNG",
    title: "DraftKings Inc.",
  },
  {
    ticker: "NYT",
    title: "NEW YORK TIMES CO",
  },
  {
    ticker: "MBT",
    title: "MOBILE TELESYSTEMS PUBLIC JOINT STOCK Co",
  },
  {
    ticker: "EXPO",
    title: "EXPONENT INC",
  },
  {
    ticker: "MNDY",
    title: "monday.com Ltd.",
  },
  {
    ticker: "WWE",
    title: "WORLD WRESTLING ENTERTAINMENTINC",
  },
  {
    ticker: "RH",
    title: "RH",
  },
  {
    ticker: "W",
    title: "Wayfair Inc.",
  },
  {
    ticker: "NCLH",
    title: "Norwegian Cruise Line Holdings Ltd.",
  },
  {
    ticker: "BXMT",
    title: "BLACKSTONE MORTGAGE TRUST, INC.",
  },
  {
    ticker: "HP",
    title: "Helmerich & Payne, Inc.",
  },
  {
    ticker: "PEN",
    title: "Penumbra Inc",
  },
  {
    ticker: "MUR",
    title: "MURPHY OIL CORP",
  },
  {
    ticker: "LEG",
    title: "LEGGETT & PLATT INC",
  },
  {
    ticker: "DRVN",
    title: "Driven Brands Holdings Inc.",
  },
  {
    ticker: "SIM",
    title: "GRUPO SIMEC, S.A.B. de C.V.",
  },
  {
    ticker: "COLM",
    title: "COLUMBIA SPORTSWEAR CO",
  },
  {
    ticker: "ASGN",
    title: "ASGN Inc",
  },
  {
    ticker: "IART",
    title: "INTEGRA LIFESCIENCES HOLDINGS CORP",
  },
  {
    ticker: "TGNA",
    title: "TEGNA INC",
  },
  {
    ticker: "KGC",
    title: "KINROSS GOLD CORP",
  },
  {
    ticker: "IRT",
    title: "INDEPENDENCE REALTY TRUST, INC.",
  },
  {
    ticker: "SLGN",
    title: "SILGAN HOLDINGS INC",
  },
  {
    ticker: "WTFC",
    title: "WINTRUST FINANCIAL CORP",
  },
  {
    ticker: "MXCHY",
    title: "Orbia Advance Corporation, S.A.B. de C.V./ADR",
  },
  {
    ticker: "TV",
    title: "GRUPO TELEVISA, S.A.B.",
  },
  {
    ticker: "EHC",
    title: "Encompass Health Corp",
  },
  {
    ticker: "FIZZ",
    title: "NATIONAL BEVERAGE CORP",
  },
  {
    ticker: "NSA",
    title: "National Storage Affiliates Trust",
  },
  {
    ticker: "CADE",
    title: "Cadence Bank",
  },
  {
    ticker: "LYFT",
    title: "Lyft, Inc.",
  },
  {
    ticker: "HE",
    title: "HAWAIIAN ELECTRIC INDUSTRIES INC",
  },
  {
    ticker: "AUY",
    title: "YAMANA GOLD INC.",
  },
  {
    ticker: "EXP",
    title: "EAGLE MATERIALS INC",
  },
  {
    ticker: "PYCR",
    title: "PAYCOR HCM, INC.",
  },
  {
    ticker: "MQ",
    title: "Marqeta, Inc.",
  },
  {
    ticker: "OSH",
    title: "Oak Street Health, Inc.",
  },
  {
    ticker: "OGS",
    title: "ONE Gas, Inc.",
  },
  {
    ticker: "ITCI",
    title: "Intra-Cellular Therapies, Inc.",
  },
  {
    ticker: "IAA",
    title: "IAA, Inc.",
  },
  {
    ticker: "ORA",
    title: "ORMAT TECHNOLOGIES, INC.",
  },
  {
    ticker: "CIVI",
    title: "CIVITAS RESOURCES, INC.",
  },
  {
    ticker: "SYNA",
    title: "SYNAPTICS Inc",
  },
  {
    ticker: "SEB",
    title: "SEABOARD CORP /DE/",
  },
  {
    ticker: "NRZ",
    title: "New Residential Investment Corp.",
  },
  {
    ticker: "SSD",
    title: "Simpson Manufacturing Co., Inc.",
  },
  {
    ticker: "POR",
    title: "PORTLAND GENERAL ELECTRIC CO /OR/",
  },
  {
    ticker: "COUP",
    title: "Coupa Software Inc",
  },
  {
    ticker: "GH",
    title: "Guardant Health, Inc.",
  },
  {
    ticker: "TWKS",
    title: "Thoughtworks Holding, Inc.",
  },
  {
    ticker: "HXL",
    title: "HEXCEL CORP /DE/",
  },
  {
    ticker: "APLS",
    title: "Apellis Pharmaceuticals, Inc.",
  },
  {
    ticker: "AM",
    title: "Antero Midstream Corp",
  },
  {
    ticker: "PINC",
    title: "Premier, Inc.",
  },
  {
    ticker: "DOCN",
    title: "DigitalOcean Holdings, Inc.",
  },
  {
    ticker: "SMG",
    title: "SCOTTS MIRACLE-GRO CO",
  },
  {
    ticker: "CUZ",
    title: "COUSINS PROPERTIES INC",
  },
  {
    ticker: "RYAN",
    title: "RYAN SPECIALTY HOLDINGS, INC.",
  },
  {
    ticker: "EVO",
    title: "Evotec SE",
  },
  {
    ticker: "NJR",
    title: "NEW JERSEY RESOURCES CORP",
  },
  {
    ticker: "ESNT",
    title: "Essent Group Ltd.",
  },
  {
    ticker: "HGV",
    title: "Hilton Grand Vacations Inc.",
  },
  {
    ticker: "SOFI",
    title: "SoFi Technologies, Inc.",
  },
  {
    ticker: "NVAX",
    title: "NOVAVAX INC",
  },
  {
    ticker: "NYCB",
    title: "NEW YORK COMMUNITY BANCORP INC",
  },
  {
    ticker: "VLY",
    title: "VALLEY NATIONAL BANCORP",
  },
  {
    ticker: "ENLC",
    title: "EnLink Midstream, LLC",
  },
  {
    ticker: "LNTH",
    title: "Lantheus Holdings, Inc.",
  },
  {
    ticker: "ATUS",
    title: "Altice USA, Inc.",
  },
  {
    ticker: "SFBS",
    title: "ServisFirst Bancshares, Inc.",
  },
  {
    ticker: "UFPI",
    title: "UFP INDUSTRIES INC",
  },
  {
    ticker: "WEN",
    title: "Wendy's Co",
  },
  {
    ticker: "RARE",
    title: "Ultragenyx Pharmaceutical Inc.",
  },
  {
    ticker: "AZIHY",
    title: "Azimut Holding SpA/ADR",
  },
  {
    ticker: "NOVT",
    title: "NOVANTA INC",
  },
  {
    ticker: "THO",
    title: "THOR INDUSTRIES INC",
  },
  {
    ticker: "TXMD",
    title: "TherapeuticsMD, Inc.",
  },
  {
    ticker: "POWI",
    title: "POWER INTEGRATIONS INC",
  },
  {
    ticker: "UNVR",
    title: "Univar Solutions Inc.",
  },
  {
    ticker: "MAN",
    title: "ManpowerGroup Inc.",
  },
  {
    ticker: "CPG",
    title: "Crescent Point Energy Corp.",
  },
  {
    ticker: "BCPC",
    title: "BALCHEM CORP",
  },
  {
    ticker: "TRNO",
    title: "Terreno Realty Corp",
  },
  {
    ticker: "UMBF",
    title: "UMB FINANCIAL CORP",
  },
  {
    ticker: "PAAS",
    title: "PAN AMERICAN SILVER CORP",
  },
  {
    ticker: "RHP",
    title: "Ryman Hospitality Properties, Inc.",
  },
  {
    ticker: "CHPT",
    title: "ChargePoint Holdings, Inc.",
  },
  {
    ticker: "MITUY",
    title: "Mitsui Chemicals Inc",
  },
  {
    ticker: "AVT",
    title: "AVNET INC",
  },
  {
    ticker: "ESI",
    title: "Element Solutions Inc",
  },
  {
    ticker: "PSN",
    title: "PARSONS CORP",
  },
  {
    ticker: "ENSG",
    title: "ENSIGN GROUP, INC",
  },
  {
    ticker: "WTS",
    title: "WATTS WATER TECHNOLOGIES INC",
  },
  {
    ticker: "GO",
    title: "Grocery Outlet Holding Corp.",
  },
  {
    ticker: "SHI",
    title: "SINOPEC SHANGHAI PETROCHEMICAL CO LTD",
  },
  {
    ticker: "MTG",
    title: "MGIC INVESTMENT CORP",
  },
  {
    ticker: "PNM",
    title: "PNM RESOURCES INC",
  },
  {
    ticker: "MSM",
    title: "MSC INDUSTRIAL DIRECT CO INC",
  },
  {
    ticker: "AB",
    title: "ALLIANCEBERNSTEIN HOLDING L.P.",
  },
  {
    ticker: "SM",
    title: "SM Energy Co",
  },
  {
    ticker: "BXSL",
    title: "Blackstone Secured Lending Fund",
  },
  {
    ticker: "CMC",
    title: "COMMERCIAL METALS Co",
  },
  {
    ticker: "HR",
    title: "HEALTHCARE REALTY TRUST INC",
  },
  {
    ticker: "ALTR",
    title: "Altair Engineering Inc.",
  },
  {
    ticker: "TPX",
    title: "TEMPUR SEALY INTERNATIONAL, INC.",
  },
  {
    ticker: "NATI",
    title: "NATIONAL INSTRUMENTS CORP",
  },
  {
    ticker: "SMAR",
    title: "SMARTSHEET INC",
  },
  {
    ticker: "DDS",
    title: "DILLARD'S, INC.",
  },
  {
    ticker: "SLFPY",
    title: "STANDARD LIFE PLC",
  },
  {
    ticker: "SRCL",
    title: "STERICYCLE INC",
  },
  {
    ticker: "STVN",
    title: "Stevanato Group S.p.A.",
  },
  {
    ticker: "TKR",
    title: "TIMKEN CO",
  },
  {
    ticker: "CWEN",
    title: "Clearway Energy, Inc.",
  },
  {
    ticker: "TDC",
    title: "TERADATA CORP /DE/",
  },
  {
    ticker: "QDEL",
    title: "QuidelOrtho Corp",
  },
  {
    ticker: "ESGR",
    title: "Enstar Group LTD",
  },
  {
    ticker: "PEGA",
    title: "PEGASYSTEMS INC",
  },
  {
    ticker: "PECO",
    title: "Phillips Edison & Company, Inc.",
  },
  {
    ticker: "SNDR",
    title: "Schneider National, Inc.",
  },
  {
    ticker: "LPL",
    title: "LG Display Co., Ltd.",
  },
  {
    ticker: "NTLA",
    title: "Intellia Therapeutics, Inc.",
  },
  {
    ticker: "DEI",
    title: "Douglas Emmett Inc",
  },
  {
    ticker: "NCR",
    title: "NCR CORP",
  },
  {
    ticker: "ABG",
    title: "ASBURY AUTOMOTIVE GROUP INC",
  },
  {
    ticker: "SPSC",
    title: "SPS COMMERCE INC",
  },
  {
    ticker: "ALSN",
    title: "Allison Transmission Holdings Inc",
  },
  {
    ticker: "PSTH",
    title: "Pershing Square Tontine Holdings, Ltd.",
  },
  {
    ticker: "HELE",
    title: "HELEN OF TROY LTD",
  },
  {
    ticker: "JHG",
    title: "JANUS HENDERSON GROUP PLC",
  },
  {
    ticker: "WOOF",
    title: "Petco Health & Wellness Company, Inc.",
  },
  {
    ticker: "KSS",
    title: "KOHLS Corp",
  },
  {
    ticker: "AMBP",
    title: "Ardagh Metal Packaging S.A.",
  },
  {
    ticker: "BL",
    title: "BLACKLINE, INC.",
  },
  {
    ticker: "GRP-UN",
    title: "GRANITE REAL ESTATE INVESTMENT TRUST",
  },
  {
    ticker: "ATKR",
    title: "Atkore Inc.",
  },
  {
    ticker: "CRUS",
    title: "CIRRUS LOGIC, INC.",
  },
  {
    ticker: "CHX",
    title: "ChampionX Corp",
  },
  {
    ticker: "PVH",
    title: "PVH CORP. /DE/",
  },
  {
    ticker: "IGT",
    title: "International Game Technology PLC",
  },
  {
    ticker: "AQUA",
    title: "Evoqua Water Technologies Corp.",
  },
  {
    ticker: "SR",
    title: "SPIRE INC",
  },
  {
    ticker: "MMS",
    title: "MAXIMUS, INC.",
  },
  {
    ticker: "ZLAB",
    title: "Zai Lab Ltd",
  },
  {
    ticker: "WE",
    title: "WeWork Inc.",
  },
  {
    ticker: "MRTX",
    title: "Mirati Therapeutics, Inc.",
  },
  {
    ticker: "AVAL",
    title: "Grupo Aval Acciones Y Valores S.A.",
  },
  {
    ticker: "SHOP",
    title: "SHOPIFY INC.",
  },
  {
    ticker: "TNDM",
    title: "TANDEM DIABETES CARE INC",
  },
  {
    ticker: "DFIHY",
    title: "DAIRY FARM INTERNATIONAL HOLDINGS LTD /FI",
  },
  {
    ticker: "AGO",
    title: "ASSURED GUARANTY LTD",
  },
  {
    ticker: "HWC",
    title: "HANCOCK WHITNEY CORP",
  },
  {
    ticker: "YETI",
    title: "YETI Holdings, Inc.",
  },
  {
    ticker: "HGTY",
    title: "Hagerty, Inc.",
  },
  {
    ticker: "RPD",
    title: "Rapid7, Inc.",
  },
  {
    ticker: "VNT",
    title: "Vontier Corp",
  },
  {
    ticker: "CERE",
    title: "Cerevel Therapeutics Holdings, Inc.",
  },
  {
    ticker: "MANT",
    title: "MANTECH INTERNATIONAL CORP",
  },
  {
    ticker: "WIX",
    title: "Wix.com Ltd.",
  },
  {
    ticker: "CVNA",
    title: "CARVANA CO.",
  },
  {
    ticker: "HHC",
    title: "Howard Hughes Corp",
  },
  {
    ticker: "SAUHY",
    title: "Straumann Holding AG / ADR",
  },
  {
    ticker: "OLLI",
    title: "Ollie's Bargain Outlet Holdings, Inc.",
  },
  {
    ticker: "R",
    title: "RYDER SYSTEM INC",
  },
  {
    ticker: "KRG",
    title: "KITE REALTY GROUP TRUST",
  },
  {
    ticker: "ADRZY",
    title: "Andritz AG",
  },
  {
    ticker: "WBS",
    title: "WEBSTER FINANCIAL CORP",
  },
  {
    ticker: "MRVI",
    title: "MARAVAI LIFESCIENCES HOLDINGS, INC.",
  },
  {
    ticker: "SAM",
    title: "BOSTON BEER CO INC",
  },
  {
    ticker: "NSP",
    title: "INSPERITY, INC.",
  },
  {
    ticker: "INDB",
    title: "INDEPENDENT BANK CORP",
  },
  {
    ticker: "TFSL",
    title: "TFS Financial CORP",
  },
  {
    ticker: "DOC",
    title: "Physicians Realty Trust",
  },
  {
    ticker: "SJI",
    title: "SOUTH JERSEY INDUSTRIES INC",
  },
  {
    ticker: "VLPNY",
    title: "VOESTALPINE AG",
  },
  {
    ticker: "SID",
    title: "NATIONAL STEEL CO",
  },
  {
    ticker: "MGY",
    title: "Magnolia Oil & Gas Corp",
  },
  {
    ticker: "BOX",
    title: "BOX INC",
  },
  {
    ticker: "AL",
    title: "AIR LEASE CORP",
  },
  {
    ticker: "LOPE",
    title: "Grand Canyon Education, Inc.",
  },
  {
    ticker: "DNLI",
    title: "Denali Therapeutics Inc.",
  },
  {
    ticker: "CIG",
    title: "ENERGY CO OF MINAS GERAIS",
  },
  {
    ticker: "WTM",
    title: "WHITE MOUNTAINS INSURANCE GROUP LTD",
  },
  {
    ticker: "ELY",
    title: "CALLAWAY GOLF CO",
  },
  {
    ticker: "AY",
    title: "Atlantica Sustainable Infrastructure plc",
  },
  {
    ticker: "ALGM",
    title: "ALLEGRO MICROSYSTEMS, INC.",
  },
  {
    ticker: "UMPQ",
    title: "UMPQUA HOLDINGS CORP",
  },
  {
    ticker: "AMKR",
    title: "AMKOR TECHNOLOGY, INC.",
  },
  {
    ticker: "CWST",
    title: "CASELLA WASTE SYSTEMS INC",
  },
  {
    ticker: "ARWR",
    title: "ARROWHEAD PHARMACEUTICALS, INC.",
  },
  {
    ticker: "DV",
    title: "DoubleVerify Holdings, Inc.",
  },
  {
    ticker: "ATC",
    title: "Atotech Ltd",
  },
  {
    ticker: "FLS",
    title: "FLOWSERVE CORP",
  },
  {
    ticker: "DNP",
    title: "DNP SELECT INCOME FUND INC",
  },
  {
    ticker: "KRTX",
    title: "Karuna Therapeutics, Inc.",
  },
  {
    ticker: "GLPG",
    title: "GALAPAGOS NV",
  },
  {
    ticker: "SMPL",
    title: "Simply Good Foods Co",
  },
  {
    ticker: "WNS",
    title: "WNS (HOLDINGS) LTD",
  },
  {
    ticker: "MSGS",
    title: "Madison Square Garden Sports Corp.",
  },
  {
    ticker: "UAA",
    title: "Under Armour, Inc.",
  },
  {
    ticker: "TPTX",
    title: "Turning Point Therapeutics, Inc.",
  },
  {
    ticker: "OAOFY",
    title: "PJSC TATNEFT",
  },
  {
    ticker: "BTG",
    title: "B2GOLD CORP",
  },
  {
    ticker: "PBF",
    title: "PBF Energy Inc.",
  },
  {
    ticker: "ASAI",
    title: "Sendas Distributor S.A.",
  },
  {
    ticker: "BECN",
    title: "BEACON ROOFING SUPPLY INC",
  },
  {
    ticker: "AIT",
    title: "APPLIED INDUSTRIAL TECHNOLOGIES INC",
  },
  {
    ticker: "CEF",
    title: "Sprott Physical Gold & Silver Trust",
  },
  {
    ticker: "SSRM",
    title: "SSR MINING INC.",
  },
  {
    ticker: "CBT",
    title: "CABOT CORP",
  },
  {
    ticker: "EVR",
    title: "Evercore Inc.",
  },
  {
    ticker: "OWL",
    title: "BLUE OWL CAPITAL INC.",
  },
  {
    ticker: "QS",
    title: "QuantumScape Corp",
  },
  {
    ticker: "KEX",
    title: "KIRBY CORP",
  },
  {
    ticker: "ZD",
    title: "ZIFF DAVIS, INC.",
  },
  {
    ticker: "MRCY",
    title: "MERCURY SYSTEMS INC",
  },
  {
    ticker: "HIW",
    title: "HIGHWOODS PROPERTIES, INC.",
  },
  {
    ticker: "LANC",
    title: "LANCASTER COLONY CORP",
  },
  {
    ticker: "AMED",
    title: "AMEDISYS INC",
  },
  {
    ticker: "AWI",
    title: "ARMSTRONG WORLD INDUSTRIES INC",
  },
  {
    ticker: "BRZE",
    title: "Braze, Inc.",
  },
  {
    ticker: "EVA",
    title: "Enviva Inc.",
  },
  {
    ticker: "RDN",
    title: "RADIAN GROUP INC",
  },
  {
    ticker: "AVNT",
    title: "AVIENT CORP",
  },
  {
    ticker: "AEMMY",
    title: "A2A SpA",
  },
  {
    ticker: "LTHM",
    title: "Livent Corp.",
  },
  {
    ticker: "SEAS",
    title: "SeaWorld Entertainment, Inc.",
  },
  {
    ticker: "HBI",
    title: "Hanesbrands Inc.",
  },
  {
    ticker: "ICUI",
    title: "ICU MEDICAL INC/DE",
  },
  {
    ticker: "NOMD",
    title: "Nomad Foods Ltd",
  },
  {
    ticker: "DUOL",
    title: "Duolingo, Inc.",
  },
  {
    ticker: "EPR",
    title: "EPR PROPERTIES",
  },
  {
    ticker: "EBC",
    title: "Eastern Bankshares, Inc.",
  },
  {
    ticker: "FRSH",
    title: "Freshworks Inc.",
  },
  {
    ticker: "CURLF",
    title: "Curaleaf Holdings, Inc.",
  },
  {
    ticker: "JBT",
    title: "John Bean Technologies CORP",
  },
  {
    ticker: "DNA",
    title: "Ginkgo Bioworks Holdings, Inc.",
  },
  {
    ticker: "CNM",
    title: "Core & Main, Inc.",
  },
  {
    ticker: "ACT",
    title: "Enact Holdings, Inc.",
  },
  {
    ticker: "NEA",
    title: "Nuveen AMT-Free Quality Municipal Income Fund",
  },
  {
    ticker: "TRTN",
    title: "Triton International Ltd",
  },
  {
    ticker: "DORM",
    title: "Dorman Products, Inc.",
  },
  {
    ticker: "CERT",
    title: "Certara, Inc.",
  },
  {
    ticker: "FNB",
    title: "FNB CORP/PA/",
  },
  {
    ticker: "CNX",
    title: "CNX Resources Corp",
  },
  {
    ticker: "TNL",
    title: "Travel & Leisure Co.",
  },
  {
    ticker: "CWK",
    title: "Cushman & Wakefield plc",
  },
  {
    ticker: "APG",
    title: "APi Group Corp",
  },
  {
    ticker: "MPLN",
    title: "MultiPlan Corp",
  },
  {
    ticker: "FOXF",
    title: "FOX FACTORY HOLDING CORP",
  },
  {
    ticker: "IHS",
    title: "IHS Holding Ltd",
  },
  {
    ticker: "NTRA",
    title: "Natera, Inc.",
  },
  {
    ticker: "IRDEY",
    title: "Iren S.p.A./ADR",
  },
  {
    ticker: "CBU",
    title: "COMMUNITY BANK SYSTEM, INC.",
  },
  {
    ticker: "CYTK",
    title: "CYTOKINETICS INC",
  },
  {
    ticker: "HOMB",
    title: "HOME BANCSHARES INC",
  },
  {
    ticker: "AEL",
    title: "AMERICAN EQUITY INVESTMENT LIFE HOLDING CO",
  },
  {
    ticker: "IQ",
    title: "iQIYI, Inc.",
  },
  {
    ticker: "NARI",
    title: "Inari Medical, Inc.",
  },
  {
    ticker: "NTCO",
    title: "Natura &Co Holding S.A.",
  },
  {
    ticker: "HAE",
    title: "HAEMONETICS CORP",
  },
  {
    ticker: "SPB",
    title: "Spectrum Brands Holdings, Inc.",
  },
  {
    ticker: "STAA",
    title: "STAAR SURGICAL CO",
  },
  {
    ticker: "RLX",
    title: "RLX Technology Inc.",
  },
  {
    ticker: "FELE",
    title: "FRANKLIN ELECTRIC CO INC",
  },
  {
    ticker: "BNL",
    title: "Broadstone Net Lease, Inc.",
  },
  {
    ticker: "ABCM",
    title: "Abcam plc",
  },
  {
    ticker: "CVBF",
    title: "CVB FINANCIAL CORP",
  },
  {
    ticker: "BHF",
    title: "Brighthouse Financial, Inc.",
  },
  {
    ticker: "ERF",
    title: "ENERPLUS Corp",
  },
  {
    ticker: "FCFS",
    title: "FirstCash Holdings, Inc.",
  },
  {
    ticker: "WBT",
    title: "Welbilt, Inc.",
  },
  {
    ticker: "IHCPF",
    title: "Inchcape plc/ADR",
  },
  {
    ticker: "VIR",
    title: "Vir Biotechnology, Inc.",
  },
  {
    ticker: "NEWR",
    title: "NEW RELIC, INC.",
  },
  {
    ticker: "CVI",
    title: "CVR ENERGY INC",
  },
  {
    ticker: "SXT",
    title: "SENSIENT TECHNOLOGIES CORP",
  },
  {
    ticker: "APLE",
    title: "Apple Hospitality REIT, Inc.",
  },
  {
    ticker: "SEM",
    title: "SELECT MEDICAL HOLDINGS CORP",
  },
  {
    ticker: "MCW",
    title: "Mister Car Wash, Inc.",
  },
  {
    ticker: "LIVN",
    title: "LivaNova PLC",
  },
  {
    ticker: "GATX",
    title: "GATX CORP",
  },
  {
    ticker: "HAYW",
    title: "Hayward Holdings, Inc.",
  },
  {
    ticker: "PACW",
    title: "PACWEST BANCORP",
  },
  {
    ticker: "LSPD",
    title: "Lightspeed Commerce Inc.",
  },
  {
    ticker: "EQC",
    title: "Equity Commonwealth",
  },
  {
    ticker: "APPN",
    title: "APPIAN CORP",
  },
  {
    ticker: "PAGS",
    title: "PagSeguro Digital Ltd.",
  },
  {
    ticker: "SMTC",
    title: "SEMTECH CORP",
  },
  {
    ticker: "WK",
    title: "WORKIVA INC",
  },
  {
    ticker: "AYX",
    title: "Alteryx, Inc.",
  },
  {
    ticker: "LAZ",
    title: "Lazard Ltd",
  },
  {
    ticker: "ZWS",
    title: "Zurn Water Solutions Corp",
  },
  {
    ticker: "FLR",
    title: "FLUOR CORP",
  },
  {
    ticker: "ASAN",
    title: "Asana, Inc.",
  },
  {
    ticker: "NWE",
    title: "NORTHWESTERN CORP",
  },
  {
    ticker: "AJRD",
    title: "AEROJET ROCKETDYNE HOLDINGS, INC.",
  },
  {
    ticker: "JWN",
    title: "NORDSTROM INC",
  },
  {
    ticker: "IRTC",
    title: "iRhythm Technologies, Inc.",
  },
  {
    ticker: "NNI",
    title: "NELNET INC",
  },
  {
    ticker: "UCBI",
    title: "UNITED COMMUNITY BANKS INC",
  },
  {
    ticker: "VRNS",
    title: "VARONIS SYSTEMS INC",
  },
  {
    ticker: "SBRA",
    title: "Sabra Health Care REIT, Inc.",
  },
  {
    ticker: "UNF",
    title: "UNIFIRST CORP",
  },
  {
    ticker: "PTEN",
    title: "PATTERSON UTI ENERGY INC",
  },
  {
    ticker: "APPF",
    title: "APPFOLIO INC",
  },
  {
    ticker: "NTNX",
    title: "Nutanix, Inc.",
  },
  {
    ticker: "BKU",
    title: "BankUnited, Inc.",
  },
  {
    ticker: "WD",
    title: "Walker & Dunlop, Inc.",
  },
  {
    ticker: "VAL",
    title: "Valaris Ltd",
  },
  {
    ticker: "HASI",
    title: "Hannon Armstrong Sustainable Infrastructure Capital, Inc.",
  },
  {
    ticker: "BCUCY",
    title: "Brunello Cucinelli S.p.A./ADR",
  },
  {
    ticker: "GLBE",
    title: "Global-E Online Ltd.",
  },
  {
    ticker: "BANF",
    title: "BANCFIRST CORP /OK/",
  },
  {
    ticker: "JKS",
    title: "JinkoSolar Holding Co., Ltd.",
  },
  {
    ticker: "PK",
    title: "Park Hotels & Resorts Inc.",
  },
  {
    ticker: "IIJIY",
    title: "INTERNET INITIATIVE JAPAN INC",
  },
  {
    ticker: "GTES",
    title: "Gates Industrial Corp plc",
  },
  {
    ticker: "LKNCY",
    title: "Luckin Coffee Inc.",
  },
  {
    ticker: "TTEC",
    title: "TTEC Holdings, Inc.",
  },
  {
    ticker: "CRC",
    title: "California Resources Corp",
  },
  {
    ticker: "BZZUY",
    title: "BUZZI UNICEM S.p.A.",
  },
  {
    ticker: "SPR",
    title: "Spirit AeroSystems Holdings, Inc.",
  },
  {
    ticker: "FUL",
    title: "FULLER H B CO",
  },
  {
    ticker: "ALIT",
    title: "Alight, Inc. / Delaware",
  },
  {
    ticker: "KFY",
    title: "KORN FERRY",
  },
  {
    ticker: "ALE",
    title: "ALLETE INC",
  },
  {
    ticker: "TAIPY",
    title: "Taisho Pharmaceutical Holdings Co Ltd./ADR",
  },
  {
    ticker: "NEU",
    title: "NEWMARKET CORP",
  },
  {
    ticker: "AVA",
    title: "AVISTA CORP",
  },
  {
    ticker: "GPS",
    title: "GAP INC",
  },
  {
    ticker: "SLG",
    title: "SL GREEN REALTY CORP",
  },
  {
    ticker: "BIPC",
    title: "Brookfield Infrastructure Corp",
  },
  {
    ticker: "PEGRY",
    title: "Pennon Group Plc / ADR",
  },
  {
    ticker: "VET",
    title: "VERMILION ENERGY INC.",
  },
  {
    ticker: "PZZA",
    title: "PAPA JOHNS INTERNATIONAL INC",
  },
  {
    ticker: "TAC",
    title: "TRANSALTA CORP",
  },
  {
    ticker: "SPT",
    title: "Sprout Social, Inc.",
  },
  {
    ticker: "CD",
    title: "Chindata Group Holdings Ltd",
  },
  {
    ticker: "JBGS",
    title: "JBG SMITH Properties",
  },
  {
    ticker: "SUN",
    title: "Sunoco LP",
  },
  {
    ticker: "CNS",
    title: "COHEN & STEERS, INC.",
  },
  {
    ticker: "OPEN",
    title: "Opendoor Technologies Inc.",
  },
  {
    ticker: "BB",
    title: "BLACKBERRY Ltd",
  },
  {
    ticker: "KMPR",
    title: "KEMPER Corp",
  },
  {
    ticker: "JAMF",
    title: "Jamf Holding Corp.",
  },
  {
    ticker: "ALRM",
    title: "Alarm.com Holdings, Inc.",
  },
  {
    ticker: "NCNO",
    title: "nCino, Inc.",
  },
  {
    ticker: "GPI",
    title: "GROUP 1 AUTOMOTIVE INC",
  },
  {
    ticker: "PCH",
    title: "POTLATCHDELTIC CORP",
  },
  {
    ticker: "VRT",
    title: "Vertiv Holdings Co",
  },
  {
    ticker: "VIAV",
    title: "VIAVI SOLUTIONS INC.",
  },
  {
    ticker: "CNR",
    title: "Cornerstone Building Brands, Inc.",
  },
  {
    ticker: "MMSI",
    title: "MERIT MEDICAL SYSTEMS INC",
  },
  {
    ticker: "TAL",
    title: "TAL Education Group",
  },
  {
    ticker: "ASO",
    title: "Academy Sports & Outdoors, Inc.",
  },
  {
    ticker: "VSBC",
    title: "VITASPRING BIOMEDICAL CO. LTD.",
  },
  {
    ticker: "INST",
    title: "INSTRUCTURE HOLDINGS, INC.",
  },
  {
    ticker: "AWR",
    title: "AMERICAN STATES WATER CO",
  },
  {
    ticker: "MATX",
    title: "Matson, Inc.",
  },
  {
    ticker: "MTSI",
    title: "MACOM Technology Solutions Holdings, Inc.",
  },
  {
    ticker: "CATY",
    title: "CATHAY GENERAL BANCORP",
  },
  {
    ticker: "PRVA",
    title: "Privia Health Group, Inc.",
  },
  {
    ticker: "GOLF",
    title: "Acushnet Holdings Corp.",
  },
  {
    ticker: "DEN",
    title: "DENBURY INC",
  },
  {
    ticker: "GEF",
    title: "GREIF, INC",
  },
  {
    ticker: "ONTO",
    title: "ONTO INNOVATION INC.",
  },
  {
    ticker: "BHC",
    title: "Bausch Health Companies Inc.",
  },
  {
    ticker: "MLI",
    title: "MUELLER INDUSTRIES INC",
  },
  {
    ticker: "BOH",
    title: "BANK OF HAWAII CORP",
  },
  {
    ticker: "LXP",
    title: "LXP Industrial Trust",
  },
  {
    ticker: "ACIW",
    title: "ACI WORLDWIDE, INC.",
  },
  {
    ticker: "GT",
    title: "GOODYEAR TIRE & RUBBER CO /OH/",
  },
  {
    ticker: "HRMY",
    title: "Harmony Biosciences Holdings, Inc.",
  },
  {
    ticker: "FIX",
    title: "COMFORT SYSTEMS USA INC",
  },
  {
    ticker: "FHI",
    title: "FEDERATED HERMES, INC.",
  },
  {
    ticker: "ROIV",
    title: "Roivant Sciences Ltd.",
  },
  {
    ticker: "SQSP",
    title: "Squarespace, Inc.",
  },
  {
    ticker: "TMHC",
    title: "Taylor Morrison Home Corp",
  },
  {
    ticker: "ARNC",
    title: "Arconic Corp",
  },
  {
    ticker: "PTON",
    title: "PELOTON INTERACTIVE, INC.",
  },
  {
    ticker: "FOLD",
    title: "AMICUS THERAPEUTICS, INC.",
  },
  {
    ticker: "OFC",
    title: "CORPORATE OFFICE PROPERTIES TRUST",
  },
  {
    ticker: "CWT",
    title: "CALIFORNIA WATER SERVICE GROUP",
  },
  {
    ticker: "FN",
    title: "Fabrinet",
  },
  {
    ticker: "HI",
    title: "Hillenbrand, Inc.",
  },
  {
    ticker: "ABCL",
    title: "AbCellera Biologics Inc.",
  },
  {
    ticker: "FTI",
    title: "TechnipFMC plc",
  },
  {
    ticker: "CRI",
    title: "CARTERS INC",
  },
  {
    ticker: "BLKB",
    title: "BLACKBAUD INC",
  },
  {
    ticker: "PBH",
    title: "Prestige Consumer Healthcare Inc.",
  },
  {
    ticker: "NSIT",
    title: "INSIGHT ENTERPRISES INC",
  },
  {
    ticker: "PDCO",
    title: "PATTERSON COMPANIES, INC.",
  },
  {
    ticker: "DBC",
    title: "Invesco DB Commodity Index Tracking Fund",
  },
  {
    ticker: "TWNK",
    title: "Hostess Brands, Inc.",
  },
  {
    ticker: "PRFT",
    title: "PERFICIENT INC",
  },
  {
    ticker: "CRK",
    title: "COMSTOCK RESOURCES INC",
  },
  {
    ticker: "BSM",
    title: "Black Stone Minerals, L.P.",
  },
  {
    ticker: "BE",
    title: "Bloom Energy Corp",
  },
  {
    ticker: "BCO",
    title: "BRINKS CO",
  },
  {
    ticker: "SITM",
    title: "SITIME Corp",
  },
  {
    ticker: "JOBY",
    title: "Joby Aviation, Inc.",
  },
  {
    ticker: "PTCT",
    title: "PTC THERAPEUTICS, INC.",
  },
  {
    ticker: "DUFRY",
    title: "Dufry AG/ADR",
  },
  {
    ticker: "NAD",
    title: "Nuveen Quality Municipal Income Fund",
  },
  {
    ticker: "IBTX",
    title: "Independent Bank Group, Inc.",
  },
  {
    ticker: "FHB",
    title: "FIRST HAWAIIAN, INC.",
  },
  {
    ticker: "CCOI",
    title: "COGENT COMMUNICATIONS HOLDINGS, INC.",
  },
  {
    ticker: "AGI",
    title: "ALAMOS GOLD INC",
  },
  {
    ticker: "BPMC",
    title: "Blueprint Medicines Corp",
  },
  {
    ticker: "CORT",
    title: "CORCEPT THERAPEUTICS INC",
  },
  {
    ticker: "AAON",
    title: "AAON, INC.",
  },
  {
    ticker: "VC",
    title: "VISTEON CORP",
  },
  {
    ticker: "CVLT",
    title: "COMMVAULT SYSTEMS INC",
  },
  {
    ticker: "ABM",
    title: "ABM INDUSTRIES INC /DE/",
  },
  {
    ticker: "MEOH",
    title: "METHANEX CORP",
  },
  {
    ticker: "FOUR",
    title: "Shift4 Payments, Inc.",
  },
  {
    ticker: "LCII",
    title: "LCI INDUSTRIES",
  },
  {
    ticker: "DBRG",
    title: "DigitalBridge Group, Inc.",
  },
  {
    ticker: "SFM",
    title: "Sprouts Farmers Market, Inc.",
  },
  {
    ticker: "OTTR",
    title: "Otter Tail Corp",
  },
  {
    ticker: "ENV",
    title: "ENVESTNET, INC.",
  },
  {
    ticker: "MGEE",
    title: "MGE ENERGY INC",
  },
  {
    ticker: "PSLV",
    title: "Sprott Physical Silver Trust",
  },
  {
    ticker: "SITC",
    title: "SITE Centers Corp.",
  },
  {
    ticker: "MTH",
    title: "Meritage Homes CORP",
  },
  {
    ticker: "GHC",
    title: "Graham Holdings Co",
  },
  {
    ticker: "CVET",
    title: "COVETRUS, INC.",
  },
  {
    ticker: "MLCO",
    title: "Melco Resorts & Entertainment LTD",
  },
  {
    ticker: "SIMO",
    title: "Silicon Motion Technology CORP",
  },
  {
    ticker: "PPBI",
    title: "PACIFIC PREMIER BANCORP INC",
  },
  {
    ticker: "UPWK",
    title: "UPWORK, INC",
  },
  {
    ticker: "ABCB",
    title: "Ameris Bancorp",
  },
  {
    ticker: "NVG",
    title: "Nuveen AMT-Free Municipal Credit Income Fund",
  },
  {
    ticker: "ATI",
    title: "ALLEGHENY TECHNOLOGIES INC",
  },
  {
    ticker: "SKY",
    title: "Skyline Champion Corp",
  },
  {
    ticker: "DY",
    title: "DYCOM INDUSTRIES INC",
  },
  {
    ticker: "CNMD",
    title: "CONMED Corp",
  },
  {
    ticker: "ADNT",
    title: "Adient plc",
  },
  {
    ticker: "COOP",
    title: "Mr. Cooper Group Inc.",
  },
  {
    ticker: "NHI",
    title: "NATIONAL HEALTH INVESTORS INC",
  },
  {
    ticker: "CROX",
    title: "Crocs, Inc.",
  },
  {
    ticker: "AGTI",
    title: "AGILITI, INC. \\DE",
  },
  {
    ticker: "SIG",
    title: "SIGNET JEWELERS LTD",
  },
  {
    ticker: "KOS",
    title: "Kosmos Energy Ltd.",
  },
  {
    ticker: "BRP",
    title: "BRP Group, Inc.",
  },
  {
    ticker: "JTEKY",
    title: "JTEKT Corp",
  },
  {
    ticker: "ETRN",
    title: "Equitrans Midstream Corp",
  },
  {
    ticker: "PSEC",
    title: "PROSPECT CAPITAL CORP",
  },
  {
    ticker: "SGRY",
    title: "Surgery Partners, Inc.",
  },
  {
    ticker: "REZI",
    title: "RESIDEO TECHNOLOGIES, INC.",
  },
  {
    ticker: "KNBE",
    title: "KnowBe4, Inc.",
  },
  {
    ticker: "EVH",
    title: "Evolent Health, Inc.",
  },
  {
    ticker: "VRNT",
    title: "VERINT SYSTEMS INC",
  },
  {
    ticker: "BTEGF",
    title: "BAYTEX ENERGY CORP.",
  },
  {
    ticker: "TCN",
    title: "Tricon Residential Inc.",
  },
  {
    ticker: "ASB",
    title: "ASSOCIATED BANC-CORP",
  },
  {
    ticker: "CHGG",
    title: "CHEGG, INC",
  },
  {
    ticker: "LESL",
    title: "Leslie's, Inc.",
  },
  {
    ticker: "MAIN",
    title: "Main Street Capital CORP",
  },
  {
    ticker: "CPA",
    title: "Copa Holdings, S.A.",
  },
  {
    ticker: "DIOD",
    title: "DIODES INC /DEL/",
  },
  {
    ticker: "WDFC",
    title: "WD 40 CO",
  },
  {
    ticker: "SUM",
    title: "Summit Materials, Inc.",
  },
  {
    ticker: "MC",
    title: "Moelis & Co",
  },
  {
    ticker: "FBP",
    title: "FIRST BANCORP /PR/",
  },
  {
    ticker: "HRI",
    title: "HERC HOLDINGS INC",
  },
  {
    ticker: "MMYT",
    title: "MakeMyTrip Ltd",
  },
  {
    ticker: "JBLU",
    title: "JETBLUE AIRWAYS CORP",
  },
  {
    ticker: "BEAM",
    title: "Beam Therapeutics Inc.",
  },
  {
    ticker: "SPWR",
    title: "SUNPOWER CORP",
  },
  {
    ticker: "MOG-A",
    title: "MOOG INC.",
  },
  {
    ticker: "TCBI",
    title: "TEXAS CAPITAL BANCSHARES INC/TX",
  },
  {
    ticker: "IFS",
    title: "Intercorp Financial Services Inc.",
  },
  {
    ticker: "FTCH",
    title: "Farfetch Ltd",
  },
  {
    ticker: "JJSF",
    title: "J&J SNACK FOODS CORP",
  },
  {
    ticker: "AZEK",
    title: "AZEK Co Inc.",
  },
  {
    ticker: "PFSI",
    title: "PennyMac Financial Services, Inc.",
  },
  {
    ticker: "KWR",
    title: "QUAKER CHEMICAL CORP",
  },
  {
    ticker: "UPST",
    title: "Upstart Holdings, Inc.",
  },
  {
    ticker: "FORM",
    title: "FORMFACTOR INC",
  },
  {
    ticker: "BTU",
    title: "PEABODY ENERGY CORP",
  },
  {
    ticker: "EPRT",
    title: "ESSENTIAL PROPERTIES REALTY TRUST, INC.",
  },
  {
    ticker: "RUSHA",
    title: "RUSH ENTERPRISES INC TX",
  },
  {
    ticker: "AXNX",
    title: "Axonics, Inc.",
  },
  {
    ticker: "CRVL",
    title: "CORVEL CORP",
  },
  {
    ticker: "WSFS",
    title: "WSFS FINANCIAL CORP",
  },
  {
    ticker: "IIPR",
    title: "INNOVATIVE INDUSTRIAL PROPERTIES INC",
  },
  {
    ticker: "CVAC",
    title: "CureVac N.V.",
  },
  {
    ticker: "KW",
    title: "Kennedy-Wilson Holdings, Inc.",
  },
  {
    ticker: "QFIN",
    title: "360 DigiTech, Inc.",
  },
  {
    ticker: "PGNY",
    title: "Progyny, Inc.",
  },
  {
    ticker: "SAVE",
    title: "Spirit Airlines, Inc.",
  },
  {
    ticker: "ATCO",
    title: "Atlas Corp.",
  },
  {
    ticker: "RNW",
    title: "ReNew Energy Global plc",
  },
  {
    ticker: "ESMT",
    title: "EngageSmart, Inc.",
  },
  {
    ticker: "FRHC",
    title: "Freedom Holding Corp.",
  },
  {
    ticker: "VIRT",
    title: "Virtu Financial, Inc.",
  },
  {
    ticker: "CARG",
    title: "CarGurus, Inc.",
  },
  {
    ticker: "NEOG",
    title: "NEOGEN CORP",
  },
  {
    ticker: "SANM",
    title: "SANMINA CORP",
  },
  {
    ticker: "AEIS",
    title: "ADVANCED ENERGY INDUSTRIES INC",
  },
  {
    ticker: "AUB",
    title: "Atlantic Union Bankshares Corp",
  },
  {
    ticker: "FUN",
    title: "CEDAR FAIR L P",
  },
  {
    ticker: "EVTC",
    title: "EVERTEC, Inc.",
  },
  {
    ticker: "WERN",
    title: "WERNER ENTERPRISES INC",
  },
  {
    ticker: "UILCY",
    title: "United Industrial Corp Ltd",
  },
  {
    ticker: "NUVA",
    title: "NUVASIVE INC",
  },
  {
    ticker: "IBP",
    title: "Installed Building Products, Inc.",
  },
  {
    ticker: "AIN",
    title: "ALBANY INTERNATIONAL CORP /DE/",
  },
  {
    ticker: "KBH",
    title: "KB HOME",
  },
  {
    ticker: "SHOO",
    title: "STEVEN MADDEN, LTD.",
  },
  {
    ticker: "CXM",
    title: "Sprinklr, Inc.",
  },
  {
    ticker: "IBOC",
    title: "INTERNATIONAL BANCSHARES CORP",
  },
  {
    ticker: "PCRX",
    title: "Pacira BioSciences, Inc.",
  },
  {
    ticker: "FURCF",
    title: "FAURECIA/ADR",
  },
  {
    ticker: "BOWL",
    title: "Bowlero Corp.",
  },
  {
    ticker: "TROX",
    title: "Tronox Holdings plc",
  },
  {
    ticker: "JXN",
    title: "Jackson Financial Inc.",
  },
  {
    ticker: "TRIP",
    title: "TripAdvisor, Inc.",
  },
  {
    ticker: "MTOR",
    title: "MERITOR, INC.",
  },
  {
    ticker: "CVT",
    title: "CVENT HOLDING CORP.",
  },
  {
    ticker: "FSR",
    title: "Fisker Inc./DE",
  },
  {
    ticker: "LTH",
    title: "Life Time Group Holdings, Inc.",
  },
  {
    ticker: "USM",
    title: "UNITED STATES CELLULAR CORP",
  },
  {
    ticker: "SGFY",
    title: "Signify Health, Inc.",
  },
  {
    ticker: "HLNE",
    title: "Hamilton Lane INC",
  },
  {
    ticker: "FL",
    title: "FOOT LOCKER, INC.",
  },
  {
    ticker: "XRX",
    title: "Xerox Holdings Corp",
  },
  {
    ticker: "VSH",
    title: "VISHAY INTERTECHNOLOGY INC",
  },
  {
    ticker: "OMAB",
    title: "Central North Airport Group",
  },
  {
    ticker: "UGP",
    title: "ULTRAPAR HOLDINGS INC",
  },
  {
    ticker: "SFRGY",
    title: "Salvatore Ferragamo S.p.A./ADR",
  },
  {
    ticker: "OZON",
    title: "Ozon Holdings PLC",
  },
  {
    ticker: "ONB",
    title: "OLD NATIONAL BANCORP /IN/",
  },
  {
    ticker: "NGVT",
    title: "Ingevity Corp",
  },
  {
    ticker: "NTCT",
    title: "NETSCOUT SYSTEMS INC",
  },
  {
    ticker: "ZGN",
    title: "Ermenegildo Zegna N.V.",
  },
  {
    ticker: "ENS",
    title: "EnerSys",
  },
  {
    ticker: "VSCO",
    title: "Victoria's Secret & Co.",
  },
  {
    ticker: "OUT",
    title: "OUTFRONT Media Inc.",
  },
  {
    ticker: "HUBG",
    title: "Hub Group, Inc.",
  },
  {
    ticker: "INSM",
    title: "INSMED Inc",
  },
  {
    ticker: "MCY",
    title: "MERCURY GENERAL CORP",
  },
  {
    ticker: "HPK",
    title: "HighPeak Energy, Inc.",
  },
  {
    ticker: "TRUP",
    title: "TRUPANION, INC.",
  },
  {
    ticker: "FWRD",
    title: "FORWARD AIR CORP",
  },
  {
    ticker: "SFNC",
    title: "SIMMONS FIRST NATIONAL CORP",
  },
  {
    ticker: "GDRX",
    title: "GoodRx Holdings, Inc.",
  },
  {
    ticker: "IS",
    title: "ironSource Ltd",
  },
  {
    ticker: "DELKY",
    title: "Delek Group, Ltd.",
  },
  {
    ticker: "CALM",
    title: "CAL-MAINE FOODS INC",
  },
  {
    ticker: "BRC",
    title: "BRADY CORP",
  },
  {
    ticker: "OMI",
    title: "OWENS & MINOR INC/VA/",
  },
  {
    ticker: "KLIC",
    title: "KULICKE & SOFFA INDUSTRIES INC",
  },
  {
    ticker: "MNSO",
    title: "MINISO Group Holding Ltd",
  },
  {
    ticker: "EURN",
    title: "Euronav NV",
  },
  {
    ticker: "SPXC",
    title: "SPX CORP",
  },
  {
    ticker: "MXL",
    title: "MAXLINEAR INC",
  },
  {
    ticker: "UTF",
    title: "COHEN & STEERS INFRASTRUCTURE FUND INC",
  },
  {
    ticker: "LAC",
    title: "LITHIUM AMERICAS CORP.",
  },
  {
    ticker: "HLF",
    title: "HERBALIFE NUTRITION LTD.",
  },
  {
    ticker: "VRRM",
    title: "VERRA MOBILITY Corp",
  },
  {
    ticker: "YY",
    title: "JOYY Inc.",
  },
  {
    ticker: "CPE",
    title: "Callon Petroleum Co",
  },
  {
    ticker: "HCM",
    title: "HUTCHMED (China) Ltd",
  },
  {
    ticker: "FIBK",
    title: "FIRST INTERSTATE BANCSYSTEM INC",
  },
  {
    ticker: "PWSC",
    title: "POWERSCHOOL HOLDINGS, INC.",
  },
  {
    ticker: "AHCO",
    title: "AdaptHealth Corp.",
  },
  {
    ticker: "FATE",
    title: "FATE THERAPEUTICS INC",
  },
  {
    ticker: "STNE",
    title: "StoneCo Ltd.",
  },
  {
    ticker: "THS",
    title: "TreeHouse Foods, Inc.",
  },
  {
    ticker: "ETWO",
    title: "E2open Parent Holdings, Inc.",
  },
  {
    ticker: "SBLK",
    title: "Star Bulk Carriers Corp.",
  },
  {
    ticker: "TR",
    title: "TOOTSIE ROLL INDUSTRIES INC",
  },
  {
    ticker: "MDC",
    title: "M.D.C. HOLDINGS, INC.",
  },
  {
    ticker: "EXG",
    title: "Eaton Vance Tax-Managed Global Diversified Equity Income Fund",
  },
  {
    ticker: "SRAD",
    title: "Sportradar Group AG",
  },
  {
    ticker: "CLBK",
    title: "Columbia Financial, Inc.",
  },
  {
    ticker: "BCC",
    title: "BOISE CASCADE Co",
  },
  {
    ticker: "ARLP",
    title: "ALLIANCE RESOURCE PARTNERS LP",
  },
  {
    ticker: "GLNG",
    title: "GOLAR LNG LTD",
  },
  {
    ticker: "BDC",
    title: "BELDEN INC.",
  },
  {
    ticker: "NVMI",
    title: "NOVA LTD.",
  },
  {
    ticker: "ITGR",
    title: "Integer Holdings Corp",
  },
  {
    ticker: "TRN",
    title: "TRINITY INDUSTRIES INC",
  },
  {
    ticker: "WING",
    title: "Wingstop Inc.",
  },
  {
    ticker: "AMRC",
    title: "Ameresco, Inc.",
  },
  {
    ticker: "IOSP",
    title: "INNOSPEC INC.",
  },
  {
    ticker: "JOE",
    title: "ST JOE Co",
  },
  {
    ticker: "LBRT",
    title: "Liberty Energy Inc.",
  },
  {
    ticker: "BMI",
    title: "BADGER METER INC",
  },
  {
    ticker: "FULT",
    title: "FULTON FINANCIAL CORP",
  },
  {
    ticker: "WHD",
    title: "Cactus, Inc.",
  },
  {
    ticker: "AMBA",
    title: "AMBARELLA INC",
  },
  {
    ticker: "COLB",
    title: "COLUMBIA BANKING SYSTEM, INC.",
  },
  {
    ticker: "APAM",
    title: "Artisan Partners Asset Management Inc.",
  },
  {
    ticker: "IPAR",
    title: "INTER PARFUMS INC",
  },
  {
    ticker: "HPP",
    title: "Hudson Pacific Properties, Inc.",
  },
  {
    ticker: "AIMC",
    title: "Altra Industrial Motion Corp.",
  },
  {
    ticker: "VICR",
    title: "VICOR CORP",
  },
  {
    ticker: "DH",
    title: "Definitive Healthcare Corp.",
  },
  {
    ticker: "CPK",
    title: "CHESAPEAKE UTILITIES CORP",
  },
  {
    ticker: "EYE",
    title: "National Vision Holdings, Inc.",
  },
  {
    ticker: "CCU",
    title: "UNITED BREWERIES CO INC",
  },
  {
    ticker: "SHMAY",
    title: "Shimao Group Holdings Limited/ADR",
  },
  {
    ticker: "ACAD",
    title: "ACADIA PHARMACEUTICALS INC",
  },
  {
    ticker: "NAVI",
    title: "NAVIENT CORP",
  },
  {
    ticker: "UNFI",
    title: "UNITED NATURAL FOODS INC",
  },
  {
    ticker: "NAPA",
    title: "Duckhorn Portfolio, Inc.",
  },
  {
    ticker: "AMR",
    title: "Alpha Metallurgical Resources, Inc.",
  },
  {
    ticker: "GCP",
    title: "GCP Applied Technologies Inc.",
  },
  {
    ticker: "ANGI",
    title: "Angi Inc.",
  },
  {
    ticker: "SCL",
    title: "STEPAN CO",
  },
  {
    ticker: "NEX",
    title: "NEXTIER OILFIELD SOLUTIONS INC.",
  },
  {
    ticker: "CNO",
    title: "CNO Financial Group, Inc.",
  },
  {
    ticker: "FRPT",
    title: "Freshpet, Inc.",
  },
  {
    ticker: "ULCC",
    title: "Frontier Group Holdings, Inc.",
  },
  {
    ticker: "SONO",
    title: "Sonos Inc",
  },
  {
    ticker: "DNUT",
    title: "Krispy Kreme, Inc.",
  },
  {
    ticker: "UNIT",
    title: "Uniti Group Inc.",
  },
  {
    ticker: "AATP",
    title: "Agape ATP Corp",
  },
  {
    ticker: "LGIH",
    title: "LGI Homes, Inc.",
  },
  {
    ticker: "CMTG",
    title: "Claros Mortgage Trust, Inc.",
  },
  {
    ticker: "FOCS",
    title: "Focus Financial Partners Inc.",
  },
  {
    ticker: "RMBS",
    title: "RAMBUS INC",
  },
  {
    ticker: "PSMT",
    title: "PRICESMART INC",
  },
  {
    ticker: "ARVN",
    title: "ARVINAS, INC.",
  },
  {
    ticker: "GBDC",
    title: "GOLUB CAPITAL BDC, Inc.",
  },
  {
    ticker: "KD",
    title: "Kyndryl Holdings, Inc.",
  },
  {
    ticker: "YUMM",
    title: "YUMMIES INC",
  },
  {
    ticker: "QTWO",
    title: "Q2 Holdings, Inc.",
  },
  {
    ticker: "ACA",
    title: "Arcosa, Inc.",
  },
  {
    ticker: "GKOS",
    title: "GLAUKOS Corp",
  },
  {
    ticker: "OI",
    title: "O-I Glass, Inc. /DE/",
  },
  {
    ticker: "CALX",
    title: "CALIX, INC",
  },
  {
    ticker: "NUS",
    title: "NU SKIN ENTERPRISES, INC.",
  },
  {
    ticker: "MGPI",
    title: "MGP INGREDIENTS INC",
  },
  {
    ticker: "ATGSY",
    title: "Autogrill SpA",
  },
  {
    ticker: "EQRX",
    title: "EQRx, Inc.",
  },
  {
    ticker: "TKC",
    title: "TURKCELL ILETISIM HIZMETLERI A S",
  },
  {
    ticker: "WOR",
    title: "WORTHINGTON INDUSTRIES INC",
  },
  {
    ticker: "BPXXY",
    title: "BPER BANCA S.p.A./ADR",
  },
  {
    ticker: "PEB",
    title: "Pebblebrook Hotel Trust",
  },
  {
    ticker: "LZ",
    title: "LEGALZOOM.COM, INC.",
  },
  {
    ticker: "GSAT",
    title: "Globalstar, Inc.",
  },
  {
    ticker: "THNPY",
    title: "Technip Energies N.V.",
  },
  {
    ticker: "AUR",
    title: "Aurora Innovation, Inc.",
  },
  {
    ticker: "CENT",
    title: "CENTRAL GARDEN & PET CO",
  },
  {
    ticker: "ARCH",
    title: "ARCH RESOURCES, INC.",
  },
  {
    ticker: "HAIN",
    title: "HAIN CELESTIAL GROUP INC",
  },
  {
    ticker: "ITRI",
    title: "ITRON, INC.",
  },
  {
    ticker: "PD",
    title: "PagerDuty, Inc.",
  },
  {
    ticker: "PLXS",
    title: "PLEXUS CORP",
  },
  {
    ticker: "DKL",
    title: "Delek Logistics Partners, LP",
  },
  {
    ticker: "RIG",
    title: "Transocean Ltd.",
  },
  {
    ticker: "ALHC",
    title: "Alignment Healthcare, Inc.",
  },
  {
    ticker: "PRMW",
    title: "Primo Water Corp /CN/",
  },
  {
    ticker: "CWAN",
    title: "Clearwater Analytics Holdings, Inc.",
  },
  {
    ticker: "SHO",
    title: "Sunstone Hotel Investors, Inc.",
  },
  {
    ticker: "FSS",
    title: "FEDERAL SIGNAL CORP /DE/",
  },
  {
    ticker: "VNOM",
    title: "Viper Energy Partners LP",
  },
  {
    ticker: "HTH",
    title: "Hilltop Holdings Inc.",
  },
  {
    ticker: "HL",
    title: "HECLA MINING CO/DE/",
  },
  {
    ticker: "GOGL",
    title: "Golden Ocean Group Ltd",
  },
  {
    ticker: "OTLY",
    title: "Oatly Group AB",
  },
  {
    ticker: "KAI",
    title: "KADANT INC",
  },
  {
    ticker: "BUR",
    title: "Burford Capital Ltd",
  },
  {
    ticker: "AX",
    title: "Axos Financial, Inc.",
  },
  {
    ticker: "IBA",
    title: "Industrias Bachoco S.A.B. de C.V.",
  },
  {
    ticker: "TCNNF",
    title: "Trulieve Cannabis Corp.",
  },
  {
    ticker: "AMEH",
    title: "Apollo Medical Holdings, Inc.",
  },
  {
    ticker: "CIM",
    title: "CHIMERA INVESTMENT CORP",
  },
  {
    ticker: "MED",
    title: "MEDIFAST INC",
  },
  {
    ticker: "AILIH",
    title: "Ameren Illinois Co",
  },
  {
    ticker: "AVAV",
    title: "AeroVironment Inc",
  },
  {
    ticker: "LAZR",
    title: "Luminar Technologies, Inc./DE",
  },
  {
    ticker: "SSU",
    title: "SIGNA Sports United N.V.",
  },
  {
    ticker: "LAUR",
    title: "LAUREATE EDUCATION, INC.",
  },
  {
    ticker: "BRFS",
    title: "BRF S.A.",
  },
  {
    ticker: "NMRK",
    title: "NEWMARK GROUP, INC.",
  },
  {
    ticker: "CIXX",
    title: "CI Financial Corp.",
  },
  {
    ticker: "FTDR",
    title: "Frontdoor, Inc.",
  },
  {
    ticker: "CSQ",
    title: "CALAMOS STRATEGIC TOTAL RETURN FUND",
  },
  {
    ticker: "FROG",
    title: "JFrog Ltd",
  },
  {
    ticker: "GBT",
    title: "Global Blood Therapeutics, Inc.",
  },
  {
    ticker: "WEBR",
    title: "Weber Inc.",
  },
  {
    ticker: "CBZ",
    title: "CBIZ, Inc.",
  },
  {
    ticker: "SAFE",
    title: "Safehold Inc.",
  },
  {
    ticker: "FCPT",
    title: "Four Corners Property Trust, Inc.",
  },
  {
    ticker: "KRO",
    title: "KRONOS WORLDWIDE INC",
  },
  {
    ticker: "ATSG",
    title: "Air Transport Services Group, Inc.",
  },
  {
    ticker: "RRR",
    title: "Red Rock Resorts, Inc.",
  },
  {
    ticker: "GGAL",
    title: "GRUPO FINANCIERO GALICIA SA",
  },
  {
    ticker: "HLIO",
    title: "HELIOS TECHNOLOGIES, INC.",
  },
  {
    ticker: "CGAU",
    title: "Centerra Gold Inc.",
  },
  {
    ticker: "THRM",
    title: "GENTHERM Inc",
  },
  {
    ticker: "ALGT",
    title: "Allegiant Travel CO",
  },
  {
    ticker: "SSTK",
    title: "Shutterstock, Inc.",
  },
  {
    ticker: "KEN",
    title: "Kenon Holdings Ltd.",
  },
  {
    ticker: "NOVA",
    title: "Sunnova Energy International Inc.",
  },
  {
    ticker: "ALBKY",
    title: "ALPHA BANK AE /FI",
  },
  {
    ticker: "DAN",
    title: "DANA INC",
  },
  {
    ticker: "WIRE",
    title: "ENCORE WIRE CORP",
  },
  {
    ticker: "VSAT",
    title: "VIASAT INC",
  },
  {
    ticker: "DSEY",
    title: "Diversey Holdings, Ltd.",
  },
  {
    ticker: "LFST",
    title: "LifeStance Health Group, Inc.",
  },
  {
    ticker: "MTX",
    title: "MINERALS TECHNOLOGIES INC",
  },
  {
    ticker: "COUR",
    title: "Coursera, Inc.",
  },
  {
    ticker: "PAGP",
    title: "PLAINS GP HOLDINGS LP",
  },
  {
    ticker: "VTKLY",
    title: "VTECH HOLDINGS LTD/ADR/",
  },
  {
    ticker: "WSBC",
    title: "WESBANCO INC",
  },
  {
    ticker: "HMY",
    title: "HARMONY GOLD MINING CO LTD",
  },
  {
    ticker: "UTG",
    title: "REAVES UTILITY INCOME FUND",
  },
  {
    ticker: "YELP",
    title: "YELP INC",
  },
  {
    ticker: "DADA",
    title: "Dada Nexus Ltd",
  },
  {
    ticker: "BOOT",
    title: "Boot Barn Holdings, Inc.",
  },
  {
    ticker: "TEO",
    title: "TELECOM ARGENTINA SA",
  },
  {
    ticker: "ABR",
    title: "ARBOR REALTY TRUST INC",
  },
  {
    ticker: "ESBA",
    title: "Empire State Realty OP, L.P.",
  },
  {
    ticker: "AI",
    title: "C3.ai, Inc.",
  },
  {
    ticker: "WMK",
    title: "WEIS MARKETS INC",
  },
  {
    ticker: "PIPR",
    title: "PIPER SANDLER COMPANIES",
  },
  {
    ticker: "MLKN",
    title: "MILLERKNOLL, INC.",
  },
  {
    ticker: "SMCI",
    title: "Super Micro Computer, Inc.",
  },
  {
    ticker: "CBRL",
    title: "CRACKER BARREL OLD COUNTRY STORE, INC",
  },
  {
    ticker: "STNG",
    title: "Scorpio Tankers Inc.",
  },
  {
    ticker: "WAFD",
    title: "WASHINGTON FEDERAL INC",
  },
  {
    ticker: "UTZ",
    title: "Utz Brands, Inc.",
  },
  {
    ticker: "BANR",
    title: "BANNER CORP",
  },
  {
    ticker: "SABR",
    title: "Sabre Corp",
  },
  {
    ticker: "SIX",
    title: "Six Flags Entertainment Corp",
  },
  {
    ticker: "DK",
    title: "Delek US Holdings, Inc.",
  },
  {
    ticker: "PRGS",
    title: "PROGRESS SOFTWARE CORP /MA",
  },
  {
    ticker: "FA",
    title: "FIRST ADVANTAGE CORP",
  },
  {
    ticker: "SDGR",
    title: "Schrodinger, Inc.",
  },
  {
    ticker: "PRK",
    title: "PARK NATIONAL CORP /OH/",
  },
  {
    ticker: "TPH",
    title: "Tri Pointe Homes, Inc.",
  },
  {
    ticker: "CSGS",
    title: "CSG SYSTEMS INTERNATIONAL INC",
  },
  {
    ticker: "SBCF",
    title: "SEACOAST BANKING CORP OF FLORIDA",
  },
  {
    ticker: "ROIC",
    title: "RETAIL OPPORTUNITY INVESTMENTS CORP",
  },
  {
    ticker: "BCNAY",
    title: "Barco NV",
  },
  {
    ticker: "NOG",
    title: "NORTHERN OIL & GAS, INC.",
  },
  {
    ticker: "FRME",
    title: "FIRST MERCHANTS CORP",
  },
  {
    ticker: "RLAY",
    title: "Relay Therapeutics, Inc.",
  },
  {
    ticker: "GMS",
    title: "GMS Inc.",
  },
  {
    ticker: "BCRX",
    title: "BIOCRYST PHARMACEUTICALS INC",
  },
  {
    ticker: "TEX",
    title: "TEREX CORP",
  },
  {
    ticker: "KMT",
    title: "KENNAMETAL INC",
  },
  {
    ticker: "MAXR",
    title: "Maxar Technologies Inc.",
  },
  {
    ticker: "SJW",
    title: "SJW GROUP",
  },
  {
    ticker: "ENR",
    title: "ENERGIZER HOLDINGS, INC.",
  },
  {
    ticker: "AEO",
    title: "AMERICAN EAGLE OUTFITTERS INC",
  },
  {
    ticker: "FLYW",
    title: "Flywire Corp",
  },
  {
    ticker: "DCT",
    title: "DUCK CREEK TECHNOLOGIES, INC.",
  },
  {
    ticker: "SKIN",
    title: "Beauty Health Co",
  },
  {
    ticker: "ASZ",
    title: "Austerlitz Acquisition Corp II",
  },
  {
    ticker: "RVLV",
    title: "Revolve Group, Inc.",
  },
  {
    ticker: "NKLA",
    title: "Nikola Corp",
  },
  {
    ticker: "LGF-A",
    title: "LIONS GATE ENTERTAINMENT CORP /CN/",
  },
  {
    ticker: "FTAI",
    title: "Fortress Transportation & Infrastructure Investors LLC",
  },
  {
    ticker: "FBC",
    title: "FLAGSTAR BANCORP INC",
  },
  {
    ticker: "BLDP",
    title: "Ballard Power Systems Inc.",
  },
  {
    ticker: "AG",
    title: "FIRST MAJESTIC SILVER CORP",
  },
  {
    ticker: "MAC",
    title: "MACERICH CO",
  },
  {
    ticker: "SAGE",
    title: "Sage Therapeutics, Inc.",
  },
  {
    ticker: "MD",
    title: "MEDNAX, INC.",
  },
  {
    ticker: "EPC",
    title: "EDGEWELL PERSONAL CARE Co",
  },
  {
    ticker: "CYXT",
    title: "Cyxtera Technologies, Inc.",
  },
  {
    ticker: "EAF",
    title: "GRAFTECH INTERNATIONAL LTD",
  },
  {
    ticker: "TTGT",
    title: "TechTarget Inc",
  },
  {
    ticker: "WETG",
    title: "WeTrade Group Inc.",
  },
  {
    ticker: "FBK",
    title: "FB Financial Corp",
  },
  {
    ticker: "BMEZ",
    title: "BlackRock Health Sciences Trust II",
  },
  {
    ticker: "IRWD",
    title: "IRONWOOD PHARMACEUTICALS INC",
  },
  {
    ticker: "MGRC",
    title: "MCGRATH RENTCORP",
  },
  {
    ticker: "ATRC",
    title: "AtriCure, Inc.",
  },
  {
    ticker: "CSTM",
    title: "CONSTELLIUM SE",
  },
  {
    ticker: "GOOS",
    title: "Canada Goose Holdings Inc.",
  },
  {
    ticker: "KTB",
    title: "Kontoor Brands, Inc.",
  },
  {
    ticker: "NUV",
    title: "NUVEEN MUNICIPAL VALUE FUND INC",
  },
  {
    ticker: "GDV",
    title: "GABELLI DIVIDEND & INCOME TRUST",
  },
  {
    ticker: "CCXI",
    title: "ChemoCentryx, Inc.",
  },
  {
    ticker: "DOOR",
    title: "MASONITE INTERNATIONAL CORP",
  },
  {
    ticker: "ITCB",
    title: "CORPBANCA/FI",
  },
  {
    ticker: "MSTR",
    title: "MICROSTRATEGY Inc",
  },
  {
    ticker: "RQI",
    title: "COHEN & STEERS QUALITY INCOME REALTY FUND INC",
  },
  {
    ticker: "CSIQ",
    title: "Canadian Solar Inc.",
  },
  {
    ticker: "URBN",
    title: "URBAN OUTFITTERS INC",
  },
  {
    ticker: "OLK",
    title: "Olink Holding AB (publ)",
  },
  {
    ticker: "RCUS",
    title: "Arcus Biosciences, Inc.",
  },
  {
    ticker: "MDRX",
    title: "ALLSCRIPTS HEALTHCARE SOLUTIONS, INC.",
  },
  {
    ticker: "IDCC",
    title: "InterDigital, Inc.",
  },
  {
    ticker: "TRMK",
    title: "TRUSTMARK CORP",
  },
  {
    ticker: "EXPI",
    title: "EXP World Holdings, Inc.",
  },
  {
    ticker: "FFBC",
    title: "FIRST FINANCIAL BANCORP /OH/",
  },
  {
    ticker: "IVT",
    title: "InvenTrust Properties Corp.",
  },
  {
    ticker: "CVCO",
    title: "CAVCO INDUSTRIES INC.",
  },
  {
    ticker: "PTXKY",
    title: "PT XL Axiata Tbk/ADR",
  },
  {
    ticker: "CTRE",
    title: "CareTrust REIT, Inc.",
  },
  {
    ticker: "GNW",
    title: "GENWORTH FINANCIAL INC",
  },
  {
    ticker: "PAX",
    title: "Patria Investments Ltd",
  },
  {
    ticker: "KAR",
    title: "KAR Auction Services, Inc.",
  },
  {
    ticker: "RLJ",
    title: "RLJ Lodging Trust",
  },
  {
    ticker: "TDS",
    title: "TELEPHONE & DATA SYSTEMS INC /DE/",
  },
  {
    ticker: "MWA",
    title: "Mueller Water Products, Inc.",
  },
  {
    ticker: "TWST",
    title: "Twist Bioscience Corp",
  },
  {
    ticker: "FRO",
    title: "FRONTLINE LTD /",
  },
  {
    ticker: "LILA",
    title: "Liberty Latin America Ltd.",
  },
  {
    ticker: "FHAI",
    title: "MICROALLIANCE GROUP INC.",
  },
  {
    ticker: "WRE",
    title: "WASHINGTON REAL ESTATE INVESTMENT TRUST",
  },
  {
    ticker: "AAT",
    title: "American Assets Trust, Inc.",
  },
  {
    ticker: "FORG",
    title: "ForgeRock, Inc.",
  },
  {
    ticker: "RAMP",
    title: "LiveRamp Holdings, Inc.",
  },
  {
    ticker: "ATGE",
    title: "Adtalem Global Education Inc.",
  },
  {
    ticker: "MSGE",
    title: "Madison Square Garden Entertainment Corp.",
  },
  {
    ticker: "SASR",
    title: "SANDY SPRING BANCORP INC",
  },
  {
    ticker: "SEMR",
    title: "SEMrush Holdings, Inc.",
  },
  {
    ticker: "ARCB",
    title: "ARCBEST CORP /DE/",
  },
  {
    ticker: "EVCM",
    title: "EverCommerce Inc.",
  },
  {
    ticker: "UE",
    title: "Urban Edge Properties",
  },
  {
    ticker: "IOVA",
    title: "IOVANCE BIOTHERAPEUTICS, INC.",
  },
  {
    ticker: "NZF",
    title: "Nuveen Municipal Credit Income Fund",
  },
  {
    ticker: "CNK",
    title: "Cinemark Holdings, Inc.",
  },
  {
    ticker: "MANU",
    title: "Manchester United plc",
  },
  {
    ticker: "NAC",
    title: "Nuveen California Quality Municipal Income Fund",
  },
  {
    ticker: "EVT",
    title: "EATON VANCE TAX ADVANTAGED DIVIDEND INCOME FUND",
  },
  {
    ticker: "OPK",
    title: "OPKO HEALTH, INC.",
  },
  {
    ticker: "HTLF",
    title: "HEARTLAND FINANCIAL USA INC",
  },
  {
    ticker: "COSG",
    title: "Cosmos Group Holdings Inc.",
  },
  {
    ticker: "ICFI",
    title: "ICF International, Inc.",
  },
  {
    ticker: "NVEE",
    title: "NV5 Global, Inc.",
  },
  {
    ticker: "ETY",
    title: "Eaton Vance Tax-Managed Diversified Equity Income Fund",
  },
  {
    ticker: "GTBIF",
    title: "Green Thumb Industries Inc.",
  },
  {
    ticker: "FHTF",
    title: "FHT Future Technology Ltd",
  },
  {
    ticker: "AAWW",
    title: "ATLAS AIR WORLDWIDE HOLDINGS INC",
  },
  {
    ticker: "LFG",
    title: "Archaea Energy Inc.",
  },
  {
    ticker: "NXE",
    title: "NexGen Energy Ltd.",
  },
  {
    ticker: "PFS",
    title: "PROVIDENT FINANCIAL SERVICES INC",
  },
  {
    ticker: "LRN",
    title: "Stride, Inc.",
  },
  {
    ticker: "ESE",
    title: "ESCO TECHNOLOGIES INC",
  },
  {
    ticker: "CCYC",
    title: "Clancy Corp",
  },
  {
    ticker: "PTVE",
    title: "Pactiv Evergreen Inc.",
  },
  {
    ticker: "ZIP",
    title: "ZIPRECRUITER, INC.",
  },
  {
    ticker: "CNNE",
    title: "Cannae Holdings, Inc.",
  },
  {
    ticker: "GSHD",
    title: "Goosehead Insurance, Inc.",
  },
  {
    ticker: "OR",
    title: "Osisko Gold Royalties LTD",
  },
  {
    ticker: "AKO-A",
    title: "ANDINA BOTTLING CO INC",
  },
  {
    ticker: "KTOS",
    title: "KRATOS DEFENSE & SECURITY SOLUTIONS, INC.",
  },
  {
    ticker: "SLCJY",
    title: "SLC Agricola S.A.",
  },
  {
    ticker: "DRH",
    title: "DiamondRock Hospitality Co",
  },
  {
    ticker: "ADX",
    title: "ADAMS DIVERSIFIED EQUITY FUND, INC.",
  },
  {
    ticker: "TGSGY",
    title: "TGS NOPEC Geophysical CO",
  },
  {
    ticker: "GOGO",
    title: "Gogo Inc.",
  },
  {
    ticker: "ECPG",
    title: "ENCORE CAPITAL GROUP INC",
  },
  {
    ticker: "BVN",
    title: "BUENAVENTURA MINING CO INC",
  },
  {
    ticker: "GSBD",
    title: "Goldman Sachs BDC, Inc.",
  },
  {
    ticker: "INMD",
    title: "InMode Ltd.",
  },
  {
    ticker: "STRA",
    title: "Strategic Education, Inc.",
  },
  {
    ticker: "EBS",
    title: "Emergent BioSolutions Inc.",
  },
  {
    ticker: "RKLB",
    title: "Rocket Lab USA, Inc.",
  },
  {
    ticker: "LKFN",
    title: "LAKELAND FINANCIAL CORP",
  },
  {
    ticker: "HOPE",
    title: "HOPE BANCORP INC",
  },
  {
    ticker: "CDEV",
    title: "Centennial Resource Development, Inc.",
  },
  {
    ticker: "HEP",
    title: "HOLLY ENERGY PARTNERS LP",
  },
  {
    ticker: "PJT",
    title: "PJT Partners Inc.",
  },
  {
    ticker: "SHLS",
    title: "Shoals Technologies Group, Inc.",
  },
  {
    ticker: "POLY",
    title: "PLANTRONICS INC /CA/",
  },
  {
    ticker: "SATS",
    title: "EchoStar CORP",
  },
  {
    ticker: "TASK",
    title: "TaskUs, Inc.",
  },
  {
    ticker: "AMPH",
    title: "Amphastar Pharmaceuticals, Inc.",
  },
  {
    ticker: "KAHC",
    title: "KKR Acquisition Holdings I Corp.",
  },
  {
    ticker: "TWO",
    title: "TWO HARBORS INVESTMENT CORP.",
  },
  {
    ticker: "VCTR",
    title: "Victory Capital Holdings, Inc.",
  },
  {
    ticker: "XNCR",
    title: "Xencor Inc",
  },
  {
    ticker: "CVII",
    title: "Churchill Capital Corp VII",
  },
  {
    ticker: "NPO",
    title: "ENPRO INDUSTRIES, INC",
  },
  {
    ticker: "KRYS",
    title: "Krystal Biotech, Inc.",
  },
  {
    ticker: "HLMN",
    title: "Hillman Solutions Corp.",
  },
  {
    ticker: "NWN",
    title: "Northwest Natural Holding Co",
  },
  {
    ticker: "USAC",
    title: "USA Compression Partners, LP",
  },
  {
    ticker: "GTN",
    title: "GRAY TELEVISION INC",
  },
  {
    ticker: "DEA",
    title: "Easterly Government Properties, Inc.",
  },
  {
    ticker: "BDJ",
    title: "BlackRock Enhanced Equity Dividend Trust",
  },
  {
    ticker: "XHR",
    title: "Xenia Hotels & Resorts, Inc.",
  },
  {
    ticker: "PRM",
    title: "Perimeter Solutions, SA",
  },
  {
    ticker: "BDN",
    title: "BRANDYWINE REALTY TRUST",
  },
  {
    ticker: "IMKTA",
    title: "INGLES MARKETS INC",
  },
  {
    ticker: "BBU",
    title: "Brookfield Business Partners L.P.",
  },
  {
    ticker: "SWI",
    title: "SolarWinds Corp",
  },
  {
    ticker: "APPS",
    title: "Digital Turbine, Inc.",
  },
  {
    ticker: "CEIX",
    title: "CONSOL Energy Inc.",
  },
  {
    ticker: "GPOR",
    title: "GULFPORT ENERGY CORP",
  },
  {
    ticker: "BCAT",
    title: "BlackRock Capital Allocation Trust",
  },
  {
    ticker: "FLGT",
    title: "Fulgent Genetics, Inc.",
  },
  {
    ticker: "CSWI",
    title: "CSW INDUSTRIALS, INC.",
  },
  {
    ticker: "PDM",
    title: "Piedmont Office Realty Trust, Inc.",
  },
  {
    ticker: "NBTB",
    title: "NBT BANCORP INC",
  },
  {
    ticker: "RNST",
    title: "RENASANT CORP",
  },
  {
    ticker: "NWBI",
    title: "Northwest Bancshares, Inc.",
  },
  {
    ticker: "PLMR",
    title: "Palomar Holdings, Inc.",
  },
  {
    ticker: "ERJ",
    title: "EMBRAER S.A.",
  },
  {
    ticker: "WWW",
    title: "WOLVERINE WORLD WIDE INC /DE/",
  },
  {
    ticker: "ALLO",
    title: "Allogene Therapeutics, Inc.",
  },
  {
    ticker: "PAY",
    title: "Paymentus Holdings, Inc.",
  },
  {
    ticker: "WGO",
    title: "WINNEBAGO INDUSTRIES INC",
  },
  {
    ticker: "IMCR",
    title: "Immunocore Holdings plc",
  },
  {
    ticker: "VERX",
    title: "Vertex, Inc.",
  },
  {
    ticker: "PLAY",
    title: "Dave & Buster's Entertainment, Inc.",
  },
  {
    ticker: "WOW",
    title: "WideOpenWest, Inc.",
  },
  {
    ticker: "GAB",
    title: "GABELLI EQUITY TRUST INC",
  },
  {
    ticker: "VSTO",
    title: "Vista Outdoor Inc.",
  },
  {
    ticker: "PRAA",
    title: "PRA GROUP INC",
  },
  {
    ticker: "BYND",
    title: "BEYOND MEAT, INC.",
  },
  {
    ticker: "HTGC",
    title: "Hercules Capital, Inc.",
  },
  {
    ticker: "NG",
    title: "NOVAGOLD RESOURCES INC",
  },
  {
    ticker: "VGR",
    title: "VECTOR GROUP LTD",
  },
  {
    ticker: "SPCE",
    title: "Virgin Galactic Holdings, Inc",
  },
  {
    ticker: "GFF",
    title: "GRIFFON CORP",
  },
  {
    ticker: "DNIYY",
    title: "Danieli S.p.A.",
  },
  {
    ticker: "EFSC",
    title: "ENTERPRISE FINANCIAL SERVICES CORP",
  },
  {
    ticker: "PGRE",
    title: "Paramount Group, Inc.",
  },
  {
    ticker: "SI",
    title: "Silvergate Capital Corp",
  },
  {
    ticker: "HMN",
    title: "HORACE MANN EDUCATORS CORP /DE/",
  },
  {
    ticker: "CCS",
    title: "Century Communities, Inc.",
  },
  {
    ticker: "SYBT",
    title: "Stock Yards Bancorp, Inc.",
  },
  {
    ticker: "BROS",
    title: "Dutch Bros Inc.",
  },
  {
    ticker: "TBK",
    title: "Triumph Bancorp, Inc.",
  },
  {
    ticker: "AMPL",
    title: "Amplitude, Inc.",
  },
  {
    ticker: "STEP",
    title: "StepStone Group Inc.",
  },
  {
    ticker: "SOVO",
    title: "Sovos Brands, Inc.",
  },
  {
    ticker: "COMP",
    title: "Compass, Inc.",
  },
  {
    ticker: "ACLS",
    title: "AXCELIS TECHNOLOGIES INC",
  },
  {
    ticker: "B",
    title: "BARNES GROUP INC",
  },
  {
    ticker: "SHAK",
    title: "Shake Shack Inc.",
  },
  {
    ticker: "STER",
    title: "Sterling Check Corp.",
  },
  {
    ticker: "NXRT",
    title: "NexPoint Residential Trust, Inc.",
  },
  {
    ticker: "ELF",
    title: "e.l.f. Beauty, Inc.",
  },
  {
    ticker: "NVRO",
    title: "NEVRO CORP",
  },
  {
    ticker: "OLO",
    title: "Olo Inc.",
  },
  {
    ticker: "XENE",
    title: "Xenon Pharmaceuticals Inc.",
  },
  {
    ticker: "IBRX",
    title: "ImmunityBio, Inc.",
  },
  {
    ticker: "SNEX",
    title: "StoneX Group Inc.",
  },
  {
    ticker: "NABL",
    title: "N-able, Inc.",
  },
  {
    ticker: "MSEX",
    title: "MIDDLESEX WATER CO",
  },
  {
    ticker: "NS",
    title: "NuStar Energy L.P.",
  },
  {
    ticker: "ONEM",
    title: "1Life Healthcare Inc",
  },
  {
    ticker: "KN",
    title: "Knowles Corp",
  },
  {
    ticker: "LTGHY",
    title: "Life Healthcare Group Holdings Limited/ADR",
  },
  {
    ticker: "NTB",
    title: "Bank of N.T. Butterfield & Son Ltd",
  },
  {
    ticker: "XMTR",
    title: "Xometry, Inc.",
  },
  {
    ticker: "BGS",
    title: "B&G Foods, Inc.",
  },
  {
    ticker: "BTT",
    title: "BlackRock Municipal 2030 Target Term Trust",
  },
  {
    ticker: "VRTV",
    title: "Veritiv Corp",
  },
  {
    ticker: "SBGI",
    title: "SINCLAIR BROADCAST GROUP INC",
  },
  {
    ticker: "SUPN",
    title: "SUPERNUS PHARMACEUTICALS, INC.",
  },
  {
    ticker: "TSP",
    title: "TuSimple Holdings Inc.",
  },
  {
    ticker: "CYRX",
    title: "Cryoport, Inc.",
  },
  {
    ticker: "DVAX",
    title: "DYNAVAX TECHNOLOGIES CORP",
  },
  {
    ticker: "BSTZ",
    title: "BlackRock Science & Technology Trust II",
  },
  {
    ticker: "OSIS",
    title: "OSI SYSTEMS INC",
  },
  {
    ticker: "EGBN",
    title: "EAGLE BANCORP INC",
  },
  {
    ticker: "SAH",
    title: "SONIC AUTOMOTIVE INC",
  },
  {
    ticker: "GPRE",
    title: "Green Plains Inc.",
  },
  {
    ticker: "ODP",
    title: "ODP Corp",
  },
  {
    ticker: "IMPJY",
    title: "Salini Impregilo S.p.A/ADR",
  },
  {
    ticker: "YOU",
    title: "Clear Secure, Inc.",
  },
  {
    ticker: "CEQP",
    title: "Crestwood Equity Partners LP",
  },
  {
    ticker: "RVMD",
    title: "Revolution Medicines, Inc.",
  },
  {
    ticker: "PING",
    title: "Ping Identity Holding Corp.",
  },
  {
    ticker: "TVTX",
    title: "Travere Therapeutics, Inc.",
  },
  {
    ticker: "ENIC",
    title: "Enel Chile S.A.",
  },
  {
    ticker: "FIGS",
    title: "FIGS, Inc.",
  },
  {
    ticker: "AXSM",
    title: "Axsome Therapeutics, Inc.",
  },
  {
    ticker: "VTSCY",
    title: "Vitesco Technologies Group AG /ADR",
  },
  {
    ticker: "NE",
    title: "Noble Corp",
  },
  {
    ticker: "LTC",
    title: "LTC PROPERTIES INC",
  },
  {
    ticker: "HCC",
    title: "WARRIOR MET COAL, INC.",
  },
  {
    ticker: "BLMN",
    title: "Bloomin' Brands, Inc.",
  },
  {
    ticker: "LNN",
    title: "LINDSAY CORP",
  },
  {
    ticker: "EVRI",
    title: "Everi Holdings Inc.",
  },
  {
    ticker: "ARI",
    title: "Apollo Commercial Real Estate Finance, Inc.",
  },
  {
    ticker: "LGND",
    title: "LIGAND PHARMACEUTICALS INC",
  },
  {
    ticker: "IAS",
    title: "INTEGRAL AD SCIENCE HOLDING CORP.",
  },
  {
    ticker: "INBT",
    title: "Inbit Corp",
  },
  {
    ticker: "WABC",
    title: "WESTAMERICA BANCORPORATION",
  },
  {
    ticker: "EXFY",
    title: "Expensify, Inc.",
  },
  {
    ticker: "TSE",
    title: "Trinseo PLC",
  },
  {
    ticker: "HNI",
    title: "HNI CORP",
  },
  {
    ticker: "WFRD",
    title: "Weatherford International plc",
  },
  {
    ticker: "SKT",
    title: "TANGER FACTORY OUTLET CENTERS, INC",
  },
  {
    ticker: "RXT",
    title: "Rackspace Technology, Inc.",
  },
  {
    ticker: "RES",
    title: "RPC INC",
  },
  {
    ticker: "VCYT",
    title: "VERACYTE, INC.",
  },
  {
    ticker: "XPER",
    title: "Xperi Holding Corp",
  },
  {
    ticker: "ARRY",
    title: "Array Technologies, Inc.",
  },
  {
    ticker: "MMI",
    title: "Marcus & Millichap, Inc.",
  },
  {
    ticker: "JPS",
    title: "Nuveen Preferred & Income Securities Fund",
  },
  {
    ticker: "UVV",
    title: "UNIVERSAL CORP /VA/",
  },
  {
    ticker: "TLRY",
    title: "Tilray Brands, Inc.",
  },
  {
    ticker: "SAFT",
    title: "SAFETY INSURANCE GROUP INC",
  },
  {
    ticker: "GNL",
    title: "Global Net Lease, Inc.",
  },
  {
    ticker: "AIR",
    title: "AAR CORP",
  },
  {
    ticker: "LOB",
    title: "Live Oak Bancshares, Inc.",
  },
  {
    ticker: "MYGN",
    title: "MYRIAD GENETICS INC",
  },
  {
    ticker: "MTRN",
    title: "MATERION Corp",
  },
  {
    ticker: "PDI",
    title: "PIMCO Dynamic Income Fund",
  },
  {
    ticker: "RVT",
    title: "ROYCE VALUE TRUST, INC.",
  },
  {
    ticker: "TIGO",
    title: "MILLICOM INTERNATIONAL CELLULAR SA",
  },
  {
    ticker: "OXM",
    title: "OXFORD INDUSTRIES INC",
  },
  {
    ticker: "AUPH",
    title: "Aurinia Pharmaceuticals Inc.",
  },
  {
    ticker: "VBTX",
    title: "Veritex Holdings, Inc.",
  },
  {
    ticker: "CHEF",
    title: "Chefs' Warehouse, Inc.",
  },
  {
    ticker: "GET",
    title: "Getnet Adquirencia E Servicos Para Meios De Pagamento S.A.",
  },
  {
    ticker: "MNRO",
    title: "MONRO, INC.",
  },
  {
    ticker: "SGML",
    title: "Sigma Lithium Corp",
  },
  {
    ticker: "CTKB",
    title: "Cytek Biosciences, Inc.",
  },
  {
    ticker: "CMRE",
    title: "Costamare Inc.",
  },
  {
    ticker: "GSG",
    title: "iShares S&P GSCI Commodity-Indexed Trust",
  },
  {
    ticker: "BBIO",
    title: "BridgeBio Pharma, Inc.",
  },
  {
    ticker: "USNA",
    title: "USANA HEALTH SCIENCES INC",
  },
  {
    ticker: "AHL-PC",
    title: "ASPEN INSURANCE HOLDINGS LTD",
  },
  {
    ticker: "WBX",
    title: "Wallbox N.V.",
  },
  {
    ticker: "MYRG",
    title: "MYR GROUP INC.",
  },
  {
    ticker: "ARCO",
    title: "Arcos Dorados Holdings Inc.",
  },
  {
    ticker: "KRNT",
    title: "Kornit Digital Ltd.",
  },
  {
    ticker: "NMIH",
    title: "NMI Holdings, Inc.",
  },
  {
    ticker: "USPH",
    title: "U S PHYSICAL THERAPY INC /NV",
  },
  {
    ticker: "CRTO",
    title: "Criteo S.A.",
  },
  {
    ticker: "FDP",
    title: "FRESH DEL MONTE PRODUCE INC",
  },
  {
    ticker: "CAKE",
    title: "CHEESECAKE FACTORY INC",
  },
  {
    ticker: "HURN",
    title: "Huron Consulting Group Inc.",
  },
  {
    ticker: "FLNG",
    title: "Flex LNG Ltd.",
  },
  {
    ticker: "PTY",
    title: "PIMCO CORPORATE & INCOME OPPORTUNITY FUND",
  },
  {
    ticker: "LYEL",
    title: "Lyell Immunopharma, Inc.",
  },
  {
    ticker: "TUYA",
    title: "Tuya Inc.",
  },
  {
    ticker: "SLVM",
    title: "Sylvamo Corp",
  },
  {
    ticker: "RADI",
    title: "Radius Global Infrastructure, Inc.",
  },
  {
    ticker: "TEN",
    title: "TENNECO INC",
  },
  {
    ticker: "TELL",
    title: "TELLURIAN INC. /DE/",
  },
  {
    ticker: "USA",
    title: "LIBERTY ALL STAR EQUITY FUND",
  },
  {
    ticker: "ETV",
    title: "Eaton Vance Tax-Managed Buy-Write Opportunities Fund",
  },
  {
    ticker: "IPOF",
    title: "Social Capital Hedosophia Holdings Corp. VI",
  },
  {
    ticker: "AKR",
    title: "ACADIA REALTY TRUST",
  },
  {
    ticker: "PLUS",
    title: "EPLUS INC",
  },
  {
    ticker: "RXRX",
    title: "RECURSION PHARMACEUTICALS, INC.",
  },
  {
    ticker: "MLNK",
    title: "MeridianLink, Inc.",
  },
  {
    ticker: "CODI",
    title: "Compass Diversified Holdings",
  },
  {
    ticker: "FSLY",
    title: "Fastly, Inc.",
  },
  {
    ticker: "GDOT",
    title: "GREEN DOT CORP",
  },
  {
    ticker: "ALG",
    title: "ALAMO GROUP INC",
  },
  {
    ticker: "PSFE",
    title: "Paysafe Ltd",
  },
  {
    ticker: "EQX",
    title: "Equinox Gold Corp.",
  },
  {
    ticker: "UDMY",
    title: "Udemy, Inc.",
  },
  {
    ticker: "FORTY",
    title: "FORMULA SYSTEMS (1985) LTD",
  },
  {
    ticker: "MRTN",
    title: "MARTEN TRANSPORT LTD",
  },
  {
    ticker: "JELD",
    title: "JELD-WEN Holding, Inc.",
  },
  {
    ticker: "FINV",
    title: "FinVolution Group",
  },
  {
    ticker: "PMT",
    title: "PennyMac Mortgage Investment Trust",
  },
  {
    ticker: "VORB",
    title: "Virgin Orbit Holdings, Inc.",
  },
  {
    ticker: "TY",
    title: "TRI-CONTINENTAL CORP",
  },
  {
    ticker: "TSLX",
    title: "Sixth Street Specialty Lending, Inc.",
  },
  {
    ticker: "FCEL",
    title: "FUELCELL ENERGY INC",
  },
  {
    ticker: "TCBK",
    title: "TRICO BANCSHARES /",
  },
  {
    ticker: "AMK",
    title: "AssetMark Financial Holdings, Inc.",
  },
  {
    ticker: "STC",
    title: "STEWART INFORMATION SERVICES CORP",
  },
  {
    ticker: "TARO",
    title: "TARO PHARMACEUTICAL INDUSTRIES LTD",
  },
  {
    ticker: "PI",
    title: "IMPINJ INC",
  },
  {
    ticker: "MCG",
    title: "Membership Collective Group Inc.",
  },
  {
    ticker: "MEI",
    title: "METHODE ELECTRONICS INC",
  },
  {
    ticker: "WRMK",
    title: "Watermark Lodging Trust, Inc.",
  },
  {
    ticker: "CRCT",
    title: "Cricut, Inc.",
  },
  {
    ticker: "BKE",
    title: "BUCKLE INC",
  },
  {
    ticker: "ECVT",
    title: "Ecovyst Inc.",
  },
  {
    ticker: "PRCT",
    title: "PROCEPT BioRobotics Corp",
  },
  {
    ticker: "SBH",
    title: "Sally Beauty Holdings, Inc.",
  },
  {
    ticker: "LADR",
    title: "Ladder Capital Corp",
  },
  {
    ticker: "EXAI",
    title: "Exscientia plc",
  },
  {
    ticker: "SILK",
    title: "Silk Road Medical Inc",
  },
  {
    ticker: "NEGG",
    title: "Newegg Commerce, Inc.",
  },
  {
    ticker: "CRNCY",
    title: "CAIRN ENERGY PLC",
  },
  {
    ticker: "INT",
    title: "WORLD FUEL SERVICES CORP",
  },
  {
    ticker: "PAYO",
    title: "Payoneer Global Inc.",
  },
  {
    ticker: "LPRO",
    title: "Open Lending Corp",
  },
  {
    ticker: "ADUS",
    title: "Addus HomeCare Corp",
  },
  {
    ticker: "TGH",
    title: "TEXTAINER GROUP HOLDINGS LTD",
  },
  {
    ticker: "VIVO",
    title: "MERIDIAN BIOSCIENCE INC",
  },
  {
    ticker: "JBI",
    title: "Janus International Group, Inc.",
  },
  {
    ticker: "PDO",
    title: "PIMCO Dynamic Income Opportunities Fund",
  },
  {
    ticker: "PTNR",
    title: "PARTNER COMMUNICATIONS CO LTD",
  },
  {
    ticker: "CXW",
    title: "CoreCivic, Inc.",
  },
  {
    ticker: "MNTV",
    title: "MOMENTIVE GLOBAL INC.",
  },
  {
    ticker: "PX",
    title: "P10, Inc.",
  },
  {
    ticker: "GVA",
    title: "GRANITE CONSTRUCTION INC",
  },
  {
    ticker: "AVNS",
    title: "AVANOS MEDICAL, INC.",
  },
  {
    ticker: "PRLB",
    title: "Proto Labs Inc",
  },
  {
    ticker: "SPNS",
    title: "SAPIENS INTERNATIONAL CORP N V",
  },
  {
    ticker: "KFRC",
    title: "KFORCE INC",
  },
  {
    ticker: "RELY",
    title: "Remitly Global, Inc.",
  },
  {
    ticker: "BXMX",
    title: "Nuveen S&P 500 BuyWrite Income Fund",
  },
  {
    ticker: "CRS",
    title: "CARPENTER TECHNOLOGY CORP",
  },
  {
    ticker: "ESTA",
    title: "ESTABLISHMENT LABS HOLDINGS INC.",
  },
  {
    ticker: "VRTS",
    title: "VIRTUS INVESTMENT PARTNERS, INC.",
  },
  {
    ticker: "KIND",
    title: "Nextdoor Holdings, Inc.",
  },
  {
    ticker: "ALEX",
    title: "Alexander & Baldwin, Inc.",
  },
  {
    ticker: "MNTK",
    title: "Montauk Renewables, Inc.",
  },
  {
    ticker: "ZNTL",
    title: "Zentalis Pharmaceuticals, Inc.",
  },
  {
    ticker: "HCSG",
    title: "HEALTHCARE SERVICES GROUP INC",
  },
  {
    ticker: "GCMG",
    title: "GCM Grosvenor Inc.",
  },
  {
    ticker: "FRG",
    title: "Franchise Group, Inc.",
  },
  {
    ticker: "TDCX",
    title: "TDCX Inc.",
  },
  {
    ticker: "ARGO",
    title: "Argo Group International Holdings, Ltd.",
  },
  {
    ticker: "RCII",
    title: "RENT A CENTER INC DE",
  },
  {
    ticker: "SWTX",
    title: "SpringWorks Therapeutics, Inc.",
  },
  {
    ticker: "YPF",
    title: "YPF SOCIEDAD ANONIMA",
  },
  {
    ticker: "ROCK",
    title: "GIBRALTAR INDUSTRIES, INC.",
  },
  {
    ticker: "CINT",
    title: "CI&T Inc",
  },
  {
    ticker: "PHR",
    title: "Phreesia, Inc.",
  },
  {
    ticker: "SFL",
    title: "SFL Corp Ltd.",
  },
  {
    ticker: "BUSE",
    title: "FIRST BUSEY CORP /NV/",
  },
  {
    ticker: "FCF",
    title: "FIRST COMMONWEALTH FINANCIAL CORP /PA/",
  },
  {
    ticker: "PRTA",
    title: "PROTHENA CORP PUBLIC LTD CO",
  },
  {
    ticker: "BPIRY",
    title: "Piraeus Bank S.A.",
  },
  {
    ticker: "CFFN",
    title: "Capitol Federal Financial, Inc.",
  },
  {
    ticker: "BGCP",
    title: "BGC Partners, Inc.",
  },
  {
    ticker: "DDL",
    title: "Dingdong (Cayman) Ltd",
  },
  {
    ticker: "AROC",
    title: "Archrock, Inc.",
  },
  {
    ticker: "SG",
    title: "Sweetgreen, Inc.",
  },
  {
    ticker: "PRA",
    title: "PROASSURANCE CORP",
  },
  {
    ticker: "WRBY",
    title: "Warby Parker Inc.",
  },
  {
    ticker: "OFG",
    title: "OFG BANCORP",
  },
  {
    ticker: "VHI",
    title: "VALHI INC /DE/",
  },
  {
    ticker: "FNA",
    title: "Paragon 28, Inc.",
  },
  {
    ticker: "CTOS",
    title: "Custom Truck One Source, Inc.",
  },
  {
    ticker: "FVRR",
    title: "Fiverr International Ltd.",
  },
  {
    ticker: "GIC",
    title: "GLOBAL INDUSTRIAL Co",
  },
  {
    ticker: "DAC",
    title: "Danaos Corp",
  },
  {
    ticker: "TALO",
    title: "TALOS ENERGY INC.",
  },
  {
    ticker: "JWSM",
    title: "Jaws Mustang Acquisition Corp",
  },
  {
    ticker: "HLLY",
    title: "Holley Inc.",
  },
  {
    ticker: "TTMI",
    title: "TTM TECHNOLOGIES INC",
  },
  {
    ticker: "AGIO",
    title: "AGIOS PHARMACEUTICALS, INC.",
  },
  {
    ticker: "BV",
    title: "BrightView Holdings, Inc.",
  },
  {
    ticker: "FBNC",
    title: "FIRST BANCORP /NC/",
  },
  {
    ticker: "ENVX",
    title: "Enovix Corp",
  },
  {
    ticker: "VZIO",
    title: "Vizio Holding Corp.",
  },
  {
    ticker: "EOSS",
    title: "EOS INC.",
  },
  {
    ticker: "HIMX",
    title: "Himax Technologies, Inc.",
  },
  {
    ticker: "MDGL",
    title: "MADRIGAL PHARMACEUTICALS, INC.",
  },
  {
    ticker: "PATK",
    title: "PATRICK INDUSTRIES INC",
  },
  {
    ticker: "SCHL",
    title: "SCHOLASTIC CORP",
  },
  {
    ticker: "KALU",
    title: "KAISER ALUMINUM CORP",
  },
  {
    ticker: "BAMR",
    title: "Brookfield Asset Management Reinsurance Partners Ltd.",
  },
  {
    ticker: "GDEV",
    title: "Nexters Inc.",
  },
  {
    ticker: "ADV",
    title: "Advantage Solutions Inc.",
  },
  {
    ticker: "XPEL",
    title: "XPEL, Inc.",
  },
  {
    ticker: "AVDX",
    title: "AvidXchange Holdings, Inc.",
  },
  {
    ticker: "CRSR",
    title: "Corsair Gaming, Inc.",
  },
  {
    ticker: "ESRT",
    title: "Empire State Realty Trust, Inc.",
  },
  {
    ticker: "AMCX",
    title: "AMC Networks Inc.",
  },
  {
    ticker: "BIGC",
    title: "BigCommerce Holdings, Inc.",
  },
  {
    ticker: "DSL",
    title: "DoubleLine Income Solutions Fund",
  },
  {
    ticker: "NOAH",
    title: "Noah Holdings Ltd",
  },
  {
    ticker: "LOMA",
    title: "Loma Negra Compania Industrial Argentina Sociedad Anonima",
  },
  {
    ticker: "CASH",
    title: "META FINANCIAL GROUP INC",
  },
  {
    ticker: "MHO",
    title: "M/I HOMES, INC.",
  },
  {
    ticker: "XPRO",
    title: "EXPRO GROUP HOLDINGS N.V.",
  },
  {
    ticker: "DDD",
    title: "3D SYSTEMS CORP",
  },
  {
    ticker: "SSDT",
    title: "Shengshi Elevator International Holding Group Inc.",
  },
  {
    ticker: "MODV",
    title: "ModivCare Inc",
  },
  {
    ticker: "DAWN",
    title: "Day One Biopharmaceuticals, Inc.",
  },
  {
    ticker: "ALKT",
    title: "ALKAMI TECHNOLOGY, INC.",
  },
  {
    ticker: "ETG",
    title: "EATON VANCE TAX ADVANTAGED GLOBAL DIVIDEND INCOME FUND",
  },
  {
    ticker: "KURA",
    title: "Kura Oncology, Inc.",
  },
  {
    ticker: "GTY",
    title: "GETTY REALTY CORP /MD/",
  },
  {
    ticker: "VRE",
    title: "Veris Residential, Inc.",
  },
  {
    ticker: "CHCO",
    title: "CITY HOLDING CO",
  },
  {
    ticker: "SANA",
    title: "Sana Biotechnology, Inc.",
  },
  {
    ticker: "AAC",
    title: "Ares Acquisition Corp",
  },
  {
    ticker: "MAG",
    title: "MAG SILVER CORP",
  },
  {
    ticker: "BHLB",
    title: "BERKSHIRE HILLS BANCORP INC",
  },
  {
    ticker: "SBSI",
    title: "SOUTHSIDE BANCSHARES INC",
  },
  {
    ticker: "SSYS",
    title: "STRATASYS LTD.",
  },
  {
    ticker: "COMM",
    title: "CommScope Holding Company, Inc.",
  },
  {
    ticker: "DCOM",
    title: "Dime Community Bancshares, Inc. /NY/",
  },
  {
    ticker: "JACK",
    title: "JACK IN THE BOX INC",
  },
  {
    ticker: "ATAX",
    title: "AMERICA FIRST MULTIFAMILY INVESTORS, L.P.",
  },
  {
    ticker: "AGYS",
    title: "AGILYSYS INC",
  },
  {
    ticker: "UCTT",
    title: "Ultra Clean Holdings, Inc.",
  },
  {
    ticker: "EVV",
    title: "EATON VANCE LTD DURATION INCOME FUND",
  },
  {
    ticker: "COHU",
    title: "COHU INC",
  },
  {
    ticker: "MYOV",
    title: "Myovant Sciences Ltd.",
  },
  {
    ticker: "VCEL",
    title: "Vericel Corp",
  },
  {
    ticker: "OCSL",
    title: "Oaktree Specialty Lending Corp",
  },
  {
    ticker: "MNRL",
    title: "Brigham Minerals, Inc.",
  },
  {
    ticker: "NXGN",
    title: "NEXTGEN HEALTHCARE, INC.",
  },
  {
    ticker: "PRO",
    title: "PROS Holdings, Inc.",
  },
  {
    ticker: "ME",
    title: "23andMe Holding Co.",
  },
  {
    ticker: "SCS",
    title: "STEELCASE INC",
  },
  {
    ticker: "RILY",
    title: "B. Riley Financial, Inc.",
  },
  {
    ticker: "TRS",
    title: "TRIMAS CORP",
  },
  {
    ticker: "NMFC",
    title: "New Mountain Finance Corp",
  },
  {
    ticker: "CLS",
    title: "CELESTICA INC",
  },
  {
    ticker: "HIVE",
    title: "HIVE Blockchain Technologies Ltd.",
  },
  {
    ticker: "RPAY",
    title: "Repay Holdings Corp",
  },
  {
    ticker: "EGO",
    title: "ELDORADO GOLD CORP /FI",
  },
  {
    ticker: "ALEDY",
    title: "Allied Group Limited/ADR",
  },
  {
    ticker: "MGNI",
    title: "MAGNITE, INC.",
  },
  {
    ticker: "PAM",
    title: "Pampa Energy Inc.",
  },
  {
    ticker: "ADPT",
    title: "Adaptive Biotechnologies Corp",
  },
  {
    ticker: "SAND",
    title: "SANDSTORM GOLD LTD",
  },
  {
    ticker: "CDNA",
    title: "CareDx, Inc.",
  },
  {
    ticker: "GDEN",
    title: "GOLDEN ENTERTAINMENT, INC.",
  },
  {
    ticker: "CGC",
    title: "Canopy Growth Corp",
  },
  {
    ticker: "EIG",
    title: "Employers Holdings, Inc.",
  },
  {
    ticker: "LC",
    title: "LendingClub Corp",
  },
  {
    ticker: "PRIM",
    title: "Primoris Services Corp",
  },
  {
    ticker: "MIR",
    title: "Mirion Technologies, Inc.",
  },
  {
    ticker: "CSR",
    title: "CENTERSPACE",
  },
  {
    ticker: "FFWM",
    title: "First Foundation Inc.",
  },
  {
    ticker: "NBHC",
    title: "National Bank Holdings Corp",
  },
  {
    ticker: "LPI",
    title: "Laredo Petroleum, Inc.",
  },
  {
    ticker: "AVID",
    title: "AVID TECHNOLOGY, INC.",
  },
  {
    ticker: "HYT",
    title: "BLACKROCK CORPORATE HIGH YIELD FUND, INC.",
  },
  {
    ticker: "ALX",
    title: "ALEXANDERS INC",
  },
  {
    ticker: "VLRS",
    title: "Controladora Vuela Compania de Aviacion, S.A.B. de C.V.",
  },
  {
    ticker: "CMP",
    title: "COMPASS MINERALS INTERNATIONAL INC",
  },
  {
    ticker: "NMZ",
    title: "NUVEEN MUNICIPAL HIGH INCOME OPPORTUNITY FUND",
  },
  {
    ticker: "EXTR",
    title: "EXTREME NETWORKS INC",
  },
  {
    ticker: "DIN",
    title: "Dine Brands Global, Inc.",
  },
  {
    ticker: "GBX",
    title: "GREENBRIER COMPANIES INC",
  },
  {
    ticker: "OCFC",
    title: "OCEANFIRST FINANCIAL CORP",
  },
  {
    ticker: "YSG",
    title: "Yatsen Holding Ltd",
  },
  {
    ticker: "CNXN",
    title: "PC CONNECTION INC",
  },
  {
    ticker: "LMND",
    title: "Lemonade, Inc.",
  },
  {
    ticker: "PL",
    title: "Planet Labs PBC",
  },
  {
    ticker: "FFIE",
    title: "FARADAY FUTURE INTELLIGENT ELECTRIC INC.",
  },
  {
    ticker: "ZUO",
    title: "ZUORA INC",
  },
  {
    ticker: "QRTEA",
    title: "Qurate Retail, Inc.",
  },
  {
    ticker: "SHEN",
    title: "SHENANDOAH TELECOMMUNICATIONS CO/VA/",
  },
  {
    ticker: "AMWL",
    title: "American Well Corp",
  },
  {
    ticker: "TBBK",
    title: "Bancorp, Inc.",
  },
  {
    ticker: "KC",
    title: "Kingsoft Cloud Holdings Ltd",
  },
  {
    ticker: "PCVX",
    title: "Vaxcyte, Inc.",
  },
  {
    ticker: "ATRI",
    title: "ATRION CORP",
  },
  {
    ticker: "INFN",
    title: "Infinera Corp",
  },
  {
    ticker: "IHRT",
    title: "iHeartMedia, Inc.",
  },
  {
    ticker: "BHG",
    title: "Bright Health Group Inc.",
  },
  {
    ticker: "BBN",
    title: "BlackRock Taxable Municipal Bond Trust",
  },
  {
    ticker: "SRCE",
    title: "1ST SOURCE CORP",
  },
  {
    ticker: "GSM",
    title: "Ferroglobe PLC",
  },
  {
    ticker: "BFS",
    title: "SAUL CENTERS, INC.",
  },
  {
    ticker: "MFGP",
    title: "MICRO FOCUS INTERNATIONAL PLC",
  },
  {
    ticker: "HRT",
    title: "HireRight Holdings Corp",
  },
  {
    ticker: "VADP",
    title: "Vado Corp.",
  },
  {
    ticker: "VRNOF",
    title: "Verano Holdings Corp.",
  },
  {
    ticker: "LAW",
    title: "CS Disco, Inc.",
  },
  {
    ticker: "RGR",
    title: "STURM RUGER & CO INC",
  },
  {
    ticker: "LXU",
    title: "LSB INDUSTRIES, INC.",
  },
  {
    ticker: "RFP",
    title: "Resolute Forest Products Inc.",
  },
  {
    ticker: "EVOP",
    title: "EVO Payments, Inc.",
  },
  {
    ticker: "FPF",
    title: "First Trust Intermediate Duration Preferred & Income Fund",
  },
  {
    ticker: "OSTK",
    title: "OVERSTOCK.COM, INC",
  },
  {
    ticker: "CUBI",
    title: "Customers Bancorp, Inc.",
  },
  {
    ticker: "BANC",
    title: "BANC OF CALIFORNIA, INC.",
  },
  {
    ticker: "MCRI",
    title: "MONARCH CASINO & RESORT INC",
  },
  {
    ticker: "PLYA",
    title: "Playa Hotels & Resorts N.V.",
  },
  {
    ticker: "EPAC",
    title: "ENERPAC TOOL GROUP CORP",
  },
  {
    ticker: "BST",
    title: "BlackRock Science & Technology Trust",
  },
  {
    ticker: "VALN",
    title: "Valneva SE",
  },
  {
    ticker: "EVBG",
    title: "EVERBRIDGE, INC.",
  },
  {
    ticker: "NTUS",
    title: "NATUS MEDICAL INC",
  },
  {
    ticker: "NFJ",
    title: "Virtus Dividend, Interest & Premium Strategy Fund",
  },
  {
    ticker: "RXDX",
    title: "Prometheus Biosciences, Inc.",
  },
  {
    ticker: "GDYN",
    title: "GRID DYNAMICS HOLDINGS, INC.",
  },
  {
    ticker: "HTLD",
    title: "HEARTLAND EXPRESS INC",
  },
  {
    ticker: "SKYW",
    title: "SKYWEST INC",
  },
  {
    ticker: "RETA",
    title: "REATA PHARMACEUTICALS INC",
  },
  {
    ticker: "MBUU",
    title: "MALIBU BOATS, INC.",
  },
  {
    ticker: "STBA",
    title: "S&T BANCORP INC",
  },
  {
    ticker: "PLAB",
    title: "PHOTRONICS INC",
  },
  {
    ticker: "SPTN",
    title: "SpartanNash Co",
  },
  {
    ticker: "CTS",
    title: "CTS CORP",
  },
  {
    ticker: "TNC",
    title: "TENNANT CO",
  },
  {
    ticker: "BALY",
    title: "Bally's Corp",
  },
  {
    ticker: "GES",
    title: "GUESS INC",
  },
  {
    ticker: "ANDE",
    title: "Andersons, Inc.",
  },
  {
    ticker: "RGNX",
    title: "REGENXBIO Inc.",
  },
  {
    ticker: "NHC",
    title: "NATIONAL HEALTHCARE CORP",
  },
  {
    ticker: "ARQT",
    title: "Arcutis Biotherapeutics, Inc.",
  },
  {
    ticker: "MOMO",
    title: "Hello Group Inc.",
  },
  {
    ticker: "HBM",
    title: "Hudbay Minerals Inc.",
  },
  {
    ticker: "KYMR",
    title: "Kymera Therapeutics, Inc.",
  },
  {
    ticker: "PRPB",
    title: "CC Neuberger Principal Holdings II",
  },
  {
    ticker: "ERII",
    title: "Energy Recovery, Inc.",
  },
  {
    ticker: "MLAB",
    title: "MESA LABORATORIES INC /CO/",
  },
  {
    ticker: "NBR",
    title: "NABORS INDUSTRIES LTD",
  },
  {
    ticker: "OFLX",
    title: "Omega Flex, Inc.",
  },
  {
    ticker: "ROAD",
    title: "Construction Partners, Inc.",
  },
  {
    ticker: "ISEE",
    title: "IVERIC bio, Inc.",
  },
  {
    ticker: "KREF",
    title: "KKR Real Estate Finance Trust Inc.",
  },
  {
    ticker: "NYMT",
    title: "NEW YORK MORTGAGE TRUST INC",
  },
  {
    ticker: "OII",
    title: "OCEANEERING INTERNATIONAL INC",
  },
  {
    ticker: "ENVA",
    title: "Enova International, Inc.",
  },
  {
    ticker: "LZB",
    title: "LA-Z-BOY INC",
  },
  {
    ticker: "DNOW",
    title: "NOW Inc.",
  },
  {
    ticker: "TMP",
    title: "TOMPKINS FINANCIAL CORP",
  },
  {
    ticker: "HERA",
    title: "FTAC Hera Acquisition Corp.",
  },
  {
    ticker: "LICY",
    title: "Li-Cycle Holdings Corp.",
  },
  {
    ticker: "CLOV",
    title: "CLOVER HEALTH INVESTMENTS, CORP. /DE",
  },
  {
    ticker: "CRON",
    title: "Cronos Group Inc.",
  },
  {
    ticker: "TRMD",
    title: "TORM plc",
  },
  {
    ticker: "SAVA",
    title: "CASSAVA SCIENCES INC",
  },
  {
    ticker: "KYN",
    title: "Kayne Anderson Energy Infrastructure Fund, Inc.",
  },
  {
    ticker: "CLDX",
    title: "Celldex Therapeutics, Inc.",
  },
  {
    ticker: "CPUH",
    title: "Compute Health Acquisition Corp.",
  },
  {
    ticker: "FGEN",
    title: "FIBROGEN INC",
  },
  {
    ticker: "SNCY",
    title: "Sun Country Airlines Holdings, Inc.",
  },
  {
    ticker: "PGTI",
    title: "PGT Innovations, Inc.",
  },
  {
    ticker: "SSP",
    title: "E.W. SCRIPPS Co",
  },
  {
    ticker: "AGM",
    title: "FEDERAL AGRICULTURAL MORTGAGE CORP",
  },
  {
    ticker: "KBSR",
    title: "KBS Real Estate Investment Trust III, Inc.",
  },
  {
    ticker: "HEES",
    title: "H&E Equipment Services, Inc.",
  },
  {
    ticker: "PTA",
    title: "Cohen & Steers Tax-Advantaged Preferred Securities & Income Fund",
  },
  {
    ticker: "INSW",
    title: "International Seaways, Inc.",
  },
  {
    ticker: "BRKL",
    title: "BROOKLINE BANCORP INC",
  },
  {
    ticker: "HSKA",
    title: "HESKA CORP",
  },
  {
    ticker: "WISH",
    title: "ContextLogic Inc.",
  },
  {
    ticker: "SBOEY",
    title: "Schoeller-Bleckmann Oilfield Equipment AG/ADR",
  },
  {
    ticker: "ACEL",
    title: "Accel Entertainment, Inc.",
  },
  {
    ticker: "CAMT",
    title: "CAMTEK LTD",
  },
  {
    ticker: "UAN",
    title: "CVR PARTNERS, LP",
  },
  {
    ticker: "ATEN",
    title: "A10 Networks, Inc.",
  },
  {
    ticker: "LPSN",
    title: "LIVEPERSON INC",
  },
  {
    ticker: "GRBK",
    title: "Green Brick Partners, Inc.",
  },
  {
    ticker: "ZH",
    title: "Zhihu Inc.",
  },
  {
    ticker: "AMTB",
    title: "Amerant Bancorp Inc.",
  },
  {
    ticker: "KRP",
    title: "Kimbell Royalty Partners, LP",
  },
  {
    ticker: "PUMP",
    title: "ProPetro Holding Corp.",
  },
  {
    ticker: "SXI",
    title: "STANDEX INTERNATIONAL CORP/DE/",
  },
  {
    ticker: "AIV",
    title: "APARTMENT INVESTMENT & MANAGEMENT CO",
  },
  {
    ticker: "INVA",
    title: "Innoviva, Inc.",
  },
  {
    ticker: "RNP",
    title: "COHEN & STEERS REIT & PREFERRED & INCOME FUND INC",
  },
  {
    ticker: "STEM",
    title: "STEM, INC.",
  },
  {
    ticker: "DFH",
    title: "Dream Finders Homes, Inc.",
  },
  {
    ticker: "CLM",
    title: "CORNERSTONE STRATEGIC VALUE FUND INC",
  },
  {
    ticker: "ASTL",
    title: "Algoma Steel Group Inc.",
  },
  {
    ticker: "NEO",
    title: "NEOGENOMICS INC",
  },
  {
    ticker: "AVO",
    title: "Mission Produce, Inc.",
  },
  {
    ticker: "VMEO",
    title: "Vimeo, Inc.",
  },
  {
    ticker: "SNDX",
    title: "Syndax Pharmaceuticals Inc",
  },
  {
    ticker: "RVNC",
    title: "Revance Therapeutics, Inc.",
  },
  {
    ticker: "CRHC",
    title: "Cohn Robbins Holdings Corp.",
  },
  {
    ticker: "CMPR",
    title: "CIMPRESS plc",
  },
  {
    ticker: "GEL",
    title: "GENESIS ENERGY LP",
  },
  {
    ticker: "EAT",
    title: "BRINKER INTERNATIONAL, INC",
  },
  {
    ticker: "ARKO",
    title: "ARKO Corp.",
  },
  {
    ticker: "PAR",
    title: "PAR TECHNOLOGY CORP",
  },
  {
    ticker: "BTZ",
    title: "BLACKROCK CREDIT ALLOCATION INCOME TRUST",
  },
  {
    ticker: "AMSF",
    title: "AMERISAFE INC",
  },
  {
    ticker: "AZZ",
    title: "AZZ INC",
  },
  {
    ticker: "CLNE",
    title: "Clean Energy Fuels Corp.",
  },
  {
    ticker: "IMGN",
    title: "ImmunoGen, Inc.",
  },
  {
    ticker: "DHT",
    title: "DHT Holdings, Inc.",
  },
  {
    ticker: "LMAT",
    title: "LEMAITRE VASCULAR INC",
  },
  {
    ticker: "PFBC",
    title: "Preferred Bank",
  },
  {
    ticker: "CRNC",
    title: "Cerence Inc.",
  },
  {
    ticker: "PTRA",
    title: "Proterra Inc",
  },
  {
    ticker: "ACVA",
    title: "ACV Auctions Inc.",
  },
  {
    ticker: "SA",
    title: "SEABRIDGE GOLD INC",
  },
  {
    ticker: "ENTA",
    title: "ENANTA PHARMACEUTICALS INC",
  },
  {
    ticker: "IRBT",
    title: "IROBOT CORP",
  },
  {
    ticker: "SMP",
    title: "STANDARD MOTOR PRODUCTS, INC.",
  },
  {
    ticker: "APOG",
    title: "APOGEE ENTERPRISES, INC.",
  },
  {
    ticker: "BRSP",
    title: "BrightSpire Capital, Inc.",
  },
  {
    ticker: "SLP",
    title: "Simulations Plus, Inc.",
  },
  {
    ticker: "ARHS",
    title: "Arhaus, Inc.",
  },
  {
    ticker: "MNKD",
    title: "MANNKIND CORP",
  },
  {
    ticker: "RDWR",
    title: "RADWARE LTD",
  },
  {
    ticker: "NGM",
    title: "NGM BIOPHARMACEUTICALS INC",
  },
  {
    ticker: "IMAX",
    title: "IMAX CORP",
  },
  {
    ticker: "EB",
    title: "Eventbrite, Inc.",
  },
  {
    ticker: "CNOB",
    title: "ConnectOne Bancorp, Inc.",
  },
  {
    ticker: "MEG",
    title: "Montrose Environmental Group, Inc.",
  },
  {
    ticker: "DFIN",
    title: "Donnelley Financial Solutions, Inc.",
  },
  {
    ticker: "NRC",
    title: "NATIONAL RESEARCH CORP",
  },
  {
    ticker: "OPI",
    title: "OFFICE PROPERTIES INCOME TRUST",
  },
  {
    ticker: "APGT",
    title: "Appgate, Inc.",
  },
  {
    ticker: "RBCAA",
    title: "REPUBLIC BANCORP INC /KY/",
  },
  {
    ticker: "ARVL",
    title: "Arrival",
  },
  {
    ticker: "PACB",
    title: "PACIFIC BIOSCIENCES OF CALIFORNIA, INC.",
  },
  {
    ticker: "CLBT",
    title: "Cellebrite DI Ltd.",
  },
  {
    ticker: "CWH",
    title: "Camping World Holdings, Inc.",
  },
  {
    ticker: "CAL",
    title: "CALERES INC",
  },
  {
    ticker: "HIMS",
    title: "Hims & Hers Health, Inc.",
  },
  {
    ticker: "SPH",
    title: "SUBURBAN PROPANE PARTNERS LP",
  },
  {
    ticker: "PARR",
    title: "PAR PACIFIC HOLDINGS, INC.",
  },
  {
    ticker: "BRBR",
    title: "BELLRING BRANDS, INC.",
  },
  {
    ticker: "PBFX",
    title: "PBF Logistics LP",
  },
  {
    ticker: "UTL",
    title: "UNITIL CORP",
  },
  {
    ticker: "GIII",
    title: "G III APPAREL GROUP LTD /DE/",
  },
  {
    ticker: "HUYA",
    title: "HUYA Inc.",
  },
  {
    ticker: "STAR",
    title: "ISTAR INC.",
  },
  {
    ticker: "ANF",
    title: "ABERCROMBIE & FITCH CO /DE/",
  },
  {
    ticker: "AUS",
    title: "Austerlitz Acquisition Corp I",
  },
  {
    ticker: "NRK",
    title: "NUVEEN NEW YORK AMT-FREE QUALITY MUNICIPAL INCOME FUND",
  },
  {
    ticker: "BLU",
    title: "BELLUS Health Inc.",
  },
  {
    ticker: "QQQX",
    title: "Nuveen NASDAQ 100 Dynamic Overwrite Fund",
  },
  {
    ticker: "PROC",
    title: "Procaps Group, S.A.",
  },
  {
    ticker: "PFC",
    title: "PREMIER FINANCIAL CORP",
  },
  {
    ticker: "OSCR",
    title: "Oscar Health, Inc.",
  },
  {
    ticker: "KDNY",
    title: "CHINOOK THERAPEUTICS, INC.",
  },
  {
    ticker: "OEC",
    title: "Orion Engineered Carbons S.A.",
  },
  {
    ticker: "MRUS",
    title: "Merus N.V.",
  },
  {
    ticker: "ZUUS",
    title: "ZEUUS, INC.",
  },
  {
    ticker: "DLX",
    title: "DELUXE CORP",
  },
  {
    ticker: "HESM",
    title: "Hess Midstream LP",
  },
  {
    ticker: "RDNT",
    title: "RadNet, Inc.",
  },
  {
    ticker: "AMPS",
    title: "Altus Power, Inc.",
  },
  {
    ticker: "FNKO",
    title: "Funko, Inc.",
  },
  {
    ticker: "RDFN",
    title: "Redfin Corp",
  },
  {
    ticker: "ASTE",
    title: "ASTEC INDUSTRIES INC",
  },
  {
    ticker: "MQY",
    title: "BLACKROCK MUNIYIELD QUALITY FUND, INC.",
  },
  {
    ticker: "CDMO",
    title: "Avid Bioservices, Inc.",
  },
  {
    ticker: "CERS",
    title: "CERUS CORP",
  },
  {
    ticker: "PRG",
    title: "PROG Holdings, Inc.",
  },
  {
    ticker: "BCHPY",
    title: "Brainchip Holdings Limited/ADR",
  },
  {
    ticker: "AGRO",
    title: "Adecoagro S.A.",
  },
  {
    ticker: "MGI",
    title: "MONEYGRAM INTERNATIONAL INC",
  },
  {
    ticker: "JRVR",
    title: "James River Group Holdings, Ltd.",
  },
  {
    ticker: "SIGA",
    title: "SIGA TECHNOLOGIES INC",
  },
  {
    ticker: "DBI",
    title: "Designer Brands Inc.",
  },
  {
    ticker: "SILV",
    title: "SilverCrest Metals Inc.",
  },
  {
    ticker: "DCBO",
    title: "Docebo Inc.",
  },
  {
    ticker: "GB",
    title: "Global Blue Group Holding AG",
  },
  {
    ticker: "OBNK",
    title: "Origin Bancorp, Inc.",
  },
  {
    ticker: "RCKT",
    title: "ROCKET PHARMACEUTICALS, INC.",
  },
  {
    ticker: "ASIX",
    title: "AdvanSix Inc.",
  },
  {
    ticker: "ILPT",
    title: "Industrial Logistics Properties Trust",
  },
  {
    ticker: "CET",
    title: "CENTRAL SECURITIES CORP",
  },
  {
    ticker: "MODN",
    title: "MODEL N, INC.",
  },
  {
    ticker: "TWOU",
    title: "2U, Inc.",
  },
  {
    ticker: "SLDP",
    title: "Solid Power, Inc.",
  },
  {
    ticker: "AFYA",
    title: "Afya Ltd",
  },
  {
    ticker: "RA",
    title: "Brookfield Real Assets Income Fund Inc.",
  },
  {
    ticker: "SCWX",
    title: "SecureWorks Corp",
  },
  {
    ticker: "SBR",
    title: "SABINE ROYALTY TRUST",
  },
  {
    ticker: "CLB",
    title: "CORE LABORATORIES N V",
  },
  {
    ticker: "BCOR",
    title: "BLUCORA, INC.",
  },
  {
    ticker: "DOMO",
    title: "DOMO, INC.",
  },
  {
    ticker: "HOLI",
    title: "Hollysys Automation Technologies, Ltd.",
  },
  {
    ticker: "VECO",
    title: "VEECO INSTRUMENTS INC",
  },
  {
    ticker: "CNDT",
    title: "CONDUENT Inc",
  },
  {
    ticker: "FORR",
    title: "FORRESTER RESEARCH, INC.",
  },
  {
    ticker: "MYTAY",
    title: "Magyar Telekom Plc.",
  },
  {
    ticker: "HFWA",
    title: "HERITAGE FINANCIAL CORP /WA/",
  },
  {
    ticker: "SPLP",
    title: "STEEL PARTNERS HOLDINGS L.P.",
  },
  {
    ticker: "CHCT",
    title: "Community Healthcare Trust Inc",
  },
  {
    ticker: "BY",
    title: "BYLINE BANCORP, INC.",
  },
  {
    ticker: "RC",
    title: "Ready Capital Corp",
  },
  {
    ticker: "BRMK",
    title: "Broadmark Realty Capital Inc.",
  },
  {
    ticker: "RWT",
    title: "REDWOOD TRUST INC",
  },
  {
    ticker: "ETW",
    title: "Eaton Vance Tax-Managed Global Buy-Write Opportunities Fund",
  },
  {
    ticker: "DMLP",
    title: "DORCHESTER MINERALS, L.P.",
  },
  {
    ticker: "MATW",
    title: "MATTHEWS INTERNATIONAL CORP",
  },
  {
    ticker: "DWAC",
    title: "Digital World Acquisition Corp.",
  },
  {
    ticker: "SCHN",
    title: "SCHNITZER STEEL INDUSTRIES, INC.",
  },
  {
    ticker: "SPNT",
    title: "SiriusPoint Ltd",
  },
  {
    ticker: "BCSF",
    title: "Bain Capital Specialty Finance, Inc.",
  },
  {
    ticker: "IMAB",
    title: "I-Mab",
  },
  {
    ticker: "STKL",
    title: "SunOpta Inc.",
  },
  {
    ticker: "VERU",
    title: "VERU INC.",
  },
  {
    ticker: "ALEC",
    title: "Alector, Inc.",
  },
  {
    ticker: "CCSI",
    title: "Consensus Cloud Solutions, Inc.",
  },
  {
    ticker: "CRNX",
    title: "Crinetics Pharmaceuticals, Inc.",
  },
  {
    ticker: "DRQ",
    title: "DRIL-QUIP INC",
  },
  {
    ticker: "INTA",
    title: "Intapp, Inc.",
  },
  {
    ticker: "UMH",
    title: "UMH PROPERTIES, INC.",
  },
  {
    ticker: "MTL",
    title: "Mechel PAO",
  },
  {
    ticker: "SVC",
    title: "Service Properties Trust",
  },
  {
    ticker: "CAAP",
    title: "CORPORACION AMERICA AIRPORTS S.A.",
  },
  {
    ticker: "TMDX",
    title: "TransMedics Group, Inc.",
  },
  {
    ticker: "QURE",
    title: "uniQure N.V.",
  },
  {
    ticker: "ADTN",
    title: "ADTRAN INC",
  },
  {
    ticker: "UEC",
    title: "URANIUM ENERGY CORP",
  },
  {
    ticker: "TWI",
    title: "TITAN INTERNATIONAL INC",
  },
  {
    ticker: "HLIT",
    title: "HARMONIC INC",
  },
  {
    ticker: "MGIC",
    title: "MAGIC SOFTWARE ENTERPRISES LTD",
  },
  {
    ticker: "GOF",
    title: "GUGGENHEIM STRATEGIC OPPORTUNITIES FUND",
  },
  {
    ticker: "KAMN",
    title: "KAMAN Corp",
  },
  {
    ticker: "FWRG",
    title: "First Watch Restaurant Group, Inc.",
  },
  {
    ticker: "MERC",
    title: "MERCER INTERNATIONAL INC.",
  },
  {
    ticker: "MTTR",
    title: "Matterport, Inc./DE",
  },
  {
    ticker: "BRFH",
    title: "BARFRESH FOOD GROUP INC.",
  },
  {
    ticker: "PCT",
    title: "PureCycle Technologies, Inc.",
  },
  {
    ticker: "FREY",
    title: "FREYR Battery",
  },
  {
    ticker: "VNET",
    title: "VNET Group, Inc.",
  },
  {
    ticker: "WLKP",
    title: "Westlake Chemical Partners LP",
  },
  {
    ticker: "PAYA",
    title: "Paya Holdings Inc.",
  },
  {
    ticker: "SII",
    title: "SPROTT INC.",
  },
  {
    ticker: "EFC",
    title: "Ellington Financial Inc.",
  },
  {
    ticker: "GPRO",
    title: "GoPro, Inc.",
  },
  {
    ticker: "IMOS",
    title: "CHIPMOS TECHNOLOGIES INC",
  },
  {
    ticker: "HQH",
    title: "TEKLA HEALTHCARE INVESTORS",
  },
  {
    ticker: "TDW",
    title: "TIDEWATER INC",
  },
  {
    ticker: "GAM",
    title: "GENERAL AMERICAN INVESTORS CO INC",
  },
  {
    ticker: "CLFD",
    title: "Clearfield, Inc.",
  },
  {
    ticker: "WKME",
    title: "WalkMe Ltd.",
  },
  {
    ticker: "TGI",
    title: "TRIUMPH GROUP INC",
  },
  {
    ticker: "REPL",
    title: "Replimune Group, Inc.",
  },
  {
    ticker: "EDIT",
    title: "Editas Medicine, Inc.",
  },
  {
    ticker: "UFCS",
    title: "UNITED FIRE GROUP INC",
  },
  {
    ticker: "AOD",
    title: "ABERDEEN TOTAL DYNAMIC DIVIDEND FUND",
  },
  {
    ticker: "SUMO",
    title: "Sumo Logic, Inc.",
  },
  {
    ticker: "NVGS",
    title: "Navigator Holdings Ltd.",
  },
  {
    ticker: "ARCE",
    title: "Arco Platform Ltd.",
  },
  {
    ticker: "QCRH",
    title: "QCR HOLDINGS INC",
  },
  {
    ticker: "FSM",
    title: "FORTUNA SILVER MINES INC",
  },
  {
    ticker: "IGR",
    title: "CBRE GLOBAL REAL ESTATE INCOME FUND",
  },
  {
    ticker: "WASH",
    title: "WASHINGTON TRUST BANCORP INC",
  },
  {
    ticker: "TMST",
    title: "TimkenSteel Corp",
  },
  {
    ticker: "SWIR",
    title: "SIERRA WIRELESS INC",
  },
  {
    ticker: "GLDD",
    title: "Great Lakes Dredge & Dock CORP",
  },
  {
    ticker: "AXL",
    title: "AMERICAN AXLE & MANUFACTURING HOLDINGS INC",
  },
  {
    ticker: "PNTM",
    title: "Pontem Corp",
  },
  {
    ticker: "ACRS",
    title: "Aclaris Therapeutics, Inc.",
  },
  {
    ticker: "PDS",
    title: "PRECISION DRILLING Corp",
  },
  {
    ticker: "PRDO",
    title: "PERDOCEO EDUCATION Corp",
  },
  {
    ticker: "AWF",
    title: "ALLIANCEBERNSTEIN GLOBAL HIGH INCOME FUND INC",
  },
  {
    ticker: "IONQ",
    title: "IonQ, Inc.",
  },
  {
    ticker: "KIDS",
    title: "ORTHOPEDIATRICS CORP",
  },
  {
    ticker: "VREX",
    title: "Varex Imaging Corp",
  },
  {
    ticker: "JBSS",
    title: "SANFILIPPO JOHN B & SON INC",
  },
  {
    ticker: "KRNY",
    title: "Kearny Financial Corp.",
  },
  {
    ticker: "APGB",
    title: "Apollo Strategic Growth Capital II",
  },
  {
    ticker: "LGV",
    title: "Longview Acquisition Corp. II",
  },
  {
    ticker: "ZETA",
    title: "Zeta Global Holdings Corp.",
  },
  {
    ticker: "DOLE",
    title: "Dole plc",
  },
  {
    ticker: "IMXI",
    title: "International Money Express, Inc.",
  },
  {
    ticker: "THQ",
    title: "Tekla Healthcare Opportunities Fund",
  },
  {
    ticker: "BKD",
    title: "Brookdale Senior Living Inc.",
  },
  {
    ticker: "SLCA",
    title: "U.S. SILICA HOLDINGS, INC.",
  },
  {
    ticker: "DNN",
    title: "DENISON MINES CORP.",
  },
  {
    ticker: "EOS",
    title: "Eaton Vance Enhanced Equity Income Fund II",
  },
  {
    ticker: "BZUN",
    title: "Baozun Inc.",
  },
  {
    ticker: "SMRT",
    title: "SmartRent, Inc.",
  },
  {
    ticker: "CBD",
    title: "BRAZILIAN DISTRIBUTION CO COMPANHIA BRASILEIRA DE DISTR CBD",
  },
  {
    ticker: "TGLS",
    title: "Tecnoglass Inc.",
  },
  {
    ticker: "UIS",
    title: "UNISYS CORP",
  },
  {
    ticker: "NPTN",
    title: "NEOPHOTONICS CORP",
  },
  {
    ticker: "RPT",
    title: "RPT Realty",
  },
  {
    ticker: "CANO",
    title: "Cano Health, Inc.",
  },
  {
    ticker: "CHY",
    title: "CALAMOS CONVERTIBLE & HIGH INCOME FUND",
  },
  {
    ticker: "RYI",
    title: "Ryerson Holding Corp",
  },
  {
    ticker: "MRC",
    title: "MRC GLOBAL INC.",
  },
  {
    ticker: "HTD",
    title: "JOHN HANCOCK TAX-ADVANTAGED DIVIDEND INCOME FUND",
  },
  {
    ticker: "BTRS",
    title: "BTRS Holdings Inc.",
  },
  {
    ticker: "BROG",
    title: "Brooge Energy Ltd",
  },
  {
    ticker: "DGII",
    title: "DIGI INTERNATIONAL INC",
  },
  {
    ticker: "GEO",
    title: "GEO GROUP INC",
  },
  {
    ticker: "MYE",
    title: "MYERS INDUSTRIES INC",
  },
  {
    ticker: "MORF",
    title: "Morphic Holding, Inc.",
  },
  {
    ticker: "CMCO",
    title: "COLUMBUS MCKINNON CORP",
  },
  {
    ticker: "MYTE",
    title: "MYT Netherlands Parent B.V.",
  },
  {
    ticker: "SWIM",
    title: "Latham Group, Inc.",
  },
  {
    ticker: "SLGC",
    title: "SomaLogic, Inc.",
  },
  {
    ticker: "POSH",
    title: "Poshmark, Inc.",
  },
  {
    ticker: "HZO",
    title: "MARINEMAX INC",
  },
  {
    ticker: "ALPC",
    title: "Alpha Investment Inc.",
  },
  {
    ticker: "CCRN",
    title: "CROSS COUNTRY HEALTHCARE INC",
  },
  {
    ticker: "CNSL",
    title: "Consolidated Communications Holdings, Inc.",
  },
  {
    ticker: "AC",
    title: "Associated Capital Group, Inc.",
  },
  {
    ticker: "PUBM",
    title: "PubMatic, Inc.",
  },
  {
    ticker: "NEXA",
    title: "Nexa Resources S.A.",
  },
  {
    ticker: "BSIG",
    title: "BrightSphere Investment Group Inc.",
  },
  {
    ticker: "LEV",
    title: "Lion Electric Co",
  },
  {
    ticker: "AZUL",
    title: "AZUL SA",
  },
  {
    ticker: "CLMT",
    title: "Calumet Specialty Products Partners, L.P.",
  },
  {
    ticker: "AHH",
    title: "Armada Hoffler Properties, Inc.",
  },
  {
    ticker: "HCAT",
    title: "Health Catalyst, Inc.",
  },
  {
    ticker: "UUUU",
    title: "ENERGY FUELS INC",
  },
  {
    ticker: "GLP",
    title: "GLOBAL PARTNERS LP",
  },
  {
    ticker: "HFRO",
    title: "HIGHLAND INCOME FUND\\MA",
  },
  {
    ticker: "MYI",
    title: "BLACKROCK MUNIYIELD QUALITY FUND III, INC.",
  },
  {
    ticker: "PERI",
    title: "Perion Network Ltd.",
  },
  {
    ticker: "SCSC",
    title: "SCANSOURCE, INC.",
  },
  {
    ticker: "TNXP",
    title: "Tonix Pharmaceuticals Holding Corp.",
  },
  {
    ticker: "JPC",
    title: "Nuveen Preferred & Income Opportunities Fund",
  },
  {
    ticker: "UBP",
    title: "URSTADT BIDDLE PROPERTIES INC",
  },
  {
    ticker: "PBT",
    title: "PERMIAN BASIN ROYALTY TRUST",
  },
  {
    ticker: "NNDM",
    title: "Nano Dimension Ltd.",
  },
  {
    ticker: "CHI",
    title: "CALAMOS CONVERTIBLE OPPORTUNITIES & INCOME FUND",
  },
  {
    ticker: "FVIV",
    title: "Fortress Value Acquisition Corp. IV",
  },
  {
    ticker: "AOSL",
    title: "ALPHA & OMEGA SEMICONDUCTOR Ltd",
  },
  {
    ticker: "MTLS",
    title: "MATERIALISE NV",
  },
  {
    ticker: "PAHC",
    title: "PHIBRO ANIMAL HEALTH CORP",
  },
  {
    ticker: "BCX",
    title: "BlackRock Resources & Commodities Strategy Trust",
  },
  {
    ticker: "GSBC",
    title: "GREAT SOUTHERN BANCORP, INC.",
  },
  {
    ticker: "VEON",
    title: "VEON Ltd.",
  },
  {
    ticker: "CDE",
    title: "Coeur Mining, Inc.",
  },
  {
    ticker: "ABTX",
    title: "Allegiance Bancshares, Inc.",
  },
  {
    ticker: "CDXS",
    title: "CODEXIS, INC.",
  },
  {
    ticker: "TGS",
    title: "GAS TRANSPORTER OF THE SOUTH INC",
  },
  {
    ticker: "CII",
    title: "BLACKROCK ENHANCED CAPITAL & INCOME FUND, INC.",
  },
  {
    ticker: "SWM",
    title: "SCHWEITZER MAUDUIT INTERNATIONAL INC",
  },
  {
    ticker: "DSGN",
    title: "Design Therapeutics, Inc.",
  },
  {
    ticker: "PHVS",
    title: "Pharvaris N.V.",
  },
  {
    ticker: "AVXL",
    title: "ANAVEX LIFE SCIENCES CORP.",
  },
  {
    ticker: "AMWD",
    title: "AMERICAN WOODMARK CORP",
  },
  {
    ticker: "TMCI",
    title: "TREACE MEDICAL CONCEPTS, INC.",
  },
  {
    ticker: "CAPL",
    title: "CrossAmerica Partners LP",
  },
  {
    ticker: "WRLD",
    title: "WORLD ACCEPTANCE CORP",
  },
  {
    ticker: "AVPT",
    title: "AvePoint, Inc.",
  },
  {
    ticker: "BHE",
    title: "BENCHMARK ELECTRONICS INC",
  },
  {
    ticker: "HBNC",
    title: "HORIZON BANCORP INC /IN/",
  },
  {
    ticker: "IAG",
    title: "IAMGOLD CORP",
  },
  {
    ticker: "NX",
    title: "Quanex Building Products CORP",
  },
  {
    ticker: "EIM",
    title: "EATON VANCE MUNICIPAL BOND FUND",
  },
  {
    ticker: "DCPH",
    title: "Deciphera Pharmaceuticals, Inc.",
  },
  {
    ticker: "NFGC",
    title: "New Found Gold Corp.",
  },
  {
    ticker: "PDFS",
    title: "PDF SOLUTIONS INC",
  },
  {
    ticker: "THRY",
    title: "Thryv Holdings, Inc.",
  },
  {
    ticker: "NUVB",
    title: "Nuvation Bio Inc.",
  },
  {
    ticker: "PEBO",
    title: "PEOPLES BANCORP INC",
  },
  {
    ticker: "KELYA",
    title: "KELLY SERVICES INC",
  },
  {
    ticker: "ATNI",
    title: "ATN International, Inc.",
  },
  {
    ticker: "INN",
    title: "Summit Hotel Properties, Inc.",
  },
  {
    ticker: "FFC",
    title: "Flaherty & Crumrine PREFERRED & INCOME SECURITIES FUND INC",
  },
  {
    ticker: "UVSP",
    title: "UNIVEST FINANCIAL Corp",
  },
  {
    ticker: "LAND",
    title: "GLADSTONE LAND Corp",
  },
  {
    ticker: "MCB",
    title: "Metropolitan Bank Holding Corp.",
  },
  {
    ticker: "ALP-PQ",
    title: "ALABAMA POWER CO",
  },
  {
    ticker: "ETAC",
    title: "E.Merge Technology Acquisition Corp.",
  },
  {
    ticker: "CNVY",
    title: "Convey Health Solutions Holdings, Inc.",
  },
  {
    ticker: "TIGR",
    title: "UP Fintech Holding Ltd",
  },
  {
    ticker: "HHR",
    title: "HeadHunter Group PLC",
  },
  {
    ticker: "LBAI",
    title: "LAKELAND BANCORP INC",
  },
  {
    ticker: "HWKN",
    title: "HAWKINS INC",
  },
  {
    ticker: "GNK",
    title: "GENCO SHIPPING & TRADING LTD",
  },
  {
    ticker: "ERO",
    title: "Ero Copper Corp.",
  },
  {
    ticker: "WTTR",
    title: "Select Energy Services, Inc.",
  },
  {
    ticker: "API",
    title: "Agora, Inc.",
  },
  {
    ticker: "NGD",
    title: "New Gold Inc. /FI",
  },
  {
    ticker: "CCF",
    title: "CHASE CORP",
  },
  {
    ticker: "ANGO",
    title: "ANGIODYNAMICS INC",
  },
  {
    ticker: "CEVA",
    title: "CEVA INC",
  },
  {
    ticker: "GPRK",
    title: "GeoPark Ltd",
  },
  {
    ticker: "VERV",
    title: "Verve Therapeutics, Inc.",
  },
  {
    ticker: "NTST",
    title: "NETSTREIT Corp.",
  },
  {
    ticker: "ATEX",
    title: "Anterix Inc.",
  },
  {
    ticker: "BOAC",
    title: "Bluescape Opportunities Acquisition Corp.",
  },
  {
    ticker: "BKUH",
    title: "Bakhu Holdings, Corp.",
  },
  {
    ticker: "NWLI",
    title: "National Western Life Group, Inc.",
  },
  {
    ticker: "CDLX",
    title: "Cardlytics, Inc.",
  },
  {
    ticker: "HA",
    title: "HAWAIIAN HOLDINGS INC",
  },
  {
    ticker: "HONE",
    title: "HarborOne Bancorp, Inc.",
  },
  {
    ticker: "TILE",
    title: "INTERFACE INC",
  },
  {
    ticker: "NSSC",
    title: "NAPCO SECURITY TECHNOLOGIES, INC",
  },
  {
    ticker: "NLST",
    title: "NETLIST INC",
  },
  {
    ticker: "ATRA",
    title: "Atara Biotherapeutics, Inc.",
  },
  {
    ticker: "UHT",
    title: "UNIVERSAL HEALTH REALTY INCOME TRUST",
  },
  {
    ticker: "RSKD",
    title: "Riskified Ltd.",
  },
  {
    ticker: "WETF",
    title: "WisdomTree Investments, Inc.",
  },
  {
    ticker: "SVFA",
    title: "SVF Investment Corp.",
  },
  {
    ticker: "GRC",
    title: "GORMAN RUPP CO",
  },
  {
    ticker: "AVAN",
    title: "Avanti Acquisition Corp.",
  },
  {
    ticker: "CVGW",
    title: "CALAVO GROWERS INC",
  },
  {
    ticker: "BMA",
    title: "Macro Bank Inc.",
  },
  {
    ticker: "TCPC",
    title: "BlackRock TCP Capital Corp.",
  },
  {
    ticker: "EOCW",
    title: "Elliott Opportunity II Corp.",
  },
  {
    ticker: "CTBI",
    title: "COMMUNITY TRUST BANCORP INC /KY/",
  },
  {
    ticker: "ARQQ",
    title: "Arqit Quantum Inc.",
  },
  {
    ticker: "BTWN",
    title: "Bridgetown Holdings Ltd",
  },
  {
    ticker: "SGLA",
    title: "Sino Green Land Corp.",
  },
  {
    ticker: "OM",
    title: "Outset Medical, Inc.",
  },
  {
    ticker: "GMRE",
    title: "Global Medical REIT Inc.",
  },
  {
    ticker: "ITOS",
    title: "iTeos Therapeutics, Inc.",
  },
  {
    ticker: "HIII",
    title: "Hudson Executive Investment Corp. III",
  },
  {
    ticker: "AUDC",
    title: "AUDIOCODES LTD",
  },
  {
    ticker: "SP",
    title: "SP Plus Corp",
  },
  {
    ticker: "VVNT",
    title: "Vivint Smart Home, Inc.",
  },
  {
    ticker: "FMCB",
    title: "FARMERS & MERCHANTS BANCORP",
  },
  {
    ticker: "ULH",
    title: "UNIVERSAL LOGISTICS HOLDINGS, INC.",
  },
  {
    ticker: "HMST",
    title: "HomeStreet, Inc.",
  },
  {
    ticker: "HYZN",
    title: "Hyzon Motors Inc.",
  },
  {
    ticker: "BASE",
    title: "Couchbase, Inc.",
  },
  {
    ticker: "TRTX",
    title: "TPG RE Finance Trust, Inc.",
  },
  {
    ticker: "USER",
    title: "UserTesting, Inc.",
  },
  {
    ticker: "CPRX",
    title: "CATALYST PHARMACEUTICALS, INC.",
  },
  {
    ticker: "DCGO",
    title: "DocGo Inc.",
  },
  {
    ticker: "RNA",
    title: "Avidity Biosciences, Inc.",
  },
  {
    ticker: "NPACY",
    title: "Quadient S.A./ADR",
  },
  {
    ticker: "GCO",
    title: "GENESCO INC",
  },
  {
    ticker: "ESTE",
    title: "EARTHSTONE ENERGY INC",
  },
  {
    ticker: "BRG",
    title: "Bluerock Residential Growth REIT, Inc.",
  },
  {
    ticker: "OCFT",
    title: "ONECONNECT FINANCIAL TECHNOLOGY CO., LTD.",
  },
  {
    ticker: "GOAC",
    title: "GO Acquisition Corp.",
  },
  {
    ticker: "SNPO",
    title: "Snap One Holdings Corp.",
  },
  {
    ticker: "TBPH",
    title: "Theravance Biopharma, Inc.",
  },
  {
    ticker: "RBAC",
    title: "RedBall Acquisition Corp.",
  },
  {
    ticker: "CLAR",
    title: "Clarus Corp",
  },
  {
    ticker: "RENN",
    title: "Renren Inc.",
  },
  {
    ticker: "MOV",
    title: "MOVADO GROUP INC",
  },
  {
    ticker: "SCOA",
    title: "ScION Tech Growth I",
  },
  {
    ticker: "AINV",
    title: "APOLLO INVESTMENT CORP",
  },
  {
    ticker: "INDI",
    title: "indie Semiconductor, Inc.",
  },
  {
    ticker: "VYGG",
    title: "Vy Global Growth",
  },
  {
    ticker: "ORGN",
    title: "Origin Materials, Inc.",
  },
  {
    ticker: "BTO",
    title: "JOHN HANCOCK FINANCIAL OPPORTUNITIES FUND",
  },
  {
    ticker: "HCI",
    title: "HCI Group, Inc.",
  },
  {
    ticker: "JQC",
    title: "Nuveen Credit Strategies Income Fund",
  },
  {
    ticker: "LMACA",
    title: "Liberty Media Acquisition Corp",
  },
  {
    ticker: "SLAM",
    title: "Slam Corp.",
  },
  {
    ticker: "FAX",
    title: "ABERDEEN ASIA-PACIFIC INCOME FUND INC",
  },
  {
    ticker: "WINA",
    title: "WINMARK CORP",
  },
  {
    ticker: "GOOD",
    title: "GLADSTONE COMMERCIAL CORP",
  },
  {
    ticker: "LGAC",
    title: "Lazard Growth Acquisition Corp. I",
  },
  {
    ticker: "ERAS",
    title: "Erasca, Inc.",
  },
  {
    ticker: "SNBR",
    title: "Sleep Number Corp",
  },
  {
    ticker: "LWLG",
    title: "Lightwave Logic, Inc.",
  },
  {
    ticker: "CRLBF",
    title: "Cresco Labs Inc.",
  },
  {
    ticker: "FOR",
    title: "Forestar Group Inc.",
  },
  {
    ticker: "MSDA",
    title: "MSD ACQUISITION CORP. / NEW",
  },
  {
    ticker: "PMVP",
    title: "PMV Pharmaceuticals, Inc.",
  },
  {
    ticker: "BIOL",
    title: "BIOLASE, INC",
  },
  {
    ticker: "VMO",
    title: "Invesco Municipal Opportunity Trust",
  },
  {
    ticker: "ORLA",
    title: "Orla Mining Ltd.",
  },
  {
    ticker: "OXLC",
    title: "Oxford Lane Capital Corp.",
  },
  {
    ticker: "PML",
    title: "PIMCO MUNICIPAL INCOME FUND II",
  },
  {
    ticker: "CGBD",
    title: "Carlyle Secured Lending, Inc.",
  },
  {
    ticker: "AVD",
    title: "AMERICAN VANGUARD CORP",
  },
  {
    ticker: "KNSA",
    title: "Kiniksa Pharmaceuticals, Ltd.",
  },
  {
    ticker: "REVG",
    title: "REV Group, Inc.",
  },
  {
    ticker: "CARS",
    title: "Cars.com Inc.",
  },
  {
    ticker: "MHD",
    title: "BLACKROCK MUNIHOLDINGS FUND, INC.",
  },
  {
    ticker: "MBI",
    title: "MBIA INC",
  },
  {
    ticker: "LMDX",
    title: "LumiraDx Ltd",
  },
  {
    ticker: "IIIN",
    title: "INSTEEL INDUSTRIES INC",
  },
  {
    ticker: "NMM",
    title: "Navios Maritime Partners L.P.",
  },
  {
    ticker: "NKTR",
    title: "NEKTAR THERAPEUTICS",
  },
  {
    ticker: "HAFC",
    title: "HANMI FINANCIAL CORP",
  },
  {
    ticker: "HSTM",
    title: "HEALTHSTREAM INC",
  },
  {
    ticker: "DFFN",
    title: "Diffusion Pharmaceuticals Inc.",
  },
  {
    ticker: "DLY",
    title: "DoubleLine Yield Opportunities Fund",
  },
  {
    ticker: "BRW",
    title: "Saba Capital Income & Opportunities Fund",
  },
  {
    ticker: "PDT",
    title: "JOHN HANCOCK PREMIUM DIVIDEND FUND",
  },
  {
    ticker: "ENFN",
    title: "Enfusion, Inc.",
  },
  {
    ticker: "PHK",
    title: "PIMCO HIGH INCOME FUND",
  },
  {
    ticker: "CDRE",
    title: "Cadre Holdings, Inc.",
  },
  {
    ticker: "ACHR",
    title: "Archer Aviation Inc.",
  },
  {
    ticker: "CFB",
    title: "CROSSFIRST BANKSHARES, INC.",
  },
  {
    ticker: "SNDL",
    title: "Sundial Growers Inc.",
  },
  {
    ticker: "FPAC",
    title: "Far Peak Acquisition Corp",
  },
  {
    ticker: "MOR",
    title: "MorphoSys AG",
  },
  {
    ticker: "ROCC",
    title: "Ranger Oil Corp",
  },
  {
    ticker: "SLI",
    title: "STANDARD LITHIUM LTD.",
  },
  {
    ticker: "LILM",
    title: "Lilium N.V.",
  },
  {
    ticker: "VTNR",
    title: "Vertex Energy Inc.",
  },
  {
    ticker: "WNC",
    title: "WABASH NATIONAL Corp",
  },
  {
    ticker: "PLOW",
    title: "DOUGLAS DYNAMICS, INC",
  },
  {
    ticker: "LBC",
    title: "Luther Burbank Corp",
  },
  {
    ticker: "CCVI",
    title: "Churchill Capital Corp VI",
  },
  {
    ticker: "VIVK",
    title: "Vivakor, Inc.",
  },
  {
    ticker: "CUTR",
    title: "CUTERA INC",
  },
  {
    ticker: "CBTX",
    title: "CBTX, Inc.",
  },
  {
    ticker: "GSEV",
    title: "Gores Holdings VII Inc.",
  },
  {
    ticker: "WPCB",
    title: "Warburg Pincus Capital Corp I-B",
  },
  {
    ticker: "GAXY",
    title: "GALAXY NEXT GENERATION, INC.",
  },
  {
    ticker: "FC",
    title: "FRANKLIN COVEY CO",
  },
  {
    ticker: "GOL",
    title: "Gol Intelligent Airlines Inc.",
  },
  {
    ticker: "TRMR",
    title: "Tremor International Ltd.",
  },
  {
    ticker: "BLNK",
    title: "Blink Charging Co.",
  },
  {
    ticker: "BXC",
    title: "BlueLinx Holdings Inc.",
  },
  {
    ticker: "PCOK",
    title: "Pacific Oak Strategic Opportunity REIT, Inc.",
  },
  {
    ticker: "SAFLY",
    title: "Safilo Group SpA/ADR",
  },
  {
    ticker: "CSV",
    title: "CARRIAGE SERVICES INC",
  },
  {
    ticker: "YMAB",
    title: "Y-mAbs Therapeutics, Inc.",
  },
  {
    ticker: "RERE",
    title: "ATRenew Inc.",
  },
  {
    ticker: "MVST",
    title: "Microvast Holdings, Inc.",
  },
  {
    ticker: "KARO",
    title: "Karooooo Ltd.",
  },
  {
    ticker: "VTOL",
    title: "Bristow Group Inc.",
  },
  {
    ticker: "MBIN",
    title: "Merchants Bancorp",
  },
  {
    ticker: "MASS",
    title: "908 Devices Inc.",
  },
  {
    ticker: "CAC",
    title: "CAMDEN NATIONAL CORP",
  },
  {
    ticker: "ATEC",
    title: "Alphatec Holdings, Inc.",
  },
  {
    ticker: "FFIC",
    title: "FLUSHING FINANCIAL CORP",
  },
  {
    ticker: "ROVR",
    title: "ROVER GROUP, INC.",
  },
  {
    ticker: "CRAI",
    title: "CRA INTERNATIONAL, INC.",
  },
  {
    ticker: "RGP",
    title: "RESOURCES CONNECTION, INC.",
  },
  {
    ticker: "CRMT",
    title: "AMERICAS CARMART INC",
  },
  {
    ticker: "VIST",
    title: "Vista Energy, S.A.B. de C.V.",
  },
  {
    ticker: "NFBK",
    title: "Northfield Bancorp, Inc.",
  },
  {
    ticker: "SHYF",
    title: "SHYFT GROUP, INC.",
  },
  {
    ticker: "KVSC",
    title: "Khosla Ventures Acquisition Co. III",
  },
  {
    ticker: "AEVA",
    title: "Aeva Technologies, Inc.",
  },
  {
    ticker: "SRNE",
    title: "Sorrento Therapeutics, Inc.",
  },
  {
    ticker: "NDMO",
    title: "Nuveen Dynamic Municipal Opportunities Fund",
  },
  {
    ticker: "KROS",
    title: "Keros Therapeutics, Inc.",
  },
  {
    ticker: "OSW",
    title: "ONESPAWORLD HOLDINGS Ltd",
  },
  {
    ticker: "HCCI",
    title: "Heritage-Crystal Clean, Inc.",
  },
  {
    ticker: "CENX",
    title: "CENTURY ALUMINUM CO",
  },
  {
    ticker: "PNT",
    title: "POINT Biopharma Global Inc.",
  },
  {
    ticker: "FMBH",
    title: "FIRST MID BANCSHARES, INC.",
  },
  {
    ticker: "COWN",
    title: "COWEN INC.",
  },
  {
    ticker: "HTBK",
    title: "HERITAGE COMMERCE CORP",
  },
  {
    ticker: "ADCT",
    title: "ADC Therapeutics SA",
  },
  {
    ticker: "NUVL",
    title: "Nuvalent, Inc.",
  },
  {
    ticker: "TGTX",
    title: "TG THERAPEUTICS, INC.",
  },
  {
    ticker: "DM",
    title: "Desktop Metal, Inc.",
  },
  {
    ticker: "SWBI",
    title: "SMITH & WESSON BRANDS, INC.",
  },
  {
    ticker: "ASLE",
    title: "AerSale Corp",
  },
  {
    ticker: "HBIA",
    title: "HILLS BANCORPORATION",
  },
  {
    ticker: "OSBC",
    title: "OLD SECOND BANCORP INC",
  },
  {
    ticker: "NIU",
    title: "Niu Technologies",
  },
  {
    ticker: "MX",
    title: "MAGNACHIP SEMICONDUCTOR Corp",
  },
  {
    ticker: "EOLS",
    title: "Evolus, Inc.",
  },
  {
    ticker: "HZON",
    title: "Horizon Acquisition Corp II",
  },
  {
    ticker: "ARR",
    title: "Armour Residential REIT, Inc.",
  },
  {
    ticker: "MVIS",
    title: "MICROVISION, INC.",
  },
  {
    ticker: "PBI",
    title: "PITNEY BOWES INC /DE/",
  },
  {
    ticker: "VCSA",
    title: "Vacasa, Inc.",
  },
  {
    ticker: "WIW",
    title: "WESTERN ASSET INFLATION-LINKED OPPORTUNITIES & INCOME FUND",
  },
  {
    ticker: "TBI",
    title: "TrueBlue, Inc.",
  },
  {
    ticker: "SOHU",
    title: "Sohu.com Ltd",
  },
  {
    ticker: "ORGO",
    title: "Organogenesis Holdings Inc.",
  },
  {
    ticker: "EGLE",
    title: "Eagle Bulk Shipping Inc.",
  },
  {
    ticker: "SVA",
    title: "SINOVAC BIOTECH LTD",
  },
  {
    ticker: "MMX",
    title: "MAVERIX METALS INC.",
  },
  {
    ticker: "GOSS",
    title: "Gossamer Bio, Inc.",
  },
  {
    ticker: "SLRC",
    title: "SLR Investment Corp.",
  },
  {
    ticker: "COLL",
    title: "COLLEGIUM PHARMACEUTICAL, INC",
  },
  {
    ticker: "VTYX",
    title: "Ventyx Biosciences, Inc.",
  },
  {
    ticker: "IESC",
    title: "IES Holdings, Inc.",
  },
  {
    ticker: "ACCD",
    title: "Accolade, Inc.",
  },
  {
    ticker: "RUPRF",
    title: "RUPERT RESOURCES LTD",
  },
  {
    ticker: "GHLD",
    title: "Guild Holdings Co",
  },
  {
    ticker: "HSII",
    title: "HEIDRICK & STRUGGLES INTERNATIONAL INC",
  },
  {
    ticker: "BOE",
    title: "BlackRock Enhanced Global Dividend Trust",
  },
  {
    ticker: "STRL",
    title: "STERLING CONSTRUCTION CO INC",
  },
  {
    ticker: "ICHR",
    title: "ICHOR HOLDINGS, LTD.",
  },
  {
    ticker: "IDT",
    title: "IDT CORP",
  },
  {
    ticker: "EVTL",
    title: "Vertical Aerospace Ltd.",
  },
  {
    ticker: "ACCO",
    title: "ACCO BRANDS Corp",
  },
  {
    ticker: "AMAL",
    title: "Amalgamated Financial Corp.",
  },
  {
    ticker: "JOUT",
    title: "JOHNSON OUTDOORS INC",
  },
  {
    ticker: "CFIV",
    title: "CF ACQUISITION CORP. IV",
  },
  {
    ticker: "FLWS",
    title: "1 800 FLOWERS COM INC",
  },
  {
    ticker: "BIG",
    title: "BIG LOTS INC",
  },
  {
    ticker: "SGMO",
    title: "SANGAMO THERAPEUTICS, INC",
  },
  {
    ticker: "ONL",
    title: "Orion Office REIT Inc.",
  },
  {
    ticker: "VNDA",
    title: "Vanda Pharmaceuticals Inc.",
  },
  {
    ticker: "YEXT",
    title: "Yext, Inc.",
  },
  {
    ticker: "MAX",
    title: "MediaAlpha, Inc.",
  },
  {
    ticker: "FPI",
    title: "Farmland Partners Inc.",
  },
  {
    ticker: "VINP",
    title: "Vinci Partners Investments Ltd.",
  },
  {
    ticker: "NESR",
    title: "National Energy Services Reunited Corp.",
  },
  {
    ticker: "VALU",
    title: "VALUE LINE INC",
  },
  {
    ticker: "BBDC",
    title: "Barings BDC, Inc.",
  },
  {
    ticker: "BHK",
    title: "BLACKROCK CORE BOND TRUST",
  },
  {
    ticker: "ALCC",
    title: "AltC Acquisition Corp.",
  },
  {
    ticker: "DICE",
    title: "DICE Therapeutics, Inc.",
  },
  {
    ticker: "CPF",
    title: "CENTRAL PACIFIC FINANCIAL CORP",
  },
  {
    ticker: "BRY",
    title: "Berry Corp (bry)",
  },
  {
    ticker: "SMWB",
    title: "SIMILARWEB LTD.",
  },
  {
    ticker: "PLYM",
    title: "Plymouth Industrial REIT, Inc.",
  },
  {
    ticker: "QTRX",
    title: "Quanterix Corp",
  },
  {
    ticker: "FBMS",
    title: "FIRST BANCSHARES INC /MS/",
  },
  {
    ticker: "TREE",
    title: "LendingTree, Inc.",
  },
  {
    ticker: "CCV",
    title: "Churchill Capital Corp V",
  },
  {
    ticker: "HIBB",
    title: "HIBBETT INC",
  },
  {
    ticker: "WTI",
    title: "W&T OFFSHORE INC",
  },
  {
    ticker: "NID",
    title: "Nuveen Intermediate Duration Municipal Term Fund",
  },
  {
    ticker: "INDT",
    title: "INDUS REALTY TRUST, INC.",
  },
  {
    ticker: "VSLAX",
    title: "Invesco Senior Loan Fund",
  },
  {
    ticker: "FSNB",
    title: "Fusion Acquisition Corp. II",
  },
  {
    ticker: "TIL",
    title: "Instil Bio, Inc.",
  },
  {
    ticker: "DAO",
    title: "Youdao, Inc.",
  },
  {
    ticker: "IIM",
    title: "Invesco Value Municipal Income Trust",
  },
  {
    ticker: "MIRM",
    title: "Mirum Pharmaceuticals, Inc.",
  },
  {
    ticker: "BORR",
    title: "Borr Drilling Ltd",
  },
  {
    ticker: "LCA",
    title: "Landcadia Holdings IV, Inc.",
  },
  {
    ticker: "NKX",
    title: "NUVEEN CALIFORNIA AMT-FREE QUALITY MUNICIPAL INCOME FUND",
  },
  {
    ticker: "STGW",
    title: "Stagwell Inc",
  },
  {
    ticker: "JMIA",
    title: "Jumia Technologies AG",
  },
  {
    ticker: "BLFS",
    title: "BIOLIFE SOLUTIONS INC",
  },
  {
    ticker: "MIT",
    title: "Mason Industrial Technology, Inc.",
  },
  {
    ticker: "CHS",
    title: "CHICO'S FAS, INC.",
  },
  {
    ticker: "ACQR",
    title: "Independence Holdings Corp.",
  },
  {
    ticker: "AVIR",
    title: "Atea Pharmaceuticals, Inc.",
  },
  {
    ticker: "PFN",
    title: "PIMCO Income Strategy Fund II",
  },
  {
    ticker: "SEER",
    title: "Seer, Inc.",
  },
  {
    ticker: "TRST",
    title: "TRUSTCO BANK CORP N Y",
  },
  {
    ticker: "INNV",
    title: "InnovAge Holding Corp.",
  },
  {
    ticker: "EGRX",
    title: "EAGLE PHARMACEUTICALS, INC.",
  },
  {
    ticker: "TBLA",
    title: "Taboola.com Ltd.",
  },
  {
    ticker: "EWCZ",
    title: "European Wax Center, Inc.",
  },
  {
    ticker: "CHRS",
    title: "Coherus BioSciences, Inc.",
  },
  {
    ticker: "IPI",
    title: "Intrepid Potash, Inc.",
  },
  {
    ticker: "USLM",
    title: "UNITED STATES LIME & MINERALS INC",
  },
  {
    ticker: "LPG",
    title: "DORIAN LPG LTD.",
  },
  {
    ticker: "NSTG",
    title: "NanoString Technologies Inc",
  },
  {
    ticker: "PTLO",
    title: "Portillo's Inc.",
  },
  {
    ticker: "SCVL",
    title: "SHOE CARNIVAL INC",
  },
  {
    ticker: "FBRT",
    title: "Franklin BSP Realty Trust, Inc.",
  },
  {
    ticker: "NXDT",
    title: "NEXPOINT DIVERSIFIED REAL ESTATE TRUST",
  },
  {
    ticker: "UFPT",
    title: "UFP TECHNOLOGIES INC",
  },
  {
    ticker: "IGMS",
    title: "IGM Biosciences, Inc.",
  },
  {
    ticker: "BMDPF",
    title: "BANCA MONTE DEI PASCHI DI SIENA SPA",
  },
  {
    ticker: "PRTC",
    title: "PureTech Health plc",
  },
  {
    ticker: "EGHT",
    title: "8X8 INC /DE/",
  },
  {
    ticker: "AGX",
    title: "ARGAN INC",
  },
  {
    ticker: "AMRS",
    title: "AMYRIS, INC.",
  },
  {
    ticker: "SEAT",
    title: "Vivid Seats Inc.",
  },
  {
    ticker: "ACRE",
    title: "Ares Commercial Real Estate Corp",
  },
  {
    ticker: "NRIX",
    title: "Nurix Therapeutics, Inc.",
  },
  {
    ticker: "RMGC",
    title: "RMG Acquisition Corp. III",
  },
  {
    ticker: "DX",
    title: "DYNEX CAPITAL INC",
  },
  {
    ticker: "VVR",
    title: "Invesco Senior Income Trust",
  },
  {
    ticker: "CSII",
    title: "Cardiovascular Systems Inc",
  },
  {
    ticker: "TNK",
    title: "TEEKAY TANKERS LTD.",
  },
  {
    ticker: "BFLY",
    title: "Butterfly Network, Inc.",
  },
  {
    ticker: "NWBO",
    title: "NORTHWEST BIOTHERAPEUTICS INC",
  },
  {
    ticker: "CRESY",
    title: "CRESUD INC",
  },
  {
    ticker: "GSL",
    title: "Global Ship Lease, Inc.",
  },
  {
    ticker: "CTIC",
    title: "CTI BIOPHARMA CORP",
  },
  {
    ticker: "SBFM",
    title: "Sunshine Biopharma, Inc",
  },
  {
    ticker: "EOI",
    title: "Eaton Vance Enhanced Equity Income Fund",
  },
  {
    ticker: "DXPE",
    title: "DXP ENTERPRISES INC",
  },
  {
    ticker: "BFC",
    title: "Bank First Corp",
  },
  {
    ticker: "ATAI",
    title: "ATAI Life Sciences N.V.",
  },
  {
    ticker: "FRPH",
    title: "FRP HOLDINGS, INC.",
  },
  {
    ticker: "NRGX",
    title: "PIMCO Energy & Tactical Credit Opportunities Fund",
  },
  {
    ticker: "SD",
    title: "SANDRIDGE ENERGY INC",
  },
  {
    ticker: "RPTX",
    title: "Repare Therapeutics Inc.",
  },
  {
    ticker: "YALA",
    title: "Yalla Group Ltd",
  },
  {
    ticker: "THFF",
    title: "FIRST FINANCIAL CORP /IN/",
  },
  {
    ticker: "ZUMZ",
    title: "Zumiez Inc",
  },
  {
    ticker: "VTEX",
    title: "VTEX",
  },
  {
    ticker: "CATC",
    title: "CAMBRIDGE BANCORP",
  },
  {
    ticker: "NIE",
    title: "Virtus AllianzGI Equity & Convertible Income Fund",
  },
  {
    ticker: "DESP",
    title: "Despegar.com, Corp.",
  },
  {
    ticker: "LDP",
    title: "Cohen & Steers Ltd Duration Preferred & Income Fund, Inc.",
  },
  {
    ticker: "CLW",
    title: "Clearwater Paper Corp",
  },
  {
    ticker: "AGCB",
    title: "Altimeter Growth Corp. 2",
  },
  {
    ticker: "NVTA",
    title: "Invitae Corp",
  },
  {
    ticker: "DENN",
    title: "DENNY'S Corp",
  },
  {
    ticker: "HCKT",
    title: "HACKETT GROUP, INC.",
  },
  {
    ticker: "ACET",
    title: "Adicet Bio, Inc.",
  },
  {
    ticker: "FHTX",
    title: "Foghorn Therapeutics Inc.",
  },
  {
    ticker: "BIRD",
    title: "Allbirds, Inc.",
  },
  {
    ticker: "TLS",
    title: "TELOS CORP",
  },
  {
    ticker: "HSC",
    title: "HARSCO CORP",
  },
  {
    ticker: "TH",
    title: "Target Hospitality Corp.",
  },
  {
    ticker: "VGM",
    title: "Invesco Trust for Investment Grade Municipals",
  },
  {
    ticker: "AIO",
    title:
      "Virtus AllianzGI Artificial Intelligence & Technology Opportunities Fund",
  },
  {
    ticker: "IPOD",
    title: "Social Capital Hedosophia Holdings Corp. IV",
  },
  {
    ticker: "GBL",
    title: "GAMCO INVESTORS, INC. ET AL",
  },
  {
    ticker: "RUTH",
    title: "Ruths Hospitality Group, Inc.",
  },
  {
    ticker: "AMRN",
    title: "AMARIN CORP PLCUK",
  },
  {
    ticker: "CSTL",
    title: "CASTLE BIOSCIENCES INC",
  },
  {
    ticker: "PLL",
    title: "Piedmont Lithium Inc.",
  },
  {
    ticker: "PACK",
    title: "Ranpak Holdings Corp.",
  },
  {
    ticker: "MARA",
    title: "MARATHON DIGITAL HOLDINGS, INC.",
  },
  {
    ticker: "NNMX",
    title: "NANOMIX Corp",
  },
  {
    ticker: "CRGE",
    title: "Charge Enterprises, Inc.",
  },
  {
    ticker: "KNOP",
    title: "KNOT Offshore Partners LP",
  },
  {
    ticker: "TSPQ",
    title: "TCW Special Purpose Acquisition Corp.",
  },
  {
    ticker: "HNGR",
    title: "HANGER, INC.",
  },
  {
    ticker: "AZRE",
    title: "Azure Power Global Ltd",
  },
  {
    ticker: "ANAB",
    title: "ANAPTYSBIO, INC",
  },
  {
    ticker: "CIO",
    title: "City Office REIT, Inc.",
  },
  {
    ticker: "QNST",
    title: "QUINSTREET, INC",
  },
  {
    ticker: "ZEAL",
    title: "Zealand Pharma A/S",
  },
  {
    ticker: "LUNG",
    title: "Pulmonx Corp",
  },
  {
    ticker: "METC",
    title: "Ramaco Resources, Inc.",
  },
  {
    ticker: "FARO",
    title: "FARO TECHNOLOGIES INC",
  },
  {
    ticker: "CGEM",
    title: "Cullinan Oncology, Inc.",
  },
  {
    ticker: "REVH",
    title: "Revolution Healthcare Acquisition Corp.",
  },
  {
    ticker: "DIAX",
    title: "Nuveen Dow 30sm Dynamic Overwrite Fund",
  },
  {
    ticker: "MAXN",
    title: "Maxeon Solar Technologies, Ltd.",
  },
  {
    ticker: "SXC",
    title: "SunCoke Energy, Inc.",
  },
  {
    ticker: "VKQ",
    title: "Invesco Municipal Trust",
  },
  {
    ticker: "GTPB",
    title: "Gores Technology Partners II, Inc.",
  },
  {
    ticker: "VAQC",
    title: "Vector Acquisition Corp II",
  },
  {
    ticker: "NP",
    title: "Neenah Inc",
  },
  {
    ticker: "IMTX",
    title: "Immatics N.V.",
  },
  {
    ticker: "PGC",
    title: "PEAPACK GLADSTONE FINANCIAL CORP",
  },
  {
    ticker: "EXK",
    title: "ENDEAVOUR SILVER CORP",
  },
  {
    ticker: "DHIL",
    title: "DIAMOND HILL INVESTMENT GROUP INC",
  },
  {
    ticker: "KNTE",
    title: "Kinnate Biopharma Inc.",
  },
  {
    ticker: "VVI",
    title: "VIAD CORP",
  },
  {
    ticker: "INGN",
    title: "Inogen Inc",
  },
  {
    ticker: "HYLN",
    title: "Hyliion Holdings Corp.",
  },
  {
    ticker: "COCO",
    title: "Vita Coco Company, Inc.",
  },
  {
    ticker: "CAN",
    title: "Canaan Inc.",
  },
  {
    ticker: "ATLC",
    title: "Atlanticus Holdings Corp",
  },
  {
    ticker: "CZOO",
    title: "Cazoo Group Ltd",
  },
  {
    ticker: "BLND",
    title: "Blend Labs, Inc.",
  },
  {
    ticker: "HY",
    title: "HYSTER-YALE MATERIALS HANDLING, INC.",
  },
  {
    ticker: "OLP",
    title: "ONE LIBERTY PROPERTIES INC",
  },
  {
    ticker: "FEDU",
    title: "Four Seasons Education (Cayman) Inc.",
  },
  {
    ticker: "IIIV",
    title: "i3 Verticals, Inc.",
  },
  {
    ticker: "BBSI",
    title: "BARRETT BUSINESS SERVICES INC",
  },
  {
    ticker: "DBA",
    title: "INVESCO DB AGRICULTURE FUND",
  },
  {
    ticker: "IDYA",
    title: "IDEAYA Biosciences, Inc.",
  },
  {
    ticker: "PLCE",
    title: "Childrens Place, Inc.",
  },
  {
    ticker: "NTGR",
    title: "NETGEAR, INC.",
  },
  {
    ticker: "AMBC",
    title: "AMBAC FINANCIAL GROUP INC",
  },
  {
    ticker: "MOD",
    title: "MODINE MANUFACTURING CO",
  },
  {
    ticker: "NRDS",
    title: "NERDWALLET, INC.",
  },
  {
    ticker: "AMSWA",
    title: "AMERICAN SOFTWARE INC",
  },
  {
    ticker: "NEXT",
    title: "NextDecade Corp.",
  },
  {
    ticker: "THW",
    title: "Tekla World Healthcare Fund",
  },
  {
    ticker: "PRPC",
    title: "CC Neuberger Principal Holdings III",
  },
  {
    ticker: "HAAC",
    title: "Health Assurance Acquisition Corp.",
  },
  {
    ticker: "TRVG",
    title: "trivago N.V.",
  },
  {
    ticker: "RTLR",
    title: "RATTLER MIDSTREAM LP",
  },
  {
    ticker: "ETJ",
    title: "Eaton Vance Risk-Managed Diversified Equity Income Fund",
  },
  {
    ticker: "IQI",
    title: "Invesco Quality Municipal Income Trust",
  },
  {
    ticker: "BME",
    title: "BlackRock Health Sciences Trust",
  },
  {
    ticker: "GGN",
    title: "GAMCO Global Gold, Natural Resources & Income Trust",
  },
  {
    ticker: "BLE",
    title: "BLACKROCK MUNICIPAL INCOME TRUST II",
  },
  {
    ticker: "MSBI",
    title: "Midland States Bancorp, Inc.",
  },
  {
    ticker: "CRGY",
    title: "Crescent Energy Co",
  },
  {
    ticker: "CCD",
    title: "Calamos Dynamic Convertible & Income Fund",
  },
  {
    ticker: "UNTC",
    title: "UNIT CORP",
  },
  {
    ticker: "YORW",
    title: "YORK WATER CO",
  },
  {
    ticker: "GERN",
    title: "GERON CORP",
  },
  {
    ticker: "EMD",
    title: "WESTERN ASSET EMERGING MARKETS DEBT FUND INC.",
  },
  {
    ticker: "RMNI",
    title: "Rimini Street, Inc.",
  },
  {
    ticker: "AIKI",
    title: "AIkido Pharma Inc.",
  },
  {
    ticker: "HMPT",
    title: "Home Point Capital Inc.",
  },
  {
    ticker: "BIT",
    title: "BlackRock Multi-Sector Income Trust",
  },
  {
    ticker: "DGICA",
    title: "DONEGAL GROUP INC",
  },
  {
    ticker: "BLX",
    title: "FOREIGN TRADE BANK OF LATIN AMERICA, INC.",
  },
  {
    ticker: "BVH",
    title: "Bluegreen Vacations Holding Corp",
  },
  {
    ticker: "DPG",
    title: "Duff & Phelps Utility & Infrastructure Fund Inc.",
  },
  {
    ticker: "RAPT",
    title: "RAPT Therapeutics, Inc.",
  },
  {
    ticker: "SFIX",
    title: "Stitch Fix, Inc.",
  },
  {
    ticker: "FTHY",
    title: "FIRST TRUST HIGH YIELD OPPORTUNITIES 2027 TERM FUND",
  },
  {
    ticker: "BGY",
    title: "BlackRock Enhanced International Dividend Trust",
  },
  {
    ticker: "CYH",
    title: "COMMUNITY HEALTH SYSTEMS INC",
  },
  {
    ticker: "ELLKY",
    title: "Ellaktor SA / ADR",
  },
  {
    ticker: "WSR",
    title: "Whitestone REIT",
  },
  {
    ticker: "TCDA",
    title: "Tricida, Inc.",
  },
  {
    ticker: "TTCF",
    title: "Tattooed Chef, Inc.",
  },
  {
    ticker: "PCN",
    title: "PIMCO CORPORATE & INCOME STRATEGY FUND",
  },
  {
    ticker: "YTPG",
    title: "TPG Pace Beneficial II Corp.",
  },
  {
    ticker: "TA",
    title: "TravelCenters of America Inc. /MD/",
  },
  {
    ticker: "OPAD",
    title: "Offerpad Solutions Inc.",
  },
  {
    ticker: "COOK",
    title: "Traeger, Inc.",
  },
  {
    ticker: "MYD",
    title: "BLACKROCK MUNIYIELD FUND, INC.",
  },
  {
    ticker: "SRDX",
    title: "SURMODICS INC",
  },
  {
    ticker: "DBO",
    title: "Invesco DB Oil Fund",
  },
  {
    ticker: "EBF",
    title: "ENNIS, INC.",
  },
  {
    ticker: "TPB",
    title: "Turning Point Brands, Inc.",
  },
  {
    ticker: "GHRS",
    title: "GH Research PLC",
  },
  {
    ticker: "PV",
    title: "Primavera Capital Acquisition Corp.",
  },
  {
    ticker: "NXJ",
    title: "NUVEEN NEW JERSEY QUALITY MUNICIPAL INCOME FUND",
  },
  {
    ticker: "GPMT",
    title: "Granite Point Mortgage Trust Inc.",
  },
  {
    ticker: "CNBX",
    title: "CNBX Pharmaceuticals Inc.",
  },
  {
    ticker: "CRF",
    title: "CORNERSTONE TOTAL RETURN FUND INC",
  },
  {
    ticker: "ANIP",
    title: "ANI PHARMACEUTICALS INC",
  },
  {
    ticker: "BIOX",
    title: "Bioceres Crop Solutions Corp.",
  },
  {
    ticker: "DGNU",
    title: "Dragoneer Growth Opportunities Corp. III",
  },
  {
    ticker: "MYPS",
    title: "PLAYSTUDIOS, Inc.",
  },
  {
    ticker: "OPRA",
    title: "Opera Ltd",
  },
  {
    ticker: "GTX",
    title: "Garrett Motion Inc.",
  },
  {
    ticker: "FNMA",
    title: "FEDERAL NATIONAL MORTGAGE ASSOCIATION FANNIE MAE",
  },
  {
    ticker: "DCO",
    title: "DUCOMMUN INC /DE/",
  },
  {
    ticker: "MCBS",
    title: "MetroCity Bankshares, Inc.",
  },
  {
    ticker: "HBT",
    title: "HBT Financial, Inc.",
  },
  {
    ticker: "CLVLY",
    title: "Clinuvel Pharmaceuticals Ltd",
  },
  {
    ticker: "BMRC",
    title: "Bank of Marin Bancorp",
  },
  {
    ticker: "ANZU",
    title: "Anzu Special Acquisition Corp I",
  },
  {
    ticker: "NNOX",
    title: "Nano-X Imaging Ltd.",
  },
  {
    ticker: "EBIX",
    title: "EBIX INC",
  },
  {
    ticker: "ARLO",
    title: "Arlo Technologies, Inc.",
  },
  {
    ticker: "ETD",
    title: "ETHAN ALLEN INTERIORS INC",
  },
  {
    ticker: "ORC",
    title: "Orchid Island Capital, Inc.",
  },
  {
    ticker: "CCAP",
    title: "Crescent Capital BDC, Inc.",
  },
  {
    ticker: "CCO",
    title: "Clear Channel Outdoor Holdings, Inc.",
  },
  {
    ticker: "AROW",
    title: "ARROW FINANCIAL CORP",
  },
  {
    ticker: "TBCP",
    title: "Thunder Bridge Capital Partners III Inc.",
  },
  {
    ticker: "BW",
    title: "Babcock & Wilcox Enterprises, Inc.",
  },
  {
    ticker: "REX",
    title: "REX AMERICAN RESOURCES Corp",
  },
  {
    ticker: "FMNB",
    title: "FARMERS NATIONAL BANC CORP /OH/",
  },
  {
    ticker: "PETQ",
    title: "PetIQ, Inc.",
  },
  {
    ticker: "LWEL",
    title: "Luckwel Pharmaceuticals Inc.",
  },
  {
    ticker: "DRD",
    title: "DRDGOLD LTD",
  },
  {
    ticker: "BJRI",
    title: "BJs RESTAURANTS INC",
  },
  {
    ticker: "TRAQ",
    title: "Trine II Acquisition Corp.",
  },
  {
    ticker: "BCYC",
    title: "BICYCLE THERAPEUTICS plc",
  },
  {
    ticker: "SKLZ",
    title: "Skillz Inc.",
  },
  {
    ticker: "EQD",
    title: "Equity Distribution Acquisition Corp.",
  },
  {
    ticker: "CTAQ",
    title: "Carney Technology Acquisition Corp. II",
  },
  {
    ticker: "TITN",
    title: "Titan Machinery Inc.",
  },
  {
    ticker: "ULNV",
    title: "Porter Holding International, Inc.",
  },
  {
    ticker: "WDH",
    title: "Waterdrop Inc.",
  },
  {
    ticker: "INVZ",
    title: "Innoviz Technologies Ltd.",
  },
  {
    ticker: "SHCR",
    title: "Sharecare, Inc.",
  },
  {
    ticker: "MBWM",
    title: "MERCANTILE BANK CORP",
  },
  {
    ticker: "EH",
    title: "EHang Holdings Ltd",
  },
  {
    ticker: "CLDT",
    title: "Chatham Lodging Trust",
  },
  {
    ticker: "TTI",
    title: "TETRA TECHNOLOGIES INC",
  },
  {
    ticker: "FINM",
    title: "MARLIN TECHNOLOGY CORP.",
  },
  {
    ticker: "VCV",
    title: "Invesco California Value Municipal Income Trust",
  },
  {
    ticker: "NBB",
    title: "Nuveen Taxable Municipal Income Fund",
  },
  {
    ticker: "HHLA",
    title: "HH&L Acquisition Co.",
  },
  {
    ticker: "CCHWF",
    title: "Columbia Care Inc.",
  },
  {
    ticker: "AGAC",
    title: "African Gold Acquisition Corp",
  },
  {
    ticker: "RLMD",
    title: "RELMADA THERAPEUTICS, INC.",
  },
  {
    ticker: "FCBC",
    title: "FIRST COMMUNITY BANKSHARES INC /VA/",
  },
  {
    ticker: "OHPA",
    title: "Orion Acquisition Corp.",
  },
  {
    ticker: "JOFF",
    title: "JOFF Fintech Acquisition Corp.",
  },
  {
    ticker: "STOK",
    title: "Stoke Therapeutics, Inc.",
  },
  {
    ticker: "MMD",
    title: "MainStay MacKay DefinedTerm Municipal Opportunities Fund",
  },
  {
    ticker: "CBL",
    title: "CBL & ASSOCIATES PROPERTIES INC",
  },
  {
    ticker: "HPS",
    title: "JOHN HANCOCK PREFERRED INCOME FUND III",
  },
  {
    ticker: "BGB",
    title: "Blackstone Strategic Credit Fund",
  },
  {
    ticker: "AGEN",
    title: "AGENUS INC",
  },
  {
    ticker: "ITRN",
    title: "Ituran Location & Control Ltd.",
  },
  {
    ticker: "PHAR",
    title: "Pharming Group N.V.",
  },
  {
    ticker: "CION",
    title: "CION Investment Corp",
  },
  {
    ticker: "GOTU",
    title: "Gaotu Techedu Inc.",
  },
  {
    ticker: "EPHY",
    title: "Epiphany Technology Acquisition Corp.",
  },
  {
    ticker: "AMRX",
    title: "Amneal Pharmaceuticals, Inc.",
  },
  {
    ticker: "AAGH",
    title: "America Great Health",
  },
  {
    ticker: "PDOT",
    title: "Peridot Acquisition Corp. II",
  },
  {
    ticker: "LQDT",
    title: "LIQUIDITY SERVICES INC",
  },
  {
    ticker: "FCUV",
    title: "FOCUS UNIVERSAL INC.",
  },
  {
    ticker: "SKIL",
    title: "Skillsoft Corp.",
  },
  {
    ticker: "BBAR",
    title: "Banco BBVA Argentina S.A.",
  },
  {
    ticker: "CTT",
    title: "CatchMark Timber Trust, Inc.",
  },
  {
    ticker: "CCB",
    title: "COASTAL FINANCIAL CORP",
  },
  {
    ticker: "TCVA",
    title: "TCV Acquisition Corp.",
  },
  {
    ticker: "SRLP",
    title: "Sprague Resources LP",
  },
  {
    ticker: "BBAI",
    title: "BigBear.ai Holdings, Inc.",
  },
  {
    ticker: "KE",
    title: "Kimball Electronics, Inc.",
  },
  {
    ticker: "EQBK",
    title: "EQUITY BANCSHARES INC",
  },
  {
    ticker: "IMPX",
    title: "AEA-Bridges Impact Corp.",
  },
  {
    ticker: "RDUS",
    title: "Radius Health, Inc.",
  },
  {
    ticker: "INRE",
    title: "Inland Real Estate Income Trust, Inc.",
  },
  {
    ticker: "PACX",
    title: "Pioneer Merger Corp.",
  },
  {
    ticker: "BAND",
    title: "Bandwidth Inc.",
  },
  {
    ticker: "OPRX",
    title: "OptimizeRx Corp",
  },
  {
    ticker: "RIOT",
    title: "Riot Blockchain, Inc.",
  },
  {
    ticker: "KZR",
    title: "Kezar Life Sciences, Inc.",
  },
  {
    ticker: "COOL",
    title: "Corner Growth Acquisition Corp.",
  },
  {
    ticker: "DDI",
    title: "DoubleDown Interactive Co., Ltd.",
  },
  {
    ticker: "FCAX",
    title: "Fortress Capital Acquisition Corp",
  },
  {
    ticker: "MUC",
    title: "BLACKROCK MUNIHOLDINGS CALIFORNIA QUALITY FUND, INC.",
  },
  {
    ticker: "AKYA",
    title: "Akoya Biosciences, Inc.",
  },
  {
    ticker: "JANX",
    title: "Janux Therapeutics, Inc.",
  },
  {
    ticker: "NSTB",
    title: "Northern Star Investment Corp. II",
  },
  {
    ticker: "NSTD",
    title: "Northern Star Investment Corp. IV",
  },
  {
    ticker: "TLGA",
    title: "TLG Acquisition One Corp.",
  },
  {
    ticker: "MBAC",
    title: "M3-Brigade Acquisition II Corp.",
  },
  {
    ticker: "NSTC",
    title: "Northern Star Investment Corp. III",
  },
  {
    ticker: "CALT",
    title: "Calliditas Therapeutics AB",
  },
  {
    ticker: "KRUS",
    title: "KURA SUSHI USA, INC.",
  },
  {
    ticker: "AAQC",
    title: "Accelerate Acquisition Corp.",
  },
  {
    ticker: "BFK",
    title: "BLACKROCK MUNICIPAL INCOME TRUST",
  },
  {
    ticker: "SENEA",
    title: "Seneca Foods Corp",
  },
  {
    ticker: "FLNC",
    title: "Fluence Energy, Inc.",
  },
  {
    ticker: "MVF",
    title: "BLACKROCK MUNIVEST FUND, INC.",
  },
  {
    ticker: "OSPN",
    title: "OneSpan Inc.",
  },
  {
    ticker: "KOP",
    title: "Koppers Holdings Inc.",
  },
  {
    ticker: "RWAY",
    title: "Runway Growth Finance Corp.",
  },
  {
    ticker: "IRS",
    title: "IRSA INVESTMENTS & REPRESENTATIONS INC",
  },
  {
    ticker: "TDF",
    title: "TEMPLETON DRAGON FUND INC",
  },
  {
    ticker: "OCGN",
    title: "Ocugen, Inc.",
  },
  {
    ticker: "GENI",
    title: "Genius Sports Ltd",
  },
  {
    ticker: "GAIN",
    title: "GLADSTONE INVESTMENT CORPORATION\\DE",
  },
  {
    ticker: "IPSC",
    title: "Century Therapeutics, Inc.",
  },
  {
    ticker: "CASS",
    title: "CASS INFORMATION SYSTEMS INC",
  },
  {
    ticker: "SGHT",
    title: "Sight Sciences, Inc.",
  },
  {
    ticker: "OFIX",
    title: "Orthofix Medical Inc.",
  },
  {
    ticker: "UP",
    title: "Wheels Up Experience Inc.",
  },
  {
    ticker: "THR",
    title: "Thermon Group Holdings, Inc.",
  },
  {
    ticker: "JFR",
    title: "NUVEEN FLOATING RATE INCOME FUND",
  },
  {
    ticker: "POWW",
    title: "AMMO, INC.",
  },
  {
    ticker: "CCBG",
    title: "CAPITAL CITY BANK GROUP INC",
  },
  {
    ticker: "AERG",
    title: "APPLIED ENERGETICS, INC.",
  },
  {
    ticker: "RMR",
    title: "RMR GROUP INC.",
  },
  {
    ticker: "MXCT",
    title: "MAXCYTE, INC.",
  },
  {
    ticker: "GEVO",
    title: "Gevo, Inc.",
  },
  {
    ticker: "BBBY",
    title: "BED BATH & BEYOND INC",
  },
  {
    ticker: "TCX",
    title: "TUCOWS INC /PA/",
  },
  {
    ticker: "CPSI",
    title: "COMPUTER PROGRAMS & SYSTEMS INC",
  },
  {
    ticker: "TUFN",
    title: "Tufin Software Technologies Ltd.",
  },
  {
    ticker: "IMGO",
    title: "Imago BioSciences, Inc.",
  },
  {
    ticker: "HLX",
    title: "HELIX ENERGY SOLUTIONS GROUP INC",
  },
  {
    ticker: "PEO",
    title: "ADAMS NATURAL RESOURCES FUND, INC.",
  },
  {
    ticker: "ARTNA",
    title: "ARTESIAN RESOURCES CORP",
  },
  {
    ticker: "BHIL",
    title: "Benson Hill, Inc.",
  },
  {
    ticker: "PZN",
    title: "Pzena Investment Management, Inc.",
  },
  {
    ticker: "RMAX",
    title: "RE/MAX Holdings, Inc.",
  },
  {
    ticker: "SRI",
    title: "STONERIDGE INC",
  },
  {
    ticker: "PUYI",
    title: "PUYI, INC.",
  },
  {
    ticker: "VRAY",
    title: "ViewRay, Inc.",
  },
  {
    ticker: "WW",
    title: "WW INTERNATIONAL, INC.",
  },
  {
    ticker: "MOFG",
    title: "MidWestOne Financial Group, Inc.",
  },
  {
    ticker: "ONTF",
    title: "ON24 INC.",
  },
  {
    ticker: "RICK",
    title: "RCI HOSPITALITY HOLDINGS, INC.",
  },
  {
    ticker: "METX",
    title: "Meten Holding Group Ltd.",
  },
  {
    ticker: "VXRT",
    title: "Vaxart, Inc.",
  },
  {
    ticker: "GLUE",
    title: "Monte Rosa Therapeutics, Inc.",
  },
  {
    ticker: "TETC",
    title: "Tech & Energy Transition Corp",
  },
  {
    ticker: "ACAM",
    title: "Acamar Partners Acquisition Corp. II",
  },
  {
    ticker: "REPX",
    title: "Riley Exploration Permian, Inc.",
  },
  {
    ticker: "GHY",
    title: "PGIM Global High Yield Fund, Inc.",
  },
  {
    ticker: "MUA",
    title: "BLACKROCK MUNIASSETS FUND, INC.",
  },
  {
    ticker: "VSEC",
    title: "VSE CORP",
  },
  {
    ticker: "NAAC",
    title: "North Atlantic Acquisition Corp",
  },
  {
    ticker: "LND",
    title: "BrasilAgro - Brazilian Agricultural Real Estate Co",
  },
  {
    ticker: "CURV",
    title: "Torrid Holdings Inc.",
  },
  {
    ticker: "NPK",
    title: "NATIONAL PRESTO INDUSTRIES INC",
  },
  {
    ticker: "RGC",
    title: "Regencell Bioscience Holdings Ltd",
  },
  {
    ticker: "CEPU",
    title: "CENTRAL PUERTO S.A.",
  },
  {
    ticker: "CNTA",
    title: "Centessa Pharmaceuticals plc",
  },
  {
    ticker: "MCS",
    title: "MARCUS CORP",
  },
  {
    ticker: "AAN",
    title: "Aaron's Company, Inc.",
  },
  {
    ticker: "HPI",
    title: "JOHN HANCOCK PREFERRED INCOME FUND",
  },
  {
    ticker: "NRP",
    title: "NATURAL RESOURCE PARTNERS LP",
  },
  {
    ticker: "PFLT",
    title: "PennantPark Floating Rate Capital Ltd.",
  },
  {
    ticker: "ENMPY",
    title: "Ensurge Micropower ASA/ADR",
  },
  {
    ticker: "MMU",
    title: "WESTERN ASSET MANAGED MUNICIPALS FUND INC.",
  },
  {
    ticker: "GIM",
    title: "TEMPLETON GLOBAL INCOME FUND",
  },
  {
    ticker: "NQP",
    title: "NUVEEN PENNSYLVANIA QUALITY MUNICIPAL INCOME FUND",
  },
  {
    ticker: "DNMR",
    title: "Danimer Scientific, Inc.",
  },
  {
    ticker: "LHC",
    title: "Leo Holdings Corp. II",
  },
  {
    ticker: "CARA",
    title: "Cara Therapeutics, Inc.",
  },
  {
    ticker: "TPIC",
    title: "TPI COMPOSITES, INC",
  },
  {
    ticker: "LDI",
    title: "loanDepot, Inc.",
  },
  {
    ticker: "BIOGY",
    title: "BioGaia AB/ADR",
  },
  {
    ticker: "BWB",
    title: "Bridgewater Bancshares Inc",
  },
  {
    ticker: "MUI",
    title: "BLACKROCK MUNICIPAL INCOME FUND, INC.",
  },
  {
    ticker: "BEST",
    title: "BEST Inc.",
  },
  {
    ticker: "HIPO",
    title: "Hippo Holdings Inc.",
  },
  {
    ticker: "UPLD",
    title: "Upland Software, Inc.",
  },
  {
    ticker: "IMVT",
    title: "Immunovant, Inc.",
  },
  {
    ticker: "SIBN",
    title: "SI-BONE, Inc.",
  },
  {
    ticker: "SENS",
    title: "Senseonics Holdings, Inc.",
  },
  {
    ticker: "TPC",
    title: "TUTOR PERINI CORP",
  },
  {
    ticker: "SBOW",
    title: "SILVERBOW RESOURCES, INC.",
  },
  {
    ticker: "LEAP",
    title: "Ribbit LEAP, Ltd.",
  },
  {
    ticker: "BLW",
    title: "BLACKROCK Ltd DURATION INCOME TRUST",
  },
  {
    ticker: "BPT",
    title: "BP PRUDHOE BAY ROYALTY TRUST",
  },
  {
    ticker: "RBBN",
    title: "Ribbon Communications Inc.",
  },
  {
    ticker: "DHC",
    title: "DIVERSIFIED HEALTHCARE TRUST",
  },
  {
    ticker: "VWE",
    title: "Vintage Wine Estates, Inc.",
  },
  {
    ticker: "AMYT",
    title: "Amryt Pharma plc",
  },
  {
    ticker: "LGO",
    title: "Largo Inc.",
  },
  {
    ticker: "SRGA",
    title: "SURGALIGN HOLDINGS, INC.",
  },
  {
    ticker: "CMPS",
    title: "COMPASS Pathways plc",
  },
  {
    ticker: "HIGA",
    title: "H.I.G. Acquisition Corp.",
  },
  {
    ticker: "BUI",
    title: "BlackRock Utilities, Infrastructure & Power Opportunities Trust",
  },
  {
    ticker: "HLTH",
    title: "Cue Health Inc.",
  },
  {
    ticker: "GOEV",
    title: "Canoo Inc.",
  },
  {
    ticker: "NL",
    title: "NL INDUSTRIES INC",
  },
  {
    ticker: "ALT",
    title: "Altimmune, Inc.",
  },
  {
    ticker: "RADA",
    title: "RADA ELECTRONIC INDUSTRIES LTD",
  },
  {
    ticker: "NEWP",
    title: "NEW PACIFIC METALS CORP",
  },
  {
    ticker: "FSP",
    title: "FRANKLIN STREET PROPERTIES CORP /MA/",
  },
  {
    ticker: "FSBC",
    title: "FIVE STAR BANCORP",
  },
  {
    ticker: "IGD",
    title: "Voya GLOBAL EQUITY DIVIDEND & PREMIUM OPPORTUNITY FUND",
  },
  {
    ticker: "SB",
    title: "SAFE BULKERS, INC.",
  },
  {
    ticker: "GUT",
    title: "GABELLI UTILITY TRUST",
  },
  {
    ticker: "SVM",
    title: "SILVERCORP METALS INC",
  },
  {
    ticker: "TWOH",
    title: "Two Hands Corp",
  },
  {
    ticker: "ONEW",
    title: "OneWater Marine Inc.",
  },
  {
    ticker: "ENPC",
    title: "Executive Network Partnering Corp",
  },
  {
    ticker: "GNTY",
    title: "GUARANTY BANCSHARES INC /TX/",
  },
  {
    ticker: "BFST",
    title: "Business First Bancshares, Inc.",
  },
  {
    ticker: "SPWH",
    title: "SPORTSMAN'S WAREHOUSE HOLDINGS, INC.",
  },
  {
    ticker: "NEWT",
    title: "Newtek Business Services Corp.",
  },
  {
    ticker: "ECOM",
    title: "CHANNELADVISOR CORP",
  },
  {
    ticker: "INBX",
    title: "Inhibrx, Inc.",
  },
  {
    ticker: "TRSSF",
    title: "TerrAscend Corp.",
  },
  {
    ticker: "CSWC",
    title: "CAPITAL SOUTHWEST CORP",
  },
  {
    ticker: "LASR",
    title: "NLIGHT, INC.",
  },
  {
    ticker: "CPAR",
    title: "Catalyst Partners Acquisition Corp.",
  },
  {
    ticker: "JPI",
    title: "Nuveen Preferred & Income Term Fund",
  },
  {
    ticker: "FICV",
    title: "Frontier Investment Corp",
  },
  {
    ticker: "AVAH",
    title: "Aveanna Healthcare Holdings, Inc.",
  },
  {
    ticker: "CSTR",
    title: "CapStar Financial Holdings, Inc.",
  },
  {
    ticker: "IFN",
    title: "INDIA FUND INC",
  },
  {
    ticker: "CELU",
    title: "Celularity Inc",
  },
  {
    ticker: "WSBF",
    title: "Waterstone Financial, Inc.",
  },
  {
    ticker: "PCPC",
    title: "Periphas Capital Partnering Corp",
  },
  {
    ticker: "FMAO",
    title: "FARMERS & MERCHANTS BANCORP INC",
  },
  {
    ticker: "NVTS",
    title: "Navitas Semiconductor Corp",
  },
  {
    ticker: "TWLV",
    title: "Twelve Seas Investment Co. II",
  },
  {
    ticker: "DZSI",
    title: "DZS INC.",
  },
  {
    ticker: "NKTX",
    title: "Nkarta, Inc.",
  },
  {
    ticker: "TPGY",
    title: "TPG Pace Beneficial Finance Corp.",
  },
  {
    ticker: "ETB",
    title: "Eaton Vance Tax-Managed Buy-Write Income Fund",
  },
  {
    ticker: "CISO",
    title: "CERBERUS CYBER SENTINEL CORP",
  },
  {
    ticker: "MPB",
    title: "MID PENN BANCORP INC",
  },
  {
    ticker: "FDUS",
    title: "FIDUS INVESTMENT Corp",
  },
  {
    ticker: "CPAA",
    title: "Conyers Park III Acquisition Corp.",
  },
  {
    ticker: "EVN",
    title: "EATON VANCE MUNICIPAL INCOME TRUST",
  },
  {
    ticker: "NDAC",
    title: "NightDragon Acquisition Corp.",
  },
  {
    ticker: "ICNC",
    title: "Iconic Sports Acquisition Corp.",
  },
  {
    ticker: "ABML",
    title: "AMERICAN BATTERY TECHNOLOGY Co",
  },
  {
    ticker: "PSPC",
    title: "Post Holdings Partnering Corp",
  },
  {
    ticker: "CNDB",
    title: "Concord Acquisition Corp III",
  },
  {
    ticker: "FRXB",
    title: "Forest Road Acquisition Corp. II",
  },
  {
    ticker: "EZPW",
    title: "EZCORP INC",
  },
  {
    ticker: "WUYI",
    title: "China WuYi Mountain, Ltd.",
  },
  {
    ticker: "SPFI",
    title: "SOUTH PLAINS FINANCIAL, INC.",
  },
  {
    ticker: "DSU",
    title: "BLACKROCK DEBT STRATEGIES FUND, INC.",
  },
  {
    ticker: "GIIX",
    title: "Gores Holdings VIII Inc.",
  },
  {
    ticker: "LUXA",
    title: "Lux Health Tech Acquisition Corp.",
  },
  {
    ticker: "VUZI",
    title: "Vuzix Corp",
  },
  {
    ticker: "OPY",
    title: "OPPENHEIMER HOLDINGS INC",
  },
  {
    ticker: "ARCT",
    title: "Arcturus Therapeutics Holdings Inc.",
  },
  {
    ticker: "TRNS",
    title: "TRANSCAT INC",
  },
  {
    ticker: "WALD",
    title: "Waldencast Acquisition Corp.",
  },
  {
    ticker: "SLCR",
    title: "Silver Crest Acquisition Corp",
  },
  {
    ticker: "GFX",
    title: "Golden Falcon Acquisition Corp.",
  },
  {
    ticker: "JCIC",
    title: "Jack Creek Investment Corp.",
  },
  {
    ticker: "DHHC",
    title: "DiamondHead Holdings Corp.",
  },
  {
    ticker: "GSQD",
    title: "G Squared Ascend I Inc.",
  },
  {
    ticker: "GLBL",
    title: "Cartesian Growth Corp",
  },
  {
    ticker: "ROSS",
    title: "Ross Acquisition Corp II",
  },
  {
    ticker: "SLAC",
    title: "Social Leverage Acquisition Corp I",
  },
  {
    ticker: "HCIC",
    title: "HENNESSY CAPITAL INVESTMENT CORP. V",
  },
  {
    ticker: "SCLE",
    title: "Broadscale Acquisition Corp.",
  },
  {
    ticker: "FACT",
    title: "Freedom Acquisition I Corp.",
  },
  {
    ticker: "ACII",
    title: "Atlas Crest Investment Corp. II",
  },
  {
    ticker: "CVLG",
    title: "COVENANT LOGISTICS GROUP, INC.",
  },
  {
    ticker: "OEPW",
    title: "One Equity Partners Open Water I Corp.",
  },
  {
    ticker: "MYN",
    title: "BLACKROCK MUNIYIELD NEW YORK QUALITY FUND, INC.",
  },
  {
    ticker: "TWNI",
    title: "Tailwind International Acquisition Corp.",
  },
  {
    ticker: "PTOC",
    title: "Pine Technology Acquisition Corp.",
  },
  {
    ticker: "LXFR",
    title: "LUXFER HOLDINGS PLC",
  },
  {
    ticker: "LVLU",
    title: "Lulu's Fashion Lounge Holdings, Inc.",
  },
  {
    ticker: "COLI",
    title: "Colicity Inc.",
  },
  {
    ticker: "SPGS",
    title: "Simon Property Group Acquisition Holdings, Inc.",
  },
  {
    ticker: "BVS",
    title: "Bioventus Inc.",
  },
  {
    ticker: "ABST",
    title: "ABSOLUTE SOFTWARE CORP",
  },
  {
    ticker: "LEGA",
    title: "Lead Edge Growth Opportunities, Ltd",
  },
  {
    ticker: "GTE",
    title: "GRAN TIERRA ENERGY INC.",
  },
  {
    ticker: "SCOB",
    title: "ScION Tech Growth II",
  },
  {
    ticker: "RXRA",
    title: "RXR Acquisition Corp.",
  },
  {
    ticker: "GATE",
    title: "Marblegate Acquisition Corp.",
  },
  {
    ticker: "AWP",
    title: "ABERDEEN GLOBAL PREMIER PROPERTIES FUND",
  },
  {
    ticker: "ACAH",
    title: "Atlantic Coastal Acquisition Corp.",
  },
  {
    ticker: "MACC",
    title: "Mission Advancement Corp.",
  },
  {
    ticker: "HVT",
    title: "HAVERTY FURNITURE COMPANIES INC",
  },
  {
    ticker: "PNNT",
    title: "PENNANTPARK INVESTMENT CORP",
  },
  {
    ticker: "AVK",
    title: "ADVENT CONVERTIBLE & INCOME FUND",
  },
  {
    ticker: "TIOA",
    title: "Tio Tech A",
  },
  {
    ticker: "MITK",
    title: "MITEK SYSTEMS INC",
  },
  {
    ticker: "FLIC",
    title: "FIRST OF LONG ISLAND CORP",
  },
  {
    ticker: "FMIV",
    title: "Forum Merger IV Corp",
  },
  {
    ticker: "DSX",
    title: "DIANA SHIPPING INC.",
  },
  {
    ticker: "FISI",
    title: "FINANCIAL INSTITUTIONS INC",
  },
  {
    ticker: "SDC",
    title: "SmileDirectClub, Inc.",
  },
  {
    ticker: "ZT",
    title: "Zimmer Energy Transition Acquisition Corp.",
  },
  {
    ticker: "SJT",
    title: "SAN JUAN BASIN ROYALTY TRUST",
  },
  {
    ticker: "IBCP",
    title: "INDEPENDENT BANK CORP /MI/",
  },
  {
    ticker: "ACRO",
    title: "Acropolis Infrastructure Acquisition Corp.",
  },
  {
    ticker: "ICPT",
    title: "INTERCEPT PHARMACEUTICALS, INC.",
  },
  {
    ticker: "LEO",
    title: "BNY MELLON STRATEGIC MUNICIPALS, INC.",
  },
  {
    ticker: "TRTL",
    title: "TortoiseEcofin Acquisition Corp. III",
  },
  {
    ticker: "NVCN",
    title: "NEOVASC INC",
  },
  {
    ticker: "VKI",
    title: "Invesco Advantage Municipal Income Trust II",
  },
  {
    ticker: "TNGX",
    title: "Tango Therapeutics, Inc.",
  },
  {
    ticker: "TWND",
    title: "Tailwind Acquisition Corp.",
  },
  {
    ticker: "NFYS",
    title: "Enphys Acquisition Corp.",
  },
  {
    ticker: "RXST",
    title: "RxSight, Inc.",
  },
  {
    ticker: "AURA",
    title: "Aura Biosciences, Inc.",
  },
  {
    ticker: "CCNE",
    title: "CNB FINANCIAL CORP/PA",
  },
  {
    ticker: "GCI",
    title: "Gannett Co., Inc.",
  },
  {
    ticker: "BBLN",
    title: "Babylon Holdings Ltd",
  },
  {
    ticker: "LITT",
    title: "Logistics Innovation Technologies Corp.",
  },
  {
    ticker: "IRMD",
    title: "IRADIMED CORP",
  },
  {
    ticker: "AVTE",
    title: "Aerovate Therapeutics, Inc.",
  },
  {
    ticker: "CHW",
    title: "Calamos Global Dynamic Income Fund",
  },
  {
    ticker: "CEM",
    title: "ClearBridge MLP & Midstream Fund Inc.",
  },
  {
    ticker: "TRC",
    title: "TEJON RANCH CO",
  },
  {
    ticker: "UVE",
    title: "UNIVERSAL INSURANCE HOLDINGS, INC.",
  },
  {
    ticker: "CPAC",
    title: "CEMENTOS PACASMAYO SAA",
  },
  {
    ticker: "PETS",
    title: "PETMED EXPRESS INC",
  },
  {
    ticker: "HTBI",
    title: "HomeTrust Bancshares, Inc.",
  },
  {
    ticker: "ISD",
    title: "PGIM High Yield Bond Fund, Inc.",
  },
  {
    ticker: "CHUY",
    title: "CHUY'S HOLDINGS, INC.",
  },
  {
    ticker: "BCSA",
    title: "Blockchain Coinvestors Acquisition Corp. I",
  },
  {
    ticker: "LX",
    title: "LexinFintech Holdings Ltd.",
  },
  {
    ticker: "GHG",
    title: "GreenTree Hospitality Group Ltd.",
  },
  {
    ticker: "FRA",
    title: "BLACKROCK FLOATING RATE INCOME STRATEGIES FUND, INC.",
  },
  {
    ticker: "DFP",
    title: "Flaherty & Crumrine Dynamic Preferred & Income Fund Inc",
  },
  {
    ticker: "DOYU",
    title: "DouYu International Holdings Ltd",
  },
  {
    ticker: "EGY",
    title: "VAALCO ENERGY INC /DE/",
  },
  {
    ticker: "VTRU",
    title: "Vitru Ltd",
  },
  {
    ticker: "SMBC",
    title: "SOUTHERN MISSOURI BANCORP, INC.",
  },
  {
    ticker: "BYTS",
    title: "BYTE Acquisition Corp.",
  },
  {
    ticker: "ALRS",
    title: "ALERUS FINANCIAL CORP",
  },
  {
    ticker: "DTOC",
    title: "Digital Transformation Opportunities Corp.",
  },
  {
    ticker: "ECC",
    title: "Eagle Point Credit Co Inc.",
  },
  {
    ticker: "SMBK",
    title: "SMARTFINANCIAL INC.",
  },
  {
    ticker: "ALBO",
    title: "ALBIREO PHARMA, INC.",
  },
  {
    ticker: "NSR",
    title: "Nomad Royalty Co Ltd.",
  },
  {
    ticker: "LIND",
    title: "LINDBLAD EXPEDITIONS HOLDINGS, INC.",
  },
  {
    ticker: "HCAR",
    title: "Healthcare Services Acquisition Corp",
  },
  {
    ticker: "RBB",
    title: "RBB Bancorp",
  },
  {
    ticker: "SLQT",
    title: "SelectQuote, Inc.",
  },
  {
    ticker: "RTSL",
    title: "Rapid Therapeutic Science Laboratories, Inc.",
  },
  {
    ticker: "DOUG",
    title: "Douglas Elliman Inc.",
  },
  {
    ticker: "STON",
    title: "Stonemor Inc.",
  },
  {
    ticker: "WTBA",
    title: "WEST BANCORPORATION INC",
  },
  {
    ticker: "WKHS",
    title: "Workhorse Group Inc.",
  },
  {
    ticker: "CMBM",
    title: "Cambium Networks Corp",
  },
  {
    ticker: "CLAA",
    title: "Colonnade Acquisition Corp. II",
  },
  {
    ticker: "TPVG",
    title: "TriplePoint Venture Growth BDC Corp.",
  },
  {
    ticker: "VSTA",
    title: "Vasta Platform Ltd",
  },
  {
    ticker: "CASI",
    title: "CASI Pharmaceuticals, Inc.",
  },
  {
    ticker: "PIAI",
    title: "Prime Impact Acquisition I",
  },
  {
    ticker: "CTLP",
    title: "CANTALOUPE, INC.",
  },
  {
    ticker: "RSVR",
    title: "Reservoir Media, Inc.",
  },
  {
    ticker: "PFIS",
    title: "PEOPLES FINANCIAL SERVICES CORP.",
  },
  {
    ticker: "HAYN",
    title: "HAYNES INTERNATIONAL INC",
  },
  {
    ticker: "FACA",
    title: "Figure Acquisition Corp. I",
  },
  {
    ticker: "ESPR",
    title: "Esperion Therapeutics, Inc.",
  },
  {
    ticker: "BRT",
    title: "BRT Apartments Corp.",
  },
  {
    ticker: "KOD",
    title: "Kodiak Sciences Inc.",
  },
  {
    ticker: "IEA",
    title: "Infrastructure & Energy Alternatives, Inc.",
  },
  {
    ticker: "PRSR",
    title: "Prospector Capital Corp.",
  },
  {
    ticker: "TRIN",
    title: "Trinity Capital Inc.",
  },
  {
    ticker: "KGEIF",
    title: "Kolibri Global Energy Inc.",
  },
  {
    ticker: "MDXG",
    title: "MIMEDX GROUP, INC.",
  },
  {
    ticker: "SGH",
    title: "SMART Global Holdings, Inc.",
  },
  {
    ticker: "DSKE",
    title: "Daseke, Inc.",
  },
  {
    ticker: "STK",
    title: "Columbia Seligman Premium Technology Growth Fund, Inc.",
  },
  {
    ticker: "BTAI",
    title: "BioXcel Therapeutics, Inc.",
  },
  {
    ticker: "MCFT",
    title: "MasterCraft Boat Holdings, Inc.",
  },
  {
    ticker: "PFDR",
    title: "Pathfinder Acquisition Corp",
  },
  {
    ticker: "MUJ",
    title: "BLACKROCK MUNIHOLDINGS NEW JERSEY QUALITY FUND, INC.",
  },
  {
    ticker: "MUDS",
    title: "Mudrick Capital Acquisition Corp. II",
  },
  {
    ticker: "EAD",
    title: "ALLSPRING INCOME OPPORTUNITIES FUND",
  },
  {
    ticker: "FOUN",
    title: "Founder SPAC",
  },
  {
    ticker: "EWTX",
    title: "Edgewise Therapeutics, Inc.",
  },
  {
    ticker: "VEC",
    title: "Vectrus, Inc.",
  },
  {
    ticker: "GCBC",
    title: "GREENE COUNTY BANCORP INC",
  },
  {
    ticker: "INO",
    title: "INOVIO PHARMACEUTICALS, INC.",
  },
  {
    ticker: "PMO",
    title: "PUTNAM MUNICIPAL OPPORTUNITIES TRUST",
  },
  {
    ticker: "ADMA",
    title: "ADMA BIOLOGICS, INC.",
  },
  {
    ticker: "BHB",
    title: "BAR HARBOR BANKSHARES",
  },
  {
    ticker: "KVSA",
    title: "Khosla Ventures Acquisition Co.",
  },
  {
    ticker: "BZH",
    title: "BEAZER HOMES USA INC",
  },
  {
    ticker: "AERI",
    title: "AERIE PHARMACEUTICALS INC",
  },
  {
    ticker: "FUBO",
    title: "fuboTV Inc. /FL",
  },
  {
    ticker: "PSAG",
    title: "Property Solutions Acquisition Corp. II",
  },
  {
    ticker: "PPT",
    title: "PUTNAM PREMIER INCOME TRUST",
  },
  {
    ticker: "CDR",
    title: "CEDAR REALTY TRUST, INC.",
  },
  {
    ticker: "EBTC",
    title: "ENTERPRISE BANCORP INC /MA/",
  },
  {
    ticker: "TOI",
    title: "Oncology Institute, Inc.",
  },
  {
    ticker: "NLCP",
    title: "NewLake Capital Partners, Inc.",
  },
  {
    ticker: "EDN",
    title: "EDENOR",
  },
  {
    ticker: "DCRD",
    title: "Decarbonization Plus Acquisition Corp IV",
  },
  {
    ticker: "MIY",
    title: "BLACKROCK MUNIYIELD MICHIGAN QUALITY FUND, INC.",
  },
  {
    ticker: "PLMI",
    title: "Plum Acquisition Corp. I",
  },
  {
    ticker: "CCCC",
    title: "C4 Therapeutics, Inc.",
  },
  {
    ticker: "RM",
    title: "Regional Management Corp.",
  },
  {
    ticker: "EVC",
    title: "ENTRAVISION COMMUNICATIONS CORP",
  },
  {
    ticker: "CSTA",
    title: "Constellation Acquisition Corp I",
  },
  {
    ticker: "CRD-A",
    title: "CRAWFORD & CO",
  },
  {
    ticker: "ADGI",
    title: "Adagio Therapeutics, Inc.",
  },
  {
    ticker: "RRBI",
    title: "RED RIVER BANCSHARES INC",
  },
  {
    ticker: "MVBF",
    title: "MVB FINANCIAL CORP",
  },
  {
    ticker: "GWH",
    title: "ESS Tech, Inc.",
  },
  {
    ticker: "ACTD",
    title: "ArcLight Clean Transition Corp. II",
  },
  {
    ticker: "SDAC",
    title: "Sustainable Development Acquisition I Corp.",
  },
  {
    ticker: "ANAC",
    title: "ARCTOS NORTHSTAR ACQUISITION CORP.",
  },
  {
    ticker: "EVGO",
    title: "EVgo Inc.",
  },
  {
    ticker: "HPF",
    title: "JOHN HANCOCK PREFERRED INCOME FUND II",
  },
  {
    ticker: "VIEW",
    title: "View, Inc.",
  },
  {
    ticker: "SBNC",
    title: "SOUTHERN BANCSHARES NC INC",
  },
  {
    ticker: "VPG",
    title: "Vishay Precision Group, Inc.",
  },
  {
    ticker: "HCNE",
    title: "Jaws Hurricane Acquisition Corp",
  },
  {
    ticker: "SIER",
    title: "Sierra Lake Acquisition Corp.",
  },
  {
    ticker: "REE",
    title: "REE Automotive Ltd.",
  },
  {
    ticker: "RAD",
    title: "RITE AID CORP",
  },
  {
    ticker: "ZTR",
    title: "Virtus Total Return Fund Inc.",
  },
  {
    ticker: "CFVI",
    title: "CF Acquisition Corp. VI",
  },
  {
    ticker: "STRC",
    title: "Sarcos Technology & Robotics Corp",
  },
  {
    ticker: "HT",
    title: "HERSHA HOSPITALITY TRUST",
  },
  {
    ticker: "GBIO",
    title: "Generation Bio Co.",
  },
  {
    ticker: "CZNC",
    title: "CITIZENS & NORTHERN CORP",
  },
  {
    ticker: "SSAA",
    title: "Science Strategic Acquisition Corp. Alpha",
  },
  {
    ticker: "TWCB",
    title: "Bilander Acquisition Corp.",
  },
  {
    ticker: "ARGU",
    title: "Argus Capital Corp.",
  },
  {
    ticker: "AGGR",
    title: "Agile Growth Corp.",
  },
  {
    ticker: "IGIC",
    title: "International General Insurance Holdings Ltd.",
  },
  {
    ticker: "FSD",
    title: "FIRST TRUST HIGH INCOME LONG/SHORT FUND",
  },
  {
    ticker: "CNFN",
    title: "CFN Enterprises Inc.",
  },
  {
    ticker: "DHCA",
    title: "DHC Acquisition Corp.",
  },
  {
    ticker: "ABUS",
    title: "Arbutus Biopharma Corp",
  },
  {
    ticker: "LE",
    title: "LANDS' END, INC.",
  },
  {
    ticker: "HMCO",
    title: "HumanCo Acquisition Corp.",
  },
  {
    ticker: "BWMX",
    title: "BETTERWARE DE MEXICO, S.A.P.I. DE C.V",
  },
  {
    ticker: "HIO",
    title: "WESTERN ASSET HIGH INCOME OPPORTUNITY FUND INC.",
  },
  {
    ticker: "GBLI",
    title: "Global Indemnity Group, LLC",
  },
  {
    ticker: "ESM",
    title: "ESM Acquisition Corp",
  },
  {
    ticker: "GBAB",
    title: "Guggenheim Taxable Municipal Bond & Investment Grade Debt Trust",
  },
  {
    ticker: "ACDI",
    title: "Ascendant Digital Acquisition Corp. III",
  },
  {
    ticker: "FSRX",
    title: "Finserv Acquisition Corp. II",
  },
  {
    ticker: "PTGX",
    title: "Protagonist Therapeutics, Inc",
  },
  {
    ticker: "JMKJ",
    title: "Nine Alliance Science & Technology Group",
  },
  {
    ticker: "LEU",
    title: "CENTRUS ENERGY CORP",
  },
  {
    ticker: "TRDA",
    title: "Entrada Therapeutics, Inc.",
  },
  {
    ticker: "NAT",
    title: "NORDIC AMERICAN TANKERS Ltd",
  },
  {
    ticker: "COGT",
    title: "Cogent Biosciences, Inc.",
  },
  {
    ticker: "KRNL",
    title: "Kernel Group Holdings, Inc.",
  },
  {
    ticker: "AMNB",
    title: "AMERICAN NATIONAL BANKSHARES INC.",
  },
  {
    ticker: "RMT",
    title: "ROYCE MICRO-CAP TRUST, INC.",
  },
  {
    ticker: "RRAC",
    title: "Rigel Resource Acquisition Corp.",
  },
  {
    ticker: "BH-A",
    title: "Biglari Holdings Inc.",
  },
  {
    ticker: "XPOA",
    title: "DPCM Capital, Inc.",
  },
  {
    ticker: "KTF",
    title: "DWS MUNICIPAL INCOME TRUST",
  },
  {
    ticker: "ALTU",
    title: "Altitude Acquisition Corp.",
  },
  {
    ticker: "CAF",
    title: "Morgan Stanley China A Share Fund, Inc.",
  },
  {
    ticker: "MTW",
    title: "MANITOWOC CO INC",
  },
  {
    ticker: "DYN",
    title: "Dyne Therapeutics, Inc.",
  },
  {
    ticker: "SDHY",
    title: "PGIM Short Duration High Yield Opportunities Fund",
  },
  {
    ticker: "JUN",
    title: "Juniper II Corp.",
  },
  {
    ticker: "EVLV",
    title: "Evolv Technologies Holdings, Inc.",
  },
  {
    ticker: "CLVS",
    title: "Clovis Oncology, Inc.",
  },
  {
    ticker: "INBK",
    title: "First Internet Bancorp",
  },
  {
    ticker: "HTPA",
    title: "Highland Transcend Partners I Corp.",
  },
  {
    ticker: "ADSE",
    title: "Ads-Tec Energy Public Ltd Co",
  },
  {
    ticker: "GPAC",
    title: "Global Partner Acquisition Corp II",
  },
  {
    ticker: "BRDG",
    title: "Bridge Investment Group Holdings Inc.",
  },
  {
    ticker: "CYD",
    title: "CHINA YUCHAI INTERNATIONAL LTD",
  },
  {
    ticker: "APPH",
    title: "AppHarvest, Inc.",
  },
  {
    ticker: "COVA",
    title: "COVA Acquisition Corp.",
  },
  {
    ticker: "BLI",
    title: "Berkeley Lights, Inc.",
  },
  {
    ticker: "BODY",
    title: "Beachbody Company, Inc.",
  },
  {
    ticker: "CHAA",
    title: "Catcha Investment Corp",
  },
  {
    ticker: "NGVC",
    title: "Natural Grocers by Vitamin Cottage, Inc.",
  },
  {
    ticker: "SHBI",
    title: "SHORE BANCSHARES INC",
  },
  {
    ticker: "SASDY",
    title: "SAS AB / ADR",
  },
  {
    ticker: "DJCO",
    title: "DAILY JOURNAL CORP",
  },
  {
    ticker: "TSIB",
    title: "Tishman Speyer Innovation Corp. II",
  },
  {
    ticker: "HLGN",
    title: "Heliogen, Inc.",
  },
  {
    ticker: "PNTG",
    title: "Pennant Group, Inc.",
  },
  {
    ticker: "GXII",
    title: "GX Acquisition Corp. II",
  },
  {
    ticker: "AMRK",
    title: "A-Mark Precious Metals, Inc.",
  },
  {
    ticker: "BSKY",
    title: "Big Sky Growth Partners, Inc.",
  },
  {
    ticker: "VEL",
    title: "Velocity Financial, Inc.",
  },
  {
    ticker: "KODK",
    title: "EASTMAN KODAK CO",
  },
  {
    ticker: "TIPT",
    title: "TIPTREE INC.",
  },
  {
    ticker: "CO",
    title: "Global Cord Blood Corp",
  },
  {
    ticker: "CVEO",
    title: "Civeo Corp",
  },
  {
    ticker: "SKE",
    title: "Skeena Resources Ltd",
  },
  {
    ticker: "NODK",
    title: "NI Holdings, Inc.",
  },
  {
    ticker: "NAN",
    title: "NUVEEN NEW YORK QUALITY MUNICIPAL INCOME FUND",
  },
  {
    ticker: "SMMF",
    title: "SUMMIT FINANCIAL GROUP, INC.",
  },
  {
    ticker: "JRI",
    title: "Nuveen Real Asset Income & Growth Fund",
  },
  {
    ticker: "AKA",
    title: "A.K.A. BRANDS HOLDING CORP.",
  },
  {
    ticker: "LOCO",
    title: "El Pollo Loco Holdings, Inc.",
  },
  {
    ticker: "PRTS",
    title: "CarParts.com, Inc.",
  },
  {
    ticker: "SGU",
    title: "STAR GROUP, L.P.",
  },
  {
    ticker: "GTYH",
    title: "GTY Technology Holdings Inc.",
  },
  {
    ticker: "ETO",
    title: "Eaton Vance Tax-Advantaged Global Dividend Opportunities Fund",
  },
  {
    ticker: "BLUA",
    title: "BlueRiver Acquisition Corp.",
  },
  {
    ticker: "HLG",
    title: "Hailiang Education Group Inc.",
  },
  {
    ticker: "TYG",
    title: "TORTOISE ENERGY INFRASTRUCTURE CORP",
  },
  {
    ticker: "SLN",
    title: "Silence Therapeutics plc",
  },
  {
    ticker: "GOGN",
    title: "GoGreen Investments Corp",
  },
  {
    ticker: "RLGT",
    title: "RADIANT LOGISTICS, INC",
  },
  {
    ticker: "BFZ",
    title: "BLACKROCK CALIFORNIA MUNICIPAL INCOME TRUST",
  },
  {
    ticker: "RBOT",
    title: "Vicarious Surgical Inc.",
  },
  {
    ticker: "FXLV",
    title: "F45 Training Holdings Inc.",
  },
  {
    ticker: "KPTI",
    title: "Karyopharm Therapeutics Inc.",
  },
  {
    ticker: "LGSXY",
    title: "Light S.A.",
  },
  {
    ticker: "HQL",
    title: "TEKLA LIFE SCIENCES INVESTORS",
  },
  {
    ticker: "DRAY",
    title: "Macondray Capital Acquisition Corp. I",
  },
  {
    ticker: "KIII",
    title: "Kismet Acquisition Three Corp.",
  },
  {
    ticker: "VITL",
    title: "Vital Farms, Inc.",
  },
  {
    ticker: "LGTO",
    title: "LEGATO MERGER CORP. II",
  },
  {
    ticker: "QIWI",
    title: "QIWI",
  },
  {
    ticker: "CIIG",
    title: "CIIG Capital Partners II, Inc.",
  },
  {
    ticker: "FMTX",
    title: "Forma Therapeutics Holdings, Inc.",
  },
  {
    ticker: "RFI",
    title: "COHEN & STEERS TOTAL RETURN REALTY FUND INC",
  },
  {
    ticker: "IPVI",
    title: "InterPrivate IV InfraTech Partners Inc.",
  },
  {
    ticker: "CARE",
    title: "Carter Bankshares, Inc.",
  },
  {
    ticker: "RFMZ",
    title: "RiverNorth Flexible Municipal Income Fund II, Inc.",
  },
  {
    ticker: "AKRO",
    title: "Akero Therapeutics, Inc.",
  },
  {
    ticker: "DHBC",
    title: "DHB Capital Corp.",
  },
  {
    ticker: "TINV",
    title: "Tiga Acquisition Corp.",
  },
  {
    ticker: "TZPS",
    title: "TZP Strategies Acquisition Corp.",
  },
  {
    ticker: "KLAQ",
    title: "KL Acquisition Corp",
  },
  {
    ticker: "FENG",
    title: "Phoenix New Media Ltd",
  },
  {
    ticker: "KMF",
    title: "Kayne Anderson NextGen Energy & Infrastructure, Inc.",
  },
  {
    ticker: "CLRM",
    title: "Clarim Acquisition Corp.",
  },
  {
    ticker: "CMAX",
    title: "CareMax, Inc.",
  },
  {
    ticker: "MIC",
    title: "Macquarie Infrastructure Holdings, LLC",
  },
  {
    ticker: "DNZ",
    title: "D & Z Media Acquisition Corp.",
  },
  {
    ticker: "SOI",
    title: "Solaris Oilfield Infrastructure, Inc.",
  },
  {
    ticker: "CNCN",
    title: "CHUN CAN CAPITAL GROUP",
  },
  {
    ticker: "SPKB",
    title: "Silver Spike Acquisition Corp II",
  },
  {
    ticker: "FLME",
    title: "Flame Acquisition Corp.",
  },
  {
    ticker: "ARRW",
    title: "Arrowroot Acquisition Corp.",
  },
  {
    ticker: "AMPI",
    title: "Advanced Merger Partners, Inc.",
  },
  {
    ticker: "BOOM",
    title: "DMC Global Inc.",
  },
  {
    ticker: "LCAA",
    title: "L Catterton Asia Acquisition Corp",
  },
  {
    ticker: "GLAD",
    title: "GLADSTONE CAPITAL CORP",
  },
  {
    ticker: "CND",
    title: "Concord Acquisition Corp",
  },
  {
    ticker: "SFST",
    title: "SOUTHERN FIRST BANCSHARES INC",
  },
  {
    ticker: "APTM",
    title: "Alpha Partners Technology Merger Corp.",
  },
  {
    ticker: "HUGS",
    title: "USHG Acquisition Corp.",
  },
  {
    ticker: "AMOT",
    title: "ALLIED MOTION TECHNOLOGIES INC",
  },
  {
    ticker: "FEI",
    title: "FIRST TRUST MLP & ENERGY INCOME FUND",
  },
  {
    ticker: "SIFY",
    title: "SIFY TECHNOLOGIES LTD",
  },
  {
    ticker: "VTIQ",
    title: "VectoIQ Acquisition Corp. II",
  },
  {
    ticker: "MIN",
    title: "MFS INTERMEDIATE INCOME TRUST",
  },
  {
    ticker: "EFR",
    title: "EATON VANCE SENIOR FLOATING RATE TRUST",
  },
  {
    ticker: "WPCA",
    title: "Warburg Pincus Capital Corp I-A",
  },
  {
    ticker: "GRVY",
    title: "GRAVITY Co., Ltd.",
  },
  {
    ticker: "LGVC",
    title: "LAMF Global Ventures Corp. I",
  },
  {
    ticker: "NHHS",
    title: "NorthStar Healthcare Income, Inc.",
  },
  {
    ticker: "XXII",
    title: "22nd Century Group, Inc.",
  },
  {
    ticker: "NML",
    title: "Neuberger Berman MLP & Energy Income Fund Inc.",
  },
  {
    ticker: "LPTV",
    title: "Loop Media, Inc.",
  },
  {
    ticker: "TG",
    title: "TREDEGAR CORP",
  },
  {
    ticker: "TYRA",
    title: "Tyra Biosciences, Inc.",
  },
  {
    ticker: "BBCP",
    title: "Concrete Pumping Holdings, Inc.",
  },
  {
    ticker: "FWAC",
    title: "Fifth Wall Acquisition Corp. III",
  },
  {
    ticker: "BLFY",
    title: "Blue Foundry Bancorp",
  },
  {
    ticker: "TCI",
    title: "TRANSCONTINENTAL REALTY INVESTORS INC",
  },
  {
    ticker: "GRCL",
    title: "Gracell Biotechnologies Inc.",
  },
  {
    ticker: "KINZ",
    title: "KINS Technology Group, Inc.",
  },
  {
    ticker: "MKFG",
    title: "Markforged Holding Corp",
  },
  {
    ticker: "AAWH",
    title: "Ascend Wellness Holdings, Inc.",
  },
  {
    ticker: "STRE",
    title: "Supernova Partners Acquisition Co III, Ltd.",
  },
  {
    ticker: "ASTR",
    title: "Astra Space, Inc.",
  },
  {
    ticker: "MHN",
    title: "BLACKROCK MUNIHOLDINGS NEW YORK QUALITY FUND, INC.",
  },
  {
    ticker: "WARR",
    title: "Warrior Technologies Acquisition Co",
  },
  {
    ticker: "CHMX",
    title: "NEXT-ChemX Corporation.",
  },
  {
    ticker: "GGMC",
    title: "Glenfarne Merger Corp.",
  },
  {
    ticker: "TMKR",
    title: "Tastemaker Acquisition Corp.",
  },
  {
    ticker: "AIRS",
    title: "Airsculpt Technologies, Inc.",
  },
  {
    ticker: "LIFX",
    title: "Life360, Inc.",
  },
  {
    ticker: "GECC",
    title: "Great Elm Capital Corp.",
  },
  {
    ticker: "KCGI",
    title: "Kensington Capital Acquisition Corp. V",
  },
  {
    ticker: "GILT",
    title: "GILAT SATELLITE NETWORKS LTD",
  },
  {
    ticker: "UEIC",
    title: "UNIVERSAL ELECTRONICS INC",
  },
  {
    ticker: "PYR",
    title: "PyroGenesis Canada Inc.",
  },
  {
    ticker: "AURC",
    title: "Aurora Acquisition Corp.",
  },
  {
    ticker: "ARIS",
    title: "Aris Water Solutions, Inc.",
  },
  {
    ticker: "NGMS",
    title: "NeoGames S.A.",
  },
  {
    ticker: "BGRY",
    title: "Berkshire Grey, Inc.",
  },
  {
    ticker: "POW",
    title: "Powered Brands",
  },
  {
    ticker: "KAIR",
    title: "Kairos Acquisition Corp.",
  },
  {
    ticker: "KRT",
    title: "Karat Packaging Inc.",
  },
  {
    ticker: "AOMR",
    title: "Angel Oak Mortgage, Inc.",
  },
  {
    ticker: "AXGN",
    title: "Axogen, Inc.",
  },
  {
    ticker: "ADEX",
    title: "Adit EdTech Acquisition Corp.",
  },
  {
    ticker: "MDH",
    title: "MDH Acquisition Corp.",
  },
  {
    ticker: "HUMA",
    title: "Humacyte, Inc.",
  },
  {
    ticker: "SCPL",
    title: "SciPlay Corp",
  },
  {
    ticker: "NVSA",
    title: "New Vista Acquisition Corp",
  },
  {
    ticker: "CPTK",
    title: "Crown PropTech Acquisitions",
  },
  {
    ticker: "EPWR",
    title: "Empowerment & Inclusion Capital I Corp.",
  },
  {
    ticker: "SWET",
    title: "Athlon Acquisition Corp.",
  },
  {
    ticker: "CANG",
    title: "Cango Inc.",
  },
  {
    ticker: "PICC",
    title: "Pivotal Investment Corp III",
  },
  {
    ticker: "VLN",
    title: "Valens Semiconductor Ltd.",
  },
  {
    ticker: "BSRR",
    title: "SIERRA BANCORP",
  },
  {
    ticker: "EAC",
    title: "Edify Acquisition Corp.",
  },
  {
    ticker: "ATVC",
    title: "Tribe Capital Growth Corp I",
  },
  {
    ticker: "PMGM",
    title: "Priveterra Acquisition Corp.",
  },
  {
    ticker: "ARBE",
    title: "Arbe Robotics Ltd.",
  },
  {
    ticker: "EFT",
    title: "Eaton Vance Floating-Rate Income Trust",
  },
  {
    ticker: "CNDA",
    title: "Concord Acquisition Corp II",
  },
  {
    ticker: "RONI",
    title: "Rice Acquisition Corp. II",
  },
  {
    ticker: "ADER",
    title: "26 Capital Acquisition Corp.",
  },
  {
    ticker: "FTVI",
    title: "FINTECH ACQUISITION CORP VI",
  },
  {
    ticker: "IIII",
    title: "INSU ACQUISITION CORP III",
  },
  {
    ticker: "FTCV",
    title: "Fintech Acquisition Corp V",
  },
  {
    ticker: "AFMD",
    title: "Affimed N.V.",
  },
  {
    ticker: "DISA",
    title: "Disruptive Acquisition Corp I",
  },
  {
    ticker: "MGTX",
    title: "MeiraGTx Holdings plc",
  },
  {
    ticker: "FTPA",
    title: "FTAC Parnassus Acquisition Corp.",
  },
  {
    ticker: "BACA",
    title: "Berenson Acquisition Corp. I",
  },
  {
    ticker: "CASA",
    title: "Casa Systems Inc",
  },
  {
    ticker: "GTPA",
    title: "Gores Technology Partners, Inc.",
  },
  {
    ticker: "FTAA",
    title: "FTAC Athena Acquisition Corp.",
  },
  {
    ticker: "ASPN",
    title: "ASPEN AEROGELS INC",
  },
  {
    ticker: "FRST",
    title: "Primis Financial Corp.",
  },
  {
    ticker: "JUGG",
    title: "Jaws Juggernaut Acquisition Corp",
  },
  {
    ticker: "FTEV",
    title: "FinTech Evolution Acquisition Group",
  },
  {
    ticker: "WLDN",
    title: "Willdan Group, Inc.",
  },
  {
    ticker: "JRO",
    title: "Nuveen Floating Rate Income Opportunity Fund",
  },
  {
    ticker: "SCWO",
    title: "374Water Inc.",
  },
  {
    ticker: "MCRB",
    title: "Seres Therapeutics, Inc.",
  },
  {
    ticker: "ALXO",
    title: "ALX ONCOLOGY HOLDINGS INC",
  },
  {
    ticker: "FNLC",
    title: "First Bancorp, Inc /ME/",
  },
  {
    ticker: "TCS",
    title: "Container Store Group, Inc.",
  },
  {
    ticker: "VLGEA",
    title: "VILLAGE SUPER MARKET INC",
  },
  {
    ticker: "MRSN",
    title: "Mersana Therapeutics, Inc.",
  },
  {
    ticker: "AFB",
    title: "ALLIANCEBERNSTEIN NATIONAL MUNICIPAL INCOME FUND",
  },
  {
    ticker: "OIS",
    title: "OIL STATES INTERNATIONAL, INC",
  },
  {
    ticker: "LVRA",
    title: "Levere Holdings Corp.",
  },
  {
    ticker: "NAUT",
    title: "Nautilus Biotechnology, Inc.",
  },
  {
    ticker: "III",
    title: "Information Services Group Inc.",
  },
  {
    ticker: "TXCB",
    title: "Cang Bao Tian Xia International Art Trade Center, Inc.",
  },
  {
    ticker: "ONYX",
    title: "Onyx Acquisition Co. I",
  },
  {
    ticker: "ISRL",
    title: "Israel Acquisitions Corp",
  },
  {
    ticker: "QSI",
    title: "Quantum-Si Inc",
  },
  {
    ticker: "GRIN",
    title: "Grindrod Shipping Holdings Ltd.",
  },
  {
    ticker: "BYM",
    title: "BLACKROCK MUNICIPAL INCOME QUALITY TRUST",
  },
  {
    ticker: "MSB",
    title: "MESABI TRUST",
  },
  {
    ticker: "NCAC",
    title: "Newcourt Acquisition Corp",
  },
  {
    ticker: "TUP",
    title: "TUPPERWARE BRANDS CORP",
  },
  {
    ticker: "ASTS",
    title: "AST SpaceMobile, Inc.",
  },
  {
    ticker: "CIR",
    title: "CIRCOR INTERNATIONAL INC",
  },
  {
    ticker: "FFA",
    title: "FIRST TRUST ENHANCED EQUITY INCOME FUND",
  },
  {
    ticker: "NCV",
    title: "Virtus AllianzGI Convertible & Income Fund",
  },
  {
    ticker: "AYRWF",
    title: "Ayr Wellness Inc.",
  },
  {
    ticker: "TIG",
    title: "Trean Insurance Group, Inc.",
  },
  {
    ticker: "RKTA",
    title: "Rocket Internet Growth Opportunities Corp.",
  },
  {
    ticker: "HDSN",
    title: "HUDSON TECHNOLOGIES INC /NY",
  },
  {
    ticker: "SOL",
    title: "ReneSola Ltd",
  },
  {
    ticker: "IPVF",
    title: "InterPrivate III Financial Partners Inc.",
  },
  {
    ticker: "POND",
    title: "Angel Pond Holdings Corp",
  },
  {
    ticker: "ADVV",
    title: "Adveco Group Inc.",
  },
  {
    ticker: "CIFR",
    title: "Cipher Mining Inc.",
  },
  {
    ticker: "HAWEL",
    title: "HAWAIIAN ELECTRIC CO INC",
  },
  {
    ticker: "PUCK",
    title: "Goal Acquisitions Corp.",
  },
  {
    ticker: "ANIK",
    title: "Anika Therapeutics, Inc.",
  },
  {
    ticker: "RMM",
    title: "RiverNorth Managed Duration Municipal Income Fund, Inc.",
  },
  {
    ticker: "GRPN",
    title: "Groupon, Inc.",
  },
  {
    ticker: "CIVB",
    title: "CIVISTA BANCSHARES, INC.",
  },
  {
    ticker: "ATRO",
    title: "ASTRONICS CORP",
  },
  {
    ticker: "UK",
    title: "Ucommune International Ltd",
  },
  {
    ticker: "PMM",
    title: "PUTNAM MANAGED MUNICIPAL INCOME TRUST",
  },
  {
    ticker: "LEGH",
    title: "Legacy Housing Corp",
  },
  {
    ticker: "BMEA",
    title: "Biomea Fusion, Inc.",
  },
  {
    ticker: "MTAL",
    title: "Metals Acquisition Corp",
  },
  {
    ticker: "ZYXI",
    title: "ZYNEX INC",
  },
  {
    ticker: "LSEA",
    title: "Landsea Homes Corp",
  },
  {
    ticker: "CPZ",
    title: "Calamos Long/Short Equity & Dynamic Income Trust",
  },
  {
    ticker: "FF",
    title: "FutureFuel Corp.",
  },
  {
    ticker: "MESO",
    title: "MESOBLAST LTD",
  },
  {
    ticker: "GLT",
    title: "Glatfelter Corp",
  },
  {
    ticker: "IOAC",
    title: "Innovative International Acquisition Corp.",
  },
  {
    ticker: "CFFE",
    title: "CF Acquisition Corp. VIII",
  },
  {
    ticker: "GSAQ",
    title: "Global Synergy Acquisition Corp.",
  },
  {
    ticker: "CRBU",
    title: "Caribou Biosciences, Inc.",
  },
  {
    ticker: "PEGR",
    title: "Project Energy Reimagined Acquisition Corp.",
  },
  {
    ticker: "EMO",
    title: "ClearBridge Energy Midstream Opportunity Fund Inc.",
  },
  {
    ticker: "ITEGY",
    title: "ITE Group plc/ADR",
  },
  {
    ticker: "SOR",
    title: "SOURCE CAPITAL INC /DE/",
  },
  {
    ticker: "BGR",
    title: "BlackRock Energy & Resources Trust",
  },
  {
    ticker: "GOBI",
    title: "Gobi Acquisition Corp.",
  },
  {
    ticker: "DLTH",
    title: "DULUTH HOLDINGS INC.",
  },
  {
    ticker: "CSTE",
    title: "Caesarstone Ltd.",
  },
  {
    ticker: "IPAX",
    title: "Inflection Point Acquisition Corp.",
  },
  {
    ticker: "HLAH",
    title: "Hamilton Lane Alliance Holdings I, Inc.",
  },
  {
    ticker: "MPX",
    title: "MARINE PRODUCTS CORP",
  },
  {
    ticker: "SSTI",
    title: "SHOTSPOTTER, INC",
  },
  {
    ticker: "IPVA",
    title: "InterPrivate II Acquisition Corp.",
  },
  {
    ticker: "JOAN",
    title: "JOANN Inc.",
  },
  {
    ticker: "FSSI",
    title: "Fortistar Sustainable Solutions Corp.",
  },
  {
    ticker: "CRU",
    title: "Crucible Acquisition Corp",
  },
  {
    ticker: "CLAS",
    title: "Class Acceleration Corp.",
  },
  {
    ticker: "FTCI",
    title: "FTC Solar, Inc.",
  },
  {
    ticker: "ASG",
    title: "LIBERTY ALL STAR GROWTH FUND INC.",
  },
  {
    ticker: "DNAA",
    title: "Social Capital Suvretta Holdings Corp. I",
  },
  {
    ticker: "QD",
    title: "Qudian Inc.",
  },
  {
    ticker: "NOA",
    title: "North American Construction Group Ltd.",
  },
  {
    ticker: "HPX",
    title: "HPX Corp.",
  },
  {
    ticker: "IACC",
    title: "ION Acquisition Corp 3 Ltd.",
  },
  {
    ticker: "UTMD",
    title: "UTAH MEDICAL PRODUCTS INC",
  },
  {
    ticker: "FEN",
    title: "FIRST TRUST ENERGY INCOME & GROWTH FUND",
  },
  {
    ticker: "EGAN",
    title: "EGAIN Corp",
  },
  {
    ticker: "PFTA",
    title: "PORTAGE FINTECH ACQUISITION CORP.",
  },
  {
    ticker: "VPCB",
    title: "VPC Impact Acquisition Holdings II",
  },
  {
    ticker: "FFNTF",
    title: "4Front Ventures Corp.",
  },
  {
    ticker: "GROY",
    title: "Gold Royalty Corp.",
  },
  {
    ticker: "OCUL",
    title: "OCULAR THERAPEUTIX, INC",
  },
  {
    ticker: "DNAC",
    title: "Social Capital Suvretta Holdings Corp. III",
  },
  {
    ticker: "PTSI",
    title: "PAM TRANSPORTATION SERVICES INC",
  },
  {
    ticker: "IDEX",
    title: "IDEANOMICS, INC.",
  },
  {
    ticker: "IBEX",
    title: "IBEX Ltd",
  },
  {
    ticker: "NPAB",
    title: "New Providence Acquisition Corp. II",
  },
  {
    ticker: "FLYA",
    title: "SOAR Technology Acquisition Corp.",
  },
  {
    ticker: "TSVT",
    title: "2seventy bio, Inc.",
  },
  {
    ticker: "SLVR",
    title: "SILVERspac Inc.",
  },
  {
    ticker: "BLDE",
    title: "Blade Air Mobility, Inc.",
  },
  {
    ticker: "TARS",
    title: "Tarsus Pharmaceuticals, Inc.",
  },
  {
    ticker: "PMX",
    title: "PIMCO MUNICIPAL INCOME FUND III",
  },
  {
    ticker: "RVAC",
    title: "Riverview Acquisition Corp.",
  },
  {
    ticker: "DSM",
    title: "BNY MELLON STRATEGIC MUNICIPAL BOND FUND, INC.",
  },
  {
    ticker: "RCLF",
    title: "Rosecliff Acquisition Corp I",
  },
  {
    ticker: "HMTV",
    title: "HEMISPHERE MEDIA GROUP, INC.",
  },
  {
    ticker: "LOKM",
    title: "Live Oak Mobility Acquisition Corp.",
  },
  {
    ticker: "ASAQ",
    title: "Atlantic Avenue Acquisition Corp",
  },
  {
    ticker: "ML",
    title: "MONEYLION INC.",
  },
  {
    ticker: "DNAD",
    title: "Social Capital Suvretta Holdings Corp. IV",
  },
  {
    ticker: "DNAB",
    title: "Social Capital Suvretta Holdings Corp. II",
  },
  {
    ticker: "GWRS",
    title: "Global Water Resources, Inc.",
  },
  {
    ticker: "TEKK",
    title: "Tekkorp Digital Acquisition Corp.",
  },
  {
    ticker: "XPOF",
    title: "Xponential Fitness, Inc.",
  },
  {
    ticker: "SMFR",
    title: "Sema4 Holdings Corp.",
  },
  {
    ticker: "ABSI",
    title: "Absci Corp",
  },
  {
    ticker: "PFL",
    title: "PIMCO INCOME STRATEGY FUND",
  },
  {
    ticker: "ATIP",
    title: "ATI Physical Therapy, Inc.",
  },
  {
    ticker: "MTAC",
    title: "MedTech Acquisition Corp",
  },
  {
    ticker: "RIDE",
    title: "Lordstown Motors Corp.",
  },
  {
    ticker: "WHF",
    title: "WhiteHorse Finance, Inc.",
  },
  {
    ticker: "ITHX",
    title: "ITHAX Acquisition Corp.",
  },
  {
    ticker: "MON",
    title: "Monument Circle Acquisition Corp.",
  },
  {
    ticker: "HCII",
    title: "Hudson Executive Investment Corp. II",
  },
  {
    ticker: "OIA",
    title: "Invesco Municipal Income Opportunities Trust",
  },
  {
    ticker: "PSHIF",
    title: "PetroShale Inc.",
  },
  {
    ticker: "SGSVF",
    title: "Sabina Gold & Silver Corp.",
  },
  {
    ticker: "SCAQ",
    title: "Stratim Cloud Acquisition Corp.",
  },
  {
    ticker: "CBNK",
    title: "Capital Bancorp Inc",
  },
  {
    ticker: "ACMR",
    title: "ACM Research, Inc.",
  },
  {
    ticker: "REAX",
    title: "Real Brokerage Inc",
  },
  {
    ticker: "HWEL",
    title: "Healthwell Acquisition Corp. I",
  },
  {
    ticker: "AFTR",
    title: "AfterNext HealthTech Acquisition Corp.",
  },
  {
    ticker: "RGLS",
    title: "Regulus Therapeutics Inc.",
  },
  {
    ticker: "QUOT",
    title: "Quotient Technology Inc.",
  },
  {
    ticker: "PLPC",
    title: "PREFORMED LINE PRODUCTS CO",
  },
  {
    ticker: "FOF",
    title: "Cohen & Steers Closed-End Opportunity Fund, Inc.",
  },
  {
    ticker: "ADAL",
    title: "Anthemis Digital Acquisitions I Corp",
  },
  {
    ticker: "MCBC",
    title: "MACATAWA BANK CORP",
  },
  {
    ticker: "HMLP",
    title: "Hoegh LNG Partners LP",
  },
  {
    ticker: "JMSB",
    title: "John Marshall Bancorp, Inc.",
  },
  {
    ticker: "APEI",
    title: "AMERICAN PUBLIC EDUCATION INC",
  },
  {
    ticker: "BLUE",
    title: "bluebird bio, Inc.",
  },
  {
    ticker: "JFU",
    title: "9F Inc.",
  },
  {
    ticker: "FGPR",
    title: "FERRELLGAS PARTNERS L P",
  },
  {
    ticker: "LEJU",
    title: "Leju Holdings Ltd",
  },
  {
    ticker: "OPTN",
    title: "OptiNose, Inc.",
  },
  {
    ticker: "LNDC",
    title: "LANDEC CORP \\CA\\",
  },
  {
    ticker: "ROOT",
    title: "Root, Inc.",
  },
  {
    ticker: "GLOP",
    title: "GasLog Partners LP",
  },
  {
    ticker: "PMF",
    title: "PIMCO MUNICIPAL INCOME FUND",
  },
  {
    ticker: "EDD",
    title: "Morgan Stanley Emerging Markets Domestic Debt Fund, Inc.",
  },
  {
    ticker: "PCSB",
    title: "PCSB Financial Corp",
  },
  {
    ticker: "PCQ",
    title: "PIMCO CALIFORNIA MUNICIPAL INCOME FUND",
  },
  {
    ticker: "HBCP",
    title: "HOME BANCORP, INC.",
  },
  {
    ticker: "FAMI",
    title: "Farmmi, Inc.",
  },
  {
    ticker: "NRAC",
    title: "Noble Rock Acquisition Corp",
  },
  {
    ticker: "GIA",
    title: "GigCapital5, Inc.",
  },
  {
    ticker: "CLIM",
    title: "Climate Real Impact Solutions II Acquisition Corp",
  },
  {
    ticker: "BKT",
    title: "BLACKROCK INCOME TRUST, INC.",
  },
  {
    ticker: "THCP",
    title: "Thunder Bridge Capital Partners IV, Inc.",
  },
  {
    ticker: "BWC",
    title: "Blue Whale Acquisition Corp I",
  },
  {
    ticker: "CLPT",
    title: "ClearPoint Neuro, Inc.",
  },
  {
    ticker: "TCBX",
    title: "Third Coast Bancshares, Inc.",
  },
  {
    ticker: "MEKA",
    title: "MELI Kaszek Pioneer Corp",
  },
  {
    ticker: "AEAC",
    title: "Authentic Equity Acquisition Corp.",
  },
  {
    ticker: "DMYS",
    title: "dMY Technology Group, Inc. VI",
  },
  {
    ticker: "GLO",
    title: "Clough Global Opportunities Fund",
  },
  {
    ticker: "OPT",
    title: "Opthea Ltd",
  },
  {
    ticker: "NWPX",
    title: "NORTHWEST PIPE CO",
  },
  {
    ticker: "INAQ",
    title: "Insight Acquisition Corp. /DE",
  },
  {
    ticker: "OGI",
    title: "ORGANIGRAM HOLDINGS INC.",
  },
  {
    ticker: "LIDR",
    title: "AEye, Inc.",
  },
  {
    ticker: "ALTG",
    title: "ALTA EQUIPMENT GROUP INC.",
  },
  {
    ticker: "PHCI",
    title: "Panamera Holdings Corp",
  },
  {
    ticker: "HIX",
    title: "WESTERN ASSET HIGH INCOME FUND II INC.",
  },
  {
    ticker: "BCBP",
    title: "BCB BANCORP INC",
  },
  {
    ticker: "XOS",
    title: "Xos, Inc.",
  },
  {
    ticker: "MGU",
    title: "Macquarie Global Infrastructure Total Return Fund Inc.",
  },
  {
    ticker: "BLBD",
    title: "Blue Bird Corp",
  },
  {
    ticker: "TK",
    title: "TEEKAY CORP",
  },
  {
    ticker: "MMAT",
    title: "META MATERIALS INC.",
  },
  {
    ticker: "TGB",
    title: "TASEKO MINES LTD",
  },
  {
    ticker: "RSI",
    title: "Rush Street Interactive, Inc.",
  },
  {
    ticker: "NCA",
    title: "NUVEEN CALIFORNIA MUNICIPAL VALUE FUND",
  },
  {
    ticker: "CIX",
    title: "COMPX INTERNATIONAL INC",
  },
  {
    ticker: "ACEV",
    title: "ACE Convergence Acquisition Corp.",
  },
  {
    ticker: "PGEN",
    title: "PRECIGEN, INC.",
  },
  {
    ticker: "GWII",
    title: "Good Works II Acquisition Corp.",
  },
  {
    ticker: "ITIC",
    title: "INVESTORS TITLE CO",
  },
  {
    ticker: "CBRG",
    title: "Chain Bridge I",
  },
  {
    ticker: "MCAA",
    title: "Mountain & Co. I Acquisition Corp.",
  },
  {
    ticker: "NR",
    title: "NEWPARK RESOURCES INC",
  },
  {
    ticker: "OMER",
    title: "OMEROS CORP",
  },
  {
    ticker: "SBII",
    title: "Sandbridge X2 Corp",
  },
  {
    ticker: "AHPA",
    title: "Avista Public Acquisition Corp. II",
  },
  {
    ticker: "OMIC",
    title: "Singular Genomics Systems, Inc.",
  },
  {
    ticker: "SBT",
    title: "Sterling Bancorp, Inc.",
  },
  {
    ticker: "SVFB",
    title: "SVF Investment Corp. 2",
  },
  {
    ticker: "CORS",
    title: "Corsair Partnering Corp",
  },
  {
    ticker: "DTRT",
    title: "DTRT Health Acquisition Corp.",
  },
  {
    ticker: "TOAC",
    title: "Talon 1 Acquisition Corp",
  },
  {
    ticker: "AKIC",
    title: "Sports Ventures Acquisition Corp.",
  },
  {
    ticker: "HOV",
    title: "HOVNANIAN ENTERPRISES INC",
  },
  {
    ticker: "PCCT",
    title: "Perception Capital Corp. II",
  },
  {
    ticker: "LXRX",
    title: "LEXICON PHARMACEUTICALS, INC.",
  },
  {
    ticker: "HTAQ",
    title: "Hunt Companies Acquisition Corp. I",
  },
  {
    ticker: "CPLP",
    title: "Capital Product Partners L.P.",
  },
  {
    ticker: "FRON",
    title: "Frontier Acquisition Corp.",
  },
  {
    ticker: "ZEUS",
    title: "OLYMPIC STEEL INC",
  },
  {
    ticker: "DSAQ",
    title: "Direct Selling Acquisition Corp.",
  },
  {
    ticker: "USCT",
    title: "TKB Critical Technologies 1",
  },
  {
    ticker: "ASA",
    title: "ASA Gold & Precious Metals Ltd",
  },
  {
    ticker: "SHCA",
    title: "Spindletop Health Acquisition Corp.",
  },
  {
    ticker: "WRAC",
    title: "Williams Rowland Acquisition Corp.",
  },
  {
    ticker: "BRBS",
    title: "BLUE RIDGE BANKSHARES, INC.",
  },
  {
    ticker: "EOT",
    title: "Eaton Vance National Municipal Opportunities Trust",
  },
  {
    ticker: "PHAT",
    title: "Phathom Pharmaceuticals, Inc.",
  },
  {
    ticker: "SCVX",
    title: "SCVX Corp.",
  },
  {
    ticker: "FIAC",
    title: "Focus Impact Acquisition Corp.",
  },
  {
    ticker: "IRRX",
    title: "INTEGRATED RAIL & RESOURCES ACQUISITION CORP",
  },
  {
    ticker: "SVNA",
    title: "7 Acquisition Corp",
  },
  {
    ticker: "RCFA",
    title: "RCF Acquisition Corp.",
  },
  {
    ticker: "MPRA",
    title: "Mercato Partners Acquisition Corp",
  },
  {
    ticker: "XFIN",
    title: "ExcelFin Acquisition Corp.",
  },
  {
    ticker: "SWAG",
    title: "Software Acquisition Group Inc. III",
  },
  {
    ticker: "LCW",
    title: "Learn CW Investment Corp",
  },
  {
    ticker: "FLAG",
    title: "First Light Acquisition Group, Inc.",
  },
  {
    ticker: "KAII",
    title: "Kismet Acquisition Two Corp.",
  },
  {
    ticker: "LHAA",
    title: "Lerer Hippeau Acquisition Corp.",
  },
  {
    ticker: "DPCS",
    title: "DP Cap Acquisition Corp I",
  },
  {
    ticker: "OOMA",
    title: "OOMA INC",
  },
  {
    ticker: "BIOT",
    title: "Biotech Acquisition Co",
  },
  {
    ticker: "SGC",
    title: "SUPERIOR GROUP OF COMPANIES, INC.",
  },
  {
    ticker: "KBAL",
    title: "KIMBALL INTERNATIONAL INC",
  },
  {
    ticker: "ASPC",
    title: "Alpha Capital Acquisition Co",
  },
  {
    ticker: "ARBG",
    title: "Aequi Acquisition Corp.",
  },
  {
    ticker: "NC",
    title: "NACCO INDUSTRIES INC",
  },
  {
    ticker: "LL",
    title: "LL Flooring Holdings, Inc.",
  },
  {
    ticker: "UNTY",
    title: "UNITY BANCORP INC /NJ/",
  },
  {
    ticker: "IQMD",
    title: "Intelligent Medicine Acquisition Corp.",
  },
  {
    ticker: "NOAC",
    title: "Natural Order Acquisition Corp.",
  },
  {
    ticker: "BHAC",
    title: "Crixus BH3 Acquisition Co",
  },
  {
    ticker: "PTIC",
    title: "PROPTECH INVESTMENT CORP. II",
  },
  {
    ticker: "ELLO",
    title: "Ellomay Capital Ltd.",
  },
  {
    ticker: "PAQC",
    title: "Provident Acquisition Corp.",
  },
  {
    ticker: "TRIS",
    title: "Tristar Acquisition I Corp.",
  },
  {
    ticker: "BLTS",
    title: "Bright Lights Acquisition Corp.",
  },
  {
    ticker: "WWAC",
    title: "Worldwide Webb Acquisition Corp.",
  },
  {
    ticker: "ITQ",
    title: "Itiquira Acquisition Corp.",
  },
  {
    ticker: "VII",
    title: "7GC & Co. Holdings Inc.",
  },
  {
    ticker: "ZWRK",
    title: "Z-Work Acquisition Corp.",
  },
  {
    ticker: "MCR",
    title: "MFS CHARTER INCOME TRUST",
  },
  {
    ticker: "FMCC",
    title: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    ticker: "GNAC",
    title: "Group Nine Acquisition Corp.",
  },
  {
    ticker: "SHAC",
    title: "SCP & CO Healthcare Acquisition Co",
  },
  {
    ticker: "FVT",
    title: "Fortress Value Acquisition Corp. III",
  },
  {
    ticker: "VERA",
    title: "Vera Therapeutics, Inc.",
  },
  {
    ticker: "PVBC",
    title: "Provident Bancorp, Inc. /MD/",
  },
  {
    ticker: "BOAS",
    title: "BOA Acquisition Corp.",
  },
  {
    ticker: "IXAQ",
    title: "IX Acquisition Corp.",
  },
  {
    ticker: "OSTR",
    title: "Oyster Enterprises Acquisition Corp.",
  },
  {
    ticker: "GPP",
    title: "Green Plains Partners LP",
  },
  {
    ticker: "VELO",
    title: "Velocity Acquisition Corp.",
  },
  {
    ticker: "TMAC",
    title: "Music Acquisition Corp",
  },
  {
    ticker: "PSTL",
    title: "Postal Realty Trust, Inc.",
  },
  {
    ticker: "PLM",
    title: "POLYMET MINING CORP",
  },
  {
    ticker: "OB",
    title: "Outbrain Inc.",
  },
  {
    ticker: "NEN",
    title: "NEW ENGLAND REALTY ASSOCIATES LIMITED PARTNERSHIP",
  },
  {
    ticker: "LDHA",
    title: "LDH Growth Corp I",
  },
  {
    ticker: "DOMA",
    title: "Doma Holdings, Inc.",
  },
  {
    ticker: "OSI",
    title: "Osiris Acquisition Corp.",
  },
  {
    ticker: "HYI",
    title: "Western Asset High Yield Defined Opportunity Fund Inc.",
  },
  {
    ticker: "PGSS",
    title: "Pegasus Digital Mobility Acquisition Corp.",
  },
  {
    ticker: "AEF",
    title: "ABERDEEN EMERGING MARKETS EQUITY INCOME FUND, INC.",
  },
  {
    ticker: "HWKZ",
    title: "Hawks Acquisition Corp",
  },
  {
    ticker: "AVNW",
    title: "AVIAT NETWORKS, INC.",
  },
  {
    ticker: "BRQS",
    title: "Borqs Technologies, Inc.",
  },
  {
    ticker: "ARDC",
    title: "Ares Dynamic Credit Allocation Fund, Inc.",
  },
  {
    ticker: "VLAT",
    title: "Valor Latitude Acquisition Corp.",
  },
  {
    ticker: "VCXA",
    title: "10X Capital Venture Acquisition Corp. II",
  },
  {
    ticker: "FPH",
    title: "Five Point Holdings, LLC",
  },
  {
    ticker: "LOCL",
    title: "Local Bounti Corporation/DE",
  },
  {
    ticker: "CGNT",
    title: "Cognyte Software Ltd.",
  },
  {
    ticker: "JRS",
    title: "NUVEEN REAL ESTATE INCOME FUND",
  },
  {
    ticker: "BNR",
    title: "Burning Rock Biotech Ltd",
  },
  {
    ticker: "OUST",
    title: "Ouster, Inc.",
  },
  {
    ticker: "HNST",
    title: "Honest Company, Inc.",
  },
  {
    ticker: "RDBX",
    title: "Redbox Entertainment Inc.",
  },
  {
    ticker: "BHR",
    title: "Braemar Hotels & Resorts Inc.",
  },
  {
    ticker: "MMT",
    title: "MFS MULTIMARKET INCOME TRUST",
  },
  {
    ticker: "HRTX",
    title: "HERON THERAPEUTICS, INC. /DE/",
  },
  {
    ticker: "PCB",
    title: "PCB BANCORP",
  },
  {
    ticker: "REV",
    title: "REVLON INC /DE/",
  },
  {
    ticker: "SPXX",
    title: "Nuveen S&P 500 Dynamic Overwrite Fund",
  },
  {
    ticker: "CZFS",
    title: "CITIZENS FINANCIAL SERVICES INC",
  },
  {
    ticker: "BNY",
    title: "BLACKROCK NEW YORK MUNICIPAL INCOME TRUST",
  },
  {
    ticker: "PLRX",
    title: "PLIANT THERAPEUTICS, INC.",
  },
  {
    ticker: "HUDI",
    title: "Huadi International Group Co., Ltd.",
  },
  {
    ticker: "USAK",
    title: "USA TRUCK INC",
  },
  {
    ticker: "SAR",
    title: "SARATOGA INVESTMENT CORP.",
  },
  {
    ticker: "PEI",
    title: "PENNSYLVANIA REAL ESTATE INVESTMENT TRUST",
  },
  {
    ticker: "MCI",
    title: "BARINGS CORPORATE INVESTORS",
  },
  {
    ticker: "EM",
    title: "Smart Share Global Ltd",
  },
  {
    ticker: "ORRF",
    title: "ORRSTOWN FINANCIAL SERVICES INC",
  },
  {
    ticker: "POWL",
    title: "POWELL INDUSTRIES INC",
  },
  {
    ticker: "AFAQ",
    title: "AF Acquisition Corp.",
  },
  {
    ticker: "BKCC",
    title: "BlackRock Capital Investment Corp",
  },
  {
    ticker: "EGGF",
    title: "EG Acquisition Corp.",
  },
  {
    ticker: "PULM",
    title: "Pulmatrix, Inc.",
  },
  {
    ticker: "KLDI",
    title: "KLDiscovery Inc.",
  },
  {
    ticker: "SHQA",
    title: "Shelter Acquisition Corp I",
  },
  {
    ticker: "ALTO",
    title: "Alto Ingredients, Inc.",
  },
  {
    ticker: "FRSG",
    title: "First Reserve Sustainable Growth Corp.",
  },
  {
    ticker: "GIW",
    title: "GigInternational1, Inc.",
  },
  {
    ticker: "GAMB",
    title: "Gambling.com Group Ltd",
  },
  {
    ticker: "FANH",
    title: "FANHUA INC.",
  },
  {
    ticker: "FZT",
    title: "FAST Acquisition Corp. II",
  },
  {
    ticker: "ADTH",
    title: "AdTheorent Holding Company, Inc.",
  },
  {
    ticker: "EQHA",
    title: "EQ Health Acquisition Corp.",
  },
  {
    ticker: "ERC",
    title: "ALLSPRING MULTI-SECTOR INCOME FUND",
  },
  {
    ticker: "DBVT",
    title: "DBV Technologies S.A.",
  },
  {
    ticker: "SKYA",
    title: "SKYDECK ACQUISITION CORP.",
  },
  {
    ticker: "NMG",
    title: "Nouveau Monde Graphite Inc.",
  },
  {
    ticker: "PIPP",
    title: "Pine Island Acquisition Corp.",
  },
  {
    ticker: "MULG",
    title: "MULIANG VIAGOO TECHNOLOGY, INC.",
  },
  {
    ticker: "EEX",
    title: "Emerald Holding, Inc.",
  },
  {
    ticker: "ALVR",
    title: "Allovir, Inc.",
  },
  {
    ticker: "GLHA",
    title: "Glass Houses Acquisition Corp.",
  },
  {
    ticker: "ALCO",
    title: "ALICO, INC.",
  },
  {
    ticker: "BKSY",
    title: "BlackSky Technology Inc.",
  },
  {
    ticker: "TWOA",
    title: "two",
  },
  {
    ticker: "PFHD",
    title: "Professional Holding Corp.",
  },
  {
    ticker: "XPAX",
    title: "XPAC Acquisition Corp.",
  },
  {
    ticker: "JGH",
    title: "Nuveen Global High Income Fund",
  },
  {
    ticker: "ACB",
    title: "AURORA CANNABIS INC",
  },
  {
    ticker: "PKE",
    title: "PARK AEROSPACE CORP",
  },
  {
    ticker: "RKLY",
    title: "Rockley Photonics Holdings Ltd",
  },
  {
    ticker: "AADI",
    title: "Aadi Bioscience, Inc.",
  },
  {
    ticker: "FOSL",
    title: "Fossil Group, Inc.",
  },
  {
    ticker: "FGBI",
    title: "First Guaranty Bancshares, Inc.",
  },
  {
    ticker: "EVER",
    title: "EverQuote, Inc.",
  },
  {
    ticker: "BNFT",
    title: "Benefitfocus, Inc.",
  },
  {
    ticker: "FBIZ",
    title: "FIRST BUSINESS FINANCIAL SERVICES, INC.",
  },
  {
    ticker: "TALK",
    title: "Talkspace, Inc.",
  },
  {
    ticker: "PRCH",
    title: "Porch Group, Inc.",
  },
  {
    ticker: "REFI",
    title: "Chicago Atlantic Real Estate Finance, Inc.",
  },
  {
    ticker: "GLRE",
    title: "GREENLIGHT CAPITAL RE, LTD.",
  },
  {
    ticker: "LCTX",
    title: "Lineage Cell Therapeutics, Inc.",
  },
  {
    ticker: "ESQ",
    title: "Esquire Financial Holdings, Inc.",
  },
  {
    ticker: "EGLX",
    title: "Enthusiast Gaming Holdings Inc. / Canada",
  },
  {
    ticker: "DTC",
    title: "Solo Brands, Inc.",
  },
  {
    ticker: "MLR",
    title: "MILLER INDUSTRIES INC /TN/",
  },
  {
    ticker: "INCR",
    title: "Intercure Ltd.",
  },
  {
    ticker: "MACA",
    title: "Moringa Acquisition Corp",
  },
  {
    ticker: "STRS",
    title: "STRATUS PROPERTIES INC",
  },
  {
    ticker: "AGIL",
    title: "AgileThought, Inc.",
  },
  {
    ticker: "REI",
    title: "RING ENERGY, INC.",
  },
  {
    ticker: "BCOV",
    title: "BRIGHTCOVE INC",
  },
  {
    ticker: "EYPT",
    title: "EyePoint Pharmaceuticals, Inc.",
  },
  {
    ticker: "CYDY",
    title: "CytoDyn Inc.",
  },
  {
    ticker: "ICTSF",
    title: "ICTS INTERNATIONAL N V",
  },
  {
    ticker: "SUPV",
    title: "Grupo Supervielle S.A.",
  },
  {
    ticker: "BGH",
    title: "BARINGS GLOBAL SHORT DURATION HIGH YIELD FUND",
  },
  {
    ticker: "MQT",
    title: "BLACKROCK MUNIYIELD QUALITY FUND II, INC.",
  },
  {
    ticker: "TRCA",
    title: "Twin Ridge Capital Acquisition Corp.",
  },
  {
    ticker: "ISLE",
    title: "Isleworth Healthcare Acquisition Corp.",
  },
  {
    ticker: "PRTH",
    title: "Priority Technology Holdings, Inc.",
  },
  {
    ticker: "BBW",
    title: "BUILD-A-BEAR WORKSHOP INC",
  },
  {
    ticker: "HFFG",
    title: "HF Foods Group Inc.",
  },
  {
    ticker: "PLBY",
    title: "PLBY Group, Inc.",
  },
  {
    ticker: "CMPX",
    title: "Compass Therapeutics, Inc.",
  },
  {
    ticker: "UFI",
    title: "UNIFI INC",
  },
  {
    ticker: "WAVC",
    title: "Waverley Capital Acquisition Corp. 1",
  },
  {
    ticker: "AVAC",
    title: "Avalon Acquisition Inc.",
  },
  {
    ticker: "FCT",
    title: "FIRST TRUST SENIOR FLOATING RATE INCOME FUND II",
  },
  {
    ticker: "ACNB",
    title: "ACNB CORP",
  },
  {
    ticker: "MPAA",
    title: "MOTORCAR PARTS AMERICA INC",
  },
  {
    ticker: "AFCG",
    title: "AFC Gamma, Inc.",
  },
  {
    ticker: "RNGR",
    title: "Ranger Energy Services, Inc.",
  },
  {
    ticker: "DWIN",
    title: "Delwinds Insurance Acquisition Corp.",
  },
  {
    ticker: "TEI",
    title: "TEMPLETON EMERGING MARKETS INCOME FUND",
  },
  {
    ticker: "FRW",
    title: "PWP Forward Acquisition Corp. I",
  },
  {
    ticker: "VRNA",
    title: "Verona Pharma plc",
  },
  {
    ticker: "ZYME",
    title: "Zymeworks Inc.",
  },
  {
    ticker: "VHAQ",
    title: "Viveon Health Acquisition Corp.",
  },
  {
    ticker: "ADAP",
    title: "Adaptimmune Therapeutics PLC",
  },
  {
    ticker: "FVCB",
    title: "FVCBankcorp, Inc.",
  },
  {
    ticker: "ENER",
    title: "ACCRETION ACQUISITION CORP.",
  },
  {
    ticker: "NUW",
    title: "Nuveen AMT-Free Municipal Value Fund",
  },
  {
    ticker: "ACBM",
    title: "ACRO BIOMEDICAL CO., LTD.",
  },
  {
    ticker: "DLCA",
    title: "Deep Lake Capital Acquisition Corp.",
  },
  {
    ticker: "EDNC",
    title: "Endurance Acquisition Corp.",
  },
  {
    ticker: "PBFS",
    title: "Pioneer Bancorp, Inc./MD",
  },
  {
    ticker: "EHTH",
    title: "eHealth, Inc.",
  },
  {
    ticker: "MYFW",
    title: "First Western Financial Inc",
  },
  {
    ticker: "TGA",
    title: "TRANSGLOBE ENERGY CORP",
  },
  {
    ticker: "FST",
    title: "FAST Acquisition Corp.",
  },
  {
    ticker: "TBLT",
    title: "Toughbuilt Industries, Inc",
  },
  {
    ticker: "PCYO",
    title: "PURE CYCLE CORP",
  },
  {
    ticker: "OCN",
    title: "OCWEN FINANCIAL CORP",
  },
  {
    ticker: "WQGA",
    title: "World Quantum Growth Acquisition Corp.",
  },
  {
    ticker: "GHAC",
    title: "Gaming & Hospitality Acquisition Corp.",
  },
  {
    ticker: "MLAI",
    title: "McLaren Technology Acquisition Corp.",
  },
  {
    ticker: "ALPN",
    title: "ALPINE IMMUNE SCIENCES, INC.",
  },
  {
    ticker: "HPLT",
    title: "Home Plate Acquisition Corp",
  },
  {
    ticker: "PHYT",
    title: "Pyrophyte Acquisition Corp.",
  },
  {
    ticker: "BITE",
    title: "Bite Acquisition Corp.",
  },
  {
    ticker: "ICVX",
    title: "Icosavax, Inc.",
  },
  {
    ticker: "VPV",
    title: "Invesco Pennsylvania Value Municipal Income Trust",
  },
  {
    ticker: "TRUE",
    title: "TrueCar, Inc.",
  },
  {
    ticker: "IIF",
    title: "MORGAN STANLEY INDIA INVESTMENT FUND, INC.",
  },
  {
    ticker: "RCHG",
    title: "Recharge Acquisition Corp.",
  },
  {
    ticker: "SMIH",
    title: "Summit Healthcare Acquisition Corp.",
  },
  {
    ticker: "BGT",
    title: "BLACKROCK FLOATING RATE INCOME TRUST",
  },
  {
    ticker: "GVCI",
    title: "Green Visor Financial Technology Acquisition Corp I",
  },
  {
    ticker: "INVE",
    title: "Identiv, Inc.",
  },
  {
    ticker: "PRLD",
    title: "Prelude Therapeutics Inc",
  },
  {
    ticker: "ARTE",
    title: "Artemis Strategic Investment Corp",
  },
  {
    ticker: "PKBK",
    title: "PARKE BANCORP, INC.",
  },
  {
    ticker: "APAC",
    title: "StoneBridge Acquisition Corp.",
  },
  {
    ticker: "CATO",
    title: "CATO CORP",
  },
  {
    ticker: "RDVT",
    title: "Red Violet, Inc.",
  },
  {
    ticker: "CRZN",
    title: "Corazon Capital V838 Monoceros Corp",
  },
  {
    ticker: "DALS",
    title: "DA32 Life Science Tech Acquisition Corp.",
  },
  {
    ticker: "TDUP",
    title: "ThredUp Inc.",
  },
  {
    ticker: "PFSW",
    title: "PFSWEB INC",
  },
  {
    ticker: "SRSA",
    title: "Sarissa Capital Acquisition Corp.",
  },
  {
    ticker: "CDAQ",
    title: "Compass Digital Acquisition Corp.",
  },
  {
    ticker: "PWP",
    title: "Perella Weinberg Partners",
  },
  {
    ticker: "PSF",
    title: "Cohen & Steers Select Preferred & Income Fund, Inc.",
  },
  {
    ticker: "MUE",
    title: "BLACKROCK MUNIHOLDINGS QUALITY FUND II, INC.",
  },
  {
    ticker: "SUNL",
    title: "Sunlight Financial Holdings Inc.",
  },
  {
    ticker: "QFTA",
    title: "Quantum FinTech Acquisition Corp",
  },
  {
    ticker: "LOCC",
    title: "Live Oak Crestview Climate Acquisition Corp.",
  },
  {
    ticker: "CNLHN",
    title: "CONNECTICUT LIGHT & POWER CO",
  },
  {
    ticker: "NRIM",
    title: "NORTHRIM BANCORP INC",
  },
  {
    ticker: "VLD",
    title: "Velo3D, Inc.",
  },
  {
    ticker: "THRN",
    title: "Thorne Healthtech, Inc.",
  },
  {
    ticker: "BWFG",
    title: "Bankwell Financial Group, Inc.",
  },
  {
    ticker: "LCUT",
    title: "LIFETIME BRANDS, INC",
  },
  {
    ticker: "DHX",
    title: "DHI GROUP, INC.",
  },
  {
    ticker: "RCKY",
    title: "ROCKY BRANDS, INC.",
  },
  {
    ticker: "BGFV",
    title: "BIG 5 SPORTING GOODS Corp",
  },
  {
    ticker: "AMPY",
    title: "Amplify Energy Corp.",
  },
  {
    ticker: "ORIA",
    title: "Orion Biotech Opportunities Corp.",
  },
  {
    ticker: "FIF",
    title: "FIRST TRUST ENERGY INFRASTRUCTURE FUND",
  },
  {
    ticker: "MNMD",
    title: "Mind Medicine (MindMed) Inc.",
  },
  {
    ticker: "AXTI",
    title: "AXT INC",
  },
  {
    ticker: "OPA",
    title: "Magnum Opus Acquisition Ltd",
  },
  {
    ticker: "STKS",
    title: "ONE Group Hospitality, Inc.",
  },
  {
    ticker: "ACIU",
    title: "AC Immune SA",
  },
  {
    ticker: "CMTL",
    title: "COMTECH TELECOMMUNICATIONS CORP /DE/",
  },
  {
    ticker: "LIAN",
    title: "LianBio",
  },
  {
    ticker: "BGSX",
    title: "Build Acquisition Corp.",
  },
  {
    ticker: "TBSA",
    title: "TB SA Acquisition Corp",
  },
  {
    ticker: "MVT",
    title: "BLACKROCK MUNIVEST FUND II, INC.",
  },
  {
    ticker: "EMBK",
    title: "Embark Technology, Inc.",
  },
  {
    ticker: "BELFA",
    title: "BEL FUSE INC /NJ",
  },
  {
    ticker: "SEDA",
    title: "SDCL EDGE Acquisition Corp",
  },
  {
    ticker: "HRZN",
    title: "Horizon Technology Finance Corp",
  },
  {
    ticker: "STRO",
    title: "SUTRO BIOPHARMA, INC.",
  },
  {
    ticker: "OPRT",
    title: "Oportun Financial Corp",
  },
  {
    ticker: "WEYS",
    title: "WEYCO GROUP INC",
  },
  {
    ticker: "RLYB",
    title: "Rallybio Corp",
  },
  {
    ticker: "KALV",
    title: "KalVista Pharmaceuticals, Inc.",
  },
  {
    ticker: "LMNR",
    title: "Limoneira CO",
  },
  {
    ticker: "FREE",
    title: "Whole Earth Brands, Inc.",
  },
  {
    ticker: "NATH",
    title: "NATHANS FAMOUS, INC.",
  },
  {
    ticker: "DMRC",
    title: "Digimarc CORP",
  },
  {
    ticker: "CATN",
    title: "CAT9 Group Inc.",
  },
  {
    ticker: "DBL",
    title: "DoubleLine Opportunistic Credit Fund",
  },
  {
    ticker: "ASC",
    title: "Ardmore Shipping Corp",
  },
  {
    ticker: "WHEN",
    title: "WORLD HEALTH ENERGY HOLDINGS, INC.",
  },
  {
    ticker: "BMAC",
    title: "Black Mountain Acquisition Corp.",
  },
  {
    ticker: "VFF",
    title: "Village Farms International, Inc.",
  },
  {
    ticker: "UTI",
    title: "UNIVERSAL TECHNICAL INSTITUTE INC",
  },
  {
    ticker: "SOPH",
    title: "SOPHiA GENETICS SA",
  },
  {
    ticker: "KIO",
    title: "KKR Income Opportunities Fund",
  },
  {
    ticker: "NOTV",
    title: "Inotiv, Inc.",
  },
  {
    ticker: "IMAQ",
    title: "International Media Acquisition Corp.",
  },
  {
    ticker: "CONN",
    title: "CONNS INC",
  },
  {
    ticker: "BKN",
    title: "BLACKROCK INVESTMENT QUALITY MUNICIPAL TRUST, INC.",
  },
  {
    ticker: "DMB",
    title: "BNY Mellon Municipal Bond Infrastructure Fund, Inc.",
  },
  {
    ticker: "PLNHF",
    title: "Planet 13 Holdings Inc.",
  },
  {
    ticker: "KLTR",
    title: "KALTURA INC",
  },
  {
    ticker: "NEPT",
    title: "Neptune Wellness Solutions Inc.",
  },
  {
    ticker: "XOMA",
    title: "XOMA Corp",
  },
  {
    ticker: "SRG",
    title: "Seritage Growth Properties",
  },
  {
    ticker: "VCKA",
    title: "Vickers Vantage Corp. I",
  },
  {
    ticker: "GACQ",
    title: "Global Consumer Acquisition Corp",
  },
  {
    ticker: "CIAN",
    title: "Cian PLC",
  },
  {
    ticker: "CBAY",
    title: "CymaBay Therapeutics, Inc.",
  },
  {
    ticker: "IVA",
    title: "Inventiva S.A.",
  },
  {
    ticker: "TMC",
    title: "TMC the metals Co Inc.",
  },
  {
    ticker: "CYBE",
    title: "CYBEROPTICS CORP",
  },
  {
    ticker: "FRBK",
    title: "REPUBLIC FIRST BANCORP INC",
  },
  {
    ticker: "IPHA",
    title: "Innate Pharma SA",
  },
  {
    ticker: "EVM",
    title: "EATON VANCE CALIFORNIA MUNICIPAL BOND FUND",
  },
  {
    ticker: "CURO",
    title: "CURO Group Holdings Corp.",
  },
  {
    ticker: "UNG",
    title: "United States Natural Gas Fund, LP",
  },
  {
    ticker: "NUO",
    title: "NUVEEN OHIO QUALITY MUNICIPAL INCOME FUND",
  },
  {
    ticker: "NCZ",
    title: "Virtus AllianzGI Convertible & Income Fund II",
  },
  {
    ticker: "PTMN",
    title: "Portman Ridge Finance Corp",
  },
  {
    ticker: "TRON",
    title: "CORNER GROWTH ACQUISITION CORP. 2",
  },
  {
    ticker: "URG",
    title: "UR-ENERGY INC",
  },
  {
    ticker: "VRDN",
    title: "Viridian Therapeutics, Inc.\\DE",
  },
  {
    ticker: "BARK",
    title: "Bark, Inc.",
  },
  {
    ticker: "TSI",
    title: "TCW STRATEGIC INCOME FUND INC",
  },
  {
    ticker: "SKYT",
    title: "SkyWater Technology, Inc",
  },
  {
    ticker: "SEOVF",
    title: "SERNOVA CORP.",
  },
  {
    ticker: "JYNT",
    title: "JOINT Corp",
  },
  {
    ticker: "WIA",
    title: "WESTERN ASSET INFLATION-LINKED INCOME FUND",
  },
  {
    ticker: "ISTR",
    title: "Investar Holding Corp",
  },
  {
    ticker: "VNTR",
    title: "Venator Materials PLC",
  },
  {
    ticker: "OTLK",
    title: "Outlook Therapeutics, Inc.",
  },
  {
    ticker: "UONE",
    title: "URBAN ONE, INC.",
  },
  {
    ticker: "GNE",
    title: "Genie Energy Ltd.",
  },
  {
    ticker: "MN",
    title: "Manning & Napier, Inc.",
  },
  {
    ticker: "VYGR",
    title: "Voyager Therapeutics, Inc.",
  },
  {
    ticker: "AVEO",
    title: "AVEO PHARMACEUTICALS, INC.",
  },
  {
    ticker: "NXP",
    title: "NUVEEN SELECT TAX FREE INCOME PORTFOLIO",
  },
  {
    ticker: "PBAX",
    title: "PHOENIX BIOTECH ACQUISITION CORP.",
  },
  {
    ticker: "PCK",
    title: "PIMCO CALIFORNIA MUNICIPAL INCOME FUND II",
  },
  {
    ticker: "HUT",
    title: "HUT 8 MINING CORP.",
  },
  {
    ticker: "PANA",
    title: "Panacea Acquisition Corp. II",
  },
  {
    ticker: "PANL",
    title: "Pangaea Logistics Solutions Ltd.",
  },
  {
    ticker: "VMGA",
    title: "VMG Consumer Acquisition Corp.",
  },
  {
    ticker: "VTDRF",
    title: "VANTAGE DRILLING INTERNATIONAL",
  },
  {
    ticker: "ODC",
    title: "Oil-Dri Corp of America",
  },
  {
    ticker: "MAQC",
    title: "Maquia Capital Acquisition Corp",
  },
  {
    ticker: "VERI",
    title: "Veritone, Inc.",
  },
  {
    ticker: "SILC",
    title: "SILICOM LTD.",
  },
  {
    ticker: "TKNO",
    title: "Alpha Teknova, Inc.",
  },
  {
    ticker: "REAL",
    title: "TheRealReal, Inc.",
  },
  {
    ticker: "MOLN",
    title: "MOLECULAR PARTNERS AG",
  },
  {
    ticker: "NETI",
    title: "ENETI INC.",
  },
  {
    ticker: "SWKH",
    title: "SWK Holdings Corp",
  },
  {
    ticker: "GPJA",
    title: "GEORGIA POWER CO",
  },
  {
    ticker: "SCU",
    title: "Sculptor Capital Management, Inc.",
  },
  {
    ticker: "GRWG",
    title: "GrowGeneration Corp.",
  },
  {
    ticker: "CWCO",
    title: "Consolidated Water Co. Ltd.",
  },
  {
    ticker: "WLFC",
    title: "WILLIS LEASE FINANCE CORP",
  },
  {
    ticker: "FUND",
    title: "SPROTT FOCUS TRUST INC.",
  },
  {
    ticker: "ACAC",
    title: "Acri Capital Acquisition Corp",
  },
  {
    ticker: "NPV",
    title: "NUVEEN VIRGINIA QUALITY MUNICIPAL INCOME FUND",
  },
  {
    ticker: "FDBC",
    title: "FIDELITY D & D BANCORP INC",
  },
  {
    ticker: "TNYA",
    title: "Tenaya Therapeutics, Inc.",
  },
  {
    ticker: "AJX",
    title: "Great Ajax Corp.",
  },
  {
    ticker: "ESKYF",
    title: "ESKAY MINING CORP",
  },
  {
    ticker: "ACTG",
    title: "ACACIA RESEARCH CORP",
  },
  {
    ticker: "CPSS",
    title: "CONSUMER PORTFOLIO SERVICES, INC.",
  },
  {
    ticker: "ACAQ",
    title: "Athena Consumer Acquisition Corp.",
  },
  {
    ticker: "ONDS",
    title: "Ondas Holdings Inc.",
  },
  {
    ticker: "ARL",
    title: "AMERICAN REALTY INVESTORS INC",
  },
  {
    ticker: "BCML",
    title: "BayCom Corp",
  },
  {
    ticker: "YJ",
    title: "Yunji Inc.",
  },
  {
    ticker: "FSBW",
    title: "FS Bancorp, Inc.",
  },
  {
    ticker: "AIP",
    title: "Arteris, Inc.",
  },
  {
    ticker: "FDMT",
    title: "4D Molecular Therapeutics, Inc.",
  },
  {
    ticker: "SCD",
    title: "LMP CAPITAL & INCOME FUND INC.",
  },
  {
    ticker: "MFM",
    title: "MFS MUNICIPAL INCOME TRUST",
  },
  {
    ticker: "FINS",
    title: "Angel Oak Financial Strategies Income Term Trust",
  },
  {
    ticker: "RMBL",
    title: "RumbleOn, Inc.",
  },
  {
    ticker: "MEAC",
    title: "Mercury Ecommerce Acquisition Corp",
  },
  {
    ticker: "MOGU",
    title: "MOGU Inc.",
  },
  {
    ticker: "SCM",
    title: "Stellus Capital Investment Corp",
  },
  {
    ticker: "RNER",
    title: "Mount Rainier Acquisition Corp.",
  },
  {
    ticker: "SWSS",
    title: "Springwater Special Situations Corp.",
  },
  {
    ticker: "RBTK",
    title: "ZHEN DING RESOURCES INC.",
  },
  {
    ticker: "AENZ",
    title: "AENZA S.A.A.",
  },
  {
    ticker: "USCB",
    title: "USCB FINANCIAL HOLDINGS, INC.",
  },
  {
    ticker: "VOXX",
    title: "VOXX International Corp",
  },
  {
    ticker: "ETX",
    title: "Eaton Vance Municipal Income 2028 Term Trust",
  },
  {
    ticker: "ALDX",
    title: "Aldeyra Therapeutics, Inc.",
  },
  {
    ticker: "VKTX",
    title: "Viking Therapeutics, Inc.",
  },
  {
    ticker: "THRX",
    title: "Theseus Pharmaceuticals, Inc.",
  },
  {
    ticker: "NN",
    title: "NEXTNAV INC.",
  },
  {
    ticker: "TLYS",
    title: "TILLY'S, INC.",
  },
  {
    ticker: "LQDA",
    title: "Liquidia Corp",
  },
  {
    ticker: "CNTY",
    title: "CENTURY CASINOS INC /CO/",
  },
  {
    ticker: "EDAP",
    title: "EDAP TMS SA",
  },
  {
    ticker: "KBRS",
    title: "KBS Real Estate Investment Trust II, Inc.",
  },
  {
    ticker: "BRPM",
    title: "B. Riley Principal 150 Merger Corp.",
  },
  {
    ticker: "TNP",
    title: "TSAKOS ENERGY NAVIGATION LTD",
  },
  {
    ticker: "GTHX",
    title: "G1 Therapeutics, Inc.",
  },
  {
    ticker: "VAXX",
    title: "Vaxxinity, Inc.",
  },
  {
    ticker: "TROO",
    title: "Troops, Inc. /Cayman Islands/",
  },
  {
    ticker: "WRN",
    title: "Western Copper & Gold Corp",
  },
  {
    ticker: "CENQ",
    title: "CENAQ Energy Corp.",
  },
  {
    ticker: "MIMO",
    title: "Airspan Networks Holdings Inc.",
  },
  {
    ticker: "UROY",
    title: "Uranium Royalty Corp.",
  },
  {
    ticker: "OXUS",
    title: "Oxus Acquisition Corp.",
  },
  {
    ticker: "VTAQ",
    title: "Ventoux CCM Acquisition Corp.",
  },
  {
    ticker: "TPBA",
    title: "TPB Acquisition Corp I",
  },
  {
    ticker: "SNCE",
    title: "Science 37 Holdings, Inc.",
  },
  {
    ticker: "NVEC",
    title: "NVE CORP /NEW/",
  },
  {
    ticker: "CHMG",
    title: "CHEMUNG FINANCIAL CORP",
  },
  {
    ticker: "WILC",
    title: "G WILLI FOOD INTERNATIONAL LTD",
  },
  {
    ticker: "LNFA",
    title: "L&F Acquisition Corp.",
  },
  {
    ticker: "KRON",
    title: "Kronos Bio, Inc.",
  },
  {
    ticker: "EIGR",
    title: "Eiger BioPharmaceuticals, Inc.",
  },
  {
    ticker: "GAPA",
    title: "G&P Acquisition Corp.",
  },
  {
    ticker: "DIBS",
    title: "1stdibs.com, Inc.",
  },
  {
    ticker: "PRVB",
    title: "Provention Bio, Inc.",
  },
  {
    ticker: "CLAQ",
    title: "cleantech Acquisition Corp.",
  },
  {
    ticker: "ISAA",
    title: "Iron Spark I Inc.",
  },
  {
    ticker: "DSAC",
    title: "Duddell Street Acquisition Corp.",
  },
  {
    ticker: "PMVC",
    title: "PMV Consumer Acquisition Corp.",
  },
  {
    ticker: "ROC",
    title: "ROC Energy Acquisition Corp.",
  },
  {
    ticker: "THAC",
    title: "Thrive Acquisition Corp",
  },
  {
    ticker: "ARCK",
    title: "Arbor Rapha Capital Bioholdings Corp. I",
  },
  {
    ticker: "PEAR",
    title: "Pear Therapeutics, Inc.",
  },
  {
    ticker: "DXLG",
    title: "DESTINATION XL GROUP, INC.",
  },
  {
    ticker: "CECE",
    title: "CECO ENVIRONMENTAL CORP",
  },
  {
    ticker: "ASAX",
    title: "Astrea Acquisition Corp.",
  },
  {
    ticker: "GNUS",
    title: "Genius Brands International, Inc.",
  },
  {
    ticker: "FNVT",
    title: "Finnovate Acquisition Corp.",
  },
  {
    ticker: "JCE",
    title: "Nuveen Core Equity Alpha Fund",
  },
  {
    ticker: "VLTA",
    title: "Volta Inc.",
  },
  {
    ticker: "NYXH",
    title: "Nyxoah SA",
  },
  {
    ticker: "BZFD",
    title: "BuzzFeed, Inc.",
  },
  {
    ticker: "VMD",
    title: "VIEMED HEALTHCARE, INC.",
  },
  {
    ticker: "BRIV",
    title: "B. Riley Principal 250 Merger Corp.",
  },
  {
    ticker: "INKA",
    title: "KLUDEIN I ACQUISITION CORP",
  },
  {
    ticker: "AFAC",
    title: "Arena Fortify Acquisition Corp.",
  },
  {
    ticker: "ATOM",
    title: "Atomera Inc",
  },
  {
    ticker: "MTA",
    title: "Metalla Royalty & Streaming Ltd.",
  },
  {
    ticker: "CVLY",
    title: "CODORUS VALLEY BANCORP INC",
  },
  {
    ticker: "APN",
    title: "Apeiron Capital Investment Corp.",
  },
  {
    ticker: "MXF",
    title: "MEXICO FUND INC",
  },
  {
    ticker: "GTII",
    title: "GLOBAL TECH INDUSTRIES GROUP, INC.",
  },
  {
    ticker: "CRECF",
    title: "Critical Elements Lithium Corp",
  },
  {
    ticker: "MAPS",
    title: "WM TECHNOLOGY, INC.",
  },
  {
    ticker: "NATR",
    title: "NATURES SUNSHINE PRODUCTS INC",
  },
  {
    ticker: "PGRW",
    title: "Progress Acquisition Corp.",
  },
  {
    ticker: "INSE",
    title: "Inspired Entertainment, Inc.",
  },
  {
    ticker: "OBT",
    title: "Orange County Bancorp, Inc. /DE/",
  },
  {
    ticker: "DUNE",
    title: "Dune Acquisition Corp",
  },
  {
    ticker: "RIGL",
    title: "RIGEL PHARMACEUTICALS INC",
  },
  {
    ticker: "EMP",
    title: "ENTERGY MISSISSIPPI, LLC",
  },
  {
    ticker: "MHI",
    title: "PIONEER MUNICIPAL HIGH INCOME FUND, INC.",
  },
  {
    ticker: "OPP",
    title: "RiverNorth/DoubleLine Strategic Opportunity Fund, Inc.",
  },
  {
    ticker: "KSI",
    title: "Kadem Sustainable Impact Corp",
  },
  {
    ticker: "TSBK",
    title: "TIMBERLAND BANCORP INC",
  },
  {
    ticker: "PHIC",
    title: "Population Health Investment Co., Inc.",
  },
  {
    ticker: "WISM",
    title: "Wiseman Global Ltd",
  },
  {
    ticker: "NDLS",
    title: "NOODLES & Co",
  },
  {
    ticker: "HGLB",
    title: "HIGHLAND GLOBAL ALLOCATION FUND",
  },
  {
    ticker: "VTN",
    title: "Invesco Trust for Investment Grade New York Municipals",
  },
  {
    ticker: "IMPL",
    title: "IMPEL PHARMACEUTICALS INC",
  },
  {
    ticker: "LCNB",
    title: "LCNB CORP",
  },
  {
    ticker: "CRNT",
    title: "CERAGON NETWORKS LTD",
  },
  {
    ticker: "NBH",
    title: "NEUBERGER BERMAN MUNICIPAL FUND INC.",
  },
  {
    ticker: "SEV",
    title: "Sono Group N.V.",
  },
  {
    ticker: "SPNE",
    title: "SeaSpine Holdings Corp",
  },
  {
    ticker: "SPTK",
    title: "SportsTek Acquisition Corp.",
  },
  {
    ticker: "NGC",
    title: "Northern Genesis Acquisition Corp. III",
  },
  {
    ticker: "MIXT",
    title: "MiX Telematics Ltd",
  },
  {
    ticker: "MAV",
    title: "PIONEER MUNICIPAL HIGH INCOME ADVANTAGE FUND, INC.",
  },
  {
    ticker: "CLBR",
    title: "Colombier Acquisition Corp.",
  },
  {
    ticker: "KORE",
    title: "KORE Group Holdings, Inc.",
  },
  {
    ticker: "ACV",
    title: "Virtus AllianzGI Diversified Income & Convertible Fund",
  },
  {
    ticker: "RANI",
    title: "Rani Therapeutics Holdings, Inc.",
  },
  {
    ticker: "XCUR",
    title: "EXICURE, INC.",
  },
  {
    ticker: "GFOR",
    title: "Graf Acquisition Corp. IV",
  },
  {
    ticker: "TCFC",
    title: "COMMUNITY FINANCIAL CORP /MD/",
  },
  {
    ticker: "VBIV",
    title: "VBI Vaccines Inc/BC",
  },
  {
    ticker: "CBAN",
    title: "COLONY BANKCORP INC",
  },
  {
    ticker: "PHT",
    title: "PIONEER HIGH INCOME FUND, INC.",
  },
  {
    ticker: "IHIT",
    title: "INVESCO HIGH INCOME 2023 TARGET TERM FUND",
  },
  {
    ticker: "XFLT",
    title: "XAI Octagon Floating Rate & Alternative Income Term Trust",
  },
  {
    ticker: "BITF",
    title: "Bitfarms Ltd",
  },
  {
    ticker: "VECT",
    title: "VectivBio Holding AG",
  },
  {
    ticker: "CIA",
    title: "CITIZENS, INC.",
  },
  {
    ticker: "VSTM",
    title: "Verastem, Inc.",
  },
  {
    ticker: "PRPL",
    title: "Purple Innovation, Inc.",
  },
  {
    ticker: "EZRG",
    title: "EZRaider Co.",
  },
  {
    ticker: "INSG",
    title: "INSEEGO CORP.",
  },
  {
    ticker: "BSAQ",
    title: "Black Spade Acquisition Co",
  },
  {
    ticker: "GDO",
    title: "WESTERN ASSET GLOBAL CORPORATE DEFINED OPPORTUNITY FUND INC.",
  },
  {
    ticker: "DBB",
    title: "INVESCO DB BASE METALS FUND",
  },
  {
    ticker: "AACI",
    title: "Armada Acquisition Corp. I",
  },
  {
    ticker: "EMX",
    title: "EMX Royalty Corp",
  },
  {
    ticker: "WEAV",
    title: "Weave Communications, Inc.",
  },
  {
    ticker: "HSAQ",
    title: "Health Sciences Acquisitions Corp 2",
  },
  {
    ticker: "ZEV",
    title: "Lightning eMotors, Inc.",
  },
  {
    ticker: "ENJ",
    title: "ENTERGY NEW ORLEANS, LLC",
  },
  {
    ticker: "ZOM",
    title: "Zomedica Corp.",
  },
  {
    ticker: "FTF",
    title: "FRANKLIN LTD DURATION INCOME TRUST",
  },
  {
    ticker: "PINE",
    title: "Alpine Income Property Trust, Inc.",
  },
  {
    ticker: "SAMA",
    title: "Schultze Special Purpose Acquisition Corp. II",
  },
  {
    ticker: "BSVN",
    title: "Bank7 Corp.",
  },
  {
    ticker: "AHT",
    title: "ASHFORD HOSPITALITY TRUST INC",
  },
  {
    ticker: "EFL",
    title: "Eaton Vance Floating-Rate 2022 Target Term Trust",
  },
  {
    ticker: "HEPS",
    title: "D-MARKET Electronic Services & Trading",
  },
  {
    ticker: "GATO",
    title: "Gatos Silver, Inc.",
  },
  {
    ticker: "ATLO",
    title: "AMES NATIONAL CORP",
  },
  {
    ticker: "RCMT",
    title: "RCM TECHNOLOGIES, INC.",
  },
  {
    ticker: "KMDA",
    title: "KAMADA LTD",
  },
  {
    ticker: "CCRD",
    title: "CoreCard Corp",
  },
  {
    ticker: "CTV",
    title: "Innovid Corp.",
  },
  {
    ticker: "THTX",
    title: "Theratechnologies Inc.",
  },
  {
    ticker: "AUTL",
    title: "Autolus Therapeutics plc",
  },
  {
    ticker: "AFT",
    title: "Apollo Senior Floating Rate Fund Inc.",
  },
  {
    ticker: "SSBK",
    title: "Southern States Bancshares, Inc.",
  },
  {
    ticker: "ATXG",
    title: "ADDENTAX GROUP CORP.",
  },
  {
    ticker: "PPTA",
    title: "PERPETUA RESOURCES CORP.",
  },
  {
    ticker: "MRCC",
    title: "MONROE CAPITAL Corp",
  },
  {
    ticker: "PRPH",
    title: "ProPhase Labs, Inc.",
  },
  {
    ticker: "BYRN",
    title: "Byrna Technologies Inc.",
  },
  {
    ticker: "INFU",
    title: "InfuSystem Holdings, Inc",
  },
  {
    ticker: "FULC",
    title: "Fulcrum Therapeutics, Inc.",
  },
  {
    ticker: "DLA",
    title: "DELTA APPAREL, INC",
  },
  {
    ticker: "GGT",
    title: "GABELLI MULTIMEDIA TRUST INC.",
  },
  {
    ticker: "LGI",
    title: "LAZARD GLOBAL TOTAL RETURN & INCOME FUND INC",
  },
  {
    ticker: "WIMI",
    title: "WiMi Hologram Cloud Inc.",
  },
  {
    ticker: "FATH",
    title: "Fathom Digital Manufacturing Corp",
  },
  {
    ticker: "OWLT",
    title: "Owlet, Inc.",
  },
  {
    ticker: "IREN",
    title: "Iris Energy Ltd",
  },
  {
    ticker: "FXE",
    title: "Invesco CurrencyShares Euro Trust",
  },
  {
    ticker: "XAIR",
    title: "Beyond Air, Inc.",
  },
  {
    ticker: "MUX",
    title: "McEwen Mining Inc.",
  },
  {
    ticker: "BNNR",
    title: "Banner Acquisition Corp.",
  },
  {
    ticker: "NWFL",
    title: "NORWOOD FINANCIAL CORP",
  },
  {
    ticker: "NKSH",
    title: "NATIONAL BANKSHARES INC",
  },
  {
    ticker: "JAQC",
    title: "Jupiter Acquisition Corp",
  },
  {
    ticker: "LOOP",
    title: "Loop Industries, Inc.",
  },
  {
    ticker: "RENT",
    title: "Rent the Runway, Inc.",
  },
  {
    ticker: "OSUR",
    title: "ORASURE TECHNOLOGIES INC",
  },
  {
    ticker: "GOCO",
    title: "GoHealth, Inc.",
  },
  {
    ticker: "AGS",
    title: "PlayAGS, Inc.",
  },
  {
    ticker: "NGL",
    title: "NGL Energy Partners LP",
  },
  {
    ticker: "CTRN",
    title: "Citi Trends Inc",
  },
  {
    ticker: "PKOH",
    title: "PARK OHIO HOLDINGS CORP",
  },
  {
    ticker: "ROSE",
    title: "Rose Hill Acquisition Corp",
  },
  {
    ticker: "PRDS",
    title: "PARDES BIOSCIENCES, INC.",
  },
  {
    ticker: "HEAR",
    title: "Turtle Beach Corp",
  },
  {
    ticker: "ALYA",
    title: "Alithya Group inc",
  },
  {
    ticker: "SMLR",
    title: "Semler Scientific, Inc.",
  },
  {
    ticker: "RELL",
    title: "RICHARDSON ELECTRONICS, LTD.",
  },
  {
    ticker: "DHY",
    title: "CREDIT SUISSE HIGH YIELD BOND FUND",
  },
  {
    ticker: "TBNK",
    title: "Territorial Bancorp Inc.",
  },
  {
    ticker: "NRO",
    title: "NEUBERGER BERMAN REAL ESTATE SECURITIES INCOME FUND INC",
  },
  {
    ticker: "SDSYA",
    title: "SOUTH DAKOTA SOYBEAN PROCESSORS LLC",
  },
  {
    ticker: "FT",
    title: "FRANKLIN UNIVERSAL TRUST",
  },
  {
    ticker: "APYX",
    title: "Apyx Medical Corp",
  },
  {
    ticker: "EMF",
    title: "TEMPLETON EMERGING MARKETS FUND",
  },
  {
    ticker: "HROW",
    title: "HARROW HEALTH, INC.",
  },
  {
    ticker: "VLDR",
    title: "Velodyne Lidar, Inc.",
  },
  {
    ticker: "HQI",
    title: "HireQuest, Inc.",
  },
  {
    ticker: "NECB",
    title: "NorthEast Community Bancorp, Inc./MD/",
  },
  {
    ticker: "ALPA",
    title: "ALPHA HEALTHCARE ACQUISITION CORP III",
  },
  {
    ticker: "FDEU",
    title: "FIRST TRUST DYNAMIC EUROPE EQUITY INCOME FUND",
  },
  {
    ticker: "NREF",
    title: "NexPoint Real Estate Finance, Inc.",
  },
  {
    ticker: "NIOBF",
    title: "NIOCORP DEVELOPMENTS LTD",
  },
  {
    ticker: "BLNG",
    title: "Belong Acquisition Corp.",
  },
  {
    ticker: "ABOS",
    title: "Acumen Pharmaceuticals, Inc.",
  },
  {
    ticker: "ATAQ",
    title: "Altimar Acquisition Corp. III",
  },
  {
    ticker: "EOD",
    title: "ALLSPRING GLOBAL DIVIDEND OPPORTUNITY FUND",
  },
  {
    ticker: "HYW",
    title: "Hywin Holdings Ltd.",
  },
  {
    ticker: "DLHC",
    title: "DLH Holdings Corp.",
  },
  {
    ticker: "ELA",
    title: "Envela Corp",
  },
  {
    ticker: "ABGI",
    title: "ABG Acquisition Corp. I",
  },
  {
    ticker: "PMTS",
    title: "CPI Card Group Inc.",
  },
  {
    ticker: "MSC",
    title: "STUDIO CITY INTERNATIONAL HOLDINGS Ltd",
  },
  {
    ticker: "ISBA",
    title: "ISABELLA BANK Corp",
  },
  {
    ticker: "RACB",
    title: "Research Alliance Corp. II",
  },
  {
    ticker: "GRX",
    title: "Gabelli Healthcare & WellnessRx Trust",
  },
  {
    ticker: "CCLP",
    title: "CSI Compressco LP",
  },
  {
    ticker: "ARYD",
    title: "ARYA Sciences Acquisition Corp IV",
  },
  {
    ticker: "AKTS",
    title: "Akoustis Technologies, Inc.",
  },
  {
    ticker: "LBTI",
    title: "Lithium & Boron Technology, Inc.",
  },
  {
    ticker: "ARBK",
    title: "Argo Blockchain Plc",
  },
  {
    ticker: "BKEP",
    title: "Blueknight Energy Partners, L.P.",
  },
  {
    ticker: "BLSA",
    title: "BCLS Acquisition Corp.",
  },
  {
    ticker: "OCAX",
    title: "OCA Acquisition Corp.",
  },
  {
    ticker: "IRNT",
    title: "IronNet, Inc.",
  },
  {
    ticker: "SRRK",
    title: "Scholar Rock Holding Corp",
  },
  {
    ticker: "WVE",
    title: "Wave Life Sciences Ltd.",
  },
  {
    ticker: "XERS",
    title: "Xeris Biopharma Holdings, Inc.",
  },
  {
    ticker: "NRDY",
    title: "Nerdy Inc.",
  },
  {
    ticker: "PZC",
    title: "PIMCO CALIFORNIA MUNICIPAL INCOME FUND III",
  },
  {
    ticker: "MGNX",
    title: "MACROGENICS INC",
  },
  {
    ticker: "RDW",
    title: "Redwire Corp",
  },
  {
    ticker: "NSL",
    title: "NUVEEN SENIOR INCOME FUND",
  },
  {
    ticker: "ARYE",
    title: "ARYA Sciences Acquisition Corp V",
  },
  {
    ticker: "TEAF",
    title: "ECOFIN SUSTAINABLE & SOCIAL IMPACT TERM FUND",
  },
  {
    ticker: "SSSS",
    title: "SURO CAPITAL CORP.",
  },
  {
    ticker: "MBII",
    title: "MARRONE BIO INNOVATIONS INC",
  },
  {
    ticker: "CMRX",
    title: "CHIMERIX INC",
  },
  {
    ticker: "STTK",
    title: "Shattuck Labs, Inc.",
  },
  {
    ticker: "CTR",
    title: "ClearBridge MLP & Midstream Total Return Fund Inc.",
  },
  {
    ticker: "EPM",
    title: "EVOLUTION PETROLEUM CORP",
  },
  {
    ticker: "PFMT",
    title: "Performant Financial Corp",
  },
  {
    ticker: "HOFT",
    title: "HOOKER FURNISHINGS Corp",
  },
  {
    ticker: "IGI",
    title: "Western Asset Investment Grade Defined Opportunity Trust Inc.",
  },
  {
    ticker: "LTMAQ",
    title: "LATAM AIRLINES GROUP S.A.",
  },
  {
    ticker: "FRGI",
    title: "Fiesta Restaurant Group, Inc.",
  },
  {
    ticker: "VBF",
    title: "Invesco Bond Fund",
  },
  {
    ticker: "RIV",
    title: "RIVERNORTH OPPORTUNITIES FUND, INC.",
  },
  {
    ticker: "NTG",
    title: "Tortoise Midstream Energy Fund, Inc.",
  },
  {
    ticker: "AEHR",
    title: "AEHR TEST SYSTEMS",
  },
  {
    ticker: "KNDI",
    title: "Kandi Technologies Group, Inc.",
  },
  {
    ticker: "DGL",
    title: "Invesco DB Gold Fund",
  },
  {
    ticker: "GER",
    title: "GOLDMAN SACHS MLP & ENERGY RENAISSANCE FUND",
  },
  {
    ticker: "BSET",
    title: "BASSETT FURNITURE INDUSTRIES INC",
  },
  {
    ticker: "PIIVX",
    title: "Private Shares Fund",
  },
  {
    ticker: "URGN",
    title: "UroGen Pharma Ltd.",
  },
  {
    ticker: "CLOE",
    title: "Clover Leaf Capital Corp.",
  },
  {
    ticker: "CCAI",
    title: "Cascadia Acquisition Corp.",
  },
  {
    ticker: "MLP",
    title: "MAUI LAND & PINEAPPLE CO INC",
  },
  {
    ticker: "AMCI",
    title: "AMCI Acquisition Corp. II",
  },
  {
    ticker: "MLAC",
    title: "Malacca Straits Acquisition Co Ltd",
  },
  {
    ticker: "MRBK",
    title: "Meridian Corp",
  },
  {
    ticker: "MITA",
    title: "Coliseum Acquisition Corp.",
  },
  {
    ticker: "SCOR",
    title: "COMSCORE, INC.",
  },
  {
    ticker: "CVGI",
    title: "Commercial Vehicle Group, Inc.",
  },
  {
    ticker: "MG",
    title: "Mistras Group, Inc.",
  },
  {
    ticker: "JILL",
    title: "J.Jill, Inc.",
  },
  {
    ticker: "TGAN",
    title: "Transphorm, Inc.",
  },
  {
    ticker: "NSRCF",
    title: "NextSource Materials Inc.",
  },
  {
    ticker: "NUNZ",
    title: "NUNZIA PHARMACEUTICAL Co",
  },
  {
    ticker: "APMI",
    title: "AxonPrime Infrastructure Acquisition Corp",
  },
  {
    ticker: "EVBN",
    title: "EVANS BANCORP INC",
  },
  {
    ticker: "BSL",
    title: "Blackstone Senior Floating Rate Term Fund",
  },
  {
    ticker: "CALA",
    title: "Calithera Biosciences, Inc.",
  },
  {
    ticker: "RAM",
    title: "Aries I Acquisition Corp.",
  },
  {
    ticker: "DBD",
    title: "DIEBOLD NIXDORF, Inc",
  },
  {
    ticker: "TWN",
    title: "TAIWAN FUND INC",
  },
  {
    ticker: "BPRN",
    title: "Princeton Bancorp, Inc.",
  },
  {
    ticker: "OXSQ",
    title: "Oxford Square Capital Corp.",
  },
  {
    ticker: "CYRN",
    title: "CYREN Ltd.",
  },
  {
    ticker: "FLC",
    title: "FLAHERTY & CRUMRINE TOTAL RETURN FUND INC",
  },
  {
    ticker: "ALLT",
    title: "Allot Ltd.",
  },
  {
    ticker: "JOF",
    title: "JAPAN SMALLER CAPITALIZATION FUND INC",
  },
  {
    ticker: "VOR",
    title: "Vor Biopharma Inc.",
  },
  {
    ticker: "CFNB",
    title: "CALIFORNIA FIRST LEASING Corp",
  },
  {
    ticker: "UXIN",
    title: "Uxin Ltd",
  },
  {
    ticker: "SGII",
    title: "Seaport Global Acquisition II Corp.",
  },
  {
    ticker: "CNF",
    title: "CNFinance Holdings Ltd.",
  },
  {
    ticker: "CVCY",
    title: "CENTRAL VALLEY COMMUNITY BANCORP",
  },
  {
    ticker: "HNRG",
    title: "HALLADOR ENERGY CO",
  },
  {
    ticker: "RYAM",
    title: "RAYONIER ADVANCED MATERIALS INC.",
  },
  {
    ticker: "LUNA",
    title: "LUNA INNOVATIONS INC",
  },
  {
    ticker: "FLL",
    title: "FULL HOUSE RESORTS INC",
  },
  {
    ticker: "FHLD",
    title: "Freedom Holdings, Inc.",
  },
  {
    ticker: "GLTA",
    title: "Galata Acquisition Corp.",
  },
  {
    ticker: "CVM",
    title: "CEL SCI CORP",
  },
  {
    ticker: "THCA",
    title: "Tuscan Holdings Corp. II",
  },
  {
    ticker: "IMMR",
    title: "IMMERSION CORP",
  },
  {
    ticker: "HIE",
    title: "Miller/Howard High Income Equity Fund",
  },
  {
    ticker: "GSQB",
    title: "G Squared Ascend II, Inc.",
  },
  {
    ticker: "IKNA",
    title: "Ikena Oncology, Inc.",
  },
  {
    ticker: "PRBM",
    title: "Parabellum Acquisition Corp.",
  },
  {
    ticker: "LTRX",
    title: "LANTRONIX INC",
  },
  {
    ticker: "AVYA",
    title: "Avaya Holdings Corp.",
  },
  {
    ticker: "AIF",
    title: "Apollo Tactical Income Fund Inc.",
  },
  {
    ticker: "ESSA",
    title: "ESSA Bancorp, Inc.",
  },
  {
    ticker: "MDEX",
    title: "Madison Technologies Inc.",
  },
  {
    ticker: "RAAS",
    title: "Cloopen Group Holding Ltd",
  },
  {
    ticker: "DBE",
    title: "Invesco DB Energy Fund",
  },
  {
    ticker: "FLAC",
    title: "Frazier Lifesciences Acquisition Corp",
  },
  {
    ticker: "WMPN",
    title: "William Penn Bancorporation",
  },
  {
    ticker: "SVRA",
    title: "Savara Inc",
  },
  {
    ticker: "ORMP",
    title: "ORAMED PHARMACEUTICALS INC.",
  },
  {
    ticker: "PIM",
    title: "PUTNAM MASTER INTERMEDIATE INCOME TRUST",
  },
  {
    ticker: "MIST",
    title: "Milestone Pharmaceuticals Inc.",
  },
  {
    ticker: "MRNS",
    title: "MARINUS PHARMACEUTICALS, INC.",
  },
  {
    ticker: "OMEG",
    title: "Omega Alpha SPAC",
  },
  {
    ticker: "INSI",
    title: "Insight Select Income Fund",
  },
  {
    ticker: "ARAY",
    title: "ACCURAY INC",
  },
  {
    ticker: "OSG",
    title: "OVERSEAS SHIPHOLDING GROUP INC",
  },
  {
    ticker: "WPRT",
    title: "WESTPORT FUEL SYSTEMS INC.",
  },
  {
    ticker: "VTGN",
    title: "VistaGen Therapeutics, Inc.",
  },
  {
    ticker: "BQ",
    title: "Boqii Holding Ltd",
  },
  {
    ticker: "SNFCA",
    title: "SECURITY NATIONAL FINANCIAL CORP",
  },
  {
    ticker: "YI",
    title: "111, Inc.",
  },
  {
    ticker: "LJAQ",
    title: "LIGHTJUMP ACQUISITION CORP",
  },
  {
    ticker: "OMGA",
    title: "Omega Therapeutics, Inc.",
  },
  {
    ticker: "BBIG",
    title: "Vinco Ventures, Inc.",
  },
  {
    ticker: "ORIC",
    title: "Oric Pharmaceuticals, Inc.",
  },
  {
    ticker: "MHLD",
    title: "Maiden Holdings, Ltd.",
  },
  {
    ticker: "VRM",
    title: "Vroom, Inc.",
  },
  {
    ticker: "BASI",
    title: "Basis Global Technologies, Inc.",
  },
  {
    ticker: "SPIR",
    title: "Spire Global, Inc.",
  },
  {
    ticker: "ASPS",
    title: "ALTISOURCE PORTFOLIO SOLUTIONS S.A.",
  },
  {
    ticker: "MNSB",
    title: "MainStreet Bancshares, Inc.",
  },
  {
    ticker: "FSFG",
    title: "First Savings Financial Group, Inc.",
  },
  {
    ticker: "JATT",
    title: "JATT Acquisition Corp",
  },
  {
    ticker: "ENX",
    title: "EATON VANCE NEW YORK MUNICIPAL BOND FUND",
  },
  {
    ticker: "XBIT",
    title: "XBiotech Inc.",
  },
  {
    ticker: "MTNB",
    title: "Matinas BioPharma Holdings, Inc.",
  },
  {
    ticker: "ATCX",
    title: "ATLAS TECHNICAL CONSULTANTS, INC.",
  },
  {
    ticker: "IVH",
    title: "Delaware Ivy High Income Opportunities Fund",
  },
  {
    ticker: "AERC",
    title: "AeroClean Technologies, Inc.",
  },
  {
    ticker: "MHH",
    title: "Mastech Digital, Inc.",
  },
  {
    ticker: "MEPW",
    title: "ME Renewable Power Corp",
  },
  {
    ticker: "RGCO",
    title: "RGC RESOURCES INC",
  },
  {
    ticker: "LINC",
    title: "LINCOLN EDUCATIONAL SERVICES CORP",
  },
  {
    ticker: "ZVIA",
    title: "Zevia PBC",
  },
  {
    ticker: "CODX",
    title: "Co-Diagnostics, Inc.",
  },
  {
    ticker: "ESCA",
    title: "ESCALADE INC",
  },
  {
    ticker: "MPA",
    title: "BLACKROCK MUNIYIELD PENNSYLVANIA QUALITY FUND",
  },
  {
    ticker: "IBER",
    title: "IBERE PHARMACEUTICALS",
  },
  {
    ticker: "CMCT",
    title: "Creative Media & Community Trust Corp",
  },
  {
    ticker: "HWBK",
    title: "HAWTHORN BANCSHARES, INC.",
  },
  {
    ticker: "RMBI",
    title: "Richmond Mutual Bancorporation, Inc.",
  },
  {
    ticker: "NIQ",
    title: "Nuveen Intermediate Duration Quality Municipal Term Fund",
  },
  {
    ticker: "OLMA",
    title: "Olema Pharmaceuticals, Inc.",
  },
  {
    ticker: "PEPL",
    title: "PepperLime Health Acquisition Corp",
  },
  {
    ticker: "WNEB",
    title: "Western New England Bancorp, Inc.",
  },
  {
    ticker: "TTSH",
    title: "TILE SHOP HOLDINGS, INC.",
  },
  {
    ticker: "GRTS",
    title: "Gritstone bio, Inc.",
  },
  {
    ticker: "SCMA",
    title: "Seaport Calibre Materials Acquisition Corp.",
  },
  {
    ticker: "CLSN",
    title: "Celsion CORP",
  },
  {
    ticker: "HURC",
    title: "HURCO COMPANIES INC",
  },
  {
    ticker: "ESEA",
    title: "EUROSEAS LTD.",
  },
  {
    ticker: "BWAC",
    title: "Better World Acquisition Corp.",
  },
  {
    ticker: "VABK",
    title: "Virginia National Bankshares Corp",
  },
  {
    ticker: "RPID",
    title: "RAPID MICRO BIOSYSTEMS, INC.",
  },
  {
    ticker: "GKIN",
    title: "Guskin Gold Corp.",
  },
  {
    ticker: "NTP",
    title: "NAM TAI PROPERTY INC.",
  },
  {
    ticker: "FREVS",
    title: "FIRST REAL ESTATE INVESTMENT TRUST OF NEW JERSEY",
  },
  {
    ticker: "DHF",
    title: "BNY MELLON HIGH YIELD STRATEGIES FUND",
  },
  {
    ticker: "RDCM",
    title: "RADCOM LTD",
  },
  {
    ticker: "LOMLF",
    title: "Lion One Metals Ltd.",
  },
  {
    ticker: "DMTK",
    title: "DermTech, Inc.",
  },
  {
    ticker: "ALLK",
    title: "Allakos Inc.",
  },
  {
    ticker: "DMAQ",
    title: "Deep Medicine Acquisition Corp.",
  },
  {
    ticker: "NMMC",
    title: "North Mountain Merger Corp.",
  },
  {
    ticker: "GRPH",
    title: "Graphite Bio, Inc.",
  },
  {
    ticker: "HBB",
    title: "Hamilton Beach Brands Holding Co",
  },
  {
    ticker: "CLSK",
    title: "CLEANSPARK, INC.",
  },
  {
    ticker: "BSBK",
    title: "Bogota Financial Corp.",
  },
  {
    ticker: "WNDW",
    title: "SolarWindow Technologies, Inc.",
  },
  {
    ticker: "LYBC",
    title: "LYONS BANCORP INC",
  },
  {
    ticker: "UOLI",
    title: "UONLIVE CORP",
  },
  {
    ticker: "PTRS",
    title: "PARTNERS BANCORP",
  },
  {
    ticker: "NBST",
    title: "Newbury Street Acquisition Corp",
  },
  {
    ticker: "GHL",
    title: "GREENHILL & CO INC",
  },
  {
    ticker: "PNRG",
    title: "PRIMEENERGY RESOURCES CORP",
  },
  {
    ticker: "LYTS",
    title: "LSI INDUSTRIES INC",
  },
  {
    ticker: "GLQ",
    title: "Clough Global Equity Fund",
  },
  {
    ticker: "CMLS",
    title: "CUMULUS MEDIA INC",
  },
  {
    ticker: "LTCH",
    title: "Latch, Inc.",
  },
  {
    ticker: "GNFT",
    title: "Genfit S.A.",
  },
  {
    ticker: "CHN",
    title: "CHINA FUND INC",
  },
  {
    ticker: "MEC",
    title: "Mayville Engineering Company, Inc.",
  },
  {
    ticker: "CWGL",
    title: "Crimson Wine Group, Ltd",
  },
  {
    ticker: "MEOA",
    title: "Minority Equality Opportunities Acquisition Inc.",
  },
  {
    ticker: "PWOD",
    title: "PENNS WOODS BANCORP INC",
  },
  {
    ticker: "NNY",
    title: "NUVEEN NEW YORK MUNICIPAL VALUE FUND",
  },
  {
    ticker: "EHI",
    title: "WESTERN ASSET GLOBAL HIGH INCOME FUND INC.",
  },
  {
    ticker: "KVHI",
    title: "KVH INDUSTRIES INC DE",
  },
  {
    ticker: "PLBC",
    title: "PLUMAS BANCORP",
  },
  {
    ticker: "CGEN",
    title: "COMPUGEN LTD",
  },
  {
    ticker: "LVOX",
    title: "LiveVox Holdings, Inc.",
  },
  {
    ticker: "FNWB",
    title: "First Northwest Bancorp",
  },
  {
    ticker: "ALTB",
    title: "Alpine Auto Brokers Inc.",
  },
  {
    ticker: "VACC",
    title: "Vaccitech plc",
  },
  {
    ticker: "AMTX",
    title: "AEMETIS, INC",
  },
  {
    ticker: "BHAT",
    title: "Blue Hat Interactive Entertainment Technology",
  },
  {
    ticker: "EBAC",
    title: "European Biotech Acquisition Corp.",
  },
  {
    ticker: "TOUR",
    title: "Tuniu Corp",
  },
  {
    ticker: "CTGO",
    title: "Contango ORE, Inc.",
  },
  {
    ticker: "CNTQ",
    title: "Chardan NexTech Acquisition 2 Corp.",
  },
  {
    ticker: "KULR",
    title: "KULR Technology Group, Inc.",
  },
  {
    ticker: "OPBK",
    title: "OP Bancorp",
  },
  {
    ticker: "MFIN",
    title: "MEDALLION FINANCIAL CORP",
  },
  {
    ticker: "MRMD",
    title: "MARIMED INC.",
  },
  {
    ticker: "SAMG",
    title: "Silvercrest Asset Management Group Inc.",
  },
  {
    ticker: "HYB",
    title: "NEW AMERICA HIGH INCOME FUND INC",
  },
  {
    ticker: "SANG",
    title: "Sangoma Technologies Corp",
  },
  {
    ticker: "MPIR",
    title: "Empire Diversified Energy Inc",
  },
  {
    ticker: "LION",
    title: "Lionheart III Corp",
  },
  {
    ticker: "MITT",
    title: "AG Mortgage Investment Trust, Inc.",
  },
  {
    ticker: "MNTS",
    title: "Momentus Inc.",
  },
  {
    ticker: "SESN",
    title: "Sesen Bio, Inc.",
  },
  {
    ticker: "CBH",
    title: "Virtus AllianzGI Convertible & Income 2024 Target Term Fund",
  },
  {
    ticker: "XL",
    title: "XL Fleet Corp.",
  },
  {
    ticker: "KMPH",
    title: "KEMPHARM, INC",
  },
  {
    ticker: "IDE",
    title: "Voya Infrastructure, Industrials & Materials Fund",
  },
  {
    ticker: "CALB",
    title: "California BanCorp",
  },
  {
    ticker: "CLNN",
    title: "Clene Inc.",
  },
  {
    ticker: "GRRB",
    title: "GRANDSOUTH BANCORPORATION",
  },
  {
    ticker: "SPE",
    title: "SPECIAL OPPORTUNITIES FUND, INC.",
  },
  {
    ticker: "SMTI",
    title: "Sanara MedTech Inc.",
  },
  {
    ticker: "PBPB",
    title: "POTBELLY CORP",
  },
  {
    ticker: "COFS",
    title: "CHOICEONE FINANCIAL SERVICES INC",
  },
  {
    ticker: "CCTS",
    title: "Cactus Acquisition Corp. 1 Ltd",
  },
  {
    ticker: "PIII",
    title: "P3 Health Partners Inc.",
  },
  {
    ticker: "QSAM",
    title: "QSAM Biosciences, Inc.",
  },
  {
    ticker: "PDLB",
    title: "Ponce Financial Group, Inc.",
  },
  {
    ticker: "DUO",
    title: "Fangdd Network Group Ltd.",
  },
  {
    ticker: "FNCB",
    title: "FNCB Bancorp, Inc.",
  },
  {
    ticker: "INMB",
    title: "Inmune Bio, Inc.",
  },
  {
    ticker: "PROF",
    title: "Profound Medical Corp.",
  },
  {
    ticker: "PSTX",
    title: "Poseida Therapeutics, Inc.",
  },
  {
    ticker: "SEVN",
    title: "Seven Hills Realty Trust",
  },
  {
    ticker: "MMLP",
    title: "MARTIN MIDSTREAM PARTNERS L.P.",
  },
  {
    ticker: "HSBI",
    title: "HERITAGE SOUTHEAST BANCORPORATION, INC.",
  },
  {
    ticker: "YELL",
    title: "Yellow Corp",
  },
  {
    ticker: "LSAC",
    title: "DMB Acquisition Corp.",
  },
  {
    ticker: "LKCO",
    title: "Luokung Technology Corp.",
  },
  {
    ticker: "OHAA",
    title: "Opy Acquisition Corp. I",
  },
  {
    ticker: "CHWA",
    title: "CHW Acquisition Corp",
  },
  {
    ticker: "PEBK",
    title: "PEOPLES BANCORP OF NORTH CAROLINA INC",
  },
  {
    ticker: "SELB",
    title: "SELECTA BIOSCIENCES INC",
  },
  {
    ticker: "VNJA",
    title: "VANJIA CORP",
  },
  {
    ticker: "HYFM",
    title: "HYDROFARM HOLDINGS GROUP, INC.",
  },
  {
    ticker: "JNCE",
    title: "Jounce Therapeutics, Inc.",
  },
  {
    ticker: "QIPT",
    title: "Quipt Home Medical Corp.",
  },
  {
    ticker: "RPMT",
    title: "REGO PAYMENT ARCHITECTURES, INC.",
  },
  {
    ticker: "EPZM",
    title: "Epizyme, Inc.",
  },
  {
    ticker: "BENE",
    title: "Benessere Capital Acquisition Corp.",
  },
  {
    ticker: "BLZE",
    title: "Backblaze, Inc.",
  },
  {
    ticker: "DKDCA",
    title: "Data Knights Acquisition Corp.",
  },
  {
    ticker: "BNED",
    title: "Barnes & Noble Education, Inc.",
  },
  {
    ticker: "NERV",
    title: "Minerva Neurosciences, Inc.",
  },
  {
    ticker: "EVOJ",
    title: "Evo Acquisition Corp",
  },
  {
    ticker: "CAMP",
    title: "CalAmp Corp.",
  },
  {
    ticker: "QUAD",
    title: "Quad/Graphics, Inc.",
  },
  {
    ticker: "PSNL",
    title: "Personalis, Inc.",
  },
  {
    ticker: "INSD",
    title: "Instadose Pharma Corp.",
  },
  {
    ticker: "NLIT",
    title: "Northern Lights Acquisition Corp.",
  },
  {
    ticker: "SOLS",
    title: "SOLLENSYS CORP.",
  },
  {
    ticker: "GLDG",
    title: "GoldMining Inc.",
  },
  {
    ticker: "SGA",
    title: "SAGA COMMUNICATIONS INC",
  },
  {
    ticker: "MREO",
    title: "Mereo Biopharma Group plc",
  },
  {
    ticker: "IMMP",
    title: "IMMUTEP Ltd",
  },
  {
    ticker: "MBTC",
    title: "Nocturne Acquisition Corp",
  },
  {
    ticker: "GDNSF",
    title: "Goodness Growth Holdings, Inc.",
  },
  {
    ticker: "HBIO",
    title: "HARVARD BIOSCIENCE INC",
  },
  {
    ticker: "AVDL",
    title: "AVADEL PHARMACEUTICALS PLC",
  },
  {
    ticker: "PRTY",
    title: "Party City Holdco Inc.",
  },
  {
    ticker: "BREZ",
    title: "Breeze Holdings Acquisition Corp.",
  },
  {
    ticker: "MBCN",
    title: "MIDDLEFIELD BANC CORP",
  },
  {
    ticker: "SOLO",
    title: "ELECTRAMECCANICA VEHICLES CORP.",
  },
  {
    ticker: "DHAC",
    title: "DIGITAL HEALTH ACQUISITION CORP.",
  },
  {
    ticker: "SMAP",
    title: "Sportsmap Tech Acquisition Corp.",
  },
  {
    ticker: "KWAC",
    title: "Kingswood Acquisition Corp.",
  },
  {
    ticker: "BBXIA",
    title: "BBX Capital, Inc.",
  },
  {
    ticker: "ATA",
    title: "AMERICAS TECHNOLOGY ACQUISITION CORP.",
  },
  {
    ticker: "GTH",
    title: "Genetron Holdings Ltd",
  },
  {
    ticker: "NAZ",
    title: "NUVEEN ARIZONA QUALITY MUNICIPAL INCOME FUND",
  },
  {
    ticker: "ANNX",
    title: "Annexon, Inc.",
  },
  {
    ticker: "GORO",
    title: "GOLD RESOURCE CORP",
  },
  {
    ticker: "OVID",
    title: "Ovid Therapeutics Inc.",
  },
  {
    ticker: "DBP",
    title: "Invesco DB Precious Metals Fund",
  },
  {
    ticker: "LIBY",
    title: "Liberty Resources Acquisition Corp.",
  },
  {
    ticker: "FENC",
    title: "FENNEC PHARMACEUTICALS INC.",
  },
  {
    ticker: "KXIN",
    title: "Kaixin Auto Holdings",
  },
  {
    ticker: "EVFM",
    title: "Evofem Biosciences, Inc.",
  },
  {
    ticker: "BTA",
    title: "BlackRock Long-Term Municipal Advantage Trust",
  },
  {
    ticker: "IGA",
    title: "Voya Global Advantage & Premium Opportunity Fund",
  },
  {
    ticker: "GLLI",
    title: "GLOBALINK INVESTMENT INC.",
  },
  {
    ticker: "YTRA",
    title: "Yatra Online, Inc.",
  },
  {
    ticker: "CNCE",
    title: "CONCERT PHARMACEUTICALS, INC.",
  },
  {
    ticker: "OVBC",
    title: "OHIO VALLEY BANC CORP",
  },
  {
    ticker: "YRD",
    title: "Yiren Digital Ltd.",
  },
  {
    ticker: "VRA",
    title: "Vera Bradley, Inc.",
  },
  {
    ticker: "HEQ",
    title: "John Hancock Hedged Equity & Income Fund",
  },
  {
    ticker: "ROCG",
    title: "Roth CH Acquisition IV Co.",
  },
  {
    ticker: "BGX",
    title: "Blackstone Long-Short Credit Income Fund",
  },
  {
    ticker: "RVSB",
    title: "RIVERVIEW BANCORP INC",
  },
  {
    ticker: "BMAQ",
    title: "Blockchain Moon Acquisition Corp.",
  },
  {
    ticker: "EDTX",
    title: "EdtechX Holdings Acquisition Corp. II",
  },
  {
    ticker: "TFFP",
    title: "TFF Pharmaceuticals, Inc.",
  },
  {
    ticker: "CMCL",
    title: "Caledonia Mining Corp Plc",
  },
  {
    ticker: "XYF",
    title: "X Financial",
  },
  {
    ticker: "EVG",
    title: "Eaton Vance Short Duration Diversified Income Fund",
  },
  {
    ticker: "CRMD",
    title: "CorMedix Inc.",
  },
  {
    ticker: "DNIF",
    title: "DIVIDEND & INCOME FUND",
  },
  {
    ticker: "PONO",
    title: "Pono Capital Corp",
  },
  {
    ticker: "FTCO",
    title: "Fortitude Gold Corp",
  },
  {
    ticker: "OXAC",
    title: "Oxbridge Acquisition Corp.",
  },
  {
    ticker: "LAZY",
    title: "Lazydays Holdings, Inc.",
  },
  {
    ticker: "SBTX",
    title: "Silverback Therapeutics, Inc.",
  },
  {
    ticker: "PETZ",
    title: "TDH Holdings, Inc.",
  },
  {
    ticker: "SREV",
    title: "SERVICESOURCE INTERNATIONAL, INC.",
  },
  {
    ticker: "OVLY",
    title: "Oak Valley Bancorp",
  },
  {
    ticker: "EMYB",
    title: "Embassy Bancorp, Inc.",
  },
  {
    ticker: "EPSN",
    title: "Epsilon Energy Ltd.",
  },
  {
    ticker: "FFNW",
    title: "First Financial Northwest, Inc.",
  },
  {
    ticker: "FCCO",
    title: "FIRST COMMUNITY CORP /SC/",
  },
  {
    ticker: "HYPR",
    title: "Hyperfine, Inc.",
  },
  {
    ticker: "UEXCF",
    title: "UEX CORP",
  },
  {
    ticker: "APEN",
    title: "Apollo Endosurgery, Inc.",
  },
  {
    ticker: "PIRS",
    title: "PIERIS PHARMACEUTICALS, INC.",
  },
  {
    ticker: "MTRY",
    title: "Monterey Bio Acquisition Corp",
  },
  {
    ticker: "CIK",
    title: "CREDIT SUISSE ASSET MANAGEMENT INCOME FUND INC",
  },
  {
    ticker: "FPL",
    title: "FIRST TRUST NEW OPPORTUNITIES MLP & ENERGY FUND",
  },
  {
    ticker: "FATP",
    title: "FAT PROJECTS ACQUISITION CORP",
  },
  {
    ticker: "NANX",
    title: "NANOPHASE TECHNOLOGIES Corp",
  },
  {
    ticker: "TGVC",
    title: "TG Venture Acquisition Corp.",
  },
  {
    ticker: "NVIV",
    title: "INVIVO THERAPEUTICS HOLDINGS CORP.",
  },
  {
    ticker: "GIAC",
    title: "Gesher I Acquisition Corp.",
  },
  {
    ticker: "CZWI",
    title: "Citizens Community Bancorp Inc.",
  },
  {
    ticker: "WINV",
    title: "WinVest Acquisition Corp.",
  },
  {
    ticker: "TMRC",
    title: "Texas Mineral Resources Corp.",
  },
  {
    ticker: "MHF",
    title: "WESTERN ASSET MUNICIPAL HIGH INCOME FUND INC.",
  },
  {
    ticker: "LMST",
    title: "LIMESTONE BANCORP, INC.",
  },
  {
    ticker: "BWG",
    title: "BrandywineGLOBAL-Global Income Opportunities Fund Inc",
  },
  {
    ticker: "RAIN",
    title: "Rain Therapeutics Inc.",
  },
  {
    ticker: "SYNL",
    title: "SYNALLOY CORP",
  },
  {
    ticker: "ATTO",
    title: "Atento S.A.",
  },
  {
    ticker: "MCN",
    title: "Madison Covered Call & Equity Strategy Fund",
  },
  {
    ticker: "ADRA",
    title: "Adara Acquisition Corp.",
  },
  {
    ticker: "WSTG",
    title: "Wayside Technology Group, Inc.",
  },
  {
    ticker: "BKGM",
    title: "BankGuam Holding Co",
  },
  {
    ticker: "MDXH",
    title: "MDxHealth SA",
  },
  {
    ticker: "FXY",
    title: "Invesco CurrencyShares Japanese Yen Trust",
  },
  {
    ticker: "PFD",
    title: "FLAHERTY & CRUMRINE PREFERRED & INCOME FUND INC",
  },
  {
    ticker: "DMF",
    title: "BNY MELLON MUNICIPAL INCOME, INC.",
  },
  {
    ticker: "OTMO",
    title: "Otonomo Technologies Ltd.",
  },
  {
    ticker: "AVGR",
    title: "Avinger Inc",
  },
  {
    ticker: "MYNA",
    title: "Mynaric AG",
  },
  {
    ticker: "GGGV",
    title: "G3 VRM Acquisition Corp.",
  },
  {
    ticker: "GENC",
    title: "GENCOR INDUSTRIES INC",
  },
  {
    ticker: "BATL",
    title: "BATTALION OIL CORP",
  },
  {
    ticker: "ASRT",
    title: "Assertio Holdings, Inc.",
  },
  {
    ticker: "USDP",
    title: "USD Partners LP",
  },
  {
    ticker: "NAK",
    title: "NORTHERN DYNASTY MINERALS LTD",
  },
  {
    ticker: "TSQ",
    title: "Townsquare Media, Inc.",
  },
  {
    ticker: "USX",
    title: "US XPRESS ENTERPRISES INC",
  },
  {
    ticker: "TCMD",
    title: "TACTILE SYSTEMS TECHNOLOGY INC",
  },
  {
    ticker: "OFS",
    title: "OFS Capital Corp",
  },
  {
    ticker: "EXPR",
    title: "EXPRESS, INC.",
  },
  {
    ticker: "FSTR",
    title: "FOSTER L B CO",
  },
  {
    ticker: "BWMN",
    title: "Bowman Consulting Group Ltd.",
  },
  {
    ticker: "JMAC",
    title: "Maxpro Capital Acquisition Corp.",
  },
  {
    ticker: "NGS",
    title: "NATURAL GAS SERVICES GROUP INC",
  },
  {
    ticker: "CFBK",
    title: "CF BANKSHARES INC.",
  },
  {
    ticker: "TJBH",
    title: "Tengjun Biotechnology Corp.",
  },
  {
    ticker: "AMSC",
    title: "AMERICAN SUPERCONDUCTOR CORP /DE/",
  },
  {
    ticker: "STXS",
    title: "Stereotaxis, Inc.",
  },
  {
    ticker: "REVE",
    title: "Alpine Acquisition Corp.",
  },
  {
    ticker: "JYAC",
    title: "Jiya Acquisition Corp.",
  },
  {
    ticker: "AUD",
    title: "AUDACY, INC.",
  },
  {
    ticker: "OBSV",
    title: "ObsEva SA",
  },
  {
    ticker: "KFS",
    title: "KINGSWAY FINANCIAL SERVICES INC",
  },
  {
    ticker: "ATY",
    title: "AcuityAds Holdings Inc.",
  },
  {
    ticker: "VIRX",
    title: "Viracta Therapeutics, Inc.",
  },
  {
    ticker: "TRIQ",
    title: "TRAQIQ, INC.",
  },
  {
    ticker: "AE",
    title: "ADAMS RESOURCES & ENERGY, INC.",
  },
  {
    ticker: "MVO",
    title: "MV Oil Trust",
  },
  {
    ticker: "SMHI",
    title: "SEACOR Marine Holdings Inc.",
  },
  {
    ticker: "STSA",
    title: "Satsuma Pharmaceuticals, Inc.",
  },
  {
    ticker: "CELC",
    title: "Celcuity Inc.",
  },
  {
    ticker: "AMAO",
    title: "American Acquisition Opportunity Inc.",
  },
  {
    ticker: "AOUT",
    title: "American Outdoor Brands, Inc.",
  },
  {
    ticker: "MSD",
    title: "MORGAN STANLEY EMERGING MARKETS DEBT FUND INC",
  },
  {
    ticker: "FORA",
    title: "Forian Inc.",
  },
  {
    ticker: "SMM",
    title: "Salient Midstream & MLP Fund",
  },
  {
    ticker: "TLLYF",
    title: "Trilogy International Partners Inc.",
  },
  {
    ticker: "SHIP",
    title: "Seanergy Maritime Holdings Corp.",
  },
  {
    ticker: "GLEE",
    title: "Gladstone Acquisition Corp",
  },
  {
    ticker: "BANX",
    title: "ArrowMark Financial Corp.",
  },
  {
    ticker: "FNCH",
    title: "Finch Therapeutics Group, Inc.",
  },
  {
    ticker: "RNDB",
    title: "Randolph Bancorp, Inc.",
  },
  {
    ticker: "FRAF",
    title: "FRANKLIN FINANCIAL SERVICES CORP /PA/",
  },
  {
    ticker: "JHS",
    title: "JOHN HANCOCK INCOME SECURITIES TRUST",
  },
  {
    ticker: "IDBA",
    title: "IDEX Biometrics ASA",
  },
  {
    ticker: "AEHA",
    title: "Aesther Healthcare Acquisition Corp.",
  },
  {
    ticker: "SCPH",
    title: "scPharmaceuticals Inc.",
  },
  {
    ticker: "EVI",
    title: "EVI INDUSTRIES, INC.",
  },
  {
    ticker: "EBMT",
    title: "Eagle Bancorp Montana, Inc.",
  },
  {
    ticker: "EUCR",
    title: "Eucrates Biomedical Acquisition Corp.",
  },
  {
    ticker: "ENDP",
    title: "Endo International plc",
  },
  {
    ticker: "GF",
    title: "NEW GERMANY FUND INC",
  },
  {
    ticker: "SNDA",
    title: "SONIDA SENIOR LIVING, INC.",
  },
  {
    ticker: "INOD",
    title: "INNODATA INC",
  },
  {
    ticker: "TSHA",
    title: "Taysha Gene Therapies, Inc.",
  },
  {
    ticker: "LMAO",
    title: "LMF Acquisition Opportunities Inc",
  },
  {
    ticker: "GNTA",
    title: "Genenta Science S.p.A.",
  },
  {
    ticker: "ACP",
    title: "Aberdeen Income Credit Strategies Fund",
  },
  {
    ticker: "MTRX",
    title: "MATRIX SERVICE CO",
  },
  {
    ticker: "OPOF",
    title: "OLD POINT FINANCIAL CORP",
  },
  {
    ticker: "DAKT",
    title: "DAKTRONICS INC /SD/",
  },
  {
    ticker: "PNCKF",
    title: "Galleon Gold Corp.",
  },
  {
    ticker: "QOEG",
    title: "Quality Online Education Group Inc.",
  },
  {
    ticker: "GOED",
    title: "1847 Goedeker Inc.",
  },
  {
    ticker: "IH",
    title: "iHuman Inc.",
  },
  {
    ticker: "IMRX",
    title: "Immuneering Corp",
  },
  {
    ticker: "SACH",
    title: "Sachem Capital Corp.",
  },
  {
    ticker: "DMO",
    title: "Western Asset Mortgage Opportunity Fund Inc.",
  },
  {
    ticker: "RVP",
    title: "RETRACTABLE TECHNOLOGIES INC",
  },
  {
    ticker: "SMWPY",
    title: "Connect Group PLC / ADR",
  },
  {
    ticker: "OTEC",
    title: "OceanTech Acquisitions I Corp.",
  },
  {
    ticker: "CANB",
    title: "Can B Corp",
  },
  {
    ticker: "NBTX",
    title: "Nanobiotix S.A.",
  },
  {
    ticker: "VSAC",
    title: "VISION SENSING ACQUISITION CORP.",
  },
  {
    ticker: "JPT",
    title: "Nuveen Preferred & Income Fund",
  },
  {
    ticker: "FKYS",
    title: "FIRST KEYSTONE CORP",
  },
  {
    ticker: "CTXR",
    title: "Citius Pharmaceuticals, Inc.",
  },
  {
    ticker: "STRT",
    title: "STRATTEC SECURITY CORP",
  },
  {
    ticker: "SMSI",
    title: "SMITH MICRO SOFTWARE, INC.",
  },
  {
    ticker: "TSAT",
    title: "Telesat Corp",
  },
  {
    ticker: "MPV",
    title: "BARINGS PARTICIPATION INVESTORS",
  },
  {
    ticker: "FNWD",
    title: "Finward Bancorp",
  },
  {
    ticker: "CPHC",
    title: "Canterbury Park Holding Corp",
  },
  {
    ticker: "FSTX",
    title: "F-star Therapeutics, Inc.",
  },
  {
    ticker: "IOBT",
    title: "IO Biotech, Inc.",
  },
  {
    ticker: "FRLA",
    title: "Fortune Rise Acquisition Corp",
  },
  {
    ticker: "SMTS",
    title: "Sierra Metals Inc.",
  },
  {
    ticker: "EXTN",
    title: "Exterran Corp",
  },
  {
    ticker: "APRN",
    title: "Blue Apron Holdings, Inc.",
  },
  {
    ticker: "BOXD",
    title: "Boxed, Inc.",
  },
  {
    ticker: "FTHM",
    title: "Fathom Holdings Inc.",
  },
  {
    ticker: "CTG",
    title: "COMPUTER TASK GROUP INC",
  },
  {
    ticker: "FMN",
    title: "Federated Hermes Premier Municipal Income Fund",
  },
  {
    ticker: "PASG",
    title: "Passage BIO, Inc.",
  },
  {
    ticker: "VATE",
    title: "INNOVATE Corp.",
  },
  {
    ticker: "BGSF",
    title: "BGSF, INC.",
  },
  {
    ticker: "ANEB",
    title: "Anebulo Pharmaceuticals, Inc.",
  },
  {
    ticker: "EML",
    title: "EASTERN CO",
  },
  {
    ticker: "RRGB",
    title: "RED ROBIN GOURMET BURGERS INC",
  },
  {
    ticker: "UTSI",
    title: "UTSTARCOM HOLDINGS CORP.",
  },
  {
    ticker: "ATOS",
    title: "ATOSSA THERAPEUTICS, INC.",
  },
  {
    ticker: "CLLS",
    title: "Cellectis S.A.",
  },
  {
    ticker: "MNTX",
    title: "Manitex International, Inc.",
  },
  {
    ticker: "WEA",
    title: "WESTERN ASSET PREMIER BOND FUND",
  },
  {
    ticker: "LARK",
    title: "LANDMARK BANCORP INC",
  },
  {
    ticker: "CHRA",
    title: "Charah Solutions, Inc.",
  },
  {
    ticker: "BEEM",
    title: "Beam Global",
  },
  {
    ticker: "SPPI",
    title: "SPECTRUM PHARMACEUTICALS INC",
  },
  {
    ticker: "CLPR",
    title: "Clipper Realty Inc.",
  },
  {
    ticker: "UBFO",
    title: "UNITED SECURITY BANCSHARES",
  },
  {
    ticker: "IRME",
    title: "IR-Med, Inc.",
  },
  {
    ticker: "CPKF",
    title: "CHESAPEAKE FINANCIAL SHARES INC",
  },
  {
    ticker: "CTRM",
    title: "Castor Maritime Inc.",
  },
  {
    ticker: "GMGI",
    title: "Golden Matrix Group, Inc.",
  },
  {
    ticker: "GAN",
    title: "GAN Ltd",
  },
  {
    ticker: "TMPM",
    title: "TURMERIC ACQUISITION CORP.",
  },
  {
    ticker: "BFIN",
    title: "BankFinancial CORP",
  },
  {
    ticker: "WULF",
    title: "TERAWULF INC.",
  },
  {
    ticker: "AVHI",
    title: "Achari Ventures Holdings Corp. I",
  },
  {
    ticker: "ALPP",
    title: "ALPINE 4 HOLDINGS, INC.",
  },
  {
    ticker: "JFIN",
    title: "Jiayin Group Inc.",
  },
  {
    ticker: "FAT",
    title: "Fat Brands, Inc",
  },
  {
    ticker: "JAKK",
    title: "JAKKS PACIFIC INC",
  },
  {
    ticker: "CVRX",
    title: "CVRx, Inc.",
  },
  {
    ticker: "PTE",
    title: "POLARITYTE, INC.",
  },
  {
    ticker: "FNRN",
    title: "FIRST NORTHERN COMMUNITY BANCORP",
  },
  {
    ticker: "JG",
    title: "Aurora Mobile Ltd",
  },
  {
    ticker: "NXTC",
    title: "NextCure, Inc.",
  },
  {
    ticker: "BKKT",
    title: "Bakkt Holdings, Inc.",
  },
  {
    ticker: "SUND",
    title: "Sundance Strategies, Inc.",
  },
  {
    ticker: "EPIX",
    title: "ESSA Pharma Inc.",
  },
  {
    ticker: "RCEL",
    title: "AVITA Medical, Inc.",
  },
  {
    ticker: "LGVN",
    title: "Longeveron Inc.",
  },
  {
    ticker: "CTO",
    title: "CTO Realty Growth, Inc.",
  },
  {
    ticker: "LEAT",
    title: "Leatt Corp",
  },
  {
    ticker: "NHS",
    title: "Neuberger Berman High Yield Strategies Fund Inc.",
  },
  {
    ticker: "ZY",
    title: "Zymergen Inc.",
  },
  {
    ticker: "MNP",
    title: "WESTERN ASSET MUNICIPAL PARTNERS FUND INC.",
  },
  {
    ticker: "MLVF",
    title: "MALVERN BANCORP, INC.",
  },
  {
    ticker: "ISSC",
    title: "INNOVATIVE SOLUTIONS & SUPPORT INC",
  },
  {
    ticker: "EFSI",
    title: "EAGLE FINANCIAL SERVICES INC",
  },
  {
    ticker: "OBCI",
    title: "OCEAN BIO CHEM INC",
  },
  {
    ticker: "FFMGF",
    title: "First Mining Gold Corp.",
  },
  {
    ticker: "SPOK",
    title: "Spok Holdings, Inc",
  },
  {
    ticker: "CFRX",
    title: "CONTRAFECT Corp",
  },
  {
    ticker: "JSD",
    title: "Nuveen Short Duration Credit Opportunities Fund",
  },
  {
    ticker: "FLXS",
    title: "FLEXSTEEL INDUSTRIES INC",
  },
  {
    ticker: "DS",
    title: "Drive Shack Inc.",
  },
  {
    ticker: "OILY",
    title: "Sino American Oil Co",
  },
  {
    ticker: "AVBH",
    title: "Avidbank Holdings, Inc.",
  },
  {
    ticker: "TWIN",
    title: "TWIN DISC INC",
  },
  {
    ticker: "NPCE",
    title: "NeuroPace Inc",
  },
  {
    ticker: "KF",
    title: "KOREA FUND INC",
  },
  {
    ticker: "MNOV",
    title: "MEDICINOVA INC",
  },
  {
    ticker: "PFO",
    title: "Flaherty & Crumrine PREFERRED & INCOME OPPORTUNITY FUND INC",
  },
  {
    ticker: "OFED",
    title: "Oconee Federal Financial Corp.",
  },
  {
    ticker: "CXE",
    title: "MFS HIGH INCOME MUNICIPAL TRUST",
  },
  {
    ticker: "CWBC",
    title: "COMMUNITY WEST BANCSHARES /",
  },
  {
    ticker: "CBCA",
    title: "Crown Baus Capital Corp.",
  },
  {
    ticker: "ADOC",
    title: "Edoc Acquisition Corp.",
  },
  {
    ticker: "RMTI",
    title: "ROCKWELL MEDICAL, INC.",
  },
  {
    ticker: "ATHA",
    title: "Athira Pharma, Inc.",
  },
  {
    ticker: "CTMX",
    title: "CytomX Therapeutics, Inc.",
  },
  {
    ticker: "ADN",
    title: "ADVENT TECHNOLOGIES HOLDINGS, INC.",
  },
  {
    ticker: "VIA",
    title: "Via Renewables, Inc.",
  },
  {
    ticker: "CSSE",
    title: "Chicken Soup for the Soul Entertainment, Inc.",
  },
  {
    ticker: "ITI",
    title: "ITERIS, INC.",
  },
  {
    ticker: "SBFG",
    title: "SB FINANCIAL GROUP, INC.",
  },
  {
    ticker: "VIOT",
    title: "Viomi Technology Co., Ltd",
  },
  {
    ticker: "GSV",
    title: "Gold Standard Ventures Corp.",
  },
  {
    ticker: "PBHC",
    title: "Pathfinder Bancorp, Inc.",
  },
  {
    ticker: "IVAC",
    title: "INTEVAC INC",
  },
  {
    ticker: "LITB",
    title: "LightInTheBox Holding Co., Ltd.",
  },
  {
    ticker: "SRL",
    title: "Scully Royalty Ltd.",
  },
  {
    ticker: "FUV",
    title: "Arcimoto Inc",
  },
  {
    ticker: "GNSS",
    title: "Genasys Inc.",
  },
  {
    ticker: "GASS",
    title: "StealthGas Inc.",
  },
  {
    ticker: "AGD",
    title: "ABERDEEN GLOBAL DYNAMIC DIVIDEND FUND",
  },
  {
    ticker: "LAKE",
    title: "LAKELAND INDUSTRIES INC",
  },
  {
    ticker: "MILE",
    title: "Metromile, Inc.",
  },
  {
    ticker: "CBFV",
    title: "CB Financial Services, Inc.",
  },
  {
    ticker: "BRID",
    title: "BRIDGFORD FOODS CORP",
  },
  {
    ticker: "FINW",
    title: "Finwise Bancorp",
  },
  {
    ticker: "FUNC",
    title: "FIRST UNITED CORP/MD/",
  },
  {
    ticker: "DLNG",
    title: "Dynagas LNG Partners LP",
  },
  {
    ticker: "CDRO",
    title: "Codere Online Luxembourg, S.A.",
  },
  {
    ticker: "PQEFF",
    title: "PETROTEQ ENERGY INC.",
  },
  {
    ticker: "GLSI",
    title: "Greenwich LifeSciences, Inc.",
  },
  {
    ticker: "JHI",
    title: "JOHN HANCOCK INVESTORS TRUST",
  },
  {
    ticker: "HRBR",
    title: "HARBOR DIVERSIFIED, INC.",
  },
  {
    ticker: "OTIC",
    title: "OTONOMY, INC.",
  },
  {
    ticker: "SPPP",
    title: "SPROTT PHYSICAL PLATINUM & PALLADIUM TRUST",
  },
  {
    ticker: "UNB",
    title: "UNION BANKSHARES INC",
  },
  {
    ticker: "ARMC",
    title: "Un Monde International Worldwide Ltd.",
  },
  {
    ticker: "ORRCF",
    title: "OROCO RESOURCE CORP",
  },
  {
    ticker: "ERLFF",
    title: "Entree Resources Ltd.",
  },
  {
    ticker: "CHMI",
    title: "Cherry Hill Mortgage Investment Corp",
  },
  {
    ticker: "ECF",
    title: "ELLSWORTH GROWTH & INCOME FUND LTD",
  },
  {
    ticker: "WEJO",
    title: "Wejo Group Ltd",
  },
  {
    ticker: "HSTO",
    title: "Histogen Inc.",
  },
  {
    ticker: "ADVM",
    title: "Adverum Biotechnologies, Inc.",
  },
  {
    ticker: "HITI",
    title: "High Tide Inc.",
  },
  {
    ticker: "MGF",
    title: "MFS GOVERNMENT MARKETS INCOME TRUST",
  },
  {
    ticker: "OYST",
    title: "Oyster Point Pharma, Inc.",
  },
  {
    ticker: "PAI",
    title: "Western Asset Investment Grade Income Fund Inc.",
  },
  {
    ticker: "VOC",
    title: "VOC Energy Trust",
  },
  {
    ticker: "NIM",
    title: "NUVEEN SELECT MATURITIES MUNICIPAL FUND",
  },
  {
    ticker: "ERH",
    title: "ALLSPRING UTILITIES & HIGH INCOME FUND",
  },
  {
    ticker: "EVLO",
    title: "Evelo Biosciences, Inc.",
  },
  {
    ticker: "SRT",
    title: "Startek, Inc.",
  },
  {
    ticker: "GDL",
    title: "GDL FUND",
  },
  {
    ticker: "PVL",
    title: "Permianville Royalty Trust",
  },
  {
    ticker: "EMKR",
    title: "EMCORE CORP",
  },
  {
    ticker: "HOWL",
    title: "Werewolf Therapeutics, Inc.",
  },
  {
    ticker: "CDXC",
    title: "ChromaDex Corp.",
  },
  {
    ticker: "SBI",
    title: "WESTERN ASSET INTERMEDIATE MUNI FUND INC.",
  },
  {
    ticker: "RRTS",
    title: "Roadrunner Transportation Systems, Inc.",
  },
  {
    ticker: "PBYI",
    title: "PUMA BIOTECHNOLOGY, INC.",
  },
  {
    ticker: "UEEC",
    title: "United Health Products, Inc.",
  },
  {
    ticker: "INTE",
    title: "Integral Acquisition Corp 1",
  },
  {
    ticker: "MSAC",
    title: "Medicus Sciences Acquisition Corp.",
  },
  {
    ticker: "ACU",
    title: "ACME UNITED CORP",
  },
  {
    ticker: "GDLC",
    title: "Grayscale Digital Large Cap Fund LLC",
  },
  {
    ticker: "VRDR",
    title: "VERDE RESOURCES, INC.",
  },
  {
    ticker: "ARC",
    title: "ARC DOCUMENT SOLUTIONS, INC.",
  },
  {
    ticker: "NRT",
    title: "NORTH EUROPEAN OIL ROYALTY TRUST",
  },
  {
    ticker: "ASUR",
    title: "ASURE SOFTWARE INC",
  },
  {
    ticker: "VBLT",
    title: "Vascular Biogenics Ltd.",
  },
  {
    ticker: "NKG",
    title: "NUVEEN GEORGIA QUALITY MUNICIPAL INCOME FUND",
  },
  {
    ticker: "BRDS",
    title: "Bird Global, Inc.",
  },
  {
    ticker: "PRAX",
    title: "Praxis Precision Medicines, Inc.",
  },
  {
    ticker: "WHG",
    title: "WESTWOOD HOLDINGS GROUP INC",
  },
  {
    ticker: "AMTI",
    title: "Applied Molecular Transport Inc.",
  },
  {
    ticker: "FXNC",
    title: "FIRST NATIONAL CORP /VA/",
  },
  {
    ticker: "LBAO",
    title: "LUBOA GROUP, INC.",
  },
  {
    ticker: "RLFTY",
    title: "Relief Therapeutics Holding SA",
  },
  {
    ticker: "ZEPP",
    title: "Zepp Health Corp",
  },
  {
    ticker: "PHD",
    title: "Pioneer Floating Rate Fund, Inc.",
  },
  {
    ticker: "RMI",
    title: "RiverNorth Opportunistic Municipal Income Fund, Inc.",
  },
  {
    ticker: "KNIT",
    title: "KINETIC GROUP INC.",
  },
  {
    ticker: "NMT",
    title: "NUVEEN MASSACHUSETTS QUALITY MUNICIPAL INCOME FUND",
  },
  {
    ticker: "TCRR",
    title: "TCR2 THERAPEUTICS INC.",
  },
  {
    ticker: "DCF",
    title:
      "BNY Mellon Alcentra Global Credit Income 2024 Target Term Fund, Inc.",
  },
  {
    ticker: "SRZN",
    title: "Surrozen, Inc./DE",
  },
  {
    ticker: "USAS",
    title: "Americas Gold & Silver Corp",
  },
  {
    ticker: "AQB",
    title: "AquaBounty Technologies, Inc.",
  },
  {
    ticker: "MYNZ",
    title: "MAINZ BIOMED N.V.",
  },
  {
    ticker: "PLG",
    title: "PLATINUM GROUP METALS LTD",
  },
  {
    ticker: "LEE",
    title: "LEE ENTERPRISES, Inc",
  },
  {
    ticker: "FET",
    title: "FORUM ENERGY TECHNOLOGIES, INC.",
  },
  {
    ticker: "SOTK",
    title: "SONO TEK CORP",
  },
  {
    ticker: "INZY",
    title: "Inozyme Pharma, Inc.",
  },
  {
    ticker: "DPLS",
    title: "DarkPulse, Inc.",
  },
  {
    ticker: "FVAM",
    title: "01 Acquisition Corp.",
  },
  {
    ticker: "LAX",
    title: "8i Acquisition 2 Corp.",
  },
  {
    ticker: "RCAT",
    title: "Red Cat Holdings, Inc.",
  },
  {
    ticker: "ATNM",
    title: "Actinium Pharmaceuticals, Inc.",
  },
  {
    ticker: "KRMD",
    title: "KORU Medical Systems, Inc.",
  },
  {
    ticker: "CDZI",
    title: "CADIZ INC",
  },
  {
    ticker: "PXS",
    title: "Pyxis Tankers Inc.",
  },
  {
    ticker: "IAF",
    title: "ABERDEEN AUSTRALIA EQUITY FUND INC",
  },
  {
    ticker: "FUSN",
    title: "Fusion Pharmaceuticals Inc.",
  },
  {
    ticker: "EVTV",
    title: "Envirotech Vehicles, Inc.",
  },
  {
    ticker: "PROV",
    title: "PROVIDENT FINANCIAL HOLDINGS INC",
  },
  {
    ticker: "XNET",
    title: "Xunlei Ltd",
  },
  {
    ticker: "PCX",
    title: "Parsec Capital Acquisitions Corp.",
  },
  {
    ticker: "BBQ",
    title: "BBQ HOLDINGS, INC.",
  },
  {
    ticker: "BCAB",
    title: "BioAtla, Inc.",
  },
  {
    ticker: "SNCR",
    title: "SYNCHRONOSS TECHNOLOGIES INC",
  },
  {
    ticker: "THM",
    title: "INTERNATIONAL TOWER HILL MINES LTD",
  },
  {
    ticker: "TAST",
    title: "CARROLS RESTAURANT GROUP, INC.",
  },
  {
    ticker: "CYT",
    title: "Cyteir Therapeutics, Inc.",
  },
  {
    ticker: "CMTV",
    title: "COMMUNITY BANCORP /VT",
  },
  {
    ticker: "AKUS",
    title: "Akouos, Inc.",
  },
  {
    ticker: "KPLT",
    title: "Katapult Holdings, Inc.",
  },
  {
    ticker: "GVXXF",
    title: "GoviEx Uranium Inc.",
  },
  {
    ticker: "IVDA",
    title: "Iveda Solutions, Inc.",
  },
  {
    ticker: "TELA",
    title: "TELA Bio, Inc.",
  },
  {
    ticker: "STAF",
    title: "Staffing 360 Solutions, Inc.",
  },
  {
    ticker: "PFLC",
    title: "PACIFIC FINANCIAL CORP",
  },
  {
    ticker: "VERY",
    title: "Vericity, Inc.",
  },
  {
    ticker: "CUII",
    title: "China United Insurance Service, Inc.",
  },
  {
    ticker: "CGO",
    title: "CALAMOS GLOBAL TOTAL RETURN FUND",
  },
  {
    ticker: "CYDVF",
    title: "CYPRESS DEVELOPMENT CORP",
  },
  {
    ticker: "HMNF",
    title: "HMN FINANCIAL INC",
  },
  {
    ticker: "RBKB",
    title: "Rhinebeck Bancorp, Inc.",
  },
  {
    ticker: "FCRD",
    title: "First Eagle Alternative Capital BDC, Inc.",
  },
  {
    ticker: "EVOK",
    title: "Evoke Pharma Inc",
  },
  {
    ticker: "CSBR",
    title: "CHAMPIONS ONCOLOGY, INC.",
  },
  {
    ticker: "IHD",
    title: "Voya Emerging Markets High Dividend Equity Fund",
  },
  {
    ticker: "KOPN",
    title: "KOPIN CORP",
  },
  {
    ticker: "PDSB",
    title: "PDS Biotechnology Corp",
  },
  {
    ticker: "ASMB",
    title: "ASSEMBLY BIOSCIENCES, INC.",
  },
  {
    ticker: "SIRC",
    title: "SOLAR INTEGRATED ROOFING CORP.",
  },
  {
    ticker: "HGEN",
    title: "HUMANIGEN, INC",
  },
  {
    ticker: "OIIM",
    title: "O2MICRO INTERNATIONAL LTD",
  },
  {
    ticker: "FIXX",
    title: "Homology Medicines, Inc.",
  },
  {
    ticker: "GCEH",
    title: "Global Clean Energy Holdings, Inc.",
  },
  {
    ticker: "ETTX",
    title: "Entasis Therapeutics Holdings Inc.",
  },
  {
    ticker: "ASYS",
    title: "AMTECH SYSTEMS INC",
  },
  {
    ticker: "RDI",
    title: "READING INTERNATIONAL INC",
  },
  {
    ticker: "NNBR",
    title: "NN INC",
  },
  {
    ticker: "GREE",
    title: "Greenidge Generation Holdings Inc.",
  },
  {
    ticker: "ENZ",
    title: "ENZO BIOCHEM INC",
  },
  {
    ticker: "MKD",
    title: "Molecular Data Inc.",
  },
  {
    ticker: "CSBB",
    title: "CSB BANCORP INC /OH",
  },
  {
    ticker: "SWZ",
    title: "SWISS HELVETIA FUND, INC.",
  },
  {
    ticker: "LPTX",
    title: "LEAP THERAPEUTICS, INC.",
  },
  {
    ticker: "SJ",
    title: "Scienjoy Holding Corp",
  },
  {
    ticker: "GMDA",
    title: "Gamida Cell Ltd.",
  },
  {
    ticker: "TUSK",
    title: "MAMMOTH ENERGY SERVICES, INC.",
  },
  {
    ticker: "GCV",
    title: "GABELLI CONVERTIBLE & INCOME SECURITIES FUND INC",
  },
  {
    ticker: "RFM",
    title: "RiverNorth Flexible Municipal Income Fund, Inc.",
  },
  {
    ticker: "DRRX",
    title: "DURECT CORP",
  },
  {
    ticker: "DBTX",
    title: "Decibel Therapeutics, Inc.",
  },
  {
    ticker: "KSM",
    title: "DWS STRATEGIC MUNICIPAL INCOME TRUST",
  },
  {
    ticker: "AFBI",
    title: "Affinity Bancshares, Inc.",
  },
  {
    ticker: "SILEF",
    title: "Silver Elephant Mining Corp.",
  },
  {
    ticker: "CIZN",
    title: "CITIZENS HOLDING CO /MS/",
  },
  {
    ticker: "CRKM",
    title: "Crank Media Inc",
  },
  {
    ticker: "ACHL",
    title: "Achilles Therapeutics plc",
  },
  {
    ticker: "TRTK",
    title: "TORtec Group Corp",
  },
  {
    ticker: "PHUN",
    title: "Phunware, Inc.",
  },
  {
    ticker: "SUP",
    title: "SUPERIOR INDUSTRIES INTERNATIONAL INC",
  },
  {
    ticker: "ENOB",
    title: "Enochian Biosciences Inc",
  },
  {
    ticker: "FOA",
    title: "Finance of America Companies Inc.",
  },
  {
    ticker: "SLGL",
    title: "Sol-Gel Technologies Ltd.",
  },
  {
    ticker: "PRT",
    title: "PermRock Royalty Trust",
  },
  {
    ticker: "BCV",
    title: "BANCROFT FUND LTD",
  },
  {
    ticker: "RNLX",
    title: "Renalytix plc",
  },
  {
    ticker: "EXD",
    title: "Eaton Vance Tax-Managed Buy-Write Strategy Fund",
  },
  {
    ticker: "PHX",
    title: "PHX MINERALS INC.",
  },
  {
    ticker: "FONR",
    title: "FONAR CORP",
  },
  {
    ticker: "CLAY",
    title: "Chavant Capital Acquisition Corp.",
  },
  {
    ticker: "BCLI",
    title: "BRAINSTORM CELL THERAPEUTICS INC.",
  },
  {
    ticker: "GGZ",
    title: "Gabelli Global Small & Mid Cap Value Trust",
  },
  {
    ticker: "EARN",
    title: "Ellington Residential Mortgage REIT",
  },
  {
    ticker: "AAIC",
    title: "Arlington Asset Investment Corp.",
  },
  {
    ticker: "QK",
    title: "Q&K INTERNATIONAL GROUP Ltd",
  },
  {
    ticker: "QNBC",
    title: "QNB CORP",
  },
  {
    ticker: "SFBC",
    title: "Sound Financial Bancorp, Inc.",
  },
  {
    ticker: "ICAD",
    title: "ICAD INC",
  },
  {
    ticker: "PNI",
    title: "PIMCO NEW YORK MUNICIPAL INCOME FUND II",
  },
  {
    ticker: "ARMP",
    title: "Armata Pharmaceuticals, Inc.",
  },
  {
    ticker: "MRAM",
    title: "EVERSPIN TECHNOLOGIES INC",
  },
  {
    ticker: "NOBH",
    title: "NOBILITY HOMES INC",
  },
  {
    ticker: "ENBP",
    title: "ENB Financial Corp",
  },
  {
    ticker: "SQNS",
    title: "SEQUANS COMMUNICATIONS",
  },
  {
    ticker: "SZC",
    title: "Cushing NextGen Infrastructure Income Fund",
  },
  {
    ticker: "PED",
    title: "PEDEVCO CORP",
  },
  {
    ticker: "PXLW",
    title: "PIXELWORKS, INC",
  },
  {
    ticker: "NUVR",
    title: "Nuvera Communications, Inc.",
  },
  {
    ticker: "PRTK",
    title: "Paratek Pharmaceuticals, Inc.",
  },
  {
    ticker: "DRIO",
    title: "DarioHealth Corp.",
  },
  {
    ticker: "MRZM",
    title: "MARIZYME INC",
  },
  {
    ticker: "FCAP",
    title: "FIRST CAPITAL INC",
  },
  {
    ticker: "XGN",
    title: "EXAGEN INC.",
  },
  {
    ticker: "CRDF",
    title: "Cardiff Oncology, Inc.",
  },
  {
    ticker: "ANVS",
    title: "Annovis Bio, Inc.",
  },
  {
    ticker: "TALS",
    title: "Talaris Therapeutics, Inc.",
  },
  {
    ticker: "VCIF",
    title: "Vertical Capital Income Fund",
  },
  {
    ticker: "HIL",
    title: "Hill International, Inc.",
  },
  {
    ticker: "REPH",
    title: "Societal CDMO, Inc.",
  },
  {
    ticker: "AUGG",
    title: "AUGUSTA GOLD CORP.",
  },
  {
    ticker: "AUBN",
    title: "AUBURN NATIONAL BANCORPORATION, INC",
  },
  {
    ticker: "CMCM",
    title: "Cheetah Mobile Inc.",
  },
  {
    ticker: "AREB",
    title: "AMERICAN REBEL HOLDINGS INC",
  },
  {
    ticker: "JDVB",
    title: "JD BANCSHARES INC",
  },
  {
    ticker: "BCTX",
    title: "BriaCell Therapeutics Corp.",
  },
  {
    ticker: "HYSR",
    title: "SUNHYDROGEN, INC.",
  },
  {
    ticker: "TRX",
    title: "TRX GOLD Corp",
  },
  {
    ticker: "EVF",
    title: "EATON VANCE SENIOR INCOME TRUST",
  },
  {
    ticker: "DIT",
    title: "AMCON DISTRIBUTING CO",
  },
  {
    ticker: "BKSC",
    title: "BANK OF SOUTH CAROLINA CORP",
  },
  {
    ticker: "MOST",
    title: "MobileSmith, Inc.",
  },
  {
    ticker: "BGI",
    title: "BIRKS GROUP INC.",
  },
  {
    ticker: "YQ",
    title: "17 Education & Technology Group Inc.",
  },
  {
    ticker: "UBCP",
    title: "UNITED BANCORP INC /OH/",
  },
  {
    ticker: "JEMD",
    title: "Nuveen Emerging Markets Debt 2022 Target Term Fund",
  },
  {
    ticker: "CMU",
    title: "MFS HIGH YIELD MUNICIPAL TRUST",
  },
  {
    ticker: "BFGX",
    title: "BANGFU TECHNOLOGY GROUP CO., LTD.",
  },
  {
    ticker: "INTG",
    title: "INTERGROUP CORP",
  },
  {
    ticker: "ASXC",
    title: "ASENSUS SURGICAL, INC.",
  },
  {
    ticker: "BDTX",
    title: "Black Diamond Therapeutics, Inc.",
  },
  {
    ticker: "CEI",
    title: "CAMBER ENERGY, INC.",
  },
  {
    ticker: "ISDR",
    title: "ISSUER DIRECT CORP",
  },
  {
    ticker: "PRTG",
    title: "PORTAGE BIOTECH INC.",
  },
  {
    ticker: "BHSE",
    title: "Bull Horn Holdings Corp.",
  },
  {
    ticker: "SY",
    title: "So-Young International Inc.",
  },
  {
    ticker: "BTBT",
    title: "Bit Digital, Inc",
  },
  {
    ticker: "GLV",
    title: "Clough Global Dividend & Income Fund",
  },
  {
    ticker: "VGI",
    title: "Virtus Global Multi-Sector Income Fund",
  },
  {
    ticker: "BNIX",
    title: "Bannix Acquisition Corp.",
  },
  {
    ticker: "DRTT",
    title: "DIRTT ENVIRONMENTAL SOLUTIONS LTD",
  },
  {
    ticker: "EMCF",
    title: "EMCLAIRE FINANCIAL CORP",
  },
  {
    ticker: "GAU",
    title: "Galiano Gold Inc.",
  },
  {
    ticker: "AMAM",
    title: "Ambrx Biopharma Inc.",
  },
  {
    ticker: "AREC",
    title: "American Resources Corp",
  },
  {
    ticker: "CBAT",
    title: "CBAK Energy Technology, Inc.",
  },
  {
    ticker: "DTIL",
    title: "PRECISION BIOSCIENCES INC",
  },
  {
    ticker: "KLR",
    title: "Kaleyra, Inc.",
  },
  {
    ticker: "SMMT",
    title: "Summit Therapeutics Inc.",
  },
  {
    ticker: "CJJD",
    title: "China Jo-Jo Drugstores Holdings, Inc.",
  },
  {
    ticker: "WBQNL",
    title: "Woodbridge Liquidation Trust",
  },
  {
    ticker: "QUIK",
    title: "QUICKLOGIC Corp",
  },
  {
    ticker: "EACO",
    title: "EACO CORP",
  },
  {
    ticker: "VNCE",
    title: "VINCE HOLDING CORP.",
  },
  {
    ticker: "CADL",
    title: "Candel Therapeutics, Inc.",
  },
  {
    ticker: "APHE",
    title: "ALPHA ENERGY INC",
  },
  {
    ticker: "FPOCF",
    title: "FPX Nickel Corp.",
  },
  {
    ticker: "ECRP",
    title: "Chee Corp.",
  },
  {
    ticker: "PFX",
    title: "PhenixFIN Corp",
  },
  {
    ticker: "AZYO",
    title: "AZIYO BIOLOGICS, INC.",
  },
  {
    ticker: "UBOH",
    title: "UNITED BANCSHARES INC/OH",
  },
  {
    ticker: "HNW",
    title: "Pioneer Diversified High Income Fund, Inc.",
  },
  {
    ticker: "LNKB",
    title: "LINKBANCORP, Inc.",
  },
  {
    ticker: "CYBN",
    title: "CYBIN INC.",
  },
  {
    ticker: "DARE",
    title: "Dare Bioscience, Inc.",
  },
  {
    ticker: "IMUX",
    title: "IMMUNIC, INC.",
  },
  {
    ticker: "SFDL",
    title: "SECURITY FEDERAL CORP",
  },
  {
    ticker: "FVTI",
    title: "Fortune Valley Treasures, Inc.",
  },
  {
    ticker: "ELYM",
    title: "Eliem Therapeutics, Inc.",
  },
  {
    ticker: "FLNT",
    title: "Fluent, Inc.",
  },
  {
    ticker: "CRT",
    title: "CROSS TIMBERS ROYALTY TRUST",
  },
  {
    ticker: "JLS",
    title: "Nuveen Mortgage & Income Fund/MA/",
  },
  {
    ticker: "NMI",
    title: "NUVEEN MUNICIPAL INCOME FUND INC",
  },
  {
    ticker: "BRAG",
    title: "Bragg Gaming Group Inc.",
  },
  {
    ticker: "KNWN",
    title: "KNOW LABS, INC.",
  },
  {
    ticker: "MPVDF",
    title: "Mountain Province Diamonds Inc.",
  },
  {
    ticker: "INVU",
    title: "Investview, Inc.",
  },
  {
    ticker: "GNT",
    title: "GAMCO Natural Resources, Gold & Income Trust",
  },
  {
    ticker: "CURI",
    title: "CuriosityStream Inc.",
  },
  {
    ticker: "ANIX",
    title: "Anixa Biosciences Inc",
  },
  {
    ticker: "CIDM",
    title: "Cinedigm Corp.",
  },
  {
    ticker: "SND",
    title: "Smart Sand, Inc.",
  },
  {
    ticker: "SZSMF",
    title: "Santacruz Silver Mining Ltd.",
  },
  {
    ticker: "GGROU",
    title: "Golden Growers Cooperative",
  },
  {
    ticker: "ACRHF",
    title: "Acreage Holdings, Inc.",
  },
  {
    ticker: "AGFS",
    title: "AgroFresh Solutions, Inc.",
  },
  {
    ticker: "ALOT",
    title: "AstroNova, Inc.",
  },
  {
    ticker: "MCAG",
    title: "Mountain Crest Acquisition Corp. V",
  },
  {
    ticker: "CAPR",
    title: "CAPRICOR THERAPEUTICS, INC.",
  },
  {
    ticker: "CLGN",
    title: "CollPlant Biotechnologies Ltd",
  },
  {
    ticker: "NTIC",
    title: "NORTHERN TECHNOLOGIES INTERNATIONAL CORP",
  },
  {
    ticker: "MYMD",
    title: "MyMD Pharmaceuticals, Inc.",
  },
  {
    ticker: "GTBP",
    title: "GT Biopharma, Inc.",
  },
  {
    ticker: "SBEV",
    title: "SPLASH BEVERAGE GROUP, INC.",
  },
  {
    ticker: "ARIZ",
    title: "Arisz Acquisition Corp.",
  },
  {
    ticker: "CKPT",
    title: "Checkpoint Therapeutics, Inc.",
  },
  {
    ticker: "FMBM",
    title: "F&M BANK CORP",
  },
  {
    ticker: "HHS",
    title: "HARTE HANKS INC",
  },
  {
    ticker: "ADES",
    title: "Advanced Emissions Solutions, Inc.",
  },
  {
    ticker: "CLSD",
    title: "Clearside Biomedical, Inc.",
  },
  {
    ticker: "BEDU",
    title: "Bright Scholar Education Holdings Ltd",
  },
  {
    ticker: "PGZ",
    title: "Principal Real Estate Income Fund",
  },
  {
    ticker: "CTSO",
    title: "Cytosorbents Corp",
  },
  {
    ticker: "GFGY",
    title: "Granite Falls Energy, LLC",
  },
  {
    ticker: "NTZ",
    title: "NATUZZI S P A",
  },
  {
    ticker: "SQZ",
    title: "SQZ Biotechnologies Co",
  },
  {
    ticker: "CFCX",
    title: "Centric Financial Corp",
  },
  {
    ticker: "HQDA",
    title: "HQDA ELDERLY LIFE NETWORK CORP.",
  },
  {
    ticker: "ADAG",
    title: "Adagene Inc.",
  },
  {
    ticker: "NINE",
    title: "Nine Energy Service, Inc.",
  },
  {
    ticker: "CPS",
    title: "Cooper-Standard Holdings Inc.",
  },
  {
    ticker: "GLU",
    title: "GABELLI GLOBAL UTILITY & INCOME TRUST",
  },
  {
    ticker: "NMS",
    title: "Nuveen Minnesota Quality Municipal Income Fund",
  },
  {
    ticker: "NXC",
    title: "NUVEEN CALIFORNIA SELECT TAX FREE INCOME PORTFOLIO",
  },
  {
    ticker: "MKTW",
    title: "MARKETWISE, INC.",
  },
  {
    ticker: "PCYG",
    title: "PARK CITY GROUP INC",
  },
  {
    ticker: "DEX",
    title: "Delaware Enhanced Global Dividend & Income Fund",
  },
  {
    ticker: "SMLP",
    title: "Summit Midstream Partners, LP",
  },
  {
    ticker: "CRIS",
    title: "CURIS INC",
  },
  {
    ticker: "LYLT",
    title: "Loyalty Ventures Inc.",
  },
  {
    ticker: "BTCY",
    title: "BIOTRICITY INC.",
  },
  {
    ticker: "LJPC",
    title: "LA JOLLA PHARMACEUTICAL CO",
  },
  {
    ticker: "PGP",
    title: "PIMCO Global StocksPLUS & Income Fund",
  },
  {
    ticker: "LUCD",
    title: "Lucid Diagnostics Inc.",
  },
  {
    ticker: "ALJJ",
    title: "ALJ REGIONAL HOLDINGS INC",
  },
  {
    ticker: "CAAS",
    title: "CHINA AUTOMOTIVE SYSTEMS INC",
  },
  {
    ticker: "DYAI",
    title: "DYADIC INTERNATIONAL INC",
  },
  {
    ticker: "PYPD",
    title: "PolyPid Ltd.",
  },
  {
    ticker: "HTOO",
    title: "Fusion Fuel Green PLC",
  },
  {
    ticker: "ELMD",
    title: "Electromed, Inc.",
  },
  {
    ticker: "CCM",
    title: "Concord Medical Services Holdings Ltd",
  },
  {
    ticker: "MAYS",
    title: "MAYS J W INC",
  },
  {
    ticker: "BCRD",
    title: "BlueOne Card, Inc.",
  },
  {
    ticker: "FOSYF",
    title: "Forsys Metals Corp",
  },
  {
    ticker: "OMWS",
    title: "OMNIA WELLNESS INC.",
  },
  {
    ticker: "ZENV",
    title: "Zenvia Inc.",
  },
  {
    ticker: "GAIA",
    title: "GAIA, INC",
  },
  {
    ticker: "FARM",
    title: "FARMER BROTHERS CO",
  },
  {
    ticker: "MGYR",
    title: "Magyar Bancorp, Inc.",
  },
  {
    ticker: "VHC",
    title: "VirnetX Holding Corp",
  },
  {
    ticker: "BFNH",
    title: "BIOFORCE NANOSCIENCES HOLDINGS, INC.",
  },
  {
    ticker: "DTF",
    title: "DTF TAX-FREE INCOME 2028 TERM FUND INC",
  },
  {
    ticker: "STIM",
    title: "Neuronetics, Inc.",
  },
  {
    ticker: "NSRPF",
    title: "Novo Resources Corp.",
  },
  {
    ticker: "UPH",
    title: "UpHealth, Inc.",
  },
  {
    ticker: "ISO",
    title: "IsoPlexis Corp",
  },
  {
    ticker: "SRAX",
    title: "SRAX, Inc.",
  },
  {
    ticker: "QMCO",
    title: "QUANTUM CORP /DE/",
  },
  {
    ticker: "GSIT",
    title: "GSI TECHNOLOGY INC",
  },
  {
    ticker: "CULL",
    title: "Cullman Bancorp, Inc. /MD/",
  },
  {
    ticker: "MLYF",
    title: "Western Magnesium Corp.",
  },
  {
    ticker: "LCHD",
    title: "Leader Capital Holdings Corp.",
  },
  {
    ticker: "LOV",
    title: "Spark Networks SE",
  },
  {
    ticker: "AXR",
    title: "AMREP CORP.",
  },
  {
    ticker: "TPZ",
    title: "TORTOISE POWER & ENERGY INFRASTRUCTURE FUND INC",
  },
  {
    ticker: "BWAY",
    title: "Brainsway Ltd.",
  },
  {
    ticker: "AXLA",
    title: "Axcella Health Inc.",
  },
  {
    ticker: "FFBW",
    title: "FFBW, Inc. /MD/",
  },
  {
    ticker: "AWH",
    title: "Aspira Women's Health Inc.",
  },
  {
    ticker: "OCCI",
    title: "OFS Credit Company, Inc.",
  },
  {
    ticker: "CMPO",
    title: "CompoSecure, Inc.",
  },
  {
    ticker: "ENLV",
    title: "Enlivex Therapeutics Ltd.",
  },
  {
    ticker: "HSON",
    title: "Hudson Global, Inc.",
  },
  {
    ticker: "ACR",
    title: "ACRES Commercial Realty Corp.",
  },
  {
    ticker: "LVTX",
    title: "LAVA Therapeutics NV",
  },
  {
    ticker: "MOVE",
    title: "Movano Inc.",
  },
  {
    ticker: "PAVM",
    title: "PAVmed Inc.",
  },
  {
    ticker: "IAE",
    title: "Voya Asia Pacific High Dividend Equity Income Fund",
  },
  {
    ticker: "CPTP",
    title: "CAPITAL PROPERTIES INC /RI/",
  },
  {
    ticker: "FTK",
    title: "FLOTEK INDUSTRIES INC/CN/",
  },
  {
    ticker: "WAYS",
    title: "Wave Sync Corp.",
  },
  {
    ticker: "STCN",
    title: "Steel Connect, Inc.",
  },
  {
    ticker: "AIRG",
    title: "AIRGAIN INC",
  },
  {
    ticker: "MUGH",
    title: "MU GLOBAL HOLDING Ltd",
  },
  {
    ticker: "PYXS",
    title: "Pyxis Oncology, Inc.",
  },
  {
    ticker: "HWIN",
    title: "MAKAMER HOLDINGS, INC.",
  },
  {
    ticker: "FBIO",
    title: "Fortress Biotech, Inc.",
  },
  {
    ticker: "EYES",
    title: "SECOND SIGHT MEDICAL PRODUCTS INC",
  },
  {
    ticker: "LSBK",
    title: "LAKE SHORE BANCORP, INC.",
  },
  {
    ticker: "CRDL",
    title: "Cardiol Therapeutics Inc.",
  },
  {
    ticker: "MIGI",
    title: "Mawson Infrastructure Group Inc.",
  },
  {
    ticker: "QRHC",
    title: "Quest Resource Holding Corp",
  },
  {
    ticker: "CEN",
    title: "CENTER COAST BROOKFIELD MLP & ENERGY INFRASTRUCTURE FUND",
  },
  {
    ticker: "PXCLY",
    title: "Phoenix Copper Limited/ADR",
  },
  {
    ticker: "LIFE",
    title: "aTYR PHARMA INC",
  },
  {
    ticker: "PMHG",
    title: "Prime Meridian Holding Co",
  },
  {
    ticker: "GLXZ",
    title: "Galaxy Gaming, Inc.",
  },
  {
    ticker: "XLO",
    title: "Xilio Therapeutics, Inc.",
  },
  {
    ticker: "PAYS",
    title: "Paysign, Inc.",
  },
  {
    ticker: "GHM",
    title: "GRAHAM CORP",
  },
  {
    ticker: "EBON",
    title: "Ebang International Holdings Inc.",
  },
  {
    ticker: "NVVE",
    title: "Nuvve Holding Corp.",
  },
  {
    ticker: "SPK",
    title: "SPK Acquisition Corp.",
  },
  {
    ticker: "OCX",
    title: "Oncocyte Corp",
  },
  {
    ticker: "MACK",
    title: "MERRIMACK PHARMACEUTICALS INC",
  },
  {
    ticker: "MESA",
    title: "MESA AIR GROUP INC",
  },
  {
    ticker: "AHG",
    title: "Akso Health Group",
  },
  {
    ticker: "CUE",
    title: "Cue Biopharma, Inc.",
  },
  {
    ticker: "ALZN",
    title: "Alzamend Neuro, Inc.",
  },
  {
    ticker: "AGRX",
    title: "AGILE THERAPEUTICS INC",
  },
  {
    ticker: "GALT",
    title: "GALECTIN THERAPEUTICS INC",
  },
  {
    ticker: "HNNA",
    title: "HENNESSY ADVISORS INC",
  },
  {
    ticker: "EDF",
    title: "Stone Harbor Emerging Markets Income Fund",
  },
  {
    ticker: "RUBY",
    title: "Rubius Therapeutics, Inc.",
  },
  {
    ticker: "REKR",
    title: "Rekor Systems, Inc.",
  },
  {
    ticker: "PWFL",
    title: "PowerFleet, Inc.",
  },
  {
    ticker: "AKOM",
    title: "Aerkomm Inc.",
  },
  {
    ticker: "MEIP",
    title: "MEI Pharma, Inc.",
  },
  {
    ticker: "SURF",
    title: "Surface Oncology, Inc.",
  },
  {
    ticker: "MGTA",
    title: "Magenta Therapeutics, Inc.",
  },
  {
    ticker: "ELVT",
    title: "Elevate Credit, Inc.",
  },
  {
    ticker: "CEV",
    title: "EATON VANCE CALIFORNIA MUNICIPAL INCOME TRUST",
  },
  {
    ticker: "GDRZF",
    title: "GOLD RESERVE INC",
  },
  {
    ticker: "GBRG",
    title: "Goldenbridge Acquisition Ltd",
  },
  {
    ticker: "BSGA",
    title: "Blue Safari Group Acquisition Corp",
  },
  {
    ticker: "HCWB",
    title: "HCW Biologics Inc.",
  },
  {
    ticker: "TCRX",
    title: "TScan Therapeutics, Inc.",
  },
  {
    ticker: "MMNFF",
    title: "MedMen Enterprises, Inc.",
  },
  {
    ticker: "OG",
    title: "Onion Global Ltd",
  },
  {
    ticker: "CNIG",
    title: "Corning Natural Gas Holding Corp",
  },
  {
    ticker: "ZNOG",
    title: "ZION OIL & GAS INC",
  },
  {
    ticker: "HEXO",
    title: "HEXO Corp.",
  },
  {
    ticker: "MFD",
    title: "MACQUARIE/FIRST TRUST GLOBAL INFRASTR/UTIL DIV & INC FUND",
  },
  {
    ticker: "NCMI",
    title: "National CineMedia, Inc.",
  },
  {
    ticker: "NOVV",
    title: "Nova Vision Acquisition Corp",
  },
  {
    ticker: "BCAC",
    title: "Brookline Capital Acquisition Corp.",
  },
  {
    ticker: "GPCO",
    title: "Golden Path Acquisition Corp",
  },
  {
    ticker: "TRVI",
    title: "Trevi Therapeutics, Inc.",
  },
  {
    ticker: "PFBX",
    title: "PEOPLES FINANCIAL CORP /MS/",
  },
  {
    ticker: "CRTX",
    title: "Cortexyme, Inc.",
  },
  {
    ticker: "PPHP",
    title: "PHP Ventures Acquisition Corp.",
  },
  {
    ticker: "JEQ",
    title: "ABERDEEN JAPAN EQUITY FUND, INC.",
  },
  {
    ticker: "HHGC",
    title: "HHG Capital Corp",
  },
  {
    ticker: "PAFO",
    title: "Pacifico Acquisition Corp.",
  },
  {
    ticker: "TZOO",
    title: "TRAVELZOO",
  },
  {
    ticker: "WRAP",
    title: "WRAP TECHNOLOGIES, INC.",
  },
  {
    ticker: "LWAY",
    title: "Lifeway Foods, Inc.",
  },
  {
    ticker: "PCTI",
    title: "PC TEL INC",
  },
  {
    ticker: "PKKW",
    title: "Parkway Acquisition Corp.",
  },
  {
    ticker: "UTGN",
    title: "UTG INC",
  },
  {
    ticker: "BAFN",
    title: "BayFirst Financial Corp.",
  },
  {
    ticker: "DRRSF",
    title: "ARIANNE PHOSPHATE INC.",
  },
  {
    ticker: "DILA",
    title: "Dila Capital Acquisition Corp",
  },
  {
    ticker: "IPA",
    title: "ImmunoPrecise Antibodies Ltd.",
  },
  {
    ticker: "ADMP",
    title: "Adamis Pharmaceuticals Corp",
  },
  {
    ticker: "AP",
    title: "AMPCO PITTSBURGH CORP",
  },
  {
    ticker: "MCAF",
    title: "Mountain Crest Acquisition Corp. IV",
  },
  {
    ticker: "CRAWA",
    title: "CRAWFORD UNITED Corp",
  },
  {
    ticker: "PPIH",
    title: "Perma-Pipe International Holdings, Inc.",
  },
  {
    ticker: "VIHD",
    title: "VISION HYDROGEN Corp",
  },
  {
    ticker: "ASPA",
    title: "Abri SPAC I, Inc.",
  },
  {
    ticker: "GMTX",
    title: "Gemini Therapeutics, Inc. /DE",
  },
  {
    ticker: "JUVF",
    title: "JUNIATA VALLEY FINANCIAL CORP",
  },
  {
    ticker: "BYFC",
    title: "BROADWAY FINANCIAL CORP DE",
  },
  {
    ticker: "SYBX",
    title: "SYNLOGIC, INC.",
  },
  {
    ticker: "CMT",
    title: "CORE MOLDING TECHNOLOGIES INC",
  },
  {
    ticker: "XSPA",
    title: "XpresSpa Group, Inc.",
  },
  {
    ticker: "AUGX",
    title: "Augmedix, Inc.",
  },
  {
    ticker: "JSPR",
    title: "Jasper Therapeutics, Inc.",
  },
  {
    ticker: "SNRG",
    title: "SusGlobal Energy Corp.",
  },
  {
    ticker: "FOXW",
    title: "FoxWayne Enterprises Acquisition Corp.",
  },
  {
    ticker: "WMLLF",
    title: "Wealth Minerals Ltd.",
  },
  {
    ticker: "LQMT",
    title: "LIQUIDMETAL TECHNOLOGIES INC",
  },
  {
    ticker: "GFASY",
    title: "Gafisa S.A.",
  },
  {
    ticker: "BKRRF",
    title: "BLACKROCK SILVER CORP.",
  },
  {
    ticker: "PNF",
    title: "PIMCO NEW YORK MUNICIPAL INCOME FUND",
  },
  {
    ticker: "LHDX",
    title: "Lucira Health, Inc.",
  },
  {
    ticker: "OSS",
    title: "ONE STOP SYSTEMS, INC.",
  },
  {
    ticker: "VGZ",
    title: "VISTA GOLD CORP",
  },
  {
    ticker: "WATT",
    title: "Energous Corp",
  },
  {
    ticker: "NCSM",
    title: "NCS Multistage Holdings, Inc.",
  },
  {
    ticker: "AXDX",
    title: "Accelerate Diagnostics, Inc",
  },
  {
    ticker: "SMID",
    title: "SMITH MIDLAND CORP",
  },
  {
    ticker: "WMC",
    title: "Western Asset Mortgage Capital Corp",
  },
  {
    ticker: "ULBI",
    title: "ULTRALIFE CORP",
  },
  {
    ticker: "LTRPA",
    title: "Liberty TripAdvisor Holdings, Inc.",
  },
  {
    ticker: "PME",
    title: "Pingtan Marine Enterprise Ltd.",
  },
  {
    ticker: "ESSC",
    title: "East Stone Acquisition Corp",
  },
  {
    ticker: "INTZ",
    title: "INTRUSION INC",
  },
  {
    ticker: "PTBS",
    title: "POTOMAC BANCSHARES INC",
  },
  {
    ticker: "BOLT",
    title: "Bolt Biotherapeutics, Inc.",
  },
  {
    ticker: "LAAA",
    title: "Lakeshore Acquisition I Corp.",
  },
  {
    ticker: "HRTG",
    title: "Heritage Insurance Holdings, Inc.",
  },
  {
    ticker: "APTO",
    title: "Aptose Biosciences Inc.",
  },
  {
    ticker: "BMTX",
    title: "BM Technologies, Inc.",
  },
  {
    ticker: "IGNY",
    title: "Ignyte Acquisition Corp.",
  },
  {
    ticker: "DMS",
    title: "Digital Media Solutions, Inc.",
  },
  {
    ticker: "INTT",
    title: "INTEST CORP",
  },
  {
    ticker: "ORTX",
    title: "Orchard Therapeutics plc",
  },
  {
    ticker: "FDOC",
    title: "FUEL DOCTOR HOLDINGS, INC.",
  },
  {
    ticker: "CLST",
    title: "Catalyst Bancorp, Inc.",
  },
  {
    ticker: "ZEST",
    title: "Ecoark Holdings, Inc.",
  },
  {
    ticker: "MPAC",
    title: "Model Performance Acquisition Corp",
  },
  {
    ticker: "LGL",
    title: "LGL GROUP INC",
  },
  {
    ticker: "SLNG",
    title: "Stabilis Solutions, Inc.",
  },
  {
    ticker: "TGGI",
    title: "TRANS GLOBAL GROUP, INC.",
  },
  {
    ticker: "BXRX",
    title: "Baudax Bio, Inc.",
  },
  {
    ticker: "SFT",
    title: "SHIFT TECHNOLOGIES, INC.",
  },
  {
    ticker: "QLI",
    title: "Qilian International Holding Group Ltd",
  },
  {
    ticker: "PCF",
    title: "HIGH INCOME SECURITIES FUND",
  },
  {
    ticker: "LNSR",
    title: "LENSAR, Inc.",
  },
  {
    ticker: "JHAA",
    title: "Nuveen Corporate Income 2023 Target Term Fund",
  },
  {
    ticker: "DYFN",
    title: "Angel Oak Dynamic Financial Strategies Income Term Trust",
  },
  {
    ticker: "LYRA",
    title: "Lyra Therapeutics, Inc.",
  },
  {
    ticker: "IPWR",
    title: "Ideal Power Inc.",
  },
  {
    ticker: "LVO",
    title: "LiveOne, Inc.",
  },
  {
    ticker: "MCAE",
    title: "Mountain Crest Acquisition Corp. III",
  },
  {
    ticker: "CXH",
    title: "MFS INVESTMENT GRADE MUNICIPAL TRUST",
  },
  {
    ticker: "ANAV",
    title: "ALPHA NETWORK ALLIANCE VENTURES INC.",
  },
  {
    ticker: "AEYE",
    title: "AUDIOEYE INC",
  },
  {
    ticker: "HGTXU",
    title: "HUGOTON ROYALTY TRUST",
  },
  {
    ticker: "GP",
    title: "GREENPOWER MOTOR Co INC.",
  },
  {
    ticker: "ORN",
    title: "Orion Group Holdings Inc",
  },
  {
    ticker: "MICT",
    title: "MICT, Inc.",
  },
  {
    ticker: "NICK",
    title: "NICHOLAS FINANCIAL INC",
  },
  {
    ticker: "TLSA",
    title: "Tiziana Life Sciences Ltd",
  },
  {
    ticker: "SEEL",
    title: "SEELOS THERAPEUTICS, INC.",
  },
  {
    ticker: "SHMP",
    title: "NaturalShrimp Inc",
  },
  {
    ticker: "SAL",
    title: "SALISBURY BANCORP, INC.",
  },
  {
    ticker: "LNGB",
    title: "KAOPU GROUP INC",
  },
  {
    ticker: "NEON",
    title: "Neonode Inc.",
  },
  {
    ticker: "TEDU",
    title: "Tarena International, Inc.",
  },
  {
    ticker: "DSP",
    title: "Viant Technology Inc.",
  },
  {
    ticker: "VLT",
    title: "Invesco High Income Trust II",
  },
  {
    ticker: "CWBHF",
    title: "Charlotte's Web Holdings, Inc.",
  },
  {
    ticker: "QUBT",
    title: "Quantum Computing Inc.",
  },
  {
    ticker: "AKBA",
    title: "Akebia Therapeutics, Inc.",
  },
  {
    ticker: "UG",
    title: "UNITED GUARDIAN INC",
  },
  {
    ticker: "TERN",
    title: "Terns Pharmaceuticals, Inc.",
  },
  {
    ticker: "SNSE",
    title: "Sensei Biotherapeutics, Inc.",
  },
  {
    ticker: "PESI",
    title: "PERMA FIX ENVIRONMENTAL SERVICES INC",
  },
  {
    ticker: "NYC",
    title: "New York City REIT, Inc.",
  },
  {
    ticker: "BFI",
    title: "BurgerFi International, Inc.",
  },
  {
    ticker: "VBFC",
    title: "Village Bank & Trust Financial Corp.",
  },
  {
    ticker: "UTRS",
    title: "MINERVA SURGICAL INC",
  },
  {
    ticker: "PFIE",
    title: "PROFIRE ENERGY INC",
  },
  {
    ticker: "HUIZ",
    title: "Huize Holding Ltd",
  },
  {
    ticker: "GROW",
    title: "U S GLOBAL INVESTORS INC",
  },
  {
    ticker: "ARDX",
    title: "ARDELYX, INC.",
  },
  {
    ticker: "ASRV",
    title: "AMERISERV FINANCIAL INC /PA/",
  },
  {
    ticker: "STG",
    title: "Sunlands Technology Group",
  },
  {
    ticker: "FUSB",
    title: "FIRST US BANCSHARES, INC.",
  },
  {
    ticker: "MOGO",
    title: "Mogo Inc.",
  },
  {
    ticker: "GSVRF",
    title: "GUANAJUATO SILVER CO LTD",
  },
  {
    ticker: "TRHC",
    title: "Tabula Rasa HealthCare, Inc.",
  },
  {
    ticker: "ICCC",
    title: "IMMUCELL CORP /DE/",
  },
  {
    ticker: "MLSS",
    title: "MILESTONE SCIENTIFIC INC.",
  },
  {
    ticker: "FEIM",
    title: "FREQUENCY ELECTRONICS INC",
  },
  {
    ticker: "BCEL",
    title: "Atreca, Inc.",
  },
  {
    ticker: "MFON",
    title: "MOBIVITY HOLDINGS CORP.",
  },
  {
    ticker: "FURY",
    title: "FURY GOLD MINES LTD",
  },
  {
    ticker: "TRRB",
    title: "TripBorn, Inc.",
  },
  {
    ticker: "NAII",
    title: "NATURAL ALTERNATIVES INTERNATIONAL INC",
  },
  {
    ticker: "TCBC",
    title: "TC Bancshares, Inc.",
  },
  {
    ticker: "GRAMF",
    title: "TPCO Holding Corp.",
  },
  {
    ticker: "MIRO",
    title: "Miromatrix Medical Inc.",
  },
  {
    ticker: "CXDO",
    title: "Crexendo, Inc.",
  },
  {
    ticker: "HFBL",
    title: "Home Federal Bancorp, Inc. of Louisiana",
  },
  {
    ticker: "GNPX",
    title: "Genprex, Inc.",
  },
  {
    ticker: "CIH",
    title: "China Index Holdings Ltd",
  },
  {
    ticker: "WFCF",
    title: "Where Food Comes From, Inc.",
  },
  {
    ticker: "HYMC",
    title: "HYCROFT MINING HOLDING CORP",
  },
  {
    ticker: "OCG",
    title: "Oriental Culture Holding LTD",
  },
  {
    ticker: "ETNB",
    title: "89bio, Inc.",
  },
  {
    ticker: "ERDCF",
    title: "Erdene Resource Development Corp",
  },
  {
    ticker: "KFFB",
    title: "Kentucky First Federal Bancorp",
  },
  {
    ticker: "REEMF",
    title: "RARE ELEMENT RESOURCES LTD",
  },
  {
    ticker: "BCOW",
    title: "1895 Bancorp of Wisconsin, Inc. /MD/",
  },
  {
    ticker: "CFMS",
    title: "Conformis Inc",
  },
  {
    ticker: "MF",
    title: "Missfresh Ltd",
  },
  {
    ticker: "BUUZ",
    title: "CalEthos, Inc.",
  },
  {
    ticker: "DDF",
    title: "DELAWARE INVESTMENTS DIVIDEND & INCOME FUND, INC",
  },
  {
    ticker: "GRVI",
    title: "GROVE, INC.",
  },
  {
    ticker: "LOAN",
    title: "MANHATTAN BRIDGE CAPITAL, INC",
  },
  {
    ticker: "USAP",
    title: "UNIVERSAL STAINLESS & ALLOY PRODUCTS INC",
  },
  {
    ticker: "LUMO",
    title: "LUMOS PHARMA, INC.",
  },
  {
    ticker: "AIRRF",
    title: "Aurion Resources Ltd.",
  },
  {
    ticker: "ETON",
    title: "Eton Pharmaceuticals, Inc.",
  },
  {
    ticker: "TRVN",
    title: "TREVENA INC",
  },
  {
    ticker: "FSEA",
    title: "First Seacoast Bancorp",
  },
  {
    ticker: "VAPO",
    title: "VAPOTHERM INC",
  },
  {
    ticker: "MDNA",
    title: "Medicenna Therapeutics Corp.",
  },
  {
    ticker: "BUKS",
    title: "BUTLER NATIONAL CORP",
  },
  {
    ticker: "SFE",
    title: "SAFEGUARD SCIENTIFICS INC",
  },
  {
    ticker: "ARKR",
    title: "ARK RESTAURANTS CORP",
  },
  {
    ticker: "BRLI",
    title: "Brilliant Acquisition Corp",
  },
  {
    ticker: "EOSE",
    title: "Eos Energy Enterprises, Inc.",
  },
  {
    ticker: "PLXP",
    title: "PLx Pharma Inc.",
  },
  {
    ticker: "JOB",
    title: "GEE Group Inc.",
  },
  {
    ticker: "RPHM",
    title: "Reneo Pharmaceuticals, Inc.",
  },
  {
    ticker: "APCX",
    title: "AppTech Payments Corp.",
  },
  {
    ticker: "IFRX",
    title: "InflaRx N.V.",
  },
  {
    ticker: "INLB",
    title: "Item 9 Labs Corp.",
  },
  {
    ticker: "KTEL",
    title: "KonaTel, Inc.",
  },
  {
    ticker: "SLDB",
    title: "Solid Biosciences Inc.",
  },
  {
    ticker: "ICLK",
    title: "iClick Interactive Asia Group Ltd",
  },
  {
    ticker: "OESX",
    title: "ORION ENERGY SYSTEMS, INC.",
  },
  {
    ticker: "LFMD",
    title: "LifeMD, Inc.",
  },
  {
    ticker: "IROQ",
    title: "IF Bancorp, Inc.",
  },
  {
    ticker: "CRWS",
    title: "CROWN CRAFTS INC",
  },
  {
    ticker: "BLRX",
    title: "BioLineRx Ltd.",
  },
  {
    ticker: "NBW",
    title: "NEUBERGER BERMAN CALIFORNIA MUNICIPAL FUND INC.",
  },
  {
    ticker: "UIHC",
    title: "UNITED INSURANCE HOLDINGS CORP.",
  },
  {
    ticker: "PTN",
    title: "PALATIN TECHNOLOGIES INC",
  },
  {
    ticker: "BVFL",
    title: "BV Financial, Inc.",
  },
  {
    ticker: "CEE",
    title: "CENTRAL & EASTERN EUROPE FUND, INC.",
  },
  {
    ticker: "TURN",
    title: "180 DEGREE CAPITAL CORP. /NY/",
  },
  {
    ticker: "AXU",
    title: "ALEXCO RESOURCE CORP",
  },
  {
    ticker: "LTRN",
    title: "Lantern Pharma Inc.",
  },
  {
    ticker: "BTTR",
    title: "Better Choice Co Inc.",
  },
  {
    ticker: "ITRG",
    title: "Integra Resources Corp.",
  },
  {
    ticker: "WSCRF",
    title: "North American Nickel Inc.",
  },
  {
    ticker: "RFIL",
    title: "R F INDUSTRIES LTD",
  },
  {
    ticker: "ACBA",
    title: "Ace Global Business Acquisition Ltd",
  },
  {
    ticker: "VIRC",
    title: "VIRCO MFG CORPORATION",
  },
  {
    ticker: "LKCRU",
    title: "LAKE AREA CORN PROCESSORS LLC",
  },
  {
    ticker: "SRV",
    title: "CUSHING MLP & INFRASTRUCTURE TOTAL RETURN FUND",
  },
  {
    ticker: "EQ",
    title: "Equillium, Inc.",
  },
  {
    ticker: "VENA",
    title: "Venus Acquisition Corp",
  },
  {
    ticker: "BENH",
    title: "Bio-En Holdings Corp.",
  },
  {
    ticker: "ASNB",
    title: "EKIMAS Corp",
  },
  {
    ticker: "BOTJ",
    title: "BANK OF THE JAMES FINANCIAL GROUP INC",
  },
  {
    ticker: "BNOX",
    title: "BIONOMICS LIMITED/FI",
  },
  {
    ticker: "BMBN",
    title: "BENCHMARK BANKSHARES INC",
  },
  {
    ticker: "HARP",
    title: "Harpoon Therapeutics, Inc.",
  },
  {
    ticker: "FAM",
    title: "FIRST TRUST/ABERDEEN GLOBAL OPPORTUNITY INCOME FUND",
  },
  {
    ticker: "OTLC",
    title: "Oncotelic Therapeutics, Inc.",
  },
  {
    ticker: "ICMB",
    title: "Investcorp Credit Management BDC, Inc.",
  },
  {
    ticker: "KOSS",
    title: "KOSS CORP",
  },
  {
    ticker: "MCHX",
    title: "MARCHEX INC",
  },
  {
    ticker: "BYSI",
    title: "BeyondSpring Inc.",
  },
  {
    ticker: "SELF",
    title: "Global Self Storage, Inc.",
  },
  {
    ticker: "DERM",
    title: "Journey Medical Corp",
  },
  {
    ticker: "RMO",
    title: "Romeo Power, Inc.",
  },
  {
    ticker: "GPL",
    title: "GREAT PANTHER MINING Ltd",
  },
  {
    ticker: "RWLK",
    title: "ReWalk Robotics Ltd.",
  },
  {
    ticker: "ICCM",
    title: "IceCure Medical Ltd.",
  },
  {
    ticker: "SABS",
    title: "SAB Biotherapeutics, Inc.",
  },
  {
    ticker: "USIO",
    title: "Usio, Inc.",
  },
  {
    ticker: "FGNV",
    title: "FORGE INNOVATION DEVELOPMENT CORP.",
  },
  {
    ticker: "LIZI",
    title: "LIZHI INC.",
  },
  {
    ticker: "JRSH",
    title: "Jerash Holdings (US), Inc.",
  },
  {
    ticker: "DQWS",
    title: "DSwiss Inc",
  },
  {
    ticker: "STRM",
    title: "STREAMLINE HEALTH SOLUTIONS INC.",
  },
  {
    ticker: "NMRD",
    title: "Nemaura Medical Inc.",
  },
  {
    ticker: "LFT",
    title: "Lument Finance Trust, Inc.",
  },
  {
    ticker: "PT",
    title: "Pintec Technology Holdings Ltd",
  },
  {
    ticker: "CBKM",
    title: "CONSUMERS BANCORP INC /OH/",
  },
  {
    ticker: "LFVN",
    title: "Lifevantage Corp",
  },
  {
    ticker: "VRCA",
    title: "Verrica Pharmaceuticals Inc.",
  },
  {
    ticker: "CNTG",
    title: "Centogene N.V.",
  },
  {
    ticker: "RSKIA",
    title: "GEORGE RISK INDUSTRIES, INC.",
  },
  {
    ticker: "ASRE",
    title: "Astra Energy, Inc.",
  },
  {
    ticker: "GSMG",
    title: "GLORY STAR NEW MEDIA GROUP HOLDINGS Ltd",
  },
  {
    ticker: "GEOS",
    title: "GEOSPACE TECHNOLOGIES CORP",
  },
  {
    ticker: "AUMN",
    title: "Golden Minerals Co",
  },
  {
    ticker: "PDEX",
    title: "PRO DEX INC",
  },
  {
    ticker: "APT",
    title: "ALPHA PRO TECH LTD",
  },
  {
    ticker: "HTY",
    title: "John Hancock Tax-Advantaged Global Shareholder Yield Fund",
  },
  {
    ticker: "JWEL",
    title: "Jowell Global Ltd.",
  },
  {
    ticker: "UPTD",
    title: "TradeUP Acquisition Corp.",
  },
  {
    ticker: "LTRY",
    title: "Lottery.com Inc.",
  },
  {
    ticker: "SURG",
    title: "SurgePays, Inc.",
  },
  {
    ticker: "AVTX",
    title: "Avalo Therapeutics, Inc.",
  },
  {
    ticker: "AIH",
    title: "Aesthetic Medical International Holdings Group Ltd",
  },
  {
    ticker: "TMDI",
    title: "TITAN MEDICAL INC",
  },
  {
    ticker: "INUV",
    title: "Inuvo, Inc.",
  },
  {
    ticker: "PRQR",
    title: "ProQR Therapeutics N.V.",
  },
  {
    ticker: "ASM",
    title: "AVINO SILVER & GOLD MINES LTD",
  },
  {
    ticker: "JMM",
    title: "Nuveen Multi-Market Income Fund",
  },
  {
    ticker: "KZIA",
    title: "KAZIA THERAPEUTICS LTD",
  },
  {
    ticker: "ATHX",
    title: "ATHERSYS, INC / NEW",
  },
  {
    ticker: "CDAK",
    title: "Codiak BioSciences, Inc.",
  },
  {
    ticker: "AQMS",
    title: "Aqua Metals, Inc.",
  },
  {
    ticker: "AIHS",
    title: "Senmiao Technology Ltd",
  },
  {
    ticker: "TTP",
    title: "TORTOISE PIPELINE & ENERGY FUND, INC.",
  },
  {
    ticker: "PNPL",
    title: "PINEAPPLE, INC.",
  },
  {
    ticker: "NMTR",
    title: "9 METERS BIOPHARMA, INC.",
  },
  {
    ticker: "HMBL",
    title: "HUMBL, INC.",
  },
  {
    ticker: "SHPW",
    title: "Shapeways Holdings, Inc.",
  },
  {
    ticker: "TLLTF",
    title: "TILT Holdings Inc.",
  },
  {
    ticker: "NHTC",
    title: "NATURAL HEALTH TRENDS CORP",
  },
  {
    ticker: "SALM",
    title: "SALEM MEDIA GROUP, INC. /DE/",
  },
  {
    ticker: "RTTO",
    title: "Rito Group Corp.",
  },
  {
    ticker: "AGBA",
    title: "AGBA Acquisition Ltd",
  },
  {
    ticker: "CHKR",
    title: "CHESAPEAKE GRANITE WASH TRUST",
  },
  {
    ticker: "FNGR",
    title: "FingerMotion, Inc.",
  },
  {
    ticker: "RAIL",
    title: "FreightCar America, Inc.",
  },
  {
    ticker: "DOGZ",
    title: "Dogness (International) Corp",
  },
  {
    ticker: "NTIP",
    title: "NETWORK-1 TECHNOLOGIES, INC.",
  },
  {
    ticker: "GEG",
    title: "Great Elm Group, Inc.",
  },
  {
    ticker: "IBIO",
    title: "iBio, Inc.",
  },
  {
    ticker: "IMV",
    title: "IMV Inc.",
  },
  {
    ticker: "OPNT",
    title: "OPIANT PHARMACEUTICALS, INC.",
  },
  {
    ticker: "SYRS",
    title: "Syros Pharmaceuticals, Inc.",
  },
  {
    ticker: "ABIT",
    title: "Athena Bitcoin Global",
  },
  {
    ticker: "CBIO",
    title: "CATALYST BIOSCIENCES, INC.",
  },
  {
    ticker: "CLEV",
    title: "Concrete Leveling Systems Inc",
  },
  {
    ticker: "DXR",
    title: "DAXOR CORP",
  },
  {
    ticker: "CODA",
    title: "Coda Octopus Group, Inc.",
  },
  {
    ticker: "ORGS",
    title: "Orgenesis Inc.",
  },
  {
    ticker: "BDL",
    title: "FLANIGANS ENTERPRISES INC",
  },
  {
    ticker: "AESE",
    title: "Allied Esports Entertainment, Inc.",
  },
  {
    ticker: "DPSI",
    title: "DecisionPoint Systems, Inc.",
  },
  {
    ticker: "GWSN",
    title: "Gulf West Security Network, Inc.",
  },
  {
    ticker: "OZSC",
    title: "OZOP ENERGY SOLUTIONS, INC.",
  },
  {
    ticker: "SMED",
    title: "SHARPS COMPLIANCE CORP",
  },
  {
    ticker: "GRCY",
    title: "Greencity Acquisition Corp",
  },
  {
    ticker: "ASGI",
    title: "Aberdeen Standard Global Infrastructure Income Fund",
  },
  {
    ticker: "FOTB",
    title: "FIRST OTTAWA BANCSHARES, INC",
  },
  {
    ticker: "MBIO",
    title: "MUSTANG BIO, INC.",
  },
  {
    ticker: "NWPP",
    title: "NEW PEOPLES BANKSHARES INC",
  },
  {
    ticker: "BLCT",
    title: "BlueCity Holdings Ltd",
  },
  {
    ticker: "LINK",
    title: "INTERLINK ELECTRONICS INC",
  },
  {
    ticker: "DMAC",
    title: "DiaMedica Therapeutics Inc.",
  },
  {
    ticker: "IZEA",
    title: "IZEA Worldwide, Inc.",
  },
  {
    ticker: "HOFV",
    title: "Hall of Fame Resort & Entertainment Co",
  },
  {
    ticker: "IMTH",
    title: "INNOVATIVE MEDTECH, INC.",
  },
  {
    ticker: "XIN",
    title: "Xinyuan Real Estate Co., Ltd.",
  },
  {
    ticker: "DNAY",
    title: "Codex DNA, Inc.",
  },
  {
    ticker: "ONCY",
    title: "ONCOLYTICS BIOTECH INC",
  },
  {
    ticker: "KBLB",
    title: "Kraig Biocraft Laboratories, Inc",
  },
  {
    ticker: "UGRO",
    title: "urban-gro, Inc.",
  },
  {
    ticker: "ICCH",
    title: "ICC Holdings, Inc.",
  },
  {
    ticker: "LMB",
    title: "Limbach Holdings, Inc.",
  },
  {
    ticker: "VTSI",
    title: "VirTra, Inc",
  },
  {
    ticker: "HGBL",
    title: "Heritage Global Inc.",
  },
  {
    ticker: "EYEN",
    title: "EYENOVIA, INC.",
  },
  {
    ticker: "NLS",
    title: "NAUTILUS, INC.",
  },
  {
    ticker: "RZLT",
    title: "Rezolute, Inc.",
  },
  {
    ticker: "ALAC",
    title: "Alberton Acquisition Corp",
  },
  {
    ticker: "FBVA",
    title: "Farmers Bankshares, Inc.",
  },
  {
    ticker: "IBTN",
    title: "InsCorp Inc",
  },
  {
    ticker: "IOR",
    title: "INCOME OPPORTUNITY REALTY INVESTORS INC /TX/",
  },
  {
    ticker: "REFR",
    title: "RESEARCH FRONTIERS INC",
  },
  {
    ticker: "ALGS",
    title: "Aligos Therapeutics, Inc.",
  },
  {
    ticker: "EVOA",
    title: "EVO Transportation & Energy Services, Inc.",
  },
  {
    ticker: "TATT",
    title: "TAT TECHNOLOGIES LTD",
  },
  {
    ticker: "LMPX",
    title: "LMP Automotive Holdings, Inc.",
  },
  {
    ticker: "SLNH",
    title: "Soluna Holdings, Inc",
  },
  {
    ticker: "NM",
    title: "Navios Maritime Holdings Inc.",
  },
  {
    ticker: "EFTR",
    title: "eFFECTOR Therapeutics, Inc.",
  },
  {
    ticker: "VFL",
    title: "Delaware Investments National Municipal Income Fund",
  },
  {
    ticker: "SERA",
    title: "SERA PROGNOSTICS, INC.",
  },
  {
    ticker: "UWHR",
    title: "UWHARRIE CAPITAL CORP",
  },
  {
    ticker: "FRD",
    title: "FRIEDMAN INDUSTRIES INC",
  },
  {
    ticker: "INFI",
    title: "INFINITY PHARMACEUTICALS, INC.",
  },
  {
    ticker: "NCRA",
    title: "NOCERA, INC.",
  },
  {
    ticker: "MDVL",
    title: "MedAvail Holdings, Inc.",
  },
  {
    ticker: "NVOS",
    title: "Novo Integrated Sciences, Inc.",
  },
  {
    ticker: "TPCS",
    title: "TECHPRECISION CORP",
  },
  {
    ticker: "TESS",
    title: "TESSCO TECHNOLOGIES INC",
  },
  {
    ticker: "CNTB",
    title: "Connect Biopharma Holdings Ltd",
  },
  {
    ticker: "GIFI",
    title: "GULF ISLAND FABRICATION INC",
  },
  {
    ticker: "CULP",
    title: "CULP INC",
  },
  {
    ticker: "AAME",
    title: "ATLANTIC AMERICAN CORP",
  },
  {
    ticker: "KUKE",
    title: "Kuke Music Holding Ltd",
  },
  {
    ticker: "OMEX",
    title: "ODYSSEY MARINE EXPLORATION INC",
  },
  {
    ticker: "MTBC",
    title: "CareCloud, Inc.",
  },
  {
    ticker: "PSIX",
    title: "POWER SOLUTIONS INTERNATIONAL, INC.",
  },
  {
    ticker: "AITX",
    title: "Artificial Intelligence Technology Solutions Inc.",
  },
  {
    ticker: "ONCT",
    title: "Oncternal Therapeutics, Inc.",
  },
  {
    ticker: "ICGL",
    title: "Image Chain Group Limited, Inc.",
  },
  {
    ticker: "CYCA",
    title: "CYTTA CORP.",
  },
  {
    ticker: "NBO",
    title: "NEUBERGER BERMAN NEW YORK MUNICIPAL FUND INC.",
  },
  {
    ticker: "LBPH",
    title: "Longboard Pharmaceuticals, Inc.",
  },
  {
    ticker: "AKU",
    title: "AKUMIN INC.",
  },
  {
    ticker: "EDI",
    title: "Stone Harbor Emerging Markets Total Income Fund",
  },
  {
    ticker: "CFOO",
    title: "China Foods Holdings Ltd.",
  },
  {
    ticker: "EDRY",
    title: "EuroDry Ltd.",
  },
  {
    ticker: "FREQ",
    title: "Frequency Therapeutics, Inc.",
  },
  {
    ticker: "RGT",
    title: "ROYCE GLOBAL VALUE TRUST, INC.",
  },
  {
    ticker: "NDP",
    title: "TORTOISE ENERGY INDEPENDENCE FUND, INC.",
  },
  {
    ticker: "KIRK",
    title: "KIRKLAND'S, INC",
  },
  {
    ticker: "CGA",
    title: "China Green Agriculture, Inc.",
  },
  {
    ticker: "SIDU",
    title: "Sidus Space Inc.",
  },
  {
    ticker: "SHWZ",
    title: "Medicine Man Technologies, Inc.",
  },
  {
    ticker: "MMMB",
    title: "MamaMancini's Holdings, Inc.",
  },
  {
    ticker: "AWRE",
    title: "AWARE INC /MA/",
  },
  {
    ticker: "APM",
    title: "Aptorum Group Ltd",
  },
  {
    ticker: "CCEL",
    title: "CRYO CELL INTERNATIONAL INC",
  },
  {
    ticker: "UAVS",
    title: "AgEagle Aerial Systems Inc.",
  },
  {
    ticker: "SNTW",
    title: "Summit Networks Inc.",
  },
  {
    ticker: "CGTX",
    title: "COGNITION THERAPEUTICS INC",
  },
  {
    ticker: "SCX",
    title: "STARRETT L S CO",
  },
  {
    ticker: "DSWL",
    title: "DESWELL INDUSTRIES INC",
  },
  {
    ticker: "TCBS",
    title: "Texas Community Bancshares, Inc.",
  },
  {
    ticker: "EEA",
    title: "EUROPEAN EQUITY FUND, INC / MD",
  },
  {
    ticker: "PLX",
    title: "Protalix BioTherapeutics, Inc.",
  },
  {
    ticker: "ID",
    title: "PARTS iD, Inc.",
  },
  {
    ticker: "VRAR",
    title: "Glimpse Group, Inc.",
  },
  {
    ticker: "VLNS",
    title: "Valens Company, Inc.",
  },
  {
    ticker: "NH",
    title: "NantHealth, Inc.",
  },
  {
    ticker: "QNTO",
    title: "QUAINT OAK BANCORP INC",
  },
  {
    ticker: "IQST",
    title: "iQSTEL Inc",
  },
  {
    ticker: "FTRP",
    title: "Field Trip Health Ltd.",
  },
  {
    ticker: "USWS",
    title: "U.S. WELL SERVICES, INC.",
  },
  {
    ticker: "MTEM",
    title: "Molecular Templates, Inc.",
  },
  {
    ticker: "PNBK",
    title: "PATRIOT NATIONAL BANCORP INC",
  },
  {
    ticker: "FMY",
    title: "FIRST TRUST MORTGAGE INCOME FUND",
  },
  {
    ticker: "SIEN",
    title: "Sientra, Inc.",
  },
  {
    ticker: "MDWD",
    title: "MediWound Ltd.",
  },
  {
    ticker: "SYPR",
    title: "SYPRIS SOLUTIONS INC",
  },
  {
    ticker: "SIEB",
    title: "SIEBERT FINANCIAL CORP",
  },
  {
    ticker: "ELTP",
    title: "ELITE PHARMACEUTICALS INC /NV/",
  },
  {
    ticker: "FCO",
    title: "ABERDEEN GLOBAL INCOME FUND INC",
  },
  {
    ticker: "BNET",
    title: "BION ENVIRONMENTAL TECHNOLOGIES INC",
  },
  {
    ticker: "ZYNE",
    title: "Zynerba Pharmaceuticals, Inc.",
  },
  {
    ticker: "VTVT",
    title: "vTv Therapeutics Inc.",
  },
  {
    ticker: "TSOI",
    title: "THERAPEUTIC SOLUTIONS INTERNATIONAL, INC.",
  },
  {
    ticker: "VEV",
    title: "VICINITY MOTOR CORP",
  },
  {
    ticker: "RSSS",
    title: "Research Solutions, Inc.",
  },
  {
    ticker: "WKEY",
    title: "Wisekey International Holding S.A.",
  },
  {
    ticker: "BSTG",
    title: "Biostage, Inc.",
  },
  {
    ticker: "PPBN",
    title: "PINNACLE BANKSHARES CORP",
  },
  {
    ticker: "BBRW",
    title: "BrewBilt Manufacturing Inc.",
  },
  {
    ticker: "GWSO",
    title: "Global Warming Solutions, Inc.",
  },
  {
    ticker: "MCLD",
    title: "mCloud Technologies Corp.",
  },
  {
    ticker: "CMHF",
    title: "Community Heritage Financial, Inc.",
  },
  {
    ticker: "PCSA",
    title: "Processa Pharmaceuticals, Inc.",
  },
  {
    ticker: "VONI",
    title: "Veroni Brands Corp.",
  },
  {
    ticker: "ATNX",
    title: "Athenex, Inc.",
  },
  {
    ticker: "SONX",
    title: "Sonendo, Inc.",
  },
  {
    ticker: "AIRT",
    title: "AIR T INC",
  },
  {
    ticker: "CRVS",
    title: "Corvus Pharmaceuticals, Inc.",
  },
  {
    ticker: "EMAN",
    title: "EMAGIN CORP",
  },
  {
    ticker: "MNDO",
    title: "MIND CTI LTD",
  },
  {
    ticker: "INKT",
    title: "MiNK Therapeutics, Inc.",
  },
  {
    ticker: "HEOL",
    title: "HIGHWATER ETHANOL LLC",
  },
  {
    ticker: "RGS",
    title: "REGIS CORP",
  },
  {
    ticker: "SNMP",
    title: "Evolve Transition Infrastructure LP",
  },
  {
    ticker: "FGB",
    title: "FIRST TRUST SPECIALTY FINANCE & FINANCIAL OPPORTUNITIES FUND",
  },
  {
    ticker: "INDO",
    title: "Indonesia Energy Corp Ltd",
  },
  {
    ticker: "ETHOF",
    title: "Prospector Metals Corp.",
  },
  {
    ticker: "ORPB",
    title: "OREGON PACIFIC BANCORP",
  },
  {
    ticker: "JROOF",
    title: "Jericho Energy Ventures Inc.",
  },
  {
    ticker: "WCRS",
    title: "WESTERN CAPITAL RESOURCES, INC.",
  },
  {
    ticker: "CNEY",
    title: "CN ENERGY GROUP. INC.",
  },
  {
    ticker: "TYME",
    title: "TYME TECHNOLOGIES, INC.",
  },
  {
    ticker: "PW",
    title: "Power REIT",
  },
  {
    ticker: "ACTX",
    title: "ADVANCED CONTAINER TECHNOLOGIES, INC.",
  },
  {
    ticker: "GTEC",
    title: "Greenland Technologies Holding Corp.",
  },
  {
    ticker: "ACHV",
    title: "ACHIEVE LIFE SCIENCES, INC.",
  },
  {
    ticker: "PMCB",
    title: "PharmaCyte Biotech, Inc.",
  },
  {
    ticker: "BIOF",
    title: "BLUE BIOFUELS, INC.",
  },
  {
    ticker: "BTCM",
    title: "BIT Mining Ltd",
  },
  {
    ticker: "KEQU",
    title: "KEWAUNEE SCIENTIFIC CORP /DE/",
  },
  {
    ticker: "NXN",
    title: "NUVEEN NEW YORK SELECT TAX -FREE INCOME PORTFOLIO",
  },
  {
    ticker: "GBOX",
    title: "GreenBox POS",
  },
  {
    ticker: "HOOK",
    title: "HOOKIPA Pharma Inc.",
  },
  {
    ticker: "KLXE",
    title: "KLX Energy Services Holdings, Inc.",
  },
  {
    ticker: "KTCC",
    title: "KEY TRONIC CORP",
  },
  {
    ticker: "HFBK",
    title: "Harford Bank",
  },
  {
    ticker: "SDH",
    title: "Global Internet of People, Inc.",
  },
  {
    ticker: "STBI",
    title: "STURGIS BANCORP INC",
  },
  {
    ticker: "PYN",
    title: "PIMCO NEW YORK MUNICIPAL INCOME FUND III",
  },
  {
    ticker: "VQS",
    title: "VIQ Solutions Inc.",
  },
  {
    ticker: "RAYT",
    title: "RAYONT INC.",
  },
  {
    ticker: "EVAX",
    title: "Evaxion Biotech A/S",
  },
  {
    ticker: "RLBD",
    title: "Real Brands, Inc.",
  },
  {
    ticker: "SSVFF",
    title: "SOUTHERN SILVER EXPLORATION CORP",
  },
  {
    ticker: "VIAO",
    title: "VIA optronics AG",
  },
  {
    ticker: "PLTYF",
    title: "Plastec Technologies, Ltd.",
  },
  {
    ticker: "HUSA",
    title: "HOUSTON AMERICAN ENERGY CORP",
  },
  {
    ticker: "TSRMF",
    title: "TREASURY METALS INC",
  },
  {
    ticker: "CRYM",
    title: "Cryomass Technologies, Inc.",
  },
  {
    ticker: "LOTZ",
    title: "CarLotz, Inc.",
  },
  {
    ticker: "LONCF",
    title: "Loncor Gold Inc.",
  },
  {
    ticker: "SUNW",
    title: "Sunworks, Inc.",
  },
  {
    ticker: "CPSH",
    title: "CPS TECHNOLOGIES CORP/DE/",
  },
  {
    ticker: "PLSE",
    title: "Pulse Biosciences, Inc.",
  },
  {
    ticker: "FEO",
    title: "FIRST TRUST/ABERDEEN EMERGING OPPORTUNITY FUND",
  },
  {
    ticker: "IMCC",
    title: "IM Cannabis Corp.",
  },
  {
    ticker: "SCYX",
    title: "SCYNEXIS INC",
  },
  {
    ticker: "AKTX",
    title: "Akari Therapeutics Plc",
  },
  {
    ticker: "BLGO",
    title: "BIOLARGO, INC.",
  },
  {
    ticker: "HEPA",
    title: "Hepion Pharmaceuticals, Inc.",
  },
  {
    ticker: "DTEA",
    title: "DAVIDsTEA Inc.",
  },
  {
    ticker: "OMQS",
    title: "OMNIQ Corp.",
  },
  {
    ticker: "BTN",
    title: "BALLANTYNE STRONG, INC.",
  },
  {
    ticker: "BDSX",
    title: "BIODESIX INC",
  },
  {
    ticker: "WSFT",
    title: "WIKISOFT CORP.",
  },
  {
    ticker: "GURE",
    title: "GULF RESOURCES, INC.",
  },
  {
    ticker: "FRSX",
    title: "Foresight Autonomous Holdings Ltd.",
  },
  {
    ticker: "MDWT",
    title: "MIDWEST HOLDING INC.",
  },
  {
    ticker: "OPFI",
    title: "OppFi Inc.",
  },
  {
    ticker: "VICP",
    title: "Vicapsys Life Sciences, Inc.",
  },
  {
    ticker: "RDHL",
    title: "RedHill Biopharma Ltd.",
  },
  {
    ticker: "AUID",
    title: "Ipsidy Inc.",
  },
  {
    ticker: "PGID",
    title: "PEREGRINE INDUSTRIES INC",
  },
  {
    ticker: "BRCN",
    title: "Burcon NutraScience Corp",
  },
  {
    ticker: "EGF",
    title: "BlackRock Enhanced Government Fund, Inc.",
  },
  {
    ticker: "HVBC",
    title: "HV Bancorp, Inc.",
  },
  {
    ticker: "UAMY",
    title: "UNITED STATES ANTIMONY CORP",
  },
  {
    ticker: "HALL",
    title: "HALLMARK FINANCIAL SERVICES INC",
  },
  {
    ticker: "IVC",
    title: "INVACARE CORP",
  },
  {
    ticker: "BRLT",
    title: "Brilliant Earth Group, Inc.",
  },
  {
    ticker: "FSRL",
    title: "FIRST RELIANCE BANCSHARES INC",
  },
  {
    ticker: "NOVN",
    title: "Novan, Inc.",
  },
  {
    ticker: "MARK",
    title: "REMARK HOLDINGS, INC.",
  },
  {
    ticker: "SNT",
    title: "SENSTAR TECHNOLOGIES LTD.",
  },
  {
    ticker: "NVGI",
    title: "Noble Vici Group, Inc.",
  },
  {
    ticker: "CNNB",
    title: "Cincinnati Bancorp, Inc.",
  },
  {
    ticker: "MDXL",
    title: "MediXall Group, Inc.",
  },
  {
    ticker: "GLTO",
    title: "Galecto, Inc.",
  },
  {
    ticker: "GNRV",
    title: "GRAND RIVER COMMERCE INC",
  },
  {
    ticker: "HZN",
    title: "Horizon Global Corp",
  },
  {
    ticker: "AAOI",
    title: "APPLIED OPTOELECTRONICS, INC.",
  },
  {
    ticker: "CATG",
    title: "Capstone Technologies Group Inc.",
  },
  {
    ticker: "FLGC",
    title: "Flora Growth Corp.",
  },
  {
    ticker: "SEED",
    title: "Origin Agritech LTD",
  },
  {
    ticker: "HJGP",
    title: "Hanjiao Group, Inc.",
  },
  {
    ticker: "TECTP",
    title: "Tectonic Financial, Inc.",
  },
  {
    ticker: "AINC",
    title: "Ashford Inc.",
  },
  {
    ticker: "SOS",
    title: "SOS Ltd",
  },
  {
    ticker: "MBRX",
    title: "Moleculin Biotech, Inc.",
  },
  {
    ticker: "NLTX",
    title: "Neoleukin Therapeutics, Inc.",
  },
  {
    ticker: "LRFC",
    title: "Logan Ridge Finance Corp.",
  },
  {
    ticker: "TGLO",
    title: "THEGLOBE COM INC",
  },
  {
    ticker: "BOXL",
    title: "Boxlight Corp",
  },
  {
    ticker: "TC",
    title: "TuanChe Ltd",
  },
  {
    ticker: "XTNT",
    title: "Xtant Medical Holdings, Inc.",
  },
  {
    ticker: "DGLY",
    title: "DIGITAL ALLY INC",
  },
  {
    ticker: "INAB",
    title: "IN8BIO, INC.",
  },
  {
    ticker: "OEG",
    title: "Orbital Energy Group, Inc.",
  },
  {
    ticker: "YTFD",
    title: "Yale Transaction Finders, Inc.",
  },
  {
    ticker: "JGLDF",
    title: "Japan Gold Corp.",
  },
  {
    ticker: "RGF",
    title: "Real Good Food Company, Inc.",
  },
  {
    ticker: "RMCF",
    title: "Rocky Mountain Chocolate Factory, Inc.",
  },
  {
    ticker: "SPAZF",
    title: "SPANISH MOUNTAIN GOLD LTD.",
  },
  {
    ticker: "ISR",
    title: "Isoray, Inc.",
  },
  {
    ticker: "AVCO",
    title: "Avalon GloboCare Corp.",
  },
  {
    ticker: "KANP",
    title: "KAANAPALI LAND LLC",
  },
  {
    ticker: "AIMD",
    title: "Ainos, Inc.",
  },
  {
    ticker: "GANX",
    title: "Gain Therapeutics, Inc.",
  },
  {
    ticker: "BKTI",
    title: "BK Technologies Corp",
  },
  {
    ticker: "RFL",
    title: "Rafael Holdings, Inc.",
  },
  {
    ticker: "KINS",
    title: "KINGSTONE COMPANIES, INC.",
  },
  {
    ticker: "MSVB",
    title: "Mid-Southern Bancorp, Inc.",
  },
  {
    ticker: "IMNM",
    title: "Immunome Inc.",
  },
  {
    ticker: "PUBC",
    title: "PureBase Corp",
  },
  {
    ticker: "WTER",
    title: "ALKALINE WATER Co INC",
  },
  {
    ticker: "CYAD",
    title: "Celyad Oncology SA",
  },
  {
    ticker: "DTSS",
    title: "DATASEA INC.",
  },
  {
    ticker: "TLFA",
    title: "TANDY LEATHER FACTORY INC",
  },
  {
    ticker: "LTCN",
    title: "Grayscale Litecoin Trust (LTC)",
  },
  {
    ticker: "MITC",
    title: "MeaTech 3D Ltd.",
  },
  {
    ticker: "KAVL",
    title: "Kaival Brands Innovations Group, Inc.",
  },
  {
    ticker: "MCVT",
    title: "Mill City Ventures III, Ltd",
  },
  {
    ticker: "PSTI",
    title: "PLURISTEM THERAPEUTICS INC",
  },
  {
    ticker: "SANW",
    title: "S&W Seed Co",
  },
  {
    ticker: "AVRO",
    title: "AVROBIO, Inc.",
  },
  {
    ticker: "LODE",
    title: "Comstock Inc.",
  },
  {
    ticker: "LIVE",
    title: "LIVE VENTURES Inc",
  },
  {
    ticker: "KRKR",
    title: "36Kr Holdings Inc.",
  },
  {
    ticker: "SPI",
    title: "SPI Energy Co., Ltd.",
  },
  {
    ticker: "ALID",
    title: "Allied Corp.",
  },
  {
    ticker: "SPRB",
    title: "SPRUCE BIOSCIENCES, INC.",
  },
  {
    ticker: "NUKK",
    title: "Nukkleus Inc.",
  },
  {
    ticker: "BRST",
    title: "Broad Street Realty, Inc.",
  },
  {
    ticker: "CLIR",
    title: "ClearSign Technologies Corp",
  },
  {
    ticker: "IDN",
    title: "Intellicheck, Inc.",
  },
  {
    ticker: "ENTX",
    title: "Entera Bio Ltd.",
  },
  {
    ticker: "LITM",
    title: "Snow Lake Resources Ltd.",
  },
  {
    ticker: "VMAR",
    title: "Vision Marine Technologies Inc.",
  },
  {
    ticker: "ATXS",
    title: "Astria Therapeutics, Inc.",
  },
  {
    ticker: "TACT",
    title: "TRANSACT TECHNOLOGIES INC",
  },
  {
    ticker: "CSPI",
    title: "CSP INC /MA/",
  },
  {
    ticker: "NXTP",
    title: "NextPlay Technologies Inc.",
  },
  {
    ticker: "CDJM",
    title: "Carnegie Development, Inc",
  },
  {
    ticker: "VKIN",
    title: "VIKING ENERGY GROUP, INC.",
  },
  {
    ticker: "EXDW",
    title: "Exceed World, Inc.",
  },
  {
    ticker: "ABTI",
    title: "ALTEROLA BIOTECH INC.",
  },
  {
    ticker: "IRIX",
    title: "IRIDEX CORP",
  },
  {
    ticker: "SCTC",
    title: "ScoutCam Inc.",
  },
  {
    ticker: "NEXI",
    title: "NexImmune, Inc.",
  },
  {
    ticker: "KDOZF",
    title: "KIDOZ INC.",
  },
  {
    ticker: "ITRM",
    title: "Iterum Therapeutics plc",
  },
  {
    ticker: "ZDGE",
    title: "Zedge, Inc.",
  },
  {
    ticker: "WSTRF",
    title: "Western Uranium & Vanadium Corp.",
  },
  {
    ticker: "CTHR",
    title: "CHARLES & COLVARD LTD",
  },
  {
    ticker: "OGEN",
    title: "ORAGENICS INC",
  },
  {
    ticker: "SEZNL",
    title: "Sezzle Inc.",
  },
  {
    ticker: "VERB",
    title: "Verb Technology Company, Inc.",
  },
  {
    ticker: "AGFY",
    title: "Agrify Corp",
  },
  {
    ticker: "ZIVO",
    title: "Zivo Bioscience, Inc.",
  },
  {
    ticker: "INIS",
    title: "INTERNATIONAL ISOTOPES INC",
  },
  {
    ticker: "PPBT",
    title: "PURPLE BIOTECH LTD.",
  },
  {
    ticker: "TCON",
    title: "Tracon Pharmaceuticals, Inc.",
  },
  {
    ticker: "COCP",
    title: "Cocrystal Pharma, Inc.",
  },
  {
    ticker: "JANL",
    title: "JANEL CORP",
  },
  {
    ticker: "PRSO",
    title: "Peraso Inc.",
  },
  {
    ticker: "ACXP",
    title: "Acurx Pharmaceuticals, Inc.",
  },
  {
    ticker: "WWR",
    title: "WESTWATER RESOURCES, INC.",
  },
  {
    ticker: "LRMR",
    title: "Larimar Therapeutics, Inc.",
  },
  {
    ticker: "MPAD",
    title: "MICROPAC INDUSTRIES INC",
  },
  {
    ticker: "CORR",
    title: "CorEnergy Infrastructure Trust, Inc.",
  },
  {
    ticker: "ALIM",
    title: "ALIMERA SCIENCES INC",
  },
  {
    ticker: "CMMB",
    title: "Chemomab Therapeutics Ltd.",
  },
  {
    ticker: "XPL",
    title: "SOLITARIO ZINC CORP.",
  },
  {
    ticker: "CHCI",
    title: "Comstock Holding Companies, Inc.",
  },
  {
    ticker: "PBBK",
    title: "PB Bankshares, Inc.",
  },
  {
    ticker: "SQFT",
    title: "Presidio Property Trust, Inc.",
  },
  {
    ticker: "DWNX",
    title: "DELHI BANK CORP",
  },
  {
    ticker: "RAND",
    title: "RAND CAPITAL CORP",
  },
  {
    ticker: "AIM",
    title: "AIM ImmunoTech Inc.",
  },
  {
    ticker: "ACST",
    title: "Acasti Pharma Inc.",
  },
  {
    ticker: "BTTX",
    title: "Better Therapeutics, Inc.",
  },
  {
    ticker: "DYNR",
    title: "DYNARESOURCE INC",
  },
  {
    ticker: "APTX",
    title: "Aptinyx Inc.",
  },
  {
    ticker: "FTEK",
    title: "FUEL TECH, INC.",
  },
  {
    ticker: "LBPS",
    title: "4D Pharma PLC",
  },
  {
    ticker: "CIF",
    title: "MFS INTERMEDIATE HIGH INCOME FUND",
  },
  {
    ticker: "OSBK",
    title: "OCONEE FINANCIAL CORP",
  },
  {
    ticker: "CDBMF",
    title: "Cordoba Minerals Corp.",
  },
  {
    ticker: "OBTX",
    title: "Everything Blockchain, Inc.",
  },
  {
    ticker: "TPHS",
    title: "Trinity Place Holdings Inc.",
  },
  {
    ticker: "BBGI",
    title: "BEASLEY BROADCAST GROUP INC",
  },
  {
    ticker: "FLUX",
    title: "Flux Power Holdings, Inc.",
  },
  {
    ticker: "IMTE",
    title: "Integrated Media Technology Ltd",
  },
  {
    ticker: "NVNO",
    title: "enVVeno Medical Corp",
  },
  {
    ticker: "NSFDF",
    title: "NXT Energy Solutions Inc.",
  },
  {
    ticker: "SNWV",
    title: "SANUWAVE Health, Inc.",
  },
  {
    ticker: "PBTS",
    title: "Powerbridge Technologies Co., Ltd.",
  },
  {
    ticker: "SOPA",
    title: "SOCIETY PASS INCORPORATED.",
  },
  {
    ticker: "BMRA",
    title: "BIOMERICA INC",
  },
  {
    ticker: "TRBMF",
    title: "TORQ RESOURCES INC.",
  },
  {
    ticker: "EDUC",
    title: "EDUCATIONAL DEVELOPMENT CORP",
  },
  {
    ticker: "AMPE",
    title: "Ampio Pharmaceuticals, Inc.",
  },
  {
    ticker: "CPOP",
    title: "Pop Culture Group Co., Ltd",
  },
  {
    ticker: "TARA",
    title: "Protara Therapeutics, Inc.",
  },
  {
    ticker: "UBX",
    title: "Unity Biotechnology, Inc.",
  },
  {
    ticker: "NRSN",
    title: "NeuroSense Therapeutics Ltd.",
  },
  {
    ticker: "TCRI",
    title: "TechCom, Inc.",
  },
  {
    ticker: "DYSL",
    title: "DYNASIL CORP OF AMERICA",
  },
  {
    ticker: "ECOR",
    title: "electroCore, Inc.",
  },
  {
    ticker: "NSYS",
    title: "NORTECH SYSTEMS INC",
  },
  {
    ticker: "XTGRF",
    title: "XTRA-GOLD RESOURCES CORP",
  },
  {
    ticker: "RSRV",
    title: "RESERVE PETROLEUM CO",
  },
  {
    ticker: "LTBR",
    title: "LIGHTBRIDGE Corp",
  },
  {
    ticker: "ZGSI",
    title: "Zero Gravity Solutions, Inc.",
  },
  {
    ticker: "SPUP",
    title: "Sipup Corp",
  },
  {
    ticker: "SLGG",
    title: "Super League Gaming, Inc.",
  },
  {
    ticker: "UNRV",
    title: "Unrivaled Brands, Inc.",
  },
  {
    ticker: "ERYP",
    title: "Erytech Pharma S.A.",
  },
  {
    ticker: "GTIM",
    title: "Good Times Restaurants Inc.",
  },
  {
    ticker: "ABIO",
    title: "ARCA biopharma, Inc.",
  },
  {
    ticker: "ISUN",
    title: "ISUN, INC.",
  },
  {
    ticker: "SEII",
    title: "SHARING ECONOMY INTERNATIONAL INC.",
  },
  {
    ticker: "GLG",
    title: "TD Holdings, Inc.",
  },
  {
    ticker: "CXXIF",
    title: "C21 Investments Inc.",
  },
  {
    ticker: "MBOT",
    title: "Microbot Medical Inc.",
  },
  {
    ticker: "ENG",
    title: "ENGLOBAL CORP",
  },
  {
    ticker: "NTWK",
    title: "NETSOL TECHNOLOGIES INC",
  },
  {
    ticker: "ASLN",
    title: "ASLAN Pharmaceuticals Ltd",
  },
  {
    ticker: "EQS",
    title: "EQUUS TOTAL RETURN, INC.",
  },
  {
    ticker: "HCTI",
    title: "Healthcare Triangle, Inc.",
  },
  {
    ticker: "AUSI",
    title: "AURA SYSTEMS INC",
  },
  {
    ticker: "FKWL",
    title: "FRANKLIN WIRELESS CORP",
  },
  {
    ticker: "IDAI",
    title: "T Stamp Inc",
  },
  {
    ticker: "PGTK",
    title: "Pacific Green Technologies Inc.",
  },
  {
    ticker: "JT",
    title: "Jianpu Technology Inc.",
  },
  {
    ticker: "NCTY",
    title: "The9 LTD",
  },
  {
    ticker: "MXE",
    title: "MEXICO EQUITY & INCOME FUND INC",
  },
  {
    ticker: "ELDN",
    title: "Eledon Pharmaceuticals, Inc.",
  },
  {
    ticker: "SLS",
    title: "SELLAS Life Sciences Group, Inc.",
  },
  {
    ticker: "MXC",
    title: "MEXCO ENERGY CORP",
  },
  {
    ticker: "GLBS",
    title: "GLOBUS MARITIME LTD",
  },
  {
    ticker: "LISMF",
    title: "LITHIUM SOUTH DEVELOPMENT Corp",
  },
  {
    ticker: "NYMX",
    title: "NYMOX PHARMACEUTICAL CORP",
  },
  {
    ticker: "WLMS",
    title: "Williams Industrial Services Group Inc.",
  },
  {
    ticker: "NWCN",
    title: "NETWORK CN INC",
  },
  {
    ticker: "ESP",
    title: "ESPEY MFG & ELECTRONICS CORP",
  },
  {
    ticker: "LGHL",
    title: "Lion Group Holding Ltd",
  },
  {
    ticker: "MFV",
    title: "MFS SPECIAL VALUE TRUST",
  },
  {
    ticker: "ANY",
    title: "Sphere 3D Corp.",
  },
  {
    ticker: "BIVI",
    title: "BIOVIE INC.",
  },
  {
    ticker: "SNPX",
    title: "Synaptogenix, Inc.",
  },
  {
    ticker: "CGRN",
    title: "Capstone Green Energy Corp",
  },
  {
    ticker: "GRF",
    title: "EAGLE CAPITAL GROWTH FUND, INC.",
  },
  {
    ticker: "AGRI",
    title: "AGRIFORCE GROWING SYSTEMS LTD.",
  },
  {
    ticker: "GEBRF",
    title: "Greenbriar Capital Corp.",
  },
  {
    ticker: "NBEV",
    title: "NewAge, Inc.",
  },
  {
    ticker: "PMD",
    title: "PSYCHEMEDICS CORP",
  },
  {
    ticker: "GRTX",
    title: "Galera Therapeutics, Inc.",
  },
  {
    ticker: "CYN",
    title: "Cyngn Inc.",
  },
  {
    ticker: "LPTH",
    title: "LIGHTPATH TECHNOLOGIES INC",
  },
  {
    ticker: "HCMC",
    title: "Healthier Choices Management Corp.",
  },
  {
    ticker: "DALN",
    title: "DallasNews Corp",
  },
  {
    ticker: "APSI",
    title: "AQUA POWER SYSTEMS INC.",
  },
  {
    ticker: "UCL",
    title: "uCloudlink Group Inc.",
  },
  {
    ticker: "BBLR",
    title: "Bubblr Inc.",
  },
  {
    ticker: "SCND",
    title: "SCIENTIFIC INDUSTRIES INC",
  },
  {
    ticker: "GENH",
    title: "Generation Hemp, Inc.",
  },
  {
    ticker: "ANGN",
    title: "Angion Biomedica Corp.",
  },
  {
    ticker: "TRKA",
    title: "Troika Media Group, Inc.",
  },
  {
    ticker: "ELEV",
    title: "Elevation Oncology, Inc.",
  },
  {
    ticker: "AGTC",
    title: "APPLIED GENETIC TECHNOLOGIES CORP",
  },
  {
    ticker: "BAOS",
    title: "Baosheng Media Group Holdings Ltd",
  },
  {
    ticker: "ONCR",
    title: "Oncorus, Inc.",
  },
  {
    ticker: "AACG",
    title: "ATA Creativity Global",
  },
  {
    ticker: "POLA",
    title: "Polar Power, Inc.",
  },
  {
    ticker: "DWSN",
    title: "DAWSON GEOPHYSICAL CO",
  },
  {
    ticker: "EBET",
    title: "EBET, Inc.",
  },
  {
    ticker: "NBSE",
    title: "NeuBase Therapeutics, Inc.",
  },
  {
    ticker: "NRXP",
    title: "NRX Pharmaceuticals, Inc.",
  },
  {
    ticker: "SDIG",
    title: "Stronghold Digital Mining, Inc.",
  },
  {
    ticker: "VIRI",
    title: "Virios Therapeutics, Inc.",
  },
  {
    ticker: "RCOR",
    title: "Renovacor, Inc.",
  },
  {
    ticker: "OCUP",
    title: "Ocuphire Pharma, Inc.",
  },
  {
    ticker: "ESOA",
    title: "Energy Services of America CORP",
  },
  {
    ticker: "IPW",
    title: "iPower Inc.",
  },
  {
    ticker: "MXROF",
    title: "MAX RESOURCE CORP.",
  },
  {
    ticker: "ZVO",
    title: "Zovio Inc",
  },
  {
    ticker: "MODD",
    title: "Modular Medical, Inc.",
  },
  {
    ticker: "ACUR",
    title: "ACURA PHARMACEUTICALS, INC",
  },
  {
    ticker: "EVGN",
    title: "Evogene Ltd.",
  },
  {
    ticker: "WKSP",
    title: "Worksport Ltd",
  },
  {
    ticker: "SEAV",
    title: "SEATech Ventures Corp.",
  },
  {
    ticker: "NCNA",
    title: "NuCana plc",
  },
  {
    ticker: "CRBP",
    title: "Corbus Pharmaceuticals Holdings, Inc.",
  },
  {
    ticker: "MEEC",
    title: "Midwest Energy Emissions Corp.",
  },
  {
    ticker: "STRN",
    title: "Stran & Company, Inc.",
  },
  {
    ticker: "INTI",
    title: "Inhibitor Therapeutics, Inc.",
  },
  {
    ticker: "NBIO",
    title: "Nascent Biotech Inc.",
  },
  {
    ticker: "FRLN",
    title: "Freeline Therapeutics Holdings plc",
  },
  {
    ticker: "VCNX",
    title: "VACCINEX, INC.",
  },
  {
    ticker: "VERO",
    title: "Venus Concept Inc.",
  },
  {
    ticker: "MTEX",
    title: "MANNATECH INC",
  },
  {
    ticker: "PIAC",
    title: "PRINCETON CAPITAL CORP",
  },
  {
    ticker: "ADAD",
    title: "Huaizhong Health Group, Inc.",
  },
  {
    ticker: "SSKN",
    title: "STRATA Skin Sciences, Inc.",
  },
  {
    ticker: "PEYE",
    title: "PRECISION OPTICS CORPORATION, INC.",
  },
  {
    ticker: "NTRB",
    title: "NutriBand Inc.",
  },
  {
    ticker: "OPTT",
    title: "Ocean Power Technologies, Inc.",
  },
  {
    ticker: "CLBS",
    title: "CALADRIUS BIOSCIENCES, INC.",
  },
  {
    ticker: "SOHO",
    title: "Sotherly Hotels Inc.",
  },
  {
    ticker: "TGEN",
    title: "TECOGEN INC.",
  },
  {
    ticker: "OHCS",
    title: "Optimus Healthcare Services, Inc.",
  },
  {
    ticker: "BMIX",
    title: "Brazil Minerals, Inc.",
  },
  {
    ticker: "BWEN",
    title: "BROADWIND, INC.",
  },
  {
    ticker: "HUGE",
    title: "FSD Pharma Inc.",
  },
  {
    ticker: "HMMR",
    title: "HAMMER FIBER OPTICS HOLDINGS CORP",
  },
  {
    ticker: "AAU",
    title: "ALMADEN MINERALS LTD",
  },
  {
    ticker: "BIMT",
    title: "BITMIS CORP.",
  },
  {
    ticker: "DPRO",
    title: "Draganfly Inc.",
  },
  {
    ticker: "ZCMD",
    title: "Zhongchao Inc.",
  },
  {
    ticker: "AYRO",
    title: "AYRO, Inc.",
  },
  {
    ticker: "RWBYF",
    title: "Red White & Bloom Brands Inc.",
  },
  {
    ticker: "TLCC",
    title: "TWINLAB CONSOLIDATED HOLDINGS, INC.",
  },
  {
    ticker: "ICD",
    title: "Independence Contract Drilling, Inc.",
  },
  {
    ticker: "CLPS",
    title: "CLPS Inc",
  },
  {
    ticker: "IMRA",
    title: "IMARA Inc.",
  },
  {
    ticker: "CPIX",
    title: "CUMBERLAND PHARMACEUTICALS INC",
  },
  {
    ticker: "TAYD",
    title: "TAYLOR DEVICES INC",
  },
  {
    ticker: "ECTM",
    title: "ECA Marcellus Trust I",
  },
  {
    ticker: "ACRX",
    title: "ACELRX PHARMACEUTICALS INC",
  },
  {
    ticker: "WVVI",
    title: "WILLAMETTE VALLEY VINEYARDS INC",
  },
  {
    ticker: "YGMZ",
    title: "MingZhu Logistics Holdings Ltd",
  },
  {
    ticker: "PVNC",
    title: "PREVENTION INSURANCE COM",
  },
  {
    ticker: "FWP",
    title: "Forward Pharma A/S",
  },
  {
    ticker: "PHAS",
    title: "PhaseBio Pharmaceuticals Inc",
  },
  {
    ticker: "PRSI",
    title: "PORTSMOUTH SQUARE INC",
  },
  {
    ticker: "NOM",
    title: "NUVEEN MISSOURI QUALITY MUNICIPAL INCOME FUND",
  },
  {
    ticker: "SGMA",
    title: "SIGMATRON INTERNATIONAL INC",
  },
  {
    ticker: "BLMS",
    title: "BLOOMIOS, INC.",
  },
  {
    ticker: "EQOS",
    title: "EQONEX Ltd",
  },
  {
    ticker: "SYN",
    title: "Synthetic Biologics, Inc.",
  },
  {
    ticker: "CHEK",
    title: "Check-Cap Ltd",
  },
  {
    ticker: "CABA",
    title: "Cabaletta Bio, Inc.",
  },
  {
    ticker: "LABP",
    title: "Landos Biopharma, Inc.",
  },
  {
    ticker: "TREN",
    title: "TREND INNOVATIONS HOLDING INC.",
  },
  {
    ticker: "CDTX",
    title: "Cidara Therapeutics, Inc.",
  },
  {
    ticker: "MRM",
    title: "Medirom Healthcare Technologies Inc.",
  },
  {
    ticker: "WTT",
    title: "WIRELESS TELECOM GROUP INC",
  },
  {
    ticker: "XELA",
    title: "Exela Technologies, Inc.",
  },
  {
    ticker: "GLBZ",
    title: "GLEN BURNIE BANCORP",
  },
  {
    ticker: "EAR",
    title: "Eargo, Inc.",
  },
  {
    ticker: "MSBC",
    title: "MISSION BANCORP",
  },
  {
    ticker: "ATNF",
    title: "180 Life Sciences Corp.",
  },
  {
    ticker: "MNPR",
    title: "Monopar Therapeutics",
  },
  {
    ticker: "PGEZF",
    title: "Group Ten Metals Inc",
  },
  {
    ticker: "FSI",
    title: "FLEXIBLE SOLUTIONS INTERNATIONAL INC",
  },
  {
    ticker: "ONCS",
    title: "ONCOSEC MEDICAL Inc",
  },
  {
    ticker: "VINC",
    title: "Vincerx Pharma, Inc.",
  },
  {
    ticker: "VLCN",
    title: "Volcon, Inc.",
  },
  {
    ticker: "USAU",
    title: "U.S. GOLD CORP.",
  },
  {
    ticker: "SXTC",
    title: "China SXT Pharmaceuticals, Inc.",
  },
  {
    ticker: "JETMF",
    title: "Global Crossing Airlines Group Inc.",
  },
  {
    ticker: "XFOR",
    title: "X4 Pharmaceuticals, Inc",
  },
  {
    ticker: "BSFC",
    title: "Blue Star Foods Corp.",
  },
  {
    ticker: "TUEM",
    title: "TUESDAY MORNING CORP/DE",
  },
  {
    ticker: "GLYC",
    title: "GLYCOMIMETICS INC",
  },
  {
    ticker: "ICNB",
    title: "Iconic Brands, Inc.",
  },
  {
    ticker: "UWHGF",
    title: "United World Holding Group Ltd.",
  },
  {
    ticker: "CCNC",
    title: "Code Chain New Continent Ltd",
  },
  {
    ticker: "PRKA",
    title: "PARKS AMERICA, INC",
  },
  {
    ticker: "ABVC",
    title: "ABVC BIOPHARMA, INC.",
  },
  {
    ticker: "RIBT",
    title: "RiceBran Technologies",
  },
  {
    ticker: "AUVI",
    title: "Applied UV, Inc.",
  },
  {
    ticker: "FFLO",
    title: "Free Flow, Inc.",
  },
  {
    ticker: "IRL",
    title: "NEW IRELAND FUND INC",
  },
  {
    ticker: "RNWK",
    title: "REALNETWORKS INC",
  },
  {
    ticker: "CETY",
    title: "Clean Energy Technologies, Inc.",
  },
  {
    ticker: "IEHC",
    title: "IEH Corp",
  },
  {
    ticker: "AATC",
    title: "AUTOSCOPE TECHNOLOGIES CORP",
  },
  {
    ticker: "MRKR",
    title: "Marker Therapeutics, Inc.",
  },
  {
    ticker: "DCTH",
    title: "DELCATH SYSTEMS, INC.",
  },
  {
    ticker: "LEMIF",
    title: "Leading Edge Materials Corp.",
  },
  {
    ticker: "BPTH",
    title: "BIO-PATH HOLDINGS INC",
  },
  {
    ticker: "VGFC",
    title: "Very Good Food Co Inc.",
  },
  {
    ticker: "SOBR",
    title: "SOBR Safe, Inc.",
  },
  {
    ticker: "VVPR",
    title: "VivoPower International PLC",
  },
  {
    ticker: "PPSI",
    title: "PIONEER POWER SOLUTIONS, INC.",
  },
  {
    ticker: "PLAG",
    title: "Planet Green Holdings Corp.",
  },
  {
    ticker: "TTOO",
    title: "T2 Biosystems, Inc.",
  },
  {
    ticker: "LDSN",
    title: "Luduson G Inc.",
  },
  {
    ticker: "QTT",
    title: "Qutoutiao Inc.",
  },
  {
    ticker: "SVT",
    title: "SERVOTRONICS INC /DE/",
  },
  {
    ticker: "ABEO",
    title: "ABEONA THERAPEUTICS INC.",
  },
  {
    ticker: "VVOS",
    title: "Vivos Therapeutics, Inc.",
  },
  {
    ticker: "GBNY",
    title: "Generations Bancorp NY, Inc.",
  },
  {
    ticker: "HLRTF",
    title: "Hillcrest Energy Technologies Ltd.",
  },
  {
    ticker: "BTX",
    title: "Brooklyn ImmunoTherapeutics, Inc.",
  },
  {
    ticker: "COE",
    title: "China Online Education Group",
  },
  {
    ticker: "EGMCF",
    title: "EMGOLD MINING CORP",
  },
  {
    ticker: "CHNR",
    title: "CHINA NATURAL RESOURCES INC",
  },
  {
    ticker: "NULGF",
    title: "NuLegacy Gold Corp",
  },
  {
    ticker: "BHLL",
    title: "Bunker Hill Mining Corp.",
  },
  {
    ticker: "BEOB",
    title: "BEO BANCORP",
  },
  {
    ticker: "MITI",
    title: "Mitesco, Inc.",
  },
  {
    ticker: "TRIB",
    title: "TRINITY BIOTECH PLC",
  },
  {
    ticker: "CVR",
    title: "CHICAGO RIVET & MACHINE CO",
  },
  {
    ticker: "VPLM",
    title: "Voip-pal.com Inc",
  },
  {
    ticker: "BASA",
    title: "BASANITE, INC.",
  },
  {
    ticker: "FLES",
    title: "Auto Parts 4Less Group, Inc.",
  },
  {
    ticker: "DSS",
    title: "DSS, INC.",
  },
  {
    ticker: "LXEH",
    title: "Lixiang Education Holding Co. Ltd.",
  },
  {
    ticker: "ATHE",
    title: "ALTERITY THERAPEUTICS LTD",
  },
  {
    ticker: "BIXT",
    title: "BIOXYTRAN, INC",
  },
  {
    ticker: "SIOX",
    title: "Sio Gene Therapies Inc.",
  },
  {
    ticker: "BFRI",
    title: "Biofrontera Inc.",
  },
  {
    ticker: "SDPI",
    title: "Superior Drilling Products, Inc.",
  },
  {
    ticker: "ONTX",
    title: "Onconova Therapeutics, Inc.",
  },
  {
    ticker: "IMBI",
    title: "iMedia Brands, Inc.",
  },
  {
    ticker: "DLPN",
    title: "Dolphin Entertainment, Inc.",
  },
  {
    ticker: "YUANF",
    title: "FINCERA INC.",
  },
  {
    ticker: "EPWCF",
    title: "Empower Clinics Inc.",
  },
  {
    ticker: "POAI",
    title: "Predictive Oncology Inc.",
  },
  {
    ticker: "OCC",
    title: "OPTICAL CABLE CORP",
  },
  {
    ticker: "SPRO",
    title: "Spero Therapeutics, Inc.",
  },
  {
    ticker: "LOWLF",
    title: "Lowell Farms Inc.",
  },
  {
    ticker: "RDGL",
    title: "VIVOS INC",
  },
  {
    ticker: "CQCQ",
    title: "MAKINGORG, INC.",
  },
  {
    ticker: "ANTE",
    title: "AIRNET TECHNOLOGY INC.",
  },
  {
    ticker: "VIVC",
    title: "VIVIC CORP.",
  },
  {
    ticker: "HSMD",
    title: "Healthcare Solutions Management Group, Inc.",
  },
  {
    ticker: "AEZS",
    title: "Aeterna Zentaris Inc.",
  },
  {
    ticker: "HLYK",
    title: "HealthLynked Corp",
  },
  {
    ticker: "FTFT",
    title: "Future FinTech Group Inc.",
  },
  {
    ticker: "INQD",
    title: "Indoor Harvest Corp",
  },
  {
    ticker: "FJHL",
    title: "Fovea Jewelry Holdings Ltd.",
  },
  {
    ticker: "DAIO",
    title: "DATA I/O CORP",
  },
  {
    ticker: "MDJH",
    title: "MDJM LTD",
  },
  {
    ticker: "CLVR",
    title: "Clever Leaves Holdings Inc.",
  },
  {
    ticker: "DFCO",
    title: "DALRADA FINANCIAL CORP",
  },
  {
    ticker: "STAL",
    title: "Star Alliance International Corp.",
  },
  {
    ticker: "IGXT",
    title: "IntelGenx Technologies Corp.",
  },
  {
    ticker: "BSQR",
    title: "BSQUARE CORP /WA",
  },
  {
    ticker: "IGC",
    title: "India Globalization Capital, Inc.",
  },
  {
    ticker: "PATI",
    title: "PATRIOT TRANSPORTATION HOLDING, INC.",
  },
  {
    ticker: "VISL",
    title: "Vislink Technologies, Inc.",
  },
  {
    ticker: "LTES",
    title: "Leet Technology Inc.",
  },
  {
    ticker: "DGHI",
    title: "Digihost Technology Inc.",
  },
  {
    ticker: "MRIN",
    title: "MARIN SOFTWARE INC",
  },
  {
    ticker: "INDP",
    title: "Indaptus Therapeutics, Inc.",
  },
  {
    ticker: "OAKV",
    title: "Oak View Bankshares, Inc.",
  },
  {
    ticker: "GVP",
    title: "GSE SYSTEMS INC",
  },
  {
    ticker: "CVV",
    title: "CVD EQUIPMENT CORP",
  },
  {
    ticker: "XERI",
    title: "XERIANT, INC.",
  },
  {
    ticker: "AQST",
    title: "Aquestive Therapeutics, Inc.",
  },
  {
    ticker: "CLCS",
    title: "Cell Source, Inc.",
  },
  {
    ticker: "MULN",
    title: "MULLEN AUTOMOTIVE INC.",
  },
  {
    ticker: "PRPO",
    title: "Precipio, Inc.",
  },
  {
    ticker: "AGMH",
    title: "AGM GROUP HOLDINGS, INC.",
  },
  {
    ticker: "AGLE",
    title: "Aeglea BioTherapeutics, Inc.",
  },
  {
    ticker: "CLRB",
    title: "Cellectar Biosciences, Inc.",
  },
  {
    ticker: "ADIL",
    title: "ADIAL PHARMACEUTICALS, INC.",
  },
  {
    ticker: "CYCN",
    title: "Cyclerion Therapeutics, Inc.",
  },
  {
    ticker: "SGRP",
    title: "SPAR Group, Inc.",
  },
  {
    ticker: "YCBD",
    title: "cbdMD, Inc.",
  },
  {
    ticker: "WHLR",
    title: "Wheeler Real Estate Investment Trust, Inc.",
  },
  {
    ticker: "IHT",
    title: "INNSUITES HOSPITALITY TRUST",
  },
  {
    ticker: "SNGX",
    title: "SOLIGENIX, INC.",
  },
  {
    ticker: "BSGM",
    title: "BioSig Technologies, Inc.",
  },
  {
    ticker: "SGTX",
    title: "Sigilon Therapeutics, Inc.",
  },
  {
    ticker: "ZKIN",
    title: "ZK International Group Co., Ltd.",
  },
  {
    ticker: "CRMZ",
    title: "CREDITRISKMONITOR COM INC",
  },
  {
    ticker: "BAUFF",
    title: "Blue Star Gold Corp",
  },
  {
    ticker: "BCDA",
    title: "BioCardia, Inc.",
  },
  {
    ticker: "SWGI",
    title: "STAR WEALTH GROUP INC.",
  },
  {
    ticker: "JUVAF",
    title: "JUVA LIFE INC./Canada",
  },
  {
    ticker: "QTNT",
    title: "Quotient Ltd",
  },
  {
    ticker: "WAVE",
    title: "Eco Wave Power Global AB (publ)",
  },
  {
    ticker: "TLRS",
    title: "Timberline Resources Corp",
  },
  {
    ticker: "EAWD",
    title: "Energy & Water Development Corp",
  },
  {
    ticker: "VJET",
    title: "voxeljet AG",
  },
  {
    ticker: "NURO",
    title: "NeuroMetrix, Inc.",
  },
  {
    ticker: "NUBC",
    title: "NORTHUMBERLAND BANCORP",
  },
  {
    ticker: "AMRR",
    title: "American Metals Recovery & Recycling Inc.",
  },
  {
    ticker: "LCI",
    title: "LANNETT CO INC",
  },
  {
    ticker: "ASPU",
    title: "ASPEN GROUP, INC.",
  },
  {
    ticker: "NCPL",
    title: "Netcapital Inc.",
  },
  {
    ticker: "BCHG",
    title: "Grayscale Bitcoin Cash Trust (BCH)",
  },
  {
    ticker: "ENZN",
    title: "ENZON PHARMACEUTICALS, INC.",
  },
  {
    ticker: "TKAT",
    title: "Takung Art Co., Ltd",
  },
  {
    ticker: "RMSL",
    title: "RemSleep Holdings Inc.",
  },
  {
    ticker: "INRD",
    title: "Inrad Optics, Inc.",
  },
  {
    ticker: "PVCT",
    title: "PROVECTUS BIOPHARMACEUTICALS, INC.",
  },
  {
    ticker: "VYNT",
    title: "Vyant Bio, Inc.",
  },
  {
    ticker: "FEMY",
    title: "FEMASYS INC",
  },
  {
    ticker: "STLY",
    title: "HG Holdings, Inc.",
  },
  {
    ticker: "GNRS",
    title: "Greenrose Holding Co Inc.",
  },
  {
    ticker: "VINE",
    title: "Fresh Vine Wine, Inc.",
  },
  {
    ticker: "VYNE",
    title: "VYNE Therapeutics Inc.",
  },
  {
    ticker: "UNXP",
    title: "United Express Inc.",
  },
  {
    ticker: "GBNH",
    title: "Greenbrook TMS Inc.",
  },
  {
    ticker: "CUBA",
    title: "HERZFELD CARIBBEAN BASIN FUND INC",
  },
  {
    ticker: "XELB",
    title: "XCel Brands, Inc.",
  },
  {
    ticker: "IDRA",
    title: "IDERA PHARMACEUTICALS, INC.",
  },
  {
    ticker: "ALRT",
    title: "ALR TECHNOLOGIES INC.",
  },
  {
    ticker: "RELI",
    title: "Reliance Global Group, Inc.",
  },
  {
    ticker: "UURAF",
    title: "Ucore Rare Metals Inc.",
  },
  {
    ticker: "WHLM",
    title: "Wilhelmina International, Inc.",
  },
  {
    ticker: "MHPC",
    title: "MANUFACTURED HOUSING PROPERTIES INC.",
  },
  {
    ticker: "FHS",
    title: "First High-School Education Group Co., Ltd.",
  },
  {
    ticker: "SCYYF",
    title: "SCANDIUM INTERNATIONAL MINING CORP.",
  },
  {
    ticker: "BIMI",
    title: "BIMI International Medical Inc.",
  },
  {
    ticker: "SPND",
    title: "SPINDLETOP OIL & GAS CO",
  },
  {
    ticker: "AFIB",
    title: "Acutus Medical, Inc.",
  },
  {
    ticker: "NILE",
    title: "BitNile Holdings, Inc.",
  },
  {
    ticker: "ODYY",
    title: "Odyssey Health, Inc.",
  },
  {
    ticker: "ELTK",
    title: "ELTEK LTD",
  },
  {
    ticker: "APLT",
    title: "Applied Therapeutics Inc.",
  },
  {
    ticker: "CNTX",
    title: "Context Therapeutics Inc.",
  },
  {
    ticker: "ENSV",
    title: "Enservco Corp",
  },
  {
    ticker: "JCTCF",
    title: "JEWETT CAMERON TRADING CO LTD",
  },
  {
    ticker: "BRN",
    title: "BARNWELL INDUSTRIES INC",
  },
  {
    ticker: "MHHC",
    title: "MHHC Enterprises Inc.",
  },
  {
    ticker: "DENR",
    title: "Discovery Energy Corp.",
  },
  {
    ticker: "OPGN",
    title: "OPGEN INC",
  },
  {
    ticker: "RBCN",
    title: "Rubicon Technology, Inc.",
  },
  {
    ticker: "RGRX",
    title: "REGENERX BIOPHARMACEUTICALS INC",
  },
  {
    ticker: "TISI",
    title: "TEAM INC",
  },
  {
    ticker: "CRWE",
    title: "Crown Equity Holdings, Inc.",
  },
  {
    ticker: "ALRN",
    title: "AILERON THERAPEUTICS INC",
  },
  {
    ticker: "LYL",
    title: "Dragon Victory International Ltd",
  },
  {
    ticker: "SEAC",
    title: "SEACHANGE INTERNATIONAL INC",
  },
  {
    ticker: "TLIS",
    title: "Talis Biomedical Corp",
  },
  {
    ticker: "KTTA",
    title: "Pasithea Therapeutics Corp.",
  },
  {
    ticker: "AVCT",
    title: "American Virtual Cloud Technologies, Inc.",
  },
  {
    ticker: "ASTC",
    title: "ASTROTECH Corp",
  },
  {
    ticker: "NNVC",
    title: "NANOVIRICIDES, INC.",
  },
  {
    ticker: "RKDA",
    title: "Arcadia Biosciences, Inc.",
  },
  {
    ticker: "WTRH",
    title: "Waitr Holdings Inc.",
  },
  {
    ticker: "AGE",
    title: "AgeX Therapeutics, Inc.",
  },
  {
    ticker: "XNDA",
    title: "Tribal Rides International Corp.",
  },
  {
    ticker: "EDSA",
    title: "Edesa Biotech, Inc.",
  },
  {
    ticker: "CKX",
    title: "CKX LANDS, INC.",
  },
  {
    ticker: "BVXV",
    title: "BiondVax Pharmaceuticals Ltd.",
  },
  {
    ticker: "ELOX",
    title: "Eloxx Pharmaceuticals, Inc.",
  },
  {
    ticker: "WBBA",
    title: "WB Burgers Asia, Inc.",
  },
  {
    ticker: "RETO",
    title: "ReTo Eco-Solutions, Inc.",
  },
  {
    ticker: "AIRI",
    title: "AIR INDUSTRIES GROUP",
  },
  {
    ticker: "RGBP",
    title: "Regen BioPharma Inc",
  },
  {
    ticker: "IMAC",
    title: "IMAC Holdings, Inc.",
  },
  {
    ticker: "SFEG",
    title: "Santa Fe Gold CORP",
  },
  {
    ticker: "WYY",
    title: "WIDEPOINT CORP",
  },
  {
    ticker: "CREG",
    title: "Smart Powerr Corp.",
  },
  {
    ticker: "EVK",
    title: "Ever-Glory International Group, Inc.",
  },
  {
    ticker: "GLGI",
    title: "GREYSTONE LOGISTICS, INC.",
  },
  {
    ticker: "GXSFF",
    title: "Goldsource Mines Inc.",
  },
  {
    ticker: "BON",
    title: "Bon Natural Life Ltd",
  },
  {
    ticker: "SCKT",
    title: "SOCKET MOBILE, INC.",
  },
  {
    ticker: "OVTZ",
    title: "OCULUS VISIONTECH INC.",
  },
  {
    ticker: "LCGMF",
    title: "LION COPPER & GOLD CORP.",
  },
  {
    ticker: "HYEX",
    title: "HEALTHY EXTRACTS INC.",
  },
  {
    ticker: "CVVUF",
    title: "CANALASKA URANIUM LTD",
  },
  {
    ticker: "DATS",
    title: "DatChat, Inc.",
  },
  {
    ticker: "GRAY",
    title: "GRAYBUG VISION, INC.",
  },
  {
    ticker: "HCDI",
    title: "Harbor Custom Development, Inc.",
  },
  {
    ticker: "OTRK",
    title: "Ontrak, Inc.",
  },
  {
    ticker: "TAIT",
    title: "TAITRON COMPONENTS INC",
  },
  {
    ticker: "LTUM",
    title: "Lithium Corp",
  },
  {
    ticker: "DXYN",
    title: "DIXIE GROUP INC",
  },
  {
    ticker: "CHUC",
    title: "Charlie's Holdings, Inc.",
  },
  {
    ticker: "EMMA",
    title: "Emmaus Life Sciences, Inc.",
  },
  {
    ticker: "EKSO",
    title: "EKSO BIONICS HOLDINGS, INC.",
  },
  {
    ticker: "FBRX",
    title: "Forte Biosciences, Inc.",
  },
  {
    ticker: "IONM",
    title: "Assure Holdings Corp.",
  },
  {
    ticker: "ARGC",
    title: "ARION GROUP CORP.",
  },
  {
    ticker: "AEI",
    title: "Alset EHome International Inc.",
  },
  {
    ticker: "AAMC",
    title: "Altisource Asset Management Corp",
  },
  {
    ticker: "NOTR",
    title: "Nowtransit Inc",
  },
  {
    ticker: "BJDX",
    title: "Bluejay Diagnostics, Inc.",
  },
  {
    ticker: "BHV",
    title: "BLACKROCK VIRGINIA MUNICIPAL BOND TRUST",
  },
  {
    ticker: "VTNA",
    title: "VetaNova Inc.",
  },
  {
    ticker: "CRCW",
    title: "Crypto Co",
  },
  {
    ticker: "ENJY",
    title: "ENJOY TECHNOLOGY, INC./DE",
  },
  {
    ticker: "HLBZ",
    title: "Helbiz, Inc.",
  },
  {
    ticker: "EZFL",
    title: "EzFill Holdings Inc",
  },
  {
    ticker: "MFBP",
    title: "M&F BANCORP INC /NC/",
  },
  {
    ticker: "ELSE",
    title: "ELECTRO SENSORS INC",
  },
  {
    ticker: "GENE",
    title: "GENETIC TECHNOLOGIES LTD",
  },
  {
    ticker: "MTR",
    title: "MESA ROYALTY TRUST/TX",
  },
  {
    ticker: "ACFN",
    title: "ACORN ENERGY, INC.",
  },
  {
    ticker: "NISN",
    title: "Nisun International Enterprise Development Group Co., Ltd",
  },
  {
    ticker: "KGNR",
    title: "KANGE CORP",
  },
  {
    ticker: "MRAI",
    title: "Marpai, Inc.",
  },
  {
    ticker: "SGBX",
    title: "SG BLOCKS, INC.",
  },
  {
    ticker: "NAVB",
    title: "NAVIDEA BIOPHARMACEUTICALS, INC.",
  },
  {
    ticker: "HANNF",
    title: "Hannan Metals Ltd.",
  },
  {
    ticker: "CARV",
    title: "CARVER BANCORP INC",
  },
  {
    ticker: "ANLDF",
    title: "ANFIELD ENERGY INC.",
  },
  {
    ticker: "PHGE",
    title: "BiomX Inc.",
  },
  {
    ticker: "SFOR",
    title: "Zerify, Inc.",
  },
  {
    ticker: "PHIL",
    title: "PHI GROUP INC",
  },
  {
    ticker: "MTCR",
    title: "Metacrine, Inc.",
  },
  {
    ticker: "RAVE",
    title: "RAVE RESTAURANT GROUP, INC.",
  },
  {
    ticker: "PCST",
    title: "PURE CAPITAL SOLUTIONS, INC.",
  },
  {
    ticker: "CANN",
    title: "TREES Corp (Colorado)",
  },
  {
    ticker: "INPX",
    title: "INPIXON",
  },
  {
    ticker: "CSKL",
    title: "CATSKILL HUDSON BANCORP INC",
  },
  {
    ticker: "ACMB",
    title: "AGRO CAPITAL MANAGEMENT CORP.",
  },
  {
    ticker: "IMMX",
    title: "Immix Biopharma, Inc.",
  },
  {
    ticker: "EWGFF",
    title: "Eat Well Investment Group Inc.",
  },
  {
    ticker: "ARAV",
    title: "Aravive, Inc.",
  },
  {
    ticker: "PJXRF",
    title: "PJX Resources Inc.",
  },
  {
    ticker: "MOXC",
    title: "Moxian (BVI) Inc",
  },
  {
    ticker: "ISPC",
    title: "iSpecimen Inc.",
  },
  {
    ticker: "MDIA",
    title: "Mediaco Holding Inc.",
  },
  {
    ticker: "KALA",
    title: "Kala Pharmaceuticals, Inc.",
  },
  {
    ticker: "FUST",
    title: "FUSE GROUP HOLDING INC.",
  },
  {
    ticker: "WBEV",
    title: "Winc, Inc.",
  },
  {
    ticker: "NRRWF",
    title: "Nuran Wireless Inc.",
  },
  {
    ticker: "VRPX",
    title: "Virpax Pharmaceuticals, Inc.",
  },
  {
    ticker: "BDCO",
    title: "BLUE DOLPHIN ENERGY CO",
  },
  {
    ticker: "TMBR",
    title: "Timber Pharmaceuticals, Inc.",
  },
  {
    ticker: "ATMS",
    title: "Artemis Therapeutics, Inc.",
  },
  {
    ticker: "BKUCF",
    title: "BLUE SKY URANIUM CORP.",
  },
  {
    ticker: "FPAY",
    title: "FlexShopper, Inc.",
  },
  {
    ticker: "SBET",
    title: "SharpLink Gaming Ltd.",
  },
  {
    ticker: "CURR",
    title: "Cure Pharmaceutical Holding Corp.",
  },
  {
    ticker: "VEEE",
    title: "Twin Vee PowerCats, Co.",
  },
  {
    ticker: "IKT",
    title: "Inhibikase Therapeutics, Inc.",
  },
  {
    ticker: "PALT",
    title: "PALTALK, INC.",
  },
  {
    ticker: "IPTK",
    title: "AS-IP TECH INC",
  },
  {
    ticker: "CEMI",
    title: "CHEMBIO DIAGNOSTICS, INC.",
  },
  {
    ticker: "ALF",
    title: "Alfi, Inc.",
  },
  {
    ticker: "MJNE",
    title: "MJ Holdings, Inc.",
  },
  {
    ticker: "QMCI",
    title: "QUOTEMEDIA INC",
  },
  {
    ticker: "AMPG",
    title: "AmpliTech Group, Inc.",
  },
  {
    ticker: "YMTX",
    title: "YUMANITY THERAPEUTICS, INC.",
  },
  {
    ticker: "NUZE",
    title: "NuZee, Inc.",
  },
  {
    ticker: "GMGT",
    title: "Gaming Technologies, Inc.",
  },
  {
    ticker: "SIF",
    title: "SIFCO INDUSTRIES INC",
  },
  {
    ticker: "AYTU",
    title: "AYTU BIOPHARMA, INC",
  },
  {
    ticker: "ATIF",
    title: "ATIF Holdings Ltd",
  },
  {
    ticker: "CRYO",
    title: "AMERICAN CRYOSTEM Corp",
  },
  {
    ticker: "BLBX",
    title: "BLACKBOXSTOCKS INC.",
  },
  {
    ticker: "OXBR",
    title: "OXBRIDGE RE HOLDINGS Ltd",
  },
  {
    ticker: "PBSV",
    title: "Pharma-Bio Serv, Inc.",
  },
  {
    ticker: "TIVC",
    title: "Tivic Health Systems, Inc.",
  },
  {
    ticker: "FLYLF",
    title: "FLYHT Aerospace Solutions Ltd.",
  },
  {
    ticker: "CYAN",
    title: "CYANOTECH CORP",
  },
  {
    ticker: "TANH",
    title: "TANTECH HOLDINGS LTD",
  },
  {
    ticker: "EVOL",
    title: "Symbolic Logic, Inc.",
  },
  {
    ticker: "RCON",
    title: "Recon Technology, Ltd",
  },
  {
    ticker: "EEIQ",
    title: "Elite Education Group International Ltd",
  },
  {
    ticker: "FBPI",
    title: "FIRST BANCORP OF INDIANA INC",
  },
  {
    ticker: "QLGN",
    title: "Qualigen Therapeutics, Inc.",
  },
  {
    ticker: "CRDV",
    title: "Community Redevelopment Inc.",
  },
  {
    ticker: "OPHC",
    title: "OptimumBank Holdings, Inc.",
  },
  {
    ticker: "ACER",
    title: "Acer Therapeutics Inc.",
  },
  {
    ticker: "CANF",
    title: "Can-Fite BioPharma Ltd.",
  },
  {
    ticker: "JSDA",
    title: "JONES SODA CO",
  },
  {
    ticker: "CSCW",
    title: "Color Star Technology Co., Ltd.",
  },
  {
    ticker: "WAVD",
    title: "WAVEDANCER, INC.",
  },
  {
    ticker: "BMNM",
    title: "BIMINI CAPITAL MANAGEMENT, INC.",
  },
  {
    ticker: "MINM",
    title: "MINIM, INC.",
  },
  {
    ticker: "ALNA",
    title: "Allena Pharmaceuticals, Inc.",
  },
  {
    ticker: "SLHG",
    title: "Skylight Health Group Inc.",
  },
  {
    ticker: "LSF",
    title: "Laird Superfood, Inc.",
  },
  {
    ticker: "PFIN",
    title: "P&F INDUSTRIES INC",
  },
  {
    ticker: "ALEAF",
    title: "Aleafia Health Inc.",
  },
  {
    ticker: "TETAA",
    title: "Teton Advisors, Inc.",
  },
  {
    ticker: "UGHB",
    title: "UNIVERSAL GLOBAL HUB INC.",
  },
  {
    ticker: "PZG",
    title: "Paramount Gold Nevada Corp.",
  },
  {
    ticker: "RNXT",
    title: "RenovoRx, Inc.",
  },
  {
    ticker: "SOWG",
    title: "Sow Good Inc.",
  },
  {
    ticker: "GYRO",
    title: "Gyrodyne, LLC",
  },
  {
    ticker: "TLSS",
    title: "Transportation & Logistics Systems, Inc.",
  },
  {
    ticker: "PETV",
    title: "PetVivo Holdings, Inc.",
  },
  {
    ticker: "YBGJ",
    title: "Yubo International Biotech Ltd",
  },
  {
    ticker: "CWBR",
    title: "CohBar, Inc.",
  },
  {
    ticker: "COHN",
    title: "Cohen & Co Inc.",
  },
  {
    ticker: "ERKH",
    title: "Eureka Homestead Bancorp, Inc.",
  },
  {
    ticker: "APVO",
    title: "Aptevo Therapeutics Inc.",
  },
  {
    ticker: "PURE",
    title: "PURE BIOSCIENCE, INC.",
  },
  {
    ticker: "NSAV",
    title: "Net Savings Link, Inc./DE",
  },
  {
    ticker: "KIQ",
    title: "KELSO TECHNOLOGIES INC",
  },
  {
    ticker: "QH",
    title: "QUHUO Ltd",
  },
  {
    ticker: "EQTRF",
    title: "Altamira Gold Corp.",
  },
  {
    ticker: "IDW",
    title: "IDW MEDIA HOLDINGS, INC.",
  },
  {
    ticker: "USLG",
    title: "U.S. Lighting Group, Inc.",
  },
  {
    ticker: "VASO",
    title: "VASO Corp",
  },
  {
    ticker: "NAOV",
    title: "NanoVibronix, Inc.",
  },
  {
    ticker: "CRCUF",
    title: "Canagold Resources Ltd.",
  },
  {
    ticker: "SODI",
    title: "SOLITRON DEVICES INC",
  },
  {
    ticker: "CNFR",
    title: "Conifer Holdings, Inc.",
  },
  {
    ticker: "CUBT",
    title: "Curative Biotechnology Inc",
  },
  {
    ticker: "ESBS",
    title: "ES Bancshares, Inc.",
  },
  {
    ticker: "APWC",
    title: "ASIA PACIFIC WIRE & CABLE CORP LTD",
  },
  {
    ticker: "BYLG",
    title: "BYLOG GROUP CORP.",
  },
  {
    ticker: "XRTX",
    title: "XORTX Therapeutics Inc.",
  },
  {
    ticker: "VRVR",
    title: "VIRTUAL INTERACTIVE TECHNOLOGIES CORP.",
  },
  {
    ticker: "BTBD",
    title: "BT Brands, Inc.",
  },
  {
    ticker: "GIGM",
    title: "GIGAMEDIA Ltd",
  },
  {
    ticker: "JUPW",
    title: "Jupiter Wellness, Inc.",
  },
  {
    ticker: "CYTH",
    title: "Cyclo Therapeutics, Inc.",
  },
  {
    ticker: "DTST",
    title: "Data Storage Corp",
  },
  {
    ticker: "PTPI",
    title: "Petros Pharmaceuticals, Inc.",
  },
  {
    ticker: "JZXN",
    title: "Jiuzi Holdings, Inc.",
  },
  {
    ticker: "TBTC",
    title: "TABLE TRAC INC",
  },
  {
    ticker: "SPRS",
    title: "SURGE COMPONENTS INC",
  },
  {
    ticker: "VRME",
    title: "VerifyMe, Inc.",
  },
  {
    ticker: "RVPH",
    title: "REVIVA PHARMACEUTICALS HOLDINGS, INC.",
  },
  {
    ticker: "CING",
    title: "Cingulate Inc.",
  },
  {
    ticker: "MYMX",
    title: "MYMETICS CORP",
  },
  {
    ticker: "TRUX",
    title: "Truxton Corp",
  },
  {
    ticker: "SKYE",
    title: "Skye Bioscience, Inc.",
  },
  {
    ticker: "APRE",
    title: "Aprea Therapeutics, Inc.",
  },
  {
    ticker: "TAOP",
    title: "Taoping Inc.",
  },
  {
    ticker: "TRT",
    title: "TRIO-TECH INTERNATIONAL",
  },
  {
    ticker: "LVRLF",
    title: "CordovaCann Corp.",
  },
  {
    ticker: "PAYD",
    title: "PAID INC",
  },
  {
    ticker: "GRNQ",
    title: "Greenpro Capital Corp.",
  },
  {
    ticker: "NSPR",
    title: "InspireMD, Inc.",
  },
  {
    ticker: "AXREF",
    title: "AMARC RESOURCES LTD",
  },
  {
    ticker: "LMNL",
    title: "Liminal BioSciences Inc.",
  },
  {
    ticker: "LEXX",
    title: "Lexaria Bioscience Corp.",
  },
  {
    ticker: "OPXS",
    title: "Optex Systems Holdings Inc",
  },
  {
    ticker: "BICX",
    title: "BioCorRx Inc.",
  },
  {
    ticker: "CDELF",
    title: "CANDELARIA MINING CORP.",
  },
  {
    ticker: "AEY",
    title: "ADDVANTAGE TECHNOLOGIES GROUP INC",
  },
  {
    ticker: "DBS",
    title: "INVESCO DB SILVER FUND",
  },
  {
    ticker: "NGTF",
    title: "NightFood Holdings, Inc.",
  },
  {
    ticker: "EDXC",
    title: "Endexx Corp",
  },
  {
    ticker: "TRXA",
    title: "Trex Acquisition Corp.",
  },
  {
    ticker: "AEMD",
    title: "AETHLON MEDICAL INC",
  },
  {
    ticker: "USEG",
    title: "US ENERGY CORP",
  },
  {
    ticker: "SECO",
    title: "Secoo Holding Ltd",
  },
  {
    ticker: "SONN",
    title: "Sonnet BioTherapeutics Holdings, Inc.",
  },
  {
    ticker: "FFHL",
    title: "Fuwei Films (Holdings), Co. Ltd.",
  },
  {
    ticker: "RNAZ",
    title: "Transcode Therapeutics, Inc.",
  },
  {
    ticker: "OOGI",
    title: "C2E ENERGY, INC.",
  },
  {
    ticker: "BLNC",
    title: "Balance Labs, Inc.",
  },
  {
    ticker: "EPGG",
    title: "Empire Global Gaming, Inc.",
  },
  {
    ticker: "BIOC",
    title: "BIOCEPT INC",
  },
  {
    ticker: "TPST",
    title: "Tempest Therapeutics, Inc.",
  },
  {
    ticker: "STCB",
    title: "Starco Brands, Inc.",
  },
  {
    ticker: "RXMD",
    title: "Progressive Care Inc.",
  },
  {
    ticker: "GNLN",
    title: "Greenlane Holdings, Inc.",
  },
  {
    ticker: "MDGS",
    title: "Medigus Ltd.",
  },
  {
    ticker: "LHIL",
    title: "Leader Hill Corp",
  },
  {
    ticker: "HSTI",
    title: "High Sierra Technologies, Inc.",
  },
  {
    ticker: "HFUS",
    title: "Hartford Great Health Corp.",
  },
  {
    ticker: "CTEK",
    title: "CYNERGISTEK, INC",
  },
  {
    ticker: "EXN",
    title: "EXCELLON RESOURCES INC",
  },
  {
    ticker: "ELYS",
    title: "Elys Game Technology, Corp.",
  },
  {
    ticker: "AYLA",
    title: "Ayala Pharmaceuticals, Inc.",
  },
  {
    ticker: "PYYX",
    title: "PYXUS INTERNATIONAL, INC.",
  },
  {
    ticker: "AXAS",
    title: "ABRAXAS PETROLEUM CORP",
  },
  {
    ticker: "FORD",
    title: "Forward Industries, Inc.",
  },
  {
    ticker: "ARDS",
    title: "Aridis Pharmaceuticals, Inc.",
  },
  {
    ticker: "FDLB",
    title: "FIDELITY FEDERAL BANCORP",
  },
  {
    ticker: "GLMD",
    title: "Galmed Pharmaceuticals Ltd.",
  },
  {
    ticker: "SOFO",
    title: "SONIC FOUNDRY INC",
  },
  {
    ticker: "NEPH",
    title: "NEPHROS INC",
  },
  {
    ticker: "ONVO",
    title: "ORGANOVO HOLDINGS, INC.",
  },
  {
    ticker: "BWMG",
    title: "Brownie's Marine Group, Inc",
  },
  {
    ticker: "ODII",
    title: "Odyssey Semiconductor Technologies, Inc.",
  },
  {
    ticker: "UFAB",
    title: "Unique Fabricating, Inc.",
  },
  {
    ticker: "BTCS",
    title: "BTCS Inc.",
  },
  {
    ticker: "EDTK",
    title: "Skillful Craftsman Education Technology Ltd",
  },
  {
    ticker: "NVSGF",
    title: "Nevada Sunrise Gold Corp",
  },
  {
    ticker: "BNSO",
    title: "BONSO ELECTRONICS INTERNATIONAL INC",
  },
  {
    ticker: "GJCU",
    title: "GJ Culture Group US, Inc.",
  },
  {
    ticker: "TLGN",
    title: "Ever Harvest International Group Inc.",
  },
  {
    ticker: "PNXLF",
    title: "Argentina Lithium & Energy Corp.",
  },
  {
    ticker: "VEGYF",
    title: "VIRGINIA ENERGY RESOURCES INC",
  },
  {
    ticker: "WNW",
    title: "Meiwu Technology Co Ltd",
  },
  {
    ticker: "HGLD",
    title: "Patagonia Gold Corp.",
  },
  {
    ticker: "OCEL",
    title: "Organicell Regenerative Medicine, Inc.",
  },
  {
    ticker: "MARPS",
    title: "MARINE PETROLEUM TRUST",
  },
  {
    ticker: "TOPS",
    title: "TOP SHIPS INC.",
  },
  {
    ticker: "UNEX",
    title: "UNEX HOLDINGS INC.",
  },
  {
    ticker: "DUOT",
    title: "DUOS TECHNOLOGIES GROUP, INC.",
  },
  {
    ticker: "REED",
    title: "REED'S, INC.",
  },
  {
    ticker: "ILHMF",
    title: "International Lithium Corp",
  },
  {
    ticker: "BTB",
    title: "Bit Brother Ltd",
  },
  {
    ticker: "SMIT",
    title: "SCHMITT INDUSTRIES INC",
  },
  {
    ticker: "SYTE",
    title: "ENTERPRISE DIVERSIFIED, INC.",
  },
  {
    ticker: "GFGSF",
    title: "GFG Resources Inc.",
  },
  {
    ticker: "TSRI",
    title: "TSR INC",
  },
  {
    ticker: "RZZN",
    title: "Jialijia Group Corp Ltd",
  },
  {
    ticker: "TOMZ",
    title: "TOMI Environmental Solutions, Inc.",
  },
  {
    ticker: "IPIX",
    title: "Innovation Pharmaceuticals Inc.",
  },
  {
    ticker: "SSNT",
    title: "SilverSun Technologies, Inc.",
  },
  {
    ticker: "MAPPF",
    title: "PROSTAR HOLDINGS INC. /BC",
  },
  {
    ticker: "SRRE",
    title: "SUNRISE REAL ESTATE GROUP INC",
  },
  {
    ticker: "IPSI",
    title: "Innovative Payment Solutions, Inc.",
  },
  {
    ticker: "IMHC",
    title: "IMPERALIS HOLDING CORP.",
  },
  {
    ticker: "TNGL",
    title: "TONOGOLD RESOURCES INC",
  },
  {
    ticker: "UPC",
    title: "Universe Pharmaceuticals INC",
  },
  {
    ticker: "CCBC",
    title: "Chino Commercial Bancorp",
  },
  {
    ticker: "SLNO",
    title: "SOLENO THERAPEUTICS INC",
  },
  {
    ticker: "LXXGF",
    title: "LexaGene Holdings Inc.",
  },
  {
    ticker: "QUMU",
    title: "Qumu Corp",
  },
  {
    ticker: "JAGX",
    title: "Jaguar Health, Inc.",
  },
  {
    ticker: "SFRX",
    title: "SEAFARER EXPLORATION CORP",
  },
  {
    ticker: "RCRT",
    title: "Recruiter.com Group, Inc.",
  },
  {
    ticker: "EXCL",
    title: "Excellerant, Inc.",
  },
  {
    ticker: "INLX",
    title: "INTELLINETICS, INC.",
  },
  {
    ticker: "PBMLF",
    title: "Pacific Booker Minerals Inc.",
  },
  {
    ticker: "GAME",
    title: "Engine Gaming & Media, Inc.",
  },
  {
    ticker: "MITO",
    title: "Stealth BioTherapeutics Corp",
  },
  {
    ticker: "BKYI",
    title: "BIO KEY INTERNATIONAL INC",
  },
  {
    ticker: "CRKN",
    title: "Crown Electrokinetics Corp.",
  },
  {
    ticker: "SFET",
    title: "Safe-T Group Ltd.",
  },
  {
    ticker: "BPTS",
    title: "Biophytis SA",
  },
  {
    ticker: "DIAH",
    title: "DIAMOND HOLDINGS, INC.",
  },
  {
    ticker: "INBP",
    title: "INTEGRATED BIOPHARMA INC",
  },
  {
    ticker: "ENSC",
    title: "Ensysce Biosciences, Inc.",
  },
  {
    ticker: "GBCS",
    title: "SELECTIS HEALTH, INC.",
  },
  {
    ticker: "GIPR",
    title: "GENERATION INCOME PROPERTIES, INC.",
  },
  {
    ticker: "FMFG",
    title: "Farmers & Merchants Bancshares, Inc.",
  },
  {
    ticker: "JVA",
    title: "COFFEE HOLDING CO INC",
  },
  {
    ticker: "IMRN",
    title: "Immuron Ltd",
  },
  {
    ticker: "MDRR",
    title: "Medalist Diversified REIT, Inc.",
  },
  {
    ticker: "DLTI",
    title: "DLT Resolution Inc.",
  },
  {
    ticker: "NMTC",
    title: "NEUROONE MEDICAL TECHNOLOGIES Corp",
  },
  {
    ticker: "GARWF",
    title: "Golden Arrow Resources Corp",
  },
  {
    ticker: "MEDS",
    title: "TRxADE HEALTH, INC",
  },
  {
    ticker: "RLBY",
    title: "RELIABILITY INC",
  },
  {
    ticker: "TKLS",
    title: "Trutankless, Inc.",
  },
  {
    ticker: "ISIG",
    title: "INSIGNIA SYSTEMS INC/MN",
  },
  {
    ticker: "ARTW",
    title: "ARTS WAY MANUFACTURING CO INC",
  },
  {
    ticker: "YAYO",
    title: "EVmo, Inc.",
  },
  {
    ticker: "IDXG",
    title: "INTERPACE BIOSCIENCES, INC.",
  },
  {
    ticker: "ILAL",
    title: "International Land Alliance Inc.",
  },
  {
    ticker: "AMS",
    title: "AMERICAN SHARED HOSPITAL SERVICES",
  },
  {
    ticker: "BBLG",
    title: "Bone Biologics Corp",
  },
  {
    ticker: "AHI",
    title: "Advanced Human Imaging Ltd",
  },
  {
    ticker: "HLTT",
    title: "Healthtech Solutions, Inc./UT",
  },
  {
    ticker: "WLYW",
    title: "Wally World Media, Inc",
  },
  {
    ticker: "MSN",
    title: "EMERSON RADIO CORP",
  },
  {
    ticker: "SCGY",
    title: "SCIENTIFIC ENERGY, INC",
  },
  {
    ticker: "BOPO",
    title: "Biopower Operations Corp",
  },
  {
    ticker: "FZMD",
    title: "Fuse Medical, Inc.",
  },
  {
    ticker: "ARTL",
    title: "ARTELO BIOSCIENCES, INC.",
  },
  {
    ticker: "HYRE",
    title: "HyreCar Inc.",
  },
  {
    ticker: "RCG",
    title: "RENN Fund, Inc.",
  },
  {
    ticker: "LOGC",
    title: "LogicBio Therapeutics, Inc.",
  },
  {
    ticker: "SUIC",
    title: "Sino United Worldwide Consolidated Ltd.",
  },
  {
    ticker: "SENR",
    title: "Strategic Environmental & Energy Resources, Inc.",
  },
  {
    ticker: "CPMV",
    title: "Mosaic ImmunoEngineering Inc.",
  },
  {
    ticker: "MMTIF",
    title: "MICROMEM TECHNOLOGIES INC",
  },
  {
    ticker: "COMS",
    title: "COMSovereign Holding Corp.",
  },
  {
    ticker: "CRZY",
    title: "CRAZY WOMAN CREEK BANCORP INC",
  },
  {
    ticker: "MOTS",
    title: "Motus GI Holdings, Inc.",
  },
  {
    ticker: "BMMJ",
    title: "BODY & MIND INC.",
  },
  {
    ticker: "GTMAY",
    title: "GRUPO TMM SAB",
  },
  {
    ticker: "RVIV",
    title: "Reviv3 Procare Co",
  },
  {
    ticker: "CLRO",
    title: "CLEARONE INC",
  },
  {
    ticker: "CLSH",
    title: "CLS Holdings USA, Inc.",
  },
  {
    ticker: "IFBD",
    title: "Infobird Co., Ltd",
  },
  {
    ticker: "NRBO",
    title: "NeuroBo Pharmaceuticals, Inc.",
  },
  {
    ticker: "LRDC",
    title: "Laredo Oil, Inc.",
  },
  {
    ticker: "MITQ",
    title: "MOVING iMAGE TECHNOLOGIES INC.",
  },
  {
    ticker: "IMH",
    title: "IMPAC MORTGAGE HOLDINGS INC",
  },
  {
    ticker: "KOOL",
    title: "Manycore Tech Inc.",
  },
  {
    ticker: "KTRA",
    title: "Kintara Therapeutics, Inc.",
  },
  {
    ticker: "CLRI",
    title: "Cleartronic, Inc.",
  },
  {
    ticker: "UNCY",
    title: "Unicycive Therapeutics, Inc.",
  },
  {
    ticker: "ICCT",
    title: "iCoreConnect Inc.",
  },
  {
    ticker: "SVVC",
    title: "Firsthand Technology Value Fund, Inc.",
  },
  {
    ticker: "PBIO",
    title: "PRESSURE BIOSCIENCES INC",
  },
  {
    ticker: "VYEY",
    title: "VICTORY OILFIELD TECH, INC.",
  },
  {
    ticker: "DRFS",
    title: "Dr. Foods, Inc.",
  },
  {
    ticker: "NEWH",
    title: "NewHydrogen, Inc.",
  },
  {
    ticker: "CLRD",
    title: "Clearday, Inc.",
  },
  {
    ticker: "URLOF",
    title: "NAMESILO TECHNOLOGIES CORP.",
  },
  {
    ticker: "WINT",
    title: "WINDTREE THERAPEUTICS INC /DE/",
  },
  {
    ticker: "TGCB",
    title: "Tego Cyber, Inc.",
  },
  {
    ticker: "BLIN",
    title: "Bridgeline Digital, Inc.",
  },
  {
    ticker: "IAALF",
    title: "IBC Advanced Alloys Corp.",
  },
  {
    ticker: "CNET",
    title: "ZW Data Action Technologies Inc.",
  },
  {
    ticker: "BRTX",
    title: "BioRestorative Therapies, Inc.",
  },
  {
    ticker: "IPDN",
    title: "Professional Diversity Network, Inc.",
  },
  {
    ticker: "ITP",
    title: "IT TECH PACKAGING, INC.",
  },
  {
    ticker: "ALTD",
    title: "ALTITUDE INTERNATIONAL HOLDINGS, INC.",
  },
  {
    ticker: "TOMDF",
    title: "TODOS MEDICAL LTD.",
  },
  {
    ticker: "ADRU",
    title: "INVESCO BLDRS INDEX FUNDS TRUST",
  },
  {
    ticker: "MIND",
    title: "MIND TECHNOLOGY, INC",
  },
  {
    ticker: "NBY",
    title: "NovaBay Pharmaceuticals, Inc.",
  },
  {
    ticker: "UTME",
    title: "UTime Ltd",
  },
  {
    ticker: "FTLF",
    title: "FITLIFE BRANDS, INC.",
  },
  {
    ticker: "BUDZ",
    title: "WEED, INC.",
  },
  {
    ticker: "ELIO",
    title: "Elio Motors, Inc.",
  },
  {
    ticker: "NLBS",
    title: "NUTRALIFE BIOSCIENCES, INC",
  },
  {
    ticker: "SISI",
    title: "SHINECO, INC.",
  },
  {
    ticker: "PTIX",
    title: "Protagenic Therapeutics, Inc.new",
  },
  {
    ticker: "ARTH",
    title: "Arch Therapeutics, Inc.",
  },
  {
    ticker: "DTGI",
    title: "Digerati Technologies, Inc.",
  },
  {
    ticker: "WAFU",
    title: "Wah Fu Education Group Ltd",
  },
  {
    ticker: "ROYTL",
    title: "Pacific Coast Oil Trust",
  },
  {
    ticker: "BOSC",
    title: "BOS BETTER ONLINE SOLUTIONS LTD",
  },
  {
    ticker: "PFHO",
    title: "PACIFIC HEALTH CARE ORGANIZATION INC",
  },
  {
    ticker: "UNAM",
    title: "UNICO AMERICAN CORP",
  },
  {
    ticker: "BLCM",
    title: "BELLICUM PHARMACEUTICALS, INC",
  },
  {
    ticker: "PIK",
    title: "KIDPIK CORP.",
  },
  {
    ticker: "XITO",
    title: "Xenous Holdings, Inc.",
  },
  {
    ticker: "ATAO",
    title: "ALTAIR INTERNATIONAL CORP.",
  },
  {
    ticker: "MMTRS",
    title: "MILLS MUSIC TRUST",
  },
  {
    ticker: "MYO",
    title: "MYOMO, INC.",
  },
  {
    ticker: "CRTD",
    title: "Creatd, Inc.",
  },
  {
    ticker: "ELVG",
    title: "Elvictor Group, Inc.",
  },
  {
    ticker: "CTGL",
    title: "CITRINE GLOBAL, CORP.",
  },
  {
    ticker: "LVVV",
    title: "LiveWire Ergogenics, Inc.",
  },
  {
    ticker: "PRKR",
    title: "PARKERVISION INC",
  },
  {
    ticker: "BBI",
    title: "Brickell Biotech, Inc.",
  },
  {
    ticker: "SCIA",
    title: "SCI Engineered Materials, Inc.",
  },
  {
    ticker: "DHCC",
    title: "DIAMONDHEAD CASINO CORP",
  },
  {
    ticker: "RYES",
    title: "Rise Gold Corp.",
  },
  {
    ticker: "LEDS",
    title: "SemiLEDs Corp",
  },
  {
    ticker: "AVMR",
    title: "AVRA Medical Robotics, Inc.",
  },
  {
    ticker: "BLPH",
    title: "Bellerophon Therapeutics, Inc.",
  },
  {
    ticker: "GMPW",
    title: "GIVEMEPOWER CORP",
  },
  {
    ticker: "GULTU",
    title: "Gulf Coast Ultra Deep Royalty Trust",
  },
  {
    ticker: "CNNC",
    title: "Cannonau Corp.",
  },
  {
    ticker: "NNUP",
    title: "NOCOPI TECHNOLOGIES INC/MD/",
  },
  {
    ticker: "CYCC",
    title: "Cyclacel Pharmaceuticals, Inc.",
  },
  {
    ticker: "AUUD",
    title: "AUDDIA INC.",
  },
  {
    ticker: "IVFH",
    title: "INNOVATIVE FOOD HOLDINGS INC",
  },
  {
    ticker: "IRNS",
    title: "IRONSTONE PROPERTIES, INC.",
  },
  {
    ticker: "ITHUF",
    title: "iANTHUS CAPITAL HOLDINGS, INC.",
  },
  {
    ticker: "UMEWF",
    title: "UMeWorld Ltd",
  },
  {
    ticker: "YTEN",
    title: "YIELD10 BIOSCIENCE, INC.",
  },
  {
    ticker: "NVNT",
    title: "NOVINT TECHNOLOGIES INC",
  },
  {
    ticker: "CVAT",
    title: "Cavitation Technologies, Inc.",
  },
  {
    ticker: "AWX",
    title: "AVALON HOLDINGS CORP",
  },
  {
    ticker: "ACAN",
    title: "AmeriCann, Inc.",
  },
  {
    ticker: "SILO",
    title: "Silo Pharma, Inc.",
  },
  {
    ticker: "RSHN",
    title: "RushNet, Inc.",
  },
  {
    ticker: "WARM",
    title: "COOL TECHNOLOGIES, INC.",
  },
  {
    ticker: "DYNT",
    title: "DYNATRONICS CORP",
  },
  {
    ticker: "OWPC",
    title: "One World Products, Inc.",
  },
  {
    ticker: "TGIFF",
    title: "1933 Industries Inc.",
  },
  {
    ticker: "LBCMF",
    title: "Libero Copper & Gold Corp",
  },
  {
    ticker: "EAST",
    title: "Eastside Distilling, Inc.",
  },
  {
    ticker: "HDVY",
    title: "HEALTH DISCOVERY CORP",
  },
  {
    ticker: "SMREF",
    title: "SUN SUMMIT MINERALS CORP.",
  },
  {
    ticker: "AURX",
    title: "Nuo Therapeutics, Inc.",
  },
  {
    ticker: "AMIH",
    title: "AMERICAN INTERNATIONAL HOLDINGS CORP.",
  },
  {
    ticker: "BCCEF",
    title: "BacTech Environmental Corp",
  },
  {
    ticker: "ALLR",
    title: "Allarity Therapeutics, Inc.",
  },
  {
    ticker: "QSEP",
    title: "QS Energy, Inc.",
  },
  {
    ticker: "SINT",
    title: "Sintx Technologies, Inc.",
  },
  {
    ticker: "MLFB",
    title: "MAJOR LEAGUE FOOTBALL INC",
  },
  {
    ticker: "LMRMF",
    title: "Lomiko Metals Inc.",
  },
  {
    ticker: "BVTEF",
    title: "ICONIC MINERALS LTD.",
  },
  {
    ticker: "QWTR",
    title: "Quest Water Global, Inc.",
  },
  {
    ticker: "TOFB",
    title: "TOFUTTI BRANDS INC",
  },
  {
    ticker: "CPHI",
    title: "CHINA PHARMA HOLDINGS, INC.",
  },
  {
    ticker: "MLCT",
    title: "MALACHITE INNOVATIONS, INC.",
  },
  {
    ticker: "AIAD",
    title: "AiAdvertising, Inc.",
  },
  {
    ticker: "NBRV",
    title: "Nabriva Therapeutics plc",
  },
  {
    ticker: "IINN",
    title: "Inspira Technologies OXY B.H.N. Ltd",
  },
  {
    ticker: "XBIO",
    title: "Xenetic Biosciences, Inc.",
  },
  {
    ticker: "KENS",
    title: "KENILWORTH SYSTEMS CORP",
  },
  {
    ticker: "CGOLF",
    title: "Contact Gold Corp.",
  },
  {
    ticker: "USDR",
    title: "UAS Drone Corp.",
  },
  {
    ticker: "HYBT",
    title: "Heyu Biological Technology Corp",
  },
  {
    ticker: "LIXT",
    title: "LIXTE BIOTECHNOLOGY HOLDINGS, INC.",
  },
  {
    ticker: "PRFX",
    title: "PAINREFORM LTD.",
  },
  {
    ticker: "LUVU",
    title: "Luvu Brands, Inc.",
  },
  {
    ticker: "DSGT",
    title: "DSG Global Inc.",
  },
  {
    ticker: "AVCRF",
    title: "Avricore Health Inc.",
  },
  {
    ticker: "WISA",
    title: "WISA TECHNOLOGIES, INC.",
  },
  {
    ticker: "NRIS",
    title: "Norris Industries, Inc.",
  },
  {
    ticker: "RSLS",
    title: "ReShape Lifesciences Inc.",
  },
  {
    ticker: "NXGL",
    title: "NEXGEL, INC.",
  },
  {
    ticker: "HOTH",
    title: "Hoth Therapeutics, Inc.",
  },
  {
    ticker: "PBLA",
    title: "Panbela Therapeutics, Inc.",
  },
  {
    ticker: "SRSG",
    title: "SPIRITS TIME INTERNATIONAL, INC.",
  },
  {
    ticker: "GSPE",
    title: "GULFSLOPE ENERGY, INC.",
  },
  {
    ticker: "FGF",
    title: "FG Financial Group, Inc.",
  },
  {
    ticker: "MOBQ",
    title: "Mobiquity Technologies, Inc.",
  },
  {
    ticker: "SNPW",
    title: "Sun Pacific Holding Corp.",
  },
  {
    ticker: "BEAT",
    title: "HeartBeam, Inc.",
  },
  {
    ticker: "GBS",
    title: "GBS Inc.",
  },
  {
    ticker: "PKTX",
    title: "ProtoKinetix, Inc.",
  },
  {
    ticker: "CRVW",
    title: "CareView Communications Inc",
  },
  {
    ticker: "LMFA",
    title: "LM FUNDING AMERICA, INC.",
  },
  {
    ticker: "DXF",
    title: "Dunxin Financial Holdings Ltd",
  },
  {
    ticker: "WDLF",
    title: "Social Life Network, Inc.",
  },
  {
    ticker: "SQL",
    title: "SeqLL, Inc.",
  },
  {
    ticker: "NDRA",
    title: "ENDRA Life Sciences Inc.",
  },
  {
    ticker: "OLB",
    title: "OLB GROUP, INC.",
  },
  {
    ticker: "SLRX",
    title: "Salarius Pharmaceuticals, Inc.",
  },
  {
    ticker: "MMMM",
    title: "Quad M Solutions, Inc.",
  },
  {
    ticker: "SHVLF",
    title: "STARCORE INTERNATIONAL MINES LTD.",
  },
  {
    ticker: "EJH",
    title: "E-Home Household Service Holdings Ltd",
  },
  {
    ticker: "GFAI",
    title: "Guardforce AI Co., Ltd.",
  },
  {
    ticker: "DRUG",
    title: "BRIGHT MINDS BIOSCIENCES INC.",
  },
  {
    ticker: "PHIO",
    title: "Phio Pharmaceuticals Corp.",
  },
  {
    ticker: "KBNT",
    title: "Kubient, Inc.",
  },
  {
    ticker: "QHYG",
    title: "QHY GROUP",
  },
  {
    ticker: "AVNI",
    title: "ARVANA INC",
  },
  {
    ticker: "CLXT",
    title: "Calyxt, Inc.",
  },
  {
    ticker: "CSJT",
    title: "Changsheng International Group Ltd",
  },
  {
    ticker: "AMST",
    title: "Amesite Inc.",
  },
  {
    ticker: "CUEN",
    title: "Cuentas Inc.",
  },
  {
    ticker: "LIQT",
    title: "LIQTECH INTERNATIONAL INC",
  },
  {
    ticker: "ARAT",
    title: "Arax Holdings Corp",
  },
  {
    ticker: "RSCF",
    title: "REFLECT SCIENTIFIC INC",
  },
  {
    ticker: "SIGY",
    title: "Sigyn Therapeutics, Inc.",
  },
  {
    ticker: "RDGA",
    title: "RIDGEFIELD ACQUISITION CORP",
  },
  {
    ticker: "SVFD",
    title: "Save Foods Inc.",
  },
  {
    ticker: "TCNT",
    title: "TOUCAN INTERACTIVE CORP",
  },
  {
    ticker: "GRIL",
    title: "Muscle Maker, Inc.",
  },
  {
    ticker: "CRXT",
    title: "Clarus Therapeutics Holdings, Inc.",
  },
  {
    ticker: "PHCF",
    title: "Puhui Wealth Investment Management Co., Ltd.",
  },
  {
    ticker: "INVO",
    title: "INVO Bioscience, Inc.",
  },
  {
    ticker: "HIHO",
    title: "HIGHWAY HOLDINGS LTD",
  },
  {
    ticker: "SNOA",
    title: "Sonoma Pharmaceuticals, Inc.",
  },
  {
    ticker: "SPCB",
    title: "SuperCom Ltd",
  },
  {
    ticker: "ADXS",
    title: "Advaxis, Inc.",
  },
  {
    ticker: "LNBY",
    title: "Landbay Inc",
  },
  {
    ticker: "GMBL",
    title: "ESPORTS ENTERTAINMENT GROUP, INC.",
  },
  {
    ticker: "MMND",
    title: "MASTERMIND, INC.",
  },
  {
    ticker: "GMVD",
    title: "G Medical Innovations Holdings Ltd.",
  },
  {
    ticker: "LCTC",
    title: "Lifeloc Technologies, Inc",
  },
  {
    ticker: "OBLG",
    title: "Oblong, Inc.",
  },
  {
    ticker: "EZGO",
    title: "EZGO Technologies Ltd.",
  },
  {
    ticker: "FGCO",
    title: "Financial Gravity Companies, Inc.",
  },
  {
    ticker: "STAB",
    title: "Statera Biopharma, Inc.",
  },
  {
    ticker: "LGIQ",
    title: "LOGIQ, INC.",
  },
  {
    ticker: "SLGD",
    title: "Scott's Liquid Gold - Inc.",
  },
  {
    ticker: "PSYBF",
    title: "PSYBIO THERAPEUTICS FINANCING INC.",
  },
  {
    ticker: "ZDPY",
    title: "Zoned Properties, Inc.",
  },
  {
    ticker: "EFSH",
    title: "1847 Holdings LLC",
  },
  {
    ticker: "SONM",
    title: "SONIM TECHNOLOGIES INC",
  },
  {
    ticker: "HBIS",
    title: "Home Bistro, Inc. /NV/",
  },
  {
    ticker: "ABCP",
    title: "AmBase Corp",
  },
  {
    ticker: "BRSF",
    title: "BRAIN SCIENTIFIC INC.",
  },
  {
    ticker: "SKKY",
    title: "Skkynet Cloud Systems, Inc.",
  },
  {
    ticker: "ORMNF",
    title: "OREX MINERALS INC",
  },
  {
    ticker: "PIXY",
    title: "ShiftPixy, Inc.",
  },
  {
    ticker: "WGMCF",
    title: "WINSTON GOLD CORP.",
  },
  {
    ticker: "CLOK",
    title: "CIPHERLOC Corp",
  },
  {
    ticker: "XTLB",
    title: "XTL BIOPHARMACEUTICALS LTD",
  },
  {
    ticker: "HHSE",
    title: "Hannover House, Inc.",
  },
  {
    ticker: "CIIT",
    title: "Tianci International, Inc.",
  },
  {
    ticker: "MCUJF",
    title: "MEDICURE INC",
  },
  {
    ticker: "UUU",
    title: "UNIVERSAL SECURITY INSTRUMENTS INC",
  },
  {
    ticker: "MOHO",
    title: "ECMOHO Ltd",
  },
  {
    ticker: "PSTV",
    title: "PLUS THERAPEUTICS, INC.",
  },
  {
    ticker: "UNQL",
    title: "UNIQUE LOGISTICS INTERNATIONAL INC",
  },
  {
    ticker: "GPFT",
    title: "Grapefruit USA, Inc",
  },
  {
    ticker: "CRTG",
    title: "CORETEC GROUP INC.",
  },
  {
    ticker: "AMBO",
    title: "Ambow Education Holding Ltd.",
  },
  {
    ticker: "MKGP",
    title: "Maverick Energy Group, Ltd.",
  },
  {
    ticker: "TRCK",
    title: "Track Group, Inc.",
  },
  {
    ticker: "NMEX",
    title: "NORTHERN MINERALS & EXPLORATION LTD.",
  },
  {
    ticker: "HTGM",
    title: "HTG MOLECULAR DIAGNOSTICS, INC",
  },
  {
    ticker: "EXNN",
    title: "EXENT CORP.",
  },
  {
    ticker: "ZZLL",
    title: "ZZLL INFORMATION TECHNOLOGY, INC",
  },
  {
    ticker: "NXMR",
    title: "NextMart Inc.",
  },
  {
    ticker: "SSCR",
    title: "SMSA CRANE ACQUISITION CORP.",
  },
  {
    ticker: "TENX",
    title: "TENAX THERAPEUTICS, INC.",
  },
  {
    ticker: "SITS",
    title: "SOUTHERN ITS INTERNATIONAL, INC.",
  },
  {
    ticker: "RSTN",
    title: "RDE, Inc.",
  },
  {
    ticker: "RWRDP",
    title: "iConsumer Corp.",
  },
  {
    ticker: "CFIC",
    title: "Cornerstone Financial Corp",
  },
  {
    ticker: "HPTO",
    title: "hopTo Inc.",
  },
  {
    ticker: "CLEU",
    title: "China Liberal Education Holdings Ltd",
  },
  {
    ticker: "INTV",
    title: "INTEGRATED VENTURES, INC.",
  },
  {
    ticker: "MJHI",
    title: "MJ Harvest, Inc.",
  },
  {
    ticker: "NLSP",
    title: "NLS Pharmaceutics Ltd.",
  },
  {
    ticker: "TIGCF",
    title: "Triumph Gold Corp.",
  },
  {
    ticker: "FALC",
    title: "FALCONSTOR SOFTWARE INC",
  },
  {
    ticker: "MICR",
    title: "MICRON SOLUTIONS INC /DE/",
  },
  {
    ticker: "EVGDF",
    title: "ELEVATION GOLD MINING Corp",
  },
  {
    ticker: "RELV",
    title: "RELIV INTERNATIONAL INC",
  },
  {
    ticker: "SNAX",
    title: "STRYVE FOODS, INC.",
  },
  {
    ticker: "MSGM",
    title: "Motorsport Games Inc.",
  },
  {
    ticker: "FRTG",
    title: "FRONTERA GROUP INC.",
  },
  {
    ticker: "SNTG",
    title: "Sentage Holdings Inc.",
  },
  {
    ticker: "MNRLF",
    title: "MINERAL MOUNTAIN RESOURCES LTD.",
  },
  {
    ticker: "QZMRF",
    title: "QUARTZ MOUNTAIN RESOURCES LTD",
  },
  {
    ticker: "AUNFF",
    title: "Aurcana Silver Corp",
  },
  {
    ticker: "BNTC",
    title: "Benitec Biopharma Inc.",
  },
  {
    ticker: "EFOI",
    title: "ENERGY FOCUS, INC/DE",
  },
  {
    ticker: "TSSI",
    title: "TSS, Inc.",
  },
  {
    ticker: "OGAA",
    title: "Organic Agricultural Co Ltd",
  },
  {
    ticker: "ACHN",
    title: "Achison Inc",
  },
  {
    ticker: "GBR",
    title: "New Concept Energy, Inc.",
  },
  {
    ticker: "FMNJ",
    title: "Franklin Mining, Inc.",
  },
  {
    ticker: "TPIA",
    title: "Mycotopia Therapies, Inc.",
  },
  {
    ticker: "CNSP",
    title: "CNS Pharmaceuticals, Inc.",
  },
  {
    ticker: "EQMEF",
    title: "Equity Metals Corp",
  },
  {
    ticker: "JAN",
    title: "JanOne Inc.",
  },
  {
    ticker: "TIKK",
    title: "TEL INSTRUMENT ELECTRONICS CORP",
  },
  {
    ticker: "AXIM",
    title: "AXIM BIOTECHNOLOGIES, INC.",
  },
  {
    ticker: "CREX",
    title: "CREATIVE REALITIES, INC.",
  },
  {
    ticker: "DUSYF",
    title: "DUESENBERG TECHNOLOGIES INC.",
  },
  {
    ticker: "FLWPF",
    title: "Flowr Corp",
  },
  {
    ticker: "ENMI",
    title: "DH ENCHANTMENT, INC.",
  },
  {
    ticker: "PCTL",
    title: "PCT LTD",
  },
  {
    ticker: "MTP",
    title: "Midatech Pharma Plc",
  },
  {
    ticker: "DPDW",
    title: "Deep Down, Inc.",
  },
  {
    ticker: "CYTO",
    title: "Altamira Therapeutics Ltd.",
  },
  {
    ticker: "WORX",
    title: "SCWorx Corp.",
  },
  {
    ticker: "ALDS",
    title: "APPlife Digital Solutions Inc",
  },
  {
    ticker: "SSY",
    title: "SUNLINK HEALTH SYSTEMS INC",
  },
  {
    ticker: "COSM",
    title: "Cosmos Holdings Inc.",
  },
  {
    ticker: "SVBL",
    title: "SILVER BULL RESOURCES, INC.",
  },
  {
    ticker: "PMEDF",
    title: "Predictmedix Inc.",
  },
  {
    ticker: "ADXN",
    title: "Addex Therapeutics Ltd.",
  },
  {
    ticker: "GBLX",
    title: "GB SCIENCES INC",
  },
  {
    ticker: "NVDEF",
    title: "NEVADA EXPLORATION INC",
  },
  {
    ticker: "VEII",
    title: "Value Exchange International, Inc.",
  },
  {
    ticker: "HAPP",
    title: "Happiness Development Group Ltd",
  },
  {
    ticker: "SNES",
    title: "SenesTech, Inc.",
  },
  {
    ticker: "VIVE",
    title: "VIVEVE MEDICAL, INC.",
  },
  {
    ticker: "EXEO",
    title: "Exeo Entertainment, Inc.",
  },
  {
    ticker: "GTHP",
    title: "GUIDED THERAPEUTICS INC",
  },
  {
    ticker: "ENVB",
    title: "Enveric Biosciences, Inc.",
  },
  {
    ticker: "FXBY",
    title: "FOXBY CORP.",
  },
  {
    ticker: "INM",
    title: "InMed Pharmaceuticals Inc.",
  },
  {
    ticker: "BABB",
    title: "BAB, INC.",
  },
  {
    ticker: "CAPC",
    title: "CAPSTONE COMPANIES, INC.",
  },
  {
    ticker: "BQST",
    title: "Bioquest Corp",
  },
  {
    ticker: "NPHC",
    title: "NUTRA PHARMA CORP",
  },
  {
    ticker: "GZIC",
    title: "GZ6G Technologies Corp.",
  },
  {
    ticker: "IVDN",
    title: "INNOVATIVE DESIGNS INC",
  },
  {
    ticker: "FDIT",
    title: "FINDIT, INC.",
  },
  {
    ticker: "EARI",
    title: "ENTERTAINMENT ARTS RESEARCH, INC.",
  },
  {
    ticker: "RYTTF",
    title: "Royalty North Partners Ltd.",
  },
  {
    ticker: "ENRT",
    title: "Enertopia Corp.",
  },
  {
    ticker: "ECIA",
    title: "ENCISION INC",
  },
  {
    ticker: "AHPI",
    title: "ALLIED HEALTHCARE PRODUCTS INC",
  },
  {
    ticker: "IFNY",
    title: "AMERICAN NOBLE GAS, INC.",
  },
  {
    ticker: "SPYR",
    title: "SPYR, Inc.",
  },
  {
    ticker: "CWRK",
    title: "CurrencyWorks Inc.",
  },
  {
    ticker: "FDMSF",
    title: "FANDOM SPORTS MEDIA CORP.",
  },
  {
    ticker: "KEYR",
    title: "KeyStar Corp.",
  },
  {
    ticker: "MILC",
    title: "Millennium Sustainable Ventures Corp.",
  },
  {
    ticker: "YEWB",
    title: "Yew Bio-Pharm Group, Inc.",
  },
  {
    ticker: "PTCO",
    title: "PetroGas Co",
  },
  {
    ticker: "AEHL",
    title: "Antelope Enterprise Holdings Ltd",
  },
  {
    ticker: "NUWE",
    title: "Nuwellis, Inc.",
  },
  {
    ticker: "ALXEF",
    title: "ALX RESOURCES CORP.",
  },
  {
    ticker: "HGYN",
    title: "HONG YUAN HOLDING GROUP",
  },
  {
    ticker: "VS",
    title: "Versus Systems Inc.",
  },
  {
    ticker: "AMMX",
    title: "Ameramex International Inc",
  },
  {
    ticker: "CLWT",
    title: "EURO TECH HOLDINGS CO LTD",
  },
  {
    ticker: "TPPM",
    title: "Yotta Global, Inc.",
  },
  {
    ticker: "FNHC",
    title: "FedNat Holding Co",
  },
  {
    ticker: "GRUSF",
    title: "Grown Rogue International Inc.",
  },
  {
    ticker: "ARAO",
    title: "AuraSource, Inc.",
  },
  {
    ticker: "BSPK",
    title: "Bespoke Extracts, Inc.",
  },
  {
    ticker: "VINO",
    title: "Gaucho Group Holdings, Inc.",
  },
  {
    ticker: "FCIC",
    title: "FCCC INC",
  },
  {
    ticker: "KGKG",
    title: "KONA GOLD BEVERAGE, INC.",
  },
  {
    ticker: "KRBP",
    title: "Kiromic Biopharma, Inc.",
  },
  {
    ticker: "SMGI",
    title: "SMG Industries Inc.",
  },
  {
    ticker: "FULO",
    title: "FULLNET COMMUNICATIONS INC",
  },
  {
    ticker: "SHRG",
    title: "SHARING SERVICES GLOBAL Corp",
  },
  {
    ticker: "GDSI",
    title: "GLOBAL DIGITAL SOLUTIONS INC",
  },
  {
    ticker: "SODE",
    title: "SOCIAL DETENTION INC.",
  },
  {
    ticker: "COEP",
    title: "Coeptis Therapeutics Inc.",
  },
  {
    ticker: "TEGY",
    title: "TRANSACT ENERGY CORP",
  },
  {
    ticker: "MSLP",
    title: "MusclePharm Corp",
  },
  {
    ticker: "JUPGF",
    title: "Jupiter Gold Corp",
  },
  {
    ticker: "YVR",
    title: "Liquid Media Group Ltd.",
  },
  {
    ticker: "FRTM",
    title: "Fortium Holdings Corp.",
  },
  {
    ticker: "GPOX",
    title: "GPO Plus, Inc.",
  },
  {
    ticker: "MFH",
    title: "Mercurity Fintech Holding Inc.",
  },
  {
    ticker: "NCRE",
    title: "Colambda Technologies, Inc.",
  },
  {
    ticker: "TDCB",
    title: "THIRD CENTURY BANCORP",
  },
  {
    ticker: "SYSX",
    title: "Sysorex, Inc.",
  },
  {
    ticker: "BNKL",
    title: "Bionik Laboratories Corp.",
  },
  {
    ticker: "LIVC",
    title: "Live Current Media Inc.",
  },
  {
    ticker: "NTOX",
    title: "NOTOX TECHNOLOGIES CORP.",
  },
  {
    ticker: "GRYN",
    title: "GREEN HYGIENICS HOLDINGS INC.",
  },
  {
    ticker: "CETX",
    title: "CEMTREX INC",
  },
  {
    ticker: "ADTX",
    title: "Aditxt, Inc.",
  },
  {
    ticker: "VYST",
    title: "Vystar Corp",
  },
  {
    ticker: "KPRX",
    title: "KIORA PHARMACEUTICALS INC",
  },
  {
    ticker: "CLOQ",
    title: "CYBERLOQ TECHNOLOGIES, INC.",
  },
  {
    ticker: "RCAR",
    title: "RenovaCare, Inc.",
  },
  {
    ticker: "SYTA",
    title: "Siyata Mobile Inc.",
  },
  {
    ticker: "TOWTF",
    title: "TOWER ONE WIRELESS CORP.",
  },
  {
    ticker: "DSNY",
    title: "DESTINY MEDIA TECHNOLOGIES INC",
  },
  {
    ticker: "SZLSF",
    title: "STAGEZERO LIFE SCIENCES LTD.",
  },
  {
    ticker: "CENBF",
    title: "CEN BIOTECH INC",
  },
  {
    ticker: "GRMC",
    title: "GOLDRICH MINING CO",
  },
  {
    ticker: "UNIR",
    title: "UNIROYAL GLOBAL ENGINEERED PRODUCTS, INC.",
  },
  {
    ticker: "MHTX",
    title: "MANHATTAN SCIENTIFICS INC",
  },
  {
    ticker: "GCFFF",
    title: "GOLDCLIFF RESOURCE CORP",
  },
  {
    ticker: "VIDE",
    title: "VIDEO DISPLAY CORP",
  },
  {
    ticker: "NMLSF",
    title: "Nova Mentis Life Science Corp.",
  },
  {
    ticker: "ALDA",
    title: "ATLANTICA INC",
  },
  {
    ticker: "RNWR",
    title: "808 RENEWABLE ENERGY CORP",
  },
  {
    ticker: "HBUV",
    title: "Hubilu Venture Corp",
  },
  {
    ticker: "KSPN",
    title: "Kaspien Holdings Inc.",
  },
  {
    ticker: "RGMP",
    title: "Regnum Corp.",
  },
  {
    ticker: "SPRC",
    title: "SciSparc Ltd.",
  },
  {
    ticker: "MLRKF",
    title: "Millrock Resources Inc",
  },
  {
    ticker: "TMBXF",
    title: "TOMBSTONE EXPLORATION CORP",
  },
  {
    ticker: "SIXWF",
    title: "SIXTH WAVE INNOVATIONS INC.",
  },
  {
    ticker: "TARSF",
    title: "Alianza Minerals Ltd.",
  },
  {
    ticker: "PALI",
    title: "PALISADE BIO, INC.",
  },
  {
    ticker: "STMH",
    title: "Stem Holdings, Inc.",
  },
  {
    ticker: "ACOR",
    title: "ACORDA THERAPEUTICS INC",
  },
  {
    ticker: "LUXFF",
    title: "Luxxfolio Holdings Inc.",
  },
  {
    ticker: "WECT",
    title: "Motos America, Inc.",
  },
  {
    ticker: "ADMT",
    title: "ADM TRONICS UNLIMITED, INC.",
  },
  {
    ticker: "GFOO",
    title: "Genufood Energy Enzymes Corp.",
  },
  {
    ticker: "STRR",
    title: "STAR EQUITY HOLDINGS, INC.",
  },
  {
    ticker: "QRON",
    title: "Qrons Inc.",
  },
  {
    ticker: "HRBK",
    title: "HARBOR BANKSHARES CORP",
  },
  {
    ticker: "APDN",
    title: "APPLIED DNA SCIENCES INC",
  },
  {
    ticker: "TTNP",
    title: "TITAN PHARMACEUTICALS INC",
  },
  {
    ticker: "ATXI",
    title: "AVENUE THERAPEUTICS, INC.",
  },
  {
    ticker: "LLL",
    title: "JX Luxventure Ltd",
  },
  {
    ticker: "AGTX",
    title: "Agentix Corp.",
  },
  {
    ticker: "MTC",
    title: "MMTec, Inc.",
  },
  {
    ticker: "GOVX",
    title: "GeoVax Labs, Inc.",
  },
  {
    ticker: "BMXI",
    title: "BROOKMOUNT EXPLORATIONS INC",
  },
  {
    ticker: "MYSZ",
    title: "My Size, Inc.",
  },
  {
    ticker: "QNRX",
    title: "Quoin Pharmaceuticals, Ltd.",
  },
  {
    ticker: "UCLE",
    title: "US NUCLEAR CORP.",
  },
  {
    ticker: "VNUE",
    title: "VNUE, Inc.",
  },
  {
    ticker: "IWSH",
    title: "Wright Investors Service Holdings, Inc.",
  },
  {
    ticker: "GEGP",
    title: "GOLD ENTERTAINMENT GROUP INC",
  },
  {
    ticker: "GROM",
    title: "Grom Social Enterprises, Inc.",
  },
  {
    ticker: "AGNPF",
    title: "Algernon Pharmaceuticals Inc.",
  },
  {
    ticker: "HSDT",
    title: "HELIUS MEDICAL TECHNOLOGIES, INC.",
  },
  {
    ticker: "IMCI",
    title: "INFINITE GROUP INC",
  },
  {
    ticker: "WINSF",
    title: "Wins Finance Holdings Inc.",
  },
  {
    ticker: "VISM",
    title: "VISIUM TECHNOLOGIES, INC.",
  },
  {
    ticker: "GNTOF",
    title: "GENTOR RESOURCES INC.",
  },
  {
    ticker: "OILCF",
    title: "Permex Petroleum Corp",
  },
  {
    ticker: "THMG",
    title: "THUNDER MOUNTAIN GOLD INC",
  },
  {
    ticker: "RAHGF",
    title: "Roan Holdings Group Co., Ltd.",
  },
  {
    ticker: "AUTO",
    title: "AutoWeb, Inc.",
  },
  {
    ticker: "ANPC",
    title: "AnPac Bio-Medical Science Co., Ltd.",
  },
  {
    ticker: "IINX",
    title: "IONIX TECHNOLOGY, INC.",
  },
  {
    ticker: "UGHL",
    title: "UNION BRIDGE HOLDINGS LTD.",
  },
  {
    ticker: "NVFY",
    title: "Nova Lifestyle, Inc.",
  },
  {
    ticker: "TNLX",
    title: "TRANS LUX Corp",
  },
  {
    ticker: "FEMFF",
    title: "First Energy Metals Ltd",
  },
  {
    ticker: "RKFL",
    title: "ROCKETFUEL BLOCKCHAIN, INC.",
  },
  {
    ticker: "COWI",
    title: "CoroWare, Inc,",
  },
  {
    ticker: "FWAV",
    title: "FOURTH WAVE ENERGY, INC.",
  },
  {
    ticker: "AMHG",
    title: "Amergent Hospitality Group Inc.",
  },
  {
    ticker: "AXXA",
    title: "Exxe Group, Inc.",
  },
  {
    ticker: "EWLU",
    title: "Merion, Inc.",
  },
  {
    ticker: "BLYQ",
    title: "BALLY, CORP.",
  },
  {
    ticker: "RMHB",
    title: "Rocky Mountain High Brands, Inc.",
  },
  {
    ticker: "TPTW",
    title: "TPT GLOBAL TECH, INC.",
  },
  {
    ticker: "LCLP",
    title: "Life Clips, Inc.",
  },
  {
    ticker: "TKOI",
    title: "TELKONET INC",
  },
  {
    ticker: "CELZ",
    title: "CREATIVE MEDICAL TECHNOLOGY HOLDINGS, INC.",
  },
  {
    ticker: "YBCN",
    title: "Yong Bai Chao New Retail Corp",
  },
  {
    ticker: "OCLN",
    title: "ORIGINCLEAR, INC.",
  },
  {
    ticker: "ACMC",
    title: "AMERICAN CHURCH MORTGAGE CO",
  },
  {
    ticker: "KERN",
    title: "Akerna Corp.",
  },
  {
    ticker: "CBDY",
    title: "Target Group Inc.",
  },
  {
    ticker: "GSIH",
    title: "GENERAL STEEL HOLDINGS INC",
  },
  {
    ticker: "NROM",
    title: "NOBLE ROMANS INC",
  },
  {
    ticker: "UPDC",
    title: "UPD HOLDING CORP.",
  },
  {
    ticker: "SMME",
    title: "SmartMetric, Inc.",
  },
  {
    ticker: "NAHD",
    title: "New Asia Holdings, Inc.",
  },
  {
    ticker: "GEVI",
    title: "General Enterprise Ventures, Inc.",
  },
  {
    ticker: "SNNAF",
    title: "SIENNA RESOURCES INC",
  },
  {
    ticker: "PLRTF",
    title: "Plymouth Rock Technologies Inc.",
  },
  {
    ticker: "LBUY",
    title: "LEAFBUYER TECHNOLOGIES, INC.",
  },
  {
    ticker: "WHSI",
    title: "WEARABLE HEALTH SOLUTIONS, INC.",
  },
  {
    ticker: "SKAS",
    title: "Saker Aviation Services, Inc.",
  },
  {
    ticker: "GTLL",
    title: "GLOBAL TECHNOLOGIES LTD",
  },
  {
    ticker: "IGEN",
    title: "IGEN NETWORKS CORP",
  },
  {
    ticker: "GTVI",
    title: "Joway Health Industries Group Inc",
  },
  {
    ticker: "MGTI",
    title: "MGT CAPITAL INVESTMENTS, INC.",
  },
  {
    ticker: "WEGYF",
    title: "WESTBRIDGE ENERGY CORP.",
  },
  {
    ticker: "VLON",
    title: "Vallon Pharmaceuticals, Inc.",
  },
  {
    ticker: "LEAI",
    title: "Legacy Education Alliance, Inc.",
  },
  {
    ticker: "ROYL",
    title: "Royale Energy, Inc.",
  },
  {
    ticker: "VBHI",
    title: "VERDE BIO HOLDINGS, INC.",
  },
  {
    ticker: "CTIB",
    title: "Yunhong CTI Ltd.",
  },
  {
    ticker: "DRMA",
    title: "Dermata Therapeutics, Inc.",
  },
  {
    ticker: "WCUI",
    title: "Wellness Center USA, Inc.",
  },
  {
    ticker: "RHE",
    title: "REGIONAL HEALTH PROPERTIES, INC",
  },
  {
    ticker: "KITL",
    title: "Kisses From Italy Inc.",
  },
  {
    ticker: "JPOTF",
    title: "Jackpot Digital Inc.",
  },
  {
    ticker: "VYCO",
    title: "VYCOR MEDICAL INC",
  },
  {
    ticker: "KOAN",
    title: "Resonate Blends, Inc.",
  },
  {
    ticker: "SIPN",
    title: "SIPP International Industries, Inc.",
  },
  {
    ticker: "UITA",
    title: "Utilicraft Aerospace Industries, Inc.",
  },
  {
    ticker: "KATX",
    title: "KAT EXPLORATION, INC.",
  },
  {
    ticker: "OP",
    title: "OceanPal Inc.",
  },
  {
    ticker: "MAXD",
    title: "Max Sound Corp",
  },
  {
    ticker: "SIGN",
    title: "SIGNET INTERNATIONAL HOLDINGS, INC.",
  },
  {
    ticker: "FNAM",
    title: "EVOLUTIONARY GENOMICS, INC.",
  },
  {
    ticker: "NXEN",
    title: "NEXIEN BIOPHARMA, INC.",
  },
  {
    ticker: "CVSI",
    title: "CV Sciences, Inc.",
  },
  {
    ticker: "BITTF",
    title: "BITTERROOT RESOURCES LTD",
  },
  {
    ticker: "BWMY",
    title: "BorrowMoney.com, Inc.",
  },
  {
    ticker: "AFDG",
    title: "Earn-A-Car Inc.",
  },
  {
    ticker: "GFTX",
    title: "Global Fiber Technologies, Inc.",
  },
  {
    ticker: "AHNR",
    title: "ATHENA GOLD CORP",
  },
  {
    ticker: "NIHK",
    title: "Video River Networks, Inc.",
  },
  {
    ticker: "CLTS",
    title: "EARTH LIFE SCIENCES INC",
  },
  {
    ticker: "YGYI",
    title: "Youngevity International, Inc.",
  },
  {
    ticker: "VAUCF",
    title: "Viva Gold Corp.",
  },
  {
    ticker: "SING",
    title: "SinglePoint Inc.",
  },
  {
    ticker: "CYTR",
    title: "CYTRX CORP",
  },
  {
    ticker: "BTIM",
    title: "BOATIM INC.",
  },
  {
    ticker: "KDCE",
    title: "KID CASTLE EDUCATIONAL CORP",
  },
  {
    ticker: "TNRG",
    title: "Thunder Energies Corp",
  },
  {
    ticker: "BDREX",
    title: "Broadstone Real Estate Access Fund",
  },
  {
    ticker: "PCYN",
    title: "PROCYON CORP",
  },
  {
    ticker: "WHLT",
    title: "CHASE PACKAGING CORP",
  },
  {
    ticker: "ABCFF",
    title: "ABACUS MINING & EXPLORATION CORP",
  },
  {
    ticker: "CCOB",
    title: "Century Cobalt Corp.",
  },
  {
    ticker: "EWLL",
    title: "eWELLNESS HEALTHCARE Corp",
  },
  {
    ticker: "PCNT",
    title: "Point of Care Nano-Technology, Inc.",
  },
  {
    ticker: "NUGL",
    title: "NUGL, INC.",
  },
  {
    ticker: "NUGS",
    title: "CANNABIS STRATEGIC VENTURES",
  },
  {
    ticker: "CMXC",
    title: "Cell MedX Corp.",
  },
  {
    ticker: "FSSN",
    title: "FISION Corp",
  },
  {
    ticker: "AMTY",
    title: "AMERITYRE CORP",
  },
  {
    ticker: "BFYW",
    title: "Better For You Wellness, Inc.",
  },
  {
    ticker: "RTON",
    title: "Right On Brands, Inc.",
  },
  {
    ticker: "AMCT",
    title: "AMERICAN EDUCATION CENTER, INC.",
  },
  {
    ticker: "TMRR",
    title: "TEMIR CORP.",
  },
  {
    ticker: "BOXS",
    title: "BOXSCORE BRANDS, INC.",
  },
  {
    ticker: "LBSR",
    title: "LIBERTY STAR URANIUM & METALS CORP.",
  },
  {
    ticker: "QPRC",
    title: "QUEST PATENT RESEARCH CORP",
  },
  {
    ticker: "FOMC",
    title: "FOMO CORP.",
  },
  {
    ticker: "CBNT",
    title: "C-Bond Systems, Inc",
  },
  {
    ticker: "STCC",
    title: "STERLING CONSOLIDATED Corp",
  },
  {
    ticker: "DREM",
    title: "Dream Homes & Development Corp.",
  },
  {
    ticker: "BMCS",
    title: "BMCS SUMCOIN INDEX FUND, INC.",
  },
  {
    ticker: "RIII",
    title: "RENAVOTIO, INC.",
  },
  {
    ticker: "FLXT",
    title: "FLEXPOINT SENSOR SYSTEMS INC",
  },
  {
    ticker: "GHSI",
    title: "Guardion Health Sciences, Inc.",
  },
  {
    ticker: "PHBI",
    title: "Pharmagreen Biotech Inc.",
  },
  {
    ticker: "FDCT",
    title: "FDCTECH, INC.",
  },
  {
    ticker: "FWBI",
    title: "First Wave BioPharma, Inc.",
  },
  {
    ticker: "GRHI",
    title: "GOLD ROCK HOLDINGS, INC.",
  },
  {
    ticker: "GSBX",
    title: "Golden State Bancorp",
  },
  {
    ticker: "IGPK",
    title: "Integrated Cannabis Solutions, Inc.",
  },
  {
    ticker: "FECOF",
    title: "FEC Resources Inc.",
  },
  {
    ticker: "GMER",
    title: "GOOD GAMING, INC.",
  },
  {
    ticker: "HCYT",
    title: "H-CYTE, INC.",
  },
  {
    ticker: "SPIN",
    title: "Bitech Technologies Corp",
  },
  {
    ticker: "AMMJ",
    title: "American Cannabis Company, Inc.",
  },
  {
    ticker: "FLCX",
    title: "flooidCX Corp.",
  },
  {
    ticker: "REOS",
    title: "ReoStar Energy CORP",
  },
  {
    ticker: "CTDT",
    title: "CENTAURUS DIAMOND TECHNOLOGIES, INC.",
  },
  {
    ticker: "VYND",
    title: "Vynleads, Inc.",
  },
  {
    ticker: "CBDS",
    title: "Cannabis Sativa, Inc.",
  },
  {
    ticker: "NNAX",
    title: "New Momentum Corp.",
  },
  {
    ticker: "IWSY",
    title: "IMAGEWARE SYSTEMS INC",
  },
  {
    ticker: "GRLF",
    title: "GREEN LEAF INNOVATIONS INC",
  },
  {
    ticker: "CSLI",
    title: "Critical Solutions, Inc.",
  },
  {
    ticker: "CMGO",
    title: "CMG HOLDINGS GROUP, INC.",
  },
  {
    ticker: "QURT",
    title: "Quarta-Rad, Inc.",
  },
  {
    ticker: "PSHG",
    title: "Performance Shipping Inc.",
  },
  {
    ticker: "INKW",
    title: "Greene Concepts, Inc",
  },
  {
    ticker: "DBRM",
    title: "DAYBREAK OIL & GAS, INC.",
  },
  {
    ticker: "GIGA",
    title: "GIGA TRONICS INC",
  },
  {
    ticker: "SUWN",
    title: "SUNWIN STEVIA INTERNATIONAL, INC.",
  },
  {
    ticker: "LTGJ",
    title: "Xiamen Lutong International Travel Agency Co., Ltd.",
  },
  {
    ticker: "USAQ",
    title: "QHSLab, Inc.",
  },
  {
    ticker: "DXIEF",
    title: "DXI Energy Inc.",
  },
  {
    ticker: "TTCM",
    title: "TAUTACHROME INC.",
  },
  {
    ticker: "ISCO",
    title: "International Stem Cell CORP",
  },
  {
    ticker: "NGLD",
    title: "Nevada Canyon Gold Corp.",
  },
  {
    ticker: "GWTI",
    title: "GREENWAY TECHNOLOGIES INC",
  },
  {
    ticker: "RNVA",
    title: "Rennova Health, Inc.",
  },
  {
    ticker: "MTPP",
    title: "MOUNTAIN TOP PROPERTIES, INC.",
  },
  {
    ticker: "URYL",
    title: "TrueNorth Quantum Inc.",
  },
  {
    ticker: "STRG",
    title: "STARGUIDE GROUP, INC.",
  },
  {
    ticker: "THMO",
    title: "ThermoGenesis Holdings, Inc.",
  },
  {
    ticker: "RMESF",
    title: "RED METAL RESOURCES, LTD.",
  },
  {
    ticker: "GNOLF",
    title: "GENOIL INC",
  },
  {
    ticker: "PLSH",
    title: "PANACEA LIFE SCIENCES HOLDINGS, INC.",
  },
  {
    ticker: "FIFG",
    title: "First Foods Group, Inc.",
  },
  {
    ticker: "CADMF",
    title: "Chemesis International Inc.",
  },
  {
    ticker: "PTNYF",
    title: "ParcelPal Logistics Inc.",
  },
  {
    ticker: "MLMN",
    title: "Millennium Prime, Inc.",
  },
  {
    ticker: "SGMD",
    title: "Sugarmade, Inc.",
  },
  {
    ticker: "ZYJT",
    title: "Zhong Ya International Ltd",
  },
  {
    ticker: "XSNX",
    title: "NovAccess Global Inc.",
  },
  {
    ticker: "ASFT",
    title: "Appsoft Technologies, Inc.",
  },
  {
    ticker: "WEWA",
    title: "WEWARDS, INC.",
  },
  {
    ticker: "SDON",
    title: "SANDSTON CORP",
  },
  {
    ticker: "IPCIF",
    title: "Intellipharmaceutics International Inc.",
  },
  {
    ticker: "USRM",
    title: "U.S. Stem Cell, Inc.",
  },
  {
    ticker: "MCOA",
    title: "Marijuana Co of America, Inc.",
  },
  {
    ticker: "BZYR",
    title: "BURZYNSKI RESEARCH INSTITUTE INC",
  },
  {
    ticker: "USBL",
    title: "UNITED STATES BASKETBALL LEAGUE INC",
  },
  {
    ticker: "REPCF",
    title: "REPLICEL LIFE SCIENCES INC.",
  },
  {
    ticker: "DBGI",
    title: "Digital Brands Group, Inc.",
  },
  {
    ticker: "HENC",
    title: "Hero Technologies Inc.",
  },
  {
    ticker: "HITC",
    title: "Healthcare Integrated Technologies Inc.",
  },
  {
    ticker: "UMHL",
    title: "Umatrin Holding Ltd",
  },
  {
    ticker: "FORZ",
    title: "Forza Innovations Inc",
  },
  {
    ticker: "IONI",
    title: "I-ON Digital Corp.",
  },
  {
    ticker: "JKSM",
    title: "Jacksam Corp",
  },
  {
    ticker: "GSTC",
    title: "GlobeStar Therapeutics Corp",
  },
  {
    ticker: "JRVS",
    title: "iMine Corp",
  },
  {
    ticker: "GLUC",
    title: "Glucose Health, Inc.",
  },
  {
    ticker: "SHNL",
    title: "WEDOTALK INC.",
  },
  {
    ticker: "RAKR",
    title: "Rainmaker Worldwide Inc.",
  },
  {
    ticker: "NMGX",
    title: "Nano Magic Holdings Inc.",
  },
  {
    ticker: "TCCO",
    title: "TECHNICAL COMMUNICATIONS CORP",
  },
  {
    ticker: "BGAVF",
    title: "Bravada Gold Corp",
  },
  {
    ticker: "OPVS",
    title: "NanoFlex Power Corp",
  },
  {
    ticker: "PSSR",
    title: "PASSUR Aerospace, Inc.",
  },
  {
    ticker: "FSTJ",
    title: "First America Resources Corp",
  },
  {
    ticker: "OXBC",
    title: "Oxford Bank Corp",
  },
  {
    ticker: "SILS",
    title: "SILVER SCOTT MINES INC",
  },
  {
    ticker: "VPRB",
    title: "VPR Brands, LP.",
  },
  {
    ticker: "RETC",
    title: "12 Retech Corp",
  },
  {
    ticker: "DLYT",
    title: "DAIS Corp",
  },
  {
    ticker: "AASP",
    title: "GLOBAL ACQUISITIONS Corp",
  },
  {
    ticker: "FCTI",
    title: "FACT, Inc.",
  },
  {
    ticker: "NSPDF",
    title: "NATURALLY SPLENDID ENTERPRISES LTD.",
  },
  {
    ticker: "ATYG",
    title: "Atlas Technology Group, Inc.",
  },
  {
    ticker: "ECGI",
    title: "ECGI Holdings, Inc.",
  },
  {
    ticker: "SNBH",
    title: "SENTIENT BRANDS HOLDINGS INC.",
  },
  {
    ticker: "WDDD",
    title: "WORLDS INC",
  },
  {
    ticker: "QSMG",
    title: "Pedro's List, Inc.",
  },
  {
    ticker: "NAUH",
    title: "National American University Holdings, Inc.",
  },
  {
    ticker: "ZICX",
    title: "Zicix Corp",
  },
  {
    ticker: "PGOL",
    title: "PATRIOT GOLD CORP",
  },
  {
    ticker: "NDTP",
    title: "MISTRAL VENTURES INC",
  },
  {
    ticker: "CMDRF",
    title: "COMMANDER RESOURCES LTD",
  },
  {
    ticker: "BYOC",
    title: "Beyond Commerce, Inc.",
  },
  {
    ticker: "ETCK",
    title: "ENERTECK CORP",
  },
  {
    ticker: "RMED",
    title: "Ra Medical Systems, Inc.",
  },
  {
    ticker: "XDSL",
    title: "MPHASE TECHNOLOGIES, INC.",
  },
  {
    ticker: "SRCO",
    title: "SPARTA COMMERCIAL SERVICES, INC.",
  },
  {
    ticker: "HADV",
    title: "HEALTH ADVANCE INC.",
  },
  {
    ticker: "NOVC",
    title: "NOVATION COMPANIES, INC.",
  },
  {
    ticker: "DIGAF",
    title: "Digatrade Financial Corp",
  },
  {
    ticker: "PLYN",
    title: "Palayan Resources, Inc.",
  },
  {
    ticker: "SGBI",
    title: "SANGUI BIOTECH INTERNATIONAL INC",
  },
  {
    ticker: "MRGE",
    title: "Mirage Energy Corp",
  },
  {
    ticker: "GRST",
    title: "ETHEMA HEALTH Corp",
  },
  {
    ticker: "MOJO",
    title: "MOJO Organics, Inc.",
  },
  {
    ticker: "LVCA",
    title: "Victoria Lake, Inc.",
  },
  {
    ticker: "ITDN",
    title: "INTERDYNE CO",
  },
  {
    ticker: "PAXH",
    title: "PREAXIA HEALTH CARE PAYMENT SYSTEMS INC.",
  },
  {
    ticker: "SRMX",
    title: "SADDLE RANCH MEDIA, INC.",
  },
  {
    ticker: "NIMU",
    title: "NON INVASIVE MONITORING SYSTEMS INC /FL/",
  },
  {
    ticker: "JSHG",
    title: "JOSHUA GOLD RESOURCES INC",
  },
  {
    ticker: "CCTC",
    title: "Clean Coal Technologies Inc.",
  },
  {
    ticker: "SRGZ",
    title: "Star Gold Corp.",
  },
  {
    ticker: "ABWN",
    title: "AIRBORNE WIRELESS NETWORK",
  },
  {
    ticker: "CYNXF",
    title: "Cyon Exploration Ltd.",
  },
  {
    ticker: "ICCO",
    title: "INTERCARE DX INC",
  },
  {
    ticker: "LSMG",
    title: "Lode-Star Mining Inc.",
  },
  {
    ticker: "MFCO",
    title: "MICROWAVE FILTER CO INC /NY/",
  },
  {
    ticker: "EFIR",
    title: "EGPI FIRECREEK, INC.",
  },
  {
    ticker: "QDMI",
    title: "QDM International Inc.",
  },
  {
    ticker: "DVLP",
    title: "Golden Developing Solutions, Inc.",
  },
  {
    ticker: "GTXO",
    title: "GTX CORP",
  },
  {
    ticker: "LAAB",
    title: "Startech Labs, Inc.",
  },
  {
    ticker: "STUPF",
    title: "Straightup Resources Inc",
  },
  {
    ticker: "SGNI",
    title: "StemGen, Inc.",
  },
  {
    ticker: "CRKR",
    title: "Creek Road Miners, Inc.",
  },
  {
    ticker: "PRPS",
    title: "Propellus, Inc.",
  },
  {
    ticker: "CPMD",
    title: "CANNAPHARMARX, INC.",
  },
  {
    ticker: "NPTX",
    title: "NEUROPATHIX, INC.",
  },
  {
    ticker: "DPWW",
    title: "DIEGO PELLICER WORLDWIDE, INC",
  },
  {
    ticker: "MAGE",
    title: "MAGELLAN GOLD Corp",
  },
  {
    ticker: "CPWR",
    title: "Ocean Thermal Energy Corp",
  },
  {
    ticker: "EMAX",
    title: "Ecomax, Inc",
  },
  {
    ticker: "RGIN",
    title: "Regenicin, Inc.",
  },
  {
    ticker: "BXXY",
    title: "Boxxy Inc.",
  },
  {
    ticker: "BNVIF",
    title: "Binovi Technologies Corp.",
  },
  {
    ticker: "REBL",
    title: "Rebel Group, Inc.",
  },
  {
    ticker: "BRVO",
    title: "Bravo Multinational Inc.",
  },
  {
    ticker: "ASDN",
    title: "Astro Aerospace Ltd.",
  },
  {
    ticker: "WSCO",
    title: "Wall Street Media Co, Inc.",
  },
  {
    ticker: "CWNOF",
    title: "CHINESEWORLDNET COM INC",
  },
  {
    ticker: "TAUG",
    title: "TAURIGA SCIENCES, INC.",
  },
  {
    ticker: "MMEX",
    title: "MMEX Resources Corp",
  },
  {
    ticker: "IRCC",
    title: "Indigenous Roots Corp.",
  },
  {
    ticker: "ATDS",
    title: "Data443 Risk Mitigation, Inc.",
  },
  {
    ticker: "PTZH",
    title: "Photozou Holdings, Inc.",
  },
  {
    ticker: "TRXO",
    title: "T-REX OIL, INC.",
  },
  {
    ticker: "IVST",
    title: "Innovest Global, Inc.",
  },
  {
    ticker: "ABILF",
    title: "Ability Inc.",
  },
  {
    ticker: "LGYV",
    title: "LEGACY VENTURES INTERNATIONAL INC.",
  },
  {
    ticker: "RENO",
    title: "RENOVARE ENVIRONMENTAL, INC.",
  },
  {
    ticker: "CZNI",
    title: "Cruzani, Inc.",
  },
  {
    ticker: "VRTC",
    title: "VERITEC INC",
  },
  {
    ticker: "ANDR",
    title: "ANDREA ELECTRONICS CORP",
  },
  {
    ticker: "NTPY",
    title: "NetPay International Inc",
  },
  {
    ticker: "GDMK",
    title: "Global Diversified Marketing Group Inc.",
  },
  {
    ticker: "TRLFF",
    title: "Maven Brands Inc.",
  },
  {
    ticker: "GBUX",
    title: "GIVBUX, INC.",
  },
  {
    ticker: "FRZT",
    title: "Freeze Tag, Inc.",
  },
  {
    ticker: "PMPG",
    title: "Premier Product Group, Inc.",
  },
  {
    ticker: "NVGT",
    title: "NOVAGANT CORP",
  },
  {
    ticker: "ELRE",
    title: "Yinfu Gold Corp.",
  },
  {
    ticker: "ITOX",
    title: "IIOT-OXYS, Inc.",
  },
  {
    ticker: "HALB",
    title: "Halberd Corp",
  },
  {
    ticker: "AVOI",
    title: "Advanced Voice Recognition Systems, Inc",
  },
  {
    ticker: "PUGE",
    title: "PUGET TECHNOLOGIES, INC.",
  },
  {
    ticker: "AMSU",
    title: "AMANASU ENVIRONMENT CORP",
  },
  {
    ticker: "USNU",
    title: "U.S. NeuroSurgical Holdings, Inc.",
  },
  {
    ticker: "NFEI",
    title: "NEW FRONTIER ENERGY INC",
  },
  {
    ticker: "KALO",
    title: "Kallo Inc.",
  },
  {
    ticker: "ELST",
    title: "ELECTRONIC SYSTEMS TECHNOLOGY INC",
  },
  {
    ticker: "NUMD",
    title: "Nu-Med Plus, Inc.",
  },
  {
    ticker: "EMED",
    title: "Electromedical Technologies, Inc",
  },
  {
    ticker: "GXXM",
    title: "GEX MANAGEMENT, INC.",
  },
  {
    ticker: "DUUO",
    title: "DUO WORLD INC",
  },
  {
    ticker: "ALYE",
    title: "Aly Energy Services, Inc.",
  },
  {
    ticker: "QBIO",
    title: "Q BioMed Inc.",
  },
  {
    ticker: "LGMH",
    title: "Light Media Holdings, Inc.",
  },
  {
    ticker: "BOTY",
    title: "LINGERIE FIGHTING CHAMPIONSHIPS, INC.",
  },
  {
    ticker: "QTGI",
    title: "QUARK TECHNOLOGY GLOBAL INC.",
  },
  {
    ticker: "JRSS",
    title: "JRSIS HEALTH CARE Corp",
  },
  {
    ticker: "VRSCF",
    title: "VALTERRA RESOURCE CORP",
  },
  {
    ticker: "ABQQ",
    title: "AB INTERNATIONAL GROUP CORP.",
  },
  {
    ticker: "VFRM",
    title: "Veritas Farms, Inc.",
  },
  {
    ticker: "MTLK",
    title: "METALINK LTD",
  },
  {
    ticker: "GSAC",
    title: "GELSTAT CORP",
  },
  {
    ticker: "MMMW",
    title: "MASS MEGAWATTS WIND POWER INC",
  },
  {
    ticker: "RDAR",
    title: "RAADR, INC.",
  },
  {
    ticker: "ETST",
    title: "Earth Science Tech, Inc.",
  },
  {
    ticker: "PURT",
    title: "Purthanol Resources Ltd",
  },
  {
    ticker: "NTRR",
    title: "NEUTRA CORP.",
  },
  {
    ticker: "BLPG",
    title: "Blue Line Protection Group, Inc.",
  },
  {
    ticker: "SSET",
    title: "STARSTREAM ENTERTAINMENT, INC.",
  },
  {
    ticker: "FERL",
    title: "FEARLESS FILMS, INC.",
  },
  {
    ticker: "GAHC",
    title: "Global Arena Holding, Inc.",
  },
  {
    ticker: "BONZ",
    title: "Bonanza Goldfields Corp.",
  },
  {
    ticker: "SVSN",
    title: "STEREO VISION ENTERTAINMENT INC",
  },
  {
    ticker: "PGLO",
    title: "PAN GLOBAL, CORP.",
  },
  {
    ticker: "NECA",
    title: "NEW AMERICA ENERGY CORP.",
  },
  {
    ticker: "OMTK",
    title: "Omnitek Engineering Corp",
  },
  {
    ticker: "CLCN",
    title: "Driveitaway Holdings, Inc.",
  },
  {
    ticker: "TAPM",
    title: "Tapinator, Inc.",
  },
  {
    ticker: "STQN",
    title: "STRATEGIC ACQUISITIONS INC /NV/",
  },
  {
    ticker: "IMAHF",
    title: "I-Minerals Inc",
  },
  {
    ticker: "SITOQ",
    title: "SITO MOBILE, LTD.",
  },
  {
    ticker: "PRED",
    title: "PREDICTIVE TECHNOLOGY GROUP, INC.",
  },
  {
    ticker: "GFMH",
    title: "Goliath Film & Media Holdings",
  },
  {
    ticker: "MCCX",
    title: "MCX Technologies Corp",
  },
  {
    ticker: "WOLV",
    title: "Wolverine Technologies Corp.",
  },
  {
    ticker: "SRUS",
    title: "STRATUS CAPITAL CORP",
  },
  {
    ticker: "CORG",
    title: "CORDIA CORP",
  },
  {
    ticker: "DCLT",
    title: "Data Call Technologies",
  },
  {
    ticker: "TKXHF",
    title: "TRACKX HOLDINGS INC",
  },
  {
    ticker: "TDNT",
    title: "Trident Brands Inc",
  },
  {
    ticker: "TXHG",
    title: "TX Holdings, Inc.",
  },
  {
    ticker: "VBIX",
    title: "Viewbix Inc.",
  },
  {
    ticker: "MSYN",
    title: "MS YOUNG ADVENTURE ENTERPRISE, INC.",
  },
  {
    ticker: "ATRX",
    title: "Adhera Therapeutics, Inc.",
  },
  {
    ticker: "ESMC",
    title: "ESCALON MEDICAL CORP",
  },
  {
    ticker: "GWHP",
    title: "Global Wholehealth Partners Corp",
  },
  {
    ticker: "KAYS",
    title: "Kaya Holdings, Inc.",
  },
  {
    ticker: "CLIS",
    title: "ClickStream Corp",
  },
  {
    ticker: "LFER",
    title: "Life On Earth, Inc.",
  },
  {
    ticker: "MNTR",
    title: "Mentor Capital, Inc.",
  },
  {
    ticker: "FERN",
    title: "Fernhill Corp",
  },
  {
    ticker: "NUVI",
    title: "Emo Capital Corp.",
  },
  {
    ticker: "SSOF",
    title: "Sixty Six Oilfield Services, Inc.",
  },
  {
    ticker: "ALTX",
    title: "ALTEX INDUSTRIES INC",
  },
  {
    ticker: "HSTC",
    title: "HST Global, Inc.",
  },
  {
    ticker: "THCT",
    title: "THC Therapeutics, Inc.",
  },
  {
    ticker: "SANP",
    title: "SANTO MINING CORP.",
  },
  {
    ticker: "DIGP",
    title: "Digipath, Inc.",
  },
  {
    ticker: "AVPMF",
    title: "AVRUPA MINERALS LTD.",
  },
  {
    ticker: "HSTA",
    title: "Hestia Insight Inc.",
  },
  {
    ticker: "TPII",
    title: "Triad Pro Innovators, Inc.",
  },
  {
    ticker: "ABMC",
    title: "AMERICAN BIO MEDICA CORP",
  },
  {
    ticker: "EQUR",
    title: "E-Qure Corp.",
  },
  {
    ticker: "CRFTF",
    title: "BC Craft Supply Co. Ltd.",
  },
  {
    ticker: "KSSH",
    title: "Kingfish Holding Corp",
  },
  {
    ticker: "CGSI",
    title: "CGS INTERNATIONAL, INC.",
  },
  {
    ticker: "FRFR",
    title: "Fritzy Tech Inc.",
  },
  {
    ticker: "PRLE",
    title: "PILLARSTONE CAPITAL REIT",
  },
  {
    ticker: "AMNL",
    title: "Applied Minerals, Inc.",
  },
  {
    ticker: "IMUN",
    title: "Immune Therapeutics, Inc.",
  },
  {
    ticker: "CNGT",
    title: "Cannagistics Inc.",
  },
  {
    ticker: "BANT",
    title: "Bantec, Inc.",
  },
  {
    ticker: "ONCI",
    title: "ON4 COMMUNICATIONS INC.",
  },
  {
    ticker: "RASP",
    title: "Rasna Therapeutics Inc.",
  },
  {
    ticker: "MGHL",
    title: "MORGAN GROUP HOLDING CO",
  },
  {
    ticker: "BTDG",
    title: "B2Digital, Inc.",
  },
  {
    ticker: "MNGG",
    title: "Mining Global, Inc.",
  },
  {
    ticker: "ENDV",
    title: "ENDONOVO THERAPEUTICS, INC.",
  },
  {
    ticker: "PHOT",
    title: "GROWLIFE, INC.",
  },
  {
    ticker: "ADMG",
    title: "ADAMANT DRI PROCESSING & MINERALS GROUP",
  },
  {
    ticker: "PGAS",
    title: "PETROGRESS, INC",
  },
  {
    ticker: "HLWD",
    title: "Almost Never Films Inc.",
  },
  {
    ticker: "CHHE",
    title: "China Health Industries Holdings, Inc.",
  },
  {
    ticker: "TMLL",
    title: "NEXPLORE Corp",
  },
  {
    ticker: "NHMD",
    title: "NHMD Holdings, Inc.",
  },
  {
    ticker: "WWSG",
    title: "WORLDWIDE STRATEGIES INC",
  },
  {
    ticker: "NUVG",
    title: "Nuvus Gro Corp",
  },
  {
    ticker: "WINR",
    title: "SIMPLICITY ESPORTS & GAMING Co",
  },
  {
    ticker: "GTHR",
    title: "GENETHERA INC",
  },
  {
    ticker: "LTSC",
    title: "LIGHTSCAPE TECHNOLOGIES INC.",
  },
  {
    ticker: "TGHI",
    title: "Touchpoint Group Holdings Inc.",
  },
  {
    ticker: "NDVN",
    title: "nDivision Inc.",
  },
  {
    ticker: "AOXY",
    title: "ADVANCED OXYGEN TECHNOLOGIES INC",
  },
  {
    ticker: "EHVVF",
    title: "Ehave, Inc.",
  },
  {
    ticker: "ROAG",
    title: "Rogue One, Inc.",
  },
  {
    ticker: "GCAN",
    title: "Greater Cannabis Company, Inc.",
  },
  {
    ticker: "QLIS",
    title: "Qualis Innovations, Inc.",
  },
  {
    ticker: "NHLE",
    title: "Nhale, Inc.",
  },
  {
    ticker: "CSUI",
    title: "CANNABIS SUISSE CORP.",
  },
  {
    ticker: "MSSV",
    title: "MESO NUMISMATICS, INC.",
  },
  {
    ticker: "MSPC",
    title: "METROSPACES, INC.",
  },
  {
    ticker: "GSTX",
    title: "Graphene & Solar Technologies Ltd",
  },
  {
    ticker: "ARSN",
    title: "Yuenglings Ice Cream Corp",
  },
  {
    ticker: "DGWR",
    title: "Deep Green Waste & Recycling, Inc.",
  },
  {
    ticker: "LFAP",
    title: "LGBTQ Loyalty Holdings, Inc.",
  },
  {
    ticker: "SKVI",
    title: "SKINVISIBLE, INC.",
  },
  {
    ticker: "SSOK",
    title: "Sunstock, Inc.",
  },
  {
    ticker: "DLOC",
    title: "Digital Locations, Inc.",
  },
  {
    ticker: "BBLS",
    title: "Petrolia Energy Corp",
  },
  {
    ticker: "XALL",
    title: "Xalles Holdings Inc.",
  },
  {
    ticker: "GHST",
    title: "GHST World Inc.",
  },
  {
    ticker: "ARRT",
    title: "Artisan Consumer Goods, Inc.",
  },
  {
    ticker: "HMLA",
    title: "HIMALAYA TECHNOLOGIES, INC",
  },
  {
    ticker: "MXSG",
    title: "Mexus Gold US",
  },
  {
    ticker: "ETNI",
    title: "ENTEST GROUP, INC.",
  },
  {
    ticker: "VMHG",
    title: "VICTORY MARINE HOLDINGS CORP",
  },
  {
    ticker: "QTXB",
    title: "QUANTRX BIOMEDICAL CORP",
  },
  {
    ticker: "MDWK",
    title: "MDwerks, Inc.",
  },
  {
    ticker: "PTAM",
    title: "POTASH AMERICA, INC.",
  },
  {
    ticker: "BRGO",
    title: "Bergio International, Inc.",
  },
  {
    ticker: "ESPI",
    title: "ESP Resources, Inc.",
  },
  {
    ticker: "BLIS",
    title: "Treasure & Shipwreck Recovery, Inc.",
  },
  {
    ticker: "HWKE",
    title: "Hawkeye Systems, Inc.",
  },
  {
    ticker: "NLAB",
    title: "NUONCOLOGY LABS INC",
  },
  {
    ticker: "AFOM",
    title: "ALL FOR ONE MEDIA CORP.",
  },
  {
    ticker: "EMGE",
    title: "Emergent Health Corp.",
  },
  {
    ticker: "FCCN",
    title: "SPECTRAL CAPITAL Corp",
  },
  {
    ticker: "GHMP",
    title: "Good Hemp, Inc.",
  },
  {
    ticker: "CMGR",
    title: "Clubhouse Media Group, Inc.",
  },
  {
    ticker: "PACV",
    title: "Pacific Ventures Group, Inc.",
  },
  {
    ticker: "IFMK",
    title: "iFresh Inc",
  },
  {
    ticker: "HHHEF",
    title: "37 CAPITAL INC",
  },
  {
    ticker: "FMHS",
    title: "FARMHOUSE, INC. /NV",
  },
  {
    ticker: "WESC",
    title: "W&E Source Corp.",
  },
  {
    ticker: "VSYM",
    title: "VIEW SYSTEMS INC",
  },
  {
    ticker: "JFIL",
    title: "Jubilant Flame International, Ltd",
  },
  {
    ticker: "RSPI",
    title: "RespireRx Pharmaceuticals Inc.",
  },
  {
    ticker: "SAML",
    title: "Samsara Luggage, Inc.",
  },
  {
    ticker: "VIZC",
    title: "VIZCONNECT, INC.",
  },
  {
    ticker: "SNWR",
    title: "Sanwire Corp",
  },
  {
    ticker: "CBGL",
    title: "CANNABIS GLOBAL, INC.",
  },
  {
    ticker: "SPGX",
    title: "Sustainable Projects Group Inc.",
  },
  {
    ticker: "CPPXF",
    title: "CONTINENTAL ENERGY CORP",
  },
  {
    ticker: "CLOW",
    title: "Cloudweb, Inc.",
  },
  {
    ticker: "EVTN",
    title: "ENVIRO TECHNOLOGIES U.S., INC.",
  },
  {
    ticker: "XRXH",
    title: "Entertainment Holdings, Inc./OK",
  },
  {
    ticker: "QNTA",
    title: "QUANTA INC",
  },
  {
    ticker: "BEGI",
    title: "BLACKSTAR ENTERPRISE GROUP, INC.",
  },
  {
    ticker: "WOWI",
    title: "METRO ONE TELECOMMUNICATIONS INC",
  },
  {
    ticker: "WGEI",
    title: "WINDGEN ENERGY, INC.",
  },
  {
    ticker: "PRCX",
    title: "Phoenix Rising Companies",
  },
  {
    ticker: "CYAP",
    title: "Cyber Apps World",
  },
  {
    ticker: "IWAL",
    title: "iWallet Corp",
  },
  {
    ticker: "BLAB",
    title: "BIO LAB NATURALS, INC.",
  },
  {
    ticker: "DBMM",
    title: "Digital Brand Media & Marketing Group, Inc.",
  },
  {
    ticker: "LWLW",
    title: "Longwen Group Corp.",
  },
  {
    ticker: "BISA",
    title: "BALTIC INTERNATIONAL USA INC",
  },
  {
    ticker: "CIRX",
    title: "CIRTRAN CORP",
  },
  {
    ticker: "SLCH",
    title: "Spotlight Capital Holdings, Inc",
  },
  {
    ticker: "PSWW",
    title: "Principal Solar, Inc.",
  },
  {
    ticker: "NINK",
    title: "NAMI Corp.",
  },
  {
    ticker: "ABCE",
    title: "ABCO Energy, Inc.",
  },
  {
    ticker: "POTN",
    title: "PotNetwork Holdings, Inc.",
  },
  {
    ticker: "LOGQ",
    title: "Logicquest Technology, Inc.",
  },
  {
    ticker: "PZOO",
    title: "Pazoo, Inc.",
  },
  {
    ticker: "MAPT",
    title: "MAPTELLIGENT, INC.",
  },
  {
    ticker: "SNDD",
    title: "RedHawk Holdings Corp.",
  },
  {
    ticker: "SCGX",
    title: "SAXON CAPITAL GROUP INC",
  },
  {
    ticker: "BWVI",
    title: "PSYCHECEUTICAL BIOSCIENCE, INC.",
  },
  {
    ticker: "TAMG",
    title: "Transnational Group, Inc.",
  },
  {
    ticker: "AWON",
    title: "A1 Group, Inc.",
  },
  {
    ticker: "CNTFY",
    title: "China Techfaith Wireless Communication Technology LTD",
  },
  {
    ticker: "GRSO",
    title: "GROW SOLUTIONS HOLDINGS, INC.",
  },
  {
    ticker: "GLAE",
    title: "GlassBridge Enterprises, Inc.",
  },
  {
    ticker: "RBSH",
    title: "Rebus Holdings, Inc.",
  },
  {
    ticker: "BOTH",
    title: "BIOETHICS LTD",
  },
  {
    ticker: "XTRM",
    title: "EXTREME BIODIESEL, INC.",
  },
  {
    ticker: "PPCB",
    title: "Propanc Biopharma, Inc.",
  },
  {
    ticker: "ANSU",
    title: "AMANASU TECHNO HOLDINGS CORP",
  },
  {
    ticker: "XCRT",
    title: "Xcelerate, Inc.",
  },
  {
    ticker: "WTII",
    title: "Water Technologies International,Inc.",
  },
  {
    ticker: "AHIX",
    title: "ALUF HOLDINGS, INC.",
  },
  {
    ticker: "DWOG",
    title: "DEEP WELL OIL & GAS INC",
  },
  {
    ticker: "FKST",
    title: "Flowerkist Skin Care & Cosmetics, Inc.",
  },
  {
    ticker: "NAFS",
    title: "North America Frac Sand, Inc.",
  },
  {
    ticker: "TRMNF",
    title: "NEW WAVE HOLDINGS CORP.",
  },
  {
    ticker: "OMHI",
    title: "Portage Resources Inc.",
  },
  {
    ticker: "DLCR",
    title: "Kibush Capital Corp",
  },
  {
    ticker: "GZCC",
    title: "GUOZI ZHONGYU CAPITAL HOLDINGS",
  },
  {
    ticker: "MBLV",
    title: "MobiVentures Inc.",
  },
  {
    ticker: "EMRN",
    title: "EMARINE GLOBAL INC.",
  },
  {
    ticker: "IMII",
    title: "INCEPTION MINING INC.",
  },
  {
    ticker: "PVEG",
    title: "PACIFIC VEGAS GLOBAL STRATEGIES INC",
  },
  {
    ticker: "MNVN",
    title: "MONDIAL VENTURES, INC.",
  },
  {
    ticker: "LQWC",
    title: "LIFEQUEST WORLD CORP.",
  },
  {
    ticker: "TQLB",
    title: "Torque Lifestyle Brands, Inc.",
  },
  {
    ticker: "PDNLA",
    title: "PRESIDENTIAL REALTY CORP/DE/",
  },
  {
    ticker: "AURI",
    title: "AURI INC",
  },
  {
    ticker: "SPOWF",
    title: "Strata Power Corp",
  },
  {
    ticker: "BDPT",
    title: "BIOADAPTIVES, INC.",
  },
  {
    ticker: "PBAJ",
    title: "PETRO USA, INC.",
  },
  {
    ticker: "KNOS",
    title: "KRONOS ADVANCED TECHNOLOGIES INC",
  },
  {
    ticker: "AQUI",
    title: "Aquarius I Acquisition Corp.",
  },
  {
    ticker: "UBIA",
    title: "UBI Blockchain Internet LTD-DE",
  },
  {
    ticker: "BMTM",
    title: "Bright Mountain Media, Inc.",
  },
  {
    ticker: "DTII",
    title: "DEFENSE TECHNOLOGIES INTERNATIONAL CORP.",
  },
  {
    ticker: "FIND",
    title: "FINDEX COM INC",
  },
  {
    ticker: "EMDF",
    title: "E Med Future, Inc.",
  },
  {
    ticker: "TEUM",
    title: "PARETEUM Corp",
  },
  {
    ticker: "HMPQ",
    title: "HempAmericana, Inc.",
  },
  {
    ticker: "PGAI",
    title: "PGI INC",
  },
  {
    ticker: "GSFI",
    title: "Green Stream Holdings Inc.",
  },
  {
    ticker: "GMEV",
    title: "GME INNOTAINMENT, INC.",
  },
  {
    ticker: "TVOG",
    title: "TURNER VALLEY OIL & GAS INC",
  },
  {
    ticker: "NNRX",
    title: "NUTRANOMICS, INC.",
  },
  {
    ticker: "APLD",
    title: "Applied Blockchain, Inc.",
  },
  {
    ticker: "DESTQ",
    title: "Destination Maternity Corp",
  },
  {
    ticker: "BLXX",
    title: "Blox, Inc.",
  },
  {
    ticker: "GLBD",
    title: "Global Seed Corp",
  },
  {
    ticker: "RKOS",
    title: "Arkose Energy Corp.",
  },
  {
    ticker: "ASCK",
    title: "AUSCRETE Corp",
  },
  {
    ticker: "FDBL",
    title: "Friendable, Inc.",
  },
  {
    ticker: "TRNX",
    title: "BBHC, INC.",
  },
  {
    ticker: "BRBL",
    title: "BrewBilt Brewing Co",
  },
  {
    ticker: "AMLH",
    title: "AMERICAN LEISURE HOLDINGS, INC.",
  },
  {
    ticker: "BLFE",
    title: "BioLIfe Sciences Inc",
  },
  {
    ticker: "SNHO",
    title: "SHONGHOYA INTERNATIONAL GROUP INC.",
  },
  {
    ticker: "BMMCF",
    title: "KBRIDGE ENERGY CORP.",
  },
  {
    ticker: "CXDC",
    title: "China XD Plastics Co Ltd",
  },
  {
    ticker: "CYDX",
    title: "CYduct Diagnostics, Inc.",
  },
  {
    ticker: "ECAT",
    title: "BlackRock ESG Capital Allocation Trust",
  },
  {
    ticker: "GTCH",
    title: "GBT Technologies Inc.",
  },
  {
    ticker: "PCMC",
    title: "PUBLIC CO MANAGEMENT CORP",
  },
  {
    ticker: "GNBT",
    title: "GENEREX BIOTECHNOLOGY CORP",
  },
  {
    ticker: "NICH",
    title: "NITCHES INC",
  },
  {
    ticker: "QBAN",
    title: "Telco Cuba, Inc.",
  },
  {
    ticker: "AIKO",
    title: "Alternative Investment Corp",
  },
  {
    ticker: "CONC",
    title: "CONECTISYS CORP",
  },
  {
    ticker: "PACQF",
    title: "PRIME ACQUISITION CORP",
  },
  {
    ticker: "KWBT",
    title: "KIWA BIO-TECH PRODUCTS GROUP CORP",
  },
  {
    ticker: "CGLO",
    title: "Coro Global Inc.",
  },
  {
    ticker: "WTKN",
    title: "CLStv Corp.",
  },
  {
    ticker: "OWCP",
    title: "OWC Pharmaceutical Research Corp.",
  },
  {
    ticker: "MYHI",
    title: "Mountain High Acquisitions Corp.",
  },
  {
    ticker: "ADYX",
    title: "Adynxx, Inc.",
  },
  {
    ticker: "RIVU",
    title: "Rivulet Media, Inc.",
  },
  {
    ticker: "ECDD",
    title: "ECRID, INC",
  },
  {
    ticker: "ATCC",
    title: "Ameritrust Corp",
  },
  {
    ticker: "CBDL",
    title: "CBD Life Sciences Inc.",
  },
  {
    ticker: "APPB",
    title: "Applied BioSciences Corp.",
  },
  {
    ticker: "MMNT",
    title: "MOMENTOUS HOLDINGS CORP.",
  },
  {
    ticker: "BMXC",
    title: "Bemax, Inc.",
  },
  {
    ticker: "SCRH",
    title: "SCORES HOLDING CO INC",
  },
  {
    ticker: "ZNRG",
    title: "Znergy, Inc.",
  },
  {
    ticker: "MASN",
    title: "Maison Luxe, Inc.",
  },
  {
    ticker: "MSTO",
    title: "Masterbeat Corp",
  },
  {
    ticker: "OBCN",
    title: "CLANCY SYSTEMS INTERNATIONAL INC /CO/",
  },
  {
    ticker: "GIPL",
    title: "Global Innovative Platforms Inc.",
  },
  {
    ticker: "CDIX",
    title: "Cardiff Lexington Corp",
  },
  {
    ticker: "ECXJ",
    title: "CXJ GROUP CO., Ltd",
  },
  {
    ticker: "BZRD",
    title: "Blubuzzard, Inc.",
  },
  {
    ticker: "FBCD",
    title: "FBC Holding, Inc.",
  },
  {
    ticker: "VTXB",
    title: "Vortex Brands Co.",
  },
  {
    ticker: "WEBB",
    title: "Web Blockchain Media, Inc.",
  },
  {
    ticker: "CLTH",
    title: "CleanTech Biofuels, Inc.",
  },
  {
    ticker: "KRFG",
    title: "KING RESOURCES, INC.",
  },
  {
    ticker: "NWYU",
    title: "New You, Inc.",
  },
  {
    ticker: "ALPE",
    title: "alpha-En Corp",
  },
  {
    ticker: "SFIO",
    title: "Starfleet Innotech, Inc.",
  },
  {
    ticker: "TLGTQ",
    title: "Teligent, Inc.",
  },
  {
    ticker: "TOGL",
    title: "Toga Ltd",
  },
  {
    ticker: "XSPT",
    title: "XSport Global, Inc.",
  },
  {
    ticker: "GSRX",
    title: "GSRX INDUSTRIES INC.",
  },
  {
    ticker: "MUSS",
    title: "MULTI SOLUTIONS II, INC",
  },
  {
    ticker: "VRUS",
    title: "VERUS INTERNATIONAL, INC.",
  },
  {
    ticker: "CXCQ",
    title: "CARDXX INC",
  },
  {
    ticker: "GYST",
    title: "GRAYSTONE COMPANY, INC.",
  },
  {
    ticker: "PLYZ",
    title: "Plyzer Technologies Inc.",
  },
  {
    ticker: "ACCA",
    title: "Acacia Diversified Holdings, Inc.",
  },
  {
    ticker: "WODI",
    title: "WOD Retail Solutions, Inc.",
  },
  {
    ticker: "MTWD",
    title: "EMERGE HEALTH INTERNATIONAL INC",
  },
  {
    ticker: "SECI",
    title: "SECTOR 10, Inc.",
  },
  {
    ticker: "TMGI",
    title: "Marquie Group, Inc.",
  },
  {
    ticker: "WTNW",
    title: "Water Now, Inc.",
  },
  {
    ticker: "BNCM",
    title: "BOUNCE MOBILE SYSTEMS, INC.",
  },
  {
    ticker: "LTDH",
    title: "LIVING 3D HOLDINGS, INC.",
  },
  {
    ticker: "SDVI",
    title: "SIGNATURE DEVICES INC",
  },
  {
    ticker: "NBGV",
    title: "NewBridge Global Ventures, Inc.",
  },
  {
    ticker: "AGTK",
    title: "AGRITEK HOLDINGS, INC.",
  },
  {
    ticker: "PVNNF",
    title: "PV Nano Cell, Ltd.",
  },
  {
    ticker: "XCPL",
    title: "XCPCNL Business Services Corp",
  },
  {
    ticker: "AFPW",
    title: "AlumiFuel Power Corp",
  },
  {
    ticker: "YUMAQ",
    title: "Yuma Energy, Inc.",
  },
  {
    ticker: "ESSI",
    title: "ECO SCIENCE SOLUTIONS, INC.",
  },
  {
    ticker: "PXPP",
    title: "Phoenix Apps Inc.",
  },
  {
    ticker: "AHFD",
    title: "Active Health Foods, Inc.",
  },
  {
    ticker: "MNIZ",
    title: "Gen 2 Technologies Inc.",
  },
  {
    ticker: "BLGI",
    title: "BLGI, INC.",
  },
  {
    ticker: "GTOR",
    title: "GGTOOR, INC.",
  },
  {
    ticker: "ANFIF",
    title: "Amira Nature Foods Ltd.",
  },
  {
    ticker: "MDIN",
    title: "MED GEN INC",
  },
  {
    ticker: "KEGS",
    title: "1812 Brewing Company, Inc.",
  },
  {
    ticker: "CHNO",
    title: "CLASSWORX INC",
  },
  {
    ticker: "EAPH",
    title: "EASTON PHARMACEUTICALS INC.",
  },
  {
    ticker: "DPSM",
    title: "3D PIONEER SYSTEMS, INC.",
  },
  {
    ticker: "QIAN",
    title: "Qiansui International Group Co. Ltd.",
  },
  {
    ticker: "WKLN",
    title: "MainStreetChamber Holdings, Inc.",
  },
  {
    ticker: "KGJI",
    title: "KINGOLD JEWELRY, INC.",
  },
  {
    ticker: "PLSI",
    title: "Phoenix Life Sciences International Limited.",
  },
  {
    ticker: "FTEG",
    title: "Integrity Health Corp",
  },
  {
    ticker: "COUV",
    title: "CORPORATE UNIVERSE INC",
  },
  {
    ticker: "BRRN",
    title: "Born, Inc.",
  },
  {
    ticker: "AGHC",
    title: "Aeon Global Health Corp.",
  },
  {
    ticker: "BIQIF",
    title: "BIQI INTERNATIONAL HOLDINGS CORP",
  },
  {
    ticker: "CSHEF",
    title: "CHINA ENTERPRISES LTD",
  },
  {
    ticker: "GBPT",
    title: "Globe Photos, Inc.",
  },
  {
    ticker: "BIIO",
    title: "Bionovate Technologies Corp.",
  },
  {
    ticker: "LEGX",
    title: "LegacyXChange, Inc.",
  },
  {
    ticker: "ADGO",
    title: "Advantego Corp",
  },
  {
    ticker: "LVPA",
    title: "LVPAI GROUP Ltd",
  },
  {
    ticker: "YGTYF",
    title: "SSLJ. COM Ltd",
  },
  {
    ticker: "NANN",
    title: "Nanovation Microtech, Inc.",
  },
  {
    ticker: "BDGY",
    title: "BRIDGEWAY NATIONAL CORP.",
  },
  {
    ticker: "SYNE",
    title: "SYNTHESIS ENERGY SYSTEMS INC",
  },
  {
    ticker: "DIRV",
    title: "DIRECTVIEW HOLDINGS INC",
  },
  {
    ticker: "AGGG",
    title: "ANTILIA GROUP, CORP.",
  },
  {
    ticker: "BSSP",
    title: "BASELINE PRODUCTIONS, INC.",
  },
  {
    ticker: "GTEH",
    title: "GENTECH HOLDINGS, INC.",
  },
  {
    ticker: "MDFZF",
    title: "Medifocus Inc.",
  },
  {
    ticker: "LRDG",
    title: "Lord Global Corp",
  },
  {
    ticker: "NEIK",
    title: "NORTHSTAR ELECTRONICS INC",
  },
  {
    ticker: "RCMW",
    title: "RCMW Group, Inc.",
  },
  {
    ticker: "LOGX",
    title: "PeerLogix, Inc.",
  },
  {
    ticker: "CRXM",
    title: "Gene Biotherapeutics, Inc.",
  },
  {
    ticker: "FRLI",
    title: "Frelii, Inc.",
  },
  {
    ticker: "CBKCQ",
    title: "CHRISTOPHER & BANKS CORP",
  },
  {
    ticker: "STSC",
    title: "Start Scientific, Inc.",
  },
  {
    ticker: "CYBF",
    title: "Cyberfort Software, Inc.",
  },
  {
    ticker: "BASXQ",
    title: "BASIC ENERGY SERVICES, INC.",
  },
  {
    ticker: "CNNA",
    title: "Cann American Corp.",
  },
  {
    ticker: "RIVX",
    title: "RIVEX TECHNOLOGY CORP.",
  },
  {
    ticker: "YUKA",
    title: "Yuka Group Inc",
  },
  {
    ticker: "MSOF",
    title: "MULTI SOFT II, INC",
  },
  {
    ticker: "UNEQ",
    title: "UNEEQO, INC.",
  },
  {
    ticker: "IVBT",
    title: "Innovation1 Biotech Inc.",
  },
  {
    ticker: "AFHIQ",
    title: "Atlas Financial Holdings, Inc.",
  },
  {
    ticker: "PRDEX",
    title: "PREDEX",
  },
  {
    ticker: "XWAMX",
    title: "Western Asset Middle Market Debt Fund Inc.",
  },
  {
    ticker: "BNGO",
    title: "Bionano Genomics, Inc.",
  },
  {
    ticker: "UNSS",
    title: "UNIVERSAL SOLAR TECHNOLOGY, INC.",
  },
  {
    ticker: "MDL",
    title: "Medallion Resources Ltd",
  },
  {
    ticker: "LIFD",
    title: "LFTD PARTNERS INC.",
  },
  {
    ticker: "UPOW",
    title: "UAN Power Corp",
  },
  {
    ticker: "GXXY",
    title: "Galexxy Holdings, Inc.",
  },
  {
    ticker: "AGXPF",
    title: "ORO X MINING CORP.",
  },
  {
    ticker: "CMRF",
    title: "CIM REAL ESTATE FINANCE TRUST, INC.",
  },
  {
    ticker: "BDRL",
    title: "BLONDER TONGUE LABORATORIES INC",
  },
  {
    ticker: "NLSC",
    title: "Namliong SkyCosmos, Inc.",
  },
  {
    ticker: "PGY",
    title: "Pagaya Technologies Ltd.",
  },
  {
    ticker: "AKAN",
    title: "AKANDA CORP.",
  },
  {
    ticker: "IGTA",
    title: "Inception Growth Acquisition Ltd",
  },
  {
    ticker: "RMMZ",
    title: "RiverNorth Managed Duration Municipal Income Fund II, Inc.",
  },
  {
    ticker: "HPAC",
    title: "Henley Park Acquisition Corp.",
  },
  {
    ticker: "IXHL",
    title: "Incannex Healthcare Ltd",
  },
  {
    ticker: "ADRT",
    title: "Ault Disruptive Technologies Corp",
  },
  {
    ticker: "DPAC",
    title: "Deep Space Acquisition Corp. I",
  },
  {
    ticker: "INTR",
    title: "Inter & Co, Inc.",
  },
  {
    ticker: "MCAC",
    title: "Monterey Capital Acquisition Corp",
  },
  {
    ticker: "IONR",
    title: "ioneer Ltd",
  },
  {
    ticker: "PERF",
    title: "Perfect Corp.",
  },
  {
    ticker: "WRNT",
    title: "WARRANTEE INC.",
  },
  {
    ticker: "ECEC",
    title: "BCAC Holdings, Inc.",
  },
  {
    ticker: "FLFV",
    title: "Feutune Light Acquisition Corp",
  },
  {
    ticker: "KETR",
    title: "Keter Group SA",
  },
  {
    ticker: "TESLU",
    title: "286 Lenox Partners LLC",
  },
  {
    ticker: "XYGJ",
    title: "Fortune Joy International Acquisition Corp",
  },
  {
    ticker: "GGR",
    title: "Gogoro Inc.",
  },
  {
    ticker: "AURV",
    title: "Aurvandil Acquisition Corp.",
  },
  {
    ticker: "CITE",
    title: "Cartica Acquisition Corp",
  },
  {
    ticker: "GTAC",
    title: "Global Technology Acquisition Corp. I",
  },
  {
    ticker: "VIII",
    title: "Virgin Group Acquisition Corp. III",
  },
  {
    ticker: "BTVC",
    title: "Tribe Capital Growth Corp II",
  },
  {
    ticker: "AEAE",
    title: "AltEnergy Acquisition Corp",
  },
  {
    ticker: "BOCN",
    title: "Blue Ocean Acquisition Corp",
  },
  {
    ticker: "YSWY",
    title: "Yesway, Inc.",
  },
  {
    ticker: "AFIIQ",
    title: "Armstrong Flooring, Inc.",
  },
  {
    ticker: "RDMR",
    title: "Road Marshall, Inc.",
  },
  {
    ticker: "AMLX",
    title: "Amylyx Pharmaceuticals, Inc.",
  },
  {
    ticker: "VCRRX",
    title: "Versus Capital Real Assets Fund LLC",
  },
  {
    ticker: "FNNAX",
    title: "FS Multi-Alternative Income Fund",
  },
  {
    ticker: "EIOAX",
    title: "ELLINGTON INCOME OPPORTUNITIES FUND",
  },
  {
    ticker: "QQCY",
    title: "Green Grass Ecological Technology Development Co., Ltd.",
  },
  {
    ticker: "SCPS",
    title: "Scopus BioPharma Inc.",
  },
  {
    ticker: "TBLD",
    title: "Thornburg Income Builder Opportunities Trust",
  },
  {
    ticker: "ONS",
    title: "ONS Acquisition Corp.",
  },
  {
    ticker: "LYT",
    title: "Lytus Technologies Holdings PTV. Ltd.",
  },
  {
    ticker: "GSUN",
    title: "Golden Sun Education Group Ltd",
  },
  {
    ticker: "EVEX",
    title: "Eve Holding, Inc.",
  },
  {
    ticker: "OACA",
    title: "Ocelot Acquisition Corp I",
  },
  {
    ticker: "QNIU",
    title: "Qiniu Ltd.",
  },
  {
    ticker: "RGTI",
    title: "Rigetti Computing, Inc.",
  },
  {
    ticker: "QTEK",
    title: "QualTek Services Inc.",
  },
  {
    ticker: "DMA",
    title: "Destra Multi-Alternative Fund",
  },
  {
    ticker: "RMRI",
    title: "Rocky Mountain Industrials, Inc.",
  },
  {
    ticker: "NXL",
    title: "Nexalin Technology, Inc.",
  },
  {
    ticker: "NHWK",
    title: "NightHawk Biosciences, Inc.",
  },
  {
    ticker: "SGOL",
    title: "abrdn Gold ETF Trust",
  },
  {
    ticker: "NSAL",
    title: "Navios South American Logistics Inc.",
  },
  {
    ticker: "RTL",
    title: "Necessity Retail REIT, Inc.",
  },
  {
    ticker: "OPLF",
    title: "OPTILEAF, INC.",
  },
  {
    ticker: "AAAU",
    title: "Goldman Sachs Physical Gold ETF",
  },
  {
    ticker: "UPYY",
    title: "UPAY",
  },
  {
    ticker: "EUBG",
    title: "ENTREPRENEUR UNIVERSE BRIGHT GROUP",
  },
  {
    ticker: "CHGI",
    title: "China Carbon Graphite Group, Inc.",
  },
  {
    ticker: "OAK-PA",
    title: "Oaktree Capital Group, LLC",
  },
  {
    ticker: "UGA",
    title: "United States Gasoline Fund, LP",
  },
  {
    ticker: "GPLB",
    title: "Green Planet Bio Engineering Co. Ltd.",
  },
  {
    ticker: "CDMNF",
    title: "Canadian Manganese Co Inc.",
  },
  {
    ticker: "ALSA",
    title: "Alpha Star Acquisition Corp",
  },
  {
    ticker: "GDST",
    title: "Goldenstone Acquisition Ltd.",
  },
  {
    ticker: "IAUX",
    title: "i-80 Gold Corp.",
  },
  {
    ticker: "LFTA",
    title: "Lazard Fintech Acquisition Corp. I",
  },
  {
    ticker: "FILG",
    title: "Grayscale Filecoin Trust (FIL)",
  },
  {
    ticker: "GLASF",
    title: "Glass House Brands Inc.",
  },
  {
    ticker: "MEGL",
    title: "Magic Empire Global Ltd",
  },
  {
    ticker: "STRY",
    title: "Starry Group Holdings, Inc.",
  },
  {
    ticker: "PEV",
    title: "PHOENIX MOTOR INC.",
  },
  {
    ticker: "ARAG",
    title: "Arago Acquisition Corp.",
  },
  {
    ticker: "HLN",
    title: "Haleon plc",
  },
  {
    ticker: "GRRR",
    title: "Gorilla Technology Group Inc.",
  },
  {
    ticker: "LATG",
    title: "LatAmGrowth SPAC",
  },
  {
    ticker: "ENTF",
    title: "Enterprise 4.0 Technology Acquisition Corp",
  },
  {
    ticker: "MKAR",
    title: "Makara Strategic Acquisition Corp.",
  },
  {
    ticker: "BULL",
    title: "Bullish",
  },
  {
    ticker: "HRDG",
    title: "Huarui International New Material Ltd",
  },
  {
    ticker: "HKD",
    title: "AMTD Digital Inc.",
  },
  {
    ticker: "GRNA",
    title: "GreenLight Biosciences Holdings, PBC",
  },
  {
    ticker: "ETHE",
    title: "Grayscale Ethereum Trust (ETH)",
  },
  {
    ticker: "SDEC",
    title: "Smart Decision, Inc.",
  },
  {
    ticker: "OBTC",
    title: "Osprey Bitcoin Trust",
  },
  {
    ticker: "MSTH",
    title: "Mystic Holdings Inc./NV",
  },
  {
    ticker: "FIGI",
    title: "Freedom Internet Group Inc.",
  },
  {
    ticker: "DRS",
    title: "Leonardo DRS, Inc.",
  },
  {
    ticker: "BMNR",
    title: "BITMINE IMMERSION TECHNOLOGIES, INC.",
  },
  {
    ticker: "VIGL",
    title: "Vigil Neuroscience, Inc.",
  },
  {
    ticker: "PWUP",
    title: "PowerUp Acquisition Corp.",
  },
  {
    ticker: "CLIC",
    title: "Climate Real Impact Solutions III Acquisition Corp",
  },
  {
    ticker: "CNAQ",
    title: "CHARDAN NEXTECH ACQUISITION CORP.",
  },
  {
    ticker: "GGI",
    title: "Guggenheim Special Purpose Acquisition Corp. I",
  },
  {
    ticker: "UTXOU",
    title: "UTXO Acquisition Inc.",
  },
  {
    ticker: "GOLQ",
    title: "GoLogiq, Inc.",
  },
  {
    ticker: "INKI",
    title: "INKY INC.",
  },
  {
    ticker: "MSPR",
    title: "MSP Recovery, Inc.",
  },
  {
    ticker: "MHUA",
    title: "Meihua International Medical Technologies Co., Ltd.",
  },
  {
    ticker: "IGACU",
    title: "IG Acquisition Corp.",
  },
  {
    ticker: "OCEA",
    title: "Ocean Biomedical, Inc.",
  },
  {
    ticker: "SSIC",
    title: "Silver Spike Investment Corp.",
  },
  {
    ticker: "WNNR",
    title: "Andretti Acquisition Corp.",
  },
  {
    ticker: "LHCA",
    title: "Lazard Healthcare Acquisition Corp. I",
  },
  {
    ticker: "ATAT",
    title: "Atour Lifestyle Holdings Ltd",
  },
  {
    ticker: "TWCM",
    title: "Mistico Acquisition Corp.",
  },
  {
    ticker: "NBAB",
    title: "New Beginnings Acquisition Corp. II",
  },
  {
    ticker: "CORZ",
    title: "Core Scientific, Inc./tx",
  },
  {
    ticker: "FGNB",
    title: "FG New America Acquisition II Corp",
  },
  {
    ticker: "SANB",
    title: "Sanaby Health Acquisition Corp. I",
  },
  {
    ticker: "ATLA",
    title: "Atlas Growth Acquisition Ltd",
  },
  {
    ticker: "SSSC",
    title: "Silver Sustainable Solutions Corp.",
  },
  {
    ticker: "LBBB",
    title: "Lakeshore Acquisition II Corp.",
  },
  {
    ticker: "GRNT",
    title: "Granite Ridge Resources, Inc.",
  },
  {
    ticker: "SVV",
    title: "Savers Value Village, Inc.",
  },
  {
    ticker: "JEWL",
    title: "Adamas One Corp.",
  },
  {
    ticker: "UERI",
    title: "UE Resorts International, Inc.",
  },
  {
    ticker: "BRCC",
    title: "BRC Inc.",
  },
  {
    ticker: "HPCO",
    title: "Hempacco Co., Inc.",
  },
  {
    ticker: "VSSA",
    title: "VIKASA SPAC Series I Acquisition Corp.",
  },
  {
    ticker: "BMR",
    title: "Beamr Imaging Ltd.",
  },
  {
    ticker: "GSRM",
    title: "GSR II Meteora Acquisition Corp.",
  },
  {
    ticker: "WYTC",
    title: "WYTEC INTERNATIONAL INC",
  },
  {
    ticker: "ZHEC",
    title: "ZHRH Corp",
  },
  {
    ticker: "MNKPF",
    title: "Mallinckrodt plc",
  },
  {
    ticker: "BETR",
    title: "BetterLife Pharma Inc.",
  },
  {
    ticker: "ODV",
    title: "Osisko Development Corp.",
  },
  {
    ticker: "AFFG",
    title: "X Metaverse Inc.",
  },
  {
    ticker: "OMED",
    title: "OptMed, Inc.",
  },
  {
    ticker: "BNO",
    title: "United States Brent Oil Fund, LP",
  },
  {
    ticker: "YJGJ",
    title: "YIJIA GROUP CORP.",
  },
  {
    ticker: "JUNS",
    title: "JUPITER NEUROSCIENCES, INC.",
  },
  {
    ticker: "PFFLX",
    title: "PIMCO Flexible Credit Income Fund",
  },
  {
    ticker: "THRO",
    title: "Theron Resource Group",
  },
  {
    ticker: "DNAX",
    title: "DNA BRANDS INC",
  },
  {
    ticker: "GLNS",
    title: "Golden Star Resource Corp.",
  },
  {
    ticker: "THER",
    title: "THERALINK TECHNOLOGIES, INC.",
  },
  {
    ticker: "KTN",
    title: "STRUCTURED PRODUCTS CORP CRED ENHANCE CORTS TR FOR AON CAP A",
  },
  {
    ticker: "GGE",
    title: "Green Giant Inc.",
  },
  {
    ticker: "ALR",
    title: "AlerisLife Inc.",
  },
  {
    ticker: "LSAK",
    title: "LESAKA TECHNOLOGIES INC",
  },
  {
    ticker: "TURO",
    title: "Turo Inc.",
  },
  {
    ticker: "ALIN-PA",
    title: "Altera Infrastructure L.P.",
  },
  {
    ticker: "WBD",
    title: "Warner Bros. Discovery, Inc.",
  },
  {
    ticker: "USL",
    title: "United States 12 Month Oil Fund, LP",
  },
  {
    ticker: "BBBT",
    title: "Black Bird Biotech, Inc.",
  },
  {
    ticker: "BBMPY",
    title: "BBMG Corporation/ADR",
  },
  {
    ticker: "GBTC",
    title: "Grayscale Bitcoin Trust (BTC)",
  },
  {
    ticker: "HOTI",
    title: "Hemoglobin Oxygen Therapeutics LLC",
  },
  {
    ticker: "RCIAX",
    title: "Alternative Credit Income Fund",
  },
  {
    ticker: "ECOX",
    title: "ECO INNOVATION GROUP, INC.",
  },
  {
    ticker: "LAB",
    title: "STANDARD BIOTOOLS INC.",
  },
  {
    ticker: "TCRT",
    title: "Alaunos Therapeutics, Inc.",
  },
  {
    ticker: "FXCO",
    title: "Financial Strategies Acquisition Corp.",
  },
  {
    ticker: "STRW",
    title: "Strawberry Fields REIT, Inc.",
  },
  {
    ticker: "EIC",
    title: "Eagle Point Income Co Inc.",
  },
  {
    ticker: "CHMT",
    title: "Charmt, Inc.",
  },
  {
    ticker: "ELMSQ",
    title: "Electric Last Mile Solutions, Inc.",
  },
  {
    ticker: "VZLA",
    title: "Vizsla Silver Corp.",
  },
  {
    ticker: "WGLD",
    title: "wShares Enhanced Gold ETF",
  },
  {
    ticker: "XPTFX",
    title: "Federated Hermes Project & Trade Finance Tender Fund",
  },
  {
    ticker: "CADCX",
    title: "CION Ares Diversified Credit Fund",
  },
  {
    ticker: "BTRU",
    title: "tru Shrimp Companies, Inc.",
  },
  {
    ticker: "RVLP",
    title: "RVL Pharmaceuticals plc",
  },
  {
    ticker: "RVIC",
    title: "Retail Value Inc.",
  },
  {
    ticker: "BGFDX",
    title: "Blackstone Floating Rate Enhanced Income Fund",
  },
  {
    ticker: "TRNY",
    title: "Trinity Acquisition Corp.",
  },
  {
    ticker: "FTE",
    title: "FAST Merger Corp.",
  },
  {
    ticker: "LFAC",
    title: "LF Capital Acquisition Corp. II",
  },
  {
    ticker: "LEDG",
    title: "Ledger Acquisition Co",
  },
  {
    ticker: "MLAN",
    title: "Milan Laser Inc.",
  },
  {
    ticker: "TUFU",
    title: "TradeUP 88 Corp.",
  },
  {
    ticker: "HUDA",
    title: "Hudson Acquisition I Corp.",
  },
  {
    ticker: "HORI",
    title: "Emerging Markets Horizon Corp.",
  },
  {
    ticker: "ELEP",
    title: "Elephant Oil Corp.",
  },
  {
    ticker: "ASCA",
    title: "ASPAC I Acquisition Corp.",
  },
  {
    ticker: "DSGR",
    title: "Distribution Solutions Group, Inc.",
  },
  {
    ticker: "SOMC",
    title: "SOUTHERN MICHIGAN BANCORP INC",
  },
  {
    ticker: "SCRM",
    title: "Screaming Eagle Acquisition Corp.",
  },
  {
    ticker: "ICG",
    title: "Intchains Group Ltd",
  },
  {
    ticker: "PMBY",
    title: "PostD Merchant Banque",
  },
  {
    ticker: "HMNTY",
    title: "Hemnet Group AB/ADR",
  },
  {
    ticker: "ZIMV",
    title: "ZimVie Inc.",
  },
  {
    ticker: "ATAK",
    title: "Aurora Technology Acquisition Corp.",
  },
  {
    ticker: "CSLM",
    title: "Consilium Acquisition Corp I, Ltd.",
  },
  {
    ticker: "KNSW",
    title: "KnightSwan Acquisition Corp",
  },
  {
    ticker: "WDS",
    title: "WOODSIDE ENERGY GROUP LTD",
  },
  {
    ticker: "MICS",
    title: "SINGING MACHINE CO INC",
  },
  {
    ticker: "CVUA",
    title: "CPI AEROSTRUCTURES INC",
  },
  {
    ticker: "WEIB",
    title: "Weiss Strategic Interval Fund",
  },
  {
    ticker: "IDIV",
    title: "Metaurus Equity Component Trust",
  },
  {
    ticker: "RCCC",
    title: "RC-1, Inc.",
  },
  {
    ticker: "TPTA",
    title: "Terra Property Trust, Inc.",
  },
  {
    ticker: "SAGN",
    title: "Sagoon Inc.",
  },
  {
    ticker: "HTIA",
    title: "Healthcare Trust, Inc.",
  },
  {
    ticker: "NFTN",
    title: "NFiniTi inc.",
  },
  {
    ticker: "GWGHQ",
    title: "GWG Holdings, Inc.",
  },
  {
    ticker: "CPTN",
    title: "Cepton, Inc.",
  },
  {
    ticker: "USCI",
    title: "United States Commodity Index Funds Trust",
  },
  {
    ticker: "SRTS",
    title: "Sensus Healthcare, Inc.",
  },
  {
    ticker: "LTAFX",
    title: "Alternative Strategies Fund",
  },
  {
    ticker: "XSIAX",
    title: "VOYA CREDIT INCOME FUND",
  },
  {
    ticker: "ETI-P",
    title: "ENTERGY TEXAS, INC.",
  },
  {
    ticker: "UUP",
    title: "Invesco DB US Dollar Index Bullish Fund",
  },
  {
    ticker: "SHMY",
    title: "Synergy Empire Ltd",
  },
  {
    ticker: "BEKE",
    title: "KE Holdings Inc.",
  },
  {
    ticker: "CLRS",
    title: "Claire's Holdings LLC",
  },
  {
    ticker: "GRFX",
    title: "Graphex Group Ltd",
  },
  {
    ticker: "GLSPT",
    title: "Global SPAC Partners Co,",
  },
  {
    ticker: "BIGZ",
    title: "BlackRock Innovation & Growth Trust",
  },
  {
    ticker: "ASFH",
    title: "ASIAFIN HOLDINGS CORP.",
  },
  {
    ticker: "DIII",
    title: "DD3 Acquisition Corp. III",
  },
  {
    ticker: "IVCA",
    title: "Investcorp India Acquisition Corp",
  },
  {
    ticker: "SVNI",
    title: "Seven Islands Inc",
  },
  {
    ticker: "BWTR",
    title: "Blue Water Acquisition Corp. II",
  },
  {
    ticker: "AXH",
    title: "Industrial Human Capital, Inc.",
  },
  {
    ticker: "BPAC",
    title: "Bullpen Parlay Acquisition Co",
  },
  {
    ticker: "GENQ",
    title: "Genesis Unicorn Capital Corp.",
  },
  {
    ticker: "IVCB",
    title: "Investcorp Europe Acquisition Corp I",
  },
  {
    ticker: "GDNR",
    title: "Gardiner Healthcare Acquisitions Corp.",
  },
  {
    ticker: "RACY",
    title: "Relativity Acquisition Corp",
  },
  {
    ticker: "NPFD",
    title: "Nuveen Variable Rate Preferred & Income Fund",
  },
  {
    ticker: "KLC",
    title: "KinderCare Learning Companies, Inc.",
  },
  {
    ticker: "REAI",
    title: "Renewable Energy Acquisition Corp. /DE/",
  },
  {
    ticker: "USAX",
    title: "USA Acquisition Corp.",
  },
  {
    ticker: "ELSN",
    title: "Eleison Pharmaceuticals Inc",
  },
  {
    ticker: "DRCT",
    title: "Direct Digital Holdings, Inc.",
  },
  {
    ticker: "ZAAG",
    title: "ZA Group, Inc.",
  },
  {
    ticker: "FP",
    title: "First Person Ltd.",
  },
  {
    ticker: "OLIT",
    title: "OmniLit Acquisition Corp.",
  },
  {
    ticker: "CNGL",
    title: "Canna-Global Acquisition Corp",
  },
  {
    ticker: "SBUX",
    title: "STARBUCKS CORP",
  },
  {
    ticker: "SYQH",
    title: "Liaoning Shuiyun Qinghe Rice Industry Co., Ltd.",
  },
  {
    ticker: "SADDP",
    title: "SADDLEBROOK RESORTS INC",
  },
  {
    ticker: "BEEP",
    title: "Mobile Infrastructure Trust",
  },
  {
    ticker: "ALVO",
    title: "Alvotech",
  },
  {
    ticker: "KCAC",
    title: "Kensington Capital Acquisition Corp. IV",
  },
  {
    ticker: "TSGN",
    title: "NAAC Holdco, Inc.",
  },
  {
    ticker: "ZTEK",
    title: "Zentek Ltd.",
  },
  {
    ticker: "RWOD",
    title: "Redwoods Acquisition Corp.",
  },
  {
    ticker: "HS",
    title: "HomeSmart Holdings, Inc.",
  },
  {
    ticker: "FDHA",
    title: "First Digital Health Acquisition Corp.",
  },
  {
    ticker: "PGRU",
    title: "PropertyGuru Group Ltd",
  },
  {
    ticker: "MAIA",
    title: "MAIA Biotechnology, Inc.",
  },
  {
    ticker: "TCBP",
    title: "TC BioPharm (Holdings) plc",
  },
  {
    ticker: "AQUB",
    title: "Aquarius II Acquisition Corp.",
  },
  {
    ticker: "HAC",
    title: "Hash Space Acquisition Corp",
  },
  {
    ticker: "TMTC",
    title: "TMT Acquisition Corp.",
  },
  {
    ticker: "TF",
    title: "Transfix Holdings, Inc.",
  },
  {
    ticker: "ROCL",
    title: "Roth CH Acquisition V Co.",
  },
  {
    ticker: "UBXG",
    title: "U-BX Technology Ltd.",
  },
  {
    ticker: "EMLD",
    title: "FTAC Emerald Acquisition Corp.",
  },
  {
    ticker: "SHUA",
    title: "SHUAA Partners Acquisition Corp I",
  },
  {
    ticker: "PPYA",
    title: "Papaya Growth Opportunity Corp. I",
  },
  {
    ticker: "IPX",
    title: "IPERIONX Ltd",
  },
  {
    ticker: "ERESU",
    title: "East Resources Acquisition Co",
  },
  {
    ticker: "GBTG",
    title: "Global Business Travel Group, Inc.",
  },
  {
    ticker: "CHSN",
    title: "Chanson International Holding",
  },
  {
    ticker: "BDS",
    title: "Building DreamStar Technology Inc.",
  },
  {
    ticker: "FSRD",
    title: "Fast Radius, Inc.",
  },
  {
    ticker: "AQU",
    title: "Aquaron Acquisition Corp.",
  },
  {
    ticker: "NMAI",
    title: "Nuveen Multi-Asset Income Fund",
  },
  {
    ticker: "JJOC",
    title: "JJ Opportunity Corp.",
  },
  {
    ticker: "BIOS",
    title: "BioPlus Acquisition Corp.",
  },
  {
    ticker: "FGLD",
    title: "Franklin Templeton Holdings Trust",
  },
  {
    ticker: "NVX",
    title: "NOVONIX Ltd",
  },
  {
    ticker: "VCXB",
    title: "10X Capital Venture Acquisition Corp. III",
  },
  {
    ticker: "ASPX",
    title: "Aspirational Consumer Lifestyle Corp. II",
  },
  {
    ticker: "IVCP",
    title: "Swiftmerge Acquisition Corp.",
  },
  {
    ticker: "PEPG",
    title: "PepGen Inc.",
  },
  {
    ticker: "EOCO",
    title: "Elliott Opportunity I Corp.",
  },
  {
    ticker: "PICS",
    title: "PicS Ltd.",
  },
  {
    ticker: "GROV",
    title: "Grove Collaborative Holdings, Inc.",
  },
  {
    ticker: "IDR",
    title: "Idaho Strategic Resources, Inc.",
  },
  {
    ticker: "GJP",
    title:
      "STRATS(SM) TRUST FOR DOMINION RESOURCES, INC. SECURITIES, SERIES 2005-6",
  },
  {
    ticker: "GLTR",
    title: "abrdn Precious Metals Basket ETF Trust",
  },
  {
    ticker: "BPYPM",
    title: "Brookfield Property Partners L.P.",
  },
  {
    ticker: "WNFT",
    title: "GOFF, CORP",
  },
  {
    ticker: "LPCN",
    title: "Lipocine Inc.",
  },
  {
    ticker: "KBSG",
    title: "KBS Growth & Income REIT, Inc.",
  },
  {
    ticker: "EDGS",
    title: "Edge Data Solutions, Inc.",
  },
  {
    ticker: "VNMT",
    title: "Vemanti Group, Inc.",
  },
  {
    ticker: "KSCP",
    title: "Knightscope, Inc.",
  },
  {
    ticker: "SMST",
    title: "SmartStop Self Storage REIT, Inc.",
  },
  {
    ticker: "AWYS",
    title: "Awaysis Capital, Inc.",
  },
  {
    ticker: "PCM",
    title: "PCM FUND, INC.",
  },
  {
    ticker: "ACRG",
    title: "Standard Metals Processing, Inc.",
  },
  {
    ticker: "SASI",
    title: "SIGMA LABS, INC.",
  },
  {
    ticker: "NVAC",
    title: "NorthView Acquisition Corp",
  },
  {
    ticker: "BRSH",
    title: "Bruush Oral Care Inc.",
  },
  {
    ticker: "MTVC",
    title: "Motive Capital Corp II",
  },
  {
    ticker: "HTCR",
    title: "HeartCore Enterprises, Inc.",
  },
  {
    ticker: "LBGJ",
    title: "Li Bang International Corp Inc.",
  },
  {
    ticker: "WLGS",
    title: "WANG & LEE GROUP, Inc.",
  },
  {
    ticker: "FIP",
    title: "FTAI Infrastructure LLC",
  },
  {
    ticker: "MPTI",
    title: "M-tron Industries, Inc.",
  },
  {
    ticker: "BLKS",
    title: "BLACKSTONE PRODUCTS, INC.",
  },
  {
    ticker: "QBTS",
    title: "D-Wave Quantum Inc.",
  },
  {
    ticker: "ENDI",
    title: "ENDI Corp.",
  },
  {
    ticker: "KAL",
    title: "Kalera Public Ltd Co",
  },
  {
    ticker: "CMCA",
    title: "Capitalworks Emerging Markets Acquisition Corp",
  },
  {
    ticker: "WODA",
    title: "WODA Corp",
  },
  {
    ticker: "EMCG",
    title: "Embrace Change Acquisition Corp.",
  },
  {
    ticker: "CRCL",
    title: "Circle Internet Finance Public Ltd Co",
  },
  {
    ticker: "WEL",
    title: "Integrated Wellness Acquisition Corp",
  },
  {
    ticker: "ICGC",
    title: "Igniting Consumer Growth Acquisition Co Ltd",
  },
  {
    ticker: "ANTX",
    title: "AN2 Therapeutics, Inc.",
  },
  {
    ticker: "AAGR",
    title: "African Agriculture, Inc.",
  },
  {
    ticker: "SESU",
    title: "SensaSure Technologies, Inc.",
  },
  {
    ticker: "TOP",
    title: "Zhong Yang Financial Group Ltd",
  },
  {
    ticker: "VUSO",
    title: "Virtuoso Acquisition Corp. 2",
  },
  {
    ticker: "ARAC",
    title: "Artemis Acquisition Corp./DE",
  },
  {
    ticker: "BLEU",
    title: "bleuacacia ltd",
  },
  {
    ticker: "ATWO",
    title: "Acies Acquisition Corp. II",
  },
  {
    ticker: "TGAA",
    title: "Target Global Acquisition I Corp.",
  },
  {
    ticker: "ACMSY",
    title: "Accustem Sciences Inc.",
  },
  {
    ticker: "MLST",
    title: "Millstreet Capital Acquisition Corp.",
  },
  {
    ticker: "ARMV",
    title: "Arma Services Inc",
  },
  {
    ticker: "KNTK",
    title: "Kinetik Holdings Inc.",
  },
  {
    ticker: "AMTD",
    title: "AMTD IDEA GROUP",
  },
  {
    ticker: "FROPX",
    title: "Flat Rock Opportunity Fund",
  },
  {
    ticker: "HWNI",
    title: "HIGH WIRE NETWORKS, INC.",
  },
  {
    ticker: "KTH",
    title: "STRUCTURED PRODUCTS CORP CORTS TR FOR PECO ENERGY CAP TR III",
  },
  {
    ticker: "TDRK",
    title: "TIDEROCK COMPANIES, INC.",
  },
  {
    ticker: "META",
    title: "Meta Platforms, Inc.",
  },
  {
    ticker: "GLIV",
    title: "Grayscale Livepeer Trust (LPT)",
  },
  {
    ticker: "GBAT",
    title: "Grayscale Basic Attention Token Trust (BAT)",
  },
  {
    ticker: "VAQA",
    title: "Vector Acquisition Corp III",
  },
  {
    ticker: "MEGI",
    title: "MainStay CBRE Global Infrastructure Megatrends Fund",
  },
  {
    ticker: "GMFI",
    title: "Aetherium Acquisition Corp",
  },
  {
    ticker: "SGHL",
    title: "Signal Hill Acquisition Corp.",
  },
  {
    ticker: "TYTP",
    title: "TypTap Insurance Group, Inc.",
  },
  {
    ticker: "VOXR",
    title: "Vox Royalty Corp.",
  },
  {
    ticker: "CEAC",
    title: "CE Energy Acquisition Corp.",
  },
  {
    ticker: "RGG",
    title: "Rue Gilt Groupe, Inc.",
  },
  {
    ticker: "IE",
    title: "Ivanhoe Electric Inc.",
  },
  {
    ticker: "PSGI",
    title: "Perfect Solutions Group, Inc.",
  },
  {
    ticker: "PFHC",
    title: "ProFrac Holding Corp.",
  },
  {
    ticker: "IFIN",
    title: "InFinT Acquisition Corp",
  },
  {
    ticker: "YBZN",
    title: "Yi Po International Holdings Ltd",
  },
  {
    ticker: "WLDS",
    title: "Wearable Devices Ltd.",
  },
  {
    ticker: "BLTE",
    title: "BELITE BIO, INC",
  },
  {
    ticker: "ALOR",
    title: "ALSP Orchid Acquisition Corp I",
  },
  {
    ticker: "MURF",
    title: "Murphy Canyon Acquisition Corp.",
  },
  {
    ticker: "OMCL",
    title: "OMNICELL, Inc",
  },
  {
    ticker: "LZGI",
    title: "LZG INTERNATIONAL, INC.",
  },
  {
    ticker: "MADL",
    title: "MAN AHL DIVERSIFIED I LP",
  },
  {
    ticker: "CEAD",
    title: "CEA Industries Inc.",
  },
  {
    ticker: "NUTX",
    title: "Nutex Health, Inc.",
  },
  {
    ticker: "AGSS",
    title: "AMERIGUARD SECURITY SERVICES, INC.",
  },
  {
    ticker: "ODRS",
    title: "Outdoor Specialty Products, Inc.",
  },
  {
    ticker: "GWAV",
    title: "Greenwave Technology Solutions, Inc.",
  },
  {
    ticker: "LVVR",
    title: "Lightstone Value Plus REIT III, Inc.",
  },
  {
    ticker: "CVMCA",
    title: "Sila Realty Trust, Inc.",
  },
  {
    ticker: "FXC",
    title: "Invesco CurrencyShares Canadian Dollar Trust",
  },
  {
    ticker: "DBV",
    title: "Invesco DB G10 Currency Harvest Fund",
  },
  {
    ticker: "GJS",
    title: "STRATS(SM) Trust for Goldman Sachs Group Securities, Series 2006-2",
  },
  {
    ticker: "NEWYY",
    title: "Puxin Ltd",
  },
  {
    ticker: "NICHX",
    title: "Variant Alternative Income Fund",
  },
  {
    ticker: "EAAS",
    title: "Redaptive, Inc.",
  },
  {
    ticker: "PBLT",
    title: "PurposeBuilt Brands, Inc.",
  },
  {
    ticker: "WEIX",
    title: "Dynamic Shares Trust",
  },
  {
    ticker: "RVSN",
    title: "Rail Vision Ltd.",
  },
  {
    ticker: "EVVL",
    title: "Evil Empire Designs, Inc.",
  },
  {
    ticker: "IHITA",
    title: "Invesco High Income 2024 Target Term Fund",
  },
  {
    ticker: "CNXA",
    title: "Connexa Sports Technologies Inc.",
  },
  {
    ticker: "CDTG",
    title: "CDT Environmental Technology Investment Holdings Ltd",
  },
  {
    ticker: "SCIT",
    title: "Sancai Holding Group Ltd.",
  },
  {
    ticker: "PNYG",
    title: "Pony Group Inc.",
  },
  {
    ticker: "RTVA",
    title: "Artiva Biotherapeutics, Inc.",
  },
  {
    ticker: "LFTRU",
    title: "Lefteris Acquisition Corp.",
  },
  {
    ticker: "WEFCX",
    title: "Wildermuth Fund",
  },
  {
    ticker: "SKYX",
    title: "SKYX Platforms Corp.",
  },
  {
    ticker: "GLDM",
    title: "World Gold Trust",
  },
  {
    ticker: "RMPL",
    title: "RiverNorth Specialty Finance Corp",
  },
  {
    ticker: "VCMIX",
    title: "Versus Capital Multi-Manager Real Estate Income Fund LLC",
  },
  {
    ticker: "TIPLX",
    title: "Bluerock Total Income (plus) Real Estate Fund",
  },
  {
    ticker: "GVBT",
    title: "GREEN VISION BIOTECHNOLOGY CORP.",
  },
  {
    ticker: "ELTX",
    title: "Elicio Therapeutics, Inc.",
  },
  {
    ticker: "MDVP",
    title: "MED SPA VACATIONS INC.",
  },
  {
    ticker: "ACON",
    title: "Aclarion, Inc.",
  },
  {
    ticker: "LGCP",
    title: "Legion Capital Corp",
  },
  {
    ticker: "SATT",
    title: "SATIVUS TECH CORP.",
  },
  {
    ticker: "ICR-PA",
    title: "InPoint Commercial Real Estate Income, Inc.",
  },
  {
    ticker: "NOWG",
    title: "Nowigence Inc.",
  },
  {
    ticker: "NMCO",
    title: "Nuveen Municipal Credit Opportunities Fund",
  },
  {
    ticker: "SHPH",
    title: "Shuttle Pharmaceuticals Holdings, Inc.",
  },
  {
    ticker: "STSS",
    title: "Sharps Technology Inc.",
  },
  {
    ticker: "CWPE",
    title: "CW Petroleum Corp",
  },
  {
    ticker: "WEIDY",
    title: "Weidai Ltd.",
  },
  {
    ticker: "BTOG",
    title: "BIT ORIGIN Ltd",
  },
  {
    ticker: "CEDAX",
    title: "BlueBay Destra International Event-Driven Credit Fund",
  },
  {
    ticker: "BITW",
    title: "Bitwise 10 Crypto Index Fund",
  },
  {
    ticker: "CCLV",
    title: "Karbon-X Corp.",
  },
  {
    ticker: "KPNT",
    title: "Kepuni Holdings Inc.",
  },
  {
    ticker: "ACKIT",
    title: "ACKRELL SPAC Partners I Co.",
  },
  {
    ticker: "ZGHB",
    title: "China Eco-Materials Group Co. Ltd",
  },
  {
    ticker: "BYNO",
    title: "byNordic Acquisition Corp",
  },
  {
    ticker: "SBIG",
    title: "SpringBig Holdings, Inc.",
  },
  {
    ticker: "OST",
    title: "Ostin Technology Group Co., Ltd.",
  },
  {
    ticker: "LLAP",
    title: "Terran Orbital Corp",
  },
  {
    ticker: "GDVW",
    title: "Grandview Capital Acquisition Corp.",
  },
  {
    ticker: "NBXG",
    title: "Neuberger Berman Next Generation Connectivity Fund Inc.",
  },
  {
    ticker: "QNZL",
    title: "Quinzel Acquisition Co",
  },
  {
    ticker: "EXAC",
    title: "Excolere Acquisition Corp.",
  },
  {
    ticker: "ZING",
    title: "FTAC ZEUS ACQUISITION CORP.",
  },
  {
    ticker: "SCIB",
    title: "Science Strategic Acquisition Corp. Bravo",
  },
  {
    ticker: "RCDA",
    title: "Red Cell DRM Acquisition Corp.",
  },
  {
    ticker: "OACC",
    title: "Oaktree Acquisition Corp. III",
  },
  {
    ticker: "SAI",
    title: "SAI.TECH Global Corp",
  },
  {
    ticker: "BFH",
    title: "BREAD FINANCIAL HOLDINGS, INC.",
  },
  {
    ticker: "GEMZ",
    title: "Gemxx Corp.",
  },
  {
    ticker: "XFCI",
    title: "XTREME FIGHTING CHAMPIONSHIPS, INC.",
  },
  {
    ticker: "V",
    title: "VISA INC.",
  },
  {
    ticker: "ACRU",
    title: "AmeriCrew Inc.",
  },
  {
    ticker: "HLCO",
    title: "Healing Co Inc.",
  },
  {
    ticker: "WLY",
    title: "JOHN WILEY & SONS, INC.",
  },
  {
    ticker: "MGLD",
    title: "Marygold Companies, Inc.",
  },
  {
    ticker: "PARA",
    title: "Paramount Global",
  },
  {
    ticker: "BCAN",
    title: "BYND CANNASOFT ENTERPRISES INC.",
  },
  {
    ticker: "KWIK",
    title: "KwikClick, Inc.",
  },
  {
    ticker: "BGXX",
    title: "Bright Green Corp",
  },
  {
    ticker: "NUBI",
    title: "Nubia Brand International Corp.",
  },
  {
    ticker: "TCGI",
    title: "Cannaisseur Group Inc.",
  },
  {
    ticker: "SATL",
    title: "Satellogic Inc.",
  },
  {
    ticker: "NVCT",
    title: "Nuvectis Pharma, Inc.",
  },
  {
    ticker: "SGHC",
    title: "Super Group (SGHC) Ltd",
  },
  {
    ticker: "ZTOP",
    title: "Zi Toprun Acquisition Corp.",
  },
  {
    ticker: "MAAQ",
    title: "Mana Capital Acquisition Corp.",
  },
  {
    ticker: "MNTN",
    title: "Everest Consolidator Acquisition Corp",
  },
  {
    ticker: "BBUC",
    title: "Brookfield Business Corp",
  },
  {
    ticker: "NWAC",
    title: "Namaste World Acquisition Corp",
  },
  {
    ticker: "TGR",
    title: "Kimbell Tiger Acquisition Corp",
  },
  {
    ticker: "GEEX",
    title: "Games & Esports Experience Acquisition Corp.",
  },
  {
    ticker: "GFLD",
    title: "Gefen Landa Acquisition Corp.",
  },
  {
    ticker: "ALTT",
    title: "Altitude Acquisition Corp. III",
  },
  {
    ticker: "TTO",
    title: "Tiga Acquisition Corp. II",
  },
  {
    ticker: "CEDA",
    title: "Cedarlake Acquisition Corp.",
  },
  {
    ticker: "SMSA",
    title: "Samsara Vision, Inc",
  },
  {
    ticker: "FRGE",
    title: "Forge Global Holdings, Inc.",
  },
  {
    ticker: "SESG",
    title: "Sprott ESG Gold ETF",
  },
  {
    ticker: "EHAB",
    title: "Enhabit, Inc.",
  },
  {
    ticker: "JIA",
    title: "Daojia Ltd",
  },
  {
    ticker: "NAAS",
    title: "NaaS Technology Inc.",
  },
  {
    ticker: "GEHI",
    title: "RYB Education, Inc.",
  },
  {
    ticker: "BSEC",
    title: "BIOSECURITY TECHNOLOGY, INC.",
  },
  {
    ticker: "EZAGOO",
    title: "Ezagoo Ltd",
  },
  {
    ticker: "GOXS",
    title: "Goxus, Inc",
  },
  {
    ticker: "RIT",
    title: "RODIN INCOME TRUST, INC.",
  },
  {
    ticker: "INTS",
    title: "INTENSITY THERAPEUTICS, INC.",
  },
  {
    ticker: "LNW",
    title: "Light & Wonder, Inc.",
  },
  {
    ticker: "YOSH",
    title: "Yoshiharu Global Co.",
  },
  {
    ticker: "FRZA",
    title: "Forza X1, Inc.",
  },
  {
    ticker: "YOTA",
    title: "Yotta Acquisition Corp",
  },
  {
    ticker: "TBMCU",
    title: "Trailblazer Merger Corp I",
  },
  {
    ticker: "VMCA",
    title: "Valuence Merger Corp. I",
  },
  {
    ticker: "ACAX",
    title: "Alset Capital Acquisition Corp.",
  },
  {
    ticker: "FGMC",
    title: "FG Merger Corp.",
  },
  {
    ticker: "AORT",
    title: "ARTIVION, INC.",
  },
  {
    ticker: "EP",
    title: "EMPIRE PETROLEUM CORP",
  },
  {
    ticker: "MVCO",
    title: "Metavesco, Inc.",
  },
  {
    ticker: "LHTV",
    title: "Lightstone Value Plus REIT I, Inc.",
  },
  {
    ticker: "SHEL",
    title: "Shell plc",
  },
  {
    ticker: "SGLY",
    title: "Singularity Future Technology Ltd.",
  },
  {
    ticker: "HWTR",
    title: "HFactor, Inc.",
  },
  {
    ticker: "FXB",
    title: "Invesco CurrencyShares British Pound Sterling Trust",
  },
  {
    ticker: "CHSCP",
    title: "CHS INC",
  },
  {
    ticker: "NRUC",
    title: "NATIONAL RURAL UTILITIES COOPERATIVE FINANCE CORP /DC/",
  },
  {
    ticker: "EEH",
    title: "SWEDISH EXPORT CREDIT CORP /SWED/",
  },
  {
    ticker: "BBOP",
    title: "BeBop Channel Corp",
  },
  {
    ticker: "REVB",
    title: "REVELATION BIOSCIENCES, INC.",
  },
  {
    ticker: "WEST",
    title: "Westrock Coffee Holdings, LLC",
  },
  {
    ticker: "ONFO",
    title: "Onfolio Holdings, Inc",
  },
  {
    ticker: "GAMC",
    title: "Golden Arrow Merger Corp.",
  },
  {
    ticker: "PDPG",
    title: "Performance Drink Group, Inc.",
  },
  {
    ticker: "BHM",
    title: "Bluerock Homes Trust, Inc.",
  },
  {
    ticker: "DECA",
    title: "Denali Capital Acquisition Corp.",
  },
  {
    ticker: "BGAC",
    title: "Biotech Group Acquisition Corp",
  },
  {
    ticker: "OSA",
    title: "LAAA Merger Corp.",
  },
  {
    ticker: "SOSH",
    title: "SOS Hydration Inc.",
  },
  {
    ticker: "AZ",
    title: "A2Z Smart Technologies Corp",
  },
  {
    ticker: "WAVS",
    title: "Western Acquisition Ventures Corp.",
  },
  {
    ticker: "MTEK",
    title: "Maris Tech Ltd.",
  },
  {
    ticker: "SUNF",
    title: "Sunfire Acquisition Corp Ltd",
  },
  {
    ticker: "SPCM",
    title: "Sound Point Acquisition Corp I, Ltd",
  },
  {
    ticker: "SBP",
    title: "Specialty Building Products, Inc.",
  },
  {
    ticker: "DEFY",
    title: "Agora Digital Holdings, Inc.",
  },
  {
    ticker: "ALEF",
    title: "Aleph Group, Inc",
  },
  {
    ticker: "ROAR",
    title: "Impact Shares Climate Risk Reinsurance Corp",
  },
  {
    ticker: "ACAB",
    title: "Atlantic Coastal Acquisition Corp. II",
  },
  {
    ticker: "GUG",
    title: "Guggenheim Active Allocation Fund",
  },
  {
    ticker: "MIO",
    title: "Pioneer Municipal High Income Opportunities Fund, Inc.",
  },
  {
    ticker: "LVAC",
    title: "LAVA Medtech Acquisition Corp.",
  },
  {
    ticker: "BTRY",
    title: "Clarios International Inc.",
  },
  {
    ticker: "SCIC",
    title: "Science Strategic Acquisition Corp. Charlie",
  },
  {
    ticker: "SCUA",
    title: "Sculptor Acquisition Corp I",
  },
  {
    ticker: "SAGA",
    title: "Sagaliam Acquisition Corp",
  },
  {
    ticker: "RDXX",
    title: "Roman DBDR Tech Acquisition Corp. III",
  },
  {
    ticker: "ALTP",
    title: "Altamont Pharma Acquisition Corp.",
  },
  {
    ticker: "TWCG",
    title: "Galliot Acquisition Corp.",
  },
  {
    ticker: "BIOR",
    title: "BIORA THERAPEUTICS, INC.",
  },
  {
    ticker: "EMWP",
    title: "Eros STX Global Corp",
  },
  {
    ticker: "LGMK",
    title: "LogicMark, Inc.",
  },
  {
    ticker: "ASCIX",
    title: "Angel Oak Strategic Credit Fund",
  },
  {
    ticker: "CPRDX",
    title: "Clarion Partners Real Estate Income Fund Inc.",
  },
  {
    ticker: "LAIXY",
    title: "LAIX Inc.",
  },
  {
    ticker: "HKIT",
    title: "HiTek Global Inc.",
  },
  {
    ticker: "COTRP",
    title: "STRUCTURED PRODUCTS CORTS TRUST FOR JC PENNEY DEBENTURES",
  },
  {
    ticker: "LVVP",
    title: "Lightstone Value Plus REIT V, Inc.",
  },
  {
    ticker: "UNL",
    title: "United States 12 Month Natural Gas Fund, LP",
  },
  {
    ticker: "LVDW",
    title: "LiquidValue Development Inc.",
  },
  {
    ticker: "TNT",
    title: "Tenet Fintech Group Inc.",
  },
  {
    ticker: "GROUY",
    title: "Grafton Group plc",
  },
  {
    ticker: "POET",
    title: "POET TECHNOLOGIES INC.",
  },
  {
    ticker: "ANGH",
    title: "Anghami Inc",
  },
  {
    ticker: "YMAT",
    title: "J-Star Holding Co., Ltd.",
  },
  {
    ticker: "SWVL",
    title: "Swvl Holdings Corp",
  },
  {
    ticker: "BNOW",
    title: "Boon Industries, Inc.",
  },
  {
    ticker: "FOGO",
    title: "Fogo Hospitality, Inc.",
  },
  {
    ticker: "MOGL",
    title: "Mobile Global Esports, Inc.",
  },
  {
    ticker: "FEAM",
    title: "5E Advanced Materials, Inc.",
  },
  {
    ticker: "PMEC",
    title: "Primech Holdings Ltd",
  },
  {
    ticker: "SVRE",
    title: "SaverOne 2014 Ltd.",
  },
  {
    ticker: "BWAQ",
    title: "Blue World Acquisition Corp",
  },
  {
    ticker: "CFSB",
    title: "CFSB Bancorp, Inc. /MA/",
  },
  {
    ticker: "TLGY",
    title: "TLGY ACQUISITION CORP",
  },
  {
    ticker: "SIGQ",
    title: "Sieger Healthcare Acquisition Corp",
  },
  {
    ticker: "APXI",
    title: "APx Acquisition Corp. I",
  },
  {
    ticker: "TJH",
    title: "Thomas James Homes, Inc.",
  },
  {
    ticker: "EVSD",
    title: "Everside Health Group, Inc.",
  },
  {
    ticker: "GGAA",
    title: "Genesis Growth Tech Acquisition Corp.",
  },
  {
    ticker: "CHEA",
    title: "Chenghe Acquisition Co.",
  },
  {
    ticker: "JGGC",
    title: "Jaguar Global Growth Corp I",
  },
  {
    ticker: "ESAC",
    title: "ESGEN Acquisition Corp",
  },
  {
    ticker: "STIX",
    title: "Alpha Capital Holdco Co",
  },
  {
    ticker: "GETY",
    title: "VECTOR HOLDING, LLC",
  },
  {
    ticker: "EVGR",
    title: "Evergreen Corp",
  },
  {
    ticker: "TETE",
    title: "Technology & Telecommunication Acquisition Corp",
  },
  {
    ticker: "SKGR",
    title: "SK Growth Opportunities Corp",
  },
  {
    ticker: "WTMA",
    title: "Welsbach Technology Metals Acquisition Corp.",
  },
  {
    ticker: "HYPB",
    title: "Hypebeast Ltd",
  },
  {
    ticker: "RICH",
    title: "RichSpace Acquisition Corp.",
  },
  {
    ticker: "DCRE",
    title: "Decarbonization Plus Acquisition Corp V",
  },
  {
    ticker: "RJAC",
    title: "Jackson Acquisition Co",
  },
  {
    ticker: "PLAO",
    title: "Patria Latin American Opportunity Acquisition Corp.",
  },
  {
    ticker: "HYIV",
    title: "Haymaker Acquisition Corp. IV",
  },
  {
    ticker: "BTCW",
    title: "WisdomTree Bitcoin Trust",
  },
  {
    ticker: "SCEM",
    title: "Sachem Acquisition Corp.",
  },
  {
    ticker: "EGAC",
    title: "Europa Growth Acquisition Co",
  },
  {
    ticker: "TENK",
    title: "TenX Keane Acquisition",
  },
  {
    ticker: "GNS",
    title: "Genius Group Ltd",
  },
  {
    ticker: "MLTX",
    title: "MoonLake Immunotherapeutics",
  },
  {
    ticker: "SWGC",
    title: "Stillwater Growth Corp. I",
  },
  {
    ticker: "CATL",
    title: "Category Leader Partner Corp 1",
  },
  {
    ticker: "HCVI",
    title: "Hennessy Capital Investment Corp. VI",
  },
  {
    ticker: "HNVR",
    title: "Hanover Bancorp, Inc. /NY",
  },
  {
    ticker: "CTKYY",
    title: "CooTek(Cayman)Inc.",
  },
  {
    ticker: "BIGN",
    title: "BIGEON CORP.",
  },
  {
    ticker: "TAKAX",
    title: "Carlyle Tactical Private Credit Fund",
  },
  {
    ticker: "MGOM",
    title: "Migom Global Corp.",
  },
  {
    ticker: "PSOIX",
    title: "Palmer Square Opportunistic Income Fund",
  },
  {
    ticker: "BDRY",
    title: "ETF Managers Group Commodity Trust I",
  },
  {
    ticker: "GSGG",
    title: "GSG GROUP INC.",
  },
  {
    ticker: "CMCZ",
    title: "Curtis Mathes Corp",
  },
  {
    ticker: "VXI",
    title: "5.11 ABR CORP.",
  },
  {
    ticker: "CNRLX",
    title: "City National Rochdale Select Strategies Fund",
  },
  {
    ticker: "HIGR",
    title: "Hi-Great Group Holding Co",
  },
  {
    ticker: "SST",
    title: "System1, Inc.",
  },
  {
    ticker: "ALEH",
    title: "ALE Group Holding Ltd",
  },
  {
    ticker: "FHP",
    title: "Freehold Properties, Inc.",
  },
  {
    ticker: "KBTC",
    title: "Kryptoin Bitcoin ETF Trust",
  },
  {
    ticker: "YCQH",
    title: "YCQH Agricultural Technology Co. Ltd",
  },
  {
    ticker: "QNGY",
    title: "Quanergy Systems, Inc.",
  },
  {
    ticker: "HDLS",
    title: "Hub Deals Corp.",
  },
  {
    ticker: "CITY",
    title: "AVALON CORRECTIONAL SERVICES INC",
  },
  {
    ticker: "AREN",
    title: "Arena Group Holdings, Inc.",
  },
  {
    ticker: "WTW",
    title: "WILLIS TOWERS WATSON PLC",
  },
  {
    ticker: "SPRJ",
    title: "AVRA INC.",
  },
  {
    ticker: "SIVR",
    title: "abrdn Silver ETF Trust",
  },
  {
    ticker: "EXRO",
    title: "EXRO TECHNOLOGIES INC.",
  },
  {
    ticker: "RAPH",
    title: "Raphael Pharmaceutical Inc.",
  },
  {
    ticker: "GJO",
    title:
      "STRATS SM TRUST FOR WAL-MART STORES, INC. SECURITIES, SERIES 2005-4",
  },
  {
    ticker: "IAUM",
    title: "iShares Gold Trust Micro",
  },
  {
    ticker: "FBOX",
    title: "Fit Boxx Holdings Ltd",
  },
  {
    ticker: "NBLD",
    title: "Nestbuilder.com Corp.",
  },
  {
    ticker: "XGEIX",
    title: "Guggenheim Energy & Income Fund",
  },
  {
    ticker: "NRSAX",
    title: "NEXPOINT REAL ESTATE STRATEGIES FUND",
  },
  {
    ticker: "XFEAX",
    title: "FS Energy Total Return Fund",
  },
  {
    ticker: "SMGE",
    title: "Sigmata Electronics, Inc.",
  },
  {
    ticker: "WETH",
    title: "Wetouch Technology Inc.",
  },
  {
    ticker: "AZIC",
    title: "Azar International Corp.",
  },
  {
    ticker: "LOHA",
    title: "LOHA CO. LTD",
  },
  {
    ticker: "GMWX",
    title: "GameWorks, Inc.",
  },
  {
    ticker: "GABC",
    title: "GERMAN AMERICAN BANCORP, INC.",
  },
  {
    ticker: "DRTS",
    title: "Alpha Tau Medical Ltd.",
  },
  {
    ticker: "ALLG",
    title: "Allego N.V.",
  },
  {
    ticker: "NSTS",
    title: "NSTS Bancorp, Inc.",
  },
  {
    ticker: "DZGH",
    title: "JJY Holding Group",
  },
  {
    ticker: "ALOHA",
    title: "Cariloha, Inc.",
  },
  {
    ticker: "VHNA",
    title: "Vahanna Tech Edge Acquisition I Corp.",
  },
  {
    ticker: "PSNY",
    title: "Polestar Automotive Holding UK PLC",
  },
  {
    ticker: "PGRM",
    title: "Panagram Capital, LLC",
  },
  {
    ticker: "INRX",
    title: "Intrinsic Medicine, Inc.",
  },
  {
    ticker: "VRAX",
    title: "Virax Biolabs Group Ltd",
  },
  {
    ticker: "LDSP",
    title: "Sports & Health Tech Acquisition Corp",
  },
  {
    ticker: "TDAI",
    title: "Thornburg Durable Allocation & Income Trust",
  },
  {
    ticker: "NFTT",
    title: "Neo Technology Acquisition Corp",
  },
  {
    ticker: "PHCC",
    title: "Preston Hollow Community Capital, Inc.",
  },
  {
    ticker: "ROTK",
    title: "Rotech Healthcare Holdings Inc.",
  },
  {
    ticker: "SPTA",
    title: "Sparta Healthcare Acquisition Corp.",
  },
  {
    ticker: "RMGD",
    title: "RMG Acquisition Corp. IV",
  },
  {
    ticker: "RCPI",
    title: "Reverence Acquisition Corp.",
  },
  {
    ticker: "BRNI",
    title: "Beroni Group Ltd",
  },
  {
    ticker: "SMFL",
    title: "SMART FOR LIFE, INC.",
  },
  {
    ticker: "PRDT",
    title: "Peridot Acquisition Corp. III",
  },
  {
    ticker: "UNOO",
    title: "1Sharpe Acquisition Corp.",
  },
  {
    ticker: "RFAC",
    title: "RF Acquisition Corp.",
  },
  {
    ticker: "DXYZ",
    title: "Destiny Tech100 Inc.",
  },
  {
    ticker: "OSAA",
    title: "OS Acquisition Corp.",
  },
  {
    ticker: "APA",
    title: "APA Corp",
  },
  {
    ticker: "TCPG",
    title: "Transformational CPG Acquisition Corp.",
  },
  {
    ticker: "CFFS",
    title: "CF Acquisition Corp. VII",
  },
  {
    ticker: "OUNZ",
    title: "VanEck Merk Gold Trust",
  },
  {
    ticker: "FSPR",
    title: "Four Springs Capital Trust",
  },
  {
    ticker: "JW",
    title: "Justworks, Inc.",
  },
  {
    ticker: "VCOR",
    title: "VISIBER57 CORP.",
  },
  {
    ticker: "SLPA",
    title: "Sleepaid Holding Co.",
  },
  {
    ticker: "TMNA",
    title: "TINGO, INC.",
  },
  {
    ticker: "RYTM",
    title: "RHYTHM PHARMACEUTICALS, INC.",
  },
  {
    ticker: "MDV",
    title: "MODIV INC.",
  },
  {
    ticker: "TMIN",
    title: "TRENDMAKER INC. LTD.",
  },
  {
    ticker: "BXT",
    title: "United States Bitcoin & Treasury Investment Trust",
  },
  {
    ticker: "NEOV",
    title: "NeoVolta Inc.",
  },
  {
    ticker: "GXLM",
    title: "Grayscale Stellar Lumens Trust (XLM)",
  },
  {
    ticker: "ATER",
    title: "Aterian, Inc.",
  },
  {
    ticker: "STR",
    title: "Sitio Royalties Corp.",
  },
  {
    ticker: "DECI",
    title: "DECIPHER BIOSCIENCES, INC.",
  },
  {
    ticker: "LENDX",
    title: "Stone Ridge Trust V",
  },
  {
    ticker: "PPLT",
    title: "abrdn Platinum ETF Trust",
  },
  {
    ticker: "EGIO",
    title: "Edgio, Inc.",
  },
  {
    ticker: "GNLX",
    title: "GENELUX CORP",
  },
  {
    ticker: "NIC",
    title: "NICOLET BANKSHARES INC",
  },
  {
    ticker: "OBE",
    title: "OBSIDIAN ENERGY LTD.",
  },
  {
    ticker: "GJH",
    title: "STRATS SM TRUST FOR U S CELL CORP SEC SERIES 2004 6",
  },
  {
    ticker: "TRDE",
    title: "TRADESTATION GROUP INC",
  },
  {
    ticker: "AXIN",
    title: "AiXin Life International, Inc.",
  },
  {
    ticker: "SOV",
    title: "Santander Holdings USA, Inc.",
  },
  {
    ticker: "SAPMD",
    title: "SAIPEM S P A /FI",
  },
  {
    ticker: "DEFT",
    title: "Defi Technologies, Inc.",
  },
  {
    ticker: "PACL",
    title: "Pomelo Acquisition Corp Ltd",
  },
  {
    ticker: "AIMA",
    title: "Aimfinity Investment Corp. I",
  },
  {
    ticker: "MOBV",
    title: "Mobiv Acquisition Corp",
  },
  {
    ticker: "RCAC",
    title: "Revelstone Capital Acquisition Corp.",
  },
  {
    ticker: "RHDM",
    title: "Rhodium Enterprises, Inc.",
  },
  {
    ticker: "AEIB",
    title: "AEI CapForce II Investment Corp",
  },
  {
    ticker: "CINC",
    title: "CinCor Pharma, Inc.",
  },
  {
    ticker: "GVAC",
    title: "Golden Ventures Acquisition Corp",
  },
  {
    ticker: "FGI",
    title: "FGI Industries Ltd.",
  },
  {
    ticker: "LSDI",
    title: "Lucy Scientific Discovery, Inc.",
  },
  {
    ticker: "FEXD",
    title: "Fintech Ecosystem Development Corp.",
  },
  {
    ticker: "GLXY",
    title: "Galaxy Digital Inc.",
  },
  {
    ticker: "BRIG",
    title: "Brigantine Acquisition Corp.",
  },
  {
    ticker: "MANA",
    title: "Grayscale Decentraland Trust (MANA)",
  },
  {
    ticker: "GLNK",
    title: "Grayscale Chainlink Trust (LINK)",
  },
  {
    ticker: "TACQ",
    title: "Tetragon Acquisition Corp I",
  },
  {
    ticker: "RADD",
    title: "CORNER GROWTH ACQUISITION CORP. 3",
  },
  {
    ticker: "BLAC",
    title: "Bellevue Life Sciences Acquisition Corp.",
  },
  {
    ticker: "ZMENY",
    title: "Zhangmen Education Inc.",
  },
  {
    ticker: "NXMH",
    title: "Next Meats Holdings, Inc.",
  },
  {
    ticker: "AFTX",
    title: "Affinia Therapeutics Inc.",
  },
  {
    ticker: "CEAI",
    title: "Creations Inc",
  },
  {
    ticker: "CRGH",
    title: "Carriage House Event Center, Inc.",
  },
  {
    ticker: "LFLY",
    title: "Leafly Holdings, Inc. /DE",
  },
  {
    ticker: "FLRZ",
    title: "F5 Finishes, Inc",
  },
  {
    ticker: "RTGN",
    title: "RetinalGenix Technologies Inc.",
  },
  {
    ticker: "GPAT",
    title: "GP-Act III Acquisition Corp.",
  },
  {
    ticker: "UFIN",
    title: "Ufin Tek Ltd",
  },
  {
    ticker: "DIAM",
    title: "Diamond Standard Trust",
  },
  {
    ticker: "RTPX",
    title: "Reinvent Technology Partners X",
  },
  {
    ticker: "SIAF",
    title: "Sino Agro Food, Inc.",
  },
  {
    ticker: "ENOV",
    title: "Enovis CORP",
  },
  {
    ticker: "FXF",
    title: "Invesco CurrencyShares Swiss Franc Trust",
  },
  {
    ticker: "ASNS",
    title: "ACTELIS NETWORKS INC",
  },
  {
    ticker: "CNCL",
    title: "CANCER CAPITAL CORP",
  },
  {
    ticker: "AGDX",
    title: "Agendia N.V.",
  },
  {
    ticker: "BGTK",
    title: "BIGtoken, Inc.",
  },
  {
    ticker: "JENGQ",
    title: "Just Energy Group Inc.",
  },
  {
    ticker: "TMQ",
    title: "Trilogy Metals Inc.",
  },
  {
    ticker: "VBNK",
    title: "VersaBank",
  },
  {
    ticker: "XALCX",
    title: "BNY Mellon Alcentra Global Multi-Strategy Credit Fund, Inc.",
  },
  {
    ticker: "TIRX",
    title: "TIAN RUIXIANG HOLDINGS LTD",
  },
  {
    ticker: "PRZO",
    title: "ParaZero Technologies Ltd.",
  },
  {
    ticker: "JCSE",
    title: "JE Cleantech Holdings Ltd",
  },
  {
    ticker: "CMRA",
    title: "Comera Life Sciences Holdings, Inc.",
  },
  {
    ticker: "BALL",
    title: "BALL Corp",
  },
  {
    ticker: "GTEN",
    title: "Gores Holdings X, Inc.",
  },
  {
    ticker: "BNRG",
    title: "Brenmiller Energy Ltd.",
  },
  {
    ticker: "AFAR",
    title: "Aura Fat Projects Acquisition Corp",
  },
  {
    ticker: "GBBK",
    title: "Global Blockchain Acquisition Corp.",
  },
  {
    ticker: "FTII",
    title: "FutureTech II Acquisition Corp.",
  },
  {
    ticker: "ASCB",
    title: "SPAC II Acquisition Corp.",
  },
  {
    ticker: "BFAC",
    title: "Battery Future Acquisition Corp.",
  },
  {
    ticker: "DESR",
    title: "DESRI Inc.",
  },
  {
    ticker: "ATEK",
    title: "Athena Technology Acquisition Corp. II",
  },
  {
    ticker: "PAXS",
    title: "PIMCO Access Income Fund",
  },
  {
    ticker: "APGC",
    title: "Apollo Strategic Growth Capital III",
  },
  {
    ticker: "HNRA",
    title: "HNR Acquisition Corp.",
  },
  {
    ticker: "BTNC",
    title: "Bridgetown 3 Holdings Ltd",
  },
  {
    ticker: "GIF",
    title: "GigCapital6, Inc.",
  },
  {
    ticker: "TWIC",
    title: "Twist Investment Corp",
  },
  {
    ticker: "ILAC",
    title: "Innovatus Life Sciences Acquisition Corp.",
  },
  {
    ticker: "MCTY",
    title: "MOTOR CITY ACQUISITION CORP.",
  },
  {
    ticker: "BRD",
    title: "Beard Energy Transition Acquisition Corp.",
  },
  {
    ticker: "LGST",
    title: "Semper Paratus Acquisition Corp",
  },
  {
    ticker: "TEVND",
    title: "Tevano Systems Holdings Inc.",
  },
  {
    ticker: "VBOC",
    title: "Viscogliosi Brothers Acquisition Corp",
  },
  {
    ticker: "FSHP",
    title: "Flag Ship Acquisition Corp",
  },
  {
    ticker: "PNAC",
    title: "Prime Number Acquisition I Corp.",
  },
  {
    ticker: "CHO",
    title: "Chobani Inc.",
  },
  {
    ticker: "NA",
    title: "Nano Labs Ltd",
  },
  {
    ticker: "LCFY",
    title: "Locafy Ltd",
  },
  {
    ticker: "LICN",
    title: "Lichen China Ltd",
  },
  {
    ticker: "ENCP",
    title: "Energem Corp",
  },
  {
    ticker: "GLS",
    title: "GELESIS HOLDINGS, INC.",
  },
  {
    ticker: "SKFG",
    title: "Stark Focus Group, Inc.",
  },
  {
    ticker: "DISTU",
    title: "Distoken Acquisition Corp",
  },
  {
    ticker: "PXMD",
    title: "PaxMedica, Inc.",
  },
  {
    ticker: "CRDO",
    title: "Credo Technology Group Holding Ltd",
  },
  {
    ticker: "SNRHU",
    title: "Senior Connect Acquisition Corp. I",
  },
  {
    ticker: "ONFA",
    title: "One 4 Art Ltd",
  },
  {
    ticker: "ZSANQ",
    title: "Zosano Pharma Corp",
  },
  {
    ticker: "VFLEX",
    title: "FIRST TRUST ALTERNATIVE OPPORTUNITIES FUND",
  },
  {
    ticker: "CDP",
    title: "CDP Holdings, Ltd",
  },
  {
    ticker: "BWV",
    title: "Blue Water Vaccines Inc.",
  },
  {
    ticker: "SDWL",
    title: "Shengda Network Technology, Inc.",
  },
  {
    ticker: "BELP",
    title: "Belpointe REIT, Inc.",
  },
  {
    ticker: "LUCY",
    title: "Innovative Eyewear Inc",
  },
  {
    ticker: "SES",
    title: "SES AI Corp",
  },
  {
    ticker: "MNAO",
    title: "MINARO CORP",
  },
  {
    ticker: "CENN",
    title: "CENNTRO ELECTRIC GROUP Ltd",
  },
  {
    ticker: "LXAM",
    title: "Lux Amber, Corp.",
  },
  {
    ticker: "SPEYX",
    title: "American Beacon Sound Point Enhanced Income Fund",
  },
  {
    ticker: "ELC",
    title: "ENTERGY LOUISIANA, LLC",
  },
  {
    ticker: "PMN",
    title: "ProMIS Neurosciences Inc.",
  },
  {
    ticker: "GJT",
    title: "STRATS(SM) Trust for Allstate Corp Securities, Series 2006-3",
  },
  {
    ticker: "DSRO",
    title: "Descrypto Holdings, Inc.",
  },
  {
    ticker: "URGP",
    title: "Urigen Pharmaceuticals, Inc.",
  },
  {
    ticker: "FRBN",
    title: "Forbion European Acquisition Corp.",
  },
  {
    ticker: "OFST",
    title: "Carbon Streaming Corp",
  },
  {
    ticker: "PORT",
    title: "Southport Acquisition Corp",
  },
  {
    ticker: "RLTY",
    title: "Cohen & Steers Real Estate Opportunities & Income Fund",
  },
  {
    ticker: "EMBC",
    title: "Embecta Corp.",
  },
  {
    ticker: "CXAC",
    title: "C5 Acquisition Corp",
  },
  {
    ticker: "UKWI",
    title: "UK Wisdom Ltd",
  },
  {
    ticker: "PRLH",
    title: "Pearl Holdings Acquisition Corp",
  },
  {
    ticker: "NFNT",
    title: "Infinite Acquisition Corp.",
  },
  {
    ticker: "SVOB",
    title: "SEVEN OAKS ACQUISITION CORP. II",
  },
  {
    ticker: "VEDU",
    title: "Visionary Education Technology Holdings Group Inc.",
  },
  {
    ticker: "MOB",
    title: "Mobilicom Ltd",
  },
  {
    ticker: "USEA",
    title: "United Maritime Corp",
  },
  {
    ticker: "DINO",
    title: "HF Sinclair Corp",
  },
  {
    ticker: "MSSA",
    title: "Metal Sky Star Acquisition Corp",
  },
  {
    ticker: "CLIN",
    title: "Clean Earth Acquisitions Corp.",
  },
  {
    ticker: "JFBR",
    title: "Jeffs' Brands Ltd",
  },
  {
    ticker: "HLVX",
    title: "HilleVax, Inc.",
  },
  {
    ticker: "EE",
    title: "Excelerate Energy, Inc.",
  },
  {
    ticker: "DUET",
    title: "DUET Acquisition Corp.",
  },
  {
    ticker: "SKYH",
    title: "Sky Harbour Group Corp",
  },
  {
    ticker: "AACP",
    title: "Aeon Acquisition Corp",
  },
  {
    ticker: "LTVA",
    title: "LTV Capital Partners I",
  },
  {
    ticker: "CREC",
    title: "Crescera Capital Acquisition Corp.",
  },
  {
    ticker: "NRGV",
    title: "Energy Vault Holdings, Inc.",
  },
  {
    ticker: "NPCT",
    title: "Nuveen Core Plus Impact Fund",
  },
  {
    ticker: "RTO",
    title: "RENTOKIL INITIAL PLC /FI",
  },
  {
    ticker: "CECL",
    title: "CECIL BANCORP INC",
  },
  {
    ticker: "RCS",
    title: "PIMCO STRATEGIC INCOME FUND, INC",
  },
  {
    ticker: "VNRX",
    title: "VOLITIONRX LTD",
  },
  {
    ticker: "DAOO",
    title: "Crypto 1 Acquisition Corp",
  },
  {
    ticker: "RENE",
    title: "Cartesian Growth Corp II",
  },
  {
    ticker: "CRBG",
    title: "Corebridge Financial, Inc.",
  },
  {
    ticker: "MARX",
    title: "Mars Acquisition Corp.",
  },
  {
    ticker: "TSIO",
    title: "Thornburg Strategic Income Opportunities Trust",
  },
  {
    ticker: "SUAC",
    title: "ShoulderUP Technology Acquisition Corp.",
  },
  {
    ticker: "ELGP",
    title: "Elate Group, Inc.",
  },
  {
    ticker: "PGFF",
    title: "Pioneer Green Farms, Inc.",
  },
  {
    ticker: "AFRI",
    title: "Forafric Global PLC",
  },
  {
    ticker: "PEGY",
    title: "Pineapple Energy Inc.",
  },
  {
    ticker: "NEAT",
    title: "Noble Education Acquisition Corp.",
  },
  {
    ticker: "MYSN",
    title: "Myson, Inc.",
  },
  {
    ticker: "FACQ",
    title: "Foresight Acquisition Corp. II",
  },
  {
    ticker: "DCFC",
    title: "Tritium DCFC Ltd",
  },
  {
    ticker: "DC",
    title: "Dakota Gold Corp.",
  },
  {
    ticker: "GOSC",
    title: "Giant Oak Acquisition Corp",
  },
  {
    ticker: "LSPR",
    title: "Larkspur Health Acquisition Corp.",
  },
  {
    ticker: "VEMC",
    title: "VELOCITY MERGER CORP.",
  },
  {
    ticker: "KVSD",
    title: "Khosla Ventures Acquisition Co. IV",
  },
  {
    ticker: "HAIA",
    title: "Healthcare AI Acquisition Corp.",
  },
  {
    ticker: "NPAC",
    title: "New Providence Acquisition Corp. III",
  },
  {
    ticker: "ARK",
    title: "5G Edge Acquisition Corp.",
  },
  {
    ticker: "ICGA",
    title: "ICG HYPERSONIC ACQUISITION CORP",
  },
  {
    ticker: "DTLA-P",
    title: "Brookfield DTLA Fund Office Trust Investor Inc.",
  },
  {
    ticker: "RESI",
    title: "Front Yard Residential Corp",
  },
  {
    ticker: "WNLV",
    title: "Winvest Group Ltd",
  },
  {
    ticker: "ZLME",
    title: "Zhanling International Ltd",
  },
  {
    ticker: "BOC",
    title: "BOSTON OMAHA Corp",
  },
  {
    ticker: "HSCS",
    title: "Heart Test Laboratories, Inc.",
  },
  {
    ticker: "XCAPX",
    title: "ACAP Strategic Fund",
  },
  {
    ticker: "UDN",
    title: "INVESCO DB US DOLLAR INDEX BEARISH FUND",
  },
  {
    ticker: "QVCD",
    title: "QVC INC",
  },
  {
    ticker: "RBRXF",
    title: "RHINO BIOTECH Ltd",
  },
  {
    ticker: "PRMI",
    title: "Priam Properties Inc.",
  },
  {
    ticker: "BIAF",
    title: "bioAffinity Technologies, Inc.",
  },
  {
    ticker: "PMFAX",
    title: "PIMCO Flexible Municipal Income Fund",
  },
  {
    ticker: "ACLX",
    title: "Arcellx, Inc.",
  },
  {
    ticker: "SOND",
    title: "Sonder Holdings Inc.",
  },
  {
    ticker: "SMR",
    title: "NUSCALE POWER Corp",
  },
  {
    ticker: "CONXU",
    title: "CONX Corp.",
  },
  {
    ticker: "KCRD",
    title: "Kindcard, Inc.",
  },
  {
    ticker: "CCCP",
    title: "Crona Corp.",
  },
  {
    ticker: "NYX",
    title: "NYIAX, INC.",
  },
  {
    ticker: "USQIX",
    title: "USQ Core Real Estate Fund",
  },
  {
    ticker: "PMTM",
    title: "Prometheum, Inc.",
  },
  {
    ticker: "FLLZ",
    title: "Fellazo Corp",
  },
  {
    ticker: "XPASX",
    title: "Peachtree Alternative Strategies Fund",
  },
  {
    ticker: "FRGT",
    title: "Freight Technologies, Inc.",
  },
  {
    ticker: "IACI",
    title: "Intrepid Acquisition Corp I",
  },
  {
    ticker: "CHG",
    title: "CORPHOUSING GROUP INC.",
  },
  {
    ticker: "MANS",
    title: "Bright Lights Parent Corp.",
  },
  {
    ticker: "ASPP",
    title: "Abri SPAC 2, Inc.",
  },
  {
    ticker: "DSPK",
    title: "Dorchester Capital Acquisition Corp.",
  },
  {
    ticker: "KYCH",
    title: "Keyarch Acquisition Corp",
  },
  {
    ticker: "HGIA",
    title: "HENGGUANG HOLDING CO, Ltd",
  },
  {
    ticker: "CEG",
    title: "Constellation Energy Corp",
  },
  {
    ticker: "SLTA",
    title: "Solta Medical Corp",
  },
  {
    ticker: "SHAP",
    title: "Spree Acquisition Corp. 1 Ltd",
  },
  {
    ticker: "PRE",
    title: "Prenetics Global Ltd",
  },
  {
    ticker: "GFGD",
    title: "Growth for Good Acquisition Corp",
  },
  {
    ticker: "INTM",
    title: "INTERMEDIA CLOUD COMMUNICATIONS, INC.",
  },
  {
    ticker: "SYM",
    title: "Symbotic Inc.",
  },
  {
    ticker: "ENAC",
    title: "Endeavor Acquisition Corp.",
  },
  {
    ticker: "HILS",
    title: "Hillstream BioPharma Inc.",
  },
  {
    ticker: "APOA",
    title: "Jade Value Acquisition Corp",
  },
  {
    ticker: "VDNT",
    title: "VERDANT EARTH TECHNOLOGIES LTD",
  },
  {
    ticker: "SNTI",
    title: "Senti Biosciences, Inc.",
  },
  {
    ticker: "IZM",
    title: "ICZOOM Group Inc.",
  },
  {
    ticker: "HLP",
    title: "Hongli Group Inc.",
  },
  {
    ticker: "AHRN",
    title: "Ahren Acquisition Corp.",
  },
  {
    ticker: "WRPT",
    title: "WARPSPEED TAXI INC.",
  },
  {
    ticker: "TRCC",
    title: "TRACCOM INC.",
  },
  {
    ticker: "SPGL",
    title: "SPGL Acquisition Corp",
  },
  {
    ticker: "NBAD",
    title: "New Beginnings Acquisition Corp. III",
  },
  {
    ticker: "ODAC",
    title: "Ocean Drive Acquisition Corp.",
  },
  {
    ticker: "CTII",
    title: "Cerberus Telecom Acquisition Corp. II",
  },
  {
    ticker: "BYN",
    title: "Banyan Acquisition Corp",
  },
  {
    ticker: "CEAS",
    title: "CEA Space Partners I Corp.",
  },
  {
    ticker: "GTTJ",
    title: "GTJ REIT, INC.",
  },
  {
    ticker: "XWMFX",
    title: "Western Asset Middle Market Income Fund Inc.",
  },
  {
    ticker: "HWGC",
    title: "HWGC Holdings Ltd",
  },
  {
    ticker: "GBTT",
    title: "Gabbit Corp.",
  },
  {
    ticker: "PLTM",
    title: "GraniteShares Platinum Trust",
  },
  {
    ticker: "SVMB",
    title: "SavMobi Technology Inc.",
  },
  {
    ticker: "ETCG",
    title: "Grayscale Ethereum Classic Trust (ETC)",
  },
  {
    ticker: "XESP",
    title: "Electronic Servitor Publication Network Inc.",
  },
  {
    ticker: "ATRYX",
    title: "American Beacon Apollo Total Return Fund",
  },
  {
    ticker: "CNROX",
    title: "City National Rochdale Strategic Credit Fund",
  },
  {
    ticker: "LARAX",
    title: "Lord Abbett Credit Opportunities Fund",
  },
  {
    ticker: "CJAX",
    title: "CoJax Oil & Gas Corp",
  },
  {
    ticker: "SPFX",
    title: "STANDARD PREMIUM FINANCE HOLDINGS, INC.",
  },
  {
    ticker: "GWYGU",
    title: "Gateway Garage Partners LLC",
  },
  {
    ticker: "HUAK",
    title: "Huake Holding Biology Co., LTD",
  },
  {
    ticker: "WDI",
    title: "Western Asset Diversified Income Fund",
  },
  {
    ticker: "TRIRF",
    title: "Triterras, Inc.",
  },
  {
    ticker: "HOUS",
    title: "Anywhere Real Estate Inc.",
  },
  {
    ticker: "NPFC",
    title: "Newpoint Financial Corp",
  },
  {
    ticker: "PALL",
    title: "abrdn Palladium ETF Trust",
  },
  {
    ticker: "GCTK",
    title: "GlucoTrack, Inc.",
  },
  {
    ticker: "TRLC",
    title: "TriLinc Global Impact Fund LLC",
  },
  {
    ticker: "ANVI",
    title: "ANVI GLOBAL HOLDINGS, INC.",
  },
  {
    ticker: "SIRE",
    title: "Sisecam Resources LP",
  },
  {
    ticker: "TFSA",
    title: "Terra Income Fund 6, Inc.",
  },
  {
    ticker: "TNON",
    title: "Tenon Medical, Inc.",
  },
  {
    ticker: "ASAV",
    title: "ASI Aviation, Inc.",
  },
  {
    ticker: "FCREX",
    title: "FS Credit Income Fund",
  },
  {
    ticker: "AIDG",
    title: "AIS Holdings Group, Inc.",
  },
  {
    ticker: "AAIDX",
    title: "Axonic Alternative Income Fund",
  },
  {
    ticker: "AIU",
    title: "Meta Data Ltd",
  },
  {
    ticker: "ZCSH",
    title: "Grayscale Zcash Trust (ZEC)",
  },
  {
    ticker: "GRAZ",
    title: "Graze, Inc.",
  },
  {
    ticker: "CSCA",
    title: "CORNERSTONE MANAGEMENT, INC.",
  },
  {
    ticker: "NTAR",
    title: "NexTech AR Solutions Corp.",
  },
  {
    ticker: "BZWR",
    title: "Business Warrior Corp",
  },
  {
    ticker: "SLDX",
    title: "Stella Diagnostics, Inc.",
  },
  {
    ticker: "WCAP",
    title: "White Cap Supply Holdings, Inc.",
  },
  {
    ticker: "OZ",
    title: "Belpointe PREP, LLC",
  },
  {
    ticker: "AUST",
    title: "Austin Gold Corp.",
  },
  {
    ticker: "SMTK",
    title: "SmartKem, Inc.",
  },
  {
    ticker: "ISIGN",
    title: "iSign Solutions Inc.",
  },
  {
    ticker: "TSIV",
    title: "Twelve Seas Investment Co IV TMT",
  },
  {
    ticker: "SGE",
    title: "Strong Global Entertainment, Inc",
  },
  {
    ticker: "HZAG",
    title: "Hanze Asia Growth A",
  },
  {
    ticker: "DSTY",
    title: "Dynasty Financial Partners Inc.",
  },
  {
    ticker: "ESAB",
    title: "ESAB Corp",
  },
  {
    ticker: "CPAQ",
    title: "Counter Press Acquisition Corp",
  },
  {
    ticker: "LIVB",
    title: "LIV Capital Acquisition Corp. II",
  },
  {
    ticker: "AOGO",
    title: "Arogo Capital Acquisition Corp.",
  },
  {
    ticker: "RAMX",
    title: "Aries II Acquisition Corp",
  },
  {
    ticker: "ECOA",
    title: "Energy Cloud I Acquisition Corp",
  },
  {
    ticker: "ESH",
    title: "ESH Acquisition Corp.",
  },
  {
    ticker: "NLON",
    title: "Nuveen Loan Opportunities Fund",
  },
  {
    ticker: "MDLVY",
    title: "Medlive Technology Co., Ltd./ADR",
  },
  {
    ticker: "ACCV",
    title: "Atlas Crest Investment Corp. III",
  },
  {
    ticker: "NETC",
    title: "Nabors Energy Transition Corp.",
  },
  {
    ticker: "PMAC",
    title: "Pomona Acquisition Ltd",
  },
  {
    ticker: "BLCO",
    title: "Bausch & Lomb Corp",
  },
  {
    ticker: "EVE",
    title: "EVe Mobility Acquisition Corp",
  },
  {
    ticker: "GAQ",
    title: "Generation Asia I Acquisition Ltd",
  },
  {
    ticker: "NHIC",
    title: "NewHold Investment Corp. II",
  },
  {
    ticker: "LKVA",
    title: "Lakeview Acquisition Corp",
  },
  {
    ticker: "RDTX",
    title: "Roman DBDR Tech Acquisition Corp. II",
  },
  {
    ticker: "NXPL",
    title: "NextPlat Corp",
  },
  {
    ticker: "ELV",
    title: "Elevance Health, Inc.",
  },
  {
    ticker: "FEPI",
    title: "Direct Investment Holdings Group, Inc.",
  },
  {
    ticker: "CLRC",
    title: "ClimateRock",
  },
  {
    ticker: "WXT",
    title: "Wuxin Technology Holdings, Inc.",
  },
  {
    ticker: "BOUW",
    title: "Boustead Wavefront Inc.",
  },
  {
    ticker: "LRHC",
    title: "La Rosa Holdings Corp.",
  },
  {
    ticker: "AIB",
    title: "AIB Acquisition Corp",
  },
  {
    ticker: "MFRM",
    title: "Mattress Firm Group Inc.",
  },
  {
    ticker: "JWAC",
    title: "Jupiter Wellness Acquisition Corp.",
  },
  {
    ticker: "RVR",
    title: "REV Renewables, Inc.",
  },
  {
    ticker: "HMAC",
    title: "Hainan Manaslu Acquisition Corp.",
  },
  {
    ticker: "XPON",
    title: "Expion360 Inc.",
  },
  {
    ticker: "AXAC",
    title: "AXIOS Sustainable Growth Acquisition Corp",
  },
  {
    ticker: "FXA",
    title: "Invesco CurrencyShares Australian Dollar Trust",
  },
  {
    ticker: "JBK",
    title: "LEHMAN ABS CORP GOLDMAN SACHS CAP 1 SEC BACKED SER 2004-6",
  },
  {
    ticker: "SIMPQ",
    title: "Simply, Inc.",
  },
  {
    ticker: "AGGX",
    title: "AngioGenex, Inc.",
  },
  {
    ticker: "CIPI",
    title: "Correlate Infrastructure Partners, Inc.",
  },
  {
    ticker: "MTMT",
    title: "Mega Matrix Corp.",
  },
  {
    ticker: "DO",
    title: "DIAMOND OFFSHORE DRILLING, INC.",
  },
  {
    ticker: "CFFI",
    title: "C & F FINANCIAL CORP",
  },
  {
    ticker: "APXX",
    title: "APEX RESOURCES INC/NV",
  },
  {
    ticker: "ARMT",
    title: "Ameri Metro, Inc. (formerly Yellowwood)",
  },
  {
    ticker: "CHRD",
    title: "Oasis Petroleum Inc.",
  },
  {
    ticker: "STEK",
    title: "Stemtech Corp",
  },
  {
    ticker: "TSIFX",
    title: "Ecofin Tax-Advantaged Social Impact Fund, Inc.",
  },
  {
    ticker: "TONY",
    title: "Tony Fun, Inc.",
  },
  {
    ticker: "LOVE",
    title: "Lovesac Co",
  },
  {
    ticker: "DPUI",
    title: "DISCOUNT PRINT USA, INC.",
  },
  {
    ticker: "QHI",
    title: "QINHONG INTERNATIONAL GROUP",
  },
  {
    ticker: "FCCI",
    title: "FAST CASUAL CONCEPTS, INC.",
  },
  {
    ticker: "HZEN",
    title: "Grayscale Horizen Trust (ZEN)",
  },
  {
    ticker: "CDLA",
    title: "Candela Medical, Inc.",
  },
  {
    ticker: "HOUR",
    title: "Hour Loop, Inc",
  },
  {
    ticker: "BRKH",
    title: "BurTech Acquisition Corp.",
  },
  {
    ticker: "APCA",
    title: "AP Acquisition Corp",
  },
  {
    ticker: "BRAC",
    title: "Broad Capital Acquisition Corp",
  },
  {
    ticker: "MBSC",
    title: "M3-Brigade Acquisition III Corp.",
  },
  {
    ticker: "PACI",
    title: "PROOF Acquisition Corp I",
  },
  {
    ticker: "MLXA",
    title: "Mericsson Acquisition Corp",
  },
  {
    ticker: "HCMA",
    title: "HCM Acquisition Corp",
  },
  {
    ticker: "CHAB",
    title: "Catcha Investment Corp 2.0",
  },
  {
    ticker: "OKYO",
    title: "OKYO Pharma Ltd",
  },
  {
    ticker: "TFM",
    title: "Fresh Market Holdings, Inc.",
  },
  {
    ticker: "FHLT",
    title: "Future Health ESG Corp.",
  },
  {
    ticker: "USSC",
    title: "Constitution Acquisition Corp.",
  },
  {
    ticker: "KETA",
    title: "Keter1 Acquisition Corp",
  },
  {
    ticker: "DAVE",
    title: "Dave Inc./DE",
  },
  {
    ticker: "ALTE",
    title: "Altitude Acquisition Corp. II",
  },
  {
    ticker: "CALQ",
    title: "Callodine Acquisition Corp",
  },
  {
    ticker: "SPTY",
    title: "SPECIFICITY, INC.",
  },
  {
    ticker: "SOUN",
    title: "SOUNDHOUND AI, INC.",
  },
  {
    ticker: "BTMD",
    title: "biote Corp.",
  },
  {
    ticker: "ISPO",
    title: "Inspirato Inc",
  },
  {
    ticker: "EXOD",
    title: "Exodus Movement, Inc.",
  },
  {
    ticker: "TKLF",
    title: "Yoshitsu Co., Ltd",
  },
  {
    ticker: "DYCU",
    title: "DYNACURE S.A.",
  },
  {
    ticker: "SFCO",
    title: "Southern Financial Corp",
  },
  {
    ticker: "SZZL",
    title: "Sizzle Acquisition Corp.",
  },
  {
    ticker: "STEW",
    title: "BOULDER GROWTH & INCOME FUND",
  },
  {
    ticker: "TYDE",
    title: "Cryptyde, Inc.",
  },
  {
    ticker: "GHIX",
    title: "Gores Holdings IX, Inc.",
  },
  {
    ticker: "STWY",
    title: "Steinway Musical Instruments Holdings, Inc.",
  },
  {
    ticker: "FIO",
    title: "Franklin Income Opportunities Fund",
  },
  {
    ticker: "ELBM",
    title: "Electra Battery Materials Corp",
  },
  {
    ticker: "ECBK",
    title: "ECB Bancorp, Inc. /MD/",
  },
  {
    ticker: "XPDB",
    title: "Power & Digital Infrastructure Acquisition II Corp.",
  },
  {
    ticker: "STET",
    title: "ST Energy Transition I Ltd.",
  },
  {
    ticker: "CVF",
    title: "Calamos Global Convertible & Dynamic Income Trust",
  },
  {
    ticker: "ACLHF",
    title: "ACME Lithium Inc.",
  },
  {
    ticker: "IMPP",
    title: "Imperial Petroleum Inc./Marshall Islands",
  },
  {
    ticker: "TPG",
    title: "TPG Inc.",
  },
  {
    ticker: "CBLO",
    title: "C2 Blockchain,Inc.",
  },
  {
    ticker: "THCH",
    title: "TH International Ltd",
  },
  {
    ticker: "UTAA",
    title: "UTA Acquisition Corp",
  },
  {
    ticker: "LCLA",
    title: "L Catterton Latin America Acquisition Corp",
  },
  {
    ticker: "KACL",
    title: "Kairous Acquisition Corp. Ltd",
  },
  {
    ticker: "HMA",
    title: "Heartland Media Acquisition Corp.",
  },
  {
    ticker: "SFLM",
    title: "SFLMaven Corp.",
  },
  {
    ticker: "IOGPQ",
    title: "ION GEOPHYSICAL CORP",
  },
  {
    ticker: "NASO",
    title: "Naples Soap Company, Inc.",
  },
  {
    ticker: "KUSA",
    title: "Kashin, Inc.",
  },
  {
    ticker: "SRRIX",
    title: "Stone Ridge Trust II",
  },
  {
    ticker: "MPGR",
    title: "CANNA Corp",
  },
  {
    ticker: "HGHH",
    title: "High Desert Holding Corp.",
  },
  {
    ticker: "GRTA",
    title: "Griffin Realty Trust, Inc.",
  },
  {
    ticker: "XILSX",
    title: "Pioneer ILS Interval Fund",
  },
  {
    ticker: "OWSCX",
    title: "1WS Credit Income Fund",
  },
  {
    ticker: "CCLFX",
    title: "Cliffwater Corporate Lending Fund",
  },
  {
    ticker: "PDSKX",
    title: "Principal Diversified Select Real Asset Fund",
  },
  {
    ticker: "BKSW",
    title: "Baikang Biological Group Holdings Ltd",
  },
  {
    ticker: "BAR",
    title: "GraniteShares Gold Trust",
  },
  {
    ticker: "SCTH",
    title: "Securetech Innovations, Inc.",
  },
  {
    ticker: "HTHC",
    title: "Hightimes Holding Corp.",
  },
  {
    ticker: "GC",
    title: "Gladstone Companies, Inc.",
  },
  {
    ticker: "ILAG",
    title: "Intelligent Living Application Group Inc.",
  },
  {
    ticker: "EDBL",
    title: "Edible Garden AG Inc",
  },
  {
    ticker: "CMDS",
    title: "CloudMinds Inc.",
  },
  {
    ticker: "RAYA",
    title: "Erayak Power Solution Group Inc.",
  },
  {
    ticker: "ETA",
    title: "Integrated Energy Transition Acquisition Corp.",
  },
  {
    ticker: "ITAQ",
    title: "Industrial Tech Acquisitions II, Inc.",
  },
  {
    ticker: "SVII",
    title: "Spring Valley Acquisition Corp. II",
  },
  {
    ticker: "THMB",
    title: "Thimble Point Acquisition Corp. II",
  },
  {
    ticker: "TCOA",
    title: "Trajectory Alpha Acquisition Corp.",
  },
  {
    ticker: "TEKC",
    title: "Tekkorp Digital Acquisition Corp. II",
  },
  {
    ticker: "BMYMP",
    title: "BRISTOL MYERS SQUIBB CO",
  },
  {
    ticker: "GOOG",
    title: "Alphabet Inc.",
  },
  {
    ticker: "USB-PA",
    title: "US BANCORP \\DE\\",
  },
  {
    ticker: "BRK-A",
    title: "BERKSHIRE HATHAWAY INC",
  },
  {
    ticker: "JPM-PC",
    title: "JPMORGAN CHASE & CO",
  },
  {
    ticker: "JPM-PD",
    title: "JPMORGAN CHASE & CO",
  },
  {
    ticker: "BABAF",
    title: "Alibaba Group Holding Ltd",
  },
  {
    ticker: "LVMHF",
    title: "LVMH MOET HENNESSY LOUIS VUITTON",
  },
  {
    ticker: "NONOF",
    title: "NOVO NORDISK A S",
  },
  {
    ticker: "BAC-PB",
    title: "BANK OF AMERICA CORP /DE/",
  },
  {
    ticker: "BML-PH",
    title: "BANK OF AMERICA CORP /DE/",
  },
  {
    ticker: "BAC-PK",
    title: "BANK OF AMERICA CORP /DE/",
  },
  {
    ticker: "BML-PL",
    title: "BANK OF AMERICA CORP /DE/",
  },
  {
    ticker: "BML-PG",
    title: "BANK OF AMERICA CORP /DE/",
  },
  {
    ticker: "BAC-PL",
    title: "BANK OF AMERICA CORP /DE/",
  },
  {
    ticker: "BAC-PE",
    title: "BANK OF AMERICA CORP /DE/",
  },
  {
    ticker: "BML-PJ",
    title: "BANK OF AMERICA CORP /DE/",
  },
  {
    ticker: "TOYOF",
    title: "TOYOTA MOTOR CORP/",
  },
  {
    ticker: "AZNCF",
    title: "ASTRAZENECA PLC",
  },
  {
    ticker: "RYDAF",
    title: "Shell plc",
  },
  {
    ticker: "WFC-PY",
    title: "WELLS FARGO & COMPANY/MN",
  },
  {
    ticker: "WFC-PR",
    title: "WELLS FARGO & COMPANY/MN",
  },
  {
    ticker: "WFC-PL",
    title: "WELLS FARGO & COMPANY/MN",
  },
  {
    ticker: "NVSEF",
    title: "NOVARTIS AG",
  },
  {
    ticker: "WFC-PQ",
    title: "WELLS FARGO & COMPANY/MN",
  },
  {
    ticker: "ASMLF",
    title: "ASML HOLDING NV",
  },
  {
    ticker: "TBB",
    title: "AT&T INC.",
  },
  {
    ticker: "PCCYF",
    title: "PETROCHINA CO LTD",
  },
  {
    ticker: "C-PJ",
    title: "CITIGROUP INC",
  },
  {
    ticker: "SNYNF",
    title: "Sanofi",
  },
  {
    ticker: "BHPLF",
    title: "BHP Group Ltd",
  },
  {
    ticker: "TTFNF",
    title: "TotalEnergies SE",
  },
  {
    ticker: "HBCYF",
    title: "HSBC HOLDINGS PLC",
  },
  {
    ticker: "CILJF",
    title: "CHINA LIFE INSURANCE CO LTD",
  },
  {
    ticker: "ANTM",
    title: "Elevance Health, Inc.",
  },
  {
    ticker: "UNLYF",
    title: "UNILEVER PLC",
  },
  {
    ticker: "STOHF",
    title: "EQUINOR ASA",
  },
  {
    ticker: "GLAXF",
    title: "GSK PLC",
  },
  {
    ticker: "JDCMF",
    title: "JD.com, Inc.",
  },
  {
    ticker: "SAPGF",
    title: "SAP SE",
  },
  {
    ticker: "SNEJF",
    title: "Sony Group Corp",
  },
  {
    ticker: "DGEAF",
    title: "DIAGEO PLC",
  },
  {
    ticker: "RY-PT",
    title: "ROYAL BANK OF CANADA",
  },
  {
    ticker: "BTAFF",
    title: "British American Tobacco p.l.c.",
  },
  {
    ticker: "CTA-PB",
    title: "DUPONT E I DE NEMOURS & CO",
  },
  {
    ticker: "BUDFF",
    title: "Anheuser-Busch InBev SA/NV",
  },
  {
    ticker: "RTPPF",
    title: "RIO TINTO PLC",
  },
  {
    ticker: "BPAQF",
    title: "BP PLC",
  },
  {
    ticker: "WFC-PC",
    title: "WELLS FARGO & COMPANY/MN",
  },
  {
    ticker: "CMXHF",
    title: "CSL LTD",
  },
  {
    ticker: "USB-PH",
    title: "US BANCORP \\DE\\",
  },
  {
    ticker: "EADSF",
    title: "Airbus SE/ADR",
  },
  {
    ticker: "USB-PP",
    title: "US BANCORP \\DE\\",
  },
  {
    ticker: "PBR-A",
    title: "PETROBRAS - PETROLEO BRASILEIRO SA",
  },
  {
    ticker: "MBFJF",
    title: "MITSUBISHI UFJ FINANCIAL GROUP INC",
  },
  {
    ticker: "IDEXF",
    title: "Industria de Diseno Textil Inditex SA / ADR",
  },
  {
    ticker: "SNPMF",
    title: "CHINA PETROLEUM & CHEMICAL CORP",
  },
  {
    ticker: "GS-PA",
    title: "GOLDMAN SACHS GROUP INC",
  },
  {
    ticker: "MS-PI",
    title: "MORGAN STANLEY",
  },
  {
    ticker: "MS-PK",
    title: "MORGAN STANLEY",
  },
  {
    ticker: "MS-PA",
    title: "MORGAN STANLEY",
  },
  {
    ticker: "AMOVF",
    title: "AMERICA MOVIL SAB DE CV/",
  },
  {
    ticker: "GS-PK",
    title: "GOLDMAN SACHS GROUP INC",
  },
  {
    ticker: "GLCNF",
    title: "Glencore plc/ADR",
  },
  {
    ticker: "MS-PF",
    title: "MORGAN STANLEY",
  },
  {
    ticker: "GS-PJ",
    title: "GOLDMAN SACHS GROUP INC",
  },
  {
    ticker: "MS-PE",
    title: "MORGAN STANLEY",
  },
  {
    ticker: "GS-PD",
    title: "GOLDMAN SACHS GROUP INC",
  },
  {
    ticker: "AMX",
    title: "AMERICA MOVIL SAB DE CV/",
  },
  {
    ticker: "AMXVF",
    title: "AMERICA MOVIL SAB DE CV/",
  },
  {
    ticker: "SFTBF",
    title: "SOFTBANK GROUP CORP",
  },
  {
    ticker: "DUK-PA",
    title: "Duke Energy CORP",
  },
  {
    ticker: "DDAIF",
    title: "DAIMLER AG",
  },
  {
    ticker: "PBCRF",
    title: "PT Bank Central Asia Tbk / ADR",
  },
  {
    ticker: "CCZ",
    title: "COMCAST CORP",
  },
  {
    ticker: "ESOCF",
    title: "ENEL SOCIETA PER AZIONI",
  },
  {
    ticker: "STZ-B",
    title: "CONSTELLATION BRANDS, INC.",
  },
  {
    ticker: "SPG-PJ",
    title: "SIMON PROPERTY GROUP INC /DE/",
  },
  {
    ticker: "SFBQF",
    title: "SOFTBANK GROUP CORP",
  },
  {
    ticker: "RBGPF",
    title: "RECKITT BENCKISER GROUP PLC",
  },
  {
    ticker: "BECEF",
    title: "BCE INC",
  },
  {
    ticker: "RLXXF",
    title: "RELX PLC",
  },
  {
    ticker: "ABLZF",
    title: "ABB LTD",
  },
  {
    ticker: "SCHW-PD",
    title: "SCHWAB CHARLES CORP",
  },
  {
    ticker: "BCDRF",
    title: "Banco Santander, S.A.",
  },
  {
    ticker: "WEBNF",
    title: "WESTPAC BANKING CORP",
  },
  {
    ticker: "PLDGP",
    title: "Prologis, Inc.",
  },
  {
    ticker: "NGGTF",
    title: "NATIONAL GRID PLC",
  },
  {
    ticker: "PDRDF",
    title: "PERNOD RICARD S A /FI",
  },
  {
    ticker: "MET-PE",
    title: "METLIFE INC",
  },
  {
    ticker: "AIG-PA",
    title: "AMERICAN INTERNATIONAL GROUP, INC.",
  },
  {
    ticker: "TKPHF",
    title: "TAKEDA PHARMACEUTICAL CO LTD",
  },
  {
    ticker: "MET-PA",
    title: "METLIFE INC",
  },
  {
    ticker: "VODPF",
    title: "VODAFONE GROUP PUBLIC LTD CO",
  },
  {
    ticker: "FNGD",
    title: "BANK OF MONTREAL /CAN/",
  },
  {
    ticker: "HNDAF",
    title: "HONDA MOTOR CO LTD",
  },
  {
    ticker: "ENBA",
    title: "ENBRIDGE INC",
  },
  {
    ticker: "PSA-PH",
    title: "Public Storage",
  },
  {
    ticker: "EIPAF",
    title: "ENI SPA",
  },
  {
    ticker: "SMFNF",
    title: "SUMITOMO MITSUI FINANCIAL GROUP, INC.",
  },
  {
    ticker: "LLDTF",
    title: "Lloyds Banking Group plc",
  },
  {
    ticker: "PPWLO",
    title: "PACIFICORP /OR/",
  },
  {
    ticker: "PSA-PK",
    title: "Public Storage",
  },
  {
    ticker: "INGVF",
    title: "ING GROEP NV",
  },
  {
    ticker: "GPDNF",
    title: "GROUPE DANONE",
  },
  {
    ticker: "PUKPF",
    title: "PRUDENTIAL PLC",
  },
  {
    ticker: "BF-B",
    title: "BROWN FORMAN CORP",
  },
  {
    ticker: "RSMDF",
    title: "RESMED INC",
  },
  {
    ticker: "BAESF",
    title: "BAE SYSTEMS PLC /FI/",
  },
  {
    ticker: "ALL-PG",
    title: "ALLSTATE CORP",
  },
  {
    ticker: "FNCTF",
    title: "ORANGE",
  },
  {
    ticker: "BCLYF",
    title: "BARCLAYS PLC",
  },
  {
    ticker: "ALL-PB",
    title: "ALLSTATE CORP",
  },
  {
    ticker: "IFNNF",
    title: "INFINEON TECHNOLOGIES AG",
  },
  {
    ticker: "BBVXF",
    title: "BANCO BILBAO VIZCAYA ARGENTARIA, S.A.",
  },
  {
    ticker: "RBSPF",
    title: "NatWest Group plc",
  },
  {
    ticker: "ALL-PH",
    title: "ALLSTATE CORP",
  },
  {
    ticker: "MZHOF",
    title: "MIZUHO FINANCIAL GROUP INC",
  },
  {
    ticker: "CIXPF",
    title: "CaixaBank/ADR",
  },
  {
    ticker: "BBDO",
    title: "BANK BRADESCO",
  },
  {
    ticker: "LNGPF",
    title: "Longfor Group Holdings Limited/ADR",
  },
  {
    ticker: "TEFOF",
    title: "TELEFONICA S A",
  },
  {
    ticker: "HCMLF",
    title: "LafargeHolcim Ltd/ADR",
  },
  {
    ticker: "ARZGF",
    title: "Assicurazioni Generali S.p.A.",
  },
  {
    ticker: "EXPGF",
    title: "Experian Group LTD",
  },
  {
    ticker: "STMEF",
    title: "STMicroelectronics N.V.",
  },
  {
    ticker: "NOKBF",
    title: "NOKIA CORP",
  },
  {
    ticker: "CAJFF",
    title: "CANON INC",
  },
  {
    ticker: "DLR-PK",
    title: "DIGITAL REALTY TRUST, INC.",
  },
  {
    ticker: "CKHUF",
    title: "CK Hutchison Holdings Limited/ADR",
  },
  {
    ticker: "RWNFF",
    title: "RWE AG /FI",
  },
  {
    ticker: "DLR-PJ",
    title: "DIGITAL REALTY TRUST, INC.",
  },
  {
    ticker: "CRHCF",
    title: "CRH PUBLIC LTD CO",
  },
  {
    ticker: "ERIXF",
    title: "ERICSSON LM TELEPHONE CO",
  },
  {
    ticker: "RCIAF",
    title: "ROGERS COMMUNICATIONS INC",
  },
  {
    ticker: "TSCDF",
    title: "TESCO PLC /FI",
  },
  {
    ticker: "SOJC",
    title: "SOUTHERN CO",
  },
  {
    ticker: "PPERF",
    title: "PT Bank Mandiri (Persero) Tbk / ADR",
  },
  {
    ticker: "LNNGF",
    title: "Li Ning Co. Ltd.",
  },
  {
    ticker: "CODGF",
    title: "COMPAGNIE DE SAINT GOBAIN",
  },
  {
    ticker: "BAMGF",
    title: "BROOKFIELD ASSET MANAGEMENT INC.",
  },
  {
    ticker: "WOPEF",
    title: "WOODSIDE ENERGY GROUP LTD",
  },
  {
    ticker: "VWSYF",
    title: "VESTAS WIND SYSTEMS A/S",
  },
  {
    ticker: "AMSYF",
    title: "ArcelorMittal",
  },
  {
    ticker: "BTGOF",
    title: "BT GROUP PLC",
  },
  {
    ticker: "GNMSF",
    title: "GENMAB A/S",
  },
  {
    ticker: "MGDDF",
    title: "MICHELIN COMPAGNIE GENERALE DES ETABLISSEMENTS MICHELIN /FI",
  },
  {
    ticker: "LBRDK",
    title: "Liberty Broadband Corp",
  },
  {
    ticker: "ORXCF",
    title: "ORIX CORP",
  },
  {
    ticker: "AMCCF",
    title: "Amcor plc",
  },
  {
    ticker: "ATASF",
    title: "Atlantia SpA",
  },
  {
    ticker: "POAHF",
    title: "Porsche Automobil Holding SE / ADR",
  },
  {
    ticker: "TSGTF",
    title: "TSINGTAO BREWERY CO LTD /FI",
  },
  {
    ticker: "ANNSF",
    title: "Aena S.A./ADR",
  },
  {
    ticker: "LBRDB",
    title: "Liberty Broadband Corp",
  },
  {
    ticker: "PCRFF",
    title: "PANASONIC Corp",
  },
  {
    ticker: "STT-PG",
    title: "STATE STREET CORP",
  },
  {
    ticker: "STT-PD",
    title: "STATE STREET CORP",
  },
  {
    ticker: "HIG-PG",
    title: "HARTFORD FINANCIAL SERVICES GROUP, INC.",
  },
  {
    ticker: "RYLPF",
    title: "KONINKLIJKE PHILIPS NV",
  },
  {
    ticker: "KEY-PK",
    title: "KEYCORP /NEW/",
  },
  {
    ticker: "HLDVF",
    title: "HENDERSON LAND DEVELOPMENT COMPANY LTD /FI",
  },
  {
    ticker: "PTAIF",
    title: "PT Astra International Tbk / ADR",
  },
  {
    ticker: "FOX",
    title: "Fox Corp",
  },
  {
    ticker: "NUAN",
    title: "Nuance Communications, Inc.",
  },
  {
    ticker: "ZHSHF",
    title: "Zhongsheng Group Holdings Limited/ADR/",
  },
  {
    ticker: "FITBI",
    title: "FIFTH THIRD BANCORP",
  },
  {
    ticker: "TCKRF",
    title: "TECK RESOURCES LTD",
  },
  {
    ticker: "NMK-PC",
    title: "NATIONAL GRID PLC",
  },
  {
    ticker: "SNMRF",
    title: "Snam Rete Gas SpA",
  },
  {
    ticker: "RSTRF",
    title: "Restaurant Brands International Limited Partnership",
  },
  {
    ticker: "FMCCT",
    title: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    ticker: "FRFGF",
    title: "FAIRFAX FINANCIAL HOLDINGS LTD/ CAN",
  },
  {
    ticker: "NMK-PB",
    title: "NATIONAL GRID PLC",
  },
  {
    ticker: "FXFLF",
    title: "FAIRFAX FINANCIAL HOLDINGS LTD/ CAN",
  },
  {
    ticker: "HRNNF",
    title: "Hydro One Ltd",
  },
  {
    ticker: "SWMAF",
    title: "SWEDISH MATCH CORP",
  },
  {
    ticker: "KEY-PJ",
    title: "KEYCORP /NEW/",
  },
  {
    ticker: "CHKIF",
    title: "CHINA SOUTHERN AIRLINES CO LTD",
  },
  {
    ticker: "LSXMB",
    title: "Liberty Media Corp",
  },
  {
    ticker: "KEY-PI",
    title: "KEYCORP /NEW/",
  },
  {
    ticker: "NHOLF",
    title: "Sompo Japan Nipponkoa Holdings, Inc./ADR",
  },
  {
    ticker: "FWONB",
    title: "Liberty Media Corp",
  },
  {
    ticker: "HEI-A",
    title: "HEICO CORP",
  },
  {
    ticker: "CFG-PD",
    title: "CITIZENS FINANCIAL GROUP INC/RI",
  },
  {
    ticker: "FRC-PI",
    title: "FIRST REPUBLIC BANK",
  },
  {
    ticker: "FREJO",
    title: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    ticker: "SJRWF",
    title: "SHAW COMMUNICATIONS INC",
  },
  {
    ticker: "BIO-B",
    title: "BIO-RAD LABORATORIES, INC.",
  },
  {
    ticker: "RYAOF",
    title: "RYANAIR HOLDINGS PLC",
  },
  {
    ticker: "FWONK",
    title: "Liberty Media Corp",
  },
  {
    ticker: "SASOF",
    title: "SASOL LTD",
  },
  {
    ticker: "FRC-PH",
    title: "FIRST REPUBLIC BANK",
  },
  {
    ticker: "PRDSF",
    title: "Prada S.p.A./ADR",
  },
  {
    ticker: "EBR-B",
    title: "BRAZILIAN ELECTRIC POWER CO",
  },
  {
    ticker: "FWONA",
    title: "Liberty Media Corp",
  },
  {
    ticker: "TRPCF",
    title: "Trip.com Group Ltd",
  },
  {
    ticker: "FMCQF",
    title: "Fresenius Medical Care AG & Co. KGaA",
  },
  {
    ticker: "JRONF",
    title: "Jeronimo Martins SGPS SA",
  },
  {
    ticker: "NISTF",
    title: "NIPPON STEEL CORP",
  },
  {
    ticker: "LSXMK",
    title: "Liberty Media Corp",
  },
  {
    ticker: "RF-PC",
    title: "REGIONS FINANCIAL CORP",
  },
  {
    ticker: "CSGKF",
    title: "CREDIT SUISSE GROUP AG",
  },
  {
    ticker: "ACGLO",
    title: "ARCH CAPITAL GROUP LTD.",
  },
  {
    ticker: "RF-PB",
    title: "REGIONS FINANCIAL CORP",
  },
  {
    ticker: "BPYPP",
    title: "Brookfield Property Partners L.P.",
  },
  {
    ticker: "NPSCY",
    title: "NIPPON STEEL CORP",
  },
  {
    ticker: "GIKLY",
    title: "Grifols SA",
  },
  {
    ticker: "KKOYF",
    title: "Kesko OYJ",
  },
  {
    ticker: "MAA-PI",
    title: "MID AMERICA APARTMENT COMMUNITIES INC.",
  },
  {
    ticker: "NCSYF",
    title: "NICE Ltd.",
  },
  {
    ticker: "SNNUF",
    title: "SMITH & NEPHEW PLC",
  },
  {
    ticker: "LBTYK",
    title: "Liberty Global plc",
  },
  {
    ticker: "LBTYB",
    title: "Liberty Global plc",
  },
  {
    ticker: "JXHGF",
    title: "ENEOS Holdings, Inc./ADR",
  },
  {
    ticker: "PNC-PP",
    title: "PNC FINANCIAL SERVICES GROUP, INC.",
  },
  {
    ticker: "WPPGF",
    title: "WPP plc",
  },
  {
    ticker: "NRSCF",
    title: "NOMURA HOLDINGS INC",
  },
  {
    ticker: "NLY-PF",
    title: "ANNALY CAPITAL MANAGEMENT INC",
  },
  {
    ticker: "NCMGY",
    title: "NEWCREST MINING LTD",
  },
  {
    ticker: "VNO-PL",
    title: "VORNADO REALTY TRUST",
  },
  {
    ticker: "NCMGF",
    title: "NEWCREST MINING LTD",
  },
  {
    ticker: "ADTTF",
    title: "ADVANTEST CORP",
  },
  {
    ticker: "GIFOF",
    title: "Grifols SA",
  },
  {
    ticker: "VNO-PM",
    title: "VORNADO REALTY TRUST",
  },
  {
    ticker: "LNVGF",
    title: "LENOVO GROUP LTD",
  },
  {
    ticker: "BOUYF",
    title: "Bouygues SA",
  },
  {
    ticker: "RKLIF",
    title: "RENTOKIL INITIAL PLC /FI",
  },
  {
    ticker: "NIPNF",
    title: "NEC CORP",
  },
  {
    ticker: "ATLCY",
    title: "ATLAS COPCO AB",
  },
  {
    ticker: "NLY-PG",
    title: "ANNALY CAPITAL MANAGEMENT INC",
  },
  {
    ticker: "BNTGF",
    title: "Brenntag AG/ADR",
  },
  {
    ticker: "UHID",
    title: "UNIVERSAL HEALTH SERVICES INC",
  },
  {
    ticker: "RTOKY",
    title: "RENTOKIL INITIAL PLC /FI",
  },
  {
    ticker: "TAP-A",
    title: "MOLSON COORS BEVERAGE CO",
  },
  {
    ticker: "NI-PB",
    title: "NISOURCE INC.",
  },
  {
    ticker: "VIVEF",
    title: "VIVENDI",
  },
  {
    ticker: "GLPEF",
    title: "Galp Energia, SGPS, S.A.",
  },
  {
    ticker: "ENIA",
    title: "ENEL AMERICAS S.A.",
  },
  {
    ticker: "FRT-PC",
    title: "FEDERAL REALTY INVESTMENT TRUST",
  },
  {
    ticker: "GIFLF",
    title: "Grifols SA",
  },
  {
    ticker: "ALMMF",
    title: "ALUMINUM CORP OF CHINA LTD",
  },
  {
    ticker: "UEPEP",
    title: "UNION ELECTRIC CO",
  },
  {
    ticker: "DQJCF",
    title: "Don Quijote Holdings Co Ltd",
  },
  {
    ticker: "JHIUF",
    title: "James Hardie Industries plc",
  },
  {
    ticker: "NWS",
    title: "NEWS CORP",
  },
  {
    ticker: "WSO-B",
    title: "WATSCO INC",
  },
  {
    ticker: "PLAN",
    title: "Anaplan, Inc.",
  },
  {
    ticker: "UEPCP",
    title: "UNION ELECTRIC CO",
  },
  {
    ticker: "AEGOF",
    title: "AEGON NV",
  },
  {
    ticker: "CUKPF",
    title: "CARNIVAL PLC",
  },
  {
    ticker: "RZA",
    title: "REINSURANCE GROUP OF AMERICA INC",
  },
  {
    ticker: "ASEKF",
    title: "Aisin Seiki Co., Ltd./ADR",
  },
  {
    ticker: "RZB",
    title: "REINSURANCE GROUP OF AMERICA INC",
  },
  {
    ticker: "UEPEN",
    title: "UNION ELECTRIC CO",
  },
  {
    ticker: "AMH-PH",
    title: "American Homes 4 Rent",
  },
  {
    ticker: "REMYF",
    title: "Remy Cointreau/ADR",
  },
  {
    ticker: "AOMFF",
    title: "ALSTOM",
  },
  {
    ticker: "AMH-PG",
    title: "American Homes 4 Rent",
  },
  {
    ticker: "Z",
    title: "ZILLOW GROUP, INC.",
  },
  {
    ticker: "DISPF",
    title: "Disco Corporation/ADR",
  },
  {
    ticker: "TEVJF",
    title: "TEVA PHARMACEUTICAL INDUSTRIES LTD",
  },
  {
    ticker: "MDIBF",
    title: "Mediobanca - Banca di Credito Finanziario SpA",
  },
  {
    ticker: "UEPEM",
    title: "UNION ELECTRIC CO",
  },
  {
    ticker: "MTLHF",
    title: "Mitsubishi Chemical Holdings Corp",
  },
  {
    ticker: "TLTZY",
    title: "TELE2 AB",
  },
  {
    ticker: "OSCUF",
    title: "Japan Exchange Group, Inc./ADR",
  },
  {
    ticker: "TLTZF",
    title: "TELE2 AB",
  },
  {
    ticker: "SVYSF",
    title: "SOLVAY S A /ADR/",
  },
  {
    ticker: "GS-PC",
    title: "GOLDMAN SACHS GROUP INC",
  },
  {
    ticker: "KIM-PL",
    title: "KIMCO REALTY CORP",
  },
  {
    ticker: "KIM-PM",
    title: "KIMCO REALTY CORP",
  },
  {
    ticker: "ATH-PA",
    title: "Athene Holding Ltd",
  },
  {
    ticker: "AGNCN",
    title: "AGNC Investment Corp.",
  },
  {
    ticker: "HNP",
    title: "HUANENG POWER INTERNATIONAL INC",
  },
  {
    ticker: "GPAEF",
    title: "Pacific Airport Group",
  },
  {
    ticker: "HUNGF",
    title: "HUANENG POWER INTERNATIONAL INC",
  },
  {
    ticker: "RNR-PF",
    title: "RENAISSANCERE HOLDINGS LTD",
  },
  {
    ticker: "SLG-PI",
    title: "SL GREEN REALTY CORP",
  },
  {
    ticker: "AGNCM",
    title: "AGNC Investment Corp.",
  },
  {
    ticker: "ACRFF",
    title: "ACCOR",
  },
  {
    ticker: "RKUNF",
    title: "Rakuten Group, Inc.",
  },
  {
    ticker: "AULGF",
    title: "ANGLOGOLD ASHANTI LTD",
  },
  {
    ticker: "VOYA-PB",
    title: "Voya Financial, Inc.",
  },
  {
    ticker: "CMSA",
    title: "CMS ENERGY CORP",
  },
  {
    ticker: "AEMMF",
    title: "A2A SpA",
  },
  {
    ticker: "PRYMF",
    title: "Prysmian S.p.A.",
  },
  {
    ticker: "FCNCB",
    title: "FIRST CITIZENS BANCSHARES INC /DE/",
  },
  {
    ticker: "DCP-PC",
    title: "DCP Midstream, LP",
  },
  {
    ticker: "DSECF",
    title: "Daiwa Securities Group Inc.",
  },
  {
    ticker: "MIUFF",
    title: "Mitsubishi UFJ Lease & Finance Co., Ltd.",
  },
  {
    ticker: "PHTCF",
    title: "PLDT Inc.",
  },
  {
    ticker: "OUKPF",
    title: "Outotec OYJ",
  },
  {
    ticker: "ASRMF",
    title: "SOUTHEAST AIRPORT GROUP",
  },
  {
    ticker: "OAK-PB",
    title: "Oaktree Capital Group, LLC",
  },
  {
    ticker: "ARNA",
    title: "ARENA PHARMACEUTICALS INC",
  },
  {
    ticker: "SPTJF",
    title: "SINOPEC SHANGHAI PETROCHEMICAL CO LTD",
  },
  {
    ticker: "MSUXF",
    title: "Misumi Group Inc./ADR",
  },
  {
    ticker: "BKGFF",
    title: "Berkeley Group Holdings plc",
  },
  {
    ticker: "EENEF",
    title: "Electrocomponents plc / ADR",
  },
  {
    ticker: "MSP",
    title: "DATTO HOLDING CORP.",
  },
  {
    ticker: "LYSCF",
    title: "Lynas CORP LTD",
  },
  {
    ticker: "ATGFF",
    title: "AltaGas Ltd.",
  },
  {
    ticker: "JSGCF",
    title: "JS Group CORP",
  },
  {
    ticker: "UNMA",
    title: "Unum Group",
  },
  {
    ticker: "PCG-PA",
    title: "PG&E Corp",
  },
  {
    ticker: "AUOTY",
    title: "AU OPTRONICS CORP",
  },
  {
    ticker: "ALTGF",
    title: "AltaGas Ltd.",
  },
  {
    ticker: "UBSFF",
    title: "Ubisoft Entertainment SA",
  },
  {
    ticker: "BPOPO",
    title: "POPULAR, INC.",
  },
  {
    ticker: "PCG-PG",
    title: "PG&E Corp",
  },
  {
    ticker: "IIVI",
    title: "II-VI INC",
  },
  {
    ticker: "JSM",
    title: "NAVIENT CORP",
  },
  {
    ticker: "GAB-PG",
    title: "GABELLI EQUITY TRUST INC",
  },
  {
    ticker: "PCG-PB",
    title: "PG&E Corp",
  },
  {
    ticker: "PADEF",
    title: "Adaro Energy PT/ADR/",
  },
  {
    ticker: "EPR-PG",
    title: "EPR PROPERTIES",
  },
  {
    ticker: "CCOEF",
    title: "Capcom Co., LTD/ADR",
  },
  {
    ticker: "BHFAL",
    title: "Brighthouse Financial, Inc.",
  },
  {
    ticker: "QBCRF",
    title: "QUEBECOR MEDIA INC",
  },
  {
    ticker: "KOSCF",
    title: "Kose Corporation/ADR",
  },
  {
    ticker: "CIG-C",
    title: "ENERGY CO OF MINAS GERAIS",
  },
  {
    ticker: "CXMSF",
    title: "CEMEX SAB DE CV",
  },
  {
    ticker: "PCG-PC",
    title: "PG&E Corp",
  },
  {
    ticker: "BNMDF",
    title: "Banca Mediolanum S.p.A./ADR",
  },
  {
    ticker: "SNV-PD",
    title: "SYNOVUS FINANCIAL CORP",
  },
  {
    ticker: "MXCHF",
    title: "Orbia Advance Corporation, S.A.B. de C.V./ADR",
  },
  {
    ticker: "MITUF",
    title: "Mitsui Chemicals Inc",
  },
  {
    ticker: "PSB-PX",
    title: "PS BUSINESS PARKS, INC./MD",
  },
  {
    ticker: "PCG-PD",
    title: "PG&E Corp",
  },
  {
    ticker: "PCG-PE",
    title: "PG&E Corp",
  },
  {
    ticker: "MCFE",
    title: "McAfee Corp.",
  },
  {
    ticker: "PSB-PY",
    title: "PS BUSINESS PARKS, INC./MD",
  },
  {
    ticker: "GRPFF",
    title: "GRUPO TELEVISA, S.A.B.",
  },
  {
    ticker: "FNMAS",
    title: "FEDERAL NATIONAL MORTGAGE ASSOCIATION FANNIE MAE",
  },
  {
    ticker: "AXS-PE",
    title: "AXIS CAPITAL HOLDINGS LTD",
  },
  {
    ticker: "DTW",
    title: "DTE ENERGY CO",
  },
  {
    ticker: "ADRZF",
    title: "Andritz AG",
  },
  {
    ticker: "EVOTF",
    title: "Evotec SE",
  },
  {
    ticker: "REXR-PB",
    title: "Rexford Industrial Realty, Inc.",
  },
  {
    ticker: "NYCB-PA",
    title: "NEW YORK COMMUNITY BANCORP INC",
  },
  {
    ticker: "GSABF",
    title: "GRUPO SIMEC, S.A.B. de C.V.",
  },
  {
    ticker: "DFILF",
    title: "DAIRY FARM INTERNATIONAL HOLDINGS LTD /FI",
  },
  {
    ticker: "SLFPF",
    title: "STANDARD LIFE PLC",
  },
  {
    ticker: "FNMAT",
    title: "FEDERAL NATIONAL MORTGAGE ASSOCIATION FANNIE MAE",
  },
  {
    ticker: "SR-PA",
    title: "SPIRE INC",
  },
  {
    ticker: "BHFAP",
    title: "Brighthouse Financial, Inc.",
  },
  {
    ticker: "VLPNF",
    title: "VOESTALPINE AG",
  },
  {
    ticker: "TKAYF",
    title: "Just Eat Takeaway.com N.V.",
  },
  {
    ticker: "FNMAM",
    title: "FEDERAL NATIONAL MORTGAGE ASSOCIATION FANNIE MAE",
  },
  {
    ticker: "AL-PA",
    title: "AIR LEASE CORP",
  },
  {
    ticker: "CWEN-A",
    title: "Clearway Energy, Inc.",
  },
  {
    ticker: "CHFFF",
    title: "China Everbright International Limited/ADR",
  },
  {
    ticker: "PBI-PB",
    title: "PITNEY BOWES INC /DE/",
  },
  {
    ticker: "UA",
    title: "Under Armour, Inc.",
  },
  {
    ticker: "IRDEF",
    title: "Iren S.p.A./ADR",
  },
  {
    ticker: "EQC-PD",
    title: "Equity Commonwealth",
  },
  {
    ticker: "SLMBP",
    title: "SLM Corp",
  },
  {
    ticker: "SF-PB",
    title: "STIFEL FINANCIAL CORP",
  },
  {
    ticker: "FNMFM",
    title: "FEDERAL NATIONAL MORTGAGE ASSOCIATION FANNIE MAE",
  },
  {
    ticker: "FNMAJ",
    title: "FEDERAL NATIONAL MORTGAGE ASSOCIATION FANNIE MAE",
  },
  {
    ticker: "FNMFN",
    title: "FEDERAL NATIONAL MORTGAGE ASSOCIATION FANNIE MAE",
  },
  {
    ticker: "SRC-PA",
    title: "SPIRIT REALTY CAPITAL, INC.",
  },
  {
    ticker: "FNMAN",
    title: "FEDERAL NATIONAL MORTGAGE ASSOCIATION FANNIE MAE",
  },
  {
    ticker: "FNMAH",
    title: "FEDERAL NATIONAL MORTGAGE ASSOCIATION FANNIE MAE",
  },
  {
    ticker: "GLPGF",
    title: "GALAPAGOS NV",
  },
  {
    ticker: "FNMAG",
    title: "FEDERAL NATIONAL MORTGAGE ASSOCIATION FANNIE MAE",
  },
  {
    ticker: "WBS-PF",
    title: "WEBSTER FINANCIAL CORP",
  },
  {
    ticker: "FNMAK",
    title: "FEDERAL NATIONAL MORTGAGE ASSOCIATION FANNIE MAE",
  },
  {
    ticker: "WTFCM",
    title: "WINTRUST FINANCIAL CORP",
  },
  {
    ticker: "ABCZF",
    title: "Abcam plc",
  },
  {
    ticker: "FNB-PE",
    title: "FNB CORP/PA/",
  },
  {
    ticker: "ISBC",
    title: "Investors Bancorp, Inc.",
  },
  {
    ticker: "FNMAL",
    title: "FEDERAL NATIONAL MORTGAGE ASSOCIATION FANNIE MAE",
  },
  {
    ticker: "ESGRO",
    title: "Enstar Group LTD",
  },
  {
    ticker: "FNMAO",
    title: "FEDERAL NATIONAL MORTGAGE ASSOCIATION FANNIE MAE",
  },
  {
    ticker: "ESGRP",
    title: "Enstar Group LTD",
  },
  {
    ticker: "ASB-PE",
    title: "ASSOCIATED BANC-CORP",
  },
  {
    ticker: "TWO-PC",
    title: "TWO HARBORS INVESTMENT CORP.",
  },
  {
    ticker: "GAERF",
    title: "Central North Airport Group",
  },
  {
    ticker: "PEGRF",
    title: "Pennon Group Plc / ADR",
  },
  {
    ticker: "IIJIF",
    title: "INTERNET INITIATIVE JAPAN INC",
  },
  {
    ticker: "VLYPO",
    title: "VALLEY NATIONAL BANCORP",
  },
  {
    ticker: "VLYPP",
    title: "VALLEY NATIONAL BANCORP",
  },
  {
    ticker: "JTEKF",
    title: "JTEKT Corp",
  },
  {
    ticker: "REGI",
    title: "Renewable Energy Group, Inc.",
  },
  {
    ticker: "GEF-B",
    title: "GREIF, INC",
  },
  {
    ticker: "PEB-PE",
    title: "Pebblebrook Hotel Trust",
  },
  {
    ticker: "PEB-PF",
    title: "Pebblebrook Hotel Trust",
  },
  {
    ticker: "DFRYF",
    title: "Dufry AG/ADR",
  },
  {
    ticker: "RLJ-PA",
    title: "RLJ Lodging Trust",
  },
  {
    ticker: "LTSL",
    title: "LADENBURG THALMANN FINANCIAL SERVICES INC.",
  },
  {
    ticker: "CIM-PA",
    title: "CHIMERA INVESTMENT CORP",
  },
  {
    ticker: "RUSHB",
    title: "RUSH ENTERPRISES INC TX",
  },
  {
    ticker: "CIM-PB",
    title: "CHIMERA INVESTMENT CORP",
  },
  {
    ticker: "BZZUF",
    title: "BUZZI UNICEM S.p.A.",
  },
  {
    ticker: "TWO-PA",
    title: "TWO HARBORS INVESTMENT CORP.",
  },
  {
    ticker: "NS-PA",
    title: "NuStar Energy L.P.",
  },
  {
    ticker: "TWO-PB",
    title: "TWO HARBORS INVESTMENT CORP.",
  },
  {
    ticker: "WRB-PE",
    title: "BERKLEY W R CORP",
  },
  {
    ticker: "SAPMF",
    title: "SAIPEM S P A /FI",
  },
  {
    ticker: "CIM-PD",
    title: "CHIMERA INVESTMENT CORP",
  },
  {
    ticker: "CIM-PC",
    title: "CHIMERA INVESTMENT CORP",
  },
  {
    ticker: "MOG-B",
    title: "MOOG INC.",
  },
  {
    ticker: "LTSF",
    title: "LADENBURG THALMANN FINANCIAL SERVICES INC.",
  },
  {
    ticker: "WELPP",
    title: "WISCONSIN ELECTRIC POWER CO",
  },
  {
    ticker: "NS-PB",
    title: "NuStar Energy L.P.",
  },
  {
    ticker: "HOVNP",
    title: "HOVNANIAN ENTERPRISES INC",
  },
  {
    ticker: "WLL",
    title: "WHITING PETROLEUM CORP",
  },
  {
    ticker: "DLKGF",
    title: "Delek Group, Ltd.",
  },
  {
    ticker: "SFRGF",
    title: "Salvatore Ferragamo S.p.A./ADR",
  },
  {
    ticker: "IHRTB",
    title: "iHeartMedia, Inc.",
  },
  {
    ticker: "AILLN",
    title: "Ameren Illinois Co",
  },
  {
    ticker: "BCNAF",
    title: "Barco NV",
  },
  {
    ticker: "MFA-PB",
    title: "MFA FINANCIAL, INC.",
  },
  {
    ticker: "NSA-PA",
    title: "National Storage Affiliates Trust",
  },
  {
    ticker: "AZIHF",
    title: "Azimut Holding SpA/ADR",
  },
  {
    ticker: "SOCGP",
    title: "SOUTHERN CALIFORNIA GAS CO",
  },
  {
    ticker: "IDBHF",
    title: "Industrias Bachoco S.A.B. de C.V.",
  },
  {
    ticker: "ALBKF",
    title: "ALPHA BANK AE /FI",
  },
  {
    ticker: "FMCKO",
    title: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    ticker: "FISK",
    title: "Empire State Realty OP, L.P.",
  },
  {
    ticker: "TRTN-PA",
    title: "Triton International Ltd",
  },
  {
    ticker: "SITC-PA",
    title: "SITE Centers Corp.",
  },
  {
    ticker: "NS-PC",
    title: "NuStar Energy L.P.",
  },
  {
    ticker: "TROLB",
    title: "TOOTSIE ROLL INDUSTRIES INC",
  },
  {
    ticker: "THNPF",
    title: "Technip Energies N.V.",
  },
  {
    ticker: "FMCKJ",
    title: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    ticker: "CENTA",
    title: "CENTRAL GARDEN & PET CO",
  },
  {
    ticker: "LXP-PC",
    title: "LXP Industrial Trust",
  },
  {
    ticker: "GNGYF",
    title: "GUANGSHEN RAILWAY CO LTD",
  },
  {
    ticker: "OAS",
    title: "Oasis Petroleum Inc.",
  },
  {
    ticker: "GROUF",
    title: "Grafton Group plc",
  },
  {
    ticker: "FMCKL",
    title: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    ticker: "HGMCF",
    title: "HARMONY GOLD MINING CO LTD",
  },
  {
    ticker: "FMCKM",
    title: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    ticker: "APELY",
    title: "ALPS ALPINE CO., LTD.",
  },
  {
    ticker: "OGCP",
    title: "Empire State Realty OP, L.P.",
  },
  {
    ticker: "TGSNF",
    title: "TGS NOPEC Geophysical CO",
  },
  {
    ticker: "FMCKN",
    title: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    ticker: "FREGP",
    title: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    ticker: "TCMFF",
    title: "TELECOM ARGENTINA SA",
  },
  {
    ticker: "FMCCS",
    title: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    ticker: "FMCCP",
    title: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    ticker: "LGF-B",
    title: "LIONS GATE ENTERTAINMENT CORP /CN/",
  },
  {
    ticker: "FMCCI",
    title: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    ticker: "FMCCO",
    title: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    ticker: "FREJN",
    title: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    ticker: "LILAB",
    title: "Liberty Latin America Ltd.",
  },
  {
    ticker: "FMCKI",
    title: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    ticker: "VTKLF",
    title: "VTECH HOLDINGS LTD/ADR/",
  },
  {
    ticker: "FMCCK",
    title: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    ticker: "FMCCN",
    title: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    ticker: "SAUHF",
    title: "Straumann Holding AG / ADR",
  },
  {
    ticker: "FMCCG",
    title: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    ticker: "NSS",
    title: "NuStar Energy L.P.",
  },
  {
    ticker: "ITPOF",
    title: "INTERTAPE POLYMER GROUP INC",
  },
  {
    ticker: "LILAK",
    title: "Liberty Latin America Ltd.",
  },
  {
    ticker: "FMCCH",
    title: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    ticker: "FMCCJ",
    title: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    ticker: "FMCCL",
    title: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    ticker: "APELF",
    title: "ALPS ALPINE CO., LTD.",
  },
  {
    ticker: "GDV-PH",
    title: "GABELLI DIVIDEND & INCOME TRUST",
  },
  {
    ticker: "IVR-PC",
    title: "Invesco Mortgage Capital Inc.",
  },
  {
    ticker: "IVR-PB",
    title: "Invesco Mortgage Capital Inc.",
  },
  {
    ticker: "ATGSF",
    title: "Autogrill SpA",
  },
  {
    ticker: "SLCJF",
    title: "SLC Agricola S.A.",
  },
  {
    ticker: "AKO-B",
    title: "ANDINA BOTTLING CO INC",
  },
  {
    ticker: "TVTY",
    title: "TIVITY HEALTH, INC.",
  },
  {
    ticker: "GTN-A",
    title: "GRAY TELEVISION INC",
  },
  {
    ticker: "BFS-PD",
    title: "SAUL CENTERS, INC.",
  },
  {
    ticker: "SIOPF",
    title: "Shimao Group Holdings Limited/ADR",
  },
  {
    ticker: "UBEOY",
    title: "Ube Industries Ltd",
  },
  {
    ticker: "GNL-PA",
    title: "Global Net Lease, Inc.",
  },
  {
    ticker: "MICCF",
    title: "MILLICOM INTERNATIONAL CELLULAR SA",
  },
  {
    ticker: "UBEOF",
    title: "Ube Industries Ltd",
  },
  {
    ticker: "QRTEB",
    title: "Qurate Retail, Inc.",
  },
  {
    ticker: "GAB-PH",
    title: "GABELLI EQUITY TRUST INC",
  },
  {
    ticker: "SRG-PA",
    title: "Seritage Growth Properties",
  },
  {
    ticker: "PMT-PB",
    title: "PennyMac Mortgage Investment Trust",
  },
  {
    ticker: "MHLA",
    title: "Maiden Holdings, Ltd.",
  },
  {
    ticker: "BATRB",
    title: "Liberty Media Corp",
  },
  {
    ticker: "CRNZF",
    title: "CAIRN ENERGY PLC",
  },
  {
    ticker: "PMT-PA",
    title: "PennyMac Mortgage Investment Trust",
  },
  {
    ticker: "MCFUF",
    title: "MICRO FOCUS INTERNATIONAL PLC",
  },
  {
    ticker: "GLOG-PA",
    title: "GasLog Ltd.",
  },
  {
    ticker: "AHL-PD",
    title: "ASPEN INSURANCE HOLDINGS LTD",
  },
  {
    ticker: "HCXY",
    title: "Hercules Capital, Inc.",
  },
  {
    ticker: "BATRA",
    title: "Liberty Media Corp",
  },
  {
    ticker: "STSFF",
    title: "SmartStop Self Storage REIT, Inc.",
  },
  {
    ticker: "BATRK",
    title: "Liberty Media Corp",
  },
  {
    ticker: "OXSQL",
    title: "Oxford Square Capital Corp.",
  },
  {
    ticker: "CODI-PB",
    title: "Compass Diversified Holdings",
  },
  {
    ticker: "PLLTL",
    title: "Piedmont Lithium Inc.",
  },
  {
    ticker: "CODI-PA",
    title: "Compass Diversified Holdings",
  },
  {
    ticker: "BPIRF",
    title: "Piraeus Bank S.A.",
  },
  {
    ticker: "GLOP-PA",
    title: "GasLog Partners LP",
  },
  {
    ticker: "EAI",
    title: "ENTERGY ARKANSAS, LLC",
  },
  {
    ticker: "AHH-PA",
    title: "Armada Hoffler Properties, Inc.",
  },
  {
    ticker: "AGM-A",
    title: "FEDERAL AGRICULTURAL MORTGAGE CORP",
  },
  {
    ticker: "GLOP-PB",
    title: "GasLog Partners LP",
  },
  {
    ticker: "NYMTN",
    title: "NEW YORK MORTGAGE TRUST INC",
  },
  {
    ticker: "BRCHF",
    title: "Brainchip Holdings Limited/ADR",
  },
  {
    ticker: "GLOP-PC",
    title: "GasLog Partners LP",
  },
  {
    ticker: "HL-PB",
    title: "HECLA MINING CO/DE/",
  },
  {
    ticker: "TANNI",
    title: "TravelCenters of America Inc. /MD/",
  },
  {
    ticker: "TANNL",
    title: "TravelCenters of America Inc. /MD/",
  },
  {
    ticker: "TANNZ",
    title: "TravelCenters of America Inc. /MD/",
  },
  {
    ticker: "NGL-PB",
    title: "NGL Energy Partners LP",
  },
  {
    ticker: "INN-PE",
    title: "Summit Hotel Properties, Inc.",
  },
  {
    ticker: "NGL-PC",
    title: "NGL Energy Partners LP",
  },
  {
    ticker: "IIPR-PA",
    title: "INNOVATIVE INDUSTRIAL PROPERTIES INC",
  },
  {
    ticker: "GSKY",
    title: "GreenSky, Inc.",
  },
  {
    ticker: "CONX",
    title: "CONX Corp.",
  },
  {
    ticker: "CHTH",
    title: "CNL Healthcare Properties, Inc.",
  },
  {
    ticker: "GAM-PB",
    title: "GENERAL AMERICAN INVESTORS CO INC",
  },
  {
    ticker: "SBOEF",
    title: "Schoeller-Bleckmann Oilfield Equipment AG/ADR",
  },
  {
    ticker: "SRRA",
    title: "Sierra Oncology, Inc.",
  },
  {
    ticker: "AGM-PC",
    title: "FEDERAL AGRICULTURAL MORTGAGE CORP",
  },
  {
    ticker: "CELJF",
    title: "Cellcom Israel Ltd.",
  },
  {
    ticker: "CADNF",
    title: "CASCADES INC",
  },
  {
    ticker: "NVNXF",
    title: "NOVONIX Ltd",
  },
  {
    ticker: "KELYB",
    title: "KELLY SERVICES INC",
  },
  {
    ticker: "SAFLF",
    title: "Safilo Group SpA/ADR",
  },
  {
    ticker: "STAR-PD",
    title: "ISTAR INC.",
  },
  {
    ticker: "STAR-PG",
    title: "ISTAR INC.",
  },
  {
    ticker: "FPAC-UN",
    title: "Far Peak Acquisition Corp",
  },
  {
    ticker: "STAR-PI",
    title: "ISTAR INC.",
  },
  {
    ticker: "INSW-PA",
    title: "International Seaways, Inc.",
  },
  {
    ticker: "AGM-PD",
    title: "FEDERAL AGRICULTURAL MORTGAGE CORP",
  },
  {
    ticker: "MPSYF",
    title: "MorphoSys AG",
  },
  {
    ticker: "UBP-PH",
    title: "URSTADT BIDDLE PROPERTIES INC",
  },
  {
    ticker: "GLP-PA",
    title: "GLOBAL PARTNERS LP",
  },
  {
    ticker: "CWGRP",
    title: "COWEN INC.",
  },
  {
    ticker: "ACBI",
    title: "Atlantic Capital Bancshares, Inc.",
  },
  {
    ticker: "UBA",
    title: "URSTADT BIDDLE PROPERTIES INC",
  },
  {
    ticker: "CMRE-PB",
    title: "Costamare Inc.",
  },
  {
    ticker: "NPACF",
    title: "Quadient S.A./ADR",
  },
  {
    ticker: "AIC",
    title: "Arlington Asset Investment Corp.",
  },
  {
    ticker: "CMRE-PD",
    title: "Costamare Inc.",
  },
  {
    ticker: "HT-PE",
    title: "HERSHA HOSPITALITY TRUST",
  },
  {
    ticker: "CUBI-PE",
    title: "Customers Bancorp, Inc.",
  },
  {
    ticker: "VSLCX",
    title: "Invesco Senior Loan Fund",
  },
  {
    ticker: "CMRE-PC",
    title: "Costamare Inc.",
  },
  {
    ticker: "HT-PD",
    title: "HERSHA HOSPITALITY TRUST",
  },
  {
    ticker: "VSLYX",
    title: "Invesco Senior Loan Fund",
  },
  {
    ticker: "CUBI-PF",
    title: "Customers Bancorp, Inc.",
  },
  {
    ticker: "HLTC",
    title: "Healthcare Trust, Inc.",
  },
  {
    ticker: "GGN-PB",
    title: "GAMCO Global Gold, Natural Resources & Income Trust",
  },
  {
    ticker: "CMRE-PE",
    title: "Costamare Inc.",
  },
  {
    ticker: "BCOMF",
    title: "B COMMUNICATIONS LTD",
  },
  {
    ticker: "HT-PC",
    title: "HERSHA HOSPITALITY TRUST",
  },
  {
    ticker: "ENMPF",
    title: "Ensurge Micropower ASA/ADR",
  },
  {
    ticker: "GGT-PE",
    title: "GABELLI MULTIMEDIA TRUST INC.",
  },
  {
    ticker: "BDSI",
    title: "BIODELIVERY SCIENCES INTERNATIONAL INC",
  },
  {
    ticker: "UMH-PD",
    title: "UMH PROPERTIES, INC.",
  },
  {
    ticker: "DGICB",
    title: "DONEGAL GROUP INC",
  },
  {
    ticker: "HMLP-PA",
    title: "Hoegh LNG Partners LP",
  },
  {
    ticker: "ELLKF",
    title: "Ellaktor SA / ADR",
  },
  {
    ticker: "UMH-PC",
    title: "UMH PROPERTIES, INC.",
  },
  {
    ticker: "BVHBB",
    title: "Bluegreen Vacations Holding Corp",
  },
  {
    ticker: "DRDGF",
    title: "DRDGOLD LTD",
  },
  {
    ticker: "SNRH",
    title: "Senior Connect Acquisition Corp. I",
  },
  {
    ticker: "CLVLF",
    title: "Clinuvel Pharmaceuticals Ltd",
  },
  {
    ticker: "SENEB",
    title: "Seneca Foods Corp",
  },
  {
    ticker: "NCV-PA",
    title: "Virtus AllianzGI Convertible & Income Fund",
  },
  {
    ticker: "AMSIY",
    title: "ArcelorMittal",
  },
  {
    ticker: "OXLCM",
    title: "Oxford Lane Capital Corp.",
  },
  {
    ticker: "BRCPF",
    title: "BrasilAgro - Brazilian Agricultural Real Estate Co",
  },
  {
    ticker: "TACO",
    title: "Del Taco Restaurants, Inc.",
  },
  {
    ticker: "OIBZQ",
    title: "OI S.A. - In Judicial Reorganization",
  },
  {
    ticker: "GSS",
    title: "GOLDEN STAR RESOURCES LTD.",
  },
  {
    ticker: "ARCXF",
    title: "ArcelorMittal",
  },
  {
    ticker: "ECCX",
    title: "Eagle Point Credit Co Inc.",
  },
  {
    ticker: "HVT-A",
    title: "HAVERTY FURNITURE COMPANIES INC",
  },
  {
    ticker: "MBINP",
    title: "Merchants Bancorp",
  },
  {
    ticker: "ERES",
    title: "East Resources Acquisition Co",
  },
  {
    ticker: "AVDR",
    title: "AVEDRO INC",
  },
  {
    ticker: "CIO-PA",
    title: "City Office REIT, Inc.",
  },
  {
    ticker: "ENRFF",
    title: "Enerflex Ltd.",
  },
  {
    ticker: "OXLCO",
    title: "Oxford Lane Capital Corp.",
  },
  {
    ticker: "GMRE-PA",
    title: "Global Medical REIT Inc.",
  },
  {
    ticker: "ARTNB",
    title: "ARTESIAN RESOURCES CORP",
  },
  {
    ticker: "KOR",
    title: "Corvus Gold ULC",
  },
  {
    ticker: "SLNCF",
    title: "Silence Therapeutics plc",
  },
  {
    ticker: "MITT-PA",
    title: "AG Mortgage Investment Trust, Inc.",
  },
  {
    ticker: "APYP",
    title: "APPYEA, INC",
  },
  {
    ticker: "LANDM",
    title: "GLADSTONE LAND Corp",
  },
  {
    ticker: "MITT-PB",
    title: "AG Mortgage Investment Trust, Inc.",
  },
  {
    ticker: "HAWLN",
    title: "HAWAIIAN ELECTRIC CO INC",
  },
  {
    ticker: "BH",
    title: "Biglari Holdings Inc.",
  },
  {
    ticker: "PCOM",
    title: "POINTS.COM INC.",
  },
  {
    ticker: "CORR-PA",
    title: "CorEnergy Infrastructure Trust, Inc.",
  },
  {
    ticker: "IGAC",
    title: "IG Acquisition Corp.",
  },
  {
    ticker: "SPLP-PA",
    title: "STEEL PARTNERS HOLDINGS L.P.",
  },
  {
    ticker: "GUT-PC",
    title: "GABELLI UTILITY TRUST",
  },
  {
    ticker: "BHR-PD",
    title: "Braemar Hotels & Resorts Inc.",
  },
  {
    ticker: "BKEPP",
    title: "Blueknight Energy Partners, L.P.",
  },
  {
    ticker: "NCZ-PA",
    title: "Virtus AllianzGI Convertible & Income Fund II",
  },
  {
    ticker: "CRD-B",
    title: "CRAWFORD & CO",
  },
  {
    ticker: "THPTF",
    title: "Techpoint, Inc.",
  },
  {
    ticker: "DHBCU",
    title: "DHB Capital Corp.",
  },
  {
    ticker: "AHT-PH",
    title: "ASHFORD HOSPITALITY TRUST INC",
  },
  {
    ticker: "CNLPL",
    title: "CONNECTICUT LIGHT & POWER CO",
  },
  {
    ticker: "LLNW",
    title: "Edgio, Inc.",
  },
  {
    ticker: "CNTHP",
    title: "CONNECTICUT LIGHT & POWER CO",
  },
  {
    ticker: "BRG-PD",
    title: "Bluerock Residential Growth REIT, Inc.",
  },
  {
    ticker: "FGPRB",
    title: "FERRELLGAS PARTNERS L P",
  },
  {
    ticker: "AHT-PG",
    title: "ASHFORD HOSPITALITY TRUST INC",
  },
  {
    ticker: "AHT-PF",
    title: "ASHFORD HOSPITALITY TRUST INC",
  },
  {
    ticker: "NCACU",
    title: "Newcourt Acquisition Corp",
  },
  {
    ticker: "DSX-PB",
    title: "DIANA SHIPPING INC.",
  },
  {
    ticker: "AHT-PD",
    title: "ASHFORD HOSPITALITY TRUST INC",
  },
  {
    ticker: "BRG-PC",
    title: "Bluerock Residential Growth REIT, Inc.",
  },
  {
    ticker: "BHR-PB",
    title: "Braemar Hotels & Resorts Inc.",
  },
  {
    ticker: "ATROB",
    title: "ASTRONICS CORP",
  },
  {
    ticker: "CNTHN",
    title: "CONNECTICUT LIGHT & POWER CO",
  },
  {
    ticker: "MEOBF",
    title: "MESOBLAST LTD",
  },
  {
    ticker: "AHT-PI",
    title: "ASHFORD HOSPITALITY TRUST INC",
  },
  {
    ticker: "GNE-PA",
    title: "Genie Energy Ltd.",
  },
  {
    ticker: "VRRMW",
    title: "VERRA MOBILITY Corp",
  },
  {
    ticker: "TNP-PD",
    title: "TSAKOS ENERGY NAVIGATION LTD",
  },
  {
    ticker: "TNP-PE",
    title: "TSAKOS ENERGY NAVIGATION LTD",
  },
  {
    ticker: "TLMD",
    title: "SOC Telemed, Inc.",
  },
  {
    ticker: "TNP-PF",
    title: "TSAKOS ENERGY NAVIGATION LTD",
  },
  {
    ticker: "HBP",
    title: "HUTTIG BUILDING PRODUCTS INC",
  },
  {
    ticker: "VWTR",
    title: "VIDLER WATER RESOURCES, INC.",
  },
  {
    ticker: "CNLHP",
    title: "CONNECTICUT LIGHT & POWER CO",
  },
  {
    ticker: "VTIQU",
    title: "VectoIQ Acquisition Corp. II",
  },
  {
    ticker: "CHMI-PB",
    title: "Cherry Hill Mortgage Investment Corp",
  },
  {
    ticker: "IQMDU",
    title: "Intelligent Medicine Acquisition Corp.",
  },
  {
    ticker: "CNLHO",
    title: "CONNECTICUT LIGHT & POWER CO",
  },
  {
    ticker: "CNLTP",
    title: "CONNECTICUT LIGHT & POWER CO",
  },
  {
    ticker: "DS-PB",
    title: "Drive Shack Inc.",
  },
  {
    ticker: "CNLPM",
    title: "CONNECTICUT LIGHT & POWER CO",
  },
  {
    ticker: "MUDSU",
    title: "Mudrick Capital Acquisition Corp. II",
  },
  {
    ticker: "LFTR",
    title: "Lefteris Acquisition Corp.",
  },
  {
    ticker: "CNPWP",
    title: "CONNECTICUT LIGHT & POWER CO",
  },
  {
    ticker: "DS-PD",
    title: "Drive Shack Inc.",
  },
  {
    ticker: "UONEK",
    title: "URBAN ONE, INC.",
  },
  {
    ticker: "RICO",
    title: "Agrico Acquisition Corp.",
  },
  {
    ticker: "CHMI-PA",
    title: "Cherry Hill Mortgage Investment Corp",
  },
  {
    ticker: "VSOGF",
    title: "Vista Energy, S.A.B. de C.V.",
  },
  {
    ticker: "LHC-UN",
    title: "Leo Holdings Corp. II",
  },
  {
    ticker: "SRNW",
    title: "Stratos Renewables Corp",
  },
  {
    ticker: "IPHYF",
    title: "Innate Pharma SA",
  },
  {
    ticker: "DS-PC",
    title: "Drive Shack Inc.",
  },
  {
    ticker: "JCO",
    title: "Nuveen Credit Opportunities 2022 Target Term Fund",
  },
  {
    ticker: "ACAQ-UN",
    title: "Athena Consumer Acquisition Corp.",
  },
  {
    ticker: "LNDNF",
    title: "Lundin Petroleum AB",
  },
  {
    ticker: "ASEPF",
    title: "ALPINE SUMMIT ENERGY PARTNERS, INC.",
  },
  {
    ticker: "RVRF",
    title: "River Financial Corp",
  },
  {
    ticker: "ENO",
    title: "ENTERGY NEW ORLEANS, LLC",
  },
  {
    ticker: "AIXN",
    title: "AiXin Life International, Inc.",
  },
  {
    ticker: "BGLC",
    title: "BioNexus Gene Lab Corp",
  },
  {
    ticker: "BELFB",
    title: "BEL FUSE INC /NJ",
  },
  {
    ticker: "PLYM-PA",
    title: "Plymouth Industrial REIT, Inc.",
  },
  {
    ticker: "ITEPF",
    title: "ITE Group plc/ADR",
  },
  {
    ticker: "PRIVX",
    title: "Private Shares Fund",
  },
  {
    ticker: "GWIN",
    title: "GLORYWIN ENTERTAINMENT GROUP, INC.",
  },
  {
    ticker: "PRLVX",
    title: "Private Shares Fund",
  },
  {
    ticker: "ARBKF",
    title: "Argo Blockchain Plc",
  },
  {
    ticker: "SB-PC",
    title: "SAFE BULKERS, INC.",
  },
  {
    ticker: "SB-PD",
    title: "SAFE BULKERS, INC.",
  },
  {
    ticker: "RTNXF",
    title: "Renalytix plc",
  },
  {
    ticker: "QTRHF",
    title: "Quarterhill Inc.",
  },
  {
    ticker: "THCC",
    title: "Healing Co Inc.",
  },
  {
    ticker: "ACRDF",
    title: "Acreage Holdings, Inc.",
  },
  {
    ticker: "DLNG-PA",
    title: "Dynagas LNG Partners LP",
  },
  {
    ticker: "RLFTF",
    title: "Relief Therapeutics Holding SA",
  },
  {
    ticker: "BBXIB",
    title: "BBX Capital, Inc.",
  },
  {
    ticker: "PHIG",
    title: "PHI Group, Inc./DE",
  },
  {
    ticker: "CPTAL",
    title: "Logan Ridge Finance Corp.",
  },
  {
    ticker: "ADRE",
    title: "INVESCO BLDRS INDEX FUNDS TRUST",
  },
  {
    ticker: "CPTAG",
    title: "Logan Ridge Finance Corp.",
  },
  {
    ticker: "ECF-PA",
    title: "ELLSWORTH GROWTH & INCOME FUND LTD",
  },
  {
    ticker: "LTRPB",
    title: "Liberty TripAdvisor Holdings, Inc.",
  },
  {
    ticker: "GOFF",
    title: "GOFF, CORP",
  },
  {
    ticker: "EZOO",
    title: "Ezagoo Ltd",
  },
  {
    ticker: "RDIB",
    title: "READING INTERNATIONAL INC",
  },
  {
    ticker: "BCV-PA",
    title: "BANCROFT FUND LTD",
  },
  {
    ticker: "FATBB",
    title: "Fat Brands, Inc",
  },
  {
    ticker: "KHDHF",
    title: "Scully Royalty Ltd.",
  },
  {
    ticker: "MTBCP",
    title: "CareCloud, Inc.",
  },
  {
    ticker: "NM-PH",
    title: "Navios Maritime Holdings Inc.",
  },
  {
    ticker: "FBIOP",
    title: "Fortress Biotech, Inc.",
  },
  {
    ticker: "GLU-PB",
    title: "GABELLI GLOBAL UTILITY & INCOME TRUST",
  },
  {
    ticker: "PKKFF",
    title: "Tenet Fintech Group Inc.",
  },
  {
    ticker: "EXROF",
    title: "EXRO TECHNOLOGIES INC.",
  },
  {
    ticker: "CDR-PB",
    title: "CEDAR REALTY TRUST, INC.",
  },
  {
    ticker: "VOXCF",
    title: "Vox Royalty Corp.",
  },
  {
    ticker: "GSL-PB",
    title: "Global Ship Lease, Inc.",
  },
  {
    ticker: "NM-PG",
    title: "Navios Maritime Holdings Inc.",
  },
  {
    ticker: "DLNG-PB",
    title: "Dynagas LNG Partners LP",
  },
  {
    ticker: "RSF",
    title: "RiverNorth Specialty Finance Corp",
  },
  {
    ticker: "SOHOO",
    title: "Sotherly Hotels Inc.",
  },
  {
    ticker: "SOHOB",
    title: "Sotherly Hotels Inc.",
  },
  {
    ticker: "PKDC",
    title: "PARKER DRILLING CO /DE/",
  },
  {
    ticker: "TAOFF",
    title: "IPERIONX Ltd",
  },
  {
    ticker: "CSSEP",
    title: "Chicken Soup for the Soul Entertainment, Inc.",
  },
  {
    ticker: "SOHON",
    title: "Sotherly Hotels Inc.",
  },
  {
    ticker: "IHTA",
    title: "Invesco High Income 2024 Target Term Fund",
  },
  {
    ticker: "CDR-PC",
    title: "CEDAR REALTY TRUST, INC.",
  },
  {
    ticker: "FFLWF",
    title: "Fire & Flower Holdings Corp.",
  },
  {
    ticker: "PXCLF",
    title: "Phoenix Copper Limited/ADR",
  },
  {
    ticker: "DEFTF",
    title: "Defi Technologies, Inc.",
  },
  {
    ticker: "MH-PC",
    title: "Maiden Holdings, Ltd.",
  },
  {
    ticker: "CXKJ",
    title: "Kun Peng International Ltd.",
  },
  {
    ticker: "MH-PA",
    title: "Maiden Holdings, Ltd.",
  },
  {
    ticker: "OFSTF",
    title: "Carbon Streaming Corp",
  },
  {
    ticker: "PEI-PB",
    title: "PENNSYLVANIA REAL ESTATE INVESTMENT TRUST",
  },
  {
    ticker: "CBMB",
    title: "CBM BANCORP, INC.",
  },
  {
    ticker: "GRFXY",
    title: "Graphex Group Ltd",
  },
  {
    ticker: "CHEAF",
    title: "CHINA EASTERN AIRLINES CORP LTD",
  },
  {
    ticker: "PEI-PC",
    title: "PENNSYLVANIA REAL ESTATE INVESTMENT TRUST",
  },
  {
    ticker: "PEI-PD",
    title: "PENNSYLVANIA REAL ESTATE INVESTMENT TRUST",
  },
  {
    ticker: "BCTF",
    title: "Bancorp 34, Inc.",
  },
  {
    ticker: "LBTD",
    title: "Lotus Bio-Technology Development Corp.",
  },
  {
    ticker: "SUME",
    title: "SUMMER ENERGY HOLDINGS INC",
  },
  {
    ticker: "NEXCF",
    title: "NexTech AR Solutions Corp.",
  },
  {
    ticker: "EMMS",
    title: "EMMIS COMMUNICATIONS CORP",
  },
  {
    ticker: "ARFXF",
    title: "ProMIS Neurosciences Inc.",
  },
  {
    ticker: "GNTLF",
    title: "GENETIC TECHNOLOGIES LTD",
  },
  {
    ticker: "NSEC",
    title: "NATIONAL SECURITY GROUP INC",
  },
  {
    ticker: "OTTW",
    title: "Ottawa Bancorp Inc",
  },
  {
    ticker: "EDTXU",
    title: "EdtechX Holdings Acquisition Corp. II",
  },
  {
    ticker: "WBSR",
    title: "Webstar Technology Group Inc.",
  },
  {
    ticker: "WVVIP",
    title: "WILLAMETTE VALLEY VINEYARDS INC",
  },
  {
    ticker: "AVLNF",
    title: "Avalon Advanced Materials Inc.",
  },
  {
    ticker: "OASMY",
    title: "Oasmia Pharmaceutical AB",
  },
  {
    ticker: "WSKEF",
    title: "Wisekey International Holding S.A.",
  },
  {
    ticker: "EFBI",
    title: "Eagle Financial Bancorp, Inc.",
  },
  {
    ticker: "WVFC",
    title: "WVS FINANCIAL CORP",
  },
  {
    ticker: "SUMR",
    title: "Summer Infant, Inc.",
  },
  {
    ticker: "HRGG",
    title: "Heritage NOLA Bancorp, Inc.",
  },
  {
    ticker: "SGLDF",
    title: "KIDOZ INC.",
  },
  {
    ticker: "PRNAF",
    title: "ALTERITY THERAPEUTICS LTD",
  },
  {
    ticker: "MINDP",
    title: "MIND TECHNOLOGY, INC",
  },
  {
    ticker: "LNDZF",
    title: "Salona Global Medical Device Corp",
  },
  {
    ticker: "SNIPF",
    title: "Snipp Interactive Inc.",
  },
  {
    ticker: "MBBC",
    title: "Marathon Bancorp, Inc. /MD/",
  },
  {
    ticker: "VMNT",
    title: "Vemanti Group, Inc.",
  },
  {
    ticker: "AFGC",
    title: "AMERICAN FINANCIAL GROUP INC",
  },
  {
    ticker: "TBBA",
    title: "TEB Bancorp, Inc.",
  },
  {
    ticker: "SMPR",
    title: "Standard Metals Processing, Inc.",
  },
  {
    ticker: "PWCO",
    title: "PwrCor, Inc.",
  },
  {
    ticker: "CODQL",
    title: "Coronado Global Resources Inc.",
  },
  {
    ticker: "HNCKF",
    title: "Giga Metals Corp",
  },
  {
    ticker: "INND",
    title: "INNERSCOPE HEARING TECHNOLOGIES, INC.",
  },
  {
    ticker: "QEGY",
    title: "QUANTUM ENERGY INC.",
  },
  {
    ticker: "SOLCF",
    title: "SOL Global Investments Corp.",
  },
  {
    ticker: "NORZF",
    title: "NORZINC LTD.",
  },
  {
    ticker: "EMITF",
    title: "ELBIT IMAGING LTD",
  },
  {
    ticker: "SGIC",
    title: "Strategic Realty Trust, Inc.",
  },
  {
    ticker: "WSTL",
    title: "WESTELL TECHNOLOGIES INC",
  },
  {
    ticker: "CYCCP",
    title: "Cyclacel Pharmaceuticals, Inc.",
  },
  {
    ticker: "SLNM",
    title: "SALON MEDIA GROUP INC",
  },
  {
    ticker: "PNGZF",
    title: "Paringa Resources Ltd",
  },
  {
    ticker: "JP",
    title: "Jupai Holdings Ltd",
  },
  {
    ticker: "OCGSF",
    title: "OUTCROP GOLD CORP",
  },
  {
    ticker: "WHLRD",
    title: "Wheeler Real Estate Investment Trust, Inc.",
  },
  {
    ticker: "TVC",
    title: "Tennessee Valley Authority",
  },
  {
    ticker: "BRLL",
    title: "Barrel Energy Inc.",
  },
  {
    ticker: "TVE",
    title: "Tennessee Valley Authority",
  },
  {
    ticker: "SINC",
    title: "Sincerity Applied Materials Holdings Corp.",
  },
  {
    ticker: "SCTY",
    title: "MONITRONICS INTERNATIONAL INC",
  },
  {
    ticker: "SBSAA",
    title: "SPANISH BROADCASTING SYSTEM INC",
  },
  {
    ticker: "EMHTF",
    title: "Emerald Health Therapeutics Inc.",
  },
  {
    ticker: "ZPAS",
    title: "Zoompass Holdings, Inc.",
  },
  {
    ticker: "ZYQG",
    title: "ZYQC Group Holding Ltd",
  },
  {
    ticker: "ADMQ",
    title: "ADM ENDEAVORS, INC.",
  },
  {
    ticker: "PLFX",
    title: "Pulse Evolution Corp",
  },
  {
    ticker: "GRNF",
    title: "GRN Holding Corp",
  },
  {
    ticker: "BETRF",
    title: "BetterLife Pharma Inc.",
  },
  {
    ticker: "GADS",
    title: "Gadsden Properties, Inc.",
  },
  {
    ticker: "WHLRP",
    title: "Wheeler Real Estate Investment Trust, Inc.",
  },
  {
    ticker: "BLEG",
    title: "Branded Legacy, Inc.",
  },
  {
    ticker: "RHE-PA",
    title: "REGIONAL HEALTH PROPERTIES, INC",
  },
  {
    ticker: "ISGN",
    title: "iSign Solutions Inc.",
  },
  {
    ticker: "REGRF",
    title: "GRAPH BLOCKCHAIN INC",
  },
  {
    ticker: "UCIX",
    title: "Umbra Companies, Inc.",
  },
  {
    ticker: "VXIT",
    title: "VirExit Technologies, Inc.",
  },
  {
    ticker: "UCASU",
    title: "UC Asset LP",
  },
  {
    ticker: "BDR",
    title: "BLONDER TONGUE LABORATORIES INC",
  },
  {
    ticker: "CETXP",
    title: "CEMTREX INC",
  },
  {
    ticker: "VERBW",
    title: "Verb Technology Company, Inc.",
  },
  {
    ticker: "ARGQ",
    title: "ARGENTUM 47, INC.",
  },
  {
    ticker: "FTRS",
    title: "Futuris Co",
  },
  {
    ticker: "MLLOF",
    title: "Medallion Resources Ltd",
  },
  {
    ticker: "SDTTU",
    title: "SandRidge Mississippian Trust I",
  },
  {
    ticker: "SCXLB",
    title: "STARRETT L S CO",
  },
  {
    ticker: "BTZI",
    title: "BOTS, Inc./PR",
  },
  {
    ticker: "INCT",
    title: "InCapta, Inc.",
  },
  {
    ticker: "ZENO",
    title: "ZENOSENSE, INC.",
  },
  {
    ticker: "GKIT",
    title: "GREENKRAFT, INC.",
  },
  {
    ticker: "BIEI",
    title: "PREMIER BIOMEDICAL INC",
  },
  {
    ticker: "KLDO",
    title: "Kaleido Biosciences, Inc.",
  },
  {
    ticker: "IGEX",
    title: "Indo Global Exchange(s) Pte, Ltd.",
  },
  {
    ticker: "CBPI",
    title: "China Botanic Pharmaceutical",
  },
  {
    ticker: "TRNF",
    title: "Taronis Fuels, Inc.",
  },
  {
    ticker: "ENCC",
    title: "LEGACY CARE PARTNERS INC.",
  },
  {
    ticker: "LAZYW",
    title: "Lazydays Holdings, Inc.",
  },
  {
    ticker: "GTTNQ",
    title: "GTT Communications, Inc.",
  },
  {
    ticker: "TAKD",
    title: "TRANSAKT LTD.",
  },
  {
    ticker: "PTOI",
    title: "Plastic2Oil, Inc.",
  },
  {
    ticker: "OXBRW",
    title: "OXBRIDGE RE HOLDINGS Ltd",
  },
  {
    ticker: "VMCS",
    title: "InnovaQor, Inc.",
  },
  {
    ticker: "RELT",
    title: "Reliant Holdings, Inc.",
  },
  {
    ticker: "RPNRF",
    title: "Rapid Nutrition PLC",
  },
  {
    ticker: "LMDCF",
    title: "LINGO MEDIA CORP",
  },
  {
    ticker: "PRKI",
    title: "Perk International Inc.",
  },
  {
    ticker: "ATVK",
    title: "Ameritek Ventures, Inc.",
  },
  {
    ticker: "MNKKQ",
    title: "Mallinckrodt plc",
  },
  {
    ticker: "STRI",
    title: "STR HOLDINGS, INC.",
  },
  {
    ticker: "OSTO",
    title: "ORIGINAL SIXTEEN TO ONE MINE INC /CA/",
  },
  {
    ticker: "PHCG",
    title: "Pure Harvest Corporate Group, Inc.",
  },
  {
    ticker: "XELAW",
    title: "Exela Technologies, Inc.",
  },
  {
    ticker: "IMUC",
    title: "ImmunoCellular Therapeutics, Ltd.",
  },
  {
    ticker: "DROP",
    title: "Fuse Science, Inc.",
  },
  {
    ticker: "ACCR",
    title: "Access-Power & Co., Inc.",
  },
  {
    ticker: "BOMH",
    title: "BOOMER HOLDINGS, INC.",
  },
  {
    ticker: "ABMT",
    title: "Advanced Biomedical Technologies Inc.",
  },
  {
    ticker: "OTTV",
    title: "Viva Entertainment Group Inc.",
  },
  {
    ticker: "BRQSW",
    title: "Borqs Technologies, Inc.",
  },
  {
    ticker: "GHAV",
    title: "GRAND HAVANA INC.",
  },
  {
    ticker: "WSRC",
    title: "WESTERN SIERRA RESOURCE Corp",
  },
  {
    ticker: "SIMP",
    title: "Simply, Inc.",
  },
  {
    ticker: "GNCA",
    title: "GENOCEA BIOSCIENCES, INC.",
  },
  {
    ticker: "RGBPP",
    title: "Regen BioPharma Inc",
  },
  {
    ticker: "RGUS",
    title: "REGI U S INC",
  },
  {
    ticker: "STRZ",
    title: "STAR BUFFET INC",
  },
  {
    ticker: "ASKH",
    title: "ASTIKA HOLDINGS INC.",
  },
  {
    ticker: "DGTW",
    title: "DigitalTown, Inc.",
  },
  {
    ticker: "EXLA",
    title: "Helmer Directional Drilling Corp.",
  },
  {
    ticker: "DCAC",
    title: "Daniels Corporate Advisory Company, Inc.",
  },
  {
    ticker: "KMGH",
    title: "Kemiao Garment Holding Group",
  },
  {
    ticker: "HDII",
    title: "HYPERTENSION DIAGNOSTICS INC /MN",
  },
  {
    ticker: "CTAM",
    title: "A. M. Castle & Co.",
  },
  {
    ticker: "FTXP",
    title: "FOOTHILLS EXPLORATION, INC.",
  },
  {
    ticker: "VHLD",
    title: "VECTOR 21 HOLDINGS, INC.",
  },
  {
    ticker: "YRIV",
    title: "Yangtze River Port & Logistics Ltd",
  },
  {
    ticker: "VITX",
    title: "GH Capital Inc.",
  },
  {
    ticker: "GVSI",
    title: "Good Vibrations Shoes, Inc.",
  },
  {
    ticker: "EVIO",
    title: "EVIO, INC.",
  },
  {
    ticker: "PSYC",
    title: "Telemynd, Inc.",
  },
  {
    ticker: "TGRO",
    title: "Tiger Oil & Energy, Inc.",
  },
  {
    ticker: "VBVT",
    title: "Viabuilt Ventures Inc.",
  },
  {
    ticker: "PSRU",
    title: "Valiant Eagle, Inc.",
  },
  {
    ticker: "ARTLW",
    title: "ARTELO BIOSCIENCES, INC.",
  },
  {
    ticker: "PDNLB",
    title: "PRESIDENTIAL REALTY CORP/DE/",
  },
  {
    ticker: "FAVO",
    title: "Favo Realty, Inc",
  },
  {
    ticker: "TURV",
    title: "TWO RIVERS WATER & FARMING Co",
  },
  {
    ticker: "VCBDQ",
    title: "Vitalibis, Inc.",
  },
  {
    ticker: "NBCO",
    title: "Neon Bloom, Inc.",
  },
  {
    ticker: "PFSF",
    title: "PACIFIC SOFTWARE, INC.",
  },
  {
    ticker: "OMPS",
    title: "OMPHALOS, CORP",
  },
  {
    ticker: "CLNV",
    title: "Clean Vision Corp",
  },
  {
    ticker: "REAC",
    title: "REAC GROUP, INC.",
  },
  {
    ticker: "LKAI",
    title: "LKA GOLD Inc /DE/",
  },
  {
    ticker: "CHCR",
    title: "Advanzeon Solutions, Inc.",
  },
  {
    ticker: "IGLDF",
    title: "INTERNET GOLD GOLDEN LINES LTD",
  },
  {
    ticker: "STWC",
    title: "STWC. Holdings, Inc.",
  },
  {
    ticker: "SIGO",
    title: "Sunset Island Group",
  },
  {
    ticker: "CRGS",
    title: "CurAegis Technologies, Inc.",
  },
  {
    ticker: "TCHC",
    title: "Tech Central, Inc.",
  },
  {
    ticker: "CBTC",
    title: "XTRA Bitcoin Inc.",
  },
  {
    ticker: "LITH",
    title: "U.S. Lithium Corp.",
  },
  {
    ticker: "SCOO",
    title: "SCHOOL SPECIALTY INC",
  },
  {
    ticker: "DBUB",
    title: "DBUB GROUP, INC",
  },
  {
    ticker: "RBNW",
    title: "Renewable Energy & Power, Inc.",
  },
  {
    ticker: "RPT-PD",
    title: "RPT Realty",
  },
  {
    ticker: "IIVIP",
    title: "II-VI INC",
  },
  {
    ticker: "UNTCW",
    title: "UNIT CORP",
  },
  {
    ticker: "T-PC",
    title: "AT&T INC.",
  },
  {
    ticker: "T-PA",
    title: "AT&T INC.",
  },
  {
    ticker: "TBC",
    title: "AT&T INC.",
  },
  {
    ticker: "SIGIP",
    title: "SELECTIVE INSURANCE GROUP INC",
  },
  {
    ticker: "KCAC-UN",
    title: "Kensington Capital Acquisition Corp. IV",
  },
  {
    ticker: "KCAC-WT",
    title: "Kensington Capital Acquisition Corp. IV",
  },
  {
    ticker: "PPYAW",
    title: "Papaya Growth Opportunity Corp. I",
  },
  {
    ticker: "SHUAU",
    title: "SHUAA Partners Acquisition Corp I",
  },
  {
    ticker: "EMLDW",
    title: "FTAC Emerald Acquisition Corp.",
  },
  {
    ticker: "PPYAU",
    title: "Papaya Growth Opportunity Corp. I",
  },
  {
    ticker: "ROCLW",
    title: "Roth CH Acquisition V Co.",
  },
  {
    ticker: "ROCLU",
    title: "Roth CH Acquisition V Co.",
  },
  {
    ticker: "TGVCW",
    title: "TG Venture Acquisition Corp.",
  },
  {
    ticker: "TGVCU",
    title: "TG Venture Acquisition Corp.",
  },
  {
    ticker: "TCBPW",
    title: "TC BioPharm (Holdings) plc",
  },
  {
    ticker: "LGVCU",
    title: "LAMF Global Ventures Corp. I",
  },
  {
    ticker: "LGVCW",
    title: "LAMF Global Ventures Corp. I",
  },
  {
    ticker: "ADSEW",
    title: "Ads-Tec Energy Public Ltd Co",
  },
  {
    ticker: "RWODR",
    title: "Redwoods Acquisition Corp.",
  },
  {
    ticker: "RWODU",
    title: "Redwoods Acquisition Corp.",
  },
  {
    ticker: "KCA-UN",
    title: "Kensington Capital Acquisition Corp. IV",
  },
  {
    ticker: "ALVOW",
    title: "Alvotech",
  },
  {
    ticker: "MTB-PH",
    title: "M&T BANK CORP",
  },
  {
    ticker: "WINVU",
    title: "WinVest Acquisition Corp.",
  },
  {
    ticker: "WINVR",
    title: "WinVest Acquisition Corp.",
  },
  {
    ticker: "WINVW",
    title: "WinVest Acquisition Corp.",
  },
  {
    ticker: "ADALW",
    title: "Anthemis Digital Acquisitions I Corp",
  },
  {
    ticker: "ADALU",
    title: "Anthemis Digital Acquisitions I Corp",
  },
  {
    ticker: "DWACW",
    title: "Digital World Acquisition Corp.",
  },
  {
    ticker: "DWACU",
    title: "Digital World Acquisition Corp.",
  },
  {
    ticker: "NFYS-WT",
    title: "Enphys Acquisition Corp.",
  },
  {
    ticker: "NFYS-UN",
    title: "Enphys Acquisition Corp.",
  },
  {
    ticker: "BIOSU",
    title: "BioPlus Acquisition Corp.",
  },
  {
    ticker: "BIOSW",
    title: "BioPlus Acquisition Corp.",
  },
  {
    ticker: "CINGW",
    title: "Cingulate Inc.",
  },
  {
    ticker: "RRAC-UN",
    title: "Rigel Resource Acquisition Corp.",
  },
  {
    ticker: "RRAC-WT",
    title: "Rigel Resource Acquisition Corp.",
  },
  {
    ticker: "GGGVR",
    title: "G3 VRM Acquisition Corp.",
  },
  {
    ticker: "GROV-WT",
    title: "Grove Collaborative Holdings, Inc.",
  },
  {
    ticker: "GTPBW",
    title: "Gores Technology Partners II, Inc.",
  },
  {
    ticker: "GTPBU",
    title: "Gores Technology Partners II, Inc.",
  },
  {
    ticker: "IPVA-WT",
    title: "InterPrivate II Acquisition Corp.",
  },
  {
    ticker: "IPVA-UN",
    title: "InterPrivate II Acquisition Corp.",
  },
  {
    ticker: "BYTSU",
    title: "BYTE Acquisition Corp.",
  },
  {
    ticker: "POND-WT",
    title: "Angel Pond Holdings Corp",
  },
  {
    ticker: "POND-UN",
    title: "Angel Pond Holdings Corp",
  },
  {
    ticker: "BYTSW",
    title: "BYTE Acquisition Corp.",
  },
  {
    ticker: "FMIVU",
    title: "Forum Merger IV Corp",
  },
  {
    ticker: "FMIVW",
    title: "Forum Merger IV Corp",
  },
  {
    ticker: "IVCPW",
    title: "Swiftmerge Acquisition Corp.",
  },
  {
    ticker: "SEDA-UN",
    title: "SDCL EDGE Acquisition Corp",
  },
  {
    ticker: "RONI-WT",
    title: "Rice Acquisition Corp. II",
  },
  {
    ticker: "RONI-UN",
    title: "Rice Acquisition Corp. II",
  },
  {
    ticker: "VCXB-UN",
    title: "10X Capital Venture Acquisition Corp. III",
  },
  {
    ticker: "LAXXU",
    title: "8i Acquisition 2 Corp.",
  },
  {
    ticker: "SEDA-WT",
    title: "SDCL EDGE Acquisition Corp",
  },
  {
    ticker: "LCW-WT",
    title: "Learn CW Investment Corp",
  },
  {
    ticker: "ERESW",
    title: "East Resources Acquisition Co",
  },
  {
    ticker: "EOSEW",
    title: "Eos Energy Enterprises, Inc.",
  },
  {
    ticker: "OWLT-WT",
    title: "Owlet, Inc.",
  },
  {
    ticker: "TPGY-UN",
    title: "TPG Pace Beneficial Finance Corp.",
  },
  {
    ticker: "CRHC-UN",
    title: "Cohn Robbins Holdings Corp.",
  },
  {
    ticker: "CRHC-WT",
    title: "Cohn Robbins Holdings Corp.",
  },
  {
    ticker: "HAACW",
    title: "Health Assurance Acquisition Corp.",
  },
  {
    ticker: "HAACU",
    title: "Health Assurance Acquisition Corp.",
  },
  {
    ticker: "OWL-WT",
    title: "BLUE OWL CAPITAL INC.",
  },
  {
    ticker: "GFX-WT",
    title: "Golden Falcon Acquisition Corp.",
  },
  {
    ticker: "GFX-UN",
    title: "Golden Falcon Acquisition Corp.",
  },
  {
    ticker: "GBTG-WT",
    title: "Global Business Travel Group, Inc.",
  },
  {
    ticker: "EUCRW",
    title: "Eucrates Biomedical Acquisition Corp.",
  },
  {
    ticker: "EUCRU",
    title: "Eucrates Biomedical Acquisition Corp.",
  },
  {
    ticker: "VELOW",
    title: "Velocity Acquisition Corp.",
  },
  {
    ticker: "VELOU",
    title: "Velocity Acquisition Corp.",
  },
  {
    ticker: "FSRDW",
    title: "Fast Radius, Inc.",
  },
  {
    ticker: "NAACU",
    title: "North Atlantic Acquisition Corp",
  },
  {
    ticker: "NAACW",
    title: "North Atlantic Acquisition Corp",
  },
  {
    ticker: "GROY-WT",
    title: "Gold Royalty Corp.",
  },
  {
    ticker: "TWNI-UN",
    title: "Tailwind International Acquisition Corp.",
  },
  {
    ticker: "TWNI-WT",
    title: "Tailwind International Acquisition Corp.",
  },
  {
    ticker: "BBAI-WT",
    title: "BigBear.ai Holdings, Inc.",
  },
  {
    ticker: "PL-WT",
    title: "Planet Labs PBC",
  },
  {
    ticker: "BODY-WT",
    title: "Beachbody Company, Inc.",
  },
  {
    ticker: "SPKBU",
    title: "Silver Spike Acquisition Corp II",
  },
  {
    ticker: "SPKBW",
    title: "Silver Spike Acquisition Corp II",
  },
  {
    ticker: "FTCVU",
    title: "Fintech Acquisition Corp V",
  },
  {
    ticker: "FTCVW",
    title: "Fintech Acquisition Corp V",
  },
  {
    ticker: "CFVIU",
    title: "CF Acquisition Corp. VI",
  },
  {
    ticker: "CFVIW",
    title: "CF Acquisition Corp. VI",
  },
  {
    ticker: "GMLPF",
    title: "Golar LNG Partners LP",
  },
  {
    ticker: "NBLWF",
    title: "Noble Corp",
  },
  {
    ticker: "HTFC",
    title: "Horizon Technology Finance Corp",
  },
  {
    ticker: "HTFB",
    title: "Horizon Technology Finance Corp",
  },
  {
    ticker: "BPYPN",
    title: "Brookfield Property Partners L.P.",
  },
  {
    ticker: "BPYPO",
    title: "Brookfield Property Partners L.P.",
  },
  {
    ticker: "JPPYY",
    title: "Jupai Holdings Ltd",
  },
  {
    ticker: "WFTUF",
    title: "Weatherford International plc",
  },
  {
    ticker: "CRCQW",
    title: "California Resources Corp",
  },
  {
    ticker: "EQCDX",
    title: "Equalize Community Development Fund",
  },
  {
    ticker: "LEXXW",
    title: "Lexaria Bioscience Corp.",
  },
  {
    ticker: "ROLLP",
    title: "RBC Bearings INC",
  },
  {
    ticker: "CADE-PA",
    title: "Cadence Bank",
  },
  {
    ticker: "SBNYP",
    title: "Signature Bank Corp",
  },
  {
    ticker: "MFA-PC",
    title: "MFA FINANCIAL, INC.",
  },
  {
    ticker: "GGT-PG",
    title: "GABELLI MULTIMEDIA TRUST INC.",
  },
  {
    ticker: "BFS-PE",
    title: "SAUL CENTERS, INC.",
  },
  {
    ticker: "BASWQ",
    title: "BASIC ENERGY SERVICES, INC.",
  },
  {
    ticker: "PNFPP",
    title: "PINNACLE FINANCIAL PARTNERS INC",
  },
  {
    ticker: "MGRD",
    title: "AFFILIATED MANAGERS GROUP, INC.",
  },
  {
    ticker: "MGRB",
    title: "AFFILIATED MANAGERS GROUP, INC.",
  },
  {
    ticker: "AATRL",
    title: "AFFILIATED MANAGERS GROUP, INC.",
  },
  {
    ticker: "MGR",
    title: "AFFILIATED MANAGERS GROUP, INC.",
  },
  {
    ticker: "AWCA",
    title: "Awaysis Capital, Inc.",
  },
  {
    ticker: "SREA",
    title: "SEMPRA ENERGY",
  },
  {
    ticker: "EXMWW",
    title: "Emmaus Life Sciences, Inc.",
  },
  {
    ticker: "STRRP",
    title: "STAR EQUITY HOLDINGS, INC.",
  },
  {
    ticker: "ARIZR",
    title: "Arisz Acquisition Corp.",
  },
  {
    ticker: "BDXB",
    title: "BECTON DICKINSON & CO",
  },
  {
    ticker: "KALWW",
    title: "Kalera Public Ltd Co",
  },
  {
    ticker: "AMJ",
    title: "JPMORGAN CHASE & CO",
  },
  {
    ticker: "JPM-PK",
    title: "JPMORGAN CHASE & CO",
  },
  {
    ticker: "JPM-PM",
    title: "JPMORGAN CHASE & CO",
  },
  {
    ticker: "JPM-PJ",
    title: "JPMORGAN CHASE & CO",
  },
  {
    ticker: "JPM-PL",
    title: "JPMORGAN CHASE & CO",
  },
  {
    ticker: "CELG-RI",
    title: "BRISTOL MYERS SQUIBB CO",
  },
  {
    ticker: "IRRX-WT",
    title: "INTEGRATED RAIL & RESOURCES ACQUISITION CORP",
  },
  {
    ticker: "IXAQW",
    title: "IX Acquisition Corp.",
  },
  {
    ticker: "IXAQU",
    title: "IX Acquisition Corp.",
  },
  {
    ticker: "OXACU",
    title: "Oxbridge Acquisition Corp.",
  },
  {
    ticker: "OXACW",
    title: "Oxbridge Acquisition Corp.",
  },
  {
    ticker: "INAQ-WT",
    title: "Insight Acquisition Corp. /DE",
  },
  {
    ticker: "GVCIU",
    title: "Green Visor Financial Technology Acquisition Corp I",
  },
  {
    ticker: "GVCIW",
    title: "Green Visor Financial Technology Acquisition Corp I",
  },
  {
    ticker: "NVACW",
    title: "NorthView Acquisition Corp",
  },
  {
    ticker: "NVACR",
    title: "NorthView Acquisition Corp",
  },
  {
    ticker: "MTVC-WT",
    title: "Motive Capital Corp II",
  },
  {
    ticker: "MTVC-UN",
    title: "Motive Capital Corp II",
  },
  {
    ticker: "ARIZW",
    title: "Arisz Acquisition Corp.",
  },
  {
    ticker: "VLN-WT",
    title: "Valens Semiconductor Ltd.",
  },
  {
    ticker: "PONOW",
    title: "Pono Capital Corp",
  },
  {
    ticker: "PEGRU",
    title: "Project Energy Reimagined Acquisition Corp.",
  },
  {
    ticker: "PEGRW",
    title: "Project Energy Reimagined Acquisition Corp.",
  },
  {
    ticker: "TGAAW",
    title: "Target Global Acquisition I Corp.",
  },
  {
    ticker: "AACIW",
    title: "Armada Acquisition Corp. I",
  },
  {
    ticker: "AACIU",
    title: "Armada Acquisition Corp. I",
  },
  {
    ticker: "WQGA-UN",
    title: "World Quantum Growth Acquisition Corp.",
  },
  {
    ticker: "WQGA-WT",
    title: "World Quantum Growth Acquisition Corp.",
  },
  {
    ticker: "TGAAU",
    title: "Target Global Acquisition I Corp.",
  },
  {
    ticker: "ACUT",
    title: "Accustem Sciences Inc.",
  },
  {
    ticker: "AHPAU",
    title: "Avista Public Acquisition Corp. II",
  },
  {
    ticker: "AHPAW",
    title: "Avista Public Acquisition Corp. II",
  },
  {
    ticker: "PCCTU",
    title: "Perception Capital Corp. II",
  },
  {
    ticker: "PCCTW",
    title: "Perception Capital Corp. II",
  },
  {
    ticker: "FREY-WT",
    title: "FREYR Battery",
  },
  {
    ticker: "BLEUW",
    title: "bleuacacia ltd",
  },
  {
    ticker: "BLEUU",
    title: "bleuacacia ltd",
  },
  {
    ticker: "BLEUR",
    title: "bleuacacia ltd",
  },
  {
    ticker: "SCOBW",
    title: "ScION Tech Growth II",
  },
  {
    ticker: "CENQW",
    title: "CENAQ Energy Corp.",
  },
  {
    ticker: "INDIW",
    title: "indie Semiconductor, Inc.",
  },
  {
    ticker: "BLNGW",
    title: "Belong Acquisition Corp.",
  },
  {
    ticker: "BLNGU",
    title: "Belong Acquisition Corp.",
  },
  {
    ticker: "JUGGU",
    title: "Jaws Juggernaut Acquisition Corp",
  },
  {
    ticker: "JUGGW",
    title: "Jaws Juggernaut Acquisition Corp",
  },
  {
    ticker: "MPACW",
    title: "Model Performance Acquisition Corp",
  },
  {
    ticker: "MPACU",
    title: "Model Performance Acquisition Corp",
  },
  {
    ticker: "MPACR",
    title: "Model Performance Acquisition Corp",
  },
  {
    ticker: "NPABU",
    title: "New Providence Acquisition Corp. II",
  },
  {
    ticker: "RMGCU",
    title: "RMG Acquisition Corp. III",
  },
  {
    ticker: "RMGCW",
    title: "RMG Acquisition Corp. III",
  },
  {
    ticker: "DHCAU",
    title: "DHC Acquisition Corp.",
  },
  {
    ticker: "SCOBU",
    title: "ScION Tech Growth II",
  },
  {
    ticker: "DHCAW",
    title: "DHC Acquisition Corp.",
  },
  {
    ticker: "PICC-WT",
    title: "Pivotal Investment Corp III",
  },
  {
    ticker: "PUCKU",
    title: "Goal Acquisitions Corp.",
  },
  {
    ticker: "PUCKW",
    title: "Goal Acquisitions Corp.",
  },
  {
    ticker: "NPABW",
    title: "New Providence Acquisition Corp. II",
  },
  {
    ticker: "PICC-UN",
    title: "Pivotal Investment Corp III",
  },
  {
    ticker: "BEPH",
    title: "Brookfield Renewable Partners L.P.",
  },
  {
    ticker: "BEPI",
    title: "Brookfield Renewable Partners L.P.",
  },
  {
    ticker: "BEP-PA",
    title: "Brookfield Renewable Partners L.P.",
  },
  {
    ticker: "CELPQ",
    title: "Cypress Environmental Partners, L.P.",
  },
  {
    ticker: "PXSAW",
    title: "Pyxis Tankers Inc.",
  },
  {
    ticker: "PXSAP",
    title: "Pyxis Tankers Inc.",
  },
  {
    ticker: "THWWW",
    title: "Target Hospitality Corp.",
  },
  {
    ticker: "CTOS-WT",
    title: "Custom Truck One Source, Inc.",
  },
  {
    ticker: "JTKWY",
    title: "Just Eat Takeaway.com N.V.",
  },
  {
    ticker: "BFLY-WT",
    title: "Butterfly Network, Inc.",
  },
  {
    ticker: "ETWO-WT",
    title: "E2open Parent Holdings, Inc.",
  },
  {
    ticker: "KPLTW",
    title: "Katapult Holdings, Inc.",
  },
  {
    ticker: "ASTSW",
    title: "AST SpaceMobile, Inc.",
  },
  {
    ticker: "NXDT-PA",
    title: "NEXPOINT DIVERSIFIED REAL ESTATE TRUST",
  },
  {
    ticker: "LIXTW",
    title: "LIXTE BIOTECHNOLOGY HOLDINGS, INC.",
  },
  {
    ticker: "SI-PA",
    title: "Silvergate Capital Corp",
  },
  {
    ticker: "COMSP",
    title: "COMSovereign Holding Corp.",
  },
  {
    ticker: "COMSW",
    title: "COMSovereign Holding Corp.",
  },
  {
    ticker: "SSSSL",
    title: "SURO CAPITAL CORP.",
  },
  {
    ticker: "CLDT-PA",
    title: "Chatham Lodging Trust",
  },
  {
    ticker: "ATLCL",
    title: "Atlanticus Holdings Corp",
  },
  {
    ticker: "ATLCP",
    title: "Atlanticus Holdings Corp",
  },
  {
    ticker: "UGL",
    title: "ProShares Trust II",
  },
  {
    ticker: "ZSL",
    title: "ProShares Trust II",
  },
  {
    ticker: "VIXM",
    title: "ProShares Trust II",
  },
  {
    ticker: "KOLD",
    title: "ProShares Trust II",
  },
  {
    ticker: "BOIL",
    title: "ProShares Trust II",
  },
  {
    ticker: "EUO",
    title: "ProShares Trust II",
  },
  {
    ticker: "GLL",
    title: "ProShares Trust II",
  },
  {
    ticker: "SVXY",
    title: "ProShares Trust II",
  },
  {
    ticker: "YCS",
    title: "ProShares Trust II",
  },
  {
    ticker: "VIXY",
    title: "ProShares Trust II",
  },
  {
    ticker: "SCO",
    title: "ProShares Trust II",
  },
  {
    ticker: "YCL",
    title: "ProShares Trust II",
  },
  {
    ticker: "UVXY",
    title: "ProShares Trust II",
  },
  {
    ticker: "AGQ",
    title: "ProShares Trust II",
  },
  {
    ticker: "UCO",
    title: "ProShares Trust II",
  },
  {
    ticker: "ULE",
    title: "ProShares Trust II",
  },
  {
    ticker: "BBLGW",
    title: "Bone Biologics Corp",
  },
  {
    ticker: "HNNAZ",
    title: "HENNESSY ADVISORS INC",
  },
  {
    ticker: "BIP-PA",
    title: "Brookfield Infrastructure Partners L.P.",
  },
  {
    ticker: "BIPI",
    title: "Brookfield Infrastructure Partners L.P.",
  },
  {
    ticker: "BIP-PB",
    title: "Brookfield Infrastructure Partners L.P.",
  },
  {
    ticker: "HPP-PC",
    title: "Hudson Pacific Properties, Inc.",
  },
  {
    ticker: "OPINL",
    title: "OFFICE PROPERTIES INCOME TRUST",
  },
  {
    ticker: "PFXNL",
    title: "PhenixFIN Corp",
  },
  {
    ticker: "PFXNZ",
    title: "PhenixFIN Corp",
  },
  {
    ticker: "WECTD",
    title: "Motos America, Inc.",
  },
  {
    ticker: "OCFCP",
    title: "OCEANFIRST FINANCIAL CORP",
  },
  {
    ticker: "BSX-PA",
    title: "BOSTON SCIENTIFIC CORP",
  },
  {
    ticker: "DCOMP",
    title: "Dime Community Bancshares, Inc. /NY/",
  },
  {
    ticker: "UZD",
    title: "UNITED STATES CELLULAR CORP",
  },
  {
    ticker: "UZE",
    title: "UNITED STATES CELLULAR CORP",
  },
  {
    ticker: "UZF",
    title: "UNITED STATES CELLULAR CORP",
  },
  {
    ticker: "PARAA",
    title: "Paramount Global",
  },
  {
    ticker: "PARAP",
    title: "Paramount Global",
  },
  {
    ticker: "ZIONP",
    title: "ZIONS BANCORPORATION, NATIONAL ASSOCIATION /UT/",
  },
  {
    ticker: "ZIONO",
    title: "ZIONS BANCORPORATION, NATIONAL ASSOCIATION /UT/",
  },
  {
    ticker: "WLYB",
    title: "JOHN WILEY & SONS, INC.",
  },
  {
    ticker: "ZIONL",
    title: "ZIONS BANCORPORATION, NATIONAL ASSOCIATION /UT/",
  },
  {
    ticker: "SWT",
    title: "STANLEY BLACK & DECKER, INC.",
  },
  {
    ticker: "BAC-PO",
    title: "BANK OF AMERICA CORP /DE/",
  },
  {
    ticker: "MER-PK",
    title: "BANK OF AMERICA CORP /DE/",
  },
  {
    ticker: "BAC-PQ",
    title: "BANK OF AMERICA CORP /DE/",
  },
  {
    ticker: "BAC-PN",
    title: "BANK OF AMERICA CORP /DE/",
  },
  {
    ticker: "BAC-PP",
    title: "BANK OF AMERICA CORP /DE/",
  },
  {
    ticker: "BAC-PM",
    title: "BANK OF AMERICA CORP /DE/",
  },
  {
    ticker: "BAC-PS",
    title: "BANK OF AMERICA CORP /DE/",
  },
  {
    ticker: "SCVXW",
    title: "SCVX Corp.",
  },
  {
    ticker: "SBIGW",
    title: "SpringBig Holdings, Inc.",
  },
  {
    ticker: "CANO-WT",
    title: "Cano Health, Inc.",
  },
  {
    ticker: "BYNOU",
    title: "byNordic Acquisition Corp",
  },
  {
    ticker: "AVPTW",
    title: "AvePoint, Inc.",
  },
  {
    ticker: "NLSPW",
    title: "NLS Pharmaceutics Ltd.",
  },
  {
    ticker: "MAPSW",
    title: "WM TECHNOLOGY, INC.",
  },
  {
    ticker: "ACKIW",
    title: "ACKRELL SPAC Partners I Co.",
  },
  {
    ticker: "ACKIU",
    title: "ACKRELL SPAC Partners I Co.",
  },
  {
    ticker: "PXPC",
    title: "Phoenix Plus Corp.",
  },
  {
    ticker: "GXIIW",
    title: "GX Acquisition Corp. II",
  },
  {
    ticker: "GXIIU",
    title: "GX Acquisition Corp. II",
  },
  {
    ticker: "INKAW",
    title: "KLUDEIN I ACQUISITION CORP",
  },
  {
    ticker: "MYPSW",
    title: "PLAYSTUDIOS, Inc.",
  },
  {
    ticker: "HLLY-WT",
    title: "Holley Inc.",
  },
  {
    ticker: "GBRGU",
    title: "Goldenbridge Acquisition Ltd",
  },
  {
    ticker: "GBRGW",
    title: "Goldenbridge Acquisition Ltd",
  },
  {
    ticker: "GBRGR",
    title: "Goldenbridge Acquisition Ltd",
  },
  {
    ticker: "UKOMW",
    title: "Ucommune International Ltd",
  },
  {
    ticker: "TMKRW",
    title: "Tastemaker Acquisition Corp.",
  },
  {
    ticker: "TMKRU",
    title: "Tastemaker Acquisition Corp.",
  },
  {
    ticker: "PSTH-WT",
    title: "Pershing Square Tontine Holdings, Ltd.",
  },
  {
    ticker: "PRPB-UN",
    title: "CC Neuberger Principal Holdings II",
  },
  {
    ticker: "PRPB-WT",
    title: "CC Neuberger Principal Holdings II",
  },
  {
    ticker: "LEAP-UN",
    title: "Ribbit LEAP, Ltd.",
  },
  {
    ticker: "LEAP-WT",
    title: "Ribbit LEAP, Ltd.",
  },
  {
    ticker: "MILEW",
    title: "Metromile, Inc.",
  },
  {
    ticker: "RDBXW",
    title: "Redbox Entertainment Inc.",
  },
  {
    ticker: "IQMDW",
    title: "Intelligent Medicine Acquisition Corp.",
  },
  {
    ticker: "VCXAU",
    title: "10X Capital Venture Acquisition Corp. II",
  },
  {
    ticker: "VCXAW",
    title: "10X Capital Venture Acquisition Corp. II",
  },
  {
    ticker: "TRONW",
    title: "CORNER GROWTH ACQUISITION CORP. 2",
  },
  {
    ticker: "SPKAU",
    title: "SPK Acquisition Corp.",
  },
  {
    ticker: "SAITW",
    title: "SAI.TECH Global Corp",
  },
  {
    ticker: "TRONU",
    title: "CORNER GROWTH ACQUISITION CORP. 2",
  },
  {
    ticker: "CRZNU",
    title: "Corazon Capital V838 Monoceros Corp",
  },
  {
    ticker: "IPAXW",
    title: "Inflection Point Acquisition Corp.",
  },
  {
    ticker: "ZINGU",
    title: "FTAC ZEUS ACQUISITION CORP.",
  },
  {
    ticker: "ZINGW",
    title: "FTAC ZEUS ACQUISITION CORP.",
  },
  {
    ticker: "NGC-WT",
    title: "Northern Genesis Acquisition Corp. III",
  },
  {
    ticker: "NGC-UN",
    title: "Northern Genesis Acquisition Corp. III",
  },
  {
    ticker: "PSPC-UN",
    title: "Post Holdings Partnering Corp",
  },
  {
    ticker: "PSPC-WT",
    title: "Post Holdings Partnering Corp",
  },
  {
    ticker: "ACTDU",
    title: "ArcLight Clean Transition Corp. II",
  },
  {
    ticker: "ACTDW",
    title: "ArcLight Clean Transition Corp. II",
  },
  {
    ticker: "GPCOW",
    title: "Golden Path Acquisition Corp",
  },
  {
    ticker: "FSNB-WT",
    title: "Fusion Acquisition Corp. II",
  },
  {
    ticker: "FSNB-UN",
    title: "Fusion Acquisition Corp. II",
  },
  {
    ticker: "AGAC-UN",
    title: "African Gold Acquisition Corp",
  },
  {
    ticker: "TSIBU",
    title: "Tishman Speyer Innovation Corp. II",
  },
  {
    ticker: "TSIBW",
    title: "Tishman Speyer Innovation Corp. II",
  },
  {
    ticker: "AGAC-WT",
    title: "African Gold Acquisition Corp",
  },
  {
    ticker: "INKAU",
    title: "KLUDEIN I ACQUISITION CORP",
  },
  {
    ticker: "DNA-WT",
    title: "Ginkgo Bioworks Holdings, Inc.",
  },
  {
    ticker: "PAQCU",
    title: "Provident Acquisition Corp.",
  },
  {
    ticker: "PAQCW",
    title: "Provident Acquisition Corp.",
  },
  {
    ticker: "LLAP-WT",
    title: "Terran Orbital Corp",
  },
  {
    ticker: "ASPCW",
    title: "Alpha Capital Acquisition Co",
  },
  {
    ticker: "ASPCU",
    title: "Alpha Capital Acquisition Co",
  },
  {
    ticker: "GAPA-UN",
    title: "G&P Acquisition Corp.",
  },
  {
    ticker: "GAPA-WT",
    title: "G&P Acquisition Corp.",
  },
  {
    ticker: "FTPAU",
    title: "FTAC Parnassus Acquisition Corp.",
  },
  {
    ticker: "NDACU",
    title: "NightDragon Acquisition Corp.",
  },
  {
    ticker: "NDACW",
    title: "NightDragon Acquisition Corp.",
  },
  {
    ticker: "APGB-UN",
    title: "Apollo Strategic Growth Capital II",
  },
  {
    ticker: "APGB-WT",
    title: "Apollo Strategic Growth Capital II",
  },
  {
    ticker: "RMPL-P",
    title: "RiverNorth Specialty Finance Corp",
  },
  {
    ticker: "ACONW",
    title: "Aclarion, Inc.",
  },
  {
    ticker: "AJXA",
    title: "Great Ajax Corp.",
  },
  {
    ticker: "WEIFX",
    title: "Wildermuth Fund",
  },
  {
    ticker: "WESFX",
    title: "Wildermuth Fund",
  },
  {
    ticker: "VIASP",
    title: "Via Renewables, Inc.",
  },
  {
    ticker: "SBEV-WT",
    title: "SPLASH BEVERAGE GROUP, INC.",
  },
  {
    ticker: "EVTVD",
    title: "Envirotech Vehicles, Inc.",
  },
  {
    ticker: "FBRT-PE",
    title: "Franklin BSP Realty Trust, Inc.",
  },
  {
    ticker: "STSSW",
    title: "Sharps Technology Inc.",
  },
  {
    ticker: "ADNWW",
    title: "ADVENT TECHNOLOGIES HOLDINGS, INC.",
  },
  {
    ticker: "MVSTW",
    title: "Microvast Holdings, Inc.",
  },
  {
    ticker: "RSLPS",
    title: "RSE Archive, LLC",
  },
  {
    ticker: "RSSKS",
    title: "RSE Archive, LLC",
  },
  {
    ticker: "BTBDW",
    title: "BT Brands, Inc.",
  },
  {
    ticker: "BFAGY",
    title: "Biofrontera AG",
  },
  {
    ticker: "CREXW",
    title: "CREATIVE REALITIES, INC.",
  },
  {
    ticker: "UNOV",
    title: "Earth Science Tech, Inc.",
  },
  {
    ticker: "CEADW",
    title: "CEA Industries Inc.",
  },
  {
    ticker: "REXR-PC",
    title: "Rexford Industrial Realty, Inc.",
  },
  {
    ticker: "BBCPW",
    title: "Concrete Pumping Holdings, Inc.",
  },
  {
    ticker: "LTRYW",
    title: "Lottery.com Inc.",
  },
  {
    ticker: "FORFF",
    title: "Fortis Inc.",
  },
  {
    ticker: "RVSNW",
    title: "Rail Vision Ltd.",
  },
  {
    ticker: "ALTG-PA",
    title: "ALTA EQUIPMENT GROUP INC.",
  },
  {
    ticker: "LNDPS",
    title: "Landa App LLC",
  },
  {
    ticker: "LDSUS",
    title: "Landa App LLC",
  },
  {
    ticker: "CCV-UN",
    title: "Churchill Capital Corp V",
  },
  {
    ticker: "CCV-WT",
    title: "Churchill Capital Corp V",
  },
  {
    ticker: "WE-WT",
    title: "WeWork Inc.",
  },
  {
    ticker: "LFTRW",
    title: "Lefteris Acquisition Corp.",
  },
  {
    ticker: "HCDIZ",
    title: "Harbor Custom Development, Inc.",
  },
  {
    ticker: "HCDIW",
    title: "Harbor Custom Development, Inc.",
  },
  {
    ticker: "HCDIP",
    title: "Harbor Custom Development, Inc.",
  },
  {
    ticker: "AUVIP",
    title: "Applied UV, Inc.",
  },
  {
    ticker: "CADMD",
    title: "Chemesis International Inc.",
  },
  {
    ticker: "TLGA-UN",
    title: "TLG Acquisition One Corp.",
  },
  {
    ticker: "TLGA-WT",
    title: "TLG Acquisition One Corp.",
  },
  {
    ticker: "BIOTW",
    title: "Biotech Acquisition Co",
  },
  {
    ticker: "BLTSW",
    title: "Bright Lights Acquisition Corp.",
  },
  {
    ticker: "BLTSU",
    title: "Bright Lights Acquisition Corp.",
  },
  {
    ticker: "GPACU",
    title: "Global Partner Acquisition Corp II",
  },
  {
    ticker: "LEGAW",
    title: "Lead Edge Growth Opportunities, Ltd",
  },
  {
    ticker: "LEGAU",
    title: "Lead Edge Growth Opportunities, Ltd",
  },
  {
    ticker: "ATA-UN",
    title: "AMERICAS TECHNOLOGY ACQUISITION CORP.",
  },
  {
    ticker: "BIOTU",
    title: "Biotech Acquisition Co",
  },
  {
    ticker: "ADRA-UN",
    title: "Adara Acquisition Corp.",
  },
  {
    ticker: "ADRA-WT",
    title: "Adara Acquisition Corp.",
  },
  {
    ticker: "ATA-WT",
    title: "AMERICAS TECHNOLOGY ACQUISITION CORP.",
  },
  {
    ticker: "DSACU",
    title: "Duddell Street Acquisition Corp.",
  },
  {
    ticker: "DSACW",
    title: "Duddell Street Acquisition Corp.",
  },
  {
    ticker: "LNFA-WT",
    title: "L&F Acquisition Corp.",
  },
  {
    ticker: "KLAQW",
    title: "KL Acquisition Corp",
  },
  {
    ticker: "KLAQU",
    title: "KL Acquisition Corp",
  },
  {
    ticker: "EPR-PC",
    title: "EPR PROPERTIES",
  },
  {
    ticker: "EPR-PE",
    title: "EPR PROPERTIES",
  },
  {
    ticker: "NYCB-PU",
    title: "NEW YORK COMMUNITY BANCORP INC",
  },
  {
    ticker: "SNNC",
    title: "Sibannac, Inc.",
  },
  {
    ticker: "OXSQG",
    title: "Oxford Square Capital Corp.",
  },
  {
    ticker: "OXSQZ",
    title: "Oxford Square Capital Corp.",
  },
  {
    ticker: "SRCU",
    title: "SPIRE INC",
  },
  {
    ticker: "FLRAP",
    title: "FLUOR CORP",
  },
  {
    ticker: "BCEFF",
    title: "BCE INC",
  },
  {
    ticker: "TDGMW",
    title: "TIDEWATER INC",
  },
  {
    ticker: "TDW-WTB",
    title: "TIDEWATER INC",
  },
  {
    ticker: "TDW-WT",
    title: "TIDEWATER INC",
  },
  {
    ticker: "TDW-WTA",
    title: "TIDEWATER INC",
  },
  {
    ticker: "SOJD",
    title: "SOUTHERN CO",
  },
  {
    ticker: "SOLN",
    title: "SOUTHERN CO",
  },
  {
    ticker: "SOJE",
    title: "SOUTHERN CO",
  },
  {
    ticker: "ALORU",
    title: "ALSP Orchid Acquisition Corp I",
  },
  {
    ticker: "MURFU",
    title: "Murphy Canyon Acquisition Corp.",
  },
  {
    ticker: "MURFW",
    title: "Murphy Canyon Acquisition Corp.",
  },
  {
    ticker: "DSAQ-UN",
    title: "Direct Selling Acquisition Corp.",
  },
  {
    ticker: "DSAQ-WT",
    title: "Direct Selling Acquisition Corp.",
  },
  {
    ticker: "ALORW",
    title: "ALSP Orchid Acquisition Corp I",
  },
  {
    ticker: "LGL-WT",
    title: "LGL GROUP INC",
  },
  {
    ticker: "SGHLU",
    title: "Signal Hill Acquisition Corp.",
  },
  {
    ticker: "SGHLW",
    title: "Signal Hill Acquisition Corp.",
  },
  {
    ticker: "MEOAU",
    title: "Minority Equality Opportunities Acquisition Inc.",
  },
  {
    ticker: "MEOAW",
    title: "Minority Equality Opportunities Acquisition Inc.",
  },
  {
    ticker: "ARCKW",
    title: "Arbor Rapha Capital Bioholdings Corp. I",
  },
  {
    ticker: "ARCKU",
    title: "Arbor Rapha Capital Bioholdings Corp. I",
  },
  {
    ticker: "FNVTU",
    title: "Finnovate Acquisition Corp.",
  },
  {
    ticker: "FNVTW",
    title: "Finnovate Acquisition Corp.",
  },
  {
    ticker: "GMFIU",
    title: "Aetherium Acquisition Corp",
  },
  {
    ticker: "GMFIW",
    title: "Aetherium Acquisition Corp",
  },
  {
    ticker: "CDROW",
    title: "Codere Online Luxembourg, S.A.",
  },
  {
    ticker: "IFIN-WT",
    title: "InFinT Acquisition Corp",
  },
  {
    ticker: "EDNCW",
    title: "Endurance Acquisition Corp.",
  },
  {
    ticker: "CLAYW",
    title: "Chavant Capital Acquisition Corp.",
  },
  {
    ticker: "CLAYU",
    title: "Chavant Capital Acquisition Corp.",
  },
  {
    ticker: "WWACW",
    title: "Worldwide Webb Acquisition Corp.",
  },
  {
    ticker: "WWACU",
    title: "Worldwide Webb Acquisition Corp.",
  },
  {
    ticker: "FIACU",
    title: "Focus Impact Acquisition Corp.",
  },
  {
    ticker: "FIACW",
    title: "Focus Impact Acquisition Corp.",
  },
  {
    ticker: "GWIIW",
    title: "Good Works II Acquisition Corp.",
  },
  {
    ticker: "KKRS",
    title: "KKR & Co. Inc.",
  },
  {
    ticker: "KKR-PC",
    title: "KKR & Co. Inc.",
  },
  {
    ticker: "AGNCO",
    title: "AGNC Investment Corp.",
  },
  {
    ticker: "AGNCP",
    title: "AGNC Investment Corp.",
  },
  {
    ticker: "TMGID",
    title: "Marquie Group, Inc.",
  },
  {
    ticker: "MMTLP",
    title: "META MATERIALS INC.",
  },
  {
    ticker: "CRTDW",
    title: "Creatd, Inc.",
  },
  {
    ticker: "LANDO",
    title: "GLADSTONE LAND Corp",
  },
  {
    ticker: "FGFPP",
    title: "FG Financial Group, Inc.",
  },
  {
    ticker: "JRVSD",
    title: "iMine Corp",
  },
  {
    ticker: "PMBPF",
    title: "PEMBINA PIPELINE CORP",
  },
  {
    ticker: "PACWP",
    title: "PACWEST BANCORP",
  },
  {
    ticker: "DHCNL",
    title: "DIVERSIFIED HEALTHCARE TRUST",
  },
  {
    ticker: "DHCNI",
    title: "DIVERSIFIED HEALTHCARE TRUST",
  },
  {
    ticker: "FEDL",
    title: "UBS AG",
  },
  {
    ticker: "MTUL",
    title: "UBS AG",
  },
  {
    ticker: "UCIB",
    title: "UBS AG",
  },
  {
    ticker: "AMUB",
    title: "UBS AG",
  },
  {
    ticker: "AMNA",
    title: "UBS AG",
  },
  {
    ticker: "ESUS",
    title: "UBS AG",
  },
  {
    ticker: "IWML",
    title: "UBS AG",
  },
  {
    ticker: "MLPB",
    title: "UBS AG",
  },
  {
    ticker: "PFFL",
    title: "UBS AG",
  },
  {
    ticker: "FBGX",
    title: "UBS AG",
  },
  {
    ticker: "FIEE",
    title: "UBS AG",
  },
  {
    ticker: "USML",
    title: "UBS AG",
  },
  {
    ticker: "BDCX",
    title: "UBS AG",
  },
  {
    ticker: "IWFL",
    title: "UBS AG",
  },
  {
    ticker: "DJCB",
    title: "UBS AG",
  },
  {
    ticker: "BDCZ",
    title: "UBS AG",
  },
  {
    ticker: "FIHD",
    title: "UBS AG",
  },
  {
    ticker: "QULL",
    title: "UBS AG",
  },
  {
    ticker: "AMND",
    title: "UBS AG",
  },
  {
    ticker: "CEFD",
    title: "UBS AG",
  },
  {
    ticker: "MLPR",
    title: "UBS AG",
  },
  {
    ticker: "IWDL",
    title: "UBS AG",
  },
  {
    ticker: "PYPE",
    title: "UBS AG",
  },
  {
    ticker: "MVRL",
    title: "UBS AG",
  },
  {
    ticker: "SCDL",
    title: "UBS AG",
  },
  {
    ticker: "SMHB",
    title: "UBS AG",
  },
  {
    ticker: "HDLB",
    title: "UBS AG",
  },
  {
    ticker: "AMTR",
    title: "UBS AG",
  },
  {
    ticker: "IFED",
    title: "UBS AG",
  },
  {
    ticker: "LGNYZ",
    title: "LIGAND PHARMACEUTICALS INC",
  },
  {
    ticker: "LGNZZ",
    title: "LIGAND PHARMACEUTICALS INC",
  },
  {
    ticker: "WCC-PA",
    title: "WESCO INTERNATIONAL INC",
  },
  {
    ticker: "BCDAW",
    title: "BioCardia, Inc.",
  },
  {
    ticker: "SJIV",
    title: "SOUTH JERSEY INDUSTRIES INC",
  },
  {
    ticker: "SJIJ",
    title: "SOUTH JERSEY INDUSTRIES INC",
  },
  {
    ticker: "SSU-WT",
    title: "SIGNA Sports United N.V.",
  },
  {
    ticker: "OHAAU",
    title: "Opy Acquisition Corp. I",
  },
  {
    ticker: "OHAAW",
    title: "Opy Acquisition Corp. I",
  },
  {
    ticker: "PSNYW",
    title: "Polestar Automotive Holding UK PLC",
  },
  {
    ticker: "DRTSW",
    title: "Alpha Tau Medical Ltd.",
  },
  {
    ticker: "ALLG-WT",
    title: "Allego N.V.",
  },
  {
    ticker: "CFFSU",
    title: "CF Acquisition Corp. VII",
  },
  {
    ticker: "FTEV-UN",
    title: "FinTech Evolution Acquisition Group",
  },
  {
    ticker: "FTEV-WT",
    title: "FinTech Evolution Acquisition Group",
  },
  {
    ticker: "SPTKU",
    title: "SportsTek Acquisition Corp.",
  },
  {
    ticker: "DISAW",
    title: "Disruptive Acquisition Corp I",
  },
  {
    ticker: "DISAU",
    title: "Disruptive Acquisition Corp I",
  },
  {
    ticker: "AAQC-WT",
    title: "Accelerate Acquisition Corp.",
  },
  {
    ticker: "SLAC-UN",
    title: "Social Leverage Acquisition Corp I",
  },
  {
    ticker: "SLAC-WT",
    title: "Social Leverage Acquisition Corp I",
  },
  {
    ticker: "EACPW",
    title: "Edify Acquisition Corp.",
  },
  {
    ticker: "EACPU",
    title: "Edify Acquisition Corp.",
  },
  {
    ticker: "MACAW",
    title: "Moringa Acquisition Corp",
  },
  {
    ticker: "SPTKW",
    title: "SportsTek Acquisition Corp.",
  },
  {
    ticker: "MACAU",
    title: "Moringa Acquisition Corp",
  },
  {
    ticker: "AMAOW",
    title: "American Acquisition Opportunity Inc.",
  },
  {
    ticker: "TRCA-UN",
    title: "Twin Ridge Capital Acquisition Corp.",
  },
  {
    ticker: "TRCA-WT",
    title: "Twin Ridge Capital Acquisition Corp.",
  },
  {
    ticker: "AAQC-UN",
    title: "Accelerate Acquisition Corp.",
  },
  {
    ticker: "CFFSW",
    title: "CF Acquisition Corp. VII",
  },
  {
    ticker: "IMAQW",
    title: "International Media Acquisition Corp.",
  },
  {
    ticker: "IMAQU",
    title: "International Media Acquisition Corp.",
  },
  {
    ticker: "AMAOU",
    title: "American Acquisition Opportunity Inc.",
  },
  {
    ticker: "LAAAW",
    title: "Lakeshore Acquisition I Corp.",
  },
  {
    ticker: "CLAQW",
    title: "cleantech Acquisition Corp.",
  },
  {
    ticker: "RFACU",
    title: "RF Acquisition Corp.",
  },
  {
    ticker: "IMAQR",
    title: "International Media Acquisition Corp.",
  },
  {
    ticker: "GIWWU",
    title: "GigInternational1, Inc.",
  },
  {
    ticker: "GIWWW",
    title: "GigInternational1, Inc.",
  },
  {
    ticker: "CZOO-WT",
    title: "Cazoo Group Ltd",
  },
  {
    ticker: "VHNAU",
    title: "Vahanna Tech Edge Acquisition I Corp.",
  },
  {
    ticker: "VHNAW",
    title: "Vahanna Tech Edge Acquisition I Corp.",
  },
  {
    ticker: "ROCGU",
    title: "Roth CH Acquisition IV Co.",
  },
  {
    ticker: "ROCGW",
    title: "Roth CH Acquisition IV Co.",
  },
  {
    ticker: "PFTAU",
    title: "PORTAGE FINTECH ACQUISITION CORP.",
  },
  {
    ticker: "PFTAW",
    title: "PORTAGE FINTECH ACQUISITION CORP.",
  },
  {
    ticker: "IOACU",
    title: "Innovative International Acquisition Corp.",
  },
  {
    ticker: "IOACW",
    title: "Innovative International Acquisition Corp.",
  },
  {
    ticker: "TOIIW",
    title: "Oncology Institute, Inc.",
  },
  {
    ticker: "GWH-WT",
    title: "ESS Tech, Inc.",
  },
  {
    ticker: "BARK-WT",
    title: "Bark, Inc.",
  },
  {
    ticker: "JAQCU",
    title: "Jupiter Acquisition Corp",
  },
  {
    ticker: "JAQCW",
    title: "Jupiter Acquisition Corp",
  },
  {
    ticker: "NRDY-WT",
    title: "Nerdy Inc.",
  },
  {
    ticker: "GFLU",
    title: "GFL Environmental Inc.",
  },
  {
    ticker: "NREF-PA",
    title: "NexPoint Real Estate Finance, Inc.",
  },
  {
    ticker: "MTACW",
    title: "MedTech Acquisition Corp",
  },
  {
    ticker: "MTACU",
    title: "MedTech Acquisition Corp",
  },
  {
    ticker: "GSEVU",
    title: "Gores Holdings VII Inc.",
  },
  {
    ticker: "GSEVW",
    title: "Gores Holdings VII Inc.",
  },
  {
    ticker: "MCLE",
    title: "Medicale Corp.",
  },
  {
    ticker: "EMBKW",
    title: "Embark Technology, Inc.",
  },
  {
    ticker: "BITE-WT",
    title: "Bite Acquisition Corp.",
  },
  {
    ticker: "BITE-UN",
    title: "Bite Acquisition Corp.",
  },
  {
    ticker: "VCKAW",
    title: "Vickers Vantage Corp. I",
  },
  {
    ticker: "BGRYW",
    title: "Berkshire Grey, Inc.",
  },
  {
    ticker: "CRU-WT",
    title: "Crucible Acquisition Corp",
  },
  {
    ticker: "CRU-UN",
    title: "Crucible Acquisition Corp",
  },
  {
    ticker: "VHAQ-UN",
    title: "Viveon Health Acquisition Corp.",
  },
  {
    ticker: "VHAQ-WT",
    title: "Viveon Health Acquisition Corp.",
  },
  {
    ticker: "VCKAU",
    title: "Vickers Vantage Corp. I",
  },
  {
    ticker: "JCICU",
    title: "Jack Creek Investment Corp.",
  },
  {
    ticker: "JCICW",
    title: "Jack Creek Investment Corp.",
  },
  {
    ticker: "GIPRW",
    title: "GENERATION INCOME PROPERTIES, INC.",
  },
  {
    ticker: "YCBD-PA",
    title: "cbdMD, Inc.",
  },
  {
    ticker: "GECCM",
    title: "Great Elm Capital Corp.",
  },
  {
    ticker: "NRSCX",
    title: "NEXPOINT REAL ESTATE STRATEGIES FUND",
  },
  {
    ticker: "NRSZX",
    title: "NEXPOINT REAL ESTATE STRATEGIES FUND",
  },
  {
    ticker: "GECCN",
    title: "Great Elm Capital Corp.",
  },
  {
    ticker: "GECCO",
    title: "Great Elm Capital Corp.",
  },
  {
    ticker: "DOMA-WT",
    title: "Doma Holdings, Inc.",
  },
  {
    ticker: "LSEAW",
    title: "Landsea Homes Corp",
  },
  {
    ticker: "XFLT-PA",
    title: "XAI Octagon Floating Rate & Alternative Income Term Trust",
  },
  {
    ticker: "KLR-WT",
    title: "Kaleyra, Inc.",
  },
  {
    ticker: "HYZNW",
    title: "Hyzon Motors Inc.",
  },
  {
    ticker: "AIVI",
    title: "Kemiao Garment Holding Group",
  },
  {
    ticker: "PMT-PC",
    title: "PennyMac Mortgage Investment Trust",
  },
  {
    ticker: "TBKCP",
    title: "Triumph Bancorp, Inc.",
  },
  {
    ticker: "ADILW",
    title: "ADIAL PHARMACEUTICALS, INC.",
  },
  {
    ticker: "RCB",
    title: "Ready Capital Corp",
  },
  {
    ticker: "RC-PC",
    title: "Ready Capital Corp",
  },
  {
    ticker: "RC-PE",
    title: "Ready Capital Corp",
  },
  {
    ticker: "RCC",
    title: "Ready Capital Corp",
  },
  {
    ticker: "RCA",
    title: "Ready Capital Corp",
  },
  {
    ticker: "NYMTL",
    title: "NEW YORK MORTGAGE TRUST INC",
  },
  {
    ticker: "NYMTM",
    title: "NEW YORK MORTGAGE TRUST INC",
  },
  {
    ticker: "NYMTZ",
    title: "NEW YORK MORTGAGE TRUST INC",
  },
  {
    ticker: "PSA-PS",
    title: "Public Storage",
  },
  {
    ticker: "PSA-PJ",
    title: "Public Storage",
  },
  {
    ticker: "PSA-PG",
    title: "Public Storage",
  },
  {
    ticker: "PSA-PF",
    title: "Public Storage",
  },
  {
    ticker: "PSA-PQ",
    title: "Public Storage",
  },
  {
    ticker: "PSA-PL",
    title: "Public Storage",
  },
  {
    ticker: "PSA-PO",
    title: "Public Storage",
  },
  {
    ticker: "PSA-PN",
    title: "Public Storage",
  },
  {
    ticker: "PSA-PR",
    title: "Public Storage",
  },
  {
    ticker: "PSA-PM",
    title: "Public Storage",
  },
  {
    ticker: "PSA-PP",
    title: "Public Storage",
  },
  {
    ticker: "PSA-PI",
    title: "Public Storage",
  },
  {
    ticker: "PTIXW",
    title: "Protagenic Therapeutics, Inc.new",
  },
  {
    ticker: "TIHE",
    title: "NUONCOLOGY LABS INC",
  },
  {
    ticker: "SQFTP",
    title: "Presidio Property Trust, Inc.",
  },
  {
    ticker: "SQFTW",
    title: "Presidio Property Trust, Inc.",
  },
  {
    ticker: "AGM-PE",
    title: "FEDERAL AGRICULTURAL MORTGAGE CORP",
  },
  {
    ticker: "AGM-PF",
    title: "FEDERAL AGRICULTURAL MORTGAGE CORP",
  },
  {
    ticker: "AGM-PG",
    title: "FEDERAL AGRICULTURAL MORTGAGE CORP",
  },
  {
    ticker: "BNKU",
    title: "BANK OF MONTREAL /CAN/",
  },
  {
    ticker: "FNGO",
    title: "BANK OF MONTREAL /CAN/",
  },
  {
    ticker: "NRGD",
    title: "BANK OF MONTREAL /CAN/",
  },
  {
    ticker: "BERZ",
    title: "BANK OF MONTREAL /CAN/",
  },
  {
    ticker: "FLYD",
    title: "BANK OF MONTREAL /CAN/",
  },
  {
    ticker: "BNKD",
    title: "BANK OF MONTREAL /CAN/",
  },
  {
    ticker: "FLYU",
    title: "BANK OF MONTREAL /CAN/",
  },
  {
    ticker: "BULZ",
    title: "BANK OF MONTREAL /CAN/",
  },
  {
    ticker: "OILU",
    title: "BANK OF MONTREAL /CAN/",
  },
  {
    ticker: "FNGS",
    title: "BANK OF MONTREAL /CAN/",
  },
  {
    ticker: "FNGU",
    title: "BANK OF MONTREAL /CAN/",
  },
  {
    ticker: "OILD",
    title: "BANK OF MONTREAL /CAN/",
  },
  {
    ticker: "GDXD",
    title: "BANK OF MONTREAL /CAN/",
  },
  {
    ticker: "GDXU",
    title: "BANK OF MONTREAL /CAN/",
  },
  {
    ticker: "NRGU",
    title: "BANK OF MONTREAL /CAN/",
  },
  {
    ticker: "BMTX-WT",
    title: "BM Technologies, Inc.",
  },
  {
    ticker: "GPMT-PA",
    title: "Granite Point Mortgage Trust Inc.",
  },
  {
    ticker: "KBNTW",
    title: "Kubient, Inc.",
  },
  {
    ticker: "BKSY-WT",
    title: "BlackSky Technology Inc.",
  },
  {
    ticker: "NTRBW",
    title: "NutriBand Inc.",
  },
  {
    ticker: "LUXAW",
    title: "Lux Health Tech Acquisition Corp.",
  },
  {
    ticker: "LUXAU",
    title: "Lux Health Tech Acquisition Corp.",
  },
  {
    ticker: "FCAX-UN",
    title: "Fortress Capital Acquisition Corp",
  },
  {
    ticker: "FCAX-WT",
    title: "Fortress Capital Acquisition Corp",
  },
  {
    ticker: "HCIIU",
    title: "Hudson Executive Investment Corp. II",
  },
  {
    ticker: "HCIIW",
    title: "Hudson Executive Investment Corp. II",
  },
  {
    ticker: "IMPX-WT",
    title: "AEA-Bridges Impact Corp.",
  },
  {
    ticker: "MUDSW",
    title: "Mudrick Capital Acquisition Corp. II",
  },
  {
    ticker: "RBAC-UN",
    title: "RedBall Acquisition Corp.",
  },
  {
    ticker: "RBAC-WT",
    title: "RedBall Acquisition Corp.",
  },
  {
    ticker: "MKTWW",
    title: "MARKETWISE, INC.",
  },
  {
    ticker: "SST-WT",
    title: "System1, Inc.",
  },
  {
    ticker: "CRXTW",
    title: "Clarus Therapeutics Holdings, Inc.",
  },
  {
    ticker: "LIDRW",
    title: "AEye, Inc.",
  },
  {
    ticker: "OCAXW",
    title: "OCA Acquisition Corp.",
  },
  {
    ticker: "OCAXU",
    title: "OCA Acquisition Corp.",
  },
  {
    ticker: "QNGY-WT",
    title: "Quanergy Systems, Inc.",
  },
  {
    ticker: "UWMC-WT",
    title: "UWM Holdings Corp",
  },
  {
    ticker: "GRCYW",
    title: "Greencity Acquisition Corp",
  },
  {
    ticker: "CLVT-PA",
    title: "CLARIVATE Plc",
  },
  {
    ticker: "CHNGU",
    title: "Change Healthcare Inc.",
  },
  {
    ticker: "RICOW",
    title: "Agrico Acquisition Corp.",
  },
  {
    ticker: "RICOU",
    title: "Agrico Acquisition Corp.",
  },
  {
    ticker: "SLVRU",
    title: "SILVERspac Inc.",
  },
  {
    ticker: "HERAU",
    title: "FTAC Hera Acquisition Corp.",
  },
  {
    ticker: "HERAW",
    title: "FTAC Hera Acquisition Corp.",
  },
  {
    ticker: "LCAAW",
    title: "L Catterton Asia Acquisition Corp",
  },
  {
    ticker: "LCAAU",
    title: "L Catterton Asia Acquisition Corp",
  },
  {
    ticker: "PFDRW",
    title: "Pathfinder Acquisition Corp",
  },
  {
    ticker: "SPGS-WT",
    title: "Simon Property Group Acquisition Holdings, Inc.",
  },
  {
    ticker: "SPGS-UN",
    title: "Simon Property Group Acquisition Holdings, Inc.",
  },
  {
    ticker: "PRSRU",
    title: "Prospector Capital Corp.",
  },
  {
    ticker: "PRSRW",
    title: "Prospector Capital Corp.",
  },
  {
    ticker: "GNACW",
    title: "Group Nine Acquisition Corp.",
  },
  {
    ticker: "GNACU",
    title: "Group Nine Acquisition Corp.",
  },
  {
    ticker: "IGNYU",
    title: "Ignyte Acquisition Corp.",
  },
  {
    ticker: "HUGS-WT",
    title: "USHG Acquisition Corp.",
  },
  {
    ticker: "HUGS-UN",
    title: "USHG Acquisition Corp.",
  },
  {
    ticker: "PCTTU",
    title: "PureCycle Technologies, Inc.",
  },
  {
    ticker: "PCTTW",
    title: "PureCycle Technologies, Inc.",
  },
  {
    ticker: "MBTCR",
    title: "Nocturne Acquisition Corp",
  },
  {
    ticker: "EQRXW",
    title: "EQRx, Inc.",
  },
  {
    ticker: "APTMW",
    title: "Alpha Partners Technology Merger Corp.",
  },
  {
    ticker: "MITAW",
    title: "Coliseum Acquisition Corp.",
  },
  {
    ticker: "MITAU",
    title: "Coliseum Acquisition Corp.",
  },
  {
    ticker: "DKDCU",
    title: "Data Knights Acquisition Corp.",
  },
  {
    ticker: "DKDCW",
    title: "Data Knights Acquisition Corp.",
  },
  {
    ticker: "CPARW",
    title: "Catalyst Partners Acquisition Corp.",
  },
  {
    ticker: "CPARU",
    title: "Catalyst Partners Acquisition Corp.",
  },
  {
    ticker: "CNDB-WT",
    title: "Concord Acquisition Corp III",
  },
  {
    ticker: "PLAOU",
    title: "Patria Latin American Opportunity Acquisition Corp.",
  },
  {
    ticker: "RJAC-UN",
    title: "Jackson Acquisition Co",
  },
  {
    ticker: "RJAC-WT",
    title: "Jackson Acquisition Co",
  },
  {
    ticker: "CHEAW",
    title: "Chenghe Acquisition Co.",
  },
  {
    ticker: "SKGRU",
    title: "SK Growth Opportunities Corp",
  },
  {
    ticker: "EVGRW",
    title: "Evergreen Corp",
  },
  {
    ticker: "EVGRU",
    title: "Evergreen Corp",
  },
  {
    ticker: "TETEW",
    title: "Technology & Telecommunication Acquisition Corp",
  },
  {
    ticker: "TETEU",
    title: "Technology & Telecommunication Acquisition Corp",
  },
  {
    ticker: "ESACW",
    title: "ESGEN Acquisition Corp",
  },
  {
    ticker: "GGAAW",
    title: "Genesis Growth Tech Acquisition Corp.",
  },
  {
    ticker: "GGAAU",
    title: "Genesis Growth Tech Acquisition Corp.",
  },
  {
    ticker: "JGGCR",
    title: "Jaguar Global Growth Corp I",
  },
  {
    ticker: "JGGCU",
    title: "Jaguar Global Growth Corp I",
  },
  {
    ticker: "CHEAU",
    title: "Chenghe Acquisition Co.",
  },
  {
    ticker: "WTMAU",
    title: "Welsbach Technology Metals Acquisition Corp.",
  },
  {
    ticker: "WTMAR",
    title: "Welsbach Technology Metals Acquisition Corp.",
  },
  {
    ticker: "ESACU",
    title: "ESGEN Acquisition Corp",
  },
  {
    ticker: "APXIU",
    title: "APx Acquisition Corp. I",
  },
  {
    ticker: "APXIW",
    title: "APx Acquisition Corp. I",
  },
  {
    ticker: "PBAXU",
    title: "PHOENIX BIOTECH ACQUISITION CORP.",
  },
  {
    ticker: "TLGYU",
    title: "TLGY ACQUISITION CORP",
  },
  {
    ticker: "TLGYW",
    title: "TLGY ACQUISITION CORP",
  },
  {
    ticker: "SVREW",
    title: "SaverOne 2014 Ltd.",
  },
  {
    ticker: "BWAQR",
    title: "Blue World Acquisition Corp",
  },
  {
    ticker: "SWVLW",
    title: "Swvl Holdings Corp",
  },
  {
    ticker: "ANGHW",
    title: "Anghami Inc",
  },
  {
    ticker: "MDGSW",
    title: "Medigus Ltd.",
  },
  {
    ticker: "WTRE",
    title: "Watford Holdings Ltd.",
  },
  {
    ticker: "APTV-PA",
    title: "Aptiv PLC",
  },
  {
    ticker: "MITT-PC",
    title: "AG Mortgage Investment Trust, Inc.",
  },
  {
    ticker: "GNL-PB",
    title: "Global Net Lease, Inc.",
  },
  {
    ticker: "SPNT-PB",
    title: "SiriusPoint Ltd",
  },
  {
    ticker: "SSPCF",
    title: "SiriusPoint Ltd",
  },
  {
    ticker: "BHSEW",
    title: "Bull Horn Holdings Corp.",
  },
  {
    ticker: "BHSEU",
    title: "Bull Horn Holdings Corp.",
  },
  {
    ticker: "VSSYW",
    title: "Versus Systems Inc.",
  },
  {
    ticker: "BLBLF",
    title: "Bilibili Inc.",
  },
  {
    ticker: "TBLTW",
    title: "Toughbuilt Industries, Inc",
  },
  {
    ticker: "METCL",
    title: "Ramaco Resources, Inc.",
  },
  {
    ticker: "AP-WT",
    title: "AMPCO PITTSBURGH CORP",
  },
  {
    ticker: "DECAU",
    title: "Denali Capital Acquisition Corp.",
  },
  {
    ticker: "DECAW",
    title: "Denali Capital Acquisition Corp.",
  },
  {
    ticker: "MTEKW",
    title: "Maris Tech Ltd.",
  },
  {
    ticker: "WAVSU",
    title: "Western Acquisition Ventures Corp.",
  },
  {
    ticker: "ACABU",
    title: "Atlantic Coastal Acquisition Corp. II",
  },
  {
    ticker: "ACABW",
    title: "Atlantic Coastal Acquisition Corp. II",
  },
  {
    ticker: "WAVSW",
    title: "Western Acquisition Ventures Corp.",
  },
  {
    ticker: "AEHAU",
    title: "Aesther Healthcare Acquisition Corp.",
  },
  {
    ticker: "AEHAW",
    title: "Aesther Healthcare Acquisition Corp.",
  },
  {
    ticker: "OTECW",
    title: "OceanTech Acquisitions I Corp.",
  },
  {
    ticker: "OTECU",
    title: "OceanTech Acquisitions I Corp.",
  },
  {
    ticker: "FRSGU",
    title: "First Reserve Sustainable Growth Corp.",
  },
  {
    ticker: "FRSGW",
    title: "First Reserve Sustainable Growth Corp.",
  },
  {
    ticker: "ONYXW",
    title: "Onyx Acquisition Co. I",
  },
  {
    ticker: "ONYXU",
    title: "Onyx Acquisition Co. I",
  },
  {
    ticker: "RNWWW",
    title: "ReNew Energy Global plc",
  },
  {
    ticker: "GLEEW",
    title: "Gladstone Acquisition Corp",
  },
  {
    ticker: "GLEEU",
    title: "Gladstone Acquisition Corp",
  },
  {
    ticker: "SAGAU",
    title: "Sagaliam Acquisition Corp",
  },
  {
    ticker: "SAGAR",
    title: "Sagaliam Acquisition Corp",
  },
  {
    ticker: "SCUA-WT",
    title: "Sculptor Acquisition Corp I",
  },
  {
    ticker: "BRDS-WT",
    title: "Bird Global, Inc.",
  },
  {
    ticker: "ARGUW",
    title: "Argus Capital Corp.",
  },
  {
    ticker: "ARGUU",
    title: "Argus Capital Corp.",
  },
  {
    ticker: "REVBU",
    title: "REVELATION BIOSCIENCES, INC.",
  },
  {
    ticker: "REVBW",
    title: "REVELATION BIOSCIENCES, INC.",
  },
  {
    ticker: "CMPOW",
    title: "CompoSecure, Inc.",
  },
  {
    ticker: "JOFFU",
    title: "JOFF Fintech Acquisition Corp.",
  },
  {
    ticker: "JOFFW",
    title: "JOFF Fintech Acquisition Corp.",
  },
  {
    ticker: "ADERU",
    title: "26 Capital Acquisition Corp.",
  },
  {
    ticker: "ADERW",
    title: "26 Capital Acquisition Corp.",
  },
  {
    ticker: "FLACU",
    title: "Frazier Lifesciences Acquisition Corp",
  },
  {
    ticker: "FLACW",
    title: "Frazier Lifesciences Acquisition Corp",
  },
  {
    ticker: "SLCRW",
    title: "Silver Crest Acquisition Corp",
  },
  {
    ticker: "AUROW",
    title: "Aurora Innovation, Inc.",
  },
  {
    ticker: "ROSS-WT",
    title: "Ross Acquisition Corp II",
  },
  {
    ticker: "ROSS-UN",
    title: "Ross Acquisition Corp II",
  },
  {
    ticker: "AFAQW",
    title: "AF Acquisition Corp.",
  },
  {
    ticker: "AFAQU",
    title: "AF Acquisition Corp.",
  },
  {
    ticker: "ANZUU",
    title: "Anzu Special Acquisition Corp I",
  },
  {
    ticker: "GAMCW",
    title: "Golden Arrow Merger Corp.",
  },
  {
    ticker: "GAMCU",
    title: "Golden Arrow Merger Corp.",
  },
  {
    ticker: "SWSSW",
    title: "Springwater Special Situations Corp.",
  },
  {
    ticker: "HLGN-WT",
    title: "Heliogen, Inc.",
  },
  {
    ticker: "ANZUW",
    title: "Anzu Special Acquisition Corp I",
  },
  {
    ticker: "SDACW",
    title: "Sustainable Development Acquisition I Corp.",
  },
  {
    ticker: "SDACU",
    title: "Sustainable Development Acquisition I Corp.",
  },
  {
    ticker: "SWSSU",
    title: "Springwater Special Situations Corp.",
  },
  {
    ticker: "ENJYW",
    title: "ENJOY TECHNOLOGY, INC./DE",
  },
  {
    ticker: "SSAAU",
    title: "Science Strategic Acquisition Corp. Alpha",
  },
  {
    ticker: "SSAAW",
    title: "Science Strategic Acquisition Corp. Alpha",
  },
  {
    ticker: "CLIM-UN",
    title: "Climate Real Impact Solutions II Acquisition Corp",
  },
  {
    ticker: "CLIM-WT",
    title: "Climate Real Impact Solutions II Acquisition Corp",
  },
  {
    ticker: "NSTD-WT",
    title: "Northern Star Investment Corp. IV",
  },
  {
    ticker: "NSTD-UN",
    title: "Northern Star Investment Corp. IV",
  },
  {
    ticker: "IVDAW",
    title: "Iveda Solutions, Inc.",
  },
  {
    ticker: "GSLD",
    title: "Global Ship Lease, Inc.",
  },
  {
    ticker: "SAT",
    title: "SARATOGA INVESTMENT CORP.",
  },
  {
    ticker: "SAK",
    title: "SARATOGA INVESTMENT CORP.",
  },
  {
    ticker: "OASPW",
    title: "Oasis Petroleum Inc.",
  },
  {
    ticker: "GAINZ",
    title: "GLADSTONE INVESTMENT CORPORATION\\DE",
  },
  {
    ticker: "GAINN",
    title: "GLADSTONE INVESTMENT CORPORATION\\DE",
  },
  {
    ticker: "ADC-PA",
    title: "AGREE REALTY CORP",
  },
  {
    ticker: "MS-PO",
    title: "MORGAN STANLEY",
  },
  {
    ticker: "MS-PL",
    title: "MORGAN STANLEY",
  },
  {
    ticker: "WAFDP",
    title: "WASHINGTON FEDERAL INC",
  },
  {
    ticker: "WTFCP",
    title: "WINTRUST FINANCIAL CORP",
  },
  {
    ticker: "PAASF",
    title: "PAN AMERICAN SILVER CORP",
  },
  {
    ticker: "VAL-WT",
    title: "Valaris Ltd",
  },
  {
    ticker: "CHSCN",
    title: "CHS INC",
  },
  {
    ticker: "CHSCO",
    title: "CHS INC",
  },
  {
    ticker: "CHSCM",
    title: "CHS INC",
  },
  {
    ticker: "CHSCL",
    title: "CHS INC",
  },
  {
    ticker: "UCBIO",
    title: "UNITED COMMUNITY BANKS INC",
  },
  {
    ticker: "HBANP",
    title: "HUNTINGTON BANCSHARES INC /MD/",
  },
  {
    ticker: "SLNHP",
    title: "Soluna Holdings, Inc",
  },
  {
    ticker: "HBANM",
    title: "HUNTINGTON BANCSHARES INC /MD/",
  },
  {
    ticker: "WELPM",
    title: "WISCONSIN ELECTRIC POWER CO",
  },
  {
    ticker: "FUE",
    title: "SWEDISH EXPORT CREDIT CORP /SWED/",
  },
  {
    ticker: "RJA",
    title: "SWEDISH EXPORT CREDIT CORP /SWED/",
  },
  {
    ticker: "GRU",
    title: "SWEDISH EXPORT CREDIT CORP /SWED/",
  },
  {
    ticker: "RJN",
    title: "SWEDISH EXPORT CREDIT CORP /SWED/",
  },
  {
    ticker: "RJI",
    title: "SWEDISH EXPORT CREDIT CORP /SWED/",
  },
  {
    ticker: "RJZ",
    title: "SWEDISH EXPORT CREDIT CORP /SWED/",
  },
  {
    ticker: "TETAR",
    title: "Teton Advisors, Inc.",
  },
  {
    ticker: "QRTEP",
    title: "Qurate Retail, Inc.",
  },
  {
    ticker: "DCP-PB",
    title: "DCP Midstream, LP",
  },
  {
    ticker: "AAIN",
    title: "Arlington Asset Investment Corp.",
  },
  {
    ticker: "AAIC-PB",
    title: "Arlington Asset Investment Corp.",
  },
  {
    ticker: "AIZN",
    title: "ASSURANT, INC.",
  },
  {
    ticker: "AAIC-PC",
    title: "Arlington Asset Investment Corp.",
  },
  {
    ticker: "FCELB",
    title: "FUELCELL ENERGY INC",
  },
  {
    ticker: "CMSD",
    title: "CMS ENERGY CORP",
  },
  {
    ticker: "CMSC",
    title: "CMS ENERGY CORP",
  },
  {
    ticker: "CMS-PC",
    title: "CMS ENERGY CORP",
  },
  {
    ticker: "FGMCU",
    title: "FG Merger Corp.",
  },
  {
    ticker: "FGMCW",
    title: "FG Merger Corp.",
  },
  {
    ticker: "YOTAR",
    title: "Yotta Acquisition Corp",
  },
  {
    ticker: "YOTAU",
    title: "Yotta Acquisition Corp",
  },
  {
    ticker: "YOTAW",
    title: "Yotta Acquisition Corp",
  },
  {
    ticker: "ACAXW",
    title: "Alset Capital Acquisition Corp.",
  },
  {
    ticker: "ACAXU",
    title: "Alset Capital Acquisition Corp.",
  },
  {
    ticker: "ACAXR",
    title: "Alset Capital Acquisition Corp.",
  },
  {
    ticker: "FITBP",
    title: "FIFTH THIRD BANCORP",
  },
  {
    ticker: "FITBO",
    title: "FIFTH THIRD BANCORP",
  },
  {
    ticker: "CTO-PA",
    title: "CTO Realty Growth, Inc.",
  },
  {
    ticker: "SIVBP",
    title: "SVB FINANCIAL GROUP",
  },
  {
    ticker: "RJF-PA",
    title: "RAYMOND JAMES FINANCIAL INC",
  },
  {
    ticker: "RJF-PB",
    title: "RAYMOND JAMES FINANCIAL INC",
  },
  {
    ticker: "IMACW",
    title: "IMAC Holdings, Inc.",
  },
  {
    ticker: "ENSCW",
    title: "Ensysce Biosciences, Inc.",
  },
  {
    ticker: "THCAW",
    title: "Tuscan Holdings Corp. II",
  },
  {
    ticker: "ADVWW",
    title: "Advantage Solutions Inc.",
  },
  {
    ticker: "AEVA-WT",
    title: "Aeva Technologies, Inc.",
  },
  {
    ticker: "BLDEW",
    title: "Blade Air Mobility, Inc.",
  },
  {
    ticker: "BRLIU",
    title: "Brilliant Acquisition Corp",
  },
  {
    ticker: "BRLIW",
    title: "Brilliant Acquisition Corp",
  },
  {
    ticker: "BRLIR",
    title: "Brilliant Acquisition Corp",
  },
  {
    ticker: "TRLEF",
    title: "Trillion Energy International Inc.",
  },
  {
    ticker: "GROMW",
    title: "Grom Social Enterprises, Inc.",
  },
  {
    ticker: "MDRRP",
    title: "Medalist Diversified REIT, Inc.",
  },
  {
    ticker: "YGYIP",
    title: "Youngevity International, Inc.",
  },
  {
    ticker: "UPTDW",
    title: "TradeUP Acquisition Corp.",
  },
  {
    ticker: "UPTDU",
    title: "TradeUP Acquisition Corp.",
  },
  {
    ticker: "TZUP",
    title: "THUMZUP MEDIA Corp",
  },
  {
    ticker: "APN-WT",
    title: "Apeiron Capital Investment Corp.",
  },
  {
    ticker: "HTAQ-WT",
    title: "Hunt Companies Acquisition Corp. I",
  },
  {
    ticker: "CLBR-UN",
    title: "Colombier Acquisition Corp.",
  },
  {
    ticker: "CLBR-WT",
    title: "Colombier Acquisition Corp.",
  },
  {
    ticker: "GEEXW",
    title: "Games & Esports Experience Acquisition Corp.",
  },
  {
    ticker: "GEEXU",
    title: "Games & Esports Experience Acquisition Corp.",
  },
  {
    ticker: "SEATW",
    title: "Vivid Seats Inc.",
  },
  {
    ticker: "TGR-UN",
    title: "Kimbell Tiger Acquisition Corp",
  },
  {
    ticker: "NOVVR",
    title: "Nova Vision Acquisition Corp",
  },
  {
    ticker: "TGR-WT",
    title: "Kimbell Tiger Acquisition Corp",
  },
  {
    ticker: "NOVVW",
    title: "Nova Vision Acquisition Corp",
  },
  {
    ticker: "NOVVU",
    title: "Nova Vision Acquisition Corp",
  },
  {
    ticker: "MNTN-WT",
    title: "Everest Consolidator Acquisition Corp",
  },
  {
    ticker: "MNTN-UN",
    title: "Everest Consolidator Acquisition Corp",
  },
  {
    ticker: "AFTR-UN",
    title: "AfterNext HealthTech Acquisition Corp.",
  },
  {
    ticker: "AFTR-WT",
    title: "AfterNext HealthTech Acquisition Corp.",
  },
  {
    ticker: "MAAQW",
    title: "Mana Capital Acquisition Corp.",
  },
  {
    ticker: "MAAQR",
    title: "Mana Capital Acquisition Corp.",
  },
  {
    ticker: "MAAQU",
    title: "Mana Capital Acquisition Corp.",
  },
  {
    ticker: "SGHC-WT",
    title: "Super Group (SGHC) Ltd",
  },
  {
    ticker: "NUBIW",
    title: "Nubia Brand International Corp.",
  },
  {
    ticker: "SATLW",
    title: "Satellogic Inc.",
  },
  {
    ticker: "NUBIU",
    title: "Nubia Brand International Corp.",
  },
  {
    ticker: "LGTOW",
    title: "LEGATO MERGER CORP. II",
  },
  {
    ticker: "LGTOU",
    title: "LEGATO MERGER CORP. II",
  },
  {
    ticker: "VMCAU",
    title: "Valuence Merger Corp. I",
  },
  {
    ticker: "AKICW",
    title: "Sports Ventures Acquisition Corp.",
  },
  {
    ticker: "AKICU",
    title: "Sports Ventures Acquisition Corp.",
  },
  {
    ticker: "FRGE-WT",
    title: "Forge Global Holdings, Inc.",
  },
  {
    ticker: "AAC-UN",
    title: "Ares Acquisition Corp",
  },
  {
    ticker: "AAC-WT",
    title: "Ares Acquisition Corp",
  },
  {
    ticker: "NVSAU",
    title: "New Vista Acquisition Corp",
  },
  {
    ticker: "GIIXW",
    title: "Gores Holdings VIII Inc.",
  },
  {
    ticker: "GIIXU",
    title: "Gores Holdings VIII Inc.",
  },
  {
    ticker: "NVSAW",
    title: "New Vista Acquisition Corp",
  },
  {
    ticker: "IPVF-WT",
    title: "InterPrivate III Financial Partners Inc.",
  },
  {
    ticker: "ARBKL",
    title: "Argo Blockchain Plc",
  },
  {
    ticker: "TRAQ-WT",
    title: "Trine II Acquisition Corp.",
  },
  {
    ticker: "TRAQ-UN",
    title: "Trine II Acquisition Corp.",
  },
  {
    ticker: "KTTAW",
    title: "Pasithea Therapeutics Corp.",
  },
  {
    ticker: "OPFI-WT",
    title: "OppFi Inc.",
  },
  {
    ticker: "FST-WT",
    title: "FAST Acquisition Corp.",
  },
  {
    ticker: "MIR-WT",
    title: "Mirion Technologies, Inc.",
  },
  {
    ticker: "IONQ-WT",
    title: "IonQ, Inc.",
  },
  {
    ticker: "ASAXU",
    title: "Astrea Acquisition Corp.",
  },
  {
    ticker: "OEPWW",
    title: "One Equity Partners Open Water I Corp.",
  },
  {
    ticker: "OEPWU",
    title: "One Equity Partners Open Water I Corp.",
  },
  {
    ticker: "SRZNW",
    title: "Surrozen, Inc./DE",
  },
  {
    ticker: "MIMO-WT",
    title: "Airspan Networks Holdings Inc.",
  },
  {
    ticker: "VTIQW",
    title: "VectoIQ Acquisition Corp. II",
  },
  {
    ticker: "ARECW",
    title: "American Resources Corp",
  },
  {
    ticker: "USWSW",
    title: "U.S. WELL SERVICES, INC.",
  },
  {
    ticker: "DATSW",
    title: "DatChat, Inc.",
  },
  {
    ticker: "DTIID",
    title: "DEFENSE TECHNOLOGIES INTERNATIONAL CORP.",
  },
  {
    ticker: "FTAIN",
    title: "Fortress Transportation & Infrastructure Investors LLC",
  },
  {
    ticker: "FTAIP",
    title: "Fortress Transportation & Infrastructure Investors LLC",
  },
  {
    ticker: "FTAIO",
    title: "Fortress Transportation & Infrastructure Investors LLC",
  },
  {
    ticker: "BFIIW",
    title: "BurgerFi International, Inc.",
  },
  {
    ticker: "SES-WT",
    title: "SES AI Corp",
  },
  {
    ticker: "PIAI-WT",
    title: "Prime Impact Acquisition I",
  },
  {
    ticker: "PIAI-UN",
    title: "Prime Impact Acquisition I",
  },
  {
    ticker: "MLACW",
    title: "Malacca Straits Acquisition Co Ltd",
  },
  {
    ticker: "LGHLW",
    title: "Lion Group Holding Ltd",
  },
  {
    ticker: "METXW",
    title: "Meten Holding Group Ltd.",
  },
  {
    ticker: "IRNT-WT",
    title: "IronNet, Inc.",
  },
  {
    ticker: "INN-PF",
    title: "Summit Hotel Properties, Inc.",
  },
  {
    ticker: "CNFRL",
    title: "Conifer Holdings, Inc.",
  },
  {
    ticker: "TAGS",
    title: "Teucrium Commodity Trust",
  },
  {
    ticker: "CANE",
    title: "Teucrium Commodity Trust",
  },
  {
    ticker: "CORN",
    title: "Teucrium Commodity Trust",
  },
  {
    ticker: "SOYB",
    title: "Teucrium Commodity Trust",
  },
  {
    ticker: "WEAT",
    title: "Teucrium Commodity Trust",
  },
  {
    ticker: "ARFXD",
    title: "ProMIS Neurosciences Inc.",
  },
  {
    ticker: "PRS",
    title: "PRUDENTIAL FINANCIAL INC",
  },
  {
    ticker: "PFH",
    title: "PRUDENTIAL FINANCIAL INC",
  },
  {
    ticker: "GLU-PA",
    title: "GABELLI GLOBAL UTILITY & INCOME TRUST",
  },
  {
    ticker: "JRJCY",
    title: "China Finance Online Co. LTD",
  },
  {
    ticker: "FRBNW",
    title: "Forbion European Acquisition Corp.",
  },
  {
    ticker: "FRBNU",
    title: "Forbion European Acquisition Corp.",
  },
  {
    ticker: "JMACW",
    title: "Maxpro Capital Acquisition Corp.",
  },
  {
    ticker: "JMACU",
    title: "Maxpro Capital Acquisition Corp.",
  },
  {
    ticker: "PORT-WT",
    title: "Southport Acquisition Corp",
  },
  {
    ticker: "PORT-UN",
    title: "Southport Acquisition Corp",
  },
  {
    ticker: "NFNT-WT",
    title: "Infinite Acquisition Corp.",
  },
  {
    ticker: "BFRIW",
    title: "Biofrontera Inc.",
  },
  {
    ticker: "HPLTU",
    title: "Home Plate Acquisition Corp",
  },
  {
    ticker: "HPLTW",
    title: "Home Plate Acquisition Corp",
  },
  {
    ticker: "PROCW",
    title: "Procaps Group, S.A.",
  },
  {
    ticker: "WEJOW",
    title: "Wejo Group Ltd",
  },
  {
    ticker: "CXAC-UN",
    title: "C5 Acquisition Corp",
  },
  {
    ticker: "CXAC-WT",
    title: "C5 Acquisition Corp",
  },
  {
    ticker: "PRLHW",
    title: "Pearl Holdings Acquisition Corp",
  },
  {
    ticker: "DUETW",
    title: "DUET Acquisition Corp.",
  },
  {
    ticker: "CLINW",
    title: "Clean Earth Acquisitions Corp.",
  },
  {
    ticker: "CLINU",
    title: "Clean Earth Acquisitions Corp.",
  },
  {
    ticker: "CLINR",
    title: "Clean Earth Acquisitions Corp.",
  },
  {
    ticker: "MSSAR",
    title: "Metal Sky Star Acquisition Corp",
  },
  {
    ticker: "TELZ",
    title: "TELLURIAN INC. /DE/",
  },
  {
    ticker: "NSTB-WT",
    title: "Northern Star Investment Corp. II",
  },
  {
    ticker: "CFFEW",
    title: "CF Acquisition Corp. VIII",
  },
  {
    ticker: "PLMIU",
    title: "Plum Acquisition Corp. I",
  },
  {
    ticker: "PLMIW",
    title: "Plum Acquisition Corp. I",
  },
  {
    ticker: "CCAIW",
    title: "Cascadia Acquisition Corp.",
  },
  {
    ticker: "CCAIU",
    title: "Cascadia Acquisition Corp.",
  },
  {
    ticker: "SKYAU",
    title: "SKYDECK ACQUISITION CORP.",
  },
  {
    ticker: "SKYAW",
    title: "SKYDECK ACQUISITION CORP.",
  },
  {
    ticker: "CRECW",
    title: "Crescera Capital Acquisition Corp.",
  },
  {
    ticker: "BHACW",
    title: "Crixus BH3 Acquisition Co",
  },
  {
    ticker: "PHYT-UN",
    title: "Pyrophyte Acquisition Corp.",
  },
  {
    ticker: "PHYT-WT",
    title: "Pyrophyte Acquisition Corp.",
  },
  {
    ticker: "RKLY-WT",
    title: "Rockley Photonics Holdings Ltd",
  },
  {
    ticker: "BHACU",
    title: "Crixus BH3 Acquisition Co",
  },
  {
    ticker: "HIIIU",
    title: "Hudson Executive Investment Corp. III",
  },
  {
    ticker: "HIIIW",
    title: "Hudson Executive Investment Corp. III",
  },
  {
    ticker: "SKYH-WT",
    title: "Sky Harbour Group Corp",
  },
  {
    ticker: "ETACW",
    title: "E.Merge Technology Acquisition Corp.",
  },
  {
    ticker: "ETACU",
    title: "E.Merge Technology Acquisition Corp.",
  },
  {
    ticker: "XOSWW",
    title: "Xos, Inc.",
  },
  {
    ticker: "SHACW",
    title: "SCP & CO Healthcare Acquisition Co",
  },
  {
    ticker: "ASAQ-UN",
    title: "Atlantic Avenue Acquisition Corp",
  },
  {
    ticker: "ASAQ-WT",
    title: "Atlantic Avenue Acquisition Corp",
  },
  {
    ticker: "EPHYW",
    title: "Epiphany Technology Acquisition Corp.",
  },
  {
    ticker: "EPHYU",
    title: "Epiphany Technology Acquisition Corp.",
  },
  {
    ticker: "NRGV-WT",
    title: "Energy Vault Holdings, Inc.",
  },
  {
    ticker: "CPTK-WT",
    title: "Crown PropTech Acquisitions",
  },
  {
    ticker: "CPTK-UN",
    title: "Crown PropTech Acquisitions",
  },
  {
    ticker: "SABSW",
    title: "SAB Biotherapeutics, Inc.",
  },
  {
    ticker: "DHHCU",
    title: "DiamondHead Holdings Corp.",
  },
  {
    ticker: "DNZ-WT",
    title: "D & Z Media Acquisition Corp.",
  },
  {
    ticker: "DNZ-UN",
    title: "D & Z Media Acquisition Corp.",
  },
  {
    ticker: "SF-PC",
    title: "STIFEL FINANCIAL CORP",
  },
  {
    ticker: "SFB",
    title: "STIFEL FINANCIAL CORP",
  },
  {
    ticker: "SF-PD",
    title: "STIFEL FINANCIAL CORP",
  },
  {
    ticker: "FRMEP",
    title: "FIRST MERCHANTS CORP",
  },
  {
    ticker: "JJG",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "GRN",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "GSP",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "JJU",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "JJM",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "JJOFF",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "NIB",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "JJE",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "JJATF",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "JJMTF",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "VXX",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "CAPD",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "JJCTF",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "JJGTF",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "BAL",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "COW",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "OIL",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "VXZ",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "JJC",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "SGG",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "JJN",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "WIL",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "DJP",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "SGGFF",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "JJA",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "JJUFF",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "PGM",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "GAZ",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "IMLP",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "JJP",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "ATMP",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "GBUG",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "OILNF",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "SBUG",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "BCM",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "JJS",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "RODI",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "CAPE",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "JJT",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "JO",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "LD",
    title: "BARCLAYS BANK PLC",
  },
  {
    ticker: "TDS-PV",
    title: "TELEPHONE & DATA SYSTEMS INC /DE/",
  },
  {
    ticker: "AESC",
    title: "AES CORP",
  },
  {
    ticker: "SBFMW",
    title: "Sunshine Biopharma, Inc",
  },
  {
    ticker: "GMBLW",
    title: "ESPORTS ENTERTAINMENT GROUP, INC.",
  },
  {
    ticker: "GMBLP",
    title: "ESPORTS ENTERTAINMENT GROUP, INC.",
  },
  {
    ticker: "GMBLZ",
    title: "ESPORTS ENTERTAINMENT GROUP, INC.",
  },
  {
    ticker: "EYESW",
    title: "SECOND SIGHT MEDICAL PRODUCTS INC",
  },
  {
    ticker: "QVCC",
    title: "QVC INC",
  },
  {
    ticker: "DRH-PA",
    title: "DiamondRock Hospitality Co",
  },
  {
    ticker: "COWNL",
    title: "COWEN INC.",
  },
  {
    ticker: "XCWPX",
    title: "ACAP Strategic Fund",
  },
  {
    ticker: "HSCSW",
    title: "Heart Test Laboratories, Inc.",
  },
  {
    ticker: "ACP-PA",
    title: "Aberdeen Income Credit Strategies Fund",
  },
  {
    ticker: "EP-PC",
    title: "KINDER MORGAN, INC.",
  },
  {
    ticker: "NRZ-PB",
    title: "New Residential Investment Corp.",
  },
  {
    ticker: "NRZ-PD",
    title: "New Residential Investment Corp.",
  },
  {
    ticker: "NRZ-PC",
    title: "New Residential Investment Corp.",
  },
  {
    ticker: "NRZ-PA",
    title: "New Residential Investment Corp.",
  },
  {
    ticker: "IEAWW",
    title: "Infrastructure & Energy Alternatives, Inc.",
  },
  {
    ticker: "TRTX-PC",
    title: "TPG RE Finance Trust, Inc.",
  },
  {
    ticker: "KXINW",
    title: "Kaixin Auto Holdings",
  },
  {
    ticker: "HYMCL",
    title: "HYCROFT MINING HOLDING CORP",
  },
  {
    ticker: "HYMCW",
    title: "HYCROFT MINING HOLDING CORP",
  },
  {
    ticker: "HYMCZ",
    title: "HYCROFT MINING HOLDING CORP",
  },
  {
    ticker: "CSSEN",
    title: "Chicken Soup for the Soul Entertainment, Inc.",
  },
  {
    ticker: "CONXW",
    title: "CONX Corp.",
  },
  {
    ticker: "VLD-WT",
    title: "Velo3D, Inc.",
  },
  {
    ticker: "SONDW",
    title: "Sonder Holdings Inc.",
  },
  {
    ticker: "DUNEW",
    title: "Dune Acquisition Corp",
  },
  {
    ticker: "BCACW",
    title: "Brookline Capital Acquisition Corp.",
  },
  {
    ticker: "TWND-WT",
    title: "Tailwind Acquisition Corp.",
  },
  {
    ticker: "DUNEU",
    title: "Dune Acquisition Corp",
  },
  {
    ticker: "ZEV-WT",
    title: "Lightning eMotors, Inc.",
  },
  {
    ticker: "SHPW-WT",
    title: "Shapeways Holdings, Inc.",
  },
  {
    ticker: "SKIL-WT",
    title: "Skillsoft Corp.",
  },
  {
    ticker: "BCACU",
    title: "Brookline Capital Acquisition Corp.",
  },
  {
    ticker: "RELIW",
    title: "Reliance Global Group, Inc.",
  },
  {
    ticker: "PMFLX",
    title: "PIMCO Flexible Municipal Income Fund",
  },
  {
    ticker: "CHRB",
    title: "Charah Solutions, Inc.",
  },
  {
    ticker: "JUPWW",
    title: "Jupiter Wellness, Inc.",
  },
  {
    ticker: "BAMH",
    title: "BROOKFIELD ASSET MANAGEMENT INC.",
  },
  {
    ticker: "BAMI",
    title: "BROOKFIELD ASSET MANAGEMENT INC.",
  },
  {
    ticker: "BXDIF",
    title: "BROOKFIELD ASSET MANAGEMENT INC.",
  },
  {
    ticker: "ENIAY",
    title: "ENEL AMERICAS S.A.",
  },
  {
    ticker: "PRE-PJ",
    title: "PARTNERRE LTD",
  },
  {
    ticker: "SPE-PC",
    title: "SPECIAL OPPORTUNITIES FUND, INC.",
  },
  {
    ticker: "AMBC-WT",
    title: "AMBAC FINANCIAL GROUP INC",
  },
  {
    ticker: "GAB-PK",
    title: "GABELLI EQUITY TRUST INC",
  },
  {
    ticker: "KMPB",
    title: "KEMPER Corp",
  },
  {
    ticker: "ONBPO",
    title: "OLD NATIONAL BANCORP /IN/",
  },
  {
    ticker: "ONBPP",
    title: "OLD NATIONAL BANCORP /IN/",
  },
  {
    ticker: "ISCB",
    title: "INTERNATIONAL SPEEDWAY CORP",
  },
  {
    ticker: "AFRIW",
    title: "Forafric Global PLC",
  },
  {
    ticker: "RENEU",
    title: "Cartesian Growth Corp II",
  },
  {
    ticker: "DAOOW",
    title: "Crypto 1 Acquisition Corp",
  },
  {
    ticker: "STRNW",
    title: "Stran & Company, Inc.",
  },
  {
    ticker: "SUAC-WT",
    title: "ShoulderUP Technology Acquisition Corp.",
  },
  {
    ticker: "LSPRU",
    title: "Larkspur Health Acquisition Corp.",
  },
  {
    ticker: "LSPRW",
    title: "Larkspur Health Acquisition Corp.",
  },
  {
    ticker: "LILMW",
    title: "Lilium N.V.",
  },
  {
    ticker: "GIACW",
    title: "Gesher I Acquisition Corp.",
  },
  {
    ticker: "GIACU",
    title: "Gesher I Acquisition Corp.",
  },
  {
    ticker: "RNERW",
    title: "Mount Rainier Acquisition Corp.",
  },
  {
    ticker: "DCFCW",
    title: "Tritium DCFC Ltd",
  },
  {
    ticker: "DPCSW",
    title: "DP Cap Acquisition Corp I",
  },
  {
    ticker: "PPHPU",
    title: "PHP Ventures Acquisition Corp.",
  },
  {
    ticker: "PPHPW",
    title: "PHP Ventures Acquisition Corp.",
  },
  {
    ticker: "PPHPR",
    title: "PHP Ventures Acquisition Corp.",
  },
  {
    ticker: "DAOOU",
    title: "Crypto 1 Acquisition Corp",
  },
  {
    ticker: "EVTL-WT",
    title: "Vertical Aerospace Ltd.",
  },
  {
    ticker: "ISLEW",
    title: "Isleworth Healthcare Acquisition Corp.",
  },
  {
    ticker: "PTOCW",
    title: "Pine Technology Acquisition Corp.",
  },
  {
    ticker: "PTOCU",
    title: "Pine Technology Acquisition Corp.",
  },
  {
    ticker: "SMIHU",
    title: "Summit Healthcare Acquisition Corp.",
  },
  {
    ticker: "ATVCU",
    title: "Tribe Capital Growth Corp I",
  },
  {
    ticker: "ATVCW",
    title: "Tribe Capital Growth Corp I",
  },
  {
    ticker: "PSAGU",
    title: "Property Solutions Acquisition Corp. II",
  },
  {
    ticker: "FLME-UN",
    title: "Flame Acquisition Corp.",
  },
  {
    ticker: "PSAGW",
    title: "Property Solutions Acquisition Corp. II",
  },
  {
    ticker: "PSFE-WT",
    title: "Paysafe Ltd",
  },
  {
    ticker: "QFTA-UN",
    title: "Quantum FinTech Acquisition Corp",
  },
  {
    ticker: "QFTA-WT",
    title: "Quantum FinTech Acquisition Corp",
  },
  {
    ticker: "FLME-WT",
    title: "Flame Acquisition Corp.",
  },
  {
    ticker: "SVFAW",
    title: "SVF Investment Corp.",
  },
  {
    ticker: "SVFAU",
    title: "SVF Investment Corp.",
  },
  {
    ticker: "AGRIW",
    title: "AGRIFORCE GROWING SYSTEMS LTD.",
  },
  {
    ticker: "SMR-WT",
    title: "NUSCALE POWER Corp",
  },
  {
    ticker: "AEACU",
    title: "Authentic Equity Acquisition Corp.",
  },
  {
    ticker: "HIPO-WT",
    title: "Hippo Holdings Inc.",
  },
  {
    ticker: "AEACW",
    title: "Authentic Equity Acquisition Corp.",
  },
  {
    ticker: "VORBW",
    title: "Virgin Orbit Holdings, Inc.",
  },
  {
    ticker: "SHQAW",
    title: "Shelter Acquisition Corp I",
  },
  {
    ticker: "LCAHU",
    title: "Landcadia Holdings IV, Inc.",
  },
  {
    ticker: "LCAHW",
    title: "Landcadia Holdings IV, Inc.",
  },
  {
    ticker: "SMIHW",
    title: "Summit Healthcare Acquisition Corp.",
  },
  {
    ticker: "LOCL-WT",
    title: "Local Bounti Corporation/DE",
  },
  {
    ticker: "SBII-WT",
    title: "Sandbridge X2 Corp",
  },
  {
    ticker: "SBII-UN",
    title: "Sandbridge X2 Corp",
  },
  {
    ticker: "ORIAW",
    title: "Orion Biotech Opportunities Corp.",
  },
  {
    ticker: "HAIAU",
    title: "Healthcare AI Acquisition Corp.",
  },
  {
    ticker: "HAIAW",
    title: "Healthcare AI Acquisition Corp.",
  },
  {
    ticker: "ORIAU",
    title: "Orion Biotech Opportunities Corp.",
  },
  {
    ticker: "MSDAW",
    title: "MSD ACQUISITION CORP. / NEW",
  },
  {
    ticker: "MSDAU",
    title: "MSD ACQUISITION CORP. / NEW",
  },
  {
    ticker: "CBRGU",
    title: "Chain Bridge I",
  },
  {
    ticker: "CBRGW",
    title: "Chain Bridge I",
  },
  {
    ticker: "MET-PF",
    title: "METLIFE INC",
  },
  {
    ticker: "PSEC-PA",
    title: "PROSPECT CAPITAL CORP",
  },
  {
    ticker: "DLR-PL",
    title: "DIGITAL REALTY TRUST, INC.",
  },
  {
    ticker: "GDV-PK",
    title: "GABELLI DIVIDEND & INCOME TRUST",
  },
  {
    ticker: "ET-PE",
    title: "Energy Transfer LP",
  },
  {
    ticker: "WAL-PA",
    title: "WESTERN ALLIANCE BANCORPORATION",
  },
  {
    ticker: "ET-PD",
    title: "Energy Transfer LP",
  },
  {
    ticker: "ET-PC",
    title: "Energy Transfer LP",
  },
  {
    ticker: "OXLCP",
    title: "Oxford Lane Capital Corp.",
  },
  {
    ticker: "OXLCL",
    title: "Oxford Lane Capital Corp.",
  },
  {
    ticker: "OXLCN",
    title: "Oxford Lane Capital Corp.",
  },
  {
    ticker: "OXLCZ",
    title: "Oxford Lane Capital Corp.",
  },
  {
    ticker: "FGBIP",
    title: "First Guaranty Bancshares, Inc.",
  },
  {
    ticker: "CTXRW",
    title: "Citius Pharmaceuticals, Inc.",
  },
  {
    ticker: "XDMBX",
    title: "BNY Mellon Municipal Bond Infrastructure Fund, Inc.",
  },
  {
    ticker: "MBINO",
    title: "Merchants Bancorp",
  },
  {
    ticker: "MBINN",
    title: "Merchants Bancorp",
  },
  {
    ticker: "BHFAO",
    title: "Brighthouse Financial, Inc.",
  },
  {
    ticker: "BHFAN",
    title: "Brighthouse Financial, Inc.",
  },
  {
    ticker: "BHFAM",
    title: "Brighthouse Financial, Inc.",
  },
  {
    ticker: "SYTAW",
    title: "Siyata Mobile Inc.",
  },
  {
    ticker: "ENTXW",
    title: "Entera Bio Ltd.",
  },
  {
    ticker: "ROIVW",
    title: "Roivant Sciences Ltd.",
  },
  {
    ticker: "BRMK-WT",
    title: "Broadmark Realty Capital Inc.",
  },
  {
    ticker: "ESSCW",
    title: "East Stone Acquisition Corp",
  },
  {
    ticker: "ESSCR",
    title: "East Stone Acquisition Corp",
  },
  {
    ticker: "ORPHY",
    title: "Orphazyme A/S",
  },
  {
    ticker: "GOEVW",
    title: "Canoo Inc.",
  },
  {
    ticker: "OXY-WT",
    title: "OCCIDENTAL PETROLEUM CORP /DE/",
  },
  {
    ticker: "FOSLL",
    title: "Fossil Group, Inc.",
  },
  {
    ticker: "WBHC",
    title: "WILSON BANK HOLDING CO",
  },
  {
    ticker: "NEWEN",
    title: "NATIONAL GRID PLC",
  },
  {
    ticker: "NMPWP",
    title: "NATIONAL GRID PLC",
  },
  {
    ticker: "FHN-PF",
    title: "FIRST HORIZON CORP",
  },
  {
    ticker: "FHN-PD",
    title: "FIRST HORIZON CORP",
  },
  {
    ticker: "FHN-PC",
    title: "FIRST HORIZON CORP",
  },
  {
    ticker: "FHN-PB",
    title: "FIRST HORIZON CORP",
  },
  {
    ticker: "FHN-PE",
    title: "FIRST HORIZON CORP",
  },
  {
    ticker: "CMRAW",
    title: "Comera Life Sciences Holdings, Inc.",
  },
  {
    ticker: "SNV-PE",
    title: "SYNOVUS FINANCIAL CORP",
  },
  {
    ticker: "AFARW",
    title: "Aura Fat Projects Acquisition Corp",
  },
  {
    ticker: "AFARU",
    title: "Aura Fat Projects Acquisition Corp",
  },
  {
    ticker: "GLLIU",
    title: "GLOBALINK INVESTMENT INC.",
  },
  {
    ticker: "GLLIR",
    title: "GLOBALINK INVESTMENT INC.",
  },
  {
    ticker: "ATEK-UN",
    title: "Athena Technology Acquisition Corp. II",
  },
  {
    ticker: "BFAC-UN",
    title: "Battery Future Acquisition Corp.",
  },
  {
    ticker: "ASCBU",
    title: "SPAC II Acquisition Corp.",
  },
  {
    ticker: "FTIIU",
    title: "FutureTech II Acquisition Corp.",
  },
  {
    ticker: "FTIIW",
    title: "FutureTech II Acquisition Corp.",
  },
  {
    ticker: "GBBKR",
    title: "Global Blockchain Acquisition Corp.",
  },
  {
    ticker: "GBBKW",
    title: "Global Blockchain Acquisition Corp.",
  },
  {
    ticker: "GLLIW",
    title: "GLOBALINK INVESTMENT INC.",
  },
  {
    ticker: "IIIIU",
    title: "INSU ACQUISITION CORP III",
  },
  {
    ticker: "IIIIW",
    title: "INSU ACQUISITION CORP III",
  },
  {
    ticker: "NVVEW",
    title: "Nuvve Holding Corp.",
  },
  {
    ticker: "IINNW",
    title: "Inspira Technologies OXY B.H.N. Ltd",
  },
  {
    ticker: "ACQRU",
    title: "Independence Holdings Corp.",
  },
  {
    ticker: "ACQRW",
    title: "Independence Holdings Corp.",
  },
  {
    ticker: "JUN-UN",
    title: "Juniper II Corp.",
  },
  {
    ticker: "MACC-UN",
    title: "Mission Advancement Corp.",
  },
  {
    ticker: "MACC-WT",
    title: "Mission Advancement Corp.",
  },
  {
    ticker: "PCPC-WT",
    title: "Periphas Capital Partnering Corp",
  },
  {
    ticker: "BENEU",
    title: "Benessere Capital Acquisition Corp.",
  },
  {
    ticker: "BENER",
    title: "Benessere Capital Acquisition Corp.",
  },
  {
    ticker: "BWACU",
    title: "Better World Acquisition Corp.",
  },
  {
    ticker: "BWACW",
    title: "Better World Acquisition Corp.",
  },
  {
    ticker: "SNRHW",
    title: "Senior Connect Acquisition Corp. I",
  },
  {
    ticker: "BENEW",
    title: "Benessere Capital Acquisition Corp.",
  },
  {
    ticker: "HTPA-WT",
    title: "Highland Transcend Partners I Corp.",
  },
  {
    ticker: "HTPA-UN",
    title: "Highland Transcend Partners I Corp.",
  },
  {
    ticker: "BLUA-WT",
    title: "BlueRiver Acquisition Corp.",
  },
  {
    ticker: "BLUA-UN",
    title: "BlueRiver Acquisition Corp.",
  },
  {
    ticker: "PIIIW",
    title: "P3 Health Partners Inc.",
  },
  {
    ticker: "SHCRW",
    title: "Sharecare, Inc.",
  },
  {
    ticker: "SPIR-WT",
    title: "Spire Global, Inc.",
  },
  {
    ticker: "IPOD-UN",
    title: "Social Capital Hedosophia Holdings Corp. IV",
  },
  {
    ticker: "IPOD-WT",
    title: "Social Capital Hedosophia Holdings Corp. IV",
  },
  {
    ticker: "TINV-WT",
    title: "Tiga Acquisition Corp.",
  },
  {
    ticker: "HLBZW",
    title: "Helbiz, Inc.",
  },
  {
    ticker: "VENAW",
    title: "Venus Acquisition Corp",
  },
  {
    ticker: "GHACU",
    title: "Gaming & Hospitality Acquisition Corp.",
  },
  {
    ticker: "GHACW",
    title: "Gaming & Hospitality Acquisition Corp.",
  },
  {
    ticker: "GFAIW",
    title: "Guardforce AI Co., Ltd.",
  },
  {
    ticker: "GLS-WT",
    title: "GELESIS HOLDINGS, INC.",
  },
  {
    ticker: "ENCPW",
    title: "Energem Corp",
  },
  {
    ticker: "ENCPU",
    title: "Energem Corp",
  },
  {
    ticker: "BFAC-WT",
    title: "Battery Future Acquisition Corp.",
  },
  {
    ticker: "ASCBW",
    title: "SPAC II Acquisition Corp.",
  },
  {
    ticker: "ASCBR",
    title: "SPAC II Acquisition Corp.",
  },
  {
    ticker: "PEPLW",
    title: "PepperLime Health Acquisition Corp",
  },
  {
    ticker: "PEPLU",
    title: "PepperLime Health Acquisition Corp",
  },
  {
    ticker: "PNACU",
    title: "Prime Number Acquisition I Corp.",
  },
  {
    ticker: "BMAQU",
    title: "Blockchain Moon Acquisition Corp.",
  },
  {
    ticker: "XFINU",
    title: "ExcelFin Acquisition Corp.",
  },
  {
    ticker: "XFINW",
    title: "ExcelFin Acquisition Corp.",
  },
  {
    ticker: "GLTA-WT",
    title: "Galata Acquisition Corp.",
  },
  {
    ticker: "LGSTW",
    title: "Semper Paratus Acquisition Corp",
  },
  {
    ticker: "DHACW",
    title: "DIGITAL HEALTH ACQUISITION CORP.",
  },
  {
    ticker: "DHACU",
    title: "DIGITAL HEALTH ACQUISITION CORP.",
  },
  {
    ticker: "BMAQW",
    title: "Blockchain Moon Acquisition Corp.",
  },
  {
    ticker: "BMAQR",
    title: "Blockchain Moon Acquisition Corp.",
  },
  {
    ticker: "BRD-UN",
    title: "Beard Energy Transition Acquisition Corp.",
  },
  {
    ticker: "BRD-WT",
    title: "Beard Energy Transition Acquisition Corp.",
  },
  {
    ticker: "CNTQW",
    title: "Chardan NexTech Acquisition 2 Corp.",
  },
  {
    ticker: "LOCC-WT",
    title: "Live Oak Crestview Climate Acquisition Corp.",
  },
  {
    ticker: "AMBP-WT",
    title: "Ardagh Metal Packaging S.A.",
  },
  {
    ticker: "LOCC-UN",
    title: "Live Oak Crestview Climate Acquisition Corp.",
  },
  {
    ticker: "ZTAQU",
    title: "Zimmer Energy Transition Acquisition Corp.",
  },
  {
    ticker: "ZTAQW",
    title: "Zimmer Energy Transition Acquisition Corp.",
  },
  {
    ticker: "HWELW",
    title: "Healthwell Acquisition Corp. I",
  },
  {
    ticker: "DILAW",
    title: "Dila Capital Acquisition Corp",
  },
  {
    ticker: "VLATU",
    title: "Valor Latitude Acquisition Corp.",
  },
  {
    ticker: "DILAU",
    title: "Dila Capital Acquisition Corp",
  },
  {
    ticker: "WALDW",
    title: "Waldencast Acquisition Corp.",
  },
  {
    ticker: "TBLAW",
    title: "Taboola.com Ltd.",
  },
  {
    ticker: "JUN-WT",
    title: "Juniper II Corp.",
  },
  {
    ticker: "WALDU",
    title: "Waldencast Acquisition Corp.",
  },
  {
    ticker: "LMAOU",
    title: "LMF Acquisition Opportunities Inc",
  },
  {
    ticker: "LMAOW",
    title: "LMF Acquisition Opportunities Inc",
  },
  {
    ticker: "OHPAU",
    title: "Orion Acquisition Corp.",
  },
  {
    ticker: "EVOJW",
    title: "Evo Acquisition Corp",
  },
  {
    ticker: "EVOJU",
    title: "Evo Acquisition Corp",
  },
  {
    ticker: "OHPAW",
    title: "Orion Acquisition Corp.",
  },
  {
    ticker: "TSPQ-UN",
    title: "TCW Special Purpose Acquisition Corp.",
  },
  {
    ticker: "TSPQ-WT",
    title: "TCW Special Purpose Acquisition Corp.",
  },
  {
    ticker: "MONCW",
    title: "Monument Circle Acquisition Corp.",
  },
  {
    ticker: "MONCU",
    title: "Monument Circle Acquisition Corp.",
  },
  {
    ticker: "HMCOW",
    title: "HumanCo Acquisition Corp.",
  },
  {
    ticker: "HMCOU",
    title: "HumanCo Acquisition Corp.",
  },
  {
    ticker: "CFIVW",
    title: "CF ACQUISITION CORP. IV",
  },
  {
    ticker: "CFIVU",
    title: "CF ACQUISITION CORP. IV",
  },
  {
    ticker: "POWRU",
    title: "Powered Brands",
  },
  {
    ticker: "POWRW",
    title: "Powered Brands",
  },
  {
    ticker: "BIPH",
    title: "Brookfield Infrastructure Corp",
  },
  {
    ticker: "GOAC-WT",
    title: "GO Acquisition Corp.",
  },
  {
    ticker: "LFLYW",
    title: "Leafly Holdings, Inc. /DE",
  },
  {
    ticker: "SMFRW",
    title: "Sema4 Holdings Corp.",
  },
  {
    ticker: "HUMAW",
    title: "Humacyte, Inc.",
  },
  {
    ticker: "XPOA-WT",
    title: "DPCM Capital, Inc.",
  },
  {
    ticker: "XPOA-UN",
    title: "DPCM Capital, Inc.",
  },
  {
    ticker: "UP-WT",
    title: "Wheels Up Experience Inc.",
  },
  {
    ticker: "ADTHW",
    title: "AdTheorent Holding Company, Inc.",
  },
  {
    ticker: "FACT-WT",
    title: "Freedom Acquisition I Corp.",
  },
  {
    ticker: "FACT-UN",
    title: "Freedom Acquisition I Corp.",
  },
  {
    ticker: "ARTEW",
    title: "Artemis Strategic Investment Corp",
  },
  {
    ticker: "FTVIW",
    title: "FINTECH ACQUISITION CORP VI",
  },
  {
    ticker: "ARTEU",
    title: "Artemis Strategic Investment Corp",
  },
  {
    ticker: "HWKZ-WT",
    title: "Hawks Acquisition Corp",
  },
  {
    ticker: "OTMOW",
    title: "Otonomo Technologies Ltd.",
  },
  {
    ticker: "BNIXR",
    title: "Bannix Acquisition Corp.",
  },
  {
    ticker: "GREEL",
    title: "Greenidge Generation Holdings Inc.",
  },
  {
    ticker: "FTVIU",
    title: "FINTECH ACQUISITION CORP VI",
  },
  {
    ticker: "LITTW",
    title: "Logistics Innovation Technologies Corp.",
  },
  {
    ticker: "BNIXW",
    title: "Bannix Acquisition Corp.",
  },
  {
    ticker: "LITTU",
    title: "Logistics Innovation Technologies Corp.",
  },
  {
    ticker: "FEXDU",
    title: "Fintech Ecosystem Development Corp.",
  },
  {
    ticker: "FEXDR",
    title: "Fintech Ecosystem Development Corp.",
  },
  {
    ticker: "MEACW",
    title: "Mercury Ecommerce Acquisition Corp",
  },
  {
    ticker: "MEACU",
    title: "Mercury Ecommerce Acquisition Corp",
  },
  {
    ticker: "FOUNU",
    title: "Founder SPAC",
  },
  {
    ticker: "FEXDW",
    title: "Fintech Ecosystem Development Corp.",
  },
  {
    ticker: "FOUNW",
    title: "Founder SPAC",
  },
  {
    ticker: "FGIWW",
    title: "FGI Industries Ltd.",
  },
  {
    ticker: "SGIIW",
    title: "Seaport Global Acquisition II Corp.",
  },
  {
    ticker: "LIBYU",
    title: "Liberty Resources Acquisition Corp.",
  },
  {
    ticker: "RCACU",
    title: "Revelstone Capital Acquisition Corp.",
  },
  {
    ticker: "RCACW",
    title: "Revelstone Capital Acquisition Corp.",
  },
  {
    ticker: "SAPFD",
    title: "SAIPEM S P A /FI",
  },
  {
    ticker: "CTLPP",
    title: "CANTALOUPE, INC.",
  },
  {
    ticker: "LIBYW",
    title: "Liberty Resources Acquisition Corp.",
  },
  {
    ticker: "PRMFF",
    title: "Perimeter Solutions, SA",
  },
  {
    ticker: "AIMAW",
    title: "Aimfinity Investment Corp. I",
  },
  {
    ticker: "AIMBU",
    title: "Aimfinity Investment Corp. I",
  },
  {
    ticker: "AIMAU",
    title: "Aimfinity Investment Corp. I",
  },
  {
    ticker: "CFR-PB",
    title: "CULLEN/FROST BANKERS, INC.",
  },
  {
    ticker: "AEPPZ",
    title: "AMERICAN ELECTRIC POWER CO INC",
  },
  {
    ticker: "SOCGM",
    title: "SOUTHERN CALIFORNIA GAS CO",
  },
  {
    ticker: "GL-PD",
    title: "GLOBE LIFE INC.",
  },
  {
    ticker: "FNMAP",
    title: "FEDERAL NATIONAL MORTGAGE ASSOCIATION FANNIE MAE",
  },
  {
    ticker: "SCHW-PJ",
    title: "SCHWAB CHARLES CORP",
  },
  {
    ticker: "FREEW",
    title: "Whole Earth Brands, Inc.",
  },
  {
    ticker: "ESTWF",
    title: "ESTRE AMBIENTAL, INC.",
  },
  {
    ticker: "MNTSW",
    title: "Momentus Inc.",
  },
  {
    ticker: "OGLFS",
    title: "Otis Gallery LLC",
  },
  {
    ticker: "OGMBS",
    title: "Otis Gallery LLC",
  },
  {
    ticker: "OGSKS",
    title: "Otis Gallery LLC",
  },
  {
    ticker: "OTSGS",
    title: "Otis Gallery LLC",
  },
  {
    ticker: "OGSTS",
    title: "Otis Gallery LLC",
  },
  {
    ticker: "TRTN-PB",
    title: "Triton International Ltd",
  },
  {
    ticker: "TRTN-PC",
    title: "Triton International Ltd",
  },
  {
    ticker: "TRTN-PD",
    title: "Triton International Ltd",
  },
  {
    ticker: "TRTN-PE",
    title: "Triton International Ltd",
  },
  {
    ticker: "ATNFW",
    title: "180 Life Sciences Corp.",
  },
  {
    ticker: "STR-WT",
    title: "Sitio Royalties Corp.",
  },
  {
    ticker: "ATH-PB",
    title: "Athene Holding Ltd",
  },
  {
    ticker: "OZKAP",
    title: "Bank OZK",
  },
  {
    ticker: "INBKZ",
    title: "First Internet Bancorp",
  },
  {
    ticker: "LBRDP",
    title: "Liberty Broadband Corp",
  },
  {
    ticker: "MDV-PA",
    title: "MODIV INC.",
  },
  {
    ticker: "SOLOW",
    title: "ELECTRAMECCANICA VEHICLES CORP.",
  },
  {
    ticker: "TRYMF",
    title: "TREASURY METALS INC",
  },
  {
    ticker: "MHNC",
    title: "Maiden Holdings, Ltd.",
  },
  {
    ticker: "RCRTW",
    title: "Recruiter.com Group, Inc.",
  },
  {
    ticker: "PCNTD",
    title: "Point of Care Nano-Technology, Inc.",
  },
  {
    ticker: "ATH-PD",
    title: "Athene Holding Ltd",
  },
  {
    ticker: "ATH-PC",
    title: "Athene Holding Ltd",
  },
  {
    ticker: "INNO",
    title: "UNIQUE LOGISTICS INTERNATIONAL INC",
  },
  {
    ticker: "ABR-PE",
    title: "ARBOR REALTY TRUST INC",
  },
  {
    ticker: "ABR-PF",
    title: "ARBOR REALTY TRUST INC",
  },
  {
    ticker: "ABR-PD",
    title: "ARBOR REALTY TRUST INC",
  },
  {
    ticker: "TDS-PU",
    title: "TELEPHONE & DATA SYSTEMS INC /DE/",
  },
  {
    ticker: "IGLD",
    title: "INTERNET GOLD GOLDEN LINES LTD",
  },
  {
    ticker: "ARGD",
    title: "Argo Group International Holdings, Ltd.",
  },
  {
    ticker: "ARGO-PA",
    title: "Argo Group International Holdings, Ltd.",
  },
  {
    ticker: "CEQP-P",
    title: "Crestwood Equity Partners LP",
  },
  {
    ticker: "VNO-PN",
    title: "VORNADO REALTY TRUST",
  },
  {
    ticker: "VNO-PO",
    title: "VORNADO REALTY TRUST",
  },
  {
    ticker: "UGIC",
    title: "UGI CORP /PA/",
  },
  {
    ticker: "HTLFP",
    title: "HEARTLAND FINANCIAL USA INC",
  },
  {
    ticker: "GOVXW",
    title: "GeoVax Labs, Inc.",
  },
  {
    ticker: "C-PK",
    title: "CITIGROUP INC",
  },
  {
    ticker: "C-PN",
    title: "CITIGROUP INC",
  },
  {
    ticker: "NTRSO",
    title: "NORTHERN TRUST CORP",
  },
  {
    ticker: "MNESP",
    title: "MSA Safety Inc",
  },
  {
    ticker: "LIVBU",
    title: "LIV Capital Acquisition Corp. II",
  },
  {
    ticker: "LIVBW",
    title: "LIV Capital Acquisition Corp. II",
  },
  {
    ticker: "AOGOU",
    title: "Arogo Capital Acquisition Corp.",
  },
  {
    ticker: "BC-PA",
    title: "BRUNSWICK CORP",
  },
  {
    ticker: "BC-PC",
    title: "BRUNSWICK CORP",
  },
  {
    ticker: "BC-PB",
    title: "BRUNSWICK CORP",
  },
  {
    ticker: "AVHIU",
    title: "Achari Ventures Holdings Corp. I",
  },
  {
    ticker: "EOCW-WT",
    title: "Elliott Opportunity II Corp.",
  },
  {
    ticker: "EOCW-UN",
    title: "Elliott Opportunity II Corp.",
  },
  {
    ticker: "ACBAU",
    title: "Ace Global Business Acquisition Ltd",
  },
  {
    ticker: "ACBAW",
    title: "Ace Global Business Acquisition Ltd",
  },
  {
    ticker: "GACQW",
    title: "Global Consumer Acquisition Corp",
  },
  {
    ticker: "GACQU",
    title: "Global Consumer Acquisition Corp",
  },
  {
    ticker: "RVACU",
    title: "Riverview Acquisition Corp.",
  },
  {
    ticker: "TIOAU",
    title: "Tio Tech A",
  },
  {
    ticker: "TIOAW",
    title: "Tio Tech A",
  },
  {
    ticker: "EBACU",
    title: "European Biotech Acquisition Corp.",
  },
  {
    ticker: "LVRAU",
    title: "Levere Holdings Corp.",
  },
  {
    ticker: "EBACW",
    title: "European Biotech Acquisition Corp.",
  },
  {
    ticker: "OPA-UN",
    title: "Magnum Opus Acquisition Ltd",
  },
  {
    ticker: "OPA-WT",
    title: "Magnum Opus Acquisition Ltd",
  },
  {
    ticker: "LVRAW",
    title: "Levere Holdings Corp.",
  },
  {
    ticker: "WPCB-WT",
    title: "Warburg Pincus Capital Corp I-B",
  },
  {
    ticker: "AVACW",
    title: "Avalon Acquisition Inc.",
  },
  {
    ticker: "AUS-WT",
    title: "Austerlitz Acquisition Corp I",
  },
  {
    ticker: "AUS-UN",
    title: "Austerlitz Acquisition Corp I",
  },
  {
    ticker: "ASZ-WT",
    title: "Austerlitz Acquisition Corp II",
  },
  {
    ticker: "ASZ-UN",
    title: "Austerlitz Acquisition Corp II",
  },
  {
    ticker: "NETC-UN",
    title: "Nabors Energy Transition Corp.",
  },
  {
    ticker: "NETC-WT",
    title: "Nabors Energy Transition Corp.",
  },
  {
    ticker: "NHICW",
    title: "NewHold Investment Corp. II",
  },
  {
    ticker: "EVE-UN",
    title: "EVe Mobility Acquisition Corp",
  },
  {
    ticker: "RCFA-UN",
    title: "RCF Acquisition Corp.",
  },
  {
    ticker: "RCFA-WT",
    title: "RCF Acquisition Corp.",
  },
  {
    ticker: "CPAQW",
    title: "Counter Press Acquisition Corp",
  },
  {
    ticker: "CPAQU",
    title: "Counter Press Acquisition Corp",
  },
  {
    ticker: "PRBM-WT",
    title: "Parabellum Acquisition Corp.",
  },
  {
    ticker: "PRBM-UN",
    title: "Parabellum Acquisition Corp.",
  },
  {
    ticker: "RVACW",
    title: "Riverview Acquisition Corp.",
  },
  {
    ticker: "CDAQW",
    title: "Compass Digital Acquisition Corp.",
  },
  {
    ticker: "CDAQU",
    title: "Compass Digital Acquisition Corp.",
  },
  {
    ticker: "GAQ-WT",
    title: "Generation Asia I Acquisition Ltd",
  },
  {
    ticker: "ACDI-WT",
    title: "Ascendant Digital Acquisition Corp. III",
  },
  {
    ticker: "ACDI-UN",
    title: "Ascendant Digital Acquisition Corp. III",
  },
  {
    ticker: "HFRO-PA",
    title: "HIGHLAND INCOME FUND\\MA",
  },
  {
    ticker: "BWNB",
    title: "Babcock & Wilcox Enterprises, Inc.",
  },
  {
    ticker: "BWSN",
    title: "Babcock & Wilcox Enterprises, Inc.",
  },
  {
    ticker: "BW-PA",
    title: "Babcock & Wilcox Enterprises, Inc.",
  },
  {
    ticker: "FPAC-WT",
    title: "Far Peak Acquisition Corp",
  },
  {
    ticker: "HIGA-UN",
    title: "H.I.G. Acquisition Corp.",
  },
  {
    ticker: "HIGA-WT",
    title: "H.I.G. Acquisition Corp.",
  },
  {
    ticker: "ARBGW",
    title: "Aequi Acquisition Corp.",
  },
  {
    ticker: "ARBGU",
    title: "Aequi Acquisition Corp.",
  },
  {
    ticker: "JOBY-WT",
    title: "Joby Aviation, Inc.",
  },
  {
    ticker: "PTICU",
    title: "PROPTECH INVESTMENT CORP. II",
  },
  {
    ticker: "PTICW",
    title: "PROPTECH INVESTMENT CORP. II",
  },
  {
    ticker: "HZON-UN",
    title: "Horizon Acquisition Corp II",
  },
  {
    ticker: "HZON-WT",
    title: "Horizon Acquisition Corp II",
  },
  {
    ticker: "COLIU",
    title: "Colicity Inc.",
  },
  {
    ticker: "COLIW",
    title: "Colicity Inc.",
  },
  {
    ticker: "FOXWU",
    title: "FoxWayne Enterprises Acquisition Corp.",
  },
  {
    ticker: "FOXWW",
    title: "FoxWayne Enterprises Acquisition Corp.",
  },
  {
    ticker: "KRNLW",
    title: "Kernel Group Holdings, Inc.",
  },
  {
    ticker: "VWEWW",
    title: "Vintage Wine Estates, Inc.",
  },
  {
    ticker: "KRNLU",
    title: "Kernel Group Holdings, Inc.",
  },
  {
    ticker: "WPCB-UN",
    title: "Warburg Pincus Capital Corp I-B",
  },
  {
    ticker: "JSPRW",
    title: "Jasper Therapeutics, Inc.",
  },
  {
    ticker: "GB-WT",
    title: "Global Blue Group Holding AG",
  },
  {
    ticker: "ITQRW",
    title: "Itiquira Acquisition Corp.",
  },
  {
    ticker: "ITQRU",
    title: "Itiquira Acquisition Corp.",
  },
  {
    ticker: "EVLVW",
    title: "Evolv Technologies Holdings, Inc.",
  },
  {
    ticker: "MKFG-WT",
    title: "Markforged Holding Corp",
  },
  {
    ticker: "OUST-WT",
    title: "Ouster, Inc.",
  },
  {
    ticker: "QSIAW",
    title: "Quantum-Si Inc",
  },
  {
    ticker: "ENPC-WT",
    title: "Executive Network Partnering Corp",
  },
  {
    ticker: "APPHW",
    title: "AppHarvest, Inc.",
  },
  {
    ticker: "BTWNW",
    title: "Bridgetown Holdings Ltd",
  },
  {
    ticker: "BTWNU",
    title: "Bridgetown Holdings Ltd",
  },
  {
    ticker: "PW-PA",
    title: "Power REIT",
  },
  {
    ticker: "PETVW",
    title: "PetVivo Holdings, Inc.",
  },
  {
    ticker: "RIV-PA",
    title: "RIVERNORTH OPPORTUNITIES FUND, INC.",
  },
  {
    ticker: "CHEKZ",
    title: "Check-Cap Ltd",
  },
  {
    ticker: "RILYZ",
    title: "B. Riley Financial, Inc.",
  },
  {
    ticker: "RILYO",
    title: "B. Riley Financial, Inc.",
  },
  {
    ticker: "RILYN",
    title: "B. Riley Financial, Inc.",
  },
  {
    ticker: "RILYG",
    title: "B. Riley Financial, Inc.",
  },
  {
    ticker: "RILYK",
    title: "B. Riley Financial, Inc.",
  },
  {
    ticker: "RILYM",
    title: "B. Riley Financial, Inc.",
  },
  {
    ticker: "RILYP",
    title: "B. Riley Financial, Inc.",
  },
  {
    ticker: "RILYL",
    title: "B. Riley Financial, Inc.",
  },
  {
    ticker: "RILYT",
    title: "B. Riley Financial, Inc.",
  },
  {
    ticker: "AAM-PA",
    title: "Apollo Asset Management, Inc.",
  },
  {
    ticker: "AAM-PB",
    title: "Apollo Asset Management, Inc.",
  },
  {
    ticker: "TGH-PB",
    title: "TEXTAINER GROUP HOLDINGS LTD",
  },
  {
    ticker: "TGH-PA",
    title: "TEXTAINER GROUP HOLDINGS LTD",
  },
  {
    ticker: "UPH-WT",
    title: "UpHealth, Inc.",
  },
  {
    ticker: "DMS-WT",
    title: "Digital Media Solutions, Inc.",
  },
  {
    ticker: "ELAT",
    title: "Elanco Animal Health Inc",
  },
  {
    ticker: "PHGE-WT",
    title: "BiomX Inc.",
  },
  {
    ticker: "DBGIW",
    title: "Digital Brands Group, Inc.",
  },
  {
    ticker: "PAVMZ",
    title: "PAVmed Inc.",
  },
  {
    ticker: "SYF-PA",
    title: "Synchrony Financial",
  },
  {
    ticker: "SABRP",
    title: "Sabre Corp",
  },
  {
    ticker: "TRIRW",
    title: "Triterras, Inc.",
  },
  {
    ticker: "SRSAW",
    title: "Sarissa Capital Acquisition Corp.",
  },
  {
    ticker: "SRSAU",
    title: "Sarissa Capital Acquisition Corp.",
  },
  {
    ticker: "PIPP-UN",
    title: "Pine Island Acquisition Corp.",
  },
  {
    ticker: "PIPP-WT",
    title: "Pine Island Acquisition Corp.",
  },
  {
    ticker: "VIIAW",
    title: "7GC & Co. Holdings Inc.",
  },
  {
    ticker: "VIIAU",
    title: "7GC & Co. Holdings Inc.",
  },
  {
    ticker: "HLAHW",
    title: "Hamilton Lane Alliance Holdings I, Inc.",
  },
  {
    ticker: "HLAHU",
    title: "Hamilton Lane Alliance Holdings I, Inc.",
  },
  {
    ticker: "FVIV-UN",
    title: "Fortress Value Acquisition Corp. IV",
  },
  {
    ticker: "FVIV-WT",
    title: "Fortress Value Acquisition Corp. IV",
  },
  {
    ticker: "CVII-UN",
    title: "Churchill Capital Corp VII",
  },
  {
    ticker: "CVII-WT",
    title: "Churchill Capital Corp VII",
  },
  {
    ticker: "COOLW",
    title: "Corner Growth Acquisition Corp.",
  },
  {
    ticker: "HCICU",
    title: "HENNESSY CAPITAL INVESTMENT CORP. V",
  },
  {
    ticker: "HCICW",
    title: "HENNESSY CAPITAL INVESTMENT CORP. V",
  },
  {
    ticker: "DLCAU",
    title: "Deep Lake Capital Acquisition Corp.",
  },
  {
    ticker: "DLCAW",
    title: "Deep Lake Capital Acquisition Corp.",
  },
  {
    ticker: "NBSTW",
    title: "Newbury Street Acquisition Corp",
  },
  {
    ticker: "NBSTU",
    title: "Newbury Street Acquisition Corp",
  },
  {
    ticker: "COOLU",
    title: "Corner Growth Acquisition Corp.",
  },
  {
    ticker: "LMACU",
    title: "Liberty Media Acquisition Corp",
  },
  {
    ticker: "LMACW",
    title: "Liberty Media Acquisition Corp",
  },
  {
    ticker: "AVAN-UN",
    title: "Avanti Acquisition Corp.",
  },
  {
    ticker: "AVAN-WT",
    title: "Avanti Acquisition Corp.",
  },
  {
    ticker: "HTOOW",
    title: "Fusion Fuel Green PLC",
  },
  {
    ticker: "NMMCU",
    title: "North Mountain Merger Corp.",
  },
  {
    ticker: "IPOF-WT",
    title: "Social Capital Hedosophia Holdings Corp. VI",
  },
  {
    ticker: "IPOF-UN",
    title: "Social Capital Hedosophia Holdings Corp. VI",
  },
  {
    ticker: "NMMCW",
    title: "North Mountain Merger Corp.",
  },
  {
    ticker: "ML-WT",
    title: "MONEYLION INC.",
  },
  {
    ticker: "FFIEW",
    title: "FARADAY FUTURE INTELLIGENT ELECTRIC INC.",
  },
  {
    ticker: "GLP-PB",
    title: "GLOBAL PARTNERS LP",
  },
  {
    ticker: "BWBBP",
    title: "Bridgewater Bancshares Inc",
  },
  {
    ticker: "AUUDW",
    title: "AUDDIA INC.",
  },
  {
    ticker: "OFSSH",
    title: "OFS Capital Corp",
  },
  {
    ticker: "PEB-PH",
    title: "Pebblebrook Hotel Trust",
  },
  {
    ticker: "PEB-PG",
    title: "Pebblebrook Hotel Trust",
  },
  {
    ticker: "ACGLN",
    title: "ARCH CAPITAL GROUP LTD.",
  },
  {
    ticker: "NSRWF",
    title: "Nomad Royalty Co Ltd.",
  },
  {
    ticker: "DX-PC",
    title: "DYNEX CAPITAL INC",
  },
  {
    ticker: "NLY-PI",
    title: "ANNALY CAPITAL MANAGEMENT INC",
  },
  {
    ticker: "MOBQW",
    title: "Mobiquity Technologies, Inc.",
  },
  {
    ticker: "APCXW",
    title: "AppTech Payments Corp.",
  },
  {
    ticker: "CNO-PA",
    title: "CNO Financial Group, Inc.",
  },
  {
    ticker: "SNCRL",
    title: "SYNCHRONOSS TECHNOLOGIES INC",
  },
  {
    ticker: "CTBB",
    title: "QWEST CORP",
  },
  {
    ticker: "CTDD",
    title: "QWEST CORP",
  },
  {
    ticker: "ATLRF",
    title: "ATLAS COPCO AB",
  },
  {
    ticker: "PRENW",
    title: "Prenetics Global Ltd",
  },
  {
    ticker: "GFGDU",
    title: "Growth for Good Acquisition Corp",
  },
  {
    ticker: "GFGDW",
    title: "Growth for Good Acquisition Corp",
  },
  {
    ticker: "GFGDR",
    title: "Growth for Good Acquisition Corp",
  },
  {
    ticker: "ZGN-WT",
    title: "Ermenegildo Zegna N.V.",
  },
  {
    ticker: "SHAP-WT",
    title: "Spree Acquisition Corp. 1 Ltd",
  },
  {
    ticker: "KORE-WT",
    title: "KORE Group Holdings, Inc.",
  },
  {
    ticker: "SLDPW",
    title: "Solid Power, Inc.",
  },
  {
    ticker: "BYN-UN",
    title: "Banyan Acquisition Corp",
  },
  {
    ticker: "BYN-WT",
    title: "Banyan Acquisition Corp",
  },
  {
    ticker: "BRIVU",
    title: "B. Riley Principal 250 Merger Corp.",
  },
  {
    ticker: "AHRNU",
    title: "Ahren Acquisition Corp.",
  },
  {
    ticker: "MCAGU",
    title: "Mountain Crest Acquisition Corp. V",
  },
  {
    ticker: "CLBTW",
    title: "Cellebrite DI Ltd.",
  },
  {
    ticker: "KYCHR",
    title: "Keyarch Acquisition Corp",
  },
  {
    ticker: "KYCHW",
    title: "Keyarch Acquisition Corp",
  },
  {
    ticker: "KYCHU",
    title: "Keyarch Acquisition Corp",
  },
  {
    ticker: "GSQD-WT",
    title: "G Squared Ascend I Inc.",
  },
  {
    ticker: "SLAMU",
    title: "Slam Corp.",
  },
  {
    ticker: "SLAMW",
    title: "Slam Corp.",
  },
  {
    ticker: "BOAS-WT",
    title: "BOA Acquisition Corp.",
  },
  {
    ticker: "INVZW",
    title: "Innoviz Technologies Ltd.",
  },
  {
    ticker: "GSQD-UN",
    title: "G Squared Ascend I Inc.",
  },
  {
    ticker: "SLHGP",
    title: "Skylight Health Group Inc.",
  },
  {
    ticker: "BOAS-UN",
    title: "BOA Acquisition Corp.",
  },
  {
    ticker: "DTOCW",
    title: "Digital Transformation Opportunities Corp.",
  },
  {
    ticker: "DTOCU",
    title: "Digital Transformation Opportunities Corp.",
  },
  {
    ticker: "TETCW",
    title: "Tech & Energy Transition Corp",
  },
  {
    ticker: "THCPW",
    title: "Thunder Bridge Capital Partners IV, Inc.",
  },
  {
    ticker: "THCPU",
    title: "Thunder Bridge Capital Partners IV, Inc.",
  },
  {
    ticker: "BRIVW",
    title: "B. Riley Principal 250 Merger Corp.",
  },
  {
    ticker: "LOKM-WT",
    title: "Live Oak Mobility Acquisition Corp.",
  },
  {
    ticker: "LOKM-UN",
    title: "Live Oak Mobility Acquisition Corp.",
  },
  {
    ticker: "TETCU",
    title: "Tech & Energy Transition Corp",
  },
  {
    ticker: "DDT",
    title: "DILLARD'S, INC.",
  },
  {
    ticker: "CLRCR",
    title: "ClimateRock",
  },
  {
    ticker: "VSACW",
    title: "VISION SENSING ACQUISITION CORP.",
  },
  {
    ticker: "VSACU",
    title: "VISION SENSING ACQUISITION CORP.",
  },
  {
    ticker: "AXAC-RI",
    title: "AXIOS Sustainable Growth Acquisition Corp",
  },
  {
    ticker: "AXAC-WT",
    title: "AXIOS Sustainable Growth Acquisition Corp",
  },
  {
    ticker: "CLRCW",
    title: "ClimateRock",
  },
  {
    ticker: "CLRCU",
    title: "ClimateRock",
  },
  {
    ticker: "JWACR",
    title: "Jupiter Wellness Acquisition Corp.",
  },
  {
    ticker: "AIBBU",
    title: "AIB Acquisition Corp",
  },
  {
    ticker: "AIBBR",
    title: "AIB Acquisition Corp",
  },
  {
    ticker: "USB-PR",
    title: "US BANCORP \\DE\\",
  },
  {
    ticker: "USB-PS",
    title: "US BANCORP \\DE\\",
  },
  {
    ticker: "USB-PQ",
    title: "US BANCORP \\DE\\",
  },
  {
    ticker: "WFC-PZ",
    title: "WELLS FARGO & COMPANY/MN",
  },
  {
    ticker: "WFCNP",
    title: "WELLS FARGO & COMPANY/MN",
  },
  {
    ticker: "WFC-PD",
    title: "WELLS FARGO & COMPANY/MN",
  },
  {
    ticker: "WFC-PA",
    title: "WELLS FARGO & COMPANY/MN",
  },
  {
    ticker: "DHR-PB",
    title: "DANAHER CORP /DE/",
  },
  {
    ticker: "WBS-PG",
    title: "WEBSTER FINANCIAL CORP",
  },
  {
    ticker: "CSR-PC",
    title: "CENTERSPACE",
  },
  {
    ticker: "BPOPM",
    title: "POPULAR, INC.",
  },
  {
    ticker: "IMBIL",
    title: "iMedia Brands, Inc.",
  },
  {
    ticker: "EBBGF",
    title: "ENBRIDGE INC",
  },
  {
    ticker: "EBGEF",
    title: "ENBRIDGE INC",
  },
  {
    ticker: "SEAL-PA",
    title: "Seapeak LLC",
  },
  {
    ticker: "SEAL-PB",
    title: "Seapeak LLC",
  },
  {
    ticker: "GDL-PC",
    title: "GDL FUND",
  },
  {
    ticker: "GRBK-PA",
    title: "Green Brick Partners, Inc.",
  },
  {
    ticker: "AFGD",
    title: "AMERICAN FINANCIAL GROUP INC",
  },
  {
    ticker: "AFGE",
    title: "AMERICAN FINANCIAL GROUP INC",
  },
  {
    ticker: "AFGB",
    title: "AMERICAN FINANCIAL GROUP INC",
  },
  {
    ticker: "RNR-PG",
    title: "RENAISSANCERE HOLDINGS LTD",
  },
  {
    ticker: "DTG",
    title: "DTE ENERGY CO",
  },
  {
    ticker: "DTP",
    title: "DTE ENERGY CO",
  },
  {
    ticker: "DTB",
    title: "DTE ENERGY CO",
  },
  {
    ticker: "DODRW",
    title: "DIAMOND OFFSHORE DRILLING, INC.",
  },
  {
    ticker: "LFMDP",
    title: "LifeMD, Inc.",
  },
  {
    ticker: "DNRRW",
    title: "DENBURY INC",
  },
  {
    ticker: "NVNOW",
    title: "enVVeno Medical Corp",
  },
  {
    ticker: "NEWTZ",
    title: "Newtek Business Services Corp.",
  },
  {
    ticker: "NEWTL",
    title: "Newtek Business Services Corp.",
  },
  {
    ticker: "XPNGF",
    title: "XPENG INC.",
  },
  {
    ticker: "BREZW",
    title: "Breeze Holdings Acquisition Corp.",
  },
  {
    ticker: "BREZR",
    title: "Breeze Holdings Acquisition Corp.",
  },
  {
    ticker: "BROGW",
    title: "Brooge Energy Ltd",
  },
  {
    ticker: "AGILW",
    title: "AgileThought, Inc.",
  },
  {
    ticker: "ODTC",
    title: "Odonate Therapeutics, Inc.",
  },
  {
    ticker: "AVGOP",
    title: "Broadcom Inc.",
  },
  {
    ticker: "SCCD",
    title: "Sachem Capital Corp.",
  },
  {
    ticker: "SCCF",
    title: "Sachem Capital Corp.",
  },
  {
    ticker: "SCCE",
    title: "Sachem Capital Corp.",
  },
  {
    ticker: "SCCB",
    title: "Sachem Capital Corp.",
  },
  {
    ticker: "SACH-PA",
    title: "Sachem Capital Corp.",
  },
  {
    ticker: "SACC",
    title: "Sachem Capital Corp.",
  },
  {
    ticker: "SCCC",
    title: "Sachem Capital Corp.",
  },
  {
    ticker: "LHC-WT",
    title: "Leo Holdings Corp. II",
  },
  {
    ticker: "HHLA-WT",
    title: "HH&L Acquisition Co.",
  },
  {
    ticker: "HHLA-UN",
    title: "HH&L Acquisition Co.",
  },
  {
    ticker: "CND-UN",
    title: "Concord Acquisition Corp",
  },
  {
    ticker: "CND-WT",
    title: "Concord Acquisition Corp",
  },
  {
    ticker: "HCARW",
    title: "Healthcare Services Acquisition Corp",
  },
  {
    ticker: "TEKKW",
    title: "Tekkorp Digital Acquisition Corp.",
  },
  {
    ticker: "TEKKU",
    title: "Tekkorp Digital Acquisition Corp.",
  },
  {
    ticker: "EVGOW",
    title: "EVgo Inc.",
  },
  {
    ticker: "TZPSU",
    title: "TZP Strategies Acquisition Corp.",
  },
  {
    ticker: "TZPSW",
    title: "TZP Strategies Acquisition Corp.",
  },
  {
    ticker: "KINZU",
    title: "KINS Technology Group, Inc.",
  },
  {
    ticker: "KINZW",
    title: "KINS Technology Group, Inc.",
  },
  {
    ticker: "TWLVU",
    title: "Twelve Seas Investment Co. II",
  },
  {
    ticker: "TWLVW",
    title: "Twelve Seas Investment Co. II",
  },
  {
    ticker: "ISPOW",
    title: "Inspirato Inc",
  },
  {
    ticker: "BTMDW",
    title: "biote Corp.",
  },
  {
    ticker: "HYACW",
    title: "biote Corp.",
  },
  {
    ticker: "GGMCW",
    title: "Glenfarne Merger Corp.",
  },
  {
    ticker: "SZZLU",
    title: "Sizzle Acquisition Corp.",
  },
  {
    ticker: "ANAC-WT",
    title: "ARCTOS NORTHSTAR ACQUISITION CORP.",
  },
  {
    ticker: "ANAC-UN",
    title: "ARCTOS NORTHSTAR ACQUISITION CORP.",
  },
  {
    ticker: "BOXD-WT",
    title: "Boxed, Inc.",
  },
  {
    ticker: "ZWRKW",
    title: "Z-Work Acquisition Corp.",
  },
  {
    ticker: "ZWRKU",
    title: "Z-Work Acquisition Corp.",
  },
  {
    ticker: "HCARU",
    title: "Healthcare Services Acquisition Corp",
  },
  {
    ticker: "LJAQW",
    title: "LIGHTJUMP ACQUISITION CORP",
  },
  {
    ticker: "LJAQU",
    title: "LIGHTJUMP ACQUISITION CORP",
  },
  {
    ticker: "FSRXU",
    title: "Finserv Acquisition Corp. II",
  },
  {
    ticker: "FSRXW",
    title: "Finserv Acquisition Corp. II",
  },
  {
    ticker: "PEARW",
    title: "Pear Therapeutics, Inc.",
  },
  {
    ticker: "BHIL-WT",
    title: "Benson Hill, Inc.",
  },
  {
    ticker: "ACAHW",
    title: "Atlantic Coastal Acquisition Corp.",
  },
  {
    ticker: "ACAHU",
    title: "Atlantic Coastal Acquisition Corp.",
  },
  {
    ticker: "MSACW",
    title: "Medicus Sciences Acquisition Corp.",
  },
  {
    ticker: "IPVIU",
    title: "InterPrivate IV InfraTech Partners Inc.",
  },
  {
    ticker: "SOUNW",
    title: "SOUNDHOUND AI, INC.",
  },
  {
    ticker: "CIIGU",
    title: "CIIG Capital Partners II, Inc.",
  },
  {
    ticker: "CIIGW",
    title: "CIIG Capital Partners II, Inc.",
  },
  {
    ticker: "DAVEW",
    title: "Dave Inc./DE",
  },
  {
    ticker: "KAHC-WT",
    title: "KKR Acquisition Holdings I Corp.",
  },
  {
    ticker: "HCNEW",
    title: "Jaws Hurricane Acquisition Corp",
  },
  {
    ticker: "HCNEU",
    title: "Jaws Hurricane Acquisition Corp",
  },
  {
    ticker: "KAHC-UN",
    title: "KKR Acquisition Holdings I Corp.",
  },
  {
    ticker: "CNDA-WT",
    title: "Concord Acquisition Corp II",
  },
  {
    ticker: "CNDA-UN",
    title: "Concord Acquisition Corp II",
  },
  {
    ticker: "FHLTW",
    title: "Future Health ESG Corp.",
  },
  {
    ticker: "FHLTU",
    title: "Future Health ESG Corp.",
  },
  {
    ticker: "HCMAW",
    title: "HCM Acquisition Corp",
  },
  {
    ticker: "HCMAU",
    title: "HCM Acquisition Corp",
  },
  {
    ticker: "SHCAW",
    title: "Spindletop Health Acquisition Corp.",
  },
  {
    ticker: "GFOR-WT",
    title: "Graf Acquisition Corp. IV",
  },
  {
    ticker: "GFOR-UN",
    title: "Graf Acquisition Corp. IV",
  },
  {
    ticker: "PACI-WT",
    title: "PROOF Acquisition Corp I",
  },
  {
    ticker: "PACI-UN",
    title: "PROOF Acquisition Corp I",
  },
  {
    ticker: "ENERR",
    title: "ACCRETION ACQUISITION CORP.",
  },
  {
    ticker: "ENERU",
    title: "ACCRETION ACQUISITION CORP.",
  },
  {
    ticker: "ENERW",
    title: "ACCRETION ACQUISITION CORP.",
  },
  {
    ticker: "MBSC-WT",
    title: "M3-Brigade Acquisition III Corp.",
  },
  {
    ticker: "GRABW",
    title: "Grab Holdings Ltd",
  },
  {
    ticker: "JATT-WT",
    title: "JATT Acquisition Corp",
  },
  {
    ticker: "NNAVW",
    title: "NEXTNAV INC.",
  },
  {
    ticker: "ARQQW",
    title: "Arqit Quantum Inc.",
  },
  {
    ticker: "BRACR",
    title: "Broad Capital Acquisition Corp",
  },
  {
    ticker: "BRACU",
    title: "Broad Capital Acquisition Corp",
  },
  {
    ticker: "BRKHU",
    title: "BurTech Acquisition Corp.",
  },
  {
    ticker: "BRKHW",
    title: "BurTech Acquisition Corp.",
  },
  {
    ticker: "VMGAW",
    title: "VMG Consumer Acquisition Corp.",
  },
  {
    ticker: "XELAP",
    title: "Exela Technologies, Inc.",
  },
  {
    ticker: "BCTXW",
    title: "BriaCell Therapeutics Corp.",
  },
  {
    ticker: "GIREX",
    title: "Apollo Diversified Real Estate Fund",
  },
  {
    ticker: "GCREX",
    title: "Apollo Diversified Real Estate Fund",
  },
  {
    ticker: "WHLRL",
    title: "Wheeler Real Estate Investment Trust, Inc.",
  },
  {
    ticker: "APTS",
    title: "PREFERRED APARTMENT COMMUNITIES INC",
  },
  {
    ticker: "ARR-PC",
    title: "Armour Residential REIT, Inc.",
  },
  {
    ticker: "EFC-PB",
    title: "Ellington Financial Inc.",
  },
  {
    ticker: "EFC-PA",
    title: "Ellington Financial Inc.",
  },
  {
    ticker: "FATBW",
    title: "Fat Brands, Inc",
  },
  {
    ticker: "AVCTW",
    title: "American Virtual Cloud Technologies, Inc.",
  },
  {
    ticker: "FATBP",
    title: "Fat Brands, Inc",
  },
  {
    ticker: "GMVDW",
    title: "G Medical Innovations Holdings Ltd.",
  },
  {
    ticker: "AGBAR",
    title: "AGBA Acquisition Ltd",
  },
  {
    ticker: "AGBAW",
    title: "AGBA Acquisition Ltd",
  },
  {
    ticker: "CURIW",
    title: "CuriosityStream Inc.",
  },
  {
    ticker: "GNRSW",
    title: "Greenrose Holding Co Inc.",
  },
  {
    ticker: "GNRSU",
    title: "Greenrose Holding Co Inc.",
  },
  {
    ticker: "RBOT-WT",
    title: "Vicarious Surgical Inc.",
  },
  {
    ticker: "ATIP-WT",
    title: "ATI Physical Therapy, Inc.",
  },
  {
    ticker: "BOAC-WT",
    title: "Bluescape Opportunities Acquisition Corp.",
  },
  {
    ticker: "RCHGW",
    title: "Recharge Acquisition Corp.",
  },
  {
    ticker: "EDBLW",
    title: "Edible Garden AG Inc",
  },
  {
    ticker: "INTEW",
    title: "Integral Acquisition Corp 1",
  },
  {
    ticker: "AMCIU",
    title: "AMCI Acquisition Corp. II",
  },
  {
    ticker: "ALPAW",
    title: "ALPHA HEALTHCARE ACQUISITION CORP III",
  },
  {
    ticker: "ALPAU",
    title: "ALPHA HEALTHCARE ACQUISITION CORP III",
  },
  {
    ticker: "CHWAW",
    title: "CHW Acquisition Corp",
  },
  {
    ticker: "LDHAU",
    title: "LDH Growth Corp I",
  },
  {
    ticker: "LDHAW",
    title: "LDH Growth Corp I",
  },
  {
    ticker: "FRONU",
    title: "Frontier Acquisition Corp.",
  },
  {
    ticker: "FRONW",
    title: "Frontier Acquisition Corp.",
  },
  {
    ticker: "CHWAU",
    title: "CHW Acquisition Corp",
  },
  {
    ticker: "ITAQW",
    title: "Industrial Tech Acquisitions II, Inc.",
  },
  {
    ticker: "CPAAW",
    title: "Conyers Park III Acquisition Corp.",
  },
  {
    ticker: "ESM-UN",
    title: "ESM Acquisition Corp",
  },
  {
    ticker: "ESM-WT",
    title: "ESM Acquisition Corp",
  },
  {
    ticker: "STRE-WT",
    title: "Supernova Partners Acquisition Co III, Ltd.",
  },
  {
    ticker: "PMGMW",
    title: "Priveterra Acquisition Corp.",
  },
  {
    ticker: "PMGMU",
    title: "Priveterra Acquisition Corp.",
  },
  {
    ticker: "STRE-UN",
    title: "Supernova Partners Acquisition Co III, Ltd.",
  },
  {
    ticker: "SCLEW",
    title: "Broadscale Acquisition Corp.",
  },
  {
    ticker: "SCLEU",
    title: "Broadscale Acquisition Corp.",
  },
  {
    ticker: "CCVI-UN",
    title: "Churchill Capital Corp VI",
  },
  {
    ticker: "CCVI-WT",
    title: "Churchill Capital Corp VI",
  },
  {
    ticker: "JWSM-UN",
    title: "Jaws Mustang Acquisition Corp",
  },
  {
    ticker: "JWSM-WT",
    title: "Jaws Mustang Acquisition Corp",
  },
  {
    ticker: "FTAAW",
    title: "FTAC Athena Acquisition Corp.",
  },
  {
    ticker: "CSTA-UN",
    title: "Constellation Acquisition Corp I",
  },
  {
    ticker: "AMPI-UN",
    title: "Advanced Merger Partners, Inc.",
  },
  {
    ticker: "CSTA-WT",
    title: "Constellation Acquisition Corp I",
  },
  {
    ticker: "TMAC-WT",
    title: "Music Acquisition Corp",
  },
  {
    ticker: "TMAC-UN",
    title: "Music Acquisition Corp",
  },
  {
    ticker: "EQHA-WT",
    title: "EQ Health Acquisition Corp.",
  },
  {
    ticker: "EQHA-UN",
    title: "EQ Health Acquisition Corp.",
  },
  {
    ticker: "HHGCU",
    title: "HHG Capital Corp",
  },
  {
    ticker: "KWAC-WT",
    title: "Kingswood Acquisition Corp.",
  },
  {
    ticker: "OPAD-WT",
    title: "Offerpad Solutions Inc.",
  },
  {
    ticker: "PRPC-UN",
    title: "CC Neuberger Principal Holdings III",
  },
  {
    ticker: "PRPC-WT",
    title: "CC Neuberger Principal Holdings III",
  },
  {
    ticker: "HHGCW",
    title: "HHG Capital Corp",
  },
  {
    ticker: "RDW-WT",
    title: "Redwire Corp",
  },
  {
    ticker: "BOAC-UN",
    title: "Bluescape Opportunities Acquisition Corp.",
  },
  {
    ticker: "OTRKP",
    title: "Ontrak, Inc.",
  },
  {
    ticker: "VRMEW",
    title: "VerifyMe, Inc.",
  },
  {
    ticker: "WKSPW",
    title: "Worksport Ltd",
  },
  {
    ticker: "ZIVOW",
    title: "Zivo Bioscience, Inc.",
  },
  {
    ticker: "POWWP",
    title: "AMMO, INC.",
  },
  {
    ticker: "PCGU",
    title: "PG&E Corp",
  },
  {
    ticker: "SCE-PL",
    title: "SOUTHERN CALIFORNIA EDISON Co",
  },
  {
    ticker: "SCE-PH",
    title: "SOUTHERN CALIFORNIA EDISON Co",
  },
  {
    ticker: "SCE-PK",
    title: "SOUTHERN CALIFORNIA EDISON Co",
  },
  {
    ticker: "SCE-PG",
    title: "SOUTHERN CALIFORNIA EDISON Co",
  },
  {
    ticker: "SCE-PJ",
    title: "SOUTHERN CALIFORNIA EDISON Co",
  },
  {
    ticker: "TFC-PR",
    title: "TRUIST FINANCIAL CORP",
  },
  {
    ticker: "TFC-PI",
    title: "TRUIST FINANCIAL CORP",
  },
  {
    ticker: "TFC-PO",
    title: "TRUIST FINANCIAL CORP",
  },
  {
    ticker: "CFG-PE",
    title: "CITIZENS FINANCIAL GROUP INC/RI",
  },
  {
    ticker: "FULTP",
    title: "FULTON FINANCIAL CORP",
  },
  {
    ticker: "NEE-PN",
    title: "NEXTERA ENERGY INC",
  },
  {
    ticker: "NEE-PQ",
    title: "NEXTERA ENERGY INC",
  },
  {
    ticker: "NEE-PO",
    title: "NEXTERA ENERGY INC",
  },
  {
    ticker: "NEE-PP",
    title: "NEXTERA ENERGY INC",
  },
  {
    ticker: "HMA-WT",
    title: "Heartland Media Acquisition Corp.",
  },
  {
    ticker: "HMA-UN",
    title: "Heartland Media Acquisition Corp.",
  },
  {
    ticker: "BNNRW",
    title: "Banner Acquisition Corp.",
  },
  {
    ticker: "INTEU",
    title: "Integral Acquisition Corp 1",
  },
  {
    ticker: "AMCIW",
    title: "AMCI Acquisition Corp. II",
  },
  {
    ticker: "APACW",
    title: "StoneBridge Acquisition Corp.",
  },
  {
    ticker: "BSGAR",
    title: "Blue Safari Group Acquisition Corp",
  },
  {
    ticker: "BSGAU",
    title: "Blue Safari Group Acquisition Corp",
  },
  {
    ticker: "BNNRU",
    title: "Banner Acquisition Corp.",
  },
  {
    ticker: "REVEW",
    title: "Alpine Acquisition Corp.",
  },
  {
    ticker: "MPRAU",
    title: "Mercato Partners Acquisition Corp",
  },
  {
    ticker: "MPRAW",
    title: "Mercato Partners Acquisition Corp",
  },
  {
    ticker: "KACLW",
    title: "Kairous Acquisition Corp. Ltd",
  },
  {
    ticker: "KACLU",
    title: "Kairous Acquisition Corp. Ltd",
  },
  {
    ticker: "DTRTU",
    title: "DTRT Health Acquisition Corp.",
  },
  {
    ticker: "DTRTW",
    title: "DTRT Health Acquisition Corp.",
  },
  {
    ticker: "SCMAU",
    title: "Seaport Calibre Materials Acquisition Corp.",
  },
  {
    ticker: "SCMAW",
    title: "Seaport Calibre Materials Acquisition Corp.",
  },
  {
    ticker: "KACLR",
    title: "Kairous Acquisition Corp. Ltd",
  },
  {
    ticker: "XPDBW",
    title: "Power & Digital Infrastructure Acquisition II Corp.",
  },
  {
    ticker: "XPDBU",
    title: "Power & Digital Infrastructure Acquisition II Corp.",
  },
  {
    ticker: "PAFOR",
    title: "Pacifico Acquisition Corp.",
  },
  {
    ticker: "STET-UN",
    title: "ST Energy Transition I Ltd.",
  },
  {
    ticker: "STET-WT",
    title: "ST Energy Transition I Ltd.",
  },
  {
    ticker: "UTAAW",
    title: "UTA Acquisition Corp",
  },
  {
    ticker: "UTAAU",
    title: "UTA Acquisition Corp",
  },
  {
    ticker: "TYDEV",
    title: "Cryptyde, Inc.",
  },
  {
    ticker: "IMPPP",
    title: "Imperial Petroleum Inc./Marshall Islands",
  },
  {
    ticker: "BCSAU",
    title: "Blockchain Coinvestors Acquisition Corp. I",
  },
  {
    ticker: "BCSAW",
    title: "Blockchain Coinvestors Acquisition Corp. I",
  },
  {
    ticker: "ARBEW",
    title: "Arbe Robotics Ltd.",
  },
  {
    ticker: "GHIXW",
    title: "Gores Holdings IX, Inc.",
  },
  {
    ticker: "GHIXU",
    title: "Gores Holdings IX, Inc.",
  },
  {
    ticker: "BOH-PA",
    title: "BANK OF HAWAII CORP",
  },
  {
    ticker: "CRLKP",
    title: "SP Plus Corp",
  },
  {
    ticker: "AEL-PA",
    title: "AMERICAN EQUITY INVESTMENT LIFE HOLDING CO",
  },
  {
    ticker: "AEL-PB",
    title: "AMERICAN EQUITY INVESTMENT LIFE HOLDING CO",
  },
  {
    ticker: "CRESW",
    title: "CRESUD INC",
  },
  {
    ticker: "UBP-PK",
    title: "URSTADT BIDDLE PROPERTIES INC",
  },
  {
    ticker: "MBNKP",
    title: "MEDALLION FINANCIAL CORP",
  },
  {
    ticker: "TCBIO",
    title: "TEXAS CAPITAL BANCSHARES INC/TX",
  },
  {
    ticker: "SHO-PI",
    title: "Sunstone Hotel Investors, Inc.",
  },
  {
    ticker: "SHO-PH",
    title: "Sunstone Hotel Investors, Inc.",
  },
  {
    ticker: "GCC",
    title: "WisdomTree Continuous Commodity Index Fund",
  },
  {
    ticker: "BLNKW",
    title: "Blink Charging Co.",
  },
  {
    ticker: "SURGW",
    title: "SurgePays, Inc.",
  },
  {
    ticker: "NXGLW",
    title: "NEXGEL, INC.",
  },
  {
    ticker: "FRFRD",
    title: "Fritzy Tech Inc.",
  },
  {
    ticker: "PRTHW",
    title: "Priority Technology Holdings, Inc.",
  },
  {
    ticker: "LMDXW",
    title: "LumiraDx Ltd",
  },
  {
    ticker: "PFALX",
    title: "PIMCO Flexible Credit Income Fund",
  },
  {
    ticker: "PFLEX",
    title: "PIMCO Flexible Credit Income Fund",
  },
  {
    ticker: "CGCCX",
    title: "Apollo Diversified Credit Fund",
  },
  {
    ticker: "CRDTX",
    title: "Apollo Diversified Credit Fund",
  },
  {
    ticker: "NRXPW",
    title: "NRX Pharmaceuticals, Inc.",
  },
  {
    ticker: "WINRW",
    title: "SIMPLICITY ESPORTS & GAMING Co",
  },
  {
    ticker: "ACAQ-WT",
    title: "Athena Consumer Acquisition Corp.",
  },
  {
    ticker: "WBX-WT",
    title: "Wallbox N.V.",
  },
  {
    ticker: "LBBBU",
    title: "Lakeshore Acquisition II Corp.",
  },
  {
    ticker: "LBBBW",
    title: "Lakeshore Acquisition II Corp.",
  },
  {
    ticker: "LBBBR",
    title: "Lakeshore Acquisition II Corp.",
  },
  {
    ticker: "NRSNW",
    title: "NeuroSense Therapeutics Ltd.",
  },
  {
    ticker: "GSRMW",
    title: "GSR II Meteora Acquisition Corp.",
  },
  {
    ticker: "GSRMU",
    title: "GSR II Meteora Acquisition Corp.",
  },
  {
    ticker: "GSRMR",
    title: "GSR II Meteora Acquisition Corp.",
  },
  {
    ticker: "GRMWF",
    title: "TPCO Holding Corp.",
  },
  {
    ticker: "CCNEP",
    title: "CNB FINANCIAL CORP/PA",
  },
  {
    ticker: "COF-PL",
    title: "CAPITAL ONE FINANCIAL CORP",
  },
  {
    ticker: "MGDDD",
    title: "MICHELIN COMPAGNIE GENERALE DES ETABLISSEMENTS MICHELIN /FI",
  },
  {
    ticker: "COF-PI",
    title: "CAPITAL ONE FINANCIAL CORP",
  },
  {
    ticker: "COF-PK",
    title: "CAPITAL ONE FINANCIAL CORP",
  },
  {
    ticker: "COF-PN",
    title: "CAPITAL ONE FINANCIAL CORP",
  },
  {
    ticker: "COF-PJ",
    title: "CAPITAL ONE FINANCIAL CORP",
  },
  {
    ticker: "WARR-UN",
    title: "Warrior Technologies Acquisition Co",
  },
  {
    ticker: "WARR-WT",
    title: "Warrior Technologies Acquisition Co",
  },
  {
    ticker: "PV-WT",
    title: "Primavera Capital Acquisition Corp.",
  },
  {
    ticker: "PV-UN",
    title: "Primavera Capital Acquisition Corp.",
  },
  {
    ticker: "IGACW",
    title: "IG Acquisition Corp.",
  },
  {
    ticker: "TMPMW",
    title: "TURMERIC ACQUISITION CORP.",
  },
  {
    ticker: "RSVRW",
    title: "Reservoir Media, Inc.",
  },
  {
    ticker: "VTAQW",
    title: "Ventoux CCM Acquisition Corp.",
  },
  {
    ticker: "VTAQU",
    title: "Ventoux CCM Acquisition Corp.",
  },
  {
    ticker: "VTAQR",
    title: "Ventoux CCM Acquisition Corp.",
  },
  {
    ticker: "MSPRW",
    title: "MSP Recovery, Inc.",
  },
  {
    ticker: "MSPRZ",
    title: "MSP Recovery, Inc.",
  },
  {
    ticker: "ORGNW",
    title: "Origin Materials, Inc.",
  },
  {
    ticker: "CMAXW",
    title: "CareMax, Inc.",
  },
  {
    ticker: "DWIN-UN",
    title: "Delwinds Insurance Acquisition Corp.",
  },
  {
    ticker: "DWIN-WT",
    title: "Delwinds Insurance Acquisition Corp.",
  },
  {
    ticker: "VLDRW",
    title: "Velodyne Lidar, Inc.",
  },
  {
    ticker: "GSMGW",
    title: "GLORY STAR NEW MEDIA GROUP HOLDINGS Ltd",
  },
  {
    ticker: "RVPHW",
    title: "REVIVA PHARMACEUTICALS HOLDINGS, INC.",
  },
  {
    ticker: "GTXAP",
    title: "Garrett Motion Inc.",
  },
  {
    ticker: "ATCO-PH",
    title: "Atlas Corp.",
  },
  {
    ticker: "ATCOL",
    title: "Atlas Corp.",
  },
  {
    ticker: "ATCO-PI",
    title: "Atlas Corp.",
  },
  {
    ticker: "ATCO-PD",
    title: "Atlas Corp.",
  },
  {
    ticker: "HPKEW",
    title: "HighPeak Energy, Inc.",
  },
  {
    ticker: "GIA-UN",
    title: "GigCapital5, Inc.",
  },
  {
    ticker: "GIA-WT",
    title: "GigCapital5, Inc.",
  },
  {
    ticker: "CORZW",
    title: "Core Scientific, Inc./tx",
  },
  {
    ticker: "TBSAW",
    title: "TB SA Acquisition Corp",
  },
  {
    ticker: "AFACU",
    title: "Arena Fortify Acquisition Corp.",
  },
  {
    ticker: "AFACW",
    title: "Arena Fortify Acquisition Corp.",
  },
  {
    ticker: "TPBAU",
    title: "TPB Acquisition Corp I",
  },
  {
    ticker: "TWCBU",
    title: "Bilander Acquisition Corp.",
  },
  {
    ticker: "TWCBW",
    title: "Bilander Acquisition Corp.",
  },
  {
    ticker: "MLAIW",
    title: "McLaren Technology Acquisition Corp.",
  },
  {
    ticker: "GOGN-UN",
    title: "GoGreen Investments Corp",
  },
  {
    ticker: "XPAXU",
    title: "XPAC Acquisition Corp.",
  },
  {
    ticker: "XPAXW",
    title: "XPAC Acquisition Corp.",
  },
  {
    ticker: "MCAFR",
    title: "Mountain Crest Acquisition Corp. IV",
  },
  {
    ticker: "GOGN-WT",
    title: "GoGreen Investments Corp",
  },
  {
    ticker: "FATPW",
    title: "FAT PROJECTS ACQUISITION CORP",
  },
  {
    ticker: "FATPU",
    title: "FAT PROJECTS ACQUISITION CORP",
  },
  {
    ticker: "WNNR-WT",
    title: "Andretti Acquisition Corp.",
  },
  {
    ticker: "WNNR-UN",
    title: "Andretti Acquisition Corp.",
  },
  {
    ticker: "FACA-UN",
    title: "Figure Acquisition Corp. I",
  },
  {
    ticker: "FACA-WT",
    title: "Figure Acquisition Corp. I",
  },
  {
    ticker: "RXRAW",
    title: "RXR Acquisition Corp.",
  },
  {
    ticker: "RXRAU",
    title: "RXR Acquisition Corp.",
  },
  {
    ticker: "CLAA-WT",
    title: "Colonnade Acquisition Corp. II",
  },
  {
    ticker: "CLAA-UN",
    title: "Colonnade Acquisition Corp. II",
  },
  {
    ticker: "ACII-UN",
    title: "Atlas Crest Investment Corp. II",
  },
  {
    ticker: "ACII-WT",
    title: "Atlas Crest Investment Corp. II",
  },
  {
    ticker: "BGSX-WT",
    title: "Build Acquisition Corp.",
  },
  {
    ticker: "BGSX-UN",
    title: "Build Acquisition Corp.",
  },
  {
    ticker: "SLGCW",
    title: "SomaLogic, Inc.",
  },
  {
    ticker: "CPPTL",
    title: "Copper Property CTL Pass Through Trust",
  },
  {
    ticker: "GTPAW",
    title: "Gores Technology Partners, Inc.",
  },
  {
    ticker: "GTPAU",
    title: "Gores Technology Partners, Inc.",
  },
  {
    ticker: "NSTC-WT",
    title: "Northern Star Investment Corp. III",
  },
  {
    ticker: "NSTC-UN",
    title: "Northern Star Investment Corp. III",
  },
  {
    ticker: "COVAW",
    title: "COVA Acquisition Corp.",
  },
  {
    ticker: "COVAU",
    title: "COVA Acquisition Corp.",
  },
  {
    ticker: "EFTRW",
    title: "eFFECTOR Therapeutics, Inc.",
  },
  {
    ticker: "PNTM-UN",
    title: "Pontem Corp",
  },
  {
    ticker: "PNTM-WT",
    title: "Pontem Corp",
  },
  {
    ticker: "GEGGL",
    title: "Great Elm Group, Inc.",
  },
  {
    ticker: "ALIN-PE",
    title: "Altera Infrastructure L.P.",
  },
  {
    ticker: "ALIN-PB",
    title: "Altera Infrastructure L.P.",
  },
  {
    ticker: "ECCV",
    title: "Eagle Point Credit Co Inc.",
  },
  {
    ticker: "ECCW",
    title: "Eagle Point Credit Co Inc.",
  },
  {
    ticker: "AREBW",
    title: "AMERICAN REBEL HOLDINGS INC",
  },
  {
    ticker: "MTBCO",
    title: "CareCloud, Inc.",
  },
  {
    ticker: "ECC-PD",
    title: "Eagle Point Credit Co Inc.",
  },
  {
    ticker: "ECCC",
    title: "Eagle Point Credit Co Inc.",
  },
  {
    ticker: "DUKB",
    title: "Duke Energy CORP",
  },
  {
    ticker: "AQNA",
    title: "ALGONQUIN POWER & UTILITIES CORP.",
  },
  {
    ticker: "AQNU",
    title: "ALGONQUIN POWER & UTILITIES CORP.",
  },
  {
    ticker: "AQNB",
    title: "ALGONQUIN POWER & UTILITIES CORP.",
  },
  {
    ticker: "DIDIY",
    title: "DiDi Global Inc.",
  },
  {
    ticker: "ELMWQ",
    title: "Electric Last Mile Solutions, Inc.",
  },
  {
    ticker: "FXCOR",
    title: "Financial Strategies Acquisition Corp.",
  },
  {
    ticker: "FXCOW",
    title: "Financial Strategies Acquisition Corp.",
  },
  {
    ticker: "GCMGW",
    title: "GCM Grosvenor Inc.",
  },
  {
    ticker: "FRWAW",
    title: "PWP Forward Acquisition Corp. I",
  },
  {
    ticker: "FRWAU",
    title: "PWP Forward Acquisition Corp. I",
  },
  {
    ticker: "CIFRW",
    title: "Cipher Mining Inc.",
  },
  {
    ticker: "EICA",
    title: "Eagle Point Income Co Inc.",
  },
  {
    ticker: "HOFVW",
    title: "Hall of Fame Resort & Entertainment Co",
  },
  {
    ticker: "NESRW",
    title: "National Energy Services Reunited Corp.",
  },
  {
    ticker: "MNSBP",
    title: "MainStreet Bancshares, Inc.",
  },
  {
    ticker: "ASCAU",
    title: "ASPAC I Acquisition Corp.",
  },
  {
    ticker: "HORIU",
    title: "Emerging Markets Horizon Corp.",
  },
  {
    ticker: "CSLMW",
    title: "Consilium Acquisition Corp I, Ltd.",
  },
  {
    ticker: "CSLMU",
    title: "Consilium Acquisition Corp I, Ltd.",
  },
  {
    ticker: "ROSEU",
    title: "Rose Hill Acquisition Corp",
  },
  {
    ticker: "ROSEW",
    title: "Rose Hill Acquisition Corp",
  },
  {
    ticker: "LFACW",
    title: "LF Capital Acquisition Corp. II",
  },
  {
    ticker: "LFACU",
    title: "LF Capital Acquisition Corp. II",
  },
  {
    ticker: "TRIS-UN",
    title: "Tristar Acquisition I Corp.",
  },
  {
    ticker: "FRLAW",
    title: "Fortune Rise Acquisition Corp",
  },
  {
    ticker: "RAMMW",
    title: "Aries I Acquisition Corp.",
  },
  {
    ticker: "RAMMU",
    title: "Aries I Acquisition Corp.",
  },
  {
    ticker: "DMYS-WT",
    title: "dMY Technology Group, Inc. VI",
  },
  {
    ticker: "DMYS-UN",
    title: "dMY Technology Group, Inc. VI",
  },
  {
    ticker: "FRLAU",
    title: "Fortune Rise Acquisition Corp",
  },
  {
    ticker: "TRIS-WT",
    title: "Tristar Acquisition I Corp.",
  },
  {
    ticker: "FLYA-WT",
    title: "SOAR Technology Acquisition Corp.",
  },
  {
    ticker: "FLYA-UN",
    title: "SOAR Technology Acquisition Corp.",
  },
  {
    ticker: "BSKYW",
    title: "Big Sky Growth Partners, Inc.",
  },
  {
    ticker: "BSKYU",
    title: "Big Sky Growth Partners, Inc.",
  },
  {
    ticker: "FRXB-WT",
    title: "Forest Road Acquisition Corp. II",
  },
  {
    ticker: "MBAC-WT",
    title: "M3-Brigade Acquisition II Corp.",
  },
  {
    ticker: "MBAC-UN",
    title: "M3-Brigade Acquisition II Corp.",
  },
  {
    ticker: "FRXB-UN",
    title: "Forest Road Acquisition Corp. II",
  },
  {
    ticker: "FATH-WT",
    title: "Fathom Digital Manufacturing Corp",
  },
  {
    ticker: "LEV-WT",
    title: "Lion Electric Co",
  },
  {
    ticker: "LGV-UN",
    title: "Longview Acquisition Corp. II",
  },
  {
    ticker: "BZFDW",
    title: "BuzzFeed, Inc.",
  },
  {
    ticker: "NRACU",
    title: "Noble Rock Acquisition Corp",
  },
  {
    ticker: "LGV-WT",
    title: "Longview Acquisition Corp. II",
  },
  {
    ticker: "NRACW",
    title: "Noble Rock Acquisition Corp",
  },
  {
    ticker: "AUBAP",
    title: "Atlantic Union Bankshares Corp",
  },
  {
    ticker: "ALL-PI",
    title: "ALLSTATE CORP",
  },
  {
    ticker: "NILE-PD",
    title: "BitNile Holdings, Inc.",
  },
  {
    ticker: "PSB-PZ",
    title: "PS BUSINESS PARKS, INC./MD",
  },
  {
    ticker: "XPRTX",
    title: "Invesco Senior Loan Fund",
  },
  {
    ticker: "XSLCX",
    title: "Invesco Senior Loan Fund",
  },
  {
    ticker: "FCNCO",
    title: "FIRST CITIZENS BANCSHARES INC /DE/",
  },
  {
    ticker: "FCNCP",
    title: "FIRST CITIZENS BANCSHARES INC /DE/",
  },
  {
    ticker: "WRB-PG",
    title: "BERKLEY W R CORP",
  },
  {
    ticker: "KNSW-UN",
    title: "KnightSwan Acquisition Corp",
  },
  {
    ticker: "SCRMW",
    title: "Screaming Eagle Acquisition Corp.",
  },
  {
    ticker: "CSLMR",
    title: "Consilium Acquisition Corp I, Ltd.",
  },
  {
    ticker: "ATAKR",
    title: "Aurora Technology Acquisition Corp.",
  },
  {
    ticker: "ATAKW",
    title: "Aurora Technology Acquisition Corp.",
  },
  {
    ticker: "SCRMU",
    title: "Screaming Eagle Acquisition Corp.",
  },
  {
    ticker: "WRB-PF",
    title: "BERKLEY W R CORP",
  },
  {
    ticker: "WRB-PH",
    title: "BERKLEY W R CORP",
  },
  {
    ticker: "CNOBP",
    title: "ConnectOne Bancorp, Inc.",
  },
  {
    ticker: "BNGOW",
    title: "Bionano Genomics, Inc.",
  },
  {
    ticker: "SGLAD",
    title: "Sino Green Land Corp.",
  },
  {
    ticker: "BEEMW",
    title: "Beam Global",
  },
  {
    ticker: "HCYTD",
    title: "H-CYTE, INC.",
  },
  {
    ticker: "FRGAP",
    title: "Franchise Group, Inc.",
  },
  {
    ticker: "LFT-PA",
    title: "Lument Finance Trust, Inc.",
  },
  {
    ticker: "EFSCP",
    title: "ENTERPRISE FINANCIAL SERVICES CORP",
  },
  {
    ticker: "SECT",
    title: "SECTOR 10, Inc.",
  },
  {
    ticker: "CHKEZ",
    title: "CHESAPEAKE ENERGY CORP",
  },
  {
    ticker: "CHKEW",
    title: "CHESAPEAKE ENERGY CORP",
  },
  {
    ticker: "CHKEL",
    title: "CHESAPEAKE ENERGY CORP",
  },
  {
    ticker: "LTSH",
    title: "LADENBURG THALMANN FINANCIAL SERVICES INC.",
  },
  {
    ticker: "LTSA",
    title: "LADENBURG THALMANN FINANCIAL SERVICES INC.",
  },
  {
    ticker: "LTSK",
    title: "LADENBURG THALMANN FINANCIAL SERVICES INC.",
  },
  {
    ticker: "SLVO",
    title: "CREDIT SUISSE AG",
  },
  {
    ticker: "GLDI",
    title: "CREDIT SUISSE AG",
  },
  {
    ticker: "UGLDF",
    title: "CREDIT SUISSE AG",
  },
  {
    ticker: "MLPO",
    title: "CREDIT SUISSE AG",
  },
  {
    ticker: "DGLDF",
    title: "CREDIT SUISSE AG",
  },
  {
    ticker: "TVIXF",
    title: "CREDIT SUISSE AG",
  },
  {
    ticker: "ZIVZF",
    title: "CREDIT SUISSE AG",
  },
  {
    ticker: "UGAZF",
    title: "CREDIT SUISSE AG",
  },
  {
    ticker: "USOI",
    title: "CREDIT SUISSE AG",
  },
  {
    ticker: "DSLVF",
    title: "CREDIT SUISSE AG",
  },
  {
    ticker: "USLVF",
    title: "CREDIT SUISSE AG",
  },
  {
    ticker: "MTCN",
    title: "ArcelorMittal",
  },
  {
    ticker: "GOODN",
    title: "GLADSTONE COMMERCIAL CORP",
  },
  {
    ticker: "FRC-PM",
    title: "FIRST REPUBLIC BANK",
  },
  {
    ticker: "FRC-PN",
    title: "FIRST REPUBLIC BANK",
  },
  {
    ticker: "FRC-PL",
    title: "FIRST REPUBLIC BANK",
  },
  {
    ticker: "FRC-PK",
    title: "FIRST REPUBLIC BANK",
  },
  {
    ticker: "FRC-PJ",
    title: "FIRST REPUBLIC BANK",
  },
  {
    ticker: "AHL-PE",
    title: "ASPEN INSURANCE HOLDINGS LTD",
  },
  {
    ticker: "SFUNY",
    title: "Fang Holdings Ltd",
  },
  {
    ticker: "CODI-PC",
    title: "Compass Diversified Holdings",
  },
  {
    ticker: "SDRWW",
    title: "SANDRIDGE ENERGY INC",
  },
  {
    ticker: "SDRDW",
    title: "SANDRIDGE ENERGY INC",
  },
  {
    ticker: "KREF-PA",
    title: "KKR Real Estate Finance Trust Inc.",
  },
  {
    ticker: "LVOXW",
    title: "LiveVox Holdings, Inc.",
  },
  {
    ticker: "TCNWF",
    title: "Trulieve Cannabis Corp.",
  },
  {
    ticker: "KERNW",
    title: "Akerna Corp.",
  },
  {
    ticker: "CELUW",
    title: "Celularity Inc",
  },
  {
    ticker: "VINCU",
    title: "Vincerx Pharma, Inc.",
  },
  {
    ticker: "TALKW",
    title: "Talkspace, Inc.",
  },
  {
    ticker: "IMTXW",
    title: "Immatics N.V.",
  },
  {
    ticker: "QTEKW",
    title: "QualTek Services Inc.",
  },
  {
    ticker: "RGTIW",
    title: "Rigetti Computing, Inc.",
  },
  {
    ticker: "GATEW",
    title: "Marblegate Acquisition Corp.",
  },
  {
    ticker: "GATEU",
    title: "Marblegate Acquisition Corp.",
  },
  {
    ticker: "DHBCW",
    title: "DHB Capital Corp.",
  },
  {
    ticker: "CHAA-WT",
    title: "Catcha Investment Corp",
  },
  {
    ticker: "LGACU",
    title: "Lazard Growth Acquisition Corp. I",
  },
  {
    ticker: "LGACW",
    title: "Lazard Growth Acquisition Corp. I",
  },
  {
    ticker: "SCOAW",
    title: "ScION Tech Growth I",
  },
  {
    ticker: "SCOAU",
    title: "ScION Tech Growth I",
  },
  {
    ticker: "PGRWW",
    title: "Progress Acquisition Corp.",
  },
  {
    ticker: "FOA-WT",
    title: "Finance of America Companies Inc.",
  },
  {
    ticker: "ITHXW",
    title: "ITHAX Acquisition Corp.",
  },
  {
    ticker: "ITHXU",
    title: "ITHAX Acquisition Corp.",
  },
  {
    ticker: "PGRWU",
    title: "Progress Acquisition Corp.",
  },
  {
    ticker: "RCLFU",
    title: "Rosecliff Acquisition Corp I",
  },
  {
    ticker: "RCLFW",
    title: "Rosecliff Acquisition Corp I",
  },
  {
    ticker: "AURCW",
    title: "Aurora Acquisition Corp.",
  },
  {
    ticker: "ARRWW",
    title: "Arrowroot Acquisition Corp.",
  },
  {
    ticker: "ARRWU",
    title: "Arrowroot Acquisition Corp.",
  },
  {
    ticker: "EQD-UN",
    title: "Equity Distribution Acquisition Corp.",
  },
  {
    ticker: "EQD-WT",
    title: "Equity Distribution Acquisition Corp.",
  },
  {
    ticker: "EDTXW",
    title: "EdtechX Holdings Acquisition Corp. II",
  },
  {
    ticker: "ALTUW",
    title: "Altitude Acquisition Corp.",
  },
  {
    ticker: "ACEVU",
    title: "ACE Convergence Acquisition Corp.",
  },
  {
    ticker: "VIEWW",
    title: "View, Inc.",
  },
  {
    ticker: "ACEVW",
    title: "ACE Convergence Acquisition Corp.",
  },
  {
    ticker: "EVEX-WT",
    title: "Eve Holding, Inc.",
  },
  {
    ticker: "FINMU",
    title: "MARLIN TECHNOLOGY CORP.",
  },
  {
    ticker: "FINMW",
    title: "MARLIN TECHNOLOGY CORP.",
  },
  {
    ticker: "KAIIU",
    title: "Kismet Acquisition Two Corp.",
  },
  {
    ticker: "KAIRW",
    title: "Kairos Acquisition Corp.",
  },
  {
    ticker: "KAIIW",
    title: "Kismet Acquisition Two Corp.",
  },
  {
    ticker: "KIIIU",
    title: "Kismet Acquisition Three Corp.",
  },
  {
    ticker: "KIIIW",
    title: "Kismet Acquisition Three Corp.",
  },
  {
    ticker: "AEFC",
    title: "AEGON NV",
  },
  {
    ticker: "HWCPZ",
    title: "HANCOCK WHITNEY CORP",
  },
  {
    ticker: "PGYWW",
    title: "Pagaya Technologies Ltd.",
  },
  {
    ticker: "ASB-PF",
    title: "ASSOCIATED BANC-CORP",
  },
  {
    ticker: "F-PB",
    title: "FORD MOTOR CO",
  },
  {
    ticker: "F-PC",
    title: "FORD MOTOR CO",
  },
  {
    ticker: "AEAEW",
    title: "AltEnergy Acquisition Corp",
  },
  {
    ticker: "FICVW",
    title: "Frontier Investment Corp",
  },
  {
    ticker: "FICVU",
    title: "Frontier Investment Corp",
  },
  {
    ticker: "BOCNU",
    title: "Blue Ocean Acquisition Corp",
  },
  {
    ticker: "BOCNW",
    title: "Blue Ocean Acquisition Corp",
  },
  {
    ticker: "ASTLW",
    title: "Algoma Steel Group Inc.",
  },
  {
    ticker: "ICNC-UN",
    title: "Iconic Sports Acquisition Corp.",
  },
  {
    ticker: "MCAAU",
    title: "Mountain & Co. I Acquisition Corp.",
  },
  {
    ticker: "MCAAW",
    title: "Mountain & Co. I Acquisition Corp.",
  },
  {
    ticker: "PAYOW",
    title: "Payoneer Global Inc.",
  },
  {
    ticker: "BMAC-UN",
    title: "Black Mountain Acquisition Corp.",
  },
  {
    ticker: "BMAC-WT",
    title: "Black Mountain Acquisition Corp.",
  },
  {
    ticker: "CITEU",
    title: "Cartica Acquisition Corp",
  },
  {
    ticker: "GTACU",
    title: "Global Technology Acquisition Corp. I",
  },
  {
    ticker: "GTACW",
    title: "Global Technology Acquisition Corp. I",
  },
  {
    ticker: "CITEW",
    title: "Cartica Acquisition Corp",
  },
  {
    ticker: "CLOER",
    title: "Clover Leaf Capital Corp.",
  },
  {
    ticker: "NCACW",
    title: "Newcourt Acquisition Corp",
  },
  {
    ticker: "GGROW",
    title: "Gogoro Inc.",
  },
  {
    ticker: "FLFVU",
    title: "Feutune Light Acquisition Corp",
  },
  {
    ticker: "MCACU",
    title: "Monterey Capital Acquisition Corp",
  },
  {
    ticker: "MCACR",
    title: "Monterey Capital Acquisition Corp",
  },
  {
    ticker: "ADRT-WT",
    title: "Ault Disruptive Technologies Corp",
  },
  {
    ticker: "PGSS-WT",
    title: "Pegasus Digital Mobility Acquisition Corp.",
  },
  {
    ticker: "PGSS-UN",
    title: "Pegasus Digital Mobility Acquisition Corp.",
  },
  {
    ticker: "IGTAW",
    title: "Inception Growth Acquisition Ltd",
  },
  {
    ticker: "IGTAU",
    title: "Inception Growth Acquisition Ltd",
  },
  {
    ticker: "IGTAR",
    title: "Inception Growth Acquisition Ltd",
  },
  {
    ticker: "AVYAW",
    title: "Avaya Holdings Corp.",
  },
  {
    ticker: "GNT-PA",
    title: "GAMCO Natural Resources, Gold & Income Trust",
  },
  {
    ticker: "RF-PE",
    title: "REGIONS FINANCIAL CORP",
  },
  {
    ticker: "ACR-PC",
    title: "ACRES Commercial Realty Corp.",
  },
  {
    ticker: "ACR-PD",
    title: "ACRES Commercial Realty Corp.",
  },
  {
    ticker: "EQH-PA",
    title: "Equitable Holdings, Inc.",
  },
  {
    ticker: "EQH-PC",
    title: "Equitable Holdings, Inc.",
  },
  {
    ticker: "TRKAW",
    title: "Troika Media Group, Inc.",
  },
  {
    ticker: "DZZ",
    title: "DEUTSCHE BANK AKTIENGESELLSCHAFT",
  },
  {
    ticker: "DGZ",
    title: "DEUTSCHE BANK AKTIENGESELLSCHAFT",
  },
  {
    ticker: "DGP",
    title: "DEUTSCHE BANK AKTIENGESELLSCHAFT",
  },
  {
    ticker: "NBRWF",
    title: "NABORS INDUSTRIES LTD",
  },
  {
    ticker: "ADXSD",
    title: "Advaxis, Inc.",
  },
  {
    ticker: "NIMC",
    title: "NISOURCE INC.",
  },
  {
    ticker: "CUBB",
    title: "Customers Bancorp, Inc.",
  },
  {
    ticker: "FCRX",
    title: "First Eagle Alternative Capital BDC, Inc.",
  },
  {
    ticker: "MSFIX",
    title: "Destra Multi-Alternative Fund",
  },
  {
    ticker: "PRIF-PJ",
    title: "Priority Income Fund, Inc.",
  },
  {
    ticker: "PRIF-PK",
    title: "Priority Income Fund, Inc.",
  },
  {
    ticker: "PRIF-PH",
    title: "Priority Income Fund, Inc.",
  },
  {
    ticker: "PRIF-PF",
    title: "Priority Income Fund, Inc.",
  },
  {
    ticker: "PRIF-PG",
    title: "Priority Income Fund, Inc.",
  },
  {
    ticker: "PRIF-PL",
    title: "Priority Income Fund, Inc.",
  },
  {
    ticker: "PRIF-PD",
    title: "Priority Income Fund, Inc.",
  },
  {
    ticker: "PRIF-PI",
    title: "Priority Income Fund, Inc.",
  },
  {
    ticker: "CGABL",
    title: "Carlyle Group Inc.",
  },
  {
    ticker: "RTLPP",
    title: "Necessity Retail REIT, Inc.",
  },
  {
    ticker: "RTLPO",
    title: "Necessity Retail REIT, Inc.",
  },
  {
    ticker: "OPP-PA",
    title: "RiverNorth/DoubleLine Strategic Opportunity Fund, Inc.",
  },
  {
    ticker: "OPP-PB",
    title: "RiverNorth/DoubleLine Strategic Opportunity Fund, Inc.",
  },
  {
    ticker: "IMRNW",
    title: "Immuron Ltd",
  },
  {
    ticker: "SNAXW",
    title: "STRYVE FOODS, INC.",
  },
  {
    ticker: "WSBCP",
    title: "WESBANCO INC",
  },
  {
    ticker: "XOMAP",
    title: "XOMA Corp",
  },
  {
    ticker: "XOMAO",
    title: "XOMA Corp",
  },
  {
    ticker: "STRY-WT",
    title: "Starry Group Holdings, Inc.",
  },
  {
    ticker: "BRWC",
    title: "Birdie Win Corp",
  },
  {
    ticker: "ENTFW",
    title: "Enterprise 4.0 Technology Acquisition Corp",
  },
  {
    ticker: "ENTFU",
    title: "Enterprise 4.0 Technology Acquisition Corp",
  },
  {
    ticker: "BACA-WT",
    title: "Berenson Acquisition Corp. I",
  },
  {
    ticker: "BACA-UN",
    title: "Berenson Acquisition Corp. I",
  },
  {
    ticker: "LATGU",
    title: "LatAmGrowth SPAC",
  },
  {
    ticker: "CCTSU",
    title: "Cactus Acquisition Corp. 1 Ltd",
  },
  {
    ticker: "CCTSW",
    title: "Cactus Acquisition Corp. 1 Ltd",
  },
  {
    ticker: "NLITW",
    title: "Northern Lights Acquisition Corp.",
  },
  {
    ticker: "NLITU",
    title: "Northern Lights Acquisition Corp.",
  },
  {
    ticker: "PCXCW",
    title: "Parsec Capital Acquisitions Corp.",
  },
  {
    ticker: "PCXCU",
    title: "Parsec Capital Acquisitions Corp.",
  },
  {
    ticker: "DMAQR",
    title: "Deep Medicine Acquisition Corp.",
  },
  {
    ticker: "GDSTU",
    title: "Goldenstone Acquisition Ltd.",
  },
  {
    ticker: "GDSTW",
    title: "Goldenstone Acquisition Ltd.",
  },
  {
    ticker: "GDSTR",
    title: "Goldenstone Acquisition Ltd.",
  },
  {
    ticker: "MTRYW",
    title: "Monterey Bio Acquisition Corp",
  },
  {
    ticker: "MTRYU",
    title: "Monterey Bio Acquisition Corp",
  },
  {
    ticker: "USCTW",
    title: "TKB Critical Technologies 1",
  },
  {
    ticker: "SMAPU",
    title: "Sportsmap Tech Acquisition Corp.",
  },
  {
    ticker: "SMAPW",
    title: "Sportsmap Tech Acquisition Corp.",
  },
  {
    ticker: "ALSAU",
    title: "Alpha Star Acquisition Corp",
  },
  {
    ticker: "ALSAW",
    title: "Alpha Star Acquisition Corp",
  },
  {
    ticker: "ALSAR",
    title: "Alpha Star Acquisition Corp",
  },
  {
    ticker: "MPLN-WT",
    title: "MultiPlan Corp",
  },
  {
    ticker: "UVIX",
    title: "VS Trust",
  },
  {
    ticker: "SVIX",
    title: "VS Trust",
  },
  {
    ticker: "PWPPW",
    title: "Perella Weinberg Partners",
  },
  {
    ticker: "TMCWW",
    title: "TMC the metals Co Inc.",
  },
  {
    ticker: "VLTA-WT",
    title: "Volta Inc.",
  },
  {
    ticker: "NUVB-WT",
    title: "Nuvation Bio Inc.",
  },
  {
    ticker: "GRNAW",
    title: "GreenLight Biosciences Holdings, PBC",
  },
  {
    ticker: "FSSIU",
    title: "Fortistar Sustainable Solutions Corp.",
  },
  {
    ticker: "BKKT-WT",
    title: "Bakkt Holdings, Inc.",
  },
  {
    ticker: "DCGOW",
    title: "DocGo Inc.",
  },
  {
    ticker: "FSSIW",
    title: "Fortistar Sustainable Solutions Corp.",
  },
  {
    ticker: "VYGG-UN",
    title: "Vy Global Growth",
  },
  {
    ticker: "ARKOW",
    title: "ARKO Corp.",
  },
  {
    ticker: "VYGG-WT",
    title: "Vy Global Growth",
  },
  {
    ticker: "MDH-UN",
    title: "MDH Acquisition Corp.",
  },
  {
    ticker: "MDH-WT",
    title: "MDH Acquisition Corp.",
  },
  {
    ticker: "SAMAW",
    title: "Schultze Special Purpose Acquisition Corp. II",
  },
  {
    ticker: "AGGRW",
    title: "Agile Growth Corp.",
  },
  {
    ticker: "AGGRU",
    title: "Agile Growth Corp.",
  },
  {
    ticker: "VPCBU",
    title: "VPC Impact Acquisition Holdings II",
  },
  {
    ticker: "VPCBW",
    title: "VPC Impact Acquisition Holdings II",
  },
  {
    ticker: "PDOT-WT",
    title: "Peridot Acquisition Corp. II",
  },
  {
    ticker: "PDOT-UN",
    title: "Peridot Acquisition Corp. II",
  },
  {
    ticker: "FZT-UN",
    title: "FAST Acquisition Corp. II",
  },
  {
    ticker: "FZT-WT",
    title: "FAST Acquisition Corp. II",
  },
  {
    ticker: "HGTY-WT",
    title: "Hagerty, Inc.",
  },
  {
    ticker: "SIERW",
    title: "Sierra Lake Acquisition Corp.",
  },
  {
    ticker: "MAQCW",
    title: "Maquia Capital Acquisition Corp",
  },
  {
    ticker: "MAQCU",
    title: "Maquia Capital Acquisition Corp",
  },
  {
    ticker: "SAMAU",
    title: "Schultze Special Purpose Acquisition Corp. II",
  },
  {
    ticker: "KSICU",
    title: "Kadem Sustainable Impact Corp",
  },
  {
    ticker: "KSICW",
    title: "Kadem Sustainable Impact Corp",
  },
  {
    ticker: "PWUPW",
    title: "PowerUp Acquisition Corp.",
  },
  {
    ticker: "GHBWF",
    title: "Glass House Brands Inc.",
  },
  {
    ticker: "PWUPU",
    title: "PowerUp Acquisition Corp.",
  },
  {
    ticker: "LIONU",
    title: "Lionheart III Corp",
  },
  {
    ticker: "LIONW",
    title: "Lionheart III Corp",
  },
  {
    ticker: "CLAS-WT",
    title: "Class Acceleration Corp.",
  },
  {
    ticker: "CLAS-UN",
    title: "Class Acceleration Corp.",
  },
  {
    ticker: "LTCHW",
    title: "Latch, Inc.",
  },
  {
    ticker: "ADOCW",
    title: "Edoc Acquisition Corp.",
  },
  {
    ticker: "ADOCR",
    title: "Edoc Acquisition Corp.",
  },
  {
    ticker: "CPUH-UN",
    title: "Compute Health Acquisition Corp.",
  },
  {
    ticker: "CPUH-WT",
    title: "Compute Health Acquisition Corp.",
  },
  {
    ticker: "PACXW",
    title: "Pioneer Merger Corp.",
  },
  {
    ticker: "PACXU",
    title: "Pioneer Merger Corp.",
  },
  {
    ticker: "ADEX-WT",
    title: "Adit EdTech Acquisition Corp.",
  },
  {
    ticker: "ADEX-UN",
    title: "Adit EdTech Acquisition Corp.",
  },
  {
    ticker: "LBPSW",
    title: "4D Pharma PLC",
  },
  {
    ticker: "CLRMU",
    title: "Clarim Acquisition Corp.",
  },
  {
    ticker: "ALFIW",
    title: "Alfi, Inc.",
  },
  {
    ticker: "CLRMW",
    title: "Clarim Acquisition Corp.",
  },
  {
    ticker: "OSTRU",
    title: "Oyster Enterprises Acquisition Corp.",
  },
  {
    ticker: "OSTRW",
    title: "Oyster Enterprises Acquisition Corp.",
  },
  {
    ticker: "DBRG-PI",
    title: "DigitalBridge Group, Inc.",
  },
  {
    ticker: "DBRG-PH",
    title: "DigitalBridge Group, Inc.",
  },
  {
    ticker: "DBRG-PJ",
    title: "DigitalBridge Group, Inc.",
  },
  {
    ticker: "OCCIN",
    title: "OFS Credit Company, Inc.",
  },
  {
    ticker: "OCCIO",
    title: "OFS Credit Company, Inc.",
  },
  {
    ticker: "CNTWW",
    title: "Alpha Metallurgical Resources, Inc.",
  },
  {
    ticker: "PHUNW",
    title: "Phunware, Inc.",
  },
  {
    ticker: "HTZWW",
    title: "HERTZ GLOBAL HOLDINGS, INC",
  },
  {
    ticker: "SQLLW",
    title: "SeqLL, Inc.",
  },
  {
    ticker: "CPER",
    title: "United States Commodity Index Funds Trust",
  },
  {
    ticker: "CPTNW",
    title: "Cepton, Inc.",
  },
  {
    ticker: "LTCFX",
    title: "Alternative Strategies Fund",
  },
  {
    ticker: "LTIFX",
    title: "Alternative Strategies Fund",
  },
  {
    ticker: "SBBA",
    title: "Scorpio Tankers Inc.",
  },
  {
    ticker: "HTIBP",
    title: "Healthcare Trust, Inc.",
  },
  {
    ticker: "XSIWX",
    title: "VOYA CREDIT INCOME FUND",
  },
  {
    ticker: "XSIIX",
    title: "VOYA CREDIT INCOME FUND",
  },
  {
    ticker: "XSICX",
    title: "VOYA CREDIT INCOME FUND",
  },
  {
    ticker: "FREJP",
    title: "FEDERAL HOME LOAN MORTGAGE CORP",
  },
  {
    ticker: "WLLAW",
    title: "WHITING PETROLEUM CORP",
  },
  {
    ticker: "WLLBW",
    title: "WHITING PETROLEUM CORP",
  },
  {
    ticker: "ESPID",
    title: "ESP Resources, Inc.",
  },
  {
    ticker: "HROWL",
    title: "HARROW HEALTH, INC.",
  },
  {
    ticker: "CLVRW",
    title: "Clever Leaves Holdings Inc.",
  },
  {
    ticker: "TBCPU",
    title: "Thunder Bridge Capital Partners III Inc.",
  },
  {
    ticker: "TBCPW",
    title: "Thunder Bridge Capital Partners III Inc.",
  },
  {
    ticker: "GLSPW",
    title: "Global SPAC Partners Co,",
  },
  {
    ticker: "SCAQU",
    title: "Stratim Cloud Acquisition Corp.",
  },
  {
    ticker: "GLSPU",
    title: "Global SPAC Partners Co,",
  },
  {
    ticker: "CLNNW",
    title: "Clene Inc.",
  },
  {
    ticker: "SCAQW",
    title: "Stratim Cloud Acquisition Corp.",
  },
  {
    ticker: "FVT-WT",
    title: "Fortress Value Acquisition Corp. III",
  },
  {
    ticker: "ACHR-WT",
    title: "Archer Aviation Inc.",
  },
  {
    ticker: "NOACU",
    title: "Natural Order Acquisition Corp.",
  },
  {
    ticker: "NOACW",
    title: "Natural Order Acquisition Corp.",
  },
  {
    ticker: "FVT-UN",
    title: "Fortress Value Acquisition Corp. III",
  },
  {
    ticker: "CTAQW",
    title: "Carney Technology Acquisition Corp. II",
  },
  {
    ticker: "GSAQU",
    title: "Global Synergy Acquisition Corp.",
  },
  {
    ticker: "GSAQW",
    title: "Global Synergy Acquisition Corp.",
  },
  {
    ticker: "IGICW",
    title: "International General Insurance Holdings Ltd.",
  },
  {
    ticker: "RCOR-WT",
    title: "Renovacor, Inc.",
  },
  {
    ticker: "HPX-WT",
    title: "HPX Corp.",
  },
  {
    ticker: "HPX-UN",
    title: "HPX Corp.",
  },
  {
    ticker: "LOTZW",
    title: "CarLotz, Inc.",
  },
  {
    ticker: "SVNAW",
    title: "7 Acquisition Corp",
  },
  {
    ticker: "SVNAU",
    title: "7 Acquisition Corp",
  },
  {
    ticker: "DRAYU",
    title: "Macondray Capital Acquisition Corp. I",
  },
  {
    ticker: "DCRDW",
    title: "Decarbonization Plus Acquisition Corp IV",
  },
  {
    ticker: "IVCAW",
    title: "Investcorp India Acquisition Corp",
  },
  {
    ticker: "DRAYW",
    title: "Macondray Capital Acquisition Corp. I",
  },
  {
    ticker: "IVCAU",
    title: "Investcorp India Acquisition Corp",
  },
  {
    ticker: "OXUSW",
    title: "Oxus Acquisition Corp.",
  },
  {
    ticker: "OXUSU",
    title: "Oxus Acquisition Corp.",
  },
  {
    ticker: "MTAL-WT",
    title: "Metals Acquisition Corp",
  },
  {
    ticker: "REEAW",
    title: "REE Automotive Ltd.",
  },
  {
    ticker: "GLHAW",
    title: "Glass Houses Acquisition Corp.",
  },
  {
    ticker: "SWAGW",
    title: "Software Acquisition Group Inc. III",
  },
  {
    ticker: "GLHAU",
    title: "Glass Houses Acquisition Corp.",
  },
  {
    ticker: "AMPS-WT",
    title: "Altus Power, Inc.",
  },
  {
    ticker: "SWETW",
    title: "Athlon Acquisition Corp.",
  },
  {
    ticker: "SWETU",
    title: "Athlon Acquisition Corp.",
  },
  {
    ticker: "GENI-WT",
    title: "Genius Sports Ltd",
  },
  {
    ticker: "PHICW",
    title: "Population Health Investment Co., Inc.",
  },
  {
    ticker: "PHICU",
    title: "Population Health Investment Co., Inc.",
  },
  {
    ticker: "MIT-WT",
    title: "Mason Industrial Technology, Inc.",
  },
  {
    ticker: "MIT-UN",
    title: "Mason Industrial Technology, Inc.",
  },
  {
    ticker: "STRCW",
    title: "Sarcos Technology & Robotics Corp",
  },
  {
    ticker: "GLBLU",
    title: "Cartesian Growth Corp",
  },
  {
    ticker: "IBER-UN",
    title: "IBERE PHARMACEUTICALS",
  },
  {
    ticker: "IBER-WT",
    title: "IBERE PHARMACEUTICALS",
  },
  {
    ticker: "GLBLW",
    title: "Cartesian Growth Corp",
  },
  {
    ticker: "BRPMW",
    title: "B. Riley Principal 150 Merger Corp.",
  },
  {
    ticker: "BRPMU",
    title: "B. Riley Principal 150 Merger Corp.",
  },
  {
    ticker: "REVHU",
    title: "Revolution Healthcare Acquisition Corp.",
  },
  {
    ticker: "REVHW",
    title: "Revolution Healthcare Acquisition Corp.",
  },
  {
    ticker: "CNGLW",
    title: "Canna-Global Acquisition Corp",
  },
  {
    ticker: "CNGLU",
    title: "Canna-Global Acquisition Corp",
  },
  {
    ticker: "OLITU",
    title: "OmniLit Acquisition Corp.",
  },
  {
    ticker: "OLITW",
    title: "OmniLit Acquisition Corp.",
  },
  {
    ticker: "ACACU",
    title: "Acri Capital Acquisition Corp",
  },
  {
    ticker: "DRCTW",
    title: "Direct Digital Holdings, Inc.",
  },
  {
    ticker: "ROCAR",
    title: "ROC Energy Acquisition Corp.",
  },
  {
    ticker: "ROCAU",
    title: "ROC Energy Acquisition Corp.",
  },
  {
    ticker: "KCGI-WT",
    title: "Kensington Capital Acquisition Corp. V",
  },
  {
    ticker: "KCGI-UN",
    title: "Kensington Capital Acquisition Corp. V",
  },
  {
    ticker: "THACW",
    title: "Thrive Acquisition Corp",
  },
  {
    ticker: "THACU",
    title: "Thrive Acquisition Corp",
  },
  {
    ticker: "TOACU",
    title: "Talon 1 Acquisition Corp",
  },
  {
    ticker: "RACYU",
    title: "Relativity Acquisition Corp",
  },
  {
    ticker: "RACYW",
    title: "Relativity Acquisition Corp",
  },
  {
    ticker: "GDNRW",
    title: "Gardiner Healthcare Acquisitions Corp.",
  },
  {
    ticker: "MCAER",
    title: "Mountain Crest Acquisition Corp. III",
  },
  {
    ticker: "DRMAW",
    title: "Dermata Therapeutics, Inc.",
  },
  {
    ticker: "GENQU",
    title: "Genesis Unicorn Capital Corp.",
  },
  {
    ticker: "MCAEU",
    title: "Mountain Crest Acquisition Corp. III",
  },
  {
    ticker: "MTAL-UN",
    title: "Metals Acquisition Corp",
  },
  {
    ticker: "BPACU",
    title: "Bullpen Parlay Acquisition Co",
  },
  {
    ticker: "IVCBU",
    title: "Investcorp Europe Acquisition Corp I",
  },
  {
    ticker: "IVCBW",
    title: "Investcorp Europe Acquisition Corp I",
  },
];
