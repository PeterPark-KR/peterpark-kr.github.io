export type Copy = {
  name: string; portfolio: string; location: string; subtitle: string; statement: string; note: string;
  nav: string[]; skip: string; menu: string; primaryNav: string; mobileNav: string; language: string;
  resume: string; linkedin: string; email: string; back: string; footer: string; title: string; description: string;
  about: string[]; experience: { organization: string; role: string; dates: string; location: string; description: string }[];
  degree: string; selected: string; courses: string[]; grade: string; courseworkNote: string;
  skillsTitle: string; skills: [string, string][];
  projects: { status: string; title: string; description: string; tools?: string }[];
  beyond: string; hobby: string; hobbyText: string; contactIntro: string; contactText: string;
};

export const en: Copy = {
  name: "Hyeonjun Park", portfolio: "Accounting portfolio", location: "Toronto, Ontario",
  subtitle: "York University · BCom Accounting",
  statement: "An accounting student interested in how businesses manage cash and how tax shapes their decisions.",
  note: "Co-op stream · Intending to pursue the Canadian CPA designation",
  nav: ["About", "Experience", "Education", "Skills", "Projects", "Contact"],
  skip: "Skip to content", menu: "Menu", primaryNav: "Primary navigation", mobileNav: "Mobile navigation", language: "Website language",
  resume: "Résumé", linkedin: "LinkedIn", email: "Email", back: "Back to top", footer: "Accounting & tax · Toronto",
  title: "Hyeonjun Park | Aspiring CPA",
  description: "Meet Hyeonjun Park, an accounting student at York University with an interest in tax and plans to pursue the Canadian CPA designation.",
  about: ["I chose accounting because I wanted to understand how cash moves through a business.", "Working at my family’s deli made that interest tangible: checking the till, keeping records and coordinating inventory connected the numbers to everyday decisions. At York, studying Canadian income taxation has given me an area I want to explore further.", "I’m Hyeonjun, also known as Peter. My background spans a family business, customer service and the Republic of Korea Navy. Across those settings, I’ve learned to be careful with information, communicate clearly and follow through on shared responsibilities. I hope to bring those habits to an accounting and tax team as I work toward the Canadian CPA designation."],
  experience: [
    { organization: "Paris Baguette", role: "Customer Service Representative", dates: "Jun 2025 – Aug 2025", location: "Toronto, Ontario", description: "Processed POS transactions and cash and credit payments as part of a new location’s opening team. Used Korean and English to explain products and help Korean-speaking customers communicate with the team." },
    { organization: "Republic of Korea Navy", role: "At-Sea Military Interpreter & Operational Briefing Specialist", dates: "Sep 2022 – May 2024", location: "Incheon, South Korea", description: "Maintained Situation Reports and prepared operational briefing materials for duty-officer review. Interpreted between Korean and English during vessel repairs with U.S. engineers and supported Korea–France joint operations. As Barracks Room Leader, helped resolve peer conflicts and coordinate shared duties." },
    { organization: "Family-owned Korean deli", role: "Store Manager", dates: "Feb 2022 – Aug 2022", location: "Jeju-si, South Korea", description: "Reconciled the daily till against prior-day cash and store records to identify discrepancies and recording omissions. Coordinated inventory with managers at other locations to help prevent stock-outs." },
  ],
  degree: "Bachelor of Commerce, Accounting · Co-op stream", selected: "Selected completed coursework",
  courses: ["An Overview of Canadian Income Taxation", "Advanced Spreadsheets"], grade: "Grade: A", courseworkNote: "Spreadsheet skills were applied in coursework, quizzes and exams.",
  skillsTitle: "Skills & languages",
  skills: [["Microsoft Excel", "Intermediate proficiency: PivotTables, data cleaning and scenario analysis."], ["Business operations", "Daily till reconciliation, POS transactions and inventory coordination."], ["Communication", "Korean–English interpretation, operational briefing support and customer service."], ["Languages", "Korean and English · Fluent / bilingual"]],
  projects: [
    { status: "2026 · Ongoing", title: "CPA Journey Portfolio", description: "Built and deployed this website with AI-assisted development tools to share my accounting education, experience and professional development. I continue to maintain its content.", tools: "Next.js · GitHub Pages" },
    { status: "Planned", title: "Small-Business Cash Flow and GST/HST Tracker", description: "A planned learning project using fictional transactions, CRA rules and Canadian industry benchmarks to explore cash flow and GST/HST tracking." },
  ],
  beyond: "Beyond Accounting", hobby: "Haedong Kumdo", hobbyText: "I have practised Haedong Kumdo, a Korean sword martial art, for approximately ten years and hold a 4th Dan instructor qualification. It is a meaningful part of my life outside accounting.",
  contactIntro: "I’d welcome a conversation.", contactText: "Accounting and tax opportunities, your team’s work, or the lessons that shaped your own CPA path.",
};

