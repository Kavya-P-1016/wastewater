#!/usr/bin/env python3
"""Rebuild blog/*.html with full site chrome + fix relative paths."""
import html as html_module
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
INDEX = (ROOT / "index.html").read_text(encoding="utf-8", errors="replace")

# Slice: body open through slide-bar end (same header + mobile menu as home)
m = re.search(
    r"(<body[^>]*>.*?<!-- slide-bar end -->)",
    INDEX,
    re.DOTALL,
)
if not m:
    raise SystemExit("Could not extract header from index.html")
HEADER_RAW = m.group(1)
# Clean extension junk on body
HEADER_RAW = re.sub(
    r"<body[^>]*>",
    '<body data-aos-easing="ease" data-aos-duration="400" data-aos-delay="0">',
    HEADER_RAW,
    count=1,
)


def rootify(fragment: str) -> str:
    fragment = fragment.replace('href="assets/', 'href="../assets/')
    fragment = fragment.replace('src="assets/', 'src="../assets/')
    fragment = re.sub(
        r'href="([a-zA-Z0-9_.#-]+\.html[^"]*)"',
        lambda m: f'href="../{m.group(1)}"',
        fragment,
    )
    return fragment


HEADER = rootify(HEADER_RAW)

CSS_LINKS = """
	<link rel="stylesheet" href="../assets/css/bootstrap.min.css">
	<link rel="stylesheet" href="../assets/css/font-css.css">
	<link rel="stylesheet" href="../assets/css/animate.min.css">
	<link rel="stylesheet" href="../assets/css/swiper-bundle.min.css">
	<link rel="stylesheet" href="../assets/css/all.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer">
	<link rel="stylesheet" href="../assets/css/nice-select.css">
	<link rel="stylesheet" href="../assets/css/magnific-popup.css">
	<link rel="stylesheet" href="../assets/css/metisMenu.css">
	<link rel="stylesheet" href="../assets/css/aos.css">
	<link rel="stylesheet" href="../assets/css/spacing.css">
	<link rel="stylesheet" href="../assets/css/main.css">
	<link rel="stylesheet" href="../assets/css/footer-fix.css">
	<link rel="stylesheet" href="../assets/css/mobile-optimization.css">
	<link rel="stylesheet" href="../assets/css/blog-article.css">
"""

INLINE_NAV = """
    <style>
    .main-menu .menu-list {
        white-space: nowrap !important;
        flex-wrap: nowrap !important;
    }
    .main-menu .menu-list > li {
        white-space: nowrap !important;
    }
    .main-menu .menu-list > li > a {
        white-space: nowrap !important;
    }
    </style>
    <style>
    .theme-main-menu, .main-header-area {
        z-index: 9999 !important;
        position: relative !important;
    }
    .main-menu ul li ul.sub-menu {
        z-index: 10000 !important;
    }
    .main-menu .menu-list {
        flex-wrap: nowrap !important;
        white-space: nowrap !important;
        justify-content: flex-start !important;
    }
    .main-menu .menu-list > li {
        flex-shrink: 0 !important;
    }
    .main-menu .menu-list > li > a {
        font-size: 14px !important;
        padding: 0 10px !important;
    }
    header {
        overflow: visible !important;
    }
    </style>
    <style>
    .main-menu {
        overflow: visible !important;
    }
    .main-menu ul.menu-list {
        display: flex !important;
        flex-wrap: nowrap !important;
        white-space: nowrap !important;
        justify-content: flex-start !important;
    }
    .main-menu ul.menu-list > li {
        flex-shrink: 0 !important;
        white-space: nowrap !important;
    }
    .main-menu ul.menu-list > li > a {
        white-space: nowrap !important;
        font-size: 13px !important;
        padding: 0 8px !important;
    }
    header, .theme-main-menu, .main-header-area {
        overflow: visible !important;
        max-width: 100% !important;
    }
    .main-menu ul li ul.sub-menu {
        z-index: 99999 !important;
        position: absolute !important;
    }
    .theme-main-menu {
        z-index: 9999 !important;
    }
    </style>
"""

GTAG = """
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-GMWWZ216DV"></script>
	<script>
	window.dataLayer = window.dataLayer || [];
	function gtag() {dataLayer.push(arguments);}
	gtag('js', new Date());
	gtag('config', 'G-GMWWZ216DV');
	</script>
"""

SCRIPTS = """
	<script src="../assets/js/jquery-2.2.4.min.js"></script>
	<script src="../assets/js/popper.min.js"></script>
	<script src="../assets/js/bootstrap.min.js"></script>
	<script src="../assets/js/jquery.meanmenu.js"></script>
	<script src="../assets/js/swiper-bundle.min.js"></script>
	<script src="../assets/js/jquery.easypiechart.min.js"></script>
	<script src="../assets/js/jquery.counterup.min.js"></script>
	<script src="../assets/js/jquery.magnific-popup.min.js"></script>
	<script src="../assets/js/metisMenu.min.js"></script>
	<script src="../assets/js/wow.min.js"></script>
	<script src="../assets/js/jquery.waypoints.min.js"></script>
	<script src="../assets/js/aos.js"></script>
	<script src="../assets/js/jquery.nice-select.min.js"></script>
	<script src="../assets/js/jquery-ui.js"></script>
	<script src="../assets/js/jquery.scrollUp.min.js"></script>
	<script src="../assets/js/plugins.js"></script>
	<script src="../assets/js/footer-loader.js"></script>
	<script src="../assets/js/main.js"></script>
"""


