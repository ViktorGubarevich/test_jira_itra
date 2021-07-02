const Footer = () => {
    return (
        <footer className="footer-container">
            <p>Created By:</p>
            <a rel="noreferrer" href="https://github.com/ViktorGubarevich/test_jira_itra" target="_blank">
                &nbsp; Viktor Gubarevich
            </a>
            <style jsx>
                {`
            footer {
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              background: rgb(163, 160, 160);
              height: 40px;
            }
          `}
            </style>
        </footer>
    );
};

export default Footer;