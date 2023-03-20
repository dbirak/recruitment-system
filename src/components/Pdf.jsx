import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";

Font.register({
  family: "Kanit",
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf",
});

const tw = createTw({
  theme: {
    fontFamily: {},
    extend: {
      colors: {
        custom: "#bada55",
      },
    },
  },
});

const styles = StyleSheet.create({
  page: {
    fontFamily: "Kanit",
    padding: "20px",
  },
});

const Pdf = (props) => {
  return (
      <Document>
        <Page size="A4" style={styles.page}>
          <Text style={tw("text-center text-[#394e6a]")}>
            System Rekrutacji
          </Text>
          <View style={tw("m-7")}>
            <Text style={tw("text-[14px] text-[#2563eb]")}>
              Nowe osoby:
            </Text>
            <View style={tw("m-3")}>
              {props.candidates.map((item, id) => (
                <View key={id} style={tw("m-3")}>
                  <Text style={tw("text-[11px] text-[#2563eb]")}>Imię: {item.name}</Text>
                  <Text style={tw("text-[11px] text-[#2563eb]")}>Płeć: {item.gender == 'male' ? 'Mężczyzna' : 'Kobieta'}</Text>
                  <Text style={tw("text-[11px] text-[#2563eb]")}>Opis: {item.desc}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={tw("m-7")}>
            <Text style={tw("text-[14px] text-[#ca8a04]")}>
              W rekrutacji:
            </Text>
            <View style={tw("m-3")}>
              {props.recruitment.map((item, id) => (
                <View key={id} style={tw("m-3")}>
                  <Text style={tw("text-[11px] text-[#ca8a04]")}>Imię: {item.name}</Text>
                  <Text style={tw("text-[11px] text-[#ca8a04]")}>Płeć: {item.gender == 'male' ? 'Mężczyzna' : 'Kobieta'}</Text>
                  <Text style={tw("text-[11px] text-[#ca8a04]")}>Opis: {item.desc}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={tw("m-7")}>
            <Text style={tw("text-[14px] text-[#16a34a]")}>
              Przyjęci:
            </Text>
            <View style={tw("m-3")}>
              {props.accepted.map((item, id) => (
                <View key={id} style={tw("m-3")}>
                  <Text style={tw("text-[11px] text-[#16a34a]")}>Imię: {item.name}</Text>
                  <Text style={tw("text-[11px] text-[#16a34a]")}>Płeć: {item.gender == 'male' ? 'Mężczyzna' : 'Kobieta'}</Text>
                  <Text style={tw("text-[11px] text-[#16a34a]")}>Opis: {item.desc}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={tw("m-7")}>
            <Text style={tw("text-[14px] text-[#dc2626]")}>
              Odrzuceni:
            </Text>
            <View style={tw("m-3")}>
              {props.rejected.map((item, id) => (
                <View key={id} style={tw("m-3")}>
                  <Text style={tw("text-[11px] text-[#dc2626]")}>Imię: {item.name}</Text>
                  <Text style={tw("text-[11px] text-[#dc2626]")}>Płeć: {item.gender == 'male' ? 'Mężczyzna' : 'Kobieta'}</Text>
                  <Text style={tw("text-[11px] text-[#dc2626]")}>Opis: {item.desc}</Text>
                </View>
              ))}
            </View>
          </View>
        </Page>
      </Document>
  );
};

export default Pdf;
