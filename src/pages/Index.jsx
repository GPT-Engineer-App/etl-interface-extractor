import React, { useState } from "react";
import { Box, Heading, FormControl, FormLabel, Input, Select, Textarea, Button, Code, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  const [field, setField] = useState("");
  const [format, setFormat] = useState("sql");
  const [extractionInfo, setExtractionInfo] = useState("");
  const [inputData, setInputData] = useState("");
  const [previewData, setPreviewData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Implement actual ETL logic here
    // For now, just display the input data with the extracted field highlighted
    let preview = inputData;
    if (format === "sql" || format === "csv") {
      preview = preview.replace(new RegExp(extractionInfo, "g"), `<mark>${extractionInfo}</mark>`);
    } else if (format === "json") {
      preview = preview.replace(new RegExp(`"${extractionInfo}":\\s*".*?"`, "g"), `<mark>"${extractionInfo}": "..."</mark>`);
    } else if (format === "txt") {
      const regex = new RegExp(extractionInfo, "g");
      preview = preview.replace(regex, `<mark>${extractionInfo}</mark>`);
    }

    setPreviewData(preview);
  };

  return (
    <Box maxWidth="800px" margin="auto" padding={8}>
      <Heading as="h1" size="xl" marginBottom={8}>
        ETL Interface
      </Heading>

      <form onSubmit={handleSubmit}>
        <VStack spacing={6} align="stretch">
          <FormControl>
            <FormLabel>Field to extract</FormLabel>
            <Input value={field} onChange={(e) => setField(e.target.value)} />
          </FormControl>

          <FormControl>
            <FormLabel>Input format</FormLabel>
            <Select value={format} onChange={(e) => setFormat(e.target.value)}>
              <option value="sql">SQL</option>
              <option value="csv">CSV</option>
              <option value="json">JSON</option>
              <option value="txt">Text</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Extraction Info</FormLabel>
            <Input value={extractionInfo} onChange={(e) => setExtractionInfo(e.target.value)} placeholder={format === "sql" || format === "csv" ? "Enter column name" : format === "json" ? "Enter key or path to key" : "Enter delimiter or regex"} />
          </FormControl>

          <FormControl>
            <FormLabel>Input Data</FormLabel>
            <Textarea value={inputData} onChange={(e) => setInputData(e.target.value)} height="200px" />
          </FormControl>

          <Button type="submit" colorScheme="blue">
            Extract
          </Button>
        </VStack>
      </form>

      {previewData && (
        <Box marginTop={12}>
          <Heading as="h2" size="lg" marginBottom={4}>
            Results Preview
          </Heading>
          <Code display="block" whiteSpace="pre-wrap" padding={4} backgroundColor="gray.100" dangerouslySetInnerHTML={{ __html: previewData }}></Code>
        </Box>
      )}
    </Box>
  );
};

export default Index;
