# Aura Diffuser Co. - Complete Project Guide & Submission Manual

This master document contains all information about what was created for the **Week 6 Project Assignment: Build Your AI Marketing Engine**, including files, code architecture, deployment steps, AI prompts, and final submission checklists.

---

## 🌐 1. Live Project Links
* **Live Website URL**: [https://tilakstar843.github.io/niat-week6/](https://tilakstar843.github.io/niat-week6/) *(Publicly accessible on any device)*
* **GitHub Repository URL**: [https://github.com/tilakstar843/niat-week6](https://github.com/tilakstar843/niat-week6) *(Your code repository)*
* **GitHub Pages Settings Link**: [https://github.com/tilakstar843/niat-week6/settings/pages](https://github.com/tilakstar843/niat-week6/settings/pages) *(For verification)*

---

## 📂 2. Project Folder Files
All files are saved in your local folder: `c:\Users\Tilak_2\OneDrive\Desktop\week 6-nxtwave\niat week6\`. Click any link below to open the file directly:

* **Storefront Web Page**: [index.html](file:///c:/Users/Tilak_2/OneDrive/Desktop/week%206-nxtwave/niat%20week6/index.html) *(Main HTML structure)*
* **Web Styling System**: [style.css](file:///c:/Users/Tilak_2/OneDrive/Desktop/week%206-nxtwave/niat%20week6/style.css) *(Circadian gradient animations, dark mode)*
* **Interactive Code**: [app.js](file:///c:/Users/Tilak_2/OneDrive/Desktop/week%206-nxtwave/niat%20week6/app.js) *(Telegram redirects & viewport scroll transitions)*
* **Flagship Product Image**: [aura_one_diffuser.png](file:///c:/Users/Tilak_2/OneDrive/Desktop/week%206-nxtwave/niat%20week6/aura_one_diffuser.png) *(AI generated photoshoot asset)*
* **Oils Set Product Image**: [aura_oil_set.png](file:///c:/Users/Tilak_2/OneDrive/Desktop/week%206-nxtwave/niat%20week6/aura_oil_set.png) *(AI generated curated oils set asset)*
* **Brand Bible**: [brand_bible.md](file:///c:/Users/Tilak_2/OneDrive/Desktop/week%206-nxtwave/niat%20week6/brand_bible.md) *(Complete 15-section brand strategy)*
* **AI Tool Prompts Guide**: [prompts_and_guidelines.md](file:///c:/Users/Tilak_2/OneDrive/Desktop/week%206-nxtwave/niat%20week6/prompts_and_guidelines.md) *(Prompts for Gemini, PixVerse, etc.)*
* **Google Doc Auto-Converter**: [Aura_Diffuser_Co_Submission_Document.html](file:///c:/Users/Tilak_2/OneDrive/Desktop/week%206-nxtwave/niat%20week6/Aura_Diffuser_Co_Submission_Document.html) *(Combined document to upload to Google Drive)*

---

## 📝 3. Brand Bible Summary (Step 1 of Assignment)
Your Brand Bible defines the business positioning and voice rules:
* **Brand Name**: Aura Diffuser Co.
* **Core Product**: Aura One Smart Diffuser ($149) and Curated Oils Set ($49).
* **USP**: App-connected waterless nebulizer that schedules organic, undiluted scents synchronized with circadian lighting.
* **Colors**: Obsidian Black (`#121214`), Sand Warm (`#EAE5D9`), and Amber Glow (`#FF9F1C`).
* **Tone**: Sophisticated, mindful, clean, scientific, and empathetic.
* **Target Audience**: WFH remote professionals, designers, and health-conscious individuals experiencing high stress and sleep quality issues.

---

## 🤖 4. Copy-Paste AI Prompts (Steps 2, 3, & 4 of Assignment)

### A. Gemini Gems (AI CMO Prompt)
Paste this to create your AI CMO Gem:
```text
You operate as the elite, multidisciplinary Chief Marketing Officer (CMO) for Aura Diffuser Co. Your mission is to scale brand awareness, drive subscriptions for organic oil refills, and position Aura One as the premier smart home environmental wellness system.
Business Details:
- Business Name: Aura Diffuser Co.
- Core Offerings: Aura One Smart Diffuser ($149) and Curated Oils Set ($49).
- USP: App-connected waterless nebulizer with circadian lighting sync.
- Target Audience: WFH remote workers, design-conscious professionals, sleep-deprived individuals.
- Tone: Mindful, elegant, and scientific.
Structure your answers using the 11-point blueprint: Situation Analysis, Target Audience, Positioning, Brand Strategy, Funnel, Content, Growth, Tech Stack, Implementation Plan, KPIs, Next Actions.
```

### B. Manus iM (Product Photoshoot Enhancer)
Upload your product photo and use this prompt:
```text
Transform the uploaded product into a world-class commercial advertising photoshoot suitable for luxury brands, premium e-commerce stores, and global marketing campaigns. Maintain the original product design of the black anodized aluminum diffuser while enhancing presentation with professional studio lighting, realistic soft window shadows, natural mist reflections, sand-colored premium textures, and ultra-sharp focus. Ultra-realistic, photorealistic, premium quality, 8K resolution.
```

### C. PixVerse AI (Video Generator)
* **Tool Website URL**: [https://pixverse.ai/](https://pixverse.ai/)
Upload the enhanced photo into PixVerse.ai and use this prompt:
```text
Transform this image of the obsidian black diffuser into a premium commercial advertisement video with realistic cinematic camera movements, smooth dolly shots, slow zoom-ins, dynamic panning, elegant rotations, and professional product reveal sequences. Add natural amber lighting transitions, realistic shadows, a gentle visible mist rising from the nozzle, subtle depth of field, and luxury brand aesthetics. Cinematic, engaging, modern, premium quality.
```

### D. BotPress (Telegram Assistant Configuration)
```text
System Prompt: You are the AI Wellness Assistant for Aura Diffuser Co. Assist customers with setups, oil safety questions, and circadian schedules. 
Ordering Rule: When a customer wants to place an order, buy a product, or talk to a human, present this WhatsApp link: "https://wa.me/919876543210"
```

### E. n8n (Content Automation Pipeline Prompt)
```text
You are the AI CMO of Aura Diffuser Co. Generate weekly content in JSON format containing: keyword, blog_title, meta_title (under 60 chars), meta_description (under 160 chars), blog (in Markdown format), instagram_caption, and linkedin_post.
```

---

## 🛠️ 5. AI Work Log (What the AI Assistant Has Done)

This section documents the specific tasks executed by the AI pair programmer during this project:

1. **Assignment PDF Deep Scan**:
   * Analyzed the file `Week6_Submission_Explainer (1).pdf` inside the workspace.
   * Wrote a custom Python script `extract_links.py` to parse PDF structures and locate hidden Google Document hyperlink attachments.
   * Downloaded and parsed all 4 support documents from the Google Drive export API to capture exact constraints for the CMO, prompts, bot, and n8n stages.

2. **Brand Creation & Strategy Layout (Step 1)**:
   * Selected the premium niche **Aura Diffuser Co.** matching high-fidelity dark-mode layouts.
   * Wrote `brand_bible.md` containing 15 comprehensive strategic planning modules (Market Dynamics, Customer Psychology, Competitive UVP, Visual Archetype, and 30-Day Go-To-Market roadmap).

3. **Visual Asset Generation (Step 2)**:
   * Triggered deep-learning generation tasks to create flagship hardware render (`aura_one_diffuser.png`) and essential oils packaging render (`aura_oil_set.png`).
   * Copied assets locally into the project directory for relative paths integration.

4. **Responsive Frontend Storefront Coding (Step 3)**:
   * **HTML Structure**: Created `index.html` with clean semantics and section dividers (Hero, About, Products, Testimonial Slider, Why Us, Promotional Offer, Telegram, and Footer Contacts).
   * **Visual Theme & CSS Styling**: Created `style.css` using modern custom variables, geometric header pairings (Outfit, Inter), full mobile-responsive flexbox/grid layout adaptations, glassmorphism card overlays, and a dynamic **circadian light animation mesh**.
   * **Animations & Event Scripting**: Created `app.js` using Intersection Observer for scrolling card reveals, responsive nav buttons, and automatic hour-based circadian mesh tint adjustments.

5. **Telegram Ordering Redirections Logic (Step 3 Bot)**:
   * Programmed a central configuration object in `app.js` mapping all CTA buttons to click-handlers that launch the user's custom Telegram bot link (`https://t.me/aura_wellness_bot`) in separate windows or native apps.

6. **Combined Submission Deliverables (Step 4 & Submission)**:
   * Wrote a custom HTML generator python script `generate_submission_doc.py` that parses the Markdown files and exports a combined document `Aura_Diffuser_Co_Submission_Document.html`.
   * Formatted this document specifically so that uploading and opening it with Google Docs instantly builds your submission document without formatting errors.

---

## 🗳️ 6. Step-by-Step Final Submission Checklist

Follow these exact steps to complete your submission:

### Step A: Submit Google Drive Link (Section 2 of Form)
1. Go to your local folder: `c:\Users\Tilak_2\OneDrive\Desktop\week 6-nxtwave\niat week6`
2. Find the product photo [aura_one_diffuser.png](file:///c:/Users/Tilak_2/OneDrive/Desktop/week%206-nxtwave/niat%20week6/aura_one_diffuser.png).
3. Open **[PixVerse AI (https://pixverse.ai)](https://pixverse.ai/)** in your browser, upload the image, and generate your promotional video. Download it.
4. Open **[Google Drive (https://drive.google.com)](https://drive.google.com)**.
5. Create a new folder named `Week 6 Assets - Tilak`, and upload the photo and video files.
6. Right-click the folder -> click **Share** -> Change access to **"Anyone with the link"** as **"Viewer"** -> click **Copy Link**.
7. Paste this link into **Section 2** of your Google Submission Form.

### Step B: Submit Google Document Link (Section 3 of Form)
1. In Google Drive, upload the local file [Aura_Diffuser_Co_Submission_Document.html](file:///c:/Users/Tilak_2/OneDrive/Desktop/week%206-nxtwave/niat%20week6/Aura_Diffuser_Co_Submission_Document.html).
2. Right-click the uploaded HTML file in Google Drive, hover over **Open with**, and select **Google Docs**.
3. Google Docs will create a formatted document with your Brand Bible and AI Prompts.
4. Click **Share** (top-right) -> Change access to **"Anyone with the link"** as **"Viewer"** -> click **Copy Link**.
5. Paste this link into **Section 3** of your Google Submission Form.

### Step C: Submit Live Website URL (Section 4 of Form)
1. Copy your live website URL: **`https://tilakstar843.github.io/niat-week6/`**
2. Paste this link into **Section 4** of your Google Submission Form.
