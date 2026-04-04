"use client";

import Layout from "@/components/Layout";
import ThemeColor from "@/components/ThemeColor";
import { useEffect } from "react";

export default function TripAdvisorWidget() {
    useEffect(() => {
        // Load TripAdvisor script dynamically
        const script = document.createElement("script");
        script.src =
            "https://www.jscache.com/wejs?wtype=selfserveprop&uniq=873&locationId=24175549&lang=en_US&rating=true&nreviews=4&writereviewlink=true&popIdx=true&iswide=true&border=true&display_version=2";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <Layout fullWidth backgroundColor={ThemeColor.whiteHome}>
                <div
                    id="TA_selfserveprop873"
                    className="TA_selfserveprop"
                    dangerouslySetInnerHTML={{
                        __html: `
          <ul id="OklyifTgT" class="TA_links Wqmlf5xsGz">
            <li id="NlR67fHTT" class="wcSwZirJSGYS">
              <a target="_blank" href="https://www.tripadvisor.com/Attraction_Review-g189158-d24175549-Reviews-Sip_Wine_Tours-Lisbon_Lisbon_District_Central_Portugal.html">
                <img src="https://www.tripadvisor.com/img/cdsi/img2/branding/v2/Tripadvisor_lockup_horizontal_secondary_registered-11900-2.svg" alt="TripAdvisor"/>
              </a>
            </li>
          </ul>
        `,
                    }}
                ></div>
            </Layout>

        </>
    );
}
