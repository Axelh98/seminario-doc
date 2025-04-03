"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PlusCircle, MessageSquare, LinkIcon } from "lucide-react"

interface Question {
  id: string
  text: string
  linkedTo?: string
}

export function Questions() {
  const [questions, setQuestions] = useState<Question[]>([
    { id: "1", text: "How do I install the package?", linkedTo: "installation" },
    { id: "2", text: "Where do I find configuration options?", linkedTo: "configuration" },
    { id: "3", text: "What components are available?" },
  ])
  const [newQuestion, setNewQuestion] = useState("")

  const addQuestion = () => {
    if (newQuestion.trim()) {
      setQuestions([...questions, { id: Date.now().toString(), text: newQuestion }])
      setNewQuestion("")
    }
  }

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Questions</h3>
        <Button variant="ghost" size="sm">
          <PlusCircle className="h-4 w-4 mr-2" />
          Add All
        </Button>
      </div>

      <div className="space-y-4 mb-6">
        {questions.map((question) => (
          <div key={question.id} className="p-3 bg-background rounded-md border flex items-start gap-3">
            <MessageSquare className="h-4 w-4 mt-1 flex-shrink-0 text-muted-foreground" />
            <div className="flex-1 text-sm">
              {question.text}
              {question.linkedTo && (
                <div className="mt-1 flex items-center text-xs text-muted-foreground">
                  <LinkIcon className="h-3 w-3 mr-1" />
                  Linked to: {question.linkedTo}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        <div className="flex gap-2">
          <Input
            placeholder="Add a question..."
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            className="text-sm"
          />
          <Button size="sm" onClick={addQuestion}>
            Add
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          Questions can be linked to specific sections in your documentation.
        </p>
      </div>
    </div>
  )
}

