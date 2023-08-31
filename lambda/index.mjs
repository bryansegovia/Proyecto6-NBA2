import AWS from "aws-sdk";
const dynamo = new AWS.DynamoDB.DocumentClient();

const tableName = "NBA-Players";

export const handler = async (event) => {
  let response = {
    data: [],
    error: "",
  };

  try {
    const results = await dynamo.scan({ TableName: tableName }).promise();
    response.data = results.Items;
  } catch (error) {
    console.error("Error al recuperar datos de DynamoDB", error);
    response.error = "Error al recuperar datos";
  }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(response),
  };
};
