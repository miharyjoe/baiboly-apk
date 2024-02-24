import React from "react";
import { ScrollView, Text, View } from "react-native";

interface BibleData {
  meta: {
    name: string;
    order: number;
    chapter_number: number;
  };
  [key: string]: { [key: string]: string };
}

interface BibleProps {
  data: BibleData;
}

export const BibleChapter: React.FC<BibleProps> = ({ data }) => {
  const { meta, ...chapters } = data;

  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
          {meta.name} {meta.chapter_number}
        </Text>
        {Object.keys(chapters).map((chapter, index) => (
          <View key={index} style={{ marginBottom: 20 }}>
            <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
              Chapter {chapter}
            </Text>
            {Object.keys(chapters[chapter]).map((verse, vIndex) => (
              <Text key={vIndex}>
                <Text style={{ fontWeight: "bold" }}>{parseInt(verse)}</Text>{" "}
                {chapters[chapter][verse]}
              </Text>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