export const ko: Copy = {
  name: "박현준", portfolio: "회계 포트폴리오", location: "캐나다 온타리오주 토론토",
  subtitle: "York University · BCom 회계 전공", statement: "기업의 현금 관리와 세금이 의사결정에 미치는 영향에 관심을 두고 회계를 공부하고 있습니다.", note: "Co-op 과정 · 캐나다 CPA 자격 취득 목표",
  nav: ["소개", "경험", "학력", "역량", "프로젝트", "연락처"], skip: "본문으로 바로가기", menu: "메뉴", primaryNav: "주요 탐색", mobileNav: "모바일 탐색", language: "웹사이트 언어",
  resume: "이력서 (영문)", linkedin: "LinkedIn", email: "이메일", back: "맨 위로", footer: "회계 및 세무 · 토론토",
  title: "박현준 | 캐나다 CPA를 향한 여정", description: "York University에서 회계를 공부하는 박현준의 교육, 경험과 캐나다 CPA를 향한 여정을 소개합니다.",
  about: ["기업에서 현금이 어떻게 흐르는지 이해하고 싶어 회계를 선택했습니다.", "가족이 운영하는 델리에서 현금을 대조하고 기록을 관리하며 재고를 조정하는 일은 숫자가 일상의 의사결정과 어떻게 연결되는지 보여주었습니다. York University에서 캐나다 소득세를 공부하며 세무를 더 깊이 알아가고 싶어졌습니다.", "안녕하세요, 박현준입니다. Peter라는 이름도 사용합니다. 가족 사업, 고객 서비스, 대한민국 해군에서 다양한 경험을 쌓았습니다. 그 과정에서 정보를 꼼꼼하게 다루고, 명확하게 소통하며, 함께 맡은 책임을 끝까지 이행하는 태도를 배웠습니다. 캐나다 CPA 자격 취득을 목표로 공부하며 이러한 태도를 회계·세무 팀에서 실천하고 싶습니다."],
  experience: [
    { organization: "Paris Baguette", role: "고객 서비스 담당", dates: "2025.06 – 2025.08", location: "캐나다 온타리오주 토론토", description: "신규 매장 오픈 팀의 일원으로 POS 거래와 현금·카드 결제를 처리했습니다. 한국어와 영어로 제품을 설명하고 한국어 사용 고객과 직원 간의 소통을 도왔습니다." },
    { organization: "대한민국 해군", role: "해상 군 통역 및 작전 브리핑 지원 담당", dates: "2022.09 – 2024.05", location: "대한민국 인천", description: "상황보고서(SITREP)를 관리하고 당직사관 검토를 위한 작전 브리핑 자료를 준비했습니다. 미국 엔지니어들과의 함정 수리 과정에서 한영 통역을 제공하고 한불 연합작전을 지원했습니다. 생활반장으로서 동료 간 갈등 해결과 공동 업무 조정을 도왔습니다." },
    { organization: "가족 운영 한식 델리", role: "매장 관리자", dates: "2022.02 – 2022.08", location: "대한민국 제주시", description: "매일 시재를 전일 현금 및 매장 기록과 대조하여 차이와 기록 누락을 확인했습니다. 다른 지점 관리자들과 재고를 조정하여 품절 예방을 도왔습니다." },
  ],
  degree: "Bachelor of Commerce, 회계 전공 · Co-op 과정", selected: "주요 이수 과목", courses: ["캐나다 소득세 개론 (An Overview of Canadian Income Taxation)", "고급 스프레드시트 (Advanced Spreadsheets)"], grade: "성적: A", courseworkNote: "스프레드시트 역량은 수업 과제, 퀴즈와 시험에서 활용했습니다.", skillsTitle: "역량 및 언어",
  skills: [["Microsoft Excel", "중급: 피벗 테이블, 데이터 정리 및 시나리오 분석."], ["매장 운영", "일일 시재 대조, POS 거래 및 재고 조정."], ["커뮤니케이션", "한영 통역, 작전 브리핑 지원 및 고객 서비스."], ["구사 언어", "한국어 및 영어 · 유창 / 이중언어"]],
  projects: [
    { status: "2026 · 지속 관리 중", title: "CPA Journey 포트폴리오", description: "회계 교육, 경험과 성장 과정을 소개하기 위해 AI 지원 개발 도구로 이 웹사이트를 제작하고 배포했습니다. 콘텐츠를 지속적으로 관리하고 있습니다.", tools: "Next.js · GitHub Pages" },
    { status: "계획 단계", title: "소규모 사업 현금흐름 및 GST/HST 추적 도구", description: "가상 거래, 캐나다 국세청(CRA) 규정 및 캐나다 산업 벤치마크를 활용하여 현금흐름과 GST/HST 추적을 공부하기 위한 프로젝트를 계획하고 있습니다." },
  ],
  beyond: "회계 밖의 일상", hobby: "해동검도", hobbyText: "한국의 검술 무예인 해동검도를 약 10년간 수련했으며, 4단 사범 자격을 보유하고 있습니다. 해동검도는 회계 공부 밖에서도 제 삶의 의미 있는 부분입니다.", contactIntro: "편하게 연락해 주세요.", contactText: "회계·세무 분야의 기회, 팀에서 하시는 일, 또는 CPA를 향한 여정에서 배운 경험을 나누고 싶습니다.",
};