def strip_h1(html: str) -> str:
    return re.sub(r"<h1[^>]*>.*?</h1>\s*", "", html, count=1, flags=re.DOTALL)


def extract_article(path: Path) -> tuple[str, str, str, str, str]:
    raw = path.read_text(encoding="utf-8", errors="replace")
    title_m = re.search(r"<title>([^<]+)</title>", raw)
    title = title_m.group(1).strip() if title_m else path.stem
    desc_m = re.search(
        r'<meta\s+name="description"\s+content="([^"]*)"', raw
    )
    desc = desc_m.group(1) if desc_m else ""
    canon_m = re.search(
        r'<link\s+rel="canonical"\s+href="([^"]*)"', raw
    )
    canonical = canon_m.group(1) if canon_m else ""
    ld_m = re.search(
        r'<script\s+type="application/ld\+json">\s*(\{.*?\})\s*</script>',
        raw,
        re.DOTALL,
    )
    ld = ld_m.group(1).strip() if ld_m else ""
    art_m = re.search(r"<article[^>]*>(.*?)</article>", raw, re.DOTALL)
    if art_m:
        inner = art_m.group(1).strip()
    else:
        # zld-systems style: post-content body (skip cheap header/footer)
        pc = re.search(
            r'<div class="post-content">\s*<div class="container">(.*)</div>\s*</div>\s*<footer',
            raw,
            re.DOTALL,
        )
        inner = pc.group(1).strip() if pc else ""
        inner = re.sub(r"<a[^>]*back-link[^>]*>.*?</a>\s*", "", inner, flags=re.DOTALL)
    inner = fix_typos(inner)
    inner_no_h1 = strip_h1(inner)
    return title, desc, canonical, ld, inner_no_h1


def fix_typos(html: str) -> str:
    return html.replace("CAPEEX", "CAPEX")


def build_page(
    filename: str,
    title: str,
    desc: str,
    canonical: str,
    ld_json: str,
    article_inner: str,
) -> str:
    ld_block = ""
    if ld_json:
        ld_block = f'\t<script type="application/ld+json">\n{ld_json}\n\t</script>\n'
    meta_desc = (
        f'\t<meta name="description" content="{html_module.escape(desc, quote=True)}">\n'
        if desc
        else ""
    )
    canon_line = f'\t<link rel="canonical" href="{canonical}">\n' if canonical else ""

    main_content = f"""
		<main>
			<div class="page-title-area pt-120 pb-80 pt-lg-80 pb-lg-60">
				<div class="container">
					<div class="row">
						<div class="col-12">
							<div class="page-title-wrapper text-center">
								<nav class="blog-breadcrumb" aria-label="Breadcrumb">
									<a href="../index.html">Home</a>
									<span class="mx-2">/</span>
									<a href="../blog.html">Blog</a>
									<span class="mx-2">/</span>
									<span aria-current="page">Article</span>
								</nav>
								<h1 class="section__title__one blog-article-title mb-0">{html_module.escape(title)}</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section class="blog-article-section pt-0 pb-120 pb-lg-80">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-xl-9 col-lg-10">
							<article class="blog-article-prose">
{article_inner}
							</article>
							<div class="mt-50 pt-40 border-top d-flex flex-wrap gap-3">
								<a href="../blog.html" class="ht_btn hover-bg"><span>Back to blog</span></a>
								<a href="../contact.html" class="ht_btn border_btn"><span>Contact us</span></a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
"""

    return f"""<!DOCTYPE html>
<html class="no-js" lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
{GTAG}
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>{html_module.escape(title)}</title>
{meta_desc}{canon_line}
	<link rel="shortcut icon" type="image/x-icon" href="../assets/img/favicon.png">
{CSS_LINKS}
{INLINE_NAV}
{ld_block}</head>
{HEADER}
{main_content}
		<div id="footer-container"></div>
	</div>
{SCRIPTS}
</body>
</html>
"""


def main():
    blog_dir = ROOT / "blog"
    for name in [
        "zld-guide-2024.html",
        "leachate-treatment-guide.html",
        "ro-reject-treatment-guide.html",
        "zld-cost-comparison.html",
        "zld-systems.html",
    ]:
        path = blog_dir / name
        title, desc, canonical, ld, inner = extract_article(path)
        # Title in <title> may include site name; keep for browser tab
        page = build_page(name, title, desc, canonical, ld, inner)
        path.write_text(page, encoding="utf-8")
        print("Wrote", path)


if __name__ == "__main__":
    main()
