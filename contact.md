---
layout: page
title: Contact
---

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  company: '',
  email: '',
  message: ''
})
const status = ref('idle') // idle | sending | sent | error

async function handleSubmit() {
  status.value = 'sending'
  try {
    const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.value.name,
        company: form.value.company,
        email: form.value.email,
        message: form.value.message,
      })
    })
    if (res.ok) {
      status.value = 'sent'
      form.value = { name: '', company: '', email: '', message: '' }
    } else {
      status.value = 'error'
    }
  } catch {
    status.value = 'error'
  }
}
</script>

<style>
.contact-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 4rem 2rem;
}
.contact-header {
  margin-bottom: 2.5rem;
}
.contact-label {
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  color: #bbb;
  text-transform: uppercase;
  margin-bottom: 0.8rem;
}
.contact-title {
  font-size: clamp(1.6rem, 3.5vw, 2.2rem);
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #111;
  margin-bottom: 0.8rem;
}
.contact-desc {
  font-size: 0.92rem;
  line-height: 1.8;
  color: #888;
}
.form-group {
  margin-bottom: 1.5rem;
}
.form-group label {
  display: block;
  font-size: 0.78rem;
  letter-spacing: 0.1em;
  color: #999;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 12px;
  background: rgba(255,255,255,0.6);
  backdrop-filter: blur(12px);
  font-size: 0.95rem;
  color: #111;
  outline: none;
  transition: border-color 0.3s;
  font-family: inherit;
}
.form-group input:focus,
.form-group textarea:focus {
  border-color: rgba(0,0,0,0.2);
}
.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #ccc;
}
.form-group textarea {
  min-height: 140px;
  resize: vertical;
}
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.submit-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  background: #111;
  color: #fff;
  border: 1px solid #111;
  border-radius: 100px;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: all 0.4s ease;
  box-shadow: 0 2px 16px rgba(0,0,0,0.12);
}
.submit-btn:hover {
  background: #333;
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
}
.submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}
.status-sent {
  padding: 2rem;
  text-align: center;
  background: rgba(255,255,255,0.55);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 20px;
}
.status-sent h3 {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.status-sent p {
  font-size: 0.9rem;
  color: #888;
}
.status-error {
  font-size: 0.85rem;
  color: #ef4444;
  margin-top: 1rem;
}
.form-note {
  font-size: 0.75rem;
  color: #bbb;
  margin-top: 1.5rem;
  letter-spacing: 0.02em;
}
@media (max-width: 600px) {
  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="contact-page">

<div class="contact-header">
  <div class="contact-label">Contact</div>
  <div class="contact-title">Let's talk</div>
  <p class="contact-desc">
    30分のミーティングで、仮想業務空間のデモとビジネスモデルをご説明します。<br/>
    下記フォームよりお気軽にお問い合わせください。
  </p>
</div>

<div v-if="status === 'sent'" class="status-sent">
  <h3>送信完了</h3>
  <p>お問い合わせありがとうございます。2営業日以内にご返信いたします。</p>
</div>

<form v-else @submit.prevent="handleSubmit">
  <div class="form-row">
    <div class="form-group">
      <label>お名前 *</label>
      <input v-model="form.name" type="text" placeholder="山田 太郎" required />
    </div>
    <div class="form-group">
      <label>会社名</label>
      <input v-model="form.company" type="text" placeholder="株式会社◯◯" />
    </div>
  </div>
  <div class="form-group">
    <label>メールアドレス *</label>
    <input v-model="form.email" type="email" placeholder="you@example.com" required />
  </div>
  <div class="form-group">
    <label>メッセージ *</label>
    <textarea v-model="form.message" placeholder="お問い合わせ内容をご記入ください" required></textarea>
  </div>
  <button type="submit" class="submit-btn" :disabled="status === 'sending'">
    <span>{{ status === 'sending' ? '送信中...' : '送信する' }}</span>
    <svg v-if="status !== 'sending'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
  </button>
  <p v-if="status === 'error'" class="status-error">送信に失敗しました。時間をおいて再度お試しください。</p>
  <p class="form-note">* は必須項目です</p>
</form>

</div>