export const ja: Copy = {
  name: "Hyeonjun Park", portfolio: "会計ポートフォリオ", location: "カナダ・オンタリオ州トロント",
  subtitle: "York University · BCom 会計専攻", statement: "企業の現金管理と、税が意思決定に与える影響に関心を持ち、会計を学んでいます。", note: "Co-op課程 · カナダのCPA資格取得を目標にしています",
  nav: ["自己紹介", "経験", "学歴", "スキル", "プロジェクト", "連絡先"], skip: "本文へ移動", menu: "メニュー", primaryNav: "メインナビゲーション", mobileNav: "モバイルナビゲーション", language: "サイトの表示言語",
  resume: "履歴書（英語）", linkedin: "LinkedIn", email: "メール", back: "ページ上部へ", footer: "会計・税務 · トロント",
  title: "Hyeonjun Park | カナダのCPA資格取得を目指して", description: "York Universityで会計を学ぶHyeonjun Parkの学業、経験、カナダのCPA資格取得に向けた歩みをご紹介します。",
  about: ["企業の中で現金がどのように流れるのかを理解したいと思い、会計を選びました。", "家族経営のデリで現金の照合、記録の管理、在庫の調整を行い、数字と日々の意思決定のつながりを実感しました。York Universityでカナダの所得税を学び、税務をさらに深く学びたいと考えるようになりました。", "Hyeonjun Parkです。Peterという名前も使っています。家族の事業、接客、大韓民国海軍で経験を積みました。それぞれの場で、情報を慎重に扱うこと、明確に伝えること、共に担う責任を果たすことを学びました。カナダのCPA資格取得を目指しながら、こうした姿勢を会計・税務チームで生かしたいと考えています。"],
  experience: [
    { organization: "Paris Baguette", role: "カスタマーサービス担当", dates: "2025.06 – 2025.08", location: "カナダ・オンタリオ州トロント", description: "新店舗の開店チームの一員として、POS取引と現金・カード決済を担当しました。韓国語と英語で商品を説明し、韓国語を話すお客様とスタッフの意思疎通を支援しました。" },
    { organization: "大韓民国海軍", role: "洋上での軍事通訳・作戦ブリーフィング支援担当", dates: "2022.09 – 2024.05", location: "韓国・仁川", description: "状況報告書（SITREP）を管理し、当直士官の確認用に作戦ブリーフィング資料を準備しました。米国のエンジニアによる艦艇修理で韓英通訳を務め、韓仏共同作戦を支援しました。居室の班長として、仲間同士の対立の解決や共同作業の調整を手伝いました。" },
    { organization: "家族経営の韓国料理デリ", role: "店舗マネージャー", dates: "2022.02 – 2022.08", location: "韓国・済州市", description: "毎日、レジの現金を前日の現金残高と店舗記録に照合し、差異や記録漏れを確認しました。他店舗のマネージャーと在庫を調整し、品切れの防止に努めました。" },
  ],
  degree: "Bachelor of Commerce、会計専攻 · Co-op課程", selected: "主な履修済み科目", courses: ["カナダ所得税概論（An Overview of Canadian Income Taxation）", "上級スプレッドシート（Advanced Spreadsheets）"], grade: "成績：A", courseworkNote: "スプレッドシートのスキルは、授業の課題、小テスト、試験で活用しました。", skillsTitle: "スキルと言語",
  skills: [["Microsoft Excel", "中級：ピボットテーブル、データの整理、シナリオ分析。"], ["店舗運営", "日々の現金照合、POS取引、在庫調整。"], ["コミュニケーション", "韓英通訳、作戦ブリーフィングの支援、接客。"], ["使用言語", "韓国語・英語 · 流暢／バイリンガル"]],
  projects: [
    { status: "2026 · 継続更新中", title: "CPA Journey ポートフォリオ", description: "会計の学習、経験、成長の過程を紹介するため、AI支援の開発ツールを用いてこのサイトを制作・公開しました。内容は継続的に更新しています。", tools: "Next.js · GitHub Pages" },
    { status: "計画段階", title: "小規模事業のキャッシュフロー・GST/HST管理ツール", description: "架空の取引、カナダ歳入庁（CRA）の規則、カナダの業界ベンチマークを使い、キャッシュフローとGST/HSTの管理を学ぶためのプロジェクトを計画しています。" },
  ],
  beyond: "会計以外のこと", hobby: "Haedong Kumdo（海東剣道）", hobbyText: "韓国の剣術武道であるHaedong Kumdoを約10年間稽古し、4段の指導者資格を取得しています。会計以外の生活でも、大切な存在です。", contactIntro: "お気軽にご連絡ください。", contactText: "会計・税務分野の機会、チームでのお仕事、CPAを目指す中で得た学びについて、お話しできれば幸いです。",
};

