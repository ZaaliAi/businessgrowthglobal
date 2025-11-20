# Newsletter Generation Process Breakdown

This document outlines the automated process used to research and generate the weekly business growth newsletter.

## 1. Research Phase

The initial step involves comprehensive research using the `google_web_search` tool to gather the latest information on several key topics. The following search queries were executed to find trending articles, tools, and success stories:

*   `trending topics in business growth this week from Harvard Business Review, Forbes, Inc, and Entrepreneur magazine`
*   `best new SaaS or AI tool for business growth 2025`
*   `quick business growth hacks and tips 2025`
*   `recent business scaling success stories or case studies 2025`

The results from these searches provide the raw material for the newsletter content.

## 2. Content Curation and Generation

After the research is complete, the information is analyzed and synthesized into a structured newsletter format. The process is as follows:

1.  **Identify Key Themes:** The top 3-5 most prominent and recurring themes from the research are identified to form the "Trending This Week" section.
2.  **Select a Standout Tool:** A "Tool of the Week" is chosen from the search results based on its relevance, novelty, and potential impact on business growth.
3.  **Extract an Actionable Tip:** A practical and easy-to-implement "Quick Tip / Growth Hack" is selected from the research.
4.  **Highlight a Case Study:** A compelling "Case Study Spotlight" is chosen to illustrate a recent and relevant business success story.
5.  **Draft the Newsletter:** The curated information is then drafted into the final newsletter format, complete with an introduction, clear section headings, and concise summaries.
6.  **Generate Subject Lines:** Finally, 3-5 catchy and relevant email subject lines are generated based on the newsletter's main topics to improve open rates.

## 3. Source Information

The primary sources for the newsletter content are derived from the real-time Google Search results for the queries listed in the Research Phase. Key publications and websites that frequently appear in these results include:

*   Harvard Business Review (HBR)
*   Forbes
*   Inc. Magazine
*   Entrepreneur
*   Exploding Topics
*   Business of Apps
*   and other reputable business news outlets.

This process ensures that each newsletter is timely, relevant, and packed with actionable insights for business growth.

---

**P.S. Command Customization Options**

The `/newsletter` command can be customized using the following options to tailor the output:

*   `--audience [startup | SMB | corporate]`: Adjusts the tone, examples, and complexity of the content to better suit the specified audience.
*   `--length [short | medium | long]`: Controls the length of the newsletter. `short` might include 1-2 sections, while `long` will include all generated sections.
*   `--sections [list]`: Allows you to specify exactly which sections to include, e.g., `--sections "trending, tool"`.
*   `--keywords [list]`: Focuses the research phase on specific keywords, such as `"AI for marketing"` or `"B2B sales tactics"`.
*   `--tone [friendly | professional | thought-leader]`: Sets the overall writing style and voice of the newsletter.
*   `--research-sources [list]`: Allows you to override the default list of sources and provide your own for the research phase.