---
layout: page
title: Profile
---

<style>
.profile-page {
  max-width: 700px;
  margin: 0 auto;
  padding: 4rem 2rem;
}
.profile-header {
  text-align: center;
  margin-bottom: 3rem;
}
.profile-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(147,51,234,0.15), rgba(59,130,246,0.15));
  margin: 0 auto 1.5rem;
}
.profile-name {
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 0.3rem;
}
.profile-name-en {
  font-size: 0.9rem;
  color: #999;
  letter-spacing: 0.08em;
  margin-bottom: 0.3rem;
}
.profile-role {
  font-size: 0.9rem;
  color: #999;
  letter-spacing: 0.08em;
}
.profile-section {
  margin-bottom: 2.5rem;
}
.profile-section h2 {
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  color: #bbb;
  text-transform: uppercase;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(0,0,0,0.06);
}
.profile-section p {
  font-size: 0.95rem;
  line-height: 1.9;
  color: #555;
}
.career-item {
  display: flex;
  gap: 1.2rem;
  margin-bottom: 1.5rem;
  align-items: flex-start;
}
.career-year {
  font-size: 0.78rem;
  color: #bbb;
  min-width: 80px;
  padding-top: 2px;
  font-family: monospace;
  white-space: nowrap;
}
.career-detail {
  font-size: 0.92rem;
  color: #555;
  line-height: 1.7;
}
.career-detail strong {
  color: #111;
  font-weight: 600;
}
.career-detail .career-role {
  display: block;
  font-size: 0.82rem;
  color: #888;
  margin-top: 0.2rem;
}
.skill-grid {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 0.8rem 1.5rem;
  font-size: 0.9rem;
}
.skill-name {
  color: #111;
  font-weight: 600;
}
.skill-desc {
  color: #666;
  line-height: 1.6;
}
.strength-item {
  margin-bottom: 1.2rem;
}
.strength-item h3 {
  font-size: 0.95rem;
  font-weight: 600;
  color: #111;
  margin-bottom: 0.4rem;
}
.strength-item p {
  font-size: 0.88rem;
  line-height: 1.8;
  color: #666;
}
.profile-links {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}
.profile-links a {
  font-size: 0.85rem;
  color: #999;
  text-decoration: none;
  letter-spacing: 0.04em;
  transition: color 0.3s;
}
.profile-links a:hover {
  color: #111;
}
@media (max-width: 600px) {
  .career-item { flex-direction: column; gap: 0.3rem; }
  .career-year { min-width: auto; }
  .skill-grid { grid-template-columns: 1fr; }
}
</style>

<div class="profile-page">

<div class="profile-header">
  <div class="profile-avatar"></div>
  <div class="profile-name">早瀬 基二</div>
  <div class="profile-name-en">Motoji Hayase</div>
  <div class="profile-role">Founder & CEO, Soul.lock</div>
</div>

<div class="profile-section">
  <h2>About</h2>
  <p>
    経営視点と実装力を兼ね備え、ビジネスとエンジニアリングを横断する「ボトルネックのない」事業推進者。15年にわたるWebマーケティング業界での経営・営業・コンサルティング・開発の実務経験を持ち、AIを活用した新規事業の企画から実装までを一人で遂行する。
  </p>
</div>

<div class="profile-section">
  <h2>Career</h2>
  <div class="career-item">
    <span class="career-year">2026 —</span>
    <div class="career-detail">
      <strong>Soul.lock</strong> 創業
      <span class="career-role">Founder & CEO — AIネイティブな仮想業務空間の構想・開発</span>
    </div>
  </div>
  <div class="career-item">
    <span class="career-year">2015 — 2025</span>
    <div class="career-detail">
      <strong>株式会社フォークラス</strong>
      <span class="career-role">代表取締役 — 事業戦略立案、PL管理、営業、PM、エンジニアリング全般。Laravel業務システム、WordPress活用の各種サービス開発を主導</span>
    </div>
  </div>
  <div class="career-item">
    <span class="career-year">2011 — 2015</span>
    <div class="career-detail">
      <strong>株式会社フォークラス</strong>
      <span class="career-role">SEO営業 → WEBマーケティング全般、SEM広告運用、WEBメディア立ち上げ、サイト開発</span>
    </div>
  </div>
  <div class="career-item">
    <span class="career-year">2008 — 2010</span>
    <div class="career-detail">
      <strong>株式会社ミロク情報サービス</strong>（東証プライム）
      <span class="career-role">ソリューション営業 — 中堅・中小企業向け会計システム提案。財務・会計知識を習得（簿記2級取得）</span>
    </div>
  </div>
  <div class="career-item">
    <span class="career-year">2005 — 2008</span>
    <div class="career-detail">
      <strong>オープンアソシエイツ株式会社</strong>（東証一部）
      <span class="career-role">アナリスト / プレセールス — クライアント企業の新規事業立ち上げ支援。経営層へのトップアプローチによる市場性検証</span>
    </div>
  </div>
</div>

<div class="profile-section">
  <h2>Skills</h2>
  <div class="skill-grid">
    <span class="skill-name">PHP / Laravel</span>
    <span class="skill-desc">業務システム開発、8年以上の実務経験</span>
    <span class="skill-name">React / Next.js</span>
    <span class="skill-desc">フロントエンド開発、SPA構築</span>
    <span class="skill-name">WordPress</span>
    <span class="skill-desc">プラグイン開発、業務システム基盤としての深い活用</span>
    <span class="skill-name">HTML/CSS/JS</span>
    <span class="skill-desc">WEBサイトのフルスクラッチ構築、8年以上</span>
    <span class="skill-name">AI活用</span>
    <span class="skill-desc">AI駆動開発、プロダクト設計へのAI統合</span>
    <span class="skill-name">経営・営業</span>
    <span class="skill-desc">事業戦略、PL管理、法人営業、コンサルティング</span>
  </div>
</div>

<div class="profile-section">
  <h2>Strengths</h2>
  <div class="strength-item">
    <h3>経営視点 × 実装力</h3>
    <p>KPIを意識したビジネス課題の理解から、フロント・バックエンド双方の実装まで一貫して対応。「仕様の壁」や「部門間の調整ロス」を排除し、プロジェクトを最速で推進する。</p>
  </div>
  <div class="strength-item">
    <h3>AI活用型 0→1</h3>
    <p>AIを活用することで、企画・設計・開発・運用を一人で完結。プロトタイピングから事業立ち上げまで、技術的な壁なく実行できる。</p>
  </div>
</div>

</div>
