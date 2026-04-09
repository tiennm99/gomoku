# gomoku

A simple Gomoku game with networking. Based on [Ratel](https://github.com/ratel-online/).

## Project Structure

This is a monorepo containing the following components:

| Directory | Description | Language | Source |
|-----------|-------------|----------|--------|
| `server/` | Game server with multiplayer support | Go | [ratel-online/server](https://github.com/ratel-online/server) |
| `core/`   | Shared core logic, models, and networking | Go | [ratel-online/core](https://github.com/ratel-online/core) |
| `client/` | CLI game client | Go | [ratel-online/client](https://github.com/ratel-online/client) |
| `api/`    | API definitions | Java | [ratel-online/api](https://github.com/ratel-online/api) |

## Credits

This project is built upon the work of the [Ratel Online](https://github.com/ratel-online) organization. The original repositories are licensed under the **MIT License**.

### Original Authors & Contributors

- [ainilili](https://github.com/ainilili) — Primary author
- [feel-easy](https://github.com/feel-easy)
- [mlmdflr](https://github.com/mlmdflr)
- [mikodream](https://github.com/mikodream)
- [EldersJavas](https://github.com/EldersJavas)

See the `LICENSE` file in each subdirectory for the original MIT license terms.
