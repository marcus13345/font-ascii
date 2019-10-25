"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var LilDevil = {
  "0": "           \n           \n  .----.   \n /  ..  \\  \n|  /  \\  . \n'  \\  /  ' \n \\  `'  /  \n  `---''   ",
  "1": "      \n      \n .--. \n/_  | \n |  | \n |  | \n |  | \n `--' ",
  "2": "         \n         \n .----.  \n\\_,-.  | \n   .' .' \n .'  /_  \n|      | \n`------' ",
  "3": "         \n         \n .----.  \n\\_.-,  | \n  |_  <  \n.-. \\  | \n\\ `-'  / \n `---''  ",
  "4": "          \n          \n   .---.  \n  / .  |  \n / /|  |  \n/ '-'  || \n`---|  |' \n    `--'  ",
  "5": "         \n         \n.-----.  \n|   __|  \n`--.  '. \n.-  |  | \n| `-'  / \n `---''  ",
  "6": "         \n         \n  ,--.   \n /  .'   \n.  / -.  \n'  .-. \\ \n\\  `-' / \n `----'  ",
  "7": "          \n          \n.-------. \n|   _   ' \n`-' /  /  \n   .  /   \n  /  /    \n `--'     ",
  "8": "         \n         \n .----.  \n/ .-.  \\ \n\\ '-'  / \n/ /`.  \\ \n\\ '-'  / \n `---''  ",
  "9": "          \n          \n .----.   \n/ ,-.  \\  \n\\ '-'   . \n `- /  .' \n  .'  /   \n  `--'    ",
  "A": " (`-')  _  \n (OO ).-/  \n / ,---.   \n | \\ /`.\\  \n '-'|_.' | \n(|  .-.  | \n |  | |  | \n `--' `--' ",
  "B": "<-.(`-')  \n __( OO)  \n'-'---.\\  \n| .-. (/  \n| '-' `.) \n| /`'.  | \n| '--'  / \n`------'  ",
  "C": "           \n _         \n \\-,-----. \n  |  .--./ \n /_) (`-') \n ||  |OO ) \n(_'  '--'\\ \n   `-----' ",
  "D": " _(`-')    \n( (OO ).-> \n \\    .'_  \n '`'-..__) \n |  |  ' | \n |  |  / : \n |  '-'  / \n `------'  ",
  "E": " (`-')  _ \n ( OO).-/ \n(,------. \n |  .---' \n(|  '--.  \n |  .--'  \n |  `---. \n `------' ",
  "F": "           \n   <-.     \n(`-')-----.\n(OO|(_\\---'\n / |  '--. \n \\_)  .--' \n  `|  |_)  \n   `--'    ",
  "G": "           \n    .->    \n ,---(`-') \n'  .-(OO ) \n|  | .-, \\ \n|  | '.(_/ \n|  '-'  |  \n `-----'   ",
  "H": " (`-').-> \n (OO )__  \n,--. ,'-' \n|  | |  | \n|  `-'  | \n|  .-.  | \n|  | |  | \n`--' `--' ",
  "I": "  _      \n (_)     \n ,-(`-') \n | ( OO) \n |  |  ) \n(|  |_/  \n |  |'-> \n `--'    ",
  "J": "          \n          \n   <-.--. \n (`-'| ,| \n (OO |(_| \n,--. |  | \n|  '-'  / \n `-----'  ",
  "K": "<-.(`-')  \n __( OO)  \n'-'. ,--. \n|  .'   / \n|      /) \n|  .   '  \n|  |\\   \\ \n`--' '--' ",
  "L": "          \n   <-.    \n ,--. )   \n |  (`-') \n |  |OO ) \n(|  '__ | \n |     |' \n `-----'  ",
  "M": "<-. (`-')  \n   \\(OO )_ \n,--./  ,-.)\n|   `.'   |\n|  |'.'|  |\n|  |   |  |\n|  |   |  |\n`--'   `--'",
  "N": "<-. (`-')_ \n   \\( OO) )\n,--./ ,--/ \n|   \\ |  | \n|  . '|  |)\n|  |\\    | \n|  | \\   | \n`--'  `--' ",
  "O": "           \n     .->   \n(`-')----. \n( OO).-.  '\n( _) | |  |\n \\|  |)|  |\n  '  '-'  '\n   `-----' ",
  "P": " _  (`-') \n \\-.(OO ) \n _.'    \\ \n(_...--'' \n|  |_.' | \n|  .___.' \n|  |      \n`--'      ",
  "Q": " <-.(`-')  \n  __( OO)  \n '-'---\\_) \n|  .-.  |  \n|  | | <-' \n|  | |  |  \n'  '-'  '-.\n `-----'--'",
  "R": "   (`-')  \n<-.(OO )  \n,------,) \n|   /`. ' \n|  |_.' | \n|  .   .' \n|  |\\  \\  \n`--' '--' ",
  "S": " (`-').-> \n ( OO)_   \n(_)--\\_)  \n/    _ /  \n\\_..`--.  \n.-._)   \\ \n\\       / \n `-----'  ",
  "T": "(`-')      \n( OO).->   \n/    '._   \n|'--...__) \n`--.  .--' \n   |  |    \n   |  |    \n   `--'    ",
  "U": "           \n     .->   \n,--.(,--.  \n|  | |(`-')\n|  | |(OO )\n|  | | |  \\\n\\  '-'(_ .'\n `-----'   ",
  "V": "      (`-')\n     _(OO )\n,--.(_/,-.\\\n\\   \\ / (_/\n \\   /   / \n_ \\     /_)\n\\-'\\   /   \n    `-'    ",
  "W": "     .->   \n (`(`-')/`)\n,-`( OO).',\n|  |\\  |  |\n|  | '.|  |\n|  |.'.|  |\n|   ,'.   |\n`--'   '--'",
  "X": " (`-')     \n (OO )_.-> \n (_| \\_)--.\n \\  `.'  / \n  \\    .') \n  .'    \\  \n /  .'.  \\ \n`--'   '--'",
  "Y": "           \n     .->   \n ,--.'  ,-.\n(`-')'.'  /\n(OO \\    / \n |  /   /) \n `-/   /`  \n   `--'    ",
  "Z": "  (`-')    \n  ( OO).-> \n,(_/----.  \n|__,    |  \n (_/   /   \n .'  .'_   \n|       |  \n`-------'  "
};
var _default = LilDevil;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb250cy9MaWxEZXZpbC5qcyJdLCJuYW1lcyI6WyJMaWxEZXZpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTUEsUUFBUSxHQUFHO0FBQ2YsT0FBSyw0R0FEVTtBQUVmLE9BQUssZ0VBRlU7QUFHZixPQUFLLHlGQUhVO0FBSWYsT0FBSywyRkFKVTtBQUtmLE9BQUssZ0dBTFU7QUFNZixPQUFLLHdGQU5VO0FBT2YsT0FBSywwRkFQVTtBQVFmLE9BQUssZ0dBUlU7QUFTZixPQUFLLDRGQVRVO0FBVWYsT0FBSyxrR0FWVTtBQVdmLE9BQUssMEdBWFU7QUFZZixPQUFLLGlHQVpVO0FBYWYsT0FBSywwR0FiVTtBQWNmLE9BQUsseUdBZFU7QUFlZixPQUFLLGdHQWZVO0FBZ0JmLE9BQUssMEdBaEJVO0FBaUJmLE9BQUsseUdBakJVO0FBa0JmLE9BQUssZ0dBbEJVO0FBbUJmLE9BQUssd0ZBbkJVO0FBb0JmLE9BQUssZ0dBcEJVO0FBcUJmLE9BQUssa0dBckJVO0FBc0JmLE9BQUssZ0dBdEJVO0FBdUJmLE9BQUsseUdBdkJVO0FBd0JmLE9BQUssNEdBeEJVO0FBeUJmLE9BQUsseUdBekJVO0FBMEJmLE9BQUssa0dBMUJVO0FBMkJmLE9BQUsseUdBM0JVO0FBNEJmLE9BQUssa0dBNUJVO0FBNkJmLE9BQUssb0dBN0JVO0FBOEJmLE9BQUssd0dBOUJVO0FBK0JmLE9BQUssMEdBL0JVO0FBZ0NmLE9BQUssK0dBaENVO0FBaUNmLE9BQUsseUdBakNVO0FBa0NmLE9BQUssNkdBbENVO0FBbUNmLE9BQUsseUdBbkNVO0FBb0NmLE9BQUs7QUFwQ1UsQ0FBakI7ZUF1Q2VBLFEiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBMaWxEZXZpbCA9IHtcbiAgXCIwXCI6IFwiICAgICAgICAgICBcXG4gICAgICAgICAgIFxcbiAgLi0tLS0uICAgXFxuIC8gIC4uICBcXFxcICBcXG58ICAvICBcXFxcICAuIFxcbicgIFxcXFwgIC8gICcgXFxuIFxcXFwgIGAnICAvICBcXG4gIGAtLS0nJyAgIFwiLFxuICBcIjFcIjogXCIgICAgICBcXG4gICAgICBcXG4gLi0tLiBcXG4vXyAgfCBcXG4gfCAgfCBcXG4gfCAgfCBcXG4gfCAgfCBcXG4gYC0tJyBcIixcbiAgXCIyXCI6IFwiICAgICAgICAgXFxuICAgICAgICAgXFxuIC4tLS0tLiAgXFxuXFxcXF8sLS4gIHwgXFxuICAgLicgLicgXFxuIC4nICAvXyAgXFxufCAgICAgIHwgXFxuYC0tLS0tLScgXCIsXG4gIFwiM1wiOiBcIiAgICAgICAgIFxcbiAgICAgICAgIFxcbiAuLS0tLS4gIFxcblxcXFxfLi0sICB8IFxcbiAgfF8gIDwgIFxcbi4tLiBcXFxcICB8IFxcblxcXFwgYC0nICAvIFxcbiBgLS0tJycgIFwiLFxuICBcIjRcIjogXCIgICAgICAgICAgXFxuICAgICAgICAgIFxcbiAgIC4tLS0uICBcXG4gIC8gLiAgfCAgXFxuIC8gL3wgIHwgIFxcbi8gJy0nICB8fCBcXG5gLS0tfCAgfCcgXFxuICAgIGAtLScgIFwiLFxuICBcIjVcIjogXCIgICAgICAgICBcXG4gICAgICAgICBcXG4uLS0tLS0uICBcXG58ICAgX198ICBcXG5gLS0uICAnLiBcXG4uLSAgfCAgfCBcXG58IGAtJyAgLyBcXG4gYC0tLScnICBcIixcbiAgXCI2XCI6IFwiICAgICAgICAgXFxuICAgICAgICAgXFxuICAsLS0uICAgXFxuIC8gIC4nICAgXFxuLiAgLyAtLiAgXFxuJyAgLi0uIFxcXFwgXFxuXFxcXCAgYC0nIC8gXFxuIGAtLS0tJyAgXCIsXG4gIFwiN1wiOiBcIiAgICAgICAgICBcXG4gICAgICAgICAgXFxuLi0tLS0tLS0uIFxcbnwgICBfICAgJyBcXG5gLScgLyAgLyAgXFxuICAgLiAgLyAgIFxcbiAgLyAgLyAgICBcXG4gYC0tJyAgICAgXCIsXG4gIFwiOFwiOiBcIiAgICAgICAgIFxcbiAgICAgICAgIFxcbiAuLS0tLS4gIFxcbi8gLi0uICBcXFxcIFxcblxcXFwgJy0nICAvIFxcbi8gL2AuICBcXFxcIFxcblxcXFwgJy0nICAvIFxcbiBgLS0tJycgIFwiLFxuICBcIjlcIjogXCIgICAgICAgICAgXFxuICAgICAgICAgIFxcbiAuLS0tLS4gICBcXG4vICwtLiAgXFxcXCAgXFxuXFxcXCAnLScgICAuIFxcbiBgLSAvICAuJyBcXG4gIC4nICAvICAgXFxuICBgLS0nICAgIFwiLFxuICBcIkFcIjogXCIgKGAtJykgIF8gIFxcbiAoT08gKS4tLyAgXFxuIC8gLC0tLS4gICBcXG4gfCBcXFxcIC9gLlxcXFwgIFxcbiAnLSd8Xy4nIHwgXFxuKHwgIC4tLiAgfCBcXG4gfCAgfCB8ICB8IFxcbiBgLS0nIGAtLScgXCIsXG4gIFwiQlwiOiBcIjwtLihgLScpICBcXG4gX18oIE9PKSAgXFxuJy0nLS0tLlxcXFwgIFxcbnwgLi0uICgvICBcXG58ICctJyBgLikgXFxufCAvYCcuICB8IFxcbnwgJy0tJyAgLyBcXG5gLS0tLS0tJyAgXCIsXG4gIFwiQ1wiOiBcIiAgICAgICAgICAgXFxuIF8gICAgICAgICBcXG4gXFxcXC0sLS0tLS0uIFxcbiAgfCAgLi0tLi8gXFxuIC9fKSAoYC0nKSBcXG4gfHwgIHxPTyApIFxcbihfJyAgJy0tJ1xcXFwgXFxuICAgYC0tLS0tJyBcIixcbiAgXCJEXCI6IFwiIF8oYC0nKSAgICBcXG4oIChPTyApLi0+IFxcbiBcXFxcICAgIC4nXyAgXFxuICdgJy0uLl9fKSBcXG4gfCAgfCAgJyB8IFxcbiB8ICB8ICAvIDogXFxuIHwgICctJyAgLyBcXG4gYC0tLS0tLScgIFwiLFxuICBcIkVcIjogXCIgKGAtJykgIF8gXFxuICggT08pLi0vIFxcbigsLS0tLS0tLiBcXG4gfCAgLi0tLScgXFxuKHwgICctLS4gIFxcbiB8ICAuLS0nICBcXG4gfCAgYC0tLS4gXFxuIGAtLS0tLS0nIFwiLFxuICBcIkZcIjogXCIgICAgICAgICAgIFxcbiAgIDwtLiAgICAgXFxuKGAtJyktLS0tLS5cXG4oT098KF9cXFxcLS0tJ1xcbiAvIHwgICctLS4gXFxuIFxcXFxfKSAgLi0tJyBcXG4gIGB8ICB8XykgIFxcbiAgIGAtLScgICAgXCIsXG4gIFwiR1wiOiBcIiAgICAgICAgICAgXFxuICAgIC4tPiAgICBcXG4gLC0tLShgLScpIFxcbicgIC4tKE9PICkgXFxufCAgfCAuLSwgXFxcXCBcXG58ICB8ICcuKF8vIFxcbnwgICctJyAgfCAgXFxuIGAtLS0tLScgICBcIixcbiAgXCJIXCI6IFwiIChgLScpLi0+IFxcbiAoT08gKV9fICBcXG4sLS0uICwnLScgXFxufCAgfCB8ICB8IFxcbnwgIGAtJyAgfCBcXG58ICAuLS4gIHwgXFxufCAgfCB8ICB8IFxcbmAtLScgYC0tJyBcIixcbiAgXCJJXCI6IFwiICBfICAgICAgXFxuIChfKSAgICAgXFxuICwtKGAtJykgXFxuIHwgKCBPTykgXFxuIHwgIHwgICkgXFxuKHwgIHxfLyAgXFxuIHwgIHwnLT4gXFxuIGAtLScgICAgXCIsXG4gIFwiSlwiOiBcIiAgICAgICAgICBcXG4gICAgICAgICAgXFxuICAgPC0uLS0uIFxcbiAoYC0nfCAsfCBcXG4gKE9PIHwoX3wgXFxuLC0tLiB8ICB8IFxcbnwgICctJyAgLyBcXG4gYC0tLS0tJyAgXCIsXG4gIFwiS1wiOiBcIjwtLihgLScpICBcXG4gX18oIE9PKSAgXFxuJy0nLiAsLS0uIFxcbnwgIC4nICAgLyBcXG58ICAgICAgLykgXFxufCAgLiAgICcgIFxcbnwgIHxcXFxcICAgXFxcXCBcXG5gLS0nICctLScgXCIsXG4gIFwiTFwiOiBcIiAgICAgICAgICBcXG4gICA8LS4gICAgXFxuICwtLS4gKSAgIFxcbiB8ICAoYC0nKSBcXG4gfCAgfE9PICkgXFxuKHwgICdfXyB8IFxcbiB8ICAgICB8JyBcXG4gYC0tLS0tJyAgXCIsXG4gIFwiTVwiOiBcIjwtLiAoYC0nKSAgXFxuICAgXFxcXChPTyApXyBcXG4sLS0uLyAgLC0uKVxcbnwgICBgLicgICB8XFxufCAgfCcuJ3wgIHxcXG58ICB8ICAgfCAgfFxcbnwgIHwgICB8ICB8XFxuYC0tJyAgIGAtLSdcIixcbiAgXCJOXCI6IFwiPC0uIChgLScpXyBcXG4gICBcXFxcKCBPTykgKVxcbiwtLS4vICwtLS8gXFxufCAgIFxcXFwgfCAgfCBcXG58ICAuICd8ICB8KVxcbnwgIHxcXFxcICAgIHwgXFxufCAgfCBcXFxcICAgfCBcXG5gLS0nICBgLS0nIFwiLFxuICBcIk9cIjogXCIgICAgICAgICAgIFxcbiAgICAgLi0+ICAgXFxuKGAtJyktLS0tLiBcXG4oIE9PKS4tLiAgJ1xcbiggXykgfCB8ICB8XFxuIFxcXFx8ICB8KXwgIHxcXG4gICcgICctJyAgJ1xcbiAgIGAtLS0tLScgXCIsXG4gIFwiUFwiOiBcIiBfICAoYC0nKSBcXG4gXFxcXC0uKE9PICkgXFxuIF8uJyAgICBcXFxcIFxcbihfLi4uLS0nJyBcXG58ICB8Xy4nIHwgXFxufCAgLl9fXy4nIFxcbnwgIHwgICAgICBcXG5gLS0nICAgICAgXCIsXG4gIFwiUVwiOiBcIiA8LS4oYC0nKSAgXFxuICBfXyggT08pICBcXG4gJy0nLS0tXFxcXF8pIFxcbnwgIC4tLiAgfCAgXFxufCAgfCB8IDwtJyBcXG58ICB8IHwgIHwgIFxcbicgICctJyAgJy0uXFxuIGAtLS0tLSctLSdcIixcbiAgXCJSXCI6IFwiICAgKGAtJykgIFxcbjwtLihPTyApICBcXG4sLS0tLS0tLCkgXFxufCAgIC9gLiAnIFxcbnwgIHxfLicgfCBcXG58ICAuICAgLicgXFxufCAgfFxcXFwgIFxcXFwgIFxcbmAtLScgJy0tJyBcIixcbiAgXCJTXCI6IFwiIChgLScpLi0+IFxcbiAoIE9PKV8gICBcXG4oXyktLVxcXFxfKSAgXFxuLyAgICBfIC8gIFxcblxcXFxfLi5gLS0uICBcXG4uLS5fKSAgIFxcXFwgXFxuXFxcXCAgICAgICAvIFxcbiBgLS0tLS0nICBcIixcbiAgXCJUXCI6IFwiKGAtJykgICAgICBcXG4oIE9PKS4tPiAgIFxcbi8gICAgJy5fICAgXFxufCctLS4uLl9fKSBcXG5gLS0uICAuLS0nIFxcbiAgIHwgIHwgICAgXFxuICAgfCAgfCAgICBcXG4gICBgLS0nICAgIFwiLFxuICBcIlVcIjogXCIgICAgICAgICAgIFxcbiAgICAgLi0+ICAgXFxuLC0tLigsLS0uICBcXG58ICB8IHwoYC0nKVxcbnwgIHwgfChPTyApXFxufCAgfCB8IHwgIFxcXFxcXG5cXFxcICAnLScoXyAuJ1xcbiBgLS0tLS0nICAgXCIsXG4gIFwiVlwiOiBcIiAgICAgIChgLScpXFxuICAgICBfKE9PIClcXG4sLS0uKF8vLC0uXFxcXFxcblxcXFwgICBcXFxcIC8gKF8vXFxuIFxcXFwgICAvICAgLyBcXG5fIFxcXFwgICAgIC9fKVxcblxcXFwtJ1xcXFwgICAvICAgXFxuICAgIGAtJyAgICBcIixcbiAgXCJXXCI6IFwiICAgICAuLT4gICBcXG4gKGAoYC0nKS9gKVxcbiwtYCggT08pLicsXFxufCAgfFxcXFwgIHwgIHxcXG58ICB8ICcufCAgfFxcbnwgIHwuJy58ICB8XFxufCAgICwnLiAgIHxcXG5gLS0nICAgJy0tJ1wiLFxuICBcIlhcIjogXCIgKGAtJykgICAgIFxcbiAoT08gKV8uLT4gXFxuIChffCBcXFxcXyktLS5cXG4gXFxcXCAgYC4nICAvIFxcbiAgXFxcXCAgICAuJykgXFxuICAuJyAgICBcXFxcICBcXG4gLyAgLicuICBcXFxcIFxcbmAtLScgICAnLS0nXCIsXG4gIFwiWVwiOiBcIiAgICAgICAgICAgXFxuICAgICAuLT4gICBcXG4gLC0tLicgICwtLlxcbihgLScpJy4nICAvXFxuKE9PIFxcXFwgICAgLyBcXG4gfCAgLyAgIC8pIFxcbiBgLS8gICAvYCAgXFxuICAgYC0tJyAgICBcIixcbiAgXCJaXCI6IFwiICAoYC0nKSAgICBcXG4gICggT08pLi0+IFxcbiwoXy8tLS0tLiAgXFxufF9fLCAgICB8ICBcXG4gKF8vICAgLyAgIFxcbiAuJyAgLidfICAgXFxufCAgICAgICB8ICBcXG5gLS0tLS0tLScgIFwiXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbERldmlsIl19