import { ArrowUp, ArrowDown, MessageCircle, Share2, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

interface Post {
  id: string
  title: string
  content: string
  author: string
  community: string
  votes: number
  comments: number
  createdAt: string
  type: "text" | "image" | "link" | "poll"
  imageUrl?: string
}

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-0">
        <div className="flex">
          {/* Votes */}
          <div className="flex flex-col items-center p-4 bg-gray-50 border-r">
            <Button variant="ghost" size="sm" className="p-1 h-auto">
              <ArrowUp className="w-4 h-4" />
            </Button>
            <span className="text-sm font-medium py-1">{post.votes}</span>
            <Button variant="ghost" size="sm" className="p-1 h-auto">
              <ArrowDown className="w-4 h-4" />
            </Button>
          </div>

          {/* Contenu */}
          <div className="flex-1 p-4">
            {/* En-tête */}
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
              <Link href={`/c/${post.community}`} className="hover:underline">
                c/{post.community}
              </Link>
              <span>•</span>
              <span>Posté par</span>
              <Link href={`/u/${post.author}`} className="hover:underline">
                u/{post.author}
              </Link>
              <span>•</span>
              <span>{post.createdAt}</span>
            </div>

            {/* Titre */}
            <Link href={`/post/${post.id}`}>
              <h2 className="text-lg font-semibold text-gray-900 hover:text-blue-600 mb-2">{post.title}</h2>
            </Link>

            {/* Contenu selon le type */}
            {post.type === "text" && post.content && <p className="text-gray-700 mb-3 line-clamp-3">{post.content}</p>}

            {post.type === "image" && post.imageUrl && (
              <div className="mb-3">
                <Image
                  src={post.imageUrl || "/placeholder.svg"}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="rounded-lg max-h-96 object-cover"
                />
              </div>
            )}

            {post.type === "poll" && (
              <div className="mb-3 p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-blue-700">Sondage actif</span>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-500">
                <MessageCircle className="w-4 h-4 mr-1" />
                {post.comments} commentaires
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-500">
                <Share2 className="w-4 h-4 mr-1" />
                Partager
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-500">
                <Bookmark className="w-4 h-4 mr-1" />
                Sauvegarder
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
