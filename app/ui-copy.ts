import type { Locale } from "./translations";

export const uiCopy: Record<Locale, {
  role: string; onThisPage: string; purpose: string; approach: string; status: string;
  projects: [ { purpose: string; status: string }, { purpose: string; status: string } ];
}> = {
  en: {
    role: "Accounting co-op student · Interested in tax",
    onThisPage: "On this page", purpose: "Why this project", approach: "My approach", status: "Where it stands",
    projects: [
      { purpose: "I wanted one place to connect my accounting studies with the experiences that led me here.", status: "The site is live in four languages, with separate pages for my background, projects and interests. I continue to refine it as my experience grows." },
      { purpose: "I want to better understand how everyday transactions connect cash flow and sales tax in a small business.", status: "Planning only. There is no completed tracker or tested result to share yet." },
    ],
  },
  ko: {
    role: "회계 전공 Co-op 학생 · 세무 분야에 관심",
    onThisPage: "이 페이지에서", purpose: "시작한 이유", approach: "접근 방식", status: "현재 단계",
    projects: [
      { purpose: "회계 공부와 지금의 저를 만든 경험을 한곳에서 연결해 소개하고 싶었습니다.", status: "현재 네 가지 언어로 공개되어 있으며 소개, 프로젝트, 관심사를 각각의 페이지에서 볼 수 있습니다. 경험이 쌓이는 대로 계속 다듬고 있습니다." },
      { purpose: "소규모 사업의 일상적인 거래가 현금흐름 및 판매세와 어떻게 연결되는지 더 깊이 이해하고 싶습니다.", status: "아직 계획 단계로, 완성된 도구나 검증한 결과는 없습니다." },
    ],
  },
  ja: {
    role: "会計専攻のCo-op学生 · 税務に関心",
    onThisPage: "このページの内容", purpose: "取り組む理由", approach: "進め方", status: "現在の状況",
    projects: [
      { purpose: "会計の学びと、今の自分につながる経験を一か所で紹介したいと思いました。", status: "現在は4言語で公開し、経歴、プロジェクト、趣味をそれぞれのページで紹介しています。経験を重ねながら更新しています。" },
      { purpose: "小規模事業の日々の取引が、キャッシュフローや売上税とどうつながるのかを理解したいと考えています。", status: "まだ計画段階です。完成したツールや検証済みの結果はありません。" },
    ],
  },
  zh: {
    role: "会计专业Co-op学生 · 关注税务领域",
    onThisPage: "本页内容", purpose: "为什么做这个项目", approach: "我的方法", status: "目前进展",
    projects: [
      { purpose: "我想在一个地方，把会计学习与塑造了今天的我的经历联系起来。", status: "网站已提供四种语言版本，分别介绍我的背景、项目和兴趣。我会随着经验的积累继续更新。" },
      { purpose: "我希望更好地理解小企业日常交易与现金流及销售税之间的联系。", status: "目前仅处于计划阶段，尚无完成的工具或经过验证的结果。" },
    ],
  },
};
