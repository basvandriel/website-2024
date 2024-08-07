import { View, Text } from "@react-pdf/renderer";
import tw from "./tailwind";

import ExperienceCVListing from "./EducationCVListing";
import { useTranslation } from "react-i18next";

const HEADER_FONT_SIZE = 16;

const EducationSection = () => {
  const {t } = useTranslation()
  return (
    <>
      <Text break
        style={[
          tw("mt-4"),
          {
            fontSize: HEADER_FONT_SIZE,
            fontFamily: "Garamond",
          },
        ]}
      >
        {t('education')}
      </Text>

      <View style={tw("gap-4 mt-4")}>
        <ExperienceCVListing
          school={"Scalda College voor Techniek en Design"}
          title={"Applicatie- en mediaontwikkeling: MBO4"}
          location={"Vlissingen"}
          start_date={"2016"}
          end_date="2019"
          current_experience={false}
          description=" Tijdens de studie werkte ik met Java en Python. Hiervoor heb ik met verschillende hobbyprojecten al ervaring op gedaan. Een voorbeeld hiervan is een ahsentiesysteem voor studenten en leraren, waar met NFC pasjes ingecheckt kon worden."
        />
        <ExperienceCVListing
          school={"Scalda College voor Techniek en Design"}
          title={"Medewerker beheer ICT: MBO3"}
          location={"Vlissingen"}
          start_date={"2015"}
          end_date="2016"
          current_experience={false}
        />
        <ExperienceCVListing
          school={"Scalda College voor Techniek en Design"}
          title={"Medewerker ICT: MBO2"}
          location={"Vlissingen"}
          start_date={"2014"}
          end_date="2015"
          current_experience={false}
        />
          <ExperienceCVListing
          school={"Scalda College voor Techniek en Design"}
          title={"Arbeids Gekwalificeerd Assistant: Handel • MBO1"}
          location={"Terneuzen"}
          start_date={"2014"}
          end_date="2015"
          current_experience={false}
        />
      </View>
    </>
  );
};

export default EducationSection;
