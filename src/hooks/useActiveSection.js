import { useState, useEffect } from 'react'

const SECTIONS = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'certifications', 'contact']

export function useActiveSection() {
  const [activeId, setActiveId] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
            break
          }
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return activeId
}
