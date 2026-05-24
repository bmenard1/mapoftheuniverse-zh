# Map of the Universe - Simplified Chinese (zh-CN) Translation Notes

## What was translated

### index.html
- `<html lang="zh-CN">` set; `<title>` changed to "宇宙地图"
- All visible page copy: cover text, flavor text, banner descriptions, sidebar labels, accordion Q&A sections (both desktop and mobile), credit section, modal dialogs, biocubes ad text
- Map axis labels: "you are here" -> "你在这里", "angle on the sky" -> "天球角度", "redshift" -> "红移", "lookback time [billions of years]" -> "回溯时间 [十亿年]"
- Banner section: "billions of years ago" -> "十亿年前", galaxy type names, descriptive paragraphs
- Credit/footer: "All Rights Reserved" -> "版权所有", "Credit + Contact" -> "致谢 + 联系方式", institution name translated
- Added Google Fonts Noto Sans SC (100-700 weights) in `<head>`

### code/code.js
- `information` object: all titles and captions translated to Chinese
- `modal_info` object: all headers and captions translated to Chinese
- Show/Hide toggle text: "Show"/"Hide" -> "显示"/"隐藏"

### style/home.css
- All `font-family` declarations updated to include "Noto Sans SC" as the primary font, with existing fonts as fallbacks

## Poster/download section
Left as-is (English) per instructions. This includes: poster type names (Multiscale, Beautiful, Educational, Vertical Banner, Horizontal Banner), download resolution labels (medium/high/very high), "order a poster" links, and "Download Resolution" headings in modals.

## Images

### Images NOT regenerated (all kept as original external URLs)
- **Logo3.png** (`Images/Logo/Logo3.png`): The server at menard.pha.jhu.edu returns HTTP 403 for direct image downloads, preventing inspection. The logo likely contains stylized English text ("Map of the Universe"), but since it cannot be downloaded for inspection or recreation, the original external URL is retained.
- **test_82.png** (`Images/Banner/test_82.png`): Same 403 issue. This is the main vertical banner image. It is a complex astronomical visualization that likely contains embedded English labels. Cannot be downloaded, inspected, or recreated.
- **Banner-Sidebar.jpg**, all map overlay images, skyview images, explanation images: These are astronomical photographs or data visualizations. Text-free or contain only minimal technical annotations. Kept as original external URLs.
- No images are committed in the source repo; all are hosted on the JHU server.

### Blocker
The JHU image server (`menard.pha.jhu.edu`) returns 403 Forbidden for all direct HTTP requests to image URLs, preventing download, inspection, and potential replacement of images with embedded English text. This is the primary reason no replacement images were generated.

## Technical notes
- CNAME file intentionally not copied (no domain assigned for Chinese version yet)
- Google Analytics tag kept as-is (same tracking ID)
- All external CDN links (Bootstrap, jQuery, Popper.js) unchanged
- No structural HTML changes; only text content was modified