export const zh: Copy = {
  name: "Hyeonjun Park", portfolio: "会计个人作品集", location: "加拿大安大略省多伦多",
  subtitle: "York University · BCom 会计专业", statement: "我是一名会计专业学生，关注企业如何管理现金，以及税收如何影响企业决策。", note: "Co-op 带薪实习项目 · 计划考取加拿大 CPA 资格",
  nav: ["个人简介", "经历", "教育背景", "技能", "项目", "联系"], skip: "跳转至正文", menu: "菜单", primaryNav: "主导航", mobileNav: "移动端导航", language: "网站显示语言",
  resume: "简历（英文）", linkedin: "LinkedIn", email: "电子邮件", back: "返回顶部", footer: "会计与税务 · 多伦多",
  title: "Hyeonjun Park | 迈向加拿大 CPA", description: "了解York University会计专业学生Hyeonjun Park的教育背景、经历，以及迈向加拿大CPA资格的学习历程。",
  about: ["我选择会计，是因为我想了解现金如何在企业中流动。", "在家人经营的熟食店工作时，核对现金、维护记录和协调库存，让我切实感受到数字与日常决策的联系。在York University学习加拿大所得税后，我希望进一步探索税务领域。", "我叫Hyeonjun Park，也使用Peter这个名字。我有家庭企业、客户服务和韩国海军服役的经历。在这些环境中，我学会了认真处理信息、清晰沟通并履行共同承担的责任。我计划考取加拿大CPA资格，也希望将这些工作习惯带到会计与税务团队中。"],
  experience: [
    { organization: "Paris Baguette", role: "客户服务代表", dates: "2025.06 – 2025.08", location: "加拿大安大略省多伦多", description: "作为新店开业团队的一员，处理POS交易及现金和银行卡付款。使用韩语和英语介绍产品，协助韩语顾客与团队沟通。" },
    { organization: "韩国海军", role: "海上军事口译及作战简报支持人员", dates: "2022.09 – 2024.05", location: "韩国仁川", description: "维护情况报告（SITREP），并准备供值班军官审核的作战简报材料。在美国工程师参与的舰艇维修过程中提供韩英口译，并支持韩法联合行动。担任宿舍班长期间，协助解决同伴间的矛盾并协调共同任务。" },
    { organization: "家庭经营的韩式熟食店", role: "门店经理", dates: "2022.02 – 2022.08", location: "韩国济州市", description: "每日将收银现金与前一日现金及门店记录进行核对，识别差异和记录遗漏。与其他门店经理协调库存，协助预防缺货。" },
  ],
  degree: "Bachelor of Commerce，会计专业 · Co-op 带薪实习项目", selected: "部分已完成课程", courses: ["加拿大所得税概论（An Overview of Canadian Income Taxation）", "高级电子表格（Advanced Spreadsheets）"], grade: "成绩：A", courseworkNote: "电子表格技能应用于课程作业、测验和考试。", skillsTitle: "技能与语言",
  skills: [["Microsoft Excel", "中级水平：数据透视表、数据清理和情景分析。"], ["门店运营", "每日现金核对、POS交易和库存协调。"], ["沟通", "韩英口译、作战简报支持和客户服务。"], ["使用语言", "韩语和英语 · 流利／双语"]],
  projects: [
    { status: "2026 · 持续维护", title: "CPA Journey 个人作品集", description: "使用AI辅助开发工具搭建并发布了本网站，用于展示我的会计教育背景、经历和职业成长。我持续维护网站内容。", tools: "Next.js · GitHub Pages" },
    { status: "计划中", title: "小型企业现金流与GST/HST跟踪工具", description: "计划使用虚构交易、加拿大税务局（CRA）规则和加拿大行业基准，开展现金流与GST/HST跟踪的学习项目。" },
  ],
  beyond: "会计之外", hobby: "Haedong Kumdo（海东剑道）", hobbyText: "我练习韩国剑术武道Haedong Kumdo约十年，持有4段教练资格。它是我会计学习之外生活中有意义的一部分。", contactIntro: "欢迎交流。", contactText: "期待与您交流会计和税务领域的机会、团队的工作，或您在CPA道路上积累的经验。",
};

export const dictionaries = { en, ko, ja, zh };
export type Locale = keyof typeof dictionaries;
export const localeInfo = {
  en: { code: "EN", label: "English", lang: "en", path: "/", og: "en_CA" },
  ko: { code: "KO", label: "한국어", lang: "ko", path: "/ko/", og: "ko_KR" },
  ja: { code: "JA", label: "日本語", lang: "ja", path: "/ja/", og: "ja_JP" },
  zh: { code: "ZH", label: "简体中文", lang: "zh-Hans", path: "/zh/", og: "zh_CN" },
} as const;
export const sectionIds = ["journey", "experience", "education", "skills", "projects", "contact"];

export type PageCopy = {
  labels: { home: string; about: string; interests: string; projects: string };
  hello: string; intro: string[]; explore: string; backHome: string; kumdoOrigin: string;
  readMore: { about: string; interests: string; projects: string };
  summaries: { about: string; interests: string; projects: string };
  descriptions: { about: string; interests: string; projects: string };
  aboutTitle: string; aboutIntro: string[]; experienceIntro: string; excelCourse: string; taxCourse: string;
  stories: [string[], string[], string[]];
  interestsTitle: string; interestsIntro: string; kumdo: string[]; golf: string; golfText: string[];
  projectsIntro: string; contact: string; contactTitle: string;
};

