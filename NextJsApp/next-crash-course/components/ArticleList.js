import article from "../pages/article/[id]";
import articleStyles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid} key={article}>
      {articles.map((article) => (
        <ArticleItem article={article} key={article.key} />
      ))}
    </div>
  );
};

export default ArticleList;
//need key when mapping through something so the array needs to know which object comes first in array
