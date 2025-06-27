import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function FilterTabs() {
  return (
    <Tabs defaultValue="hot" className="w-full">
      <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
        <TabsTrigger value="hot">🔥 Populaires</TabsTrigger>
        <TabsTrigger value="new">🆕 Nouveaux</TabsTrigger>
        <TabsTrigger value="top">⭐ Top</TabsTrigger>
        <TabsTrigger value="rising">📈 Tendances</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