export const pageCopy: Record<Locale, PageCopy> = {
  en: {
    labels: { home: "Home", about: "About", interests: "Interests", projects: "Projects" },
    hello: "Hi, I’m Hyeonjun. You can also call me Peter.",
    intro: ["I study accounting at York University in Toronto. I’m particularly interested in tax and intend to pursue the Canadian CPA designation.", "Outside accounting, Haedong Kumdo has been part of my life for ten years. I’m also interested in golf."],
    explore: "A little more about me",
    backHome: "Back to home",
    kumdoOrigin: "My mom signed me up for Haedong Kumdo when I was five, hoping it would help me develop discipline. Over time, training helped me become calmer and more disciplined.",
    readMore: { about: "Read my story", interests: "More about life outside accounting", projects: "See what I’m working on" },
    summaries: { about: "Why I chose accounting, what I’m studying, and a closer look at my work in a family business, customer service and the Navy.", interests: "Ten years of Haedong Kumdo, an instructor qualification, and an interest in golf.", projects: "This website, which I continue to maintain, and a cash-flow learning project I’m planning." },
    descriptions: { about: "Hyeonjun Park on studying accounting at York University, developing an interest in tax, and working in a family business, customer service and the Navy.", interests: "Hyeonjun Park’s interests outside accounting: ten years of Haedong Kumdo, a 4th Dan and instructor qualification, and golf.", projects: "Hyeonjun Park’s ongoing portfolio website and planned small-business cash-flow and GST/HST learning project." },
    aboutTitle: "About me",
    taxCourse: "I studied the basics of Canadian personal and corporate income tax, including tax planning and GST.",
    excelCourse: "I used Excel to clean data, build PivotTables and compare scenarios in coursework, quizzes and exams.",
    aboutIntro: ["I chose accounting because I wanted to understand how cash moves through a business. At my family’s deli, keeping cash records and checking stock levels were part of the day’s work. Studying accounting helps me understand that side of a business more fully.", "I have a particular interest in tax. I’m in the BCom Accounting co-op stream and intend to pursue the Canadian CPA designation. I’d like to explore tax further through study and practical experience."],
    experienceIntro: "A few parts of my background, with more context than fits on a résumé.",
    stories: [
      ["I joined the opening team at a new Paris Baguette location in Toronto in 2025. Alongside processing cash and card payments, I helped Korean-speaking customers understand the products.", "Most of my coworkers had limited Korean fluency, so switching between Korean and English was a practical part of helping customers communicate with the team."],
      ["During my service in the Republic of Korea Navy, I maintained Situation Reports and helped prepare operational briefing materials for duty-officer review. Those records supported reporting through the command chain during naval operations.", "I also interpreted between Korean and English during vessel repairs with U.S. engineers and served as a linguist in Korea–France joint operations. For approximately six months, I was a Barracks Room Leader, helping resolve peer conflicts and coordinate shared duties and resources."],
      ["At my family’s deli in Jeju-si, I checked the till every day against prior-day cash and store records, looking for discrepancies or missing entries. I also coordinated stock with managers at other locations to help prevent shortages.", "I suggested a seven-day price promotion and set up a Naver Band group to share daily specials. These efforts contributed to approximately 10% higher monthly sales, recorded through the POS system, compared with the previous month."],
    ],
    interestsTitle: "Beyond accounting", interestsIntro: "A part of my life that doesn’t need to fit on a résumé.",
    kumdo: ["I’ve trained in Haedong Kumdo, a Korean sword martial art, for ten years. I hold a 4th Dan and an instructor qualification.", "I’ve competed at Mulimpia twice and won awards, including gold in paper cutting. Performing in team demonstrations also brought us closer together.", "I’ve also helped lead training sessions and provided instruction during demonstration competitions. When the head instructor was away, I would step in to lead training."],
    golf: "Golf", golfText: ["I started playing golf two years ago. I enjoy both getting out on the course and playing on an indoor simulator.", "My shots tend to draw, and figuring out why is a puzzle I’m still working on. My goal is to become a scratch golfer within the next five years, before I turn 30."],
    projectsIntro: "A place for what I’m working on and what I plan to explore next.",
    contactTitle: "Contact me here", contact: "I’d like to hear about your experience in accounting or tax and explore how I could contribute to your team. If you have any questions or would like to connect, feel free to reach out.",
  },
  ko: {
    labels: { home: "홈", about: "소개", interests: "관심사", projects: "프로젝트" },
    hello: "안녕하세요, 박현준입니다. Peter라고 불러도 좋아요.",
    intro: ["토론토의 York University에서 회계를 공부하고 있습니다. 특히 세무 분야에 관심이 있으며, 캐나다 CPA 자격 취득을 목표로 하고 있습니다.", "회계 밖에서는 10년 동안 해동검도를 수련해 왔습니다. 골프에도 관심이 있습니다."],
    explore: "조금 더 알아보기",
    backHome: "홈으로 돌아가기",
    kumdoOrigin: "다섯 살 때 어머니가 절제와 규율을 배울 수 있기를 바라며 해동검도를 시작하게 해 주셨습니다. 수련을 이어 가면서 점점 더 차분해졌고, 스스로를 다스리는 법도 배웠습니다.",
    readMore: { about: "제 이야기 읽기", interests: "회계 밖의 일상 더 알아보기", projects: "프로젝트 살펴보기" },
    summaries: { about: "회계를 선택한 이유와 공부하고 있는 내용, 가족 사업과 고객 서비스, 해군에서 맡았던 일을 소개합니다.", interests: "10년간의 해동검도 수련과 사범 자격, 그리고 골프에 대한 관심을 담았습니다.", projects: "지속적으로 관리하는 이 웹사이트와 계획 중인 현금흐름 학습 프로젝트입니다." },
    descriptions: { about: "York University에서 회계를 공부하는 박현준의 세무에 대한 관심과 가족 사업, 고객 서비스, 해군 경험을 소개합니다.", interests: "박현준의 회계 밖 관심사: 10년간의 해동검도 수련, 4단과 사범 자격, 골프.", projects: "박현준이 관리하는 포트폴리오 웹사이트와 계획 중인 소규모 사업 현금흐름 및 GST/HST 학습 프로젝트." },
    aboutTitle: "저를 소개합니다",
    taxCourse: "캐나다 개인·법인 소득세의 기초와 세무 계획, GST를 공부했습니다.",
    excelCourse: "수업 과제, 퀴즈와 시험에서 Excel로 데이터를 정리하고 피벗 테이블을 만들며 시나리오를 비교했습니다.",
    aboutIntro: ["기업에서 현금이 어떻게 흐르는지 이해하고 싶어 회계를 선택했습니다. 가족이 운영하는 델리에서는 현금 기록과 재고 확인이 일상의 업무였습니다. 회계를 공부하면서 사업의 이런 측면을 더 깊이 이해하고 싶습니다.", "특히 세무 분야에 관심이 있습니다. 현재 BCom 회계 전공 Co-op 과정에서 공부하고 있으며 캐나다 CPA 자격 취득을 목표로 합니다. 세무는 공부와 실무 경험을 통해 더 알아가고 싶은 분야입니다."],
    experienceIntro: "이력서 한 장에 담기 어려운 업무의 맥락을 조금 더 소개합니다.",
    stories: [
      ["2025년 토론토 Paris Baguette 신규 매장의 오픈 팀으로 일했습니다. 현금·카드 결제를 처리하는 일과 함께 한국어를 사용하는 고객에게 제품을 설명했습니다.", "대부분의 동료가 한국어에 익숙하지 않았기 때문에 한국어와 영어를 오가며 고객과 직원의 소통을 돕는 일이 실제 업무의 한 부분이었습니다."],
      ["대한민국 해군에서 복무하며 상황보고서를 관리하고 당직사관 검토를 위한 작전 브리핑 자료 준비를 도왔습니다. 이 기록과 자료는 해상 작전 중 지휘 계통의 보고를 뒷받침했습니다.", "미국 엔지니어들과의 함정 수리 과정에서 한영 통역을 제공했고 한불 연합작전에서도 통역 임무를 수행했습니다. 약 6개월 동안 생활반장으로서 동료 간 갈등 해결과 공동 업무 및 자원의 조정을 도왔습니다."],
      ["제주시에서 가족이 운영하는 델리의 시재를 매일 전일 현금과 매장 기록에 대조했습니다. 숫자가 맞을 것이라고 가정하지 않고 차이나 기록 누락을 확인하는 일이었습니다.", "다른 지점 관리자들과 재고를 조정하여 품절 예방을 돕기도 했습니다. 매장 운영에 필요한 현금과 상품을 확인하는 일상적인 책임이었습니다.", "7일간의 가격 할인 행사를 제안하고 일일 특가를 공유하는 Naver Band 고객 그룹을 만들었습니다. 이러한 활동은 월간 POS 기록 매출이 전월보다 약 10% 증가하는 데 기여했습니다."],
    ],
    interestsTitle: "회계 밖의 일상", interestsIntro: "이력서에 꼭 담지 않아도 되는 제 삶의 한 부분입니다.",
    kumdo: ["한국의 검술 무예인 해동검도를 10년 동안 수련했고, 4단과 사범 자격을 보유하고 있습니다.", "무림피아에 두 번 참가했으며 종이베기 금상을 비롯한 수상 경험이 있습니다. 팀 퍼포먼스도 기억에 남습니다. 함께 시범을 하면서 팀으로서 더 가까워지고 단합할 수 있었습니다.", "수련과 시범경연 때 지도를 맡기도 했습니다. 관장님이 자리를 비우면 전반적인 지도를 대신했습니다."],
    golf: "골프", golfText: ["2년 전 골프를 시작했습니다. 필드에 나가 라운드하는 것도, 스크린 골프를 치는 것도 좋아합니다.", "공이 드로우로 날아가는 편인데, 왜 그런지는 아직 풀어 가는 숙제입니다. 앞으로 5년 안에, 서른이 되기 전에 스크래치 골퍼가 되는 것이 목표입니다."], projectsIntro: "진행하고 있는 일과 앞으로 탐구하고 싶은 내용을 담았습니다.",
    contactTitle: "여기로 연락해 주세요", contact: "회계·세무 분야에서 쌓으신 경험을 듣고, 제가 팀에 어떻게 기여할 수 있을지도 함께 이야기해 보고 싶습니다. 궁금한 점이 있거나 이야기를 나누고 싶으시면 편하게 연락해 주세요.",
  },
  ja: {
    labels: { home: "ホーム", about: "自己紹介", interests: "趣味", projects: "プロジェクト" },
    hello: "こんにちは、Hyeonjunです。Peterと呼んでいただいても大丈夫です。",
    intro: ["トロントのYork Universityで会計を学んでいます。特に税務に関心があり、カナダのCPA資格取得を目指しています。", "会計以外では、Haedong Kumdoを10年間稽古してきました。ゴルフにも関心があります。"],
    explore: "もう少し詳しく",
    backHome: "ホームに戻る",
    kumdoOrigin: "5歳のとき、母が自律心を身につけてほしいと考え、Haedong Kumdoを始めさせてくれました。稽古を続けるうちに、少しずつ落ち着きが生まれ、自分を律することも身につきました。",
    readMore: { about: "これまでの歩みを読む", interests: "会計以外の生活を知る", projects: "取り組んでいることを見る" },
    summaries: { about: "会計を選んだ理由、学んでいること、家族の事業・接客・海軍で担当した仕事について。", interests: "10年間のHaedong Kumdoの稽古、指導者資格、そしてゴルフへの関心。", projects: "更新を続けているこのサイトと、計画中のキャッシュフロー学習プロジェクト。" },
    descriptions: { about: "York Universityで会計を学ぶHyeonjun Parkの税務への関心と、家族の事業・接客・海軍での経験。", interests: "Hyeonjun Parkの会計以外の関心事：10年間のHaedong Kumdo、4段と指導者資格、ゴルフ。", projects: "Hyeonjun Parkが継続更新するサイトと、計画中のキャッシュフロー・GST/HST学習プロジェクト。" },
    aboutTitle: "自己紹介",
    taxCourse: "カナダの個人所得税と法人所得税の基礎に加え、税務計画やGSTについて学びました。",
    excelCourse: "授業の課題、小テスト、試験でExcelを使い、データの整理、ピボットテーブルの作成、シナリオの比較に取り組みました。",
    aboutIntro: ["企業の中で現金がどのように流れるのかを理解したくて、会計を選びました。家族経営のデリでは、現金の記録や在庫の確認が日々の仕事でした。会計の勉強を通じて、事業のそうした側面をより深く理解したいと思っています。", "特に税務に関心があります。現在はBCom会計専攻のCo-op課程で学び、カナダのCPA資格取得を目指しています。税務は、勉強と実務経験を通じてさらに探究したい分野です。"],
    experienceIntro: "1枚の履歴書には収まりきらない、仕事の背景を少し紹介します。",
    stories: [
      ["2025年、トロントのParis Baguetteの新店舗オープンチームに加わりました。現金・カード決済を担当するほか、韓国語を話すお客様に商品を説明しました。", "ほとんどの同僚は韓国語に慣れていなかったため、韓国語と英語を使い分けてお客様とスタッフの意思疎通を手伝うことが、日常業務の一部でした。"],
      ["大韓民国海軍での勤務中は、状況報告書を管理し、当直士官の確認用の作戦ブリーフィング資料作成を補助しました。これらの記録や資料は、海上作戦中の指揮系統への報告を支えていました。", "米国のエンジニアによる艦艇修理で韓英通訳を務め、韓仏共同作戦にも通訳として参加しました。また、約6か月間、居室の班長として、仲間同士の対立の解決や共同作業・資源の調整を手伝いました。"],
      ["済州市にある家族経営のデリで、毎日レジの現金を前日の現金と店舗記録に照合しました。数字が合うと決めつけず、差異や記録漏れを見つけるための作業でした。", "他店舗のマネージャーと在庫を調整し、品切れの防止にも協力しました。店が必要とする現金と商品を把握する、日々の運営業務でした。", "7日間の値引きキャンペーンを提案し、日替わりの特売情報を共有するNaver Bandの顧客グループを作りました。これらの取り組みは、POSに記録された月間売上が前月比で約10%増加することに寄与しました。"],
    ],
    interestsTitle: "会計以外のこと", interestsIntro: "履歴書に収めなくてもよい、私の生活の一面です。",
    kumdo: ["韓国の剣術武道であるHaedong Kumdoを10年間稽古し、4段と指導者資格を取得しています。", "Mulimpiaに2回出場し、紙切り種目の金賞を含む受賞経験があります。チームでの演武も印象に残っています。一緒に演武することで、仲間との一体感が生まれました。", "稽古や演武大会では指導も担当しました。館長が不在のときは、代わりに全般的な指導を行っていました。"],
    golf: "ゴルフ", golfText: ["ゴルフは2年前に始めました。コースでのラウンドも、室内のシミュレーターでプレーするのも好きです。", "打球はドローになりやすく、その理由を探るのは今も取り組んでいる課題です。これから5年以内、30歳になる前にスクラッチゴルファーになることが目標です。"], projectsIntro: "取り組んでいることと、これから探究したいこと。",
    contactTitle: "ご連絡はこちら", contact: "会計や税務のお仕事でのご経験を伺い、私がチームにどのように貢献できるかについてもお話しできればと思います。ご質問やお話ししたいことがあれば、お気軽にご連絡ください。",
  },
  zh: {
    labels: { home: "首页", about: "关于我", interests: "兴趣", projects: "项目" },
    hello: "你好，我是Hyeonjun，也可以叫我Peter。",
    intro: ["我在多伦多的York University学习会计。我对税务尤其感兴趣，并计划考取加拿大CPA资格。", "会计之外，我练习Haedong Kumdo已有十年，也对高尔夫感兴趣。"],
    explore: "多了解一点",
    backHome: "返回首页",
    kumdoOrigin: "五岁时，妈妈让我开始练习Haedong Kumdo，希望我能学会自律。随着训练的持续，我渐渐变得更沉稳，也更能约束自己。",
    readMore: { about: "读读我的故事", interests: "了解会计之外的生活", projects: "看看我正在做什么" },
    summaries: { about: "我为什么选择会计、正在学习什么，以及在家庭企业、客户服务和海军中做过的工作。", interests: "十年的Haedong Kumdo练习、教练资格，以及对高尔夫的兴趣。", projects: "我持续维护的这个网站，以及计划中的现金流学习项目。" },
    descriptions: { about: "了解York University会计学生Hyeonjun Park对税务的兴趣，以及在家庭企业、客户服务和海军中的经历。", interests: "Hyeonjun Park在会计之外的兴趣：十年的Haedong Kumdo练习、4段和教练资格，以及高尔夫。", projects: "Hyeonjun Park持续维护的网站，以及计划中的现金流与GST/HST学习项目。" },
    aboutTitle: "关于我",
    taxCourse: "我学习了加拿大个人和企业所得税的基础知识，以及税务规划和GST。",
    excelCourse: "我在课程作业、测验和考试中使用Excel清理数据、创建数据透视表并比较不同情景。",
    aboutIntro: ["我选择会计，是因为想了解现金如何在企业中流动。在家人经营的熟食店里，现金记录和库存检查是日常工作的一部分。学习会计，让我能够更深入地理解企业的这一面。", "我对税务尤其感兴趣。目前我就读于BCom会计专业的Co-op项目，并计划考取加拿大CPA资格。税务是我希望通过学习和实践进一步探索的方向。"],
    experienceIntro: "这里补充一些一页简历中难以展开的工作背景。",
    stories: [
      ["2025年，我加入了多伦多Paris Baguette新店的开业团队。除了处理现金和银行卡付款，我还向使用韩语的顾客介绍产品。", "大多数同事不太熟悉韩语，因此在韩语和英语之间切换、帮助顾客与团队沟通，是我日常工作的一部分。"],
      ["在韩国海军服役期间，我维护情况报告，并协助准备供值班军官审核的作战简报材料。这些记录和材料支持海上行动中沿指挥链进行的汇报。", "我在美国工程师参与的舰艇维修中担任韩英口译，也在韩法联合行动中执行语言支持任务。我还担任了约六个月的宿舍班长，协助解决同伴间的矛盾，协调共同任务和资源。"],
      ["在济州市家人经营的熟食店，我每天将收银现金与前一日现金及门店记录进行核对。这是为了发现差异和记录遗漏，而不是默认数字都能对上。", "我也与其他门店经理协调库存，协助预防缺货。这些都是日常运营职责：掌握门店所依赖的现金和商品情况。", "我提议开展为期七天的价格促销，并建立Naver Band顾客群，分享每日特价。这些举措为门店POS记录的月销售额较前一个月增长约10%作出了贡献。"],
    ],
    interestsTitle: "会计之外", interestsIntro: "这是我生活中不必装进简历的一部分。",
    kumdo: ["我练习韩国剑术武道Haedong Kumdo已有十年，持有4段和教练资格。", "我参加过两次Mulimpia比赛，获得过包括斩纸项目金奖在内的奖项。团队演武也是其中一段经历：一起表演，让我们更加团结。", "我也协助带领训练，并在演武比赛中承担指导工作。馆长不在时，我会代为负责整体训练指导。"],
    golf: "高尔夫", golfText: ["我两年前开始打高尔夫。无论是下场打球，还是用室内高尔夫模拟器打球，我都很喜欢。", "我打出的球往往带有draw弧线，弄清原因仍是我在琢磨的一道题。我的目标是在未来五年内、满30岁之前，成为零差点球手。"], projectsIntro: "这里记录我正在做的事情，以及接下来计划探索的内容。",
    contactTitle: "在这里联系我", contact: "我想听听你在会计或税务领域的工作经历，也想聊聊我能为你的团队做些什么。如果你有任何问题，或想认识交流，欢迎随时联系我。",
  },
};
