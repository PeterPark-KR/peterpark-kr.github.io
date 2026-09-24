import type { Locale } from "./translations";

// Public copy based only on the user-supplied handoff dated 2026-09-24.
export const ledgerCopy: Record<Locale, {
  status: string;
  title: string;
  rows: { label: string; text: string }[];
  tools: string;
}> = {
  en: {
    status: "2026 · Ongoing",
    title: "Personal Ledger",
    rows: [
      { label: "Why this project", text: "I wanted a clearer picture of my own spending: what I had spent, what I was planning to spend and what I still owed on a card. I’m developing a personal bookkeeping app to explore those questions and put my interest in careful record keeping into practice." },
      { label: "My approach", text: "I defined what I needed the app to do and used AI assistance to help develop it. Plans should stay separate from actual transactions, and paying off a card should not count as spending again. I want to be able to follow a total back to the entries behind it and understand a balance difference before deciding how to handle it." },
      { label: "How it works", text: "The app works with Korean or English text, manual entries and screenshots or receipt images that I choose to provide. Clear local text can save directly; ambiguous entries and AI interpretations stay outside totals until reviewed and confirmed. It includes monthly summaries, budgets, card-debt tracking, balance comparisons and backup/export tools. It runs locally without bank connections; optional AI interpretation sends selected input to OpenAI." },
      { label: "What I want to learn", text: "I want to get better at turning an everyday problem into clear requirements and checking whether the resulting tool follows them. For me, the accounting connection is in those choices: what counts as spending, what needs review and what evidence helps explain a difference. AI supports the development and optional input interpretation; explicit calculation rules handle the numbers." },
      { label: "Where it stands", text: "Personal Ledger is a working name, and development is ongoing. The September 24, 2026 review records 88 automated tests passed, run by Codex with fictional and isolated data, covering bookkeeping rules, saving and restoring records, and interface logic. Live AI interpretation, receipt-extraction quality and the latest app screens still need verification. Duplicate checks support review, and reconciliation investigation notes currently last only for the session. This remains a local learning project." },
    ],
    tools: "JavaScript · Node.js · SQLite · HTML/CSS · Optional OpenAI Responses API",
  },
  ko: {
    status: "2026 · 진행 중",
    title: "Personal Ledger",
    rows: [
      { label: "시작한 이유", text: "이미 쓴 돈, 앞으로 쓸 계획인 돈, 아직 갚아야 할 카드 금액을 구분해 제 지출을 더 명확하게 이해하고 싶었습니다. 이런 질문을 살펴보고, 기록을 꼼꼼하게 다루려는 관심을 일상에서 실천하기 위해 개인 가계부를 개발하고 있습니다." },
      { label: "접근 방식", text: "앱에 필요한 기능과 처리 원칙을 정하고 AI의 도움을 받아 개발을 진행했습니다. 계획은 실제 거래와 구분하고, 카드 대금을 갚을 때는 지출로 다시 계산하지 않도록 했습니다. 합계의 바탕이 되는 기록을 확인하고, 잔액 차이가 생겼을 때는 어떻게 처리할지 정하기 전에 그 이유를 살펴볼 수 있는 도구를 만들고 싶습니다." },
      { label: "사용 흐름", text: "제가 직접 제공하는 한국어·영어 문장, 수동 입력, 스크린샷이나 영수증 이미지를 기록으로 정리합니다. 명확한 로컬 문장은 바로 저장될 수 있고, 모호한 입력과 AI 해석은 검토·확정 전까지 합계에서 제외됩니다. 월별 요약, 예산, 카드 부채 추적, 잔액 비교와 백업·내보내기 기능을 갖추고 있습니다. 은행 연동 없이 로컬에서 실행되며, 선택적 AI 해석을 사용하면 해당 입력이 OpenAI로 전송됩니다." },
      { label: "배우고 싶은 점", text: "일상적인 문제를 구체적인 요구사항으로 정리하고, 만들어진 도구가 그 원칙을 따르는지 확인하는 능력을 기르고 싶습니다. 무엇을 지출로 볼지, 어떤 기록에 검토가 필요한지, 차이를 설명하려면 어떤 근거가 있어야 하는지 고민하는 과정이 회계 공부와 연결됩니다. AI는 개발과 선택적 입력 해석을 돕고, 숫자는 명시적인 계산 규칙으로 처리합니다." },
      { label: "현재 단계", text: "Personal Ledger는 작업명이며 계속 개발 중입니다. 2026년 9월 24일 검토 자료에는 Codex가 가상·격리 자료로 실행한 자동화 테스트 88개 통과가 기록되어 있습니다. 부기 규칙, 기록 저장·복원과 화면 동작 로직을 다룬 결과입니다. 실제 AI 해석, 영수증 추출 품질과 최신 앱 화면은 추가 검증이 필요합니다. 중복 확인은 검토를 돕는 기능이며 대사 조사 메모는 현재 세션 동안만 유지됩니다. 로컬 개인 학습 프로젝트로 진행하고 있습니다." },
    ],
    tools: "JavaScript · Node.js · SQLite · HTML/CSS · 선택적 OpenAI Responses API",
  },
  ja: {
    status: "2026 · 継続中",
    title: "Personal Ledger",
    rows: [
      { label: "取り組む理由", text: "すでに使ったお金、これから使う予定のお金、まだ返済していないカード残高を分けて、自分の支出を把握したいと思いました。その疑問を探り、記録を丁寧に扱うことへの関心を日常で実践するため、個人用の家計簿アプリを開発しています。" },
      { label: "進め方", text: "必要な機能と処理方針を定め、AIの支援を受けて開発を進めました。計画は実際の取引と分け、カード返済を再び支出に計上しないようにしています。合計の元になった記録を確認し、残高に差があれば、処理を決める前にその理由を調べられる道具を目指しています。" },
      { label: "使い方", text: "自分で提供する韓国語・英語の文章、手入力、スクリーンショットやレシート画像を記録に整理します。明確なローカル入力は直接保存される場合があり、曖昧な入力やAIの解釈は確認・確定するまで集計から除外されます。月次集計、予算、カード債務の記録、残高比較、バックアップ・出力機能があります。銀行とは連携せずローカルで動作し、任意のAI解釈を使う場合は選択した入力をOpenAIへ送信します。" },
      { label: "学びたいこと", text: "身近な問題を具体的な要件に整理し、できた道具がその方針に沿っているかを確認する力を伸ばしたいと考えています。何を支出とするか、どの記録に確認が必要か、差を説明するにはどんな根拠が必要か。その判断が会計の学びにつながります。AIは開発と任意の入力解釈を支援し、数値は明示的な計算規則で処理します。" },
      { label: "現在の状況", text: "Personal Ledgerは仮称で、開発を続けています。2026年9月24日の確認資料には、Codexが架空・隔離データで実行した自動テスト88件の合格が記録されています。対象は記帳規則、記録の保存・復元、画面操作のロジックです。実際のAI解釈、レシート抽出品質、最新のアプリ画面は追加検証が必要です。重複確認は判断を補助するもので、照合調査のメモは現在セッション中のみ保持されます。ローカルの個人学習プロジェクトとして取り組んでいます。" },
    ],
    tools: "JavaScript · Node.js · SQLite · HTML/CSS · 任意のOpenAI Responses API",
  },
  zh: {
    status: "2026 · 持续进行",
    title: "Personal Ledger",
    rows: [
      { label: "为什么做这个项目", text: "我想更清楚地了解自己的支出：哪些钱已经花了，哪些只是计划要花，还有多少信用卡欠款。为此，我正在开发一个个人记账工具，把对认真管理记录的关注落实到日常生活中。" },
      { label: "我的方法", text: "我确定了所需功能和处理原则，并借助AI推进开发。计划应与实际交易分开，偿还信用卡欠款不应再次计为支出。我希望能够从合计追溯到具体记录，并在决定如何处理余额差异之前，先了解差异的原因。" },
      { label: "使用流程", text: "应用处理我主动提供的韩语或英语文本、手动输入、截图或收据图片。明确的本地文本可以直接保存；模糊输入和AI解读在审核确认前不会计入合计。已具备月度汇总、预算、信用卡债务记录、余额比较及备份导出功能。应用在本地运行，不连接银行；使用可选AI解读时，选定的输入会发送至OpenAI。" },
      { label: "我希望学到什么", text: "我希望提高把日常问题整理成明确需求、再检查工具是否遵循这些原则的能力。什么算支出，哪些记录需要审核，解释差异需要哪些依据——这些选择把项目与会计学习联系起来。AI辅助开发和可选的输入解读，数值则由明确的计算规则处理。" },
      { label: "目前进展", text: "Personal Ledger是暂定名称，项目仍在开发中。2026年9月24日的审查资料记录了Codex使用虚构和隔离数据运行的88项自动化测试全部通过，范围包括记账规则、记录存储与恢复，以及界面交互逻辑。真实AI解读、收据提取质量和最新应用界面仍需验证。重复交易检查仅辅助审核，核对调查笔记目前仅在当前会话中保留。这仍是一个本地个人学习项目。" },
    ],
    tools: "JavaScript · Node.js · SQLite · HTML/CSS · 可选OpenAI Responses API",
  },
};
