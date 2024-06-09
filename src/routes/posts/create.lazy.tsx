import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/posts/create')({
  component: () => <div>Hello /posts/create!</div>
})