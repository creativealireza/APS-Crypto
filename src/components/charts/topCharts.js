import { trending } from "./trending.js";
import { topMarketCap  } from "./topMarketCap.js";

export function topCharts() {
    const sheet = new CSSStyleSheet();

    const main = document.querySelector('.main');
    const element = `
    <div
        class="chart-row row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 text-center d-flex justify-content-around align-items-center">
    </div>
    `;

    main.insertAdjacentHTML('afterbegin', element);
    
    // add trending component
    trending();

    // add top marketcap component
    topMarketCap();

    // add CSS Styles
    sheet.replaceSync(`
        .top-size {
            min-width: 40%;
            max-width: 90%;
        }

        .coin-symbol {
            font-size: small;
        }

        .quantity {
            margin-bottom: 0.6rem;
        }
        .coin-info {
            text-decoration: none;
            color: black;
        }

        .coin-info:hover {
            color: black;
        }
    `);

    document.adoptedStyleSheets = [sheet];
}