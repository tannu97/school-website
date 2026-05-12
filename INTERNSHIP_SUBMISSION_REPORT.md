# Web Development Internship Assignment Report

## Assignment Understanding

The assignment asks applicants to search Google for `Boarding schools in India`, find the relevant Ecole result, review the page, and recommend changes for page speed and SEO optimization.

The official site identified for the project is:

`https://www.ecoleglobale.com/`

The official page represents Ecole Globale International Girls' School in Dehradun, a fully residential girls boarding school with CBSE and Cambridge curriculum, admissions information, student life, pastoral care, latest updates, testimonials, FAQ, and contact information.

## What I Built

I created a complete React and Node project that follows the official site's subject, structure, and admission intent, while improving clarity and performance readiness.

Included improvements:

- Official school identity: Ecole Globale International Girls' School.
- Parent-focused homepage for girls boarding school admissions.
- Clear navigation based on the official site sections: About, Admission, Academics, Student Life, Pastoral Care, News, Contact.
- Admissions enquiry form for registration, application, fees, hostel, and campus tour queries.
- Contact form with official-style address, phone, email, and website details.
- SEO-focused title, meta description, keywords, canonical tag, Open Graph tags, and structured data.
- `robots.txt` and `sitemap.xml`.
- Fast React production build with route-level code splitting.
- Backend fallback storage so admissions/contact forms work even without MySQL.

## SEO Audit and Recommendations

### 1. Improve Search Intent Matching

The keyword `Boarding schools in India` has strong parent intent. Parents want information about curriculum, admission, fees, hostel, safety, activities, results, and contact options.

Recommendation:

- Make the homepage headline and first screen clearly mention girls boarding school, Dehradun, admissions, CBSE, Cambridge, and residential care.
- Add dedicated sections for admission procedure, fee structure, hostel facilities, safety, activities, and FAQ.

### 2. Strengthen Metadata

Recommendation:

- Use keyword-focused but natural page titles.
- Keep descriptions under roughly 155-160 characters where possible.
- Use different meta titles/descriptions for About, Academics, Admissions, Student Life, and Contact pages in production.

Suggested homepage title:

`Ecole Globale International Girls' School | Girls Boarding School in Dehradun`

### 3. Add Structured Data

Recommendation:

- Add `School` or `EducationalOrganization` schema.
- Add `FAQPage` schema for common parent questions.
- Add `BreadcrumbList` schema for inner pages.

### 4. Improve Internal Linking

Recommendation:

- Link admission-related sections to the enquiry form.
- Link academics sections to CBSE and Cambridge curriculum content.
- Link student life to sports, arts, trips, exchange programme, and community service.
- Link FAQ answers to relevant pages.

### 5. Add Crawl Support

Completed in this project:

- Added `robots.txt`.
- Added `sitemap.xml`.

Recommendation:

- Submit sitemap in Google Search Console after deployment.

## Page-Speed Audit and Recommendations

### 1. Optimize Images

Recommendation:

- Convert hero and gallery images to WebP or AVIF.
- Serve responsive image sizes.
- Lazy-load below-the-fold images.
- Define image width and height to reduce layout shift.

### 2. Improve Largest Contentful Paint

Recommendation:

- Compress the hero image.
- Preload the main hero image.
- Avoid heavy sliders above the fold.

### 3. Reduce JavaScript Weight

Recommendation:

- Avoid unnecessary animation libraries.
- Use route-level code splitting.
- Remove unused packages.
- Keep forms and content pages lightweight.

### 4. Optimize Fonts

Recommendation:

- Use limited font families and weights.
- Preconnect to font providers.
- Consider self-hosted fonts for production.

### 5. Use Compression and Caching

Recommendation:

- Enable Brotli or Gzip on the server.
- Use long cache headers for static assets.
- Use CDN delivery for images and static files.

## Design and UX Recommendations

1. Keep the official school identity but make the parent journey clearer.
2. Avoid cluttered menus on mobile.
3. Put admissions call-to-action above the fold.
4. Make fee, registration, and campus tour actions easy to find.
5. Reduce duplicated text and make sections scannable.
6. Place FAQ near the end of the page for SEO and parent confidence.

## Suggested Internshala Message

Dear Team,

I reviewed the assignment for the search term `Boarding schools in India` and identified the official Ecole Globale website as the relevant page. I prepared a page-speed and SEO improvement report and also created a sample improved implementation to demonstrate how the recommendations can be applied.

The attached zip includes the complete project source code and the report file named `INTERNSHIP_SUBMISSION_REPORT.md`.

Thank you for the opportunity.
