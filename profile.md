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
  margin-bottom: 1.2rem;
  align-items: flex-start;
}
.career-year {
  font-size: 0.8rem;
  color: #bbb;
  min-width: 60px;
  padding-top: 2px;
  font-family: monospace;
}
.career-detail {
  font-size: 0.92rem;
  color: #555;
  line-height: 1.6;
}
.career-detail strong {
  color: #111;
  font-weight: 600;
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
</style>

<div class="profile-page">

<div class="profile-header">
  <div class="profile-avatar"></div>
  <div class="profile-name">Founder Name</div>
  <div class="profile-role">Founder & CEO</div>
</div>

<div class="profile-section">
  <h2>About</h2>
  <p>
    プロフィール文をここに記載します。事業に対する想い、バックグラウンド、専門領域などを簡潔にまとめます。
  </p>
</div>

<div class="profile-section">
  <h2>Career</h2>
  <div class="career-item">
    <span class="career-year">2026</span>
    <div class="career-detail"><strong>SOUL.lock</strong> 創業</div>
  </div>
  <div class="career-item">
    <span class="career-year">20XX</span>
    <div class="career-detail"><strong>前職の会社名</strong> — 役職・担当領域</div>
  </div>
  <div class="career-item">
    <span class="career-year">20XX</span>
    <div class="career-detail"><strong>それ以前の経歴</strong> — 役職・担当領域</div>
  </div>
</div>

<div class="profile-section">
  <h2>Skills & Expertise</h2>
  <p>
    AI/ML・プロダクト開発・ビジネス設計など、関連するスキルセットをここに記載します。
  </p>
</div>

<div class="profile-section">
  <h2>Links</h2>
  <div class="profile-links">
    <a href="#">LinkedIn →</a>
    <a href="#">X (Twitter) →</a>
  </div>
</div>

</div>
