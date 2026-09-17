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
  description: "Follow Hyeonjun Park's journey from York University Accounting student to CPA, shaped by discipline, bilingual communication, and practical business experience.",
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
