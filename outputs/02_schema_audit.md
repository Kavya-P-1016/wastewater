# Report 02 — Schema Markup Audit & JSON-LD Generation

**Domain:** wastewaterevaporation.com  
**Date:** 2026-02-20

---

## Audit Summary

| Page | Current Schema | Status | Action |
|------|---------------|--------|--------|
| index.html | Organization (Partial) | ✅ Done | Enhanced |
| about.html | None | ✅ Done | Added AboutPage |
| contact.html | None | ✅ Done | Added ContactPage |
| zld.html | None | ✅ Done | Added Product |
| zld_lowTds.html | None | ⚠️ Pending | Needs Product |
| ro_reject.html | None | ⚠️ Pending | Needs Product |
| high_Tds.html | None | ⚠️ Pending | Needs Product |
| high_concration.html | None | ⚠️ Pending | Needs Product |
| services.html | None | ⚠️ Pending | Needs Service |
| industry.html | None | ⚠️ Pending | Review needed |
| jobs.html | None | ⚠️ Pending | Skip (no jobs) |

---

## Implemented Schema Types

### 1. Organization Schema (index.html) ✅
- Name, Logo, URL
- Founding year (1998)
- Address (3 locations)
- Contact points
- Same-as (social profiles)
- Area served
- Service types

### 2. AboutPage Schema (about.html) ✅
- Linked to Organization
- Founder information

### 3. ContactPage Schema (contact.html) ✅
- Multiple addresses
- Phone, Email
- Organization reference

### 4. Product Schema (zld.html) ✅
- Product name and description
- Brand: Asiatic Engineers
- Manufacturer reference
- Category: Industrial Equipment
- Offer details

---

## Pending Schema Implementations

### Product Pages (zld_lowTds, ro_reject, high_Tds, high_concration)
Need Product schema with:
- Specific product names
- Individual descriptions
- Relevant keywords in description

### Services Page
Need Service schema:
- Service type
- Provider reference
- Area served

---

## JSON-LD Templates

### Product Schema Template (For remaining product pages)
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "[PRODUCT NAME]",
  "description": "[DESCRIPTION WITH KEYWORDS]",
  "brand": { "@type": "Brand", "name": "Asiatic Engineers" },
  "manufacturer": {
    "@type": "Organization",
    "name": "Asiatic Engineers",
    "url": "https://www.wastewaterevaporation.com/"
  },
  "category": "Industrial Wastewater Treatment Equipment",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock",
    "url": "[PAGE_URL]"
  }
}
```

### Service Schema Template (For services.html)
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "[SERVICE NAME]",
  "description": "[DESCRIPTION]",
  "provider": {
    "@type": "Organization",
    "name": "Asiatic Engineers",
    "url": "https://www.wastewaterevaporation.com/"
  },
  "areaServed": ["Gujarat", "India"],
  "serviceType": "[SERVICE TYPE]"
}
```

---

## Testing & Validation

Use these tools to validate:
1. **Google Rich Results Test:** https://search.google.com/test/rich-results
2. **Schema Markup Validator:** https://validator.schema.org/

---

## Next Steps

1. Add remaining product schemas
2. Add service schema
3. Test all pages with Rich Results Test
4. Monitor in Google Search Console
