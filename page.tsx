import { Header } from "@/components/header"
import { PostCard } from "@/components/post-card"
import { FilterTabs } from "@/components/filter-tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Calendar, Plus, Settings } from "lucide-react"
import Link from "next/link"

// Données de démonstration pour la communauté
const communityData = {
  name: "technologie",
  description: "Discussions sur les dernières innovations technologiques, startups, et tendances du secteur.",
  members: 125000,
  createdAt: "Créée en janvier 2020",
  icon: "💻",
}

const communityPosts = [
  {
    id: "1",
    title: "Nouvelle mise à jour de Next.js 15 - Quelles sont vos impressions ?",
    content: "La nouvelle version apporte beaucoup d'améliorations...",
    author: "dev_passionné",
    community: "technologie",
    votes: 142,
    comments: 23,
    createdAt: "2h",
    type: "text" as const,
  },
  {
    id: "3",
    title: "Mon setup de développement en 2024",
    content: "",
    author: "codeuse_pro",
    community: "technologie",
    votes: 234,
    comments: 45,
    createdAt: "6h",
    type: "image" as const,
    imageUrl: "/placeholder.svg?height=300&width=500",
  },
]

export default function CommunityPage({ params }: { params: { community: string } }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-6xl mx-auto p-4 lg:p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Contenu principal */}
          <main className="flex-1">
            {/* En-tête de la communauté */}
            <div className="bg-blue-500 text-white rounded-t-lg p-6 mb-6">
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{communityData.icon}</div>
                <div>
                  <h1 className="text-3xl font-bold">c/{communityData.name}</h1>
                  <p className="text-blue-100 mt-1">{communityData.description}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <FilterTabs />
              <Link href="/create-post">
                <Button className="bg-blue-500 hover:bg-blue-600">
                  <Plus className="w-4 h-4 mr-2" />
                  Nouveau post
                </Button>
              </Link>
            </div>

            {/* Posts de la communauté */}
            <div className="space-y-4">
              {communityPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </main>

          {/* Sidebar */}
          <aside className="w-full lg:w-80">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold mb-4">À propos de la communauté</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-gray-500" />
                    <div>
                      <div className="font-medium">{communityData.members.toLocaleString("fr-FR")} membres</div>
                      <div className="text-sm text-gray-500">234 en ligne</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-gray-500" />
                    <div className="text-sm text-gray-500">{communityData.createdAt}</div>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600">Rejoindre</Button>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Settings className="w-4 h-4 mr-2" />
                    Paramètres
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-medium mb-3">Règles de la communauté</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>1. Restez respectueux et courtois</div>
                    <div>2. Pas de spam ou de contenu promotionnel</div>
                    <div>3. Utilisez des titres descriptifs</div>
                    <div>4. Vérifiez avant de poster</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  )
}
