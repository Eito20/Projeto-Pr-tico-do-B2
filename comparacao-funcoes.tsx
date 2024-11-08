"use client"

import { useState, useEffect } from 'react'
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Função para simular a medição de tempo (já que não podemos executar o código real aqui)
const simularMedicao = () => {
  return {
    original: Math.random() * 0.5 + 0.5,
    otimizada: Math.random() * 0.3 + 0.2
  }
}

export default function Component() {
  const [dados, setDados] = useState([])

  useEffect(() => {
    const novosDados = Array.from({ length: 10 }, (_, i) => {
      const tempos = simularMedicao()
      return {
        iteracao: i + 1,
        original: tempos.original,
        otimizada: tempos.otimizada
      }
    })
    setDados(novosDados)
  }, [])

  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>Comparação de Funções de Geração de Números Aleatórios</CardTitle>
        <CardDescription>Tempo médio de execução (ms) por iteração</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={dados} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="iteracao" label={{ value: "Iteração", position: "insideBottom", offset: -5 }} />
              <YAxis label={{ value: "Tempo (ms)", angle: -90, position: "insideLeft" }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="original" fill="hsl(var(--primary))" name="Função Original" />
              <Bar dataKey="otimizada" fill="hsl(var(--secondary))" name="Função Otimizada" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}