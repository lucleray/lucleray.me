import { Layout, H1, H2, H3, Card, A } from '../components/system'
import articles from '../lib/articles'
import projects from '../lib/projects'
import links from '../lib/links'

const Presentation = () => (
  <section aria-labelledby="presentation-title">
    <H1 id="presentation-title">hi, i'm luc test1</H1>
    <Card>
      I'm a french software engineer working a fdfs t fdsfdsdfs{' '}
      <A href="https://vercel.com">Vercel</A>, building a platform for developers to
      deploy their applications to the cloud.
    </Card>
    <Card>
      I started learning about building websites{' '}
      <A href="http://lu.leray.free.fr/acceuil.html">15 years ago</A> with
      XHTML, <A href="https://notepad-plus-plus.org/">Notepad++</A> and{' '}
      <A href="http://www.easyphp.org/">EasyPHP</A>.
    </Card>
    <Card>
      Previously, I cofounded <A href="https://sequence.work">Sequence.work</A>,
      a start-up that helped data scientists to annotate datasets.
    </Card>
    <Card>
      I am on <A href="https://twitter.com/lucleray">Twitter</A> and{' '}
      <A href="https://github.com/lucleray">Github</A>.
    </Card>
  </section>
)

const Articles = () => (
  <section aria-labelledby="articles-title">
    <H2 id="articles-title">articles</H2>
    <div>
      {articles.map(article => (
        <Card key={article.id} noHover>
          <span>{article.date}</span> –{' '}
          <A href={article.url}>{article.title}</A> {article.about}
        </Card>
      ))}
    </div>
  </section>
)

const Photos = () => (
  <section aria-labelledby="photos-title">
    <H2 id="photos-title">photos</H2>
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <A href="/photos">Go to the Photos page →</A>
    </div>
  </section>
)

const Projects = () => (
  <section aria-labelledby="projects-title">
    <H2 id="projects-title">projects</H2>
    <div>
      {projects.map(project => (
        <Card key={project.id} noHover>
          <span>{project.date}</span> –{' '}
          <A href={project.url}>
            {project.title} {project.about && ` – ${project.about}`}
          </A>
        </Card>
      ))}
    </div>
  </section>
)

const Links = () => (
  <section aria-labelledby="links-title">
    <H2 id="links-title">links</H2>
    <div>
      {links.map(link => (
        <Card key={link.id} noHover>
          <A href={link.url}>{link.title}</A> {link.about}
        </Card>
      ))}
    </div>
  </section>
)

export default () => (
  <Layout meta={{ title: 'Luc Leray' }}>
    <main>
      <Presentation />
      <Articles />
      <Photos />
      <Projects />
      <Links />
    </main>
  </Layout>
)
