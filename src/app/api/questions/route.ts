import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const SPLIT_SECTIONS: Record<string, string> = {
  string_basics: "string-basics-questions.json",
  string_methods: "string-methods-questions.json",
  string_formatting: "string-formatting-questions.json",
  operator_arithmetic: "operator-arithmetic-questions.json",
  operator_comparison: "operator-comparison-questions.json",
  operator_logical: "operator-logical-questions.json",
  control_flow_if_else: "control-flow-if-else-questions.json",
  control_flow_for_loops: "control-flow-for-loops-questions.json",
  control_flow_while_loops: "control-flow-while-loops-questions.json",
  list_basics: "list-basics-questions.json",
  list_comprehension: "list-comprehension-questions.json",
  function_basics: "function-basics-questions.json",
  function_lambda: "function-lambda-questions.json",
  dictionaries: "dictionary-questions.json",
  oop_classes_basics: "oop-classes-basics-questions.json",
  oop_inheritance: "oop-inheritance-questions.json",
  oop_attributes: "oop-attributes-questions.json",
  oop_methods: "oop-methods-questions.json",
  oop_self_cls: "oop-self-cls-questions.json",
  oop_init_new_del: "oop-init-new-del-questions.json",
  oop_polymorphism: "oop-polymorphism-questions.json",
  oop_encapsulation: "oop-encapsulation-questions.json",
  oop_abstraction: "oop-abstraction-questions.json",
  error_handling: "error-handling-questions.json",
  file_handling: "file-handling-questions.json",
};

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const section = url.searchParams.get("section");

    if (section && SPLIT_SECTIONS[section]) {
      const splitPath = path.join(process.cwd(), "src", "data", SPLIT_SECTIONS[section]);
      const splitRaw = await fs.readFile(splitPath, "utf-8");
      const splitData = JSON.parse(splitRaw);
      return NextResponse.json({ key: section, ...splitData });
    }

    const filePath = path.join(process.cwd(), "src", "data", "question-bank.json");
    const raw = await fs.readFile(filePath, "utf-8");
    const bank = JSON.parse(raw);

    if (section) {
      const data = bank[section];
      if (!data) {
        return NextResponse.json({ error: `Section '${section}' not found` }, { status: 404 });
      }
      return NextResponse.json({ key: section, ...data });
    }

    return NextResponse.json(bank);
  } catch {
    return NextResponse.json({ error: "Failed to load question bank" }, { status: 500 });
  }
}